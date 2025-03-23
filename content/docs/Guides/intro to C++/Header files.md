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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOFORPCE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIH4XDlpffHJyNrrd6J%2Bc3l%2Bxt1qrFKEk1iHxKLWYJSsfAiEAhJ56TqS%2BAX%2FsOkBpvAJIorNeReWnU0Ch9JQ5MwoylgsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZab5ht9tf%2FXUBuRircA61uX2iO7%2F8bfNMfXAsi9T8c%2Be%2FTdiz8qAQGW0QzhskkK8%2F%2F%2Fa2O2vAdKsr7aq7p7%2Bfb7jkRUidBKGfVJmOknJ9E0qnGzYpJ3M8wNZvLWWwZTr1IaxltBTZJFP5nHHMruK6JEg0kPpihv0ylALP9no3fydbsuOyenm6M296izIWCnHR4D9U8DUaYf4IWBuMrfl1rqvkhe3aML5E1uz%2BM0Mt947xB9O1wgmYdplKi%2FNIuuFn2og9bFanGaLJn1f3xt4%2B%2FZtiD1uLDnefPohKBfOR4NbbeaTDAHdrStVLPNOBLabENQXo0YNwpn17ZMM0RgsIwpD73K3P9QQY7u85hec68IZw31qXvfDlrPWFOuxuVOssv7rDmTRkPaIf2tezUjHn3CoL6ES5K9xuslqlfbI5Uxe7IIZGtA%2BiQIcJOPbhHuOKbeep7TgriQU3F2QT4dvwL%2FYUvvYG1PC7ldvukuhEDHC7lHP%2FRseA1YDgLPtGwEWu%2Byp6GsFUHcKwmKP1vqjM81SBMNXxQj1wfgtPqG2j2kUy9qbopPVKOM5Zft%2BRlB6FFqSmt0el2sEIIMB9LnfsSCS9pR58bE6k7lPiflcmJ4nvip9AV6yzTQccaDqE51e2qM2O2laZ2151cMLLy%2Fr4GOqUB28IcV878q1kmBUcyBrBfCjaUJdpJ%2BbuVxrr9BZleaLFbFPbOPEqmTgms0heKbrN6icRLSvWZWIsSOdvGqB3ZHAlxx1xTUzFZc%2FTwdWuO36NuscF5GAMdmlhT3RTtKICA2tqk9nca9QVEz9gQc%2By%2Fw8YbIORKaOyJwVHnXfUH9jUkNzn9fy96HYDsQ61%2B1Iz9MR0r7mdBBR8jFLYbGVWvw3asOO2A&X-Amz-Signature=15b1e3ae4b5557ebe7d153a6f504e615cfa02386705e97afed11cb4601025479&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
