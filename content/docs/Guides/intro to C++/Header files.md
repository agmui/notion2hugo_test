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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOO463C%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQC0BoLFVsl%2BakKrSM6ffcYq25o2NIBXHBB2D70UEu043gIgZDFCK4VKmYSjEIdH%2FglaZJ8IimzQU8M59xgQd40csrMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDMrXYwcSRPcOT2OqYyrcA9QoUbH0g4xk%2BWI1HTxF%2BTV8mp40GmT1Jklxb9k0Sz0VxRMTg3IFRdvVWDnUxL5JX6X3F4UW80I8GrgP2%2BWiMcTQ4rGFz4lvxzV9V9MWwAZTXZ8uME9sefXONFpBpwZv4zAoOwcQjLnzITs%2BGcMl4h0zas6EBSAAGeViJeaDsaTt5nHsGe9Nyacm85AKFARwUKzPHwcEzrlrZP3l7Cgx6g3booh1D8BZ9Qcxcg0wCMQUgCk8%2FI%2BmMHg48umL57FbKP%2BK8ur%2FUcaJumNgNO5n6kpo7Ei8RdXWsEksdlSzzEHph2B34M66ndH0tmZ2xOVf1NoXbvc8eqbucgSh%2B%2Fn6ZQs94O7gPpn3jOSm9GE602gz4Pi61Od9loNsK1x3tcceOC9xskfS3avrt40LRaFyChEPOrnNnVy5jZqE9wSsXf%2Bm5p42%2F9GjXVoF4J2BqFUnrJ%2BUVZ167%2Bx9Vo0%2BOtw3VLZiTd87IN9SnsLdLc6Twb6uEp8f0VxsUpeLkTAw8J1wh9GaSebWXeDnqTFhvYVeMKPsUJ07s0X1FCJRAId1ptcuEcVByDfU3AAi9fIDPbeMjkGiXa3%2FkuaYgNIs4%2F%2FVvKf4LyhdbhfmAzW8pAzAAL1GAvoTaKAizePWWJdcMKWgqcAGOqUBkGwO3F1NZelT9t%2FT%2BLiIJtLDG%2Fq060k5dhxyAhvwcyJa8MAlTOJWse4caBjQYMpBhEDMW9FaKoqDIgRoXsd8D0Mtu%2FXWxQrYpgzMp9IOUlW02PQwdbn11cSoqwJ5rgNQPfnqBpSYD0WJcQaMpKO9YE6Sp7lwnay5P%2Btvscx5JwrGoisIqSkddGwqtojrO97x9z7G4KyjIxMUOeML2bcTr7S7vyTO&X-Amz-Signature=fa2f365f6e52d293d4c0dd78a856c1894e013c27b030174ca3ebff42a554f557&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
