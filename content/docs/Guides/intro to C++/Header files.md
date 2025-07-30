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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WFR4J4D%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjSjzL2TMAozBpGy3%2FyG7BPeEv926xBpDB%2BnbHMYzVUAIhANn0d5lx5YAno5wD6QYuayb7o5o4xzFueBwTRATrG524KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsohT3BbVU%2BzBzqUIq3APHn%2BFSpLLRdy7Bjwyzv6UGVd%2B8o6T2DKvHMtWfSaubBBl4FG%2FOPCNN4VBvbnR93cFo9Rup%2Br6ZRYFYRodYmHFMXJ067ln8mX936UpyTxNzjWxqo%2BODi8IYK23ibBJzSx53DPhd%2FSsceFvhw9LsAsNW%2B5%2FrKb1vNiHebKZobaICugC3ZhklLSCabrZlqIjJ5R5kRoqJmUuk5CSskr9BT1uIzCe9Emo6pTCclN73aKBMjDGRDrq20l2D9HEUTbDR4RVBIYwaxDbfzCShBuL2YfoTXOpaaBkop5%2BhlNlE0gIfKVGHrsZJgvCdnBb0pGUm4enNj69%2BPqYE1vU7fKcNv1cUpbh1j7Sjm%2BEAsfYElcw0UpDiWjAUVdNl1OgUXyPuUhFvTaL28mqnTcH6u%2FuRtNdHkmVcDQC9Ws%2F0LX4uJ3f1K%2ByiWlgsLZd1Ihlset1vzcn1X2JXGQeCNOHfqkPJV9Tmm%2BtDPAOiJz2Q8NK9DYkSth6EXdLN0H3AYZ3a86sddDarLv1p2QIyedba9yKzeSlDGb3xJwm03%2BaLUL4HUIYVeozRdq%2BqO78Q0ZzlEwfaKaC%2FPoTM6%2BjR3mFAQnQYlTXeM%2BnPBAxzE8%2B3p%2BSvv%2FlqR78sCvALmgfk0wSF8TD0oajEBjqkAWAWyTCKafnrd%2BitskPyaT%2B4XAMFlIE7%2BkJA9VC1jaRfh%2FQp%2BSPNKDkpUvkAuwC9LmfPGq1gqcATXBVt3HRfqdm7mMSr4KVyAXEXFjDXDTxW6FM2oJy7AIPt10gsRPfOJrZ%2FPynhof8mNDrOzqvkxesHItsnhwW8LCIdNM6n4k%2F%2BSVxSpg8f%2FnbRtU7M5Sz671XfJlqaqOjlcp22lfptpJ4%2FySEY&X-Amz-Signature=f3e359bff4e2db9fd5f65d85d9ab7f1a9a8d40a5ffac2bc383c1e63c1b45f87f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
