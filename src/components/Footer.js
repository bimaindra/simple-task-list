const Footer = ({ props }) => {
  return (
    <footer className='py-6 flex justify-center'>
      <p className='font-mono text-sm'>
        <span>
          &copy; 2021 | made with ❤️ by {''}
          <a
            href='https://github.com/wongdarjo'
            rel='noreferrer'
            target='_blank'
          >
            @bimaindraa
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
