function CardWrapper(props) {
	const { id, src, name } = props.data;
	const { handleClick } = props;
	return (
		<div id={id} className='driverCard' onClick={handleClick}>
			<img src={src} alt='' />
			<div className='description'>
				<p className='name'>{name}</p>
				<p className='number'>#{id}</p>
			</div>
		</div>
	);
}

export default CardWrapper;
