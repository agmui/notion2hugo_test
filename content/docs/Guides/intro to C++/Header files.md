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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6QH3HM6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGM2ndN1LuStXPpbNDVu51HUI4JHaPcIdJ%2FPH9lzTAX3AiBT8D9ENASA3ZbIS5gGVS6cFBd6Con8sP2tcGQJ6%2BGBiyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5pOL6s6SY%2BHsMEs5KtwDwS7lfy8ZC8Krxa0mvZA6dyQSyGOFX86qJXBjPEd818Q22t9CSEMF9CKBKHIWGTsq2UuDM2D0P18CSJs9QeZO%2FfTspiKBjk%2F%2FTysuYDpWFR3eCdDv7Rq3cFbK%2B%2Bap9FqmJpTcK%2Fb9tFEVVxwmAtkhL75JKLnJoTn%2FRjYKsoYc54m20nhiySaqKLspfNWYTRgkdCispiBUGpwVyEuX93ufpv9qmdQjX2p8j2ZMx6AGtG%2BzLuBjKHD3EguNIODMg5Bx5cC5C06s1e%2Fu7M%2FVJ5LanXabIsHaB92y238PT7mdhVDTzQn0KU3cRTGqV17XuwQh%2Fe96ZA%2FKRPeuPIWm0BzqYAPnNE5VRjLldRmBeelvybSMNAOzmdAdfa2KoAJM7FN6Xk6DnrERPnTkuJKmGEjHjZAcNxrAgryqP5NoGYXl8P2R5wBbu2iG%2BBpg5ERTmtTdT1DLybBuJDhpoVUEzq1hZ5PkXF9Momw3Ybqo0N%2F%2BaHzLGAHg1azaXIPI4uUCukiLq%2FXo36npLaDM3cd4DR2oNZ%2BAle8QFi0WzRCN9Ac8ryL2o7XJnNN6MvkT9vp4YRAE2JIuaHnk4%2Fw%2B9eGuFD1qc%2F7HK60%2B3kgAvRHi%2FoVlLtNTNMcFl2f%2Ftrixfbww7%2FzIwwY6pgFLBHPeOJyUQ3FKLQXPOsOvMeOz4fP03hON5pLwd5oE2xcMcHxxL8dlgW5F5XMlo%2B%2BneLQgMn82F0HL%2BWd1C958MCmXWjEKQzhyaOmQ2H5E39wCJIiVcRIX1SZwkzsi2skgTZe8J5oVh5kKKL3CqAhu4qsBfjIfZM%2FR7Np9i7k1nE%2FWXFUrd699E1UYaj6nG%2BDmM9pXcbAAeq%2B8JG8YPV1bbubfODvu&X-Amz-Signature=40c5755d6d24c1cf3bf76daded1d12f9e9b02e91226db40e12e730e826d25d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
