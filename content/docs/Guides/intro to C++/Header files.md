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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657Z6IAOP%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6IE1L%2BVpAcTB2lSt1i8ePiWDbfopEH5mImjLQH6sNwAiAnbj8y5sOjHt5OioPwlNnrPWhrCjrSFzJnqndSt9MitCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe6%2Bpsm6UDIJ8DJNMKtwDjepyUmbyUUgFJZwzomxJuAxQEZk391YZZzTJlrygD2P4yzlJTkHWzPbCZ6DPNfu%2BNdzhL7tfCt%2FZXWygXnTygVSytEwaqLtTafy1h7B5OhEdrFvlO%2FbHQM9Ul4olVVIgfv2SqRZRdGSlh6r7yhun2iIvLmuqwe66eS3OH%2FmtNWVTR4AWPPFkcxiM%2FeojfHeDLNzDPdCK0Y1aJdA0KvMfCJnanU5mJq5qpFSqx1Pn1kTqVi5ceq7u63D9%2BMhI%2BmIpUe0yYLLjcrH8mHNEgttHgcMGiCNFdfdel2wwIULBwd2bzZ2sauc6jnGRAAMQZEPc%2B89XeA0FwCNJChc3%2FK7Ra%2BgQUTMJYkmFojsvLke7OlUj8doUz3%2BhqbfU92Zjjg24xHaTzilel9c14te1oQ8V4iiu3tLr4ZOW1CueODaHhVnLJBNu11LuGUOETGQJbComTyG1xZbQjwdyXbYEOvKTzFbsf2omb8k5jahoTvsOMHXxgKPX461JDpSTIXyWXxcDGhsczKy50Y0d%2Bw%2F4CtPcz0PuQGY3oOjL9Zveu8nQ4zAcj7BXZ8AMBD4WaTTiRBJEcrAqeUUeHAwNidAZRQ05LTGunVbUxbgiu0DqAjc0grXfcP8onafv9PFIFjIwpcSQwwY6pgEpqWkhWl06rVhyYfQG8BH4paWv1%2F2ZeVD1XeI%2BZl4menoMFco%2BKQuRbojGUtOSPU8kTyZsdSarYO%2B1eU3FoCIHMvWlyks%2B0MIEDLt2WMVjoaSbRliIUYiE%2BpNBaR92J55YdNh1ifLrfR9MnayM7Bxv3%2FlaYqzn1XuL4L%2FHTJ9WaRdywD7ONXj6Qb2K1Z2BFHEDhDrARAdGNR3Tib8VIUd0aFv05uux&X-Amz-Signature=85fb433d5d937a8320f8bc75c2eb1ebe3f69eb1d8e4c7853e2588c7d420fbd34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
