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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVM2TKMJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBm%2FJUYICi9PVXM0fIrn7MBxCDXlURzxh9GqPkbPKExOAiBUjAN%2BQYIY3d6Rq71b9c7NK7CF1ZQmXq7Hu%2FrIM5qQUiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQZUackKyG2CYhlSKtwD052KvdGyWBwdzc9as%2FK7vF%2FrHX0IzSH7LSELTqmnbgc9c5HdqSDEyjOnZNWR6HGC5K71RIfGA%2BixPfnYFfY7JR%2FJL1%2BcjYkyFIAYHepvfU%2BAQUPWSpBvAAfOQPEIb9X%2Fiwis7SPbCqFUxT5Xq0yJPxrycnODeIbot3zsTouOwcBPr5uRab0AFo9U1wGaCcU1QttH7tn9nPV7dt%2FFYqKfMkRsuvp5OjKPSVG%2BvO9LDgDCM%2B0UTkX%2FQWefQvM%2Fe2DD60tw6b%2F2kL2RN5slrbv6AUq2Qkus9cdxx5VJnDo9rDCePTFR51TU1APflkll5KxJBQiL1Y626M2mpBNIoSebcQ8pLAdFLbpS3oW3x%2FLtDHeKsrV9Lw53Yip%2BmMmsEoWFmVjhB%2BPAsK7bz5IVewDI0fzz0Qo6xqv3yXdVotnNtS1yGtiL41%2B0pFenfj0cmIOLfYmgf8PzTUF%2FcGnRq8cmxEHOZml5MjiOBmMWx4KREF1EeKG3xHMusUoXWzfWUY2d2N0Le5z9u4H9RQBQ1Vep0DAkQubnRzPd4d1tVmYeU2KfmGQuJh22TnMeFGMNBe66Errd8%2Fz%2FW73hHMfBZ63w76ro7wZ4ZnexILfAuc1NsmwDd9MyU1EK%2Fnga4SowgvvVxAY6pgG7OhReSVN5MnS8BEhJqRJJOl5YEjQRACBBrnyHdFZ3g2eYkqcMq2iyVZQIMPi5EL0Y45b5TKsDupXmGPBbQ3y3Dwy1qka0lFN%2F6putEPkIrsWhhYiBRFeawMelJtb1T7MyKskiIXRQuiYEPRTIlHPwISThNFBu4ic2fyUBADE69%2FHCU8AG3Vg6NB76dPAm7XAsthvzGNooeWniGE%2FgPyU5Etet2pY7&X-Amz-Signature=80d36357a21866382286baca59154cd1360152859b5d463517f1f56d080296e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
