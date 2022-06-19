define(["exports","./GeometryOffsetAttribute-8c5e10db","./Transforms-a3393011","./Matrix2-37e55508","./RuntimeError-8952249c","./ComponentDatatype-a15c9a19","./defaultValue-81eec7ed","./GeometryAttribute-9054b051","./GeometryAttributes-32b29525","./VertexFormat-a0b706b0"],(function(t,e,n,a,r,i,o,m,u,s){"use strict";const y=new a.Cartesian3;function c(t){const e=(t=o.defaultValue(t,o.defaultValue.EMPTY_OBJECT)).minimum,n=t.maximum,r=o.defaultValue(t.vertexFormat,s.VertexFormat.DEFAULT);this._minimum=a.Cartesian3.clone(e),this._maximum=a.Cartesian3.clone(n),this._vertexFormat=r,this._offsetAttribute=t.offsetAttribute,this._workerName="createBoxGeometry"}c.fromDimensions=function(t){const e=(t=o.defaultValue(t,o.defaultValue.EMPTY_OBJECT)).dimensions,n=a.Cartesian3.multiplyByScalar(e,.5,new a.Cartesian3);return new c({minimum:a.Cartesian3.negate(n,new a.Cartesian3),maximum:n,vertexFormat:t.vertexFormat,offsetAttribute:t.offsetAttribute})},c.fromAxisAlignedBoundingBox=function(t){return new c({minimum:t.minimum,maximum:t.maximum})},c.packedLength=2*a.Cartesian3.packedLength+s.VertexFormat.packedLength+1,c.pack=function(t,e,n){return n=o.defaultValue(n,0),a.Cartesian3.pack(t._minimum,e,n),a.Cartesian3.pack(t._maximum,e,n+a.Cartesian3.packedLength),s.VertexFormat.pack(t._vertexFormat,e,n+2*a.Cartesian3.packedLength),e[n+2*a.Cartesian3.packedLength+s.VertexFormat.packedLength]=o.defaultValue(t._offsetAttribute,-1),e};const p=new a.Cartesian3,x=new a.Cartesian3,f=new s.VertexFormat,l={minimum:p,maximum:x,vertexFormat:f,offsetAttribute:void 0};let A;c.unpack=function(t,e,n){e=o.defaultValue(e,0);const r=a.Cartesian3.unpack(t,e,p),i=a.Cartesian3.unpack(t,e+a.Cartesian3.packedLength,x),m=s.VertexFormat.unpack(t,e+2*a.Cartesian3.packedLength,f),u=t[e+2*a.Cartesian3.packedLength+s.VertexFormat.packedLength];return o.defined(n)?(n._minimum=a.Cartesian3.clone(r,n._minimum),n._maximum=a.Cartesian3.clone(i,n._maximum),n._vertexFormat=s.VertexFormat.clone(m,n._vertexFormat),n._offsetAttribute=-1===u?void 0:u,n):(l.offsetAttribute=-1===u?void 0:u,new c(l))},c.createGeometry=function(t){const r=t._minimum,s=t._maximum,c=t._vertexFormat;if(a.Cartesian3.equals(r,s))return;const p=new u.GeometryAttributes;let x,f;if(c.position&&(c.st||c.normal||c.tangent||c.bitangent)){if(c.position&&(f=new Float64Array(72),f[0]=r.x,f[1]=r.y,f[2]=s.z,f[3]=s.x,f[4]=r.y,f[5]=s.z,f[6]=s.x,f[7]=s.y,f[8]=s.z,f[9]=r.x,f[10]=s.y,f[11]=s.z,f[12]=r.x,f[13]=r.y,f[14]=r.z,f[15]=s.x,f[16]=r.y,f[17]=r.z,f[18]=s.x,f[19]=s.y,f[20]=r.z,f[21]=r.x,f[22]=s.y,f[23]=r.z,f[24]=s.x,f[25]=r.y,f[26]=r.z,f[27]=s.x,f[28]=s.y,f[29]=r.z,f[30]=s.x,f[31]=s.y,f[32]=s.z,f[33]=s.x,f[34]=r.y,f[35]=s.z,f[36]=r.x,f[37]=r.y,f[38]=r.z,f[39]=r.x,f[40]=s.y,f[41]=r.z,f[42]=r.x,f[43]=s.y,f[44]=s.z,f[45]=r.x,f[46]=r.y,f[47]=s.z,f[48]=r.x,f[49]=s.y,f[50]=r.z,f[51]=s.x,f[52]=s.y,f[53]=r.z,f[54]=s.x,f[55]=s.y,f[56]=s.z,f[57]=r.x,f[58]=s.y,f[59]=s.z,f[60]=r.x,f[61]=r.y,f[62]=r.z,f[63]=s.x,f[64]=r.y,f[65]=r.z,f[66]=s.x,f[67]=r.y,f[68]=s.z,f[69]=r.x,f[70]=r.y,f[71]=s.z,p.position=new m.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:f})),c.normal){const t=new Float32Array(72);t[0]=0,t[1]=0,t[2]=1,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=1,t[9]=0,t[10]=0,t[11]=1,t[12]=0,t[13]=0,t[14]=-1,t[15]=0,t[16]=0,t[17]=-1,t[18]=0,t[19]=0,t[20]=-1,t[21]=0,t[22]=0,t[23]=-1,t[24]=1,t[25]=0,t[26]=0,t[27]=1,t[28]=0,t[29]=0,t[30]=1,t[31]=0,t[32]=0,t[33]=1,t[34]=0,t[35]=0,t[36]=-1,t[37]=0,t[38]=0,t[39]=-1,t[40]=0,t[41]=0,t[42]=-1,t[43]=0,t[44]=0,t[45]=-1,t[46]=0,t[47]=0,t[48]=0,t[49]=1,t[50]=0,t[51]=0,t[52]=1,t[53]=0,t[54]=0,t[55]=1,t[56]=0,t[57]=0,t[58]=1,t[59]=0,t[60]=0,t[61]=-1,t[62]=0,t[63]=0,t[64]=-1,t[65]=0,t[66]=0,t[67]=-1,t[68]=0,t[69]=0,t[70]=-1,t[71]=0,p.normal=new m.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})}if(c.st){const t=new Float32Array(48);t[0]=0,t[1]=0,t[2]=1,t[3]=0,t[4]=1,t[5]=1,t[6]=0,t[7]=1,t[8]=1,t[9]=0,t[10]=0,t[11]=0,t[12]=0,t[13]=1,t[14]=1,t[15]=1,t[16]=0,t[17]=0,t[18]=1,t[19]=0,t[20]=1,t[21]=1,t[22]=0,t[23]=1,t[24]=1,t[25]=0,t[26]=0,t[27]=0,t[28]=0,t[29]=1,t[30]=1,t[31]=1,t[32]=1,t[33]=0,t[34]=0,t[35]=0,t[36]=0,t[37]=1,t[38]=1,t[39]=1,t[40]=0,t[41]=0,t[42]=1,t[43]=0,t[44]=1,t[45]=1,t[46]=0,t[47]=1,p.st=new m.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:t})}if(c.tangent){const t=new Float32Array(72);t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=1,t[7]=0,t[8]=0,t[9]=1,t[10]=0,t[11]=0,t[12]=-1,t[13]=0,t[14]=0,t[15]=-1,t[16]=0,t[17]=0,t[18]=-1,t[19]=0,t[20]=0,t[21]=-1,t[22]=0,t[23]=0,t[24]=0,t[25]=1,t[26]=0,t[27]=0,t[28]=1,t[29]=0,t[30]=0,t[31]=1,t[32]=0,t[33]=0,t[34]=1,t[35]=0,t[36]=0,t[37]=-1,t[38]=0,t[39]=0,t[40]=-1,t[41]=0,t[42]=0,t[43]=-1,t[44]=0,t[45]=0,t[46]=-1,t[47]=0,t[48]=-1,t[49]=0,t[50]=0,t[51]=-1,t[52]=0,t[53]=0,t[54]=-1,t[55]=0,t[56]=0,t[57]=-1,t[58]=0,t[59]=0,t[60]=1,t[61]=0,t[62]=0,t[63]=1,t[64]=0,t[65]=0,t[66]=1,t[67]=0,t[68]=0,t[69]=1,t[70]=0,t[71]=0,p.tangent=new m.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})}if(c.bitangent){const t=new Float32Array(72);t[0]=0,t[1]=1,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=1,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=1,t[14]=0,t[15]=0,t[16]=1,t[17]=0,t[18]=0,t[19]=1,t[20]=0,t[21]=0,t[22]=1,t[23]=0,t[24]=0,t[25]=0,t[26]=1,t[27]=0,t[28]=0,t[29]=1,t[30]=0,t[31]=0,t[32]=1,t[33]=0,t[34]=0,t[35]=1,t[36]=0,t[37]=0,t[38]=1,t[39]=0,t[40]=0,t[41]=1,t[42]=0,t[43]=0,t[44]=1,t[45]=0,t[46]=0,t[47]=1,t[48]=0,t[49]=0,t[50]=1,t[51]=0,t[52]=0,t[53]=1,t[54]=0,t[55]=0,t[56]=1,t[57]=0,t[58]=0,t[59]=1,t[60]=0,t[61]=0,t[62]=1,t[63]=0,t[64]=0,t[65]=1,t[66]=0,t[67]=0,t[68]=1,t[69]=0,t[70]=0,t[71]=1,p.bitangent=new m.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})}x=new Uint16Array(36),x[0]=0,x[1]=1,x[2]=2,x[3]=0,x[4]=2,x[5]=3,x[6]=6,x[7]=5,x[8]=4,x[9]=7,x[10]=6,x[11]=4,x[12]=8,x[13]=9,x[14]=10,x[15]=8,x[16]=10,x[17]=11,x[18]=14,x[19]=13,x[20]=12,x[21]=15,x[22]=14,x[23]=12,x[24]=18,x[25]=17,x[26]=16,x[27]=19,x[28]=18,x[29]=16,x[30]=20,x[31]=21,x[32]=22,x[33]=20,x[34]=22,x[35]=23}else f=new Float64Array(24),f[0]=r.x,f[1]=r.y,f[2]=r.z,f[3]=s.x,f[4]=r.y,f[5]=r.z,f[6]=s.x,f[7]=s.y,f[8]=r.z,f[9]=r.x,f[10]=s.y,f[11]=r.z,f[12]=r.x,f[13]=r.y,f[14]=s.z,f[15]=s.x,f[16]=r.y,f[17]=s.z,f[18]=s.x,f[19]=s.y,f[20]=s.z,f[21]=r.x,f[22]=s.y,f[23]=s.z,p.position=new m.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:f}),x=new Uint16Array(36),x[0]=4,x[1]=5,x[2]=6,x[3]=4,x[4]=6,x[5]=7,x[6]=1,x[7]=0,x[8]=3,x[9]=1,x[10]=3,x[11]=2,x[12]=1,x[13]=6,x[14]=5,x[15]=1,x[16]=2,x[17]=6,x[18]=2,x[19]=3,x[20]=7,x[21]=2,x[22]=7,x[23]=6,x[24]=3,x[25]=0,x[26]=4,x[27]=3,x[28]=4,x[29]=7,x[30]=0,x[31]=1,x[32]=5,x[33]=0,x[34]=5,x[35]=4;const l=a.Cartesian3.subtract(s,r,y),A=.5*a.Cartesian3.magnitude(l);if(o.defined(t._offsetAttribute)){const n=f.length,a=new Uint8Array(n/3),r=t._offsetAttribute===e.GeometryOffsetAttribute.NONE?0:1;e.arrayFill(a,r),p.applyOffset=new m.GeometryAttribute({componentDatatype:i.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:a})}return new m.Geometry({attributes:p,indices:x,primitiveType:m.PrimitiveType.TRIANGLES,boundingSphere:new n.BoundingSphere(a.Cartesian3.ZERO,A),offsetAttribute:t._offsetAttribute})},c.getUnitBox=function(){return o.defined(A)||(A=c.createGeometry(c.fromDimensions({dimensions:new a.Cartesian3(1,1,1),vertexFormat:s.VertexFormat.POSITION_ONLY}))),A},t.BoxGeometry=c}));
