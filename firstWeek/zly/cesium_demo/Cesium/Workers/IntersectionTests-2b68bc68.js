define(["exports","./Matrix2-7fbd2afb","./defaultValue-81eec7ed","./RuntimeError-8952249c","./Transforms-1ddad957","./ComponentDatatype-be80d12c"],(function(t,n,e,a,i,r){"use strict";const s={};function o(t,n,e){const a=t+n;return r.CesiumMath.sign(t)!==r.CesiumMath.sign(n)&&Math.abs(a/Math.max(Math.abs(t),Math.abs(n)))<e?0:a}s.computeDiscriminant=function(t,n,e){return n*n-4*t*e},s.computeRealRoots=function(t,n,e){let a;if(0===t)return 0===n?[]:[-e/n];if(0===n){if(0===e)return[0,0];const n=Math.abs(e),i=Math.abs(t);if(n<i&&n/i<r.CesiumMath.EPSILON14)return[0,0];if(n>i&&i/n<r.CesiumMath.EPSILON14)return[];if(a=-e/t,a<0)return[];const s=Math.sqrt(a);return[-s,s]}if(0===e)return a=-n/t,a<0?[a,0]:[0,a];const i=o(n*n,-(4*t*e),r.CesiumMath.EPSILON14);if(i<0)return[];const s=-.5*o(n,r.CesiumMath.sign(n)*Math.sqrt(i),r.CesiumMath.EPSILON14);return n>0?[s/t,e/s]:[e/s,s/t]};const c={};function u(t,n,e,a){const i=t,r=n/3,s=e/3,o=a,c=i*s,u=r*o,l=r*r,C=s*s,M=i*s-l,h=i*o-r*s,d=r*o-C,m=4*M*d-h*h;let f,g;if(m<0){let t,n,e;l*u>=c*C?(t=i,n=M,e=-2*r*M+i*h):(t=o,n=d,e=-o*h+2*s*d);const a=-(e<0?-1:1)*Math.abs(t)*Math.sqrt(-m);g=-e+a;const p=g/2,w=p<0?-Math.pow(-p,1/3):Math.pow(p,1/3),R=g===a?-w:-n/w;return f=n<=0?w+R:-e/(w*w+R*R+n),l*u>=c*C?[(f-r)/i]:[-o/(f+s)]}const p=M,w=-2*r*M+i*h,R=d,S=-o*h+2*s*d,O=Math.sqrt(m),x=Math.sqrt(3)/2;let y=Math.abs(Math.atan2(i*O,-w)/3);f=2*Math.sqrt(-p);let P=Math.cos(y);g=f*P;let b=f*(-P/2-x*Math.sin(y));const N=g+b>2*r?g-r:b-r,q=i,L=N/q;y=Math.abs(Math.atan2(o*O,-S)/3),f=2*Math.sqrt(-R),P=Math.cos(y),g=f*P,b=f*(-P/2-x*Math.sin(y));const I=-o,E=g+b<2*s?g+s:b+s,z=I/E,T=-N*E-q*I,v=(s*T-r*(N*I))/(-r*T+s*(q*E));return L<=v?L<=z?v<=z?[L,v,z]:[L,z,v]:[z,L,v]:L<=z?[v,L,z]:v<=z?[v,z,L]:[z,v,L]}c.computeDiscriminant=function(t,n,e,a){const i=n*n,r=e*e;return 18*t*n*e*a+i*r-27*(t*t)*(a*a)-4*(t*r*e+i*n*a)},c.computeRealRoots=function(t,n,e,a){let i,r;if(0===t)return s.computeRealRoots(n,e,a);if(0===n){if(0===e){if(0===a)return[0,0,0];r=-a/t;const n=r<0?-Math.pow(-r,1/3):Math.pow(r,1/3);return[n,n,n]}return 0===a?(i=s.computeRealRoots(t,0,e),0===i.Length?[0]:[i[0],0,i[1]]):u(t,0,e,a)}return 0===e?0===a?(r=-n/t,r<0?[r,0,0]:[0,0,r]):u(t,n,0,a):0===a?(i=s.computeRealRoots(t,n,e),0===i.length?[0]:i[1]<=0?[i[0],i[1],0]:i[0]>=0?[0,i[0],i[1]]:[i[0],0,i[1]]):u(t,n,e,a)};const l={};function C(t,n,e,a){const i=t*t,o=n-3*i/8,u=e-n*t/2+i*t/8,l=a-e*t/4+n*i/16-3*i*i/256,C=c.computeRealRoots(1,2*o,o*o-4*l,-u*u);if(C.length>0){const n=-t/4,e=C[C.length-1];if(Math.abs(e)<r.CesiumMath.EPSILON14){const t=s.computeRealRoots(1,o,l);if(2===t.length){const e=t[0],a=t[1];let i;if(e>=0&&a>=0){const t=Math.sqrt(e),i=Math.sqrt(a);return[n-i,n-t,n+t,n+i]}if(e>=0&&a<0)return i=Math.sqrt(e),[n-i,n+i];if(e<0&&a>=0)return i=Math.sqrt(a),[n-i,n+i]}return[]}if(e>0){const t=Math.sqrt(e),a=(o+e-u/t)/2,i=(o+e+u/t)/2,r=s.computeRealRoots(1,t,a),c=s.computeRealRoots(1,-t,i);return 0!==r.length?(r[0]+=n,r[1]+=n,0!==c.length?(c[0]+=n,c[1]+=n,r[1]<=c[0]?[r[0],r[1],c[0],c[1]]:c[1]<=r[0]?[c[0],c[1],r[0],r[1]]:r[0]>=c[0]&&r[1]<=c[1]?[c[0],r[0],r[1],c[1]]:c[0]>=r[0]&&c[1]<=r[1]?[r[0],c[0],c[1],r[1]]:r[0]>c[0]&&r[0]<c[1]?[c[0],r[0],c[1],r[1]]:[r[0],c[0],r[1],c[1]]):r):0!==c.length?(c[0]+=n,c[1]+=n,c):[]}}return[]}function M(t,n,e,a){const i=t*t,o=-2*n,u=e*t+n*n-4*a,l=i*a-e*n*t+e*e,C=c.computeRealRoots(1,o,u,l);if(C.length>0){const o=C[0],c=n-o,u=c*c,l=t/2,M=c/2,h=u-4*a,d=u+4*Math.abs(a),m=i-4*o,f=i+4*Math.abs(o);let g,p,w,R,S,O;if(o<0||h*f<m*d){const n=Math.sqrt(m);g=n/2,p=0===n?0:(t*M-e)/n}else{const n=Math.sqrt(h);g=0===n?0:(t*M-e)/n,p=n/2}0===l&&0===g?(w=0,R=0):r.CesiumMath.sign(l)===r.CesiumMath.sign(g)?(w=l+g,R=o/w):(R=l-g,w=o/R),0===M&&0===p?(S=0,O=0):r.CesiumMath.sign(M)===r.CesiumMath.sign(p)?(S=M+p,O=a/S):(O=M-p,S=a/O);const x=s.computeRealRoots(1,w,S),y=s.computeRealRoots(1,R,O);if(0!==x.length)return 0!==y.length?x[1]<=y[0]?[x[0],x[1],y[0],y[1]]:y[1]<=x[0]?[y[0],y[1],x[0],x[1]]:x[0]>=y[0]&&x[1]<=y[1]?[y[0],x[0],x[1],y[1]]:y[0]>=x[0]&&y[1]<=x[1]?[x[0],y[0],y[1],x[1]]:x[0]>y[0]&&x[0]<y[1]?[y[0],x[0],y[1],x[1]]:[x[0],y[0],x[1],y[1]]:x;if(0!==y.length)return y}return[]}function h(t,a){a=n.Cartesian3.clone(e.defaultValue(a,n.Cartesian3.ZERO)),n.Cartesian3.equals(a,n.Cartesian3.ZERO)||n.Cartesian3.normalize(a,a),this.origin=n.Cartesian3.clone(e.defaultValue(t,n.Cartesian3.ZERO)),this.direction=a}l.computeDiscriminant=function(t,n,e,a,i){const r=t*t,s=n*n,o=s*n,c=e*e,u=c*e,l=a*a,C=l*a,M=i*i;return s*c*l-4*o*C-4*t*u*l+18*t*n*e*C-27*r*l*l+256*(r*t)*(M*i)+i*(18*o*e*a-4*s*u+16*t*c*c-80*t*n*c*a-6*t*s*l+144*r*e*l)+M*(144*t*s*e-27*s*s-128*r*c-192*r*n*a)},l.computeRealRoots=function(t,n,e,a,i){if(Math.abs(t)<r.CesiumMath.EPSILON15)return c.computeRealRoots(n,e,a,i);const s=n/t,o=e/t,u=a/t,l=i/t;let h=s<0?1:0;switch(h+=o<0?h+1:h,h+=u<0?h+1:h,h+=l<0?h+1:h,h){case 0:case 3:case 4:case 6:case 7:case 9:case 10:case 12:case 13:case 14:case 15:return C(s,o,u,l);case 1:case 2:case 5:case 8:case 11:return M(s,o,u,l);default:return}},h.clone=function(t,a){if(e.defined(t))return e.defined(a)?(a.origin=n.Cartesian3.clone(t.origin),a.direction=n.Cartesian3.clone(t.direction),a):new h(t.origin,t.direction)},h.getPoint=function(t,a,i){return e.defined(i)||(i=new n.Cartesian3),i=n.Cartesian3.multiplyByScalar(t.direction,a,i),n.Cartesian3.add(t.origin,i,i)};const d={rayPlane:function(t,a,i){e.defined(i)||(i=new n.Cartesian3);const s=t.origin,o=t.direction,c=a.normal,u=n.Cartesian3.dot(c,o);if(Math.abs(u)<r.CesiumMath.EPSILON15)return;const l=(-a.distance-n.Cartesian3.dot(c,s))/u;return l<0?void 0:(i=n.Cartesian3.multiplyByScalar(o,l,i),n.Cartesian3.add(s,i,i))}},m=new n.Cartesian3,f=new n.Cartesian3,g=new n.Cartesian3,p=new n.Cartesian3,w=new n.Cartesian3;d.rayTriangleParametric=function(t,a,i,s,o){o=e.defaultValue(o,!1);const c=t.origin,u=t.direction,l=n.Cartesian3.subtract(i,a,m),C=n.Cartesian3.subtract(s,a,f),M=n.Cartesian3.cross(u,C,g),h=n.Cartesian3.dot(l,M);let d,R,S,O,x;if(o){if(h<r.CesiumMath.EPSILON6)return;if(d=n.Cartesian3.subtract(c,a,p),S=n.Cartesian3.dot(d,M),S<0||S>h)return;if(R=n.Cartesian3.cross(d,l,w),O=n.Cartesian3.dot(u,R),O<0||S+O>h)return;x=n.Cartesian3.dot(C,R)/h}else{if(Math.abs(h)<r.CesiumMath.EPSILON6)return;const t=1/h;if(d=n.Cartesian3.subtract(c,a,p),S=n.Cartesian3.dot(d,M)*t,S<0||S>1)return;if(R=n.Cartesian3.cross(d,l,w),O=n.Cartesian3.dot(u,R)*t,O<0||S+O>1)return;x=n.Cartesian3.dot(C,R)*t}return x},d.rayTriangle=function(t,a,i,r,s,o){const c=d.rayTriangleParametric(t,a,i,r,s);if(e.defined(c)&&!(c<0))return e.defined(o)||(o=new n.Cartesian3),n.Cartesian3.multiplyByScalar(t.direction,c,o),n.Cartesian3.add(t.origin,o,o)};const R=new h;d.lineSegmentTriangle=function(t,a,i,r,s,o,c){const u=R;n.Cartesian3.clone(t,u.origin),n.Cartesian3.subtract(a,t,u.direction),n.Cartesian3.normalize(u.direction,u.direction);const l=d.rayTriangleParametric(u,i,r,s,o);if(!(!e.defined(l)||l<0||l>n.Cartesian3.distance(t,a)))return e.defined(c)||(c=new n.Cartesian3),n.Cartesian3.multiplyByScalar(u.direction,l,c),n.Cartesian3.add(u.origin,c,c)};const S={root0:0,root1:0};function O(t,a,r){e.defined(r)||(r=new i.Interval);const s=t.origin,o=t.direction,c=a.center,u=a.radius*a.radius,l=n.Cartesian3.subtract(s,c,g),C=function(t,n,e,a){const i=n*n-4*t*e;if(i<0)return;if(i>0){const e=1/(2*t),r=Math.sqrt(i),s=(-n+r)*e,o=(-n-r)*e;return s<o?(a.root0=s,a.root1=o):(a.root0=o,a.root1=s),a}const r=-n/(2*t);return 0!==r?(a.root0=a.root1=r,a):void 0}(n.Cartesian3.dot(o,o),2*n.Cartesian3.dot(o,l),n.Cartesian3.magnitudeSquared(l)-u,S);if(e.defined(C))return r.start=C.root0,r.stop=C.root1,r}d.raySphere=function(t,n,a){if(a=O(t,n,a),e.defined(a)&&!(a.stop<0))return a.start=Math.max(a.start,0),a};const x=new h;d.lineSegmentSphere=function(t,a,i,r){const s=x;n.Cartesian3.clone(t,s.origin);const o=n.Cartesian3.subtract(a,t,s.direction),c=n.Cartesian3.magnitude(o);if(n.Cartesian3.normalize(o,o),r=O(s,i,r),!(!e.defined(r)||r.stop<0||r.start>c))return r.start=Math.max(r.start,0),r.stop=Math.min(r.stop,c),r};const y=new n.Cartesian3,P=new n.Cartesian3;function b(t,n,e){const a=t+n;return r.CesiumMath.sign(t)!==r.CesiumMath.sign(n)&&Math.abs(a/Math.max(Math.abs(t),Math.abs(n)))<e?0:a}d.rayEllipsoid=function(t,e){const a=e.oneOverRadii,r=n.Cartesian3.multiplyComponents(a,t.origin,y),s=n.Cartesian3.multiplyComponents(a,t.direction,P),o=n.Cartesian3.magnitudeSquared(r),c=n.Cartesian3.dot(r,s);let u,l,C,M,h;if(o>1){if(c>=0)return;const t=c*c;if(u=o-1,l=n.Cartesian3.magnitudeSquared(s),C=l*u,t<C)return;if(t>C){M=c*c-C,h=-c+Math.sqrt(M);const t=h/l,n=u/h;return t<n?new i.Interval(t,n):{start:n,stop:t}}const e=Math.sqrt(u/l);return new i.Interval(e,e)}return o<1?(u=o-1,l=n.Cartesian3.magnitudeSquared(s),C=l*u,M=c*c-C,h=-c+Math.sqrt(M),new i.Interval(0,h/l)):c<0?(l=n.Cartesian3.magnitudeSquared(s),new i.Interval(0,-c/l)):void 0};const N=new n.Cartesian3,q=new n.Cartesian3,L=new n.Cartesian3,I=new n.Cartesian3,E=new n.Cartesian3,z=new n.Matrix3,T=new n.Matrix3,v=new n.Matrix3,U=new n.Matrix3,W=new n.Matrix3,B=new n.Matrix3,V=new n.Matrix3,Z=new n.Cartesian3,D=new n.Cartesian3,A=new n.Cartographic;d.grazingAltitudeLocation=function(t,a){const i=t.origin,o=t.direction;if(!n.Cartesian3.equals(i,n.Cartesian3.ZERO)){const t=a.geodeticSurfaceNormal(i,N);if(n.Cartesian3.dot(o,t)>=0)return i}const c=e.defined(this.rayEllipsoid(t,a)),u=a.transformPositionToScaledSpace(o,N),C=n.Cartesian3.normalize(u,u),M=n.Cartesian3.mostOrthogonalAxis(u,I),h=n.Cartesian3.normalize(n.Cartesian3.cross(M,C,q),q),d=n.Cartesian3.normalize(n.Cartesian3.cross(C,h,L),L),m=z;m[0]=C.x,m[1]=C.y,m[2]=C.z,m[3]=h.x,m[4]=h.y,m[5]=h.z,m[6]=d.x,m[7]=d.y,m[8]=d.z;const f=n.Matrix3.transpose(m,T),g=n.Matrix3.fromScale(a.radii,v),p=n.Matrix3.fromScale(a.oneOverRadii,U),w=W;w[0]=0,w[1]=-o.z,w[2]=o.y,w[3]=o.z,w[4]=0,w[5]=-o.x,w[6]=-o.y,w[7]=o.x,w[8]=0;const R=n.Matrix3.multiply(n.Matrix3.multiply(f,p,B),w,B),S=n.Matrix3.multiply(n.Matrix3.multiply(R,g,V),m,V),O=n.Matrix3.multiplyByVector(R,i,E),x=function(t,e,a,i,o){const c=i*i,u=o*o,C=(t[n.Matrix3.COLUMN1ROW1]-t[n.Matrix3.COLUMN2ROW2])*u,M=o*(i*b(t[n.Matrix3.COLUMN1ROW0],t[n.Matrix3.COLUMN0ROW1],r.CesiumMath.EPSILON15)+e.y),h=t[n.Matrix3.COLUMN0ROW0]*c+t[n.Matrix3.COLUMN2ROW2]*u+i*e.x+a,d=u*b(t[n.Matrix3.COLUMN2ROW1],t[n.Matrix3.COLUMN1ROW2],r.CesiumMath.EPSILON15),m=o*(i*b(t[n.Matrix3.COLUMN2ROW0],t[n.Matrix3.COLUMN0ROW2])+e.z);let f;const g=[];if(0===m&&0===d){if(f=s.computeRealRoots(C,M,h),0===f.length)return g;const t=f[0],e=Math.sqrt(Math.max(1-t*t,0));if(g.push(new n.Cartesian3(i,o*t,o*-e)),g.push(new n.Cartesian3(i,o*t,o*e)),2===f.length){const t=f[1],e=Math.sqrt(Math.max(1-t*t,0));g.push(new n.Cartesian3(i,o*t,o*-e)),g.push(new n.Cartesian3(i,o*t,o*e))}return g}const p=m*m,w=d*d,R=m*d,S=C*C+w,O=2*(M*C+R),x=2*h*C+M*M-w+p,y=2*(h*M-R),P=h*h-p;if(0===S&&0===O&&0===x&&0===y)return g;f=l.computeRealRoots(S,O,x,y,P);const N=f.length;if(0===N)return g;for(let t=0;t<N;++t){const e=f[t],a=e*e,s=Math.max(1-a,0),c=Math.sqrt(s);let u;u=r.CesiumMath.sign(C)===r.CesiumMath.sign(h)?b(C*a+h,M*e,r.CesiumMath.EPSILON12):r.CesiumMath.sign(h)===r.CesiumMath.sign(M*e)?b(C*a,M*e+h,r.CesiumMath.EPSILON12):b(C*a+M*e,h,r.CesiumMath.EPSILON12);const l=u*b(d*e,m,r.CesiumMath.EPSILON15);l<0?g.push(new n.Cartesian3(i,o*e,o*c)):l>0?g.push(new n.Cartesian3(i,o*e,o*-c)):0!==c?(g.push(new n.Cartesian3(i,o*e,o*-c)),g.push(new n.Cartesian3(i,o*e,o*c)),++t):g.push(new n.Cartesian3(i,o*e,o*c))}return g}(S,n.Cartesian3.negate(O,N),0,0,1);let y,P;const F=x.length;if(F>0){let t=n.Cartesian3.clone(n.Cartesian3.ZERO,D),e=Number.NEGATIVE_INFINITY;for(let a=0;a<F;++a){y=n.Matrix3.multiplyByVector(g,n.Matrix3.multiplyByVector(m,x[a],Z),Z);const r=n.Cartesian3.normalize(n.Cartesian3.subtract(y,i,I),I),s=n.Cartesian3.dot(r,o);s>e&&(e=s,t=n.Cartesian3.clone(y,t))}const s=a.cartesianToCartographic(t,A);return e=r.CesiumMath.clamp(e,0,1),P=n.Cartesian3.magnitude(n.Cartesian3.subtract(t,i,I))*Math.sqrt(1-e*e),P=c?-P:P,s.height=P,a.cartographicToCartesian(s,new n.Cartesian3)}};const F=new n.Cartesian3;d.lineSegmentPlane=function(t,a,i,s){e.defined(s)||(s=new n.Cartesian3);const o=n.Cartesian3.subtract(a,t,F),c=i.normal,u=n.Cartesian3.dot(c,o);if(Math.abs(u)<r.CesiumMath.EPSILON6)return;const l=n.Cartesian3.dot(c,t),C=-(i.distance+l)/u;return C<0||C>1?void 0:(n.Cartesian3.multiplyByScalar(o,C,s),n.Cartesian3.add(t,s,s),s)},d.trianglePlaneIntersection=function(t,e,a,i){const r=i.normal,s=i.distance,o=n.Cartesian3.dot(r,t)+s<0,c=n.Cartesian3.dot(r,e)+s<0,u=n.Cartesian3.dot(r,a)+s<0;let l,C,M=0;if(M+=o?1:0,M+=c?1:0,M+=u?1:0,1!==M&&2!==M||(l=new n.Cartesian3,C=new n.Cartesian3),1===M){if(o)return d.lineSegmentPlane(t,e,i,l),d.lineSegmentPlane(t,a,i,C),{positions:[t,e,a,l,C],indices:[0,3,4,1,2,4,1,4,3]};if(c)return d.lineSegmentPlane(e,a,i,l),d.lineSegmentPlane(e,t,i,C),{positions:[t,e,a,l,C],indices:[1,3,4,2,0,4,2,4,3]};if(u)return d.lineSegmentPlane(a,t,i,l),d.lineSegmentPlane(a,e,i,C),{positions:[t,e,a,l,C],indices:[2,3,4,0,1,4,0,4,3]}}else if(2===M){if(!o)return d.lineSegmentPlane(e,t,i,l),d.lineSegmentPlane(a,t,i,C),{positions:[t,e,a,l,C],indices:[1,2,4,1,4,3,0,3,4]};if(!c)return d.lineSegmentPlane(a,e,i,l),d.lineSegmentPlane(t,e,i,C),{positions:[t,e,a,l,C],indices:[2,0,4,2,4,3,1,3,4]};if(!u)return d.lineSegmentPlane(t,a,i,l),d.lineSegmentPlane(e,a,i,C),{positions:[t,e,a,l,C],indices:[0,1,4,0,4,3,2,3,4]}}},t.IntersectionTests=d,t.Ray=h}));
