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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCNOJZDZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDkD5M2CjlHIRlTQ6Nbmv7ANGOVqx0%2F%2Fw6z5yovVP7MPgIhAO9j9qyK%2BzW%2FdR3S2MrNN5ApFFtVG4YFPFC5W3A3R4AeKv8DCDsQABoMNjM3NDIzMTgzODA1IgwuswY0PnII3qgfXZoq3AMs3fG6g8H34KEDmb%2BtrUNcfY7u8ImmFSg783hwC5Hyh7irG7TsFup6ecFmfcitvCs5bVSgFBo6yCkXSD1UM%2BmqQaBABbAb8ir%2Fvk%2Bc%2BMD0nui4btKZt%2FfCAnyMUoi6dz2Pd4BCrOjRLsDe0tsiL26xzpONMnXFfOByegXLqbJpUUq%2Fwz%2B1gyq4i6BpFMUGteK9odtFvP4qyY5ZySEq70axS1Bi2jeoI8veFb3%2Bmcm4jWUWIuMJteyKaRSFVJ%2BFI5ML9LoU6Zo1%2BEIicFvRFaLGXfCC%2FzsENmISRTyq2uF4tfGJehFsyRlULgmBu6QgJz9zof6az9IsQHJvP1lS1bRiQuN9GFyN6Bsg0YO%2BzH%2Bsbz5Tsmhlur1tqshJ6l%2FT82b8x2U2yC0uA0t33sWK8XC%2Fq6U4xz9pFEfJkMVWcSDk8CMX1%2B0tEjcig2yc7DpFhCzfcMIaSn1mcqqFCAdRlr7RtBoYgAw4taHvnFzaWcJIjfYwVK1v%2FBy1OjlEFfDt4IRb4fyE64r1WJzL%2F74DFfoqajn9wHJnK%2FMh8I6cweyUPNFcCUqcb439rCVEXWGY8Tsv1jKvSJiDtM3lT5zfRmR1p07MuyDAtC%2B%2BdJfPs2BzmQA6dLDoMC%2F4xjn5DTDmnc%2FBBjqkAUjsfxcxM4fk2OMEWefjl5UOydqRthWwAYb2VK9NH0HhBXzTcXlKO6a9ixs%2BG0hOhGFiHs8CHhpABw2tEOiXFuA3R2JlbR6m3hsCrtIfTXWXTgF%2FR39dXOi5Ongjn4AwnPMiSCxU1LLMzZxvrPRT8fExZrTDJll2YUZoMOBhDjVter%2BhYjiHV3YDDQZLY8Xds9m3yATeuzGe5GIm4XsxnV%2Fub4lW&X-Amz-Signature=9be9a86e870af0b147582a1fd932beccd3e29d5ff5e8292ae252d114c8d9c09d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
