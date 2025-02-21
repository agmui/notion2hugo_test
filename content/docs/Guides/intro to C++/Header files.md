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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWT6UYTP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC06gGBm4pk11ruxHvLSAgafXaXF22uhV%2FSw%2BShGG5GIAIgUByt6WNvP4RU0rrwfKQcBLLH93hCKxHB3pCAa9ijhN8qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCxJg9U5CjO6aeE0ircA%2FccNTWRgWDYAFjOmPXQsQYG2qfD0AkwjCsQlMfRZ3KQUI60TycZmu26NWAyjTwN2K7geQ%2FLeU35K3tU9rJbZM1LaxvaikqkOPsH2VJw%2Byyz4MvSUlAmY%2FPE%2BerpD%2F%2BvLJK5br15lNRAkElxC79ilY4FNs0rrrcEoKXA3Jv6WAhjMwsOPBBNuS0U63NjlG6PvkN6bzPWgM6hDcrgh0Pr1IF3uYP7LluDUL31afljrTGKlgplCfQbKKnfHE6z%2BuMWwO75bxMxdqmuYibyQ2k%2BP7QYRaepPu3JgyHi2mRNxfAfzhvXq3kshKjxbgkmKRlxzsdrEFCoB%2BCW2w3%2BZWwK3sLJN3RcXEz8RVS4EuB7fGnxF4ms%2BL0bnTYIuInqwWKe%2FmZ3SeKikJHbLgxcbyz6TLYdxMFPmbUIUHPDMeG5o87QjxZ4DVYhEqEEerqIt6bIzmX2g6xBOu5%2BVgwI3N19gRo8iNNubqMDWgR13OFe1CMYZK3M%2FPMuMK8WvbiPrH%2Fcx67SkPwFi12V9Hkn9Q6Fe%2F83XT7L0FzjTmcKQwsztbOMzTXsRoVLvsJbo%2BWVExf0r0%2BgMNZAzK9qguqkAw3aGqHyv8CHCZJPfX7lNSqcfNY0nZwwxsAU6p45Xaw3MMad470GOqUB8ppXOwiQY3UhBrc9vlSzHJmXgMjYzoX0xyyz1Btk7eRzsdpz%2FQ5CKbqGhWBEbS1d0yUNeJVb8VVIpwjn3yftt6vNuhor2wE0v8EAlinPzcfEI3H3e%2FUJXkyP36wGBGW9sA1QmghDZvEuBew9eW7aW4heRsRfEadwW4a7%2FIGPxmTu0aDYWWTO1RDp70fvxtVHrnWRsDAbahOf85in8zzHDa9CRqOj&X-Amz-Signature=be8dc9b030bd180282b7bbe4184781704a35a7968443f07d8ade32a8e3fc0b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
