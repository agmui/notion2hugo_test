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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YM5HHT%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIFRoAb0kAtJy5kRS1KoDksE8nHVoVt9ltTHuTk6h8ItfAiBcfNuS9wKTaSm6wO78hFhHn%2BmgQN68uOXmjwTPK6bUkyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMcWQBvIjZxaJjWb2eKtwDSVBx78Ycl9VkJ2Y6ZgoeUwlPEg%2BaWw4rmU%2F%2Fd3kw5SI7UA0PTtoZBCRcQe4C7pA4sw%2BVJTU%2B5KbFf51suvtErp%2FfVUS94hGfjo81S%2FYu6VCkv3RlfFXQVwBxr55hsOYbXVRBGgwVNySLkkZGlJOikQVercXk6ZkP9hU4mjX5J5CmnIjriotegxqOfNHzmn80VwjkCKlBJXkKqkMYQjBjWu%2B8ay%2BB5DCnruAsbZzJw0MXRbjmjyI1yoPRYzWZlx4Z6UKbtXcSaunXKJGFfDjkXbDvyb8YuGOnM1%2BzAd2OmwZKykrKVp2wD3xp%2FseuTUatoRGug9n82qMFzS9Dx%2Fwgl7XA00Rjx8axvyiSr7OlzWpgPzSH5iuuCU9BMUWeZBZ08mZ8NhHuAkKa3TQzu8fU6Hyeb1t6bosvKgJ%2F9BahbH1OCze5Hb0Dn4HWMU32LI95wQg%2F7vM9hs2JFLnE8gjH0WDkpyKedKyhFKihwPX3Tim2wsjaYRezpI5YOtcr4mLFAKZHZr8rX7p1OgWMKBRT%2FTIpBDQr5kP1Lwr91SbFv3EUjpwyq%2BLtH5o40SsRfLcmBMc8xeUgMVrV%2FiIf8N6AMbMQfSQobCvsCLm%2BgBfJlaANoserCIZ4MqEpnPgwvNfQwQY6pgEmggBL5aw%2BzE0OUoU%2FvZRqoEcqRXTvWJh37P26KWKYdHPrNECYYH2gaj7X10VI8NJlywHBRGmeL0b11pKcce06Upa2GU9D8koFIElIDNCFiubmMqqzrHdFleYR5Fn0AREi3yyBKk3UXaIXGakcnZT2yyCyK5z6oKKyqaecgQu%2F3BaJ24bxBWS7UB1om8sERKs8ulfEVWKT9OHiivfGcbPdyOXFC2C5&X-Amz-Signature=535f6ddce7b6cb774dd634b3a4ff9aae96ba0a6e20e0b9e52a6aee2b55f0377f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
