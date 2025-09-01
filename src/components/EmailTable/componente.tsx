interface EmailTruncationProps {
  maxVisible: number;
}

const truncarEmails = ({ emails, maxVisible }: EmailTruncationProps): string => {
  if (emails.length <= maxVisible) {
	return emails.join(', ');
  } else {
	const visiveis = emails.slice(0, maxVisible).join(', ');
	return `${visiveis}, ...`;
  }
};
