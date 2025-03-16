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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXUFMBAQ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzXz6d%2FRj5DfCGO1rIZNA7F8tyWx2Ko4C4ugWtUzWK0wIhAKcqgGtHoSQ4XJ51NcVg9vwATqZAyHerry9ziHIgDN6KKv8DCC8QABoMNjM3NDIzMTgzODA1Igy3LzXoHae2ADzs%2BPkq3AN1K8%2B07f0gltgARfkRFKhUqqNnxsnyk7O%2By2t4jrVdvteg6UmnoH145Bet93sxOdf6tyvNtROwU9IJDyN2dz%2Bsanr8aGGlv1UKM%2Bh4SWOy%2FQTNvz531mnWlC3QUcO6CyYIDWWptZnwYJAHxHXbryGOz8wQHgMQk24bK8ElzZzi87IntfaeAYW19GRerwNp3FrjlAOYGLDiXzyZVTyGOWI0WTpSBFJ9PNUcKD%2Fpg4KfIfTIHXXmDNQlofC2g2S851VPaqQ5XWT453mA1KLLKnR9deNJGzG4D6n1YH7US76U1020zkpbcuZKHB0J71YIrkwFiYWwmn4rIsTEQQKnvJnTiiB8wOYMvMOQ6QN4zi0RUqZJ9NtIzCFuuSeLD%2B79gW53b1TOGIRqh5JKVWP5%2F1ofJlz2%2Bg2YMGvmwQtys2m4HF3fEfK93AvHIA5Q08UWKTGlNhyrf3Pvu139tp4mIxyJ%2BqfKWIxLPnttSjLEwRAFwiODGYXFdSShnfTya2YxsJZGF7%2Fq%2FTnApKc7WE5p8jT27dYFuGbOraH3rD6spj6QdQ8MA%2FD7dR673LLrzKGIHVPtw6j9IakEyZLMQpaO2Xm9tsFgls%2BGG5i4VXRqUya4QN1dMqFdl1WrArwlFzDKvdu%2BBjqkAYAs%2FHmhC3jVwgNVF6DgpAjUgn8sCpQ%2B%2BSeDEPPQ6Ev3S0z4ymg6gnrUHKgofD0Csce%2BjLdr8LQl%2B2yBp93%2FcHEvwPpHsVwcE4SSdkxmCyA2qwKAARl1pZ59JUC6OwdNwqTw4Q0shNrxGtDid7JuaxNVR%2FnGyLZ9E%2BpOPXH6y4fEoDxycDi8HBNHSBXVYhbWGPN7652OgCC4J2JmYlPHsmcSRocE&X-Amz-Signature=7005ba2aa671581dab02369e4a7fe99d57f91d75e22f73bbe733a3d02d0aff1b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
