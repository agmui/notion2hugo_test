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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUZO7UN7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJ7kg1IicsYARXtCiVp7pIFncK8E3ac67lGJ9ouK57kAiApQPMMqLMfJBx9ZnrzQxfnFFM3dW0LLPZ543qTAHI4lyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMQtcuhG46yXUWGX0QKtwDH9neeoIYNXVFGSgtmHsX4ydOtP1dcaryb9BNgEMU3iTpT%2BLcA2OEnVGlsfFx2Mo6eBurWeX5%2F2U6I9KzpGAx56%2BEnG54wAYhQsxsALkyzrl4nyf1oaPUrQ%2Bta4iH0R2k2zmY5ilqjrmyFZQvOa0yqsQ2UADVtBrFy4xpVLrqrK3U4w%2Bqzc8xjhhbnT1rJjK%2B4t%2BMer81jFJoMShDlqPVc26d0JCQnpf6ksv4Mpgtrl0o%2FORaO6C2JsdYQw%2FhZGI8SLoV%2Ff5UjIWtkjEb1Em0piUEOvmu9LNQgYHAz8xtJdyZOG1lvx8vmEnrwU1UmUJD8WUirDcmVy%2FiQMKgGm%2BxelqLA2SoQ77KyTycZwpzHDti77PA6xVq9KoTkUOJRHoPilrm70Yb0RzKN6orRT7JV9Z4Nc2lzRrVc49CXQ4MjrbLzUouOe8MvhuMD4FRpRgrrLysRPX4VeFynWxIaIpCQ6cG7ubdVAJUm0Zk6MJy1hAMNRs%2FuETrZMD5gzQCVqmyiNCT%2FWTLzFPR4dCtLFm8xUjvgPL9mOWbgoAE1teW1ZHSRJ5K2YmA%2BdS%2BfnZ%2Fv%2Bfj8g4KNrpU5lmnGha9Pko8slxqiA89ra7OAyOr%2BWHPhZTmuyeR6GuCgJli7Bow%2Fs2nvgY6pgEml50WF2FmpoPrAXKiGNxwJrTE%2BPpRLOt5KX9qOu8Gr%2BZtfoD4CekbUpVMn5ldlGgJrbZsjiBeygTG82mT3n6zyhtKVXC0ldeloYHIVBNzt8BCN8TvR3nEonJtEYyp8n8yJ1D8XKuYN76mtvzBigiYQclFNih7IQa%2BImNypjV2hoj5AXipPwxjeLer14sj%2FlgSFmGI6umXwCP9fyM%2BMoJ5zYIO5W8K&X-Amz-Signature=e8b513fd83108daa0dbb01e27b72d9e93a2ec339c01f1d36f85b3cd31c956a11&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
