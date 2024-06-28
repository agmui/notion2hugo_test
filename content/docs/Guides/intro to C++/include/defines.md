---
sys:
  pageId: "bf3df218-7a8a-40ea-948f-f7cebc4a46da"
  createdTime: "2024-06-25T02:27:00.000Z"
  lastEditedTime: "2024-06-28T15:16:00.000Z"
  propFilepath: "docs/Guides/intro to C++/include/defines.md"
title: "include/defines"
date: "2024-06-28T15:16:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
toc: false
icon: ""
---

# #include

like python or Java `import`

> `#include` works as a literal copy and paste

### Ilk.h:

```c++
class Ilk{
    ...
}

```

### main.cpp

```c++
#include "Ilk.h" // like Ctrl+C and Ctrl+V

int main(){

}

```

## Result:

```c++
class Ilk{
    ...
}

int main(){

}

```

### including headers from other directories

```c++
#include "headers/myHeader.h"
#include "../moreHeaders/myOtherHeader.h"
```

### ok but what about this

		## A.h

		## B.h

		```c++
		
		class A{
			...
		}
		
		```

		```c++
		#include A.h
		
		class B{
			...
		}
		```

## main.cpp

```c++
#include A.h
#include B.h

int main(){
	...
}
```

### You get this `error: redefinition of ‘class A’`

## Result:

```c++
// from the #include A.h
class A{
	...
}

// from the #include B.h
class A{
	...
}
class B{
	...
}

int main(){
	...
}
```

Why are there two A classes??

	In main.cpp we also have a `#include A.h` so we copy A.h into main.cpp

	Then in the next line of main.cpp we `#include B.h` so we copy B.h into main.cpp

	but remember B.h has the line `#include A.h` so again we copy A.h into main.cpp

How do we get around this problem?

# Header guards

for now don’t worry so much about what the code means. Just know wrapping our classes fixes the problem

```c++
#ifndef FILENAME_
#define FILENAME_
...
// your code in here
...
#endif //  FILENAME_H_
```

If we wrap A.cpp and B.cpp with this it will first check if a file has already been included before

		## A.cpp

		## B.cpp

		```c++
		
		#ifndef A_H_
		#define A_H_
		
		class A{
			...
		}
		
		...
		#endif //  A_H_
		```

		```c++
		#ifndef B_H_
		#define B_H_
		
		#include A.H
		
		class B{
			...
		}
		
		#endif //  B_H_
		```

## main.cpp

```c++
#include A.H
#include B.H

int main(){
	A a_obj;
	B b_obj;
}
```

step by step breakdown

	the first line in main.cpp is `#include A.h` so we copy class A into main.cpp like before.

	But when we get to `#include B.h`it copies the content of B.h into main.cpp

	Then when we get to the `#include A.h` from the copied B.h file we try to copy A.h again.

	But this time we get stopped by the Header guards so we end up with only one class A

## Result:

```c++
// from the #include A.h
class A{
	...
}

// from the #include B.h

// NOTE: there is no class A because of the header guard

class B{
	...
}

int main(){
	...
}
```

> **NOTE**: Header guards must ALWAYS be the first and last thing in every `.h` file.

# #define

Literal find + replace

```c++

#define PIN_NUM 10 // like find and replace

int main(){
    int newPinNum = PIN_NUM+2;
}

```

## Result:

```c++
int main(){
    int newPinNum = 10+2;
}
```

### Can wrap functions

```c++

#define READ(data) read(port, data, 2) // has pre filled arguments

int main(){
	READ(stuff);
}

```

## Result:

```c++
int main(){
	read(port, stuff, 2);
}
```
