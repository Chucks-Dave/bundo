import { FAQItem } from "./faqitems";

interface FAQSectionProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <div className="">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          defaultOpen={index === 0}
        />
      ))}
    </div>
  );
}
