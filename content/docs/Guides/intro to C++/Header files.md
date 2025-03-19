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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUL5JD6%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCGP1p%2FyAeF77HDMIOfWxUSlUM%2B%2BCFX1Ikzjv5SwnTPAAIhAM1w4VA1t6mPcL67Tp0s4wK30v1Z9v87G6bjXBVS2X5dKv8DCG0QABoMNjM3NDIzMTgzODA1Igy0PFOnwWFQ0up5v5gq3AMgoQeKxULsfcUBKeFNCRW%2FWTlEzJ3UZbq4mqbshyflTA9Z%2BYbCipxtyn4%2F900PBzWHQV6QEeSKa7r6ORWaMPHjfJHBM1kyW%2B82duYLnmqgNdN%2F1SDdUyPV9FcyAJp0vl89unOzW5D6NGjVe4pYaHMO3GmJxQ7ixvNDnYr%2B0O05E5uF1f%2Bl6i1sDGQvnP0qbMJ65cgW6rFLzkbIbOK0gUibApoJlxfXGdacxA9qsJ10WjRqq2uD15lxv4i5E3XT66plyp9wf1ewRd%2Fyji9%2FfcjXzwIR1qqlwdxrxPCe1XyYM7H97n%2FO4X58dBz4qLxjm12i14FMCYMHBt19jegFlaw6eb%2F84IsAkDNmnNZc0ooW2B4pGhueTGHj6UFQprN5YFsAGlFagiFLvpHClOelsDSfN1hoZwC4k9B9xE7xm0SdsAX6HkP0UphWwiNdc%2F0AfmGBPDW6s9R29NQUrk02fRqDc35ZF36ejdVYUnOV0vsm3I58fSZUp8Hm5ecspPsRFcaMvtbXOx8r9kJkzc2O8E1TF%2FN%2BvUEep2o4lkG72Z6XA2VsuJZO5mAf%2BwbSAwTW%2FBsAuYKBZhVblI4X5QOIf3ea11eoQ8GiX4h%2BKe6tSqdKo7PO7mjL%2Fzz%2BEy5RnTD7%2Fei%2BBjqkAQ1TRweI%2BRPHJlNRJzkjAPKXg0wOgTRnnb%2FAL%2BstbU1mf3VdKuvhQvTDOY%2F6pukhjmjAeB%2BZ%2FP8t7uQiU9XoNux3Cq6JgWpMB%2B9imUnTXdRow7cBANuXTDUJsrfrZLmFya1CNgrIp0MZJjzhXhqQnV6q5oDbNW%2BXYy%2BzF3IFhfIEV9iHm07hTZbxtBPucSz8yRwuHkVWOhSmqOfrI6suWMsIYUNg&X-Amz-Signature=7b296dd8abe8e4e172734f73922f6a57b9343273c3675a85f65ab3517eafc02d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
