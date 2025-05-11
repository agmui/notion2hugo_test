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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FQ224JZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvw02XcUBCd9lZWqzsZS30rP4LJkESPjmD6vN1KDuBkAiEA8jf3UzVV873RbH00OC9r9rrCTwnqwUGsHYR%2FeXC3WBoqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGxbWOo0W4n7zj%2FOyrcA%2F%2FXP8IMWevVkdETTVjvT7gmX42GSzcS9uwSYGfZln1Gm8CqQRJjgATo%2BpRONUyw%2F9t7YLQjQah2RiB4F4y7p%2FfYvn4rRQJ6iL36Gwe4MEo3OrkBaYNHQvexpJeTy%2B4%2FBmw9apx6sqAEyiLVHoaSaeJr7miEBd91rXQX0oi4KICEAeou%2FD2CfbN%2Bs5tuC6kb7SkirC5tBndqJBSdhVrFoxYpfbYiwfRH3THWHiVCTVRy1SsdppFBSiUgiPe8qZgbI6%2BS6oYyTRiB%2BRk0K%2BbtT%2BO32Qwx0ROufTPF8YMiJq0e%2B89aIKsTKtnqdqRtZPA6IoNZqAy%2F1Zp8GJqX5PIBgC1zKEjv1DtEOuqpNKUoxadWbGAfexPGPzI8Y1U3WyV5eEB%2BRlCMAu9AkHYk0b%2B6abjLAu9QgdosS5dcsQff%2B8briCMjMqs0vBqilVHv%2FCqkBKU4EoqUHNKMOUoQQbeb4JA8AerAclrl9IBuGpkS18twKwTQN43a9UQR1OLGVGHEcsaD%2FwnnUj08Xm%2FRMo3ACo8AwaG83IPD6krJyYIJZEwuSRnOFDhBg%2BgMxJFlnqrV53V8SuzfJGC78TkYFRSSmzBQXF2yD%2BxVrpePfkDlbc3iFLy2mmOXSLhId45VMKOegMEGOqUBYE7qmWVDSAPpPOYSuFZcfYMrnnvqQCZVPUGwp2UGnNAlzItKlyq%2BBSPhd%2F7p4BgaX7%2BtzJL%2BE7xAAMB%2FzJybe4snCm3MD%2FgY5xRNkHpvnk%2FYhaQzawSkUsSjYanhv1cC4bm0NSJ8rmAtPZOsLg5b8TbKPa3tBOTz5nw3nk%2F214tTb0fp2x9tRpxu8ekfQg5hXN7wUEF3cLqjE4FDAEEj7Pmr4uJX&X-Amz-Signature=32e7e949c0992f1713708a1da3cb99b2c2f38cf5c65e387af288fedbb6d3dcde&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
