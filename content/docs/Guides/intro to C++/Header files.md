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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCIUCLPJ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUnq82qaBbjHSbhdHNRTzG6l8v8RtGQPN4pvcunnBEmAiEA2p7o03IOOXTj4o6h6sl0FTNWKyNX4dxCOgGFZMRwdJgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHk5gsXo9yQVt9GUuircAxpQp8%2BZsq8HgzG0e842uxwEdxLeQoXRJA%2BlMVl7Tfngu0QIFPs6cp%2B%2FiFpPYJRKu69gek6LlIAKy5e4yOlCU9mj%2FKqXqqmQ9VHYvla3Uw5eeVlLumEwHPF4BZbI9xUzQbP4%2F1inDeuTH8aAemaq5S8uhcKXAchyNaMJQ%2B63EGw68KZw%2Fwu7TzfY3YgDUkpUkhXz10u658kJARJSkuSuV6ZWbRV%2BgVKlBG%2BjygG9OC%2BdCmJNj027buXgaBkt4oBNJUQrYGJIONxVC%2BUdau5D89TZQJL2pUqndzHU2FxFQABR5L16RJlI5%2Fl5PVGmthdS28AUWsauuHZL5Q8bhOkTwtjqLQ5%2FDz7kUpRiuUkADEr7wr3wAPxLWNIruXG6Lnsk1jfYa1di95XGuHCESGrq4NEphjECUJRhI7QfKbky9qrQYPNeTF38x7bnfBLCY5yMsjj7xtUygcyWmPAW8Fa3et8VtMCNI%2F%2ByBGvlhPZ9ow2Lnj79dgawQKH2djEB%2F3ok0VV2gyAjZ6VftHAqxIn4HOaaHFTjNN6yEpqL4PPjTu19nQfwTE2Yj8eGazT9uJLWq%2B5cFA%2BbUtgTwe%2BYv4IfolZR8bczCC5qR4pB09qUexNZrdxPtpUIfmGzGdDgMMCjicMGOqUBSUlTSZQv8fHJCiK1Qb4rckgWVckOIhOXr4hexIE2owCdjHRC%2FSAWKhX%2FDPLLfEJ4wn49VUjfCsAlV7CbhKNXZscYkTdBOEPx0aCbyG2M7Hcj9YhxJRbuZbMedVYi6ifuMsF%2BjGKiWbzv6d0vQY4CN8fOEhPGb0mmXv3kiHzjkRliKTWeL4kiXKPdVeWaQuNY%2FcUtQ7IDK9gupMnb10fU6rzBjxKt&X-Amz-Signature=3050454ca32d12e3a9806d1a95ff270f21f27a9460b0763c15215f0dba21ff2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
