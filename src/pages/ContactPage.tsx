import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Clock, CheckCircle2, Send, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    contactMethod: 'email',
    email: '',
    phone: '',
    serviceCategory: '',
    problem: '',
    expectedSolution: '',
    selectedDate: undefined as Date | undefined,
    selectedTime: '',
    meetingPrep: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceCategories = [
    'Tech Development',
    'AI Development & Services', 
    'Design & Branding',
    'Consultation',
    'Other'
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string | Date | undefined) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg text-center space-y-6"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">Thank You!</h1>
            <p className="text-lg text-muted-foreground">
              We've received your consultation request and will get back to you within 24 hours.
            </p>
            <Button onClick={() => navigate('/')} className="mt-6">
              Return Home
            </Button>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
              Let's Build Something
              <br />
              <span className="gradient-text">Amazing Together</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge technology and AI? 
              Let's discuss your project and schedule a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-32 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 bg-card/50 p-8 rounded-2xl border border-border/50 backdrop-blur-sm"
          >
            {/* Contact Method */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">How can we reach you?</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-method">Preferred Contact Method</Label>
                  <Select 
                    value={formData.contactMethod} 
                    onValueChange={(value) => handleInputChange('contactMethod', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email
                        </div>
                      </SelectItem>
                      <SelectItem value="phone">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Phone
                        </div>
                      </SelectItem>
                      <SelectItem value="both">Both Email & Phone</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  {(formData.contactMethod === 'email' || formData.contactMethod === 'both') && (
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  )}
                  {(formData.contactMethod === 'phone' || formData.contactMethod === 'both') && (
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Service Category & Problem */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Tell us about your needs</Label>
              
              <div className="space-y-2">
                <Label htmlFor="service-category">Service Category *</Label>
                <Select 
                  value={formData.serviceCategory} 
                  onValueChange={(value) => handleInputChange('serviceCategory', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service category" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="problem">What problem are you facing? *</Label>
                <Textarea
                  id="problem"
                  value={formData.problem}
                  onChange={(e) => handleInputChange('problem', e.target.value)}
                  placeholder="Describe the challenges or issues you're currently experiencing..."
                  className="min-h-[100px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expected-solution">What solution are you expecting?</Label>
                <Textarea
                  id="expected-solution"
                  value={formData.expectedSolution}
                  onChange={(e) => handleInputChange('expectedSolution', e.target.value)}
                  placeholder="Describe your ideal outcome or solution..."
                  className="min-h-[100px]"
                />
              </div>
            </div>

            {/* Schedule Call */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Schedule a consultation call</Label>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Select Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.selectedDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.selectedDate ? format(formData.selectedDate, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.selectedDate}
                        onSelect={(date) => handleInputChange('selectedDate', date)}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time-slot">Select Time</Label>
                  <Select 
                    value={formData.selectedTime} 
                    onValueChange={(value) => handleInputChange('selectedTime', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose time">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {formData.selectedTime || "Choose time"}
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="meeting-prep">What should we be ready with before the meeting?</Label>
                <Textarea
                  id="meeting-prep"
                  value={formData.meetingPrep}
                  onChange={(e) => handleInputChange('meetingPrep', e.target.value)}
                  placeholder="Documents, questions, specific topics to discuss, technical requirements, etc."
                  className="min-h-[80px]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full h-14 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Submitting...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Get Free Consultation
                  </div>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;