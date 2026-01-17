import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Calendar, Car, Phone, Mail } from "lucide-react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    vehicle: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Booking submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pickup Location */}
        <div className="space-y-2">
          <Label htmlFor="pickup" className="text-cream-muted text-sm font-body font-medium flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Pickup Location
          </Label>
          <Input
            id="pickup"
            placeholder="Airport, Hotel, Address..."
            className="input-luxury h-12 rounded-md"
            value={formData.pickup}
            onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
          />
        </div>

        {/* Drop-off Location */}
        <div className="space-y-2">
          <Label htmlFor="dropoff" className="text-cream-muted text-sm font-body font-medium flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Drop-off Location
          </Label>
          <Input
            id="dropoff"
            placeholder="Destination address..."
            className="input-luxury h-12 rounded-md"
            value={formData.dropoff}
            onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
          />
        </div>

        {/* Date */}
        <div className="space-y-2">
          <Label htmlFor="date" className="text-cream-muted text-sm font-body font-medium flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            Date
          </Label>
          <Input
            id="date"
            type="date"
            className="input-luxury h-12 rounded-md"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>

        {/* Time */}
        <div className="space-y-2">
          <Label htmlFor="time" className="text-cream-muted text-sm font-body font-medium flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            Time
          </Label>
          <Input
            id="time"
            type="time"
            className="input-luxury h-12 rounded-md"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          />
        </div>

        {/* Vehicle Type */}
        <div className="space-y-2">
          <Label htmlFor="vehicle" className="text-cream-muted text-sm font-body font-medium flex items-center gap-2">
            <Car className="w-4 h-4 text-primary" />
            Vehicle Type
          </Label>
          <Select
            value={formData.vehicle}
            onValueChange={(value) => setFormData({ ...formData, vehicle: value })}
          >
            <SelectTrigger className="input-luxury h-12 rounded-md">
              <SelectValue placeholder="Select vehicle" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              <SelectItem value="escalade">Cadillac Escalade</SelectItem>
              <SelectItem value="sedan">Executive Sedan</SelectItem>
              <SelectItem value="sprinter">Mercedes Sprinter Van</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-cream-muted text-sm font-body font-medium flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(404) 000-0000"
            className="input-luxury h-12 rounded-md"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      </div>

      {/* Email - Full Width */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-cream-muted text-sm font-body font-medium flex items-center gap-2">
          <Mail className="w-4 h-4 text-primary" />
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          className="input-luxury h-12 rounded-md"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button
          type="submit"
          className="btn-gold h-14 text-base font-semibold tracking-wider uppercase rounded-md flex-1"
        >
          Book Now
        </Button>
        <Button
          type="button"
          variant="outline"
          className="btn-gold-outline h-14 text-base font-semibold tracking-wider uppercase rounded-md flex-1"
        >
          Get a Quote
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;
