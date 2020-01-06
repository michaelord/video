import {useIntersection} from 'components/hooks';
import {getModifiers} from 'components/libs';
import React, {useRef} from 'react';
import './YouTube.scss';

export type YouTubeProps = {};

export const YouTube = (props: YouTubeProps) => {
	const base: string = 'youtube';

	const ref = useRef(null);

	const atts: object = {
		ref,
		className: getModifiers(base, {}),
	};

	const intersecting = useIntersection(ref, {
		threshold: 1,
		// once:true
	});

	return (
		<div {...atts} data-intersecting={intersecting ? 'true' : 'false'}>
			<div>
				<div></div>
			</div>
		</div>
	);
};
