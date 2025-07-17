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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VCWZKG2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCOuA6hz1liJepPC91%2FG7m60c48cGiyrb46XCV%2B%2BEgoGAIhAPAo9ZqatTGQjwAWbLuX6Z0p2hSp500190upGL7wx7KDKv8DCHwQABoMNjM3NDIzMTgzODA1Igz%2Fi1%2FX88f%2Fi7IE1%2FMq3ANx%2FroOeSL80Fnv54H%2BH57TN402TLmAxFir9kZgOUKNz4GxXbi1K9%2FQs5rAOQu%2FKwISjpil50ddiMsJaKWxJLMXZxTdqdrufMJHE3ylp8fGA5H59W%2F7tu1O2bMDqFDP%2B4OWLiyFPMgv6ThvQxeM0ogZU1ElHfG2%2FBIIqontacnhlrU5xD%2F4OCj2FUqPVYBHlomm0wNT2km9KBk0r3PjQ7Etd98ByyikfYEXTg8IndUmqi07yQ7DhFnwW9CKTqqQpdug%2FWOoYhbXvTeDlPjnckutkKAnqmuI6miibcAohvTvQq7KdTTwVMxl0QCBMWux%2B7eLGU6LzqdFyf5b6yN%2FLSg0gGXWKGrrKS0IZkUe%2B%2BTb39tOnu%2F3kwHXAbWtdIvf6%2FAi%2BfoK1pxac4hO5m9QTAZ5KccQUXtszKnL%2F1Bo1hlnS%2BHGrtl2cJpreumMtXmJ3mXX%2BgngZjkl7MasTKSe1ru63znnEP%2Fzs85Pgs%2FlS%2Bdgj5w4qWG8VEogQvDh%2FdMU8ycGl2Zl2QFN38g4dtcEDAUzd8bUyAqcGm8cja6YXXhTQn8RLcbAubI%2B0nrYZr4pvst1RTrLb%2FGQIKJy1m22pJ3rs57tRcFLG4vZcfLDuA9iVyZqI9Fnw5Y0guwNOjC2jeXDBjqkAWsVru2yvDQ4KHPYSsStno3iNdbTFV0CFwMSy9SCJB4%2FsLC%2FNJIFVGwFl%2BFYoTbwVI5eQ9yuV13M6ionvS2%2BCzpYwYzJpYFajWwwHV2sNzRECOVwx7Hbp%2FhH6NdHk8LVzhU10gKI3%2Fr5cBhycYqaiJbkPAFxSalb5uO%2FRKxQ0KvtVtn77eJVj3rsBbAbkv4YG9x%2FDDOQVqG27P0CCSSwZEnEslzM&X-Amz-Signature=5452c2571489eb62e1e57e5b35ff66d77d06e7e953f5892b08cb0d2eb6366e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
