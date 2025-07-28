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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652XLLX5Q%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDezAe0VwSKAKdcq%2Fn28UhjXDIgugfeBWxP7HqZBB9TigIhAIgW3io9ovxM5QEvPfb9h%2BRBewzyacpkXZsevR32uD2fKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr2Z%2FFSNTVN766Ou8q3AMPcJKtgeGZwqpnJHWaZ35Viq%2FktMZXzR9X43jKh%2BIQ6XIgOwJc5dGzqdwRUdVBmUn6P6HG0AScqw1LwmCI42C%2Fy%2BStatkRd9TJuqFenehZeU99%2FJVkVBd7WqhelXyAXXiVaK4pGsUIOeHLaM4A%2FR9nBkcOjDUryWaTdnXR5bxvy0XdLh6H7zGaWdjcGO7t9csMxJ%2FlLgcUBhVpgKZVogXSokI9NYXzB2CLivv%2FxUOjVaPI4FYCd6sdm9mlU8Y4F6Kt%2BvKQgqbNopPio%2BvqkTu24wtRcEwXheCKrSH3AeaMKbA4Qwl%2F05Z%2F7ntDc01xfxTZ4%2FgPNnqh7zA0Kp8creVo6vANHAclWgJ8QP9IBn1BLjugCJvawWFfXZM%2FSQoXc6%2BYppCnqfVLyt%2Fs86NyimW0SQD6oeKIAHboTlJXXeRxt909Sfgj7zkGCVAhq04BrgI4%2Fr8TYUANIw%2B%2FQ%2Bz5yA6jMlyiGic3NH7LL9QOz%2BDZfzXT4x6Qlh8MfR7d7m1zPaCbQZI2oE%2FjE9udWaSNrL0tYTSAbrL4RI67RoHsrALScs4WxT%2BM0N6YEQplSBAKDHeYUDr%2FjQKCGOgMg3KNDNrVfY%2FzS69mN4eoB93ZIXKTKutI6lHg0JhZ9vwmPTDf0Z7EBjqkAePBXG3v%2Fc4mf6NHkWxeBkv8HAH4lgVFQ%2Fho8sYi8s%2BM%2Fw%2B%2BASkQFNu%2FzFafS6k6k540NK6e1pAHhKrgoA4TCrYcmzcoNwUfHvdNnjUwSCTwfuD23pMM4HpDFWcrbrEyKieuEwjr%2FHd8%2BKicDfL7gXDW9mPSsK4AMB9m8rx9MpCJatBq%2BoGmHqgJYO67c6hlasL0LruUZZmgYthQt9%2BhsOBlivjS&X-Amz-Signature=988e768ef3014f4a55b4bddffa0ac093ac5188df653f3775cc4884022407b025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
