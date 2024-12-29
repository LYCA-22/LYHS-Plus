import React from 'react'
import { Link, useLocation } from 'react-router-dom';

    export function HomeIcon() {
        const location = useLocation();
        const currentPath = location.pathname;
        const renderIcon = () => {
            if (currentPath === '/'){
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35"
                         viewBox="0 0 64 64">
                        <path
                            d="M 32 8 C 31.08875 8 30.178047 8.3091875 29.435547 8.9296875 L 8.8007812 26.171875 C 8.0357812 26.810875 7.7634844 27.925203 8.2714844 28.783203 C 8.9184844 29.875203 10.35025 30.088547 11.28125 29.310547 L 12 28.710938 L 12 47 C 12 49.761 14.239 52 17 52 L 31 52 C 32.657 52 34 50.657 34 49 L 34 39 C 34 38.448 34.448 38 35 38 L 41 38 C 41.552 38 42 38.448 42 39 L 42 49 C 42 50.657 43.343 52 45 52 L 47 52 C 49.761 52 52 49.761 52 47 L 52 28.712891 L 52.71875 29.3125 C 53.09275 29.6255 53.546047 29.777344 53.998047 29.777344 C 54.693047 29.777344 55.382672 29.416656 55.763672 28.722656 C 56.228672 27.874656 55.954891 26.803594 55.212891 26.183594 L 34.564453 8.9296875 C 33.821953 8.3091875 32.91125 8 32 8 z M 21 28 L 26 28 C 26.552 28 27 28.448 27 29 L 27 36 C 27 36.552 26.552 37 26 37 L 21 37 C 20.448 37 20 36.552 20 36 L 20 29 C 20 28.448 20.448 28 21 28 z"></path>
                    </svg>
                )
            } else {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35"
                         viewBox="0 0 64 64">
                        <path
                            d="M 32 8 C 31.08875 8 30.178047 8.3091875 29.435547 8.9296875 L 8.8007812 26.171875 C 8.0357812 26.810875 7.7634844 27.925203 8.2714844 28.783203 C 8.9184844 29.875203 10.35025 30.088547 11.28125 29.310547 L 12 28.710938 L 12 47 C 12 49.761 14.239 52 17 52 L 31 52 C 33.209 52 35 50.209 35 48 L 35 38.5 C 35 38.224 35.224 38 35.5 38 L 39.5 38 C 39.776 38 40 38.224 40 38.5 L 40 48 C 40 50.209 41.791 52 44 52 L 47 52 C 49.761 52 52 49.761 52 47 L 52 28.712891 L 52.71875 29.3125 C 53.09275 29.6255 53.546047 29.777344 53.998047 29.777344 C 54.693047 29.777344 55.382672 29.416656 55.763672 28.722656 C 56.228672 27.874656 55.954891 26.803594 55.212891 26.183594 L 34.564453 8.9296875 C 33.821953 8.3091875 32.91125 8 32 8 z M 32 12.152344 C 32.11475 12.152344 32.228766 12.191531 32.322266 12.269531 L 48 25.369141 L 48 46 C 48 47.105 47.105 48 46 48 L 44.5 48 C 44.224 48 44 47.776 44 47.5 L 44 38 C 44 35.791 42.209 34 40 34 L 35 34 C 32.791 34 31 35.791 31 38 L 31 47.5 C 31 47.776 30.776 48 30.5 48 L 18 48 C 16.895 48 16 47.105 16 46 L 16 25.367188 L 31.677734 12.269531 C 31.771234 12.191531 31.88525 12.152344 32 12.152344 z M 21 28 C 20.448 28 20 28.448 20 29 L 20 36 C 20 36.552 20.448 37 21 37 L 26 37 C 26.552 37 27 36.552 27 36 L 27 29 C 27 28.448 26.552 28 26 28 L 21 28 z"></path>
                    </svg>
                )
            }
        }
        return (
            <>
                {renderIcon()}
            </>
        );
    };

export function NewsIcon() {
    const location = useLocation();
    const currentPath = location.pathname;
    const renderIcon = () => {
        if (currentPath === '/announcement') {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 64 64">
                    <path
                        d="M 50.5 13 C 48.019 13 46 15.019 46 17.5 L 46 46.5 C 46 48.981 48.019 51 50.5 51 C 52.981 51 55 48.981 55 46.5 L 55 17.5 C 55 15.019 52.981 13 50.5 13 z M 43.019531 17.019531 L 21.140625 23.060547 C 20.150625 23.330547 19.259766 23.809453 18.509766 24.439453 C 18.829766 25.229453 19 26.1 19 27 L 19 37 C 19 37.435855 18.958328 37.863193 18.880859 38.279297 C 18.835171 38.526017 18.773863 38.768443 18.703125 39.005859 C 18.672332 39.107168 18.635039 39.205545 18.599609 39.304688 C 18.537614 39.481929 18.476899 39.659673 18.400391 39.830078 L 19.259766 43.289062 C 19.929766 45.959063 21.880234 48.069453 24.490234 48.939453 L 26.480469 49.599609 C 27.330469 49.879609 28.189062 50.019531 29.039062 50.019531 C 31.359063 50.019531 33.600156 49.000859 35.160156 47.130859 L 36.734375 45.244141 L 43.019531 46.980469 C 43.009531 46.820469 43 46.66 43 46.5 L 43 17.5 C 43 17.34 43.009531 17.179531 43.019531 17.019531 z M 12 23 C 9.794 23 8 24.794 8 27 L 8 37 C 8 39.206 9.794 41 12 41 C 14.206 41 16 39.206 16 37 L 16 27 C 16 24.794 14.206 23 12 23 z M 22.917969 41.429688 L 32.501953 44.076172 L 32.089844 44.570312 C 31.019844 45.850313 29.32 46.330547 27.75 45.810547 L 25.759766 45.140625 C 24.449766 44.710625 23.470625 43.650312 23.140625 42.320312 L 22.917969 41.429688 z"></path>
                </svg>
            )
        } else {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 64 64">
                    <path
                        d="M 49.5 13 C 47.578712 13 45.886238 13.992741 44.902344 15.490234 L 20.197266 22.078125 C 19.123758 22.364394 18.172802 22.903694 17.378906 23.605469 C 16.383535 22.614172 15.01204 22 13.5 22 C 10.468 22 8 24.467 8 27.5 L 8 36.5 C 8 39.533 10.468 42 13.5 42 C 14.976309 42 16.315597 41.411248 17.304688 40.460938 L 18.261719 44.289062 C 18.927719 46.957063 20.883188 49.0675 23.492188 49.9375 L 25.482422 50.601562 C 26.325422 50.882563 27.185156 51.019531 28.035156 51.019531 C 30.360156 51.019531 32.603203 50.000766 34.158203 48.134766 L 35.853516 46.097656 L 44.904297 48.511719 C 45.888409 50.00796 47.579669 51 49.5 51 C 52.532 51 55 48.533 55 45.5 L 55 18.5 C 55 15.467 52.532 13 49.5 13 z M 49.5 17 C 50.327 17 51 17.673 51 18.5 L 51 45.5 C 51 46.327 50.327 47 49.5 47 C 48.673 47 48 46.327 48 45.5 L 48 18.5 C 48 17.673 48.673 17 49.5 17 z M 44 19.871094 L 44 44.128906 L 21.226562 38.056641 C 19.915563 37.707641 19 36.515203 19 35.158203 L 19 28.841797 C 19 27.484797 19.915563 26.292359 21.226562 25.943359 L 44 19.871094 z M 13.5 26 C 14.327 26 15 26.673 15 27.5 L 15 28.841797 L 15 35.158203 L 15 36.5 C 15 37.327 14.327 38 13.5 38 C 12.673 38 12 37.327 12 36.5 L 12 27.5 C 12 26.673 12.673 26 13.5 26 z M 21.908203 42.380859 L 31.59375 44.962891 L 31.085938 45.572266 C 30.022937 46.846266 28.322047 47.333641 26.748047 46.806641 L 24.757812 46.142578 C 23.453813 45.708578 22.475578 44.652359 22.142578 43.318359 L 21.908203 42.380859 z"></path>
                </svg>
            )
        }
    }
    return (
        <>
            {renderIcon()}
        </>
    );
};

export function ProposalIcon() {
    const location = useLocation();
    const currentPath = location.pathname;
    const renderIcon = () => {
        if (currentPath === '/proposal') {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 64 64">
                    <path
                        d="M 32 10 C 19.869 10 10 19.869 10 32 C 10 44.131 19.869 54 32 54 C 44.131 54 54 44.131 54 32 C 54 19.869 44.131 10 32 10 z M 40.330078 16.058594 C 43.958946 17.962789 46.861266 21.063819 48.505859 24.839844 L 40.767578 27.199219 C 39.949812 25.711976 38.761442 24.460347 37.332031 23.554688 L 40.330078 16.058594 z M 32 26 C 35.309 26 38 28.691 38 32 C 38 35.309 35.309 38 32 38 C 28.691 38 26 35.309 26 32 C 26 28.691 28.691 26 32 26 z M 49.677734 28.664062 C 49.881653 29.746535 50 30.85919 50 32 C 50 38.297021 46.743217 43.840811 41.832031 47.058594 L 38.125 39.886719 C 40.477962 38.055444 42 35.205671 42 32 C 42 31.669211 41.982714 31.342174 41.951172 31.019531 L 49.677734 28.664062 z"></path>
                </svg>
            )
        } else {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35"
                     viewBox="0 0 64 64">
                    <path
                        d="M 32 10 C 19.869 10 10 19.869 10 32 C 10 44.131 19.869 54 32 54 C 44.131 54 54 44.131 54 32 C 54 19.869 44.131 10 32 10 z M 32 14 C 33.59167 14 35.126819 14.229462 36.597656 14.619141 L 33.589844 22.138672 C 33.070929 22.055248 32.542071 22 32 22 C 26.486 22 22 26.486 22 32 C 22 37.514 26.486 42 32 42 C 32.879149 42 33.728148 41.874217 34.541016 41.660156 L 38.257812 48.855469 C 36.305203 49.583058 34.20297 50 32 50 C 22.075 50 14 41.925 14 32 C 14 22.075 22.075 14 32 14 z M 40.330078 16.058594 C 43.958946 17.962789 46.861266 21.063819 48.505859 24.839844 L 40.767578 27.199219 C 39.949812 25.711976 38.761442 24.460347 37.332031 23.554688 L 40.330078 16.058594 z M 32 26 C 35.309 26 38 28.691 38 32 C 38 35.309 35.309 38 32 38 C 28.691 38 26 35.309 26 32 C 26 28.691 28.691 26 32 26 z M 49.677734 28.664062 C 49.881653 29.746535 50 30.85919 50 32 C 50 38.297021 46.743217 43.840811 41.832031 47.058594 L 38.125 39.886719 C 40.477962 38.055444 42 35.205671 42 32 C 42 31.669211 41.982714 31.342174 41.951172 31.019531 L 49.677734 28.664062 z"></path>
                    </svg>
                )
        }
    }
    return (
        <>
            {renderIcon()}
        </>
    );
};

export function McIcon() {
    const location = useLocation();
    const currentPath = location.pathname;
    const renderIcon = () => {
        if (currentPath.startsWith('/account')) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 64 64">
                    <path
                        d="M46.677 52H17.324c-3.168 0-5.413-3.161-4.309-6.135 2.6-7.012 10.23-11.723 18.985-11.723 8.756 0 16.385 4.712 18.986 11.724C52.082 48.821 49.862 52 46.677 52zM42 47v-2c0-.552-.448-1-1-1h-5c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h5C41.552 48 42 47.552 42 47zM32 31c-5.514 0-10-4.71-10-10.5S26.486 10 32 10s10 4.71 10 10.5S37.514 31 32 31zM32 14c-3.309 0-6 2.916-6 6.5s2.691 6.5 6 6.5 6-2.916 6-6.5S35.309 14 32 14z"></path>
                </svg>
            )
        } else {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 64 64">
                    <path
                        d="M 32 10 C 26.486 10 22 14.71 22 20.5 C 22 26.29 26.486 31 32 31 C 37.514 31 42 26.29 42 20.5 C 42 14.71 37.514 10 32 10 z M 32 14 C 35.309 14 38 16.916 38 20.5 C 38 24.084 35.309 27 32 27 C 28.691 27 26 24.084 26 20.5 C 26 16.916 28.691 14 32 14 z M 31.998047 34.142578 C 23.243047 34.142578 15.614672 38.854234 13.013672 45.865234 C 11.915672 48.826234 14.143219 52 17.324219 52 L 46.675781 52 C 49.848781 52 52.086375 48.832234 50.984375 45.865234 C 48.384375 38.852234 40.754047 34.142578 31.998047 34.142578 z M 31.998047 38.142578 C 38.979047 38.142578 45.245328 41.891813 47.236328 47.257812 C 47.313328 47.464812 47.241734 48 46.677734 48 L 42 48 L 42 46 C 42 45.448 41.552 45 41 45 L 36 45 C 35.448 45 35 45.448 35 46 L 35 48 L 17.324219 48 C 16.817219 48 16.686672 47.465812 16.763672 47.257812 C 18.753672 41.891812 25.018047 38.142578 31.998047 38.142578 z"></path>
                </svg>
            )
        }
    }
    return (
        <>
            {renderIcon()}
        </>
    );
};