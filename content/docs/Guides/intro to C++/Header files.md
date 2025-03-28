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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7D56XJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0PVobw3jBYTfjbWNAAJNp%2FRFSBiqDGlNyscPfx%2FLKnAiAhI%2BwDj1DVn5xoCGdhA2XgZD%2BbgIQTdXwIHX4Oep2EkCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMXQnONpjLRxrcWeT7KtwDCqv7ruilTS0BwYkveKxqHoZKt2ficNfdu%2FIbRim6AufWa7bvAKTksxwjbjDXyDK5k7c5bRV0d0pND32iVHfhSfAEau0aveoTAGKUv06j6zXThgXXvJvrcePDxrj3hNTViQo8HCGrWWNxlTMJajQRs6U6NYxWwIJWi7YSruPDOCSLtcGixNyt7lveONCnNiOpiJHyy5kyaGhssWGQJq6FnZxSn84Vk7%2BX%2BoeMROTcSGSP%2BuZDTaG8RV5NLfsZlLM1MyJXbFrVwsN7nni37WF3EvK98maY9YCdvlo1DHAx4sdKJTwMyQUN1EF5pKJ0re0q3TE7lEx00CdffvzifA6dUHeS3A0pK7p%2F9%2BlPTsg4kUlcUhzG49hyB6zoe6k8W74VtwTfMUJub7BKLyuSdO%2BuA3HCQIkjbfGOEQDXTGq0XL0MHhEzLZwkYs7%2FBVcYJcvOHzqFdomaJ79W5%2F5%2FQQn4bpts3mywCLN44fuq2ebx79yEFf5Raq1rEq2azDpeRSw%2B3AEEa4CcoA953CPaXEoQJ238CvX3nNGlnkozyVsfmvDS8guv8LhSqBMt4mdOAGUGTJYGC08NDVPUqhyN1s29WfIXccST4cZLsmQUwdneIeIFPJUL%2BnpQzQ%2BKGSMw2sOcvwY6pgGvjr3csYbFi9%2Bg0BUuDOVRjG1tXyV%2Fsv41OptccfjfJCEldNLc6oyc%2FoLInsZ%2FqiIfFmcHZbOx3qbMpfcfjFnyu1ekFlZU2GhacXxJhU3Qb%2FkR7Dcn62qxnNSB55ebSBamqLAOBqURY4Ol6KvRBQMe7XHEMxPXEV4CD6vbPZu09N5fKM78SpVgnLZ5a%2Bs1XDQwMB134QEyWaUv9c9ob1OvZ1t51SCt&X-Amz-Signature=fcf2bad6b77cd2669911ff55413afb484420c1c388700cef010424e6b738543d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
