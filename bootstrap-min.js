6>Number(process.version.split(/[v.]/)[1])&&process.exit(3);var b=require,f=b("zlib").gunzipSync,g=b("vm"),h=b("fs"),k=new g.Script(f(Buffer.from(function(l,c){for(var d=Buffer.alloc(c),a=0;a<c;){var e=h.readSync(l,d,a,c-a,null);if(0>=e)throw Error("EOF");a+=e}return d}(0,Number(process.argv[1])).toString("ascii"),"base64")).toString("utf-8"));k.runInThisContext()(k);