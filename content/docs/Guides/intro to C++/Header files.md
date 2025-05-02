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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU5QKGQ4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCwF1QMuAgYnjYQD%2BDzYgAtM%2FBofgkvP2KiumtQSJ1KPAIgSC5Z4mCBndPOQMTOUluoBjCeK2tVP6JBrfosZYtMz6MqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPks5Wy1QaBeR7edbCrcA%2Fs3jtqC24XcUkXGCca3VF0nEVeS5XDj1kh5fbGhurZthm7tEQfd0drvnJ2wj8Ngqxv%2FrQOvkazLllNqEGLAhL7abE%2BOL1v4UMRJzOwIOWlkmJWEHjV%2FNrnLBZVYKtnLrwclppycDHXJCHRQCdcgR4W%2BeH7SCo2YzHqpl1sxr8KWUmpHQcTjF%2FpzWHiIkEo1oKF5vyNm1vIz4H4tBSKJE4j8miaDDkBEjSYhbrtBNBm5SV%2FNxsPKrom74%2FV8r3CqgUPonj30eYEDL3eu3mkHEkITju2z%2F12vu7GBz2YQZtyEu4YgkCzNdHpT%2BIexx2uZerhFs%2B8C6hMWtaX1e2CDzm0PedBYjN48avmy51dEU6Uh4mvtclwAckbLgq8uvfcShT2cWIN1zP1CkVzbnB5a99ftbJriaIYCQ8BgImqS%2FvHG%2Bzb5K4ivXQu8FaOIJmlz%2FpMBrgMwd7jqcJHgxyXDSIjmwU60sPnVKkh6Bk2v4wy1C4Lz07mnCQwm2KNYTgCyMfuH71GRlFSFHDxQS%2FpDhKAkX%2F9ixwwGy1gVw5gZu5pyIyUaQfX3OJuSgR4Ldpjq9AFV07Tzq7A6C0LYMGz4wUs8jn4om2HzKchmNV%2B010GP%2BurxbHGwgBibmj86MN7k08AGOqUB8tdl49bp0iOjTI7kOsZ7wnhtXUblCcc%2F4QlwPQCIZKCgHGp%2F07uvjurxjAJYJdKeTosWrCO0uZpccNSxPPk1zjDp7ZrfY0Yq%2Bj4BgaFr%2BeqU99GcZJ6vJa5nNyfBjCIUqFMWqRaIx2vcacr4Tr37VEaTAzI6Hr0TaF9tWxx1tMA%2FaTJFG4DV2fpkf%2FyVA0OfMNZn8kq4yQ7ldVpo%2Fe9O4NiP2tSi&X-Amz-Signature=c6ed87faf645c0b69f245d477839cc53cf130dc49d7efd5d9488dc1d2d31d148&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
