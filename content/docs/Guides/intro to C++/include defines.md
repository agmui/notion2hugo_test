---
sys:
  pageId: "bf3df218-7a8a-40ea-948f-f7cebc4a46da"
  createdTime: "2024-06-25T02:27:00.000Z"
  lastEditedTime: "2024-07-12T15:58:00.000Z"
  propFilepath: "docs/Guides/intro to C++/include defines.md"
title: "include defines"
date: "2024-07-12T15:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 116
toc: false
icon: ""
---

# #include

like python or Java `import`

> `#include` works as a literal copy and paste

### Ilk.h:

```cpp
class Milk{
    ...
}

```

### main.cpp

```cpp
#include "Milk.h" // like Ctrl+C and Ctrl+V

int main(){

}

```

## Result:

```cpp
class Milk{
    ...
}

int main(){

}

```

### including headers from other directories

```cpp
#include "headers/myHeader.h"
#include "../moreHeaders/myOtherHeader.h"
```

### ok but what about this

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

## A.h

</div>
<div>

## B.h

</div>
</div>

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```cpp

class A{
	...
}

```

</div>
<div>

```cpp
#include A.h

class B{
	...
}
```

</div>
</div>

## main.cpp

```cpp
#include A.h
#include B.h

int main(){
	...
}
```

### You get this `error: redefinition of ‘class A’`

## Result:

```cpp
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

<details>
      <summary>Why are there two A classes??</summary>
      In main.cpp we also have a `#include A.h` so we copy A.h into main.cpp
  </details>

How do we get around this problem?

# Header guards

for now, don’t worry so much about what the code means. Just know wrapping our classes fixes the problem

```cpp
#ifndef FILENAME_
#define FILENAME_
...
// your code in here
...
#endif //  FILENAME_H_
```

If we wrap A.cpp and B.cpp with this it will first check if a file has already been included before

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

## A.h

</div>
<div>

## B.h

</div>
</div>

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```cpp

#ifndef A_H_
#define A_H_

class A{
	...
}

...
#endif //  A_H_
```

</div>
<div>

```cpp
#ifndef B_H_
#define B_H_

#include A.H

class B{
	...
}

#endif //  B_H_
```

</div>
</div>

## main.cpp

```cpp
#include A.h
#include B.h

int main(){
	A a_obj;
	B b_obj;
}
```

<details>
      <summary>Step-by-step breakdown</summary>
      the first line in main.cpp is `#include A.h` so we copy class A into main.cpp like before.
  </details>

## Result:

```cpp
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

```cpp

#define PIN_NUM 10 // like find and replace

int main(){
    int newPinNum = PIN_NUM+2;
}

```

## Result:

```cpp
int main(){
    int newPinNum = 10+2;
}
```

### Can wrap functions

```cpp

#define READ(data) read(port, data, 2) // has pre filled arguments

int main(){
	READ(stuff);
}

```

## Result:

```cpp
int main(){
	read(port, stuff, 2);
}
```
