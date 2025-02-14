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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LDR7LHK%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjmK436JIa21Sf8HkJ1Q9FbTpDdWYirzojhqOGhhRKeAiEAl0i%2BhmaRZDBKAXDxRJYeXcml3DBzKMOOSsWwYF8fIuMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCqd9RQ3LcOBA%2F9h7ircA3yBrqWDNxxfCNs3nk6mbppO1ju63f9N80veF81862O7FaBMJq04G138cBK5H8Mzq1aMlV1XDxE1%2FJlARz255vfVP9%2FK9LijgIvTvlqfsD%2F0F8IrnBMyKiFLji6Eu5Oh5sQKwlohxatJWZrH7UV8UVTUzkBkymCdBLfTGiceS7XK0s1EcujwbQiJ7qMCZUVggM7KrLQu7MpjIsGKuAn0ocD%2BPM18qlZfUX1KT3F5B8LDX0prNa95xU6QDAsz37%2FBhowiuRWUXkOroDkmsJPbIMbU97kaeh1S8IodqhqAljWmHhbb5woKZZP0KiIs2hkiCRtyiMvgO6gHmI%2FtBv%2FIiKDDXQcm443mfJHM9noRSDPTA4lMaua2zGLl4zNoFoTZ0vXg1OoC8fhmWJWf2tL%2FbyRrmJ8mdLzUZhePl5zBi9TAjVlnB0%2BwsH47O2BLCtkN%2F1QGr5RDi906wZ5u%2FwU1oazOMntOKqibJKrEVLv%2FDI%2FdI7ajz6F1Nv267UF5xlr%2FTjTMeOLA3cPVSo2GvH2mdaxlJJzB%2BQ9EibOABS4w635flO%2FaG0Eska5AYbevfYI13dxXZ5byHSnapWcKJjP%2Fq9IPRHPfBEncg9%2FI740cQX2Dohrg3lmgCOjZELP8MPrqur0GOqUBuyxDzMZunwp1%2FbQ8Md97EX7rWJujVd10AjBnle7evzrgs2G2WKfKHkCxGQLIrA5aSVdZBUYWAtEwr5Gz2jaSGIUju%2BGX%2Bsd21ZabjZ6s%2FAv1ngAujmeswfOgRP3SfW6j8NZOenc6lJUZjZJnIe4dRoLOefZGdlfrNWCxhbkDUgnZiR38Nw9POQI7pa8doQkHRyaIH0RghGRKui7bTAq0t6Pyw9pD&X-Amz-Signature=813237f4d0321e34bf8132465a0c5f6977e1139104514000499be50414d5e7ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
