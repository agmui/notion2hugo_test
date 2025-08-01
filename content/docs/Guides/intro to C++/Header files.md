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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QX3TGQA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJlTCv7QJclG40GXDAmIF30qP8JiWWWwLPAApCRlrOBQIgPP%2B%2BfNHdfrmWOY%2FETyDvU7ZrTs60A7zaBeJRXQgoRZ0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK533l%2Fowv8fl%2B8hQCrcA437vdNpnZBLzgZWM807Hmc70m6W%2FYHPrqi0C6LlqAXYaeujPBTCvqzx16zx2hjKQhztaezEEvrDlGbEnFCHPMpo87qhbh%2Brkc9rnKmkUFiNMF3qJiqTdrrrOizgsf92Lr9cGGyyI1ElFJTo0HnKYB4HpN3Z3RHof4oR8M3n1Yfmzw3Vwq%2BYDyuMGSQC5W6WW8DaU1Y3gpSpKF4qI3b209tDSIvkV2O%2B1kbAr1lJGemz5BMZx6dH07i6QTpiGalxanhirDy5MIqBMl8o0fs7YtMDvGuyijHaRIrcRWhFambtaOSFh%2FzBma2jJ%2B%2FV%2BPI6kF0LIGjtF7zYFCbDKJWOb1Pg%2BK30NTG4A5VCAoBo%2BkWD5IxbaqQEauV4XbQ%2BWpSb8BH%2FO6oVAgrXm2HfI7WQg86Jhb7GWexxkWtww10SewN%2F41FQSDBT491yxWW1%2FE2aJSMT%2F0xjnGNHTSwCxrH6WnuYRIOeFViF6ezKO1j7PbmlIi4fZMSldIk88gwx6N1SJrWvHrCAOXD7FdSNTvB0t5I6EsxWMuQw7Pc4Fpk7oLLZzvDfq0ql9OIBoUpa2GmuIeEO0A%2BN%2BYQu24%2BIXCkozXXVZK%2BMNu8hREdYPuqX4b3dVVA%2FLEB5xUeqbEvwMM2xs8QGOqUBWhh20Q54WBq7HiC79jdi5WmAZtyU%2FA5u6Y%2BRppUeqQ7Hf0vnsTJC%2FCCOYm03ewzvHNyllwI7edQJdFPqGDstNH%2B0g4zWZBxrTF%2BlMKr%2BjbKQoosxYyk%2BygkGBJgH5e6s82VVRCC%2Fp7oCgjIjAuaOFTW1YIwuUvy8uMtoD9A5zaqV6XpLVFimFTnrKfxBAKWr1ZkoVQu9%2FYTgz%2BTsb4MJKXMA6Cui&X-Amz-Signature=ea0325f1dc554a8df7b95ca2c26c39095c7a4af13f9e6186cbd95d0571459660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
