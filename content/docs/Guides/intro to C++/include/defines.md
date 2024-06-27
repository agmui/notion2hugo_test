---
sys:
  pageId: "bf3df218-7a8a-40ea-948f-f7cebc4a46da"
  createdTime: "2024-06-25T02:27:00.000Z"
  lastEditedTime: "2024-06-27T13:07:00.000Z"
  propFilepath: "docs/Guides/intro to C++/include/defines.md"
title: "include/defines"
date: "2024-06-27T13:07:00.000Z"
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

### Ilk.cpp:

```c++
class Ilk{
    ...
}

```

### main.cpp

```c++
#include "Ilk.cpp" // like Ctrl+C and Ctrl+V

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

### ok but what about this

		## A.cpp

		## B.cpp

		```c++
		
		
		class A{
			...
		}
		```

		```c++
		#include A.cpp
		
		class B{
			...
		}
		```

## main.cpp

```c++
#include A.cpp
#include B.cpp

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

```c++
#ifndef FILENAME_
#define FILENAME_
...
// your code in here
...
#endif //  FILENAME_H_
```

If we wrap A.h and B.h with this it will first check if a file has already been included before

		## A.cpp

		## B.cpp

		```c++
		
		#ifndef A_CPP_
		#define A_CPP_
		
		class A{
			...
		}
		
		...
		#endif //  A_CPP_
		```

		```c++
		#ifndef B_CPP_
		#define B_CPP_
		
		#include A.cpp
		
		class B{
			...
		}
		
		#endif //  B_CPP_
		```

## main.cpp

```c++
#include A.cpp
#include B.cpp

int main(){
	A a_obj;
	B b_obj;
}
```

step by step breakdown

	the first line in main.cpp is `#include A.cpp` so we copy class A into main.cpp like before.

	But when we get to `#include B.cpp`it copies the content of B.cpp into main.cpp

	Then when we get to the `#include A.cpp` from the copied B.cpp file we try to copy A.cpp again.

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
