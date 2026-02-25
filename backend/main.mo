import Time "mo:core/Time";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  let inquiries = Map.empty<Text, Inquiry>();

  type Inquiry = {
    id : Text;
    name : Text;
    email : Text;
    phone : Text;
    destination : Text;
    travelDates : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Text.compare(inquiry1.id, inquiry2.id);
    };
  };

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, phone : Text, destination : Text, travelDates : Text, message : Text) : async () {
    let timestamp = Time.now();
    let id = timestamp.toText();

    let inquiry : Inquiry = {
      id;
      name;
      email;
      phone;
      destination;
      travelDates;
      message;
      timestamp;
    };

    inquiries.add(id, inquiry);
  };

  public shared ({ caller }) func getAllInquiries() : async [Inquiry] {
    let inquiryArray = inquiries.values().toArray();
    if (inquiryArray.size() == 0) { Runtime.trap("No inquiries found") };
    inquiryArray.sort();
  };
};
