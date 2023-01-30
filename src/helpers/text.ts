const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et rhoncus erat ornare ut gravida sed tempor ut. A tortor morbi etiam dui. Facilisis faucibus in vitae, neque bibendum praesent eu faucibus. Tellus enim cras leo vitae non ullamcorper consectetur velit. Ullamcorper ornare turpis velit faucibus auctor dui euismod quam. Sit integer nulla nisl, sit diam leo. Tellus urna vitae pellentesque pharetra ac velit aliquet arcu est.';

export const getText = (length?: number): string => text.slice(0, length && Math.min(text.length, length));

export default getText;
