---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FVHKWG6%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIGppJFdupxvYEVWaR3ph9Bi8vUQllRwmxaSNjZKFOl6UAiAsqRym8Vw9h0CSW%2BblzvvfsCKrQ1mfD5%2Fe5Whrc5S20iqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtTNig0KqlI2cg41mKtwDvdr672o5cWY9XLdVOkU8%2FcsTZWWB%2FvCtU4EoMewqqD74d%2FVSh8J%2F52J1tFmWFLGYh7R6xHlAAx%2FzOux%2B%2BV4Ik1bzs1Q%2F6IjHBr%2Fr8zK72DAcB56Z%2FypjHzEk0IL5VBvdB0gvQ0w0Nl5DY58XthJUnejgHFr4cDOsfw5dZ34LUcsSyIDrBkdmVkxSFY2mW0YMw08hP3jRbjyQeDG27XM3lc%2Fz1Uz0%2BDstBJ2u0pl7Vf2Sop07Br0o%2Bhrt2JbNOkQtkCF8jtSRXP8%2BM29yhB2Fj9xggpKbCu%2BlLa%2B1np3iuvxjjA0%2BePgaFkrJG9fRM3e99BaX%2FpgdzN%2B9t6TAhI3sttJgwRi5KODPT2M2b%2FH7goKyY1ZwZt8njuO2HfljyOkOAHneAsnK%2BllvWAkEntlzFjZP%2FC8ioGdpDmPL9uvaGXh1L0tyaW6Y5r0iYliOuZ0WxSe3Vwezw%2BHld8Ha37hTYMbR7WP68ldvT1aWAYPg9bdUs%2BzGt5DZVL0MRfI8qt3e59Eh0AkwTmv%2FLm6C1NwVhX3x61QlKF%2Bq%2Bvd7P028JTRF5Z%2BHQ1Zli0F6pJOXXFrhwUdx%2Boh9Cj4ZnYM9maUn5Olnq2Jd%2BKA8KHwIBqWnGK2KN6hOP8BQgSIwrFgwnqSMwQY6pgEotcZ196KSRgCtK352SDFEU09Xv5cUBrulgZ%2BNL%2FG9dnLK67uOoDQmRbylR5nVqLB3dcdhZVdJJIzxpQxZGnubqJe%2BLRMyCleM9h7DEJimOjsfqCw%2FQMBJhTcaV%2Fxejh3Mqe1cfZ455GuIULNP1zRY5nXZuMvRkQY1nPsFbyP4PQW1kng3oB4nvrgenglw9mdtleZX4sVq3vrJFyM8d3IT9Z3nR72n&X-Amz-Signature=21b72b09c47ee4fbace397f55c03805d7a160df3d65032bf3fda6563537ebf84&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
