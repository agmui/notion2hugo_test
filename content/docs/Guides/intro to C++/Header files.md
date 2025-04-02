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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OW73HDH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDkU9v9dceVz3SI3KM74MD%2FAMUVMhql2GdJ2%2F6RJAK9lAiAyiA47glVmpsktA2JkkT0nf28rvTK03XmAag8HECIz9CqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVFUj5Rvw%2Fd28wjeKtwDeeAxJ6pDCYtThIwIKzmAkw9Og9e3KDF3RP%2BMtuESf9bH0XaVzLg78E8rG%2BC9y2Qk6KSM2BgvHQx0EP7MJjvVDc3Gbqo8hUP0fvq3UQfpc%2BlcmHbsH2dXPJ3LQbiXd58V3jl9aDzXn9zb9bmWQVVgqUftHBbPgyE7I4fQFxtmOrWEXzyg0ipoDn38%2B8Chzro7O97XU8m%2FheXZjNUyQbT1MCrw7Vqplu%2BG5IbSU%2BMwmO%2BlvxgLvdmQiMh9I%2ByqZEflBaix01UHb27PFa4smPAmnwc6NT%2BYKcANhxm6J%2Fdw2IVJuRo%2Br3C8WeEOfg9fiL951eXAvoS0UfhrKe8RC8noYjYJaW9%2F2gyN7Hm2ofbiMmcw6%2F0migwwJ5z0uEtJ1UO5euEcqsW3w6yRQmmi0r5Njq85d4Wf3ho5ojRRYJtAmf%2FWCE%2BARgwCvEh1c3qwBBeUt2ut81Ew2%2FQdMojTcSeuFhThUn%2FX6b9RYx7EK4NOpgeWI%2FeybAsDSY2rZ8pHXLUlfxma9NUp2maRa27oQpHpgQskeW%2ByBoiYaJ5206gwFDX1MgqwMBRhU1urEfR%2F9YI70lK5A9ja7B%2Bm8dc2yWbmFwTJOy7zuWnEr4GWfFcFZVqgkQI6E0lSfzqAU0kwv6q0vwY6pgGU2OoXcSnsmncyK7VED%2BF2DQtM18lSXFlbF2KTUFWHe8UGy1XQEcCM1wMyZW03nF3xP2t84WLdKp624Kh%2BiiCqSz9pMvnz3uA4lRV8IBIqcTatzCOlhNElK6U07E%2B30Um8uprIXOMaSdrQ%2F19xuL9vdBPrRoOfqIGT5i2EvdW9W9qZm8fQxYRA%2FbYChbfhV6CeCV28iaeJ0ZerDCxRaXN6UtByJ7GJ&X-Amz-Signature=5c5fe18a23a31632ea321e3d062d6a0463bfe10400f5a9bc5ca817e657c992a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
