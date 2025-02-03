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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5K2JBNP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEQpn%2FJCvoniWJkpNAxNjEs3w7J2SgTclPxDpRC7YgG2AiACvpXKIN7%2FDnwC52mSQDfCS2rS833ZvoDtNLE2LBNX9Cr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMI%2BeZI8Ok8L%2BgMYRsKtwDxfdSISxW9P4UaTbcgsS6WvQgaxw3h%2B9s4bfHwdh4SRlBWeO1VAXU1eys4GU6RgneiLrSNAdCu26feUWITUw2UlUhgzkBVyob%2FglEAwnkcadS1gKWPVUvim8uMDVCCJkLKeF%2B44pKGvbATCrSZUES%2BcjqF6VDdhQLt05Zi1eLRcIyeKODyTREWue962d0GIvqSJ0JQ3TZm31LWaDeuEGnuzWVSf2sCKflEElwGYImWiHXusUeQLQbI8e3x44KS5dOGxHTZQyHU4vimwnNmh%2FGzJxfl0PYYaU1RqSpIjzA0FtuerzKp2zoxY46udLTmghSg%2BxPR8bFrXM9BxmH22lG8sffPOzRvSYvyUm56Azgeoc%2Fpl65JY%2F4hs9UqAhzUu5FBBOUT%2B14glKzfs9R41vEcV8dMj%2BVzO6rRuAl4s33tiIsBS6PHpTZE5DOLYU5wY6Tns4N%2FlV1NDS%2F6JT2sFhAtd5NCsrKYkJkw5NRTvYZIswQ%2FS0HzcUEExMWBiqWrutnLZ%2BY9JklzdshKcfq1d5HEHUfUN9UCEYUpLox0U57AaC4FEh1f%2FryQlid4QevE39IVs640fuPHzERKw5hspRNwyaRl%2Fto5DHvMt9z8%2BQ3hloVlr5HSC1GtTRlQZUwwpWFvQY6pgGLHXjB%2B5G91VknXdpjY303UrQXlpYwXvutwKZ1IhW6wAY9Ocesfp%2BHLzWDzRyHJV7DD402ZPYVn%2F92wjvXLyqRN47%2FHlEoNc5Ge%2Fl%2Frnq7DLR7E9GVMKHz22DKqqOMgcX4OBt0h9erFJzGyh30ugXe3SQ%2Bnx24OdkTWjGA6zKVRrabVmZ2JOLECzgSagjnhOAWw6%2B4kGBX1W3CaOoyPh2Ifx4xvqHk&X-Amz-Signature=311db06a2b5eee411d95ca5cee17b3ec33cff0cc34db083555019bc558455e74&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
