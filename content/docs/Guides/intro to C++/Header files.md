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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y54XYXJ7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIA2bqQak%2BZddNXAJR6KsAI4TFRePn9nHNrMJG3ZvwPLMAiEAr4gwhcT88lbbF03fZhlMsrYHd11U05cFuNc%2B8CnR3jQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNue10vqv8OUEBYdaSrcA5uYKRePJSfb3P2jR4vy3R87FPZ5%2BRGQX5WfIR53gXCbJmEfWobEmc7mEKDvA%2F5aX%2Fj%2FVa3XNA42nbNI%2B9UUI4XwfKKF9QWrquLDCPMbB0Bp5njjgp2gkDP0RTxZvr7k7do9I06cCmnkVpiFwcXfQS1OigevpJdApu3zEPDpYR8CCHHHX7NMErfducDtB%2Blubi9erbkXj2dnDasBnjNdTsg1U%2F4VoC7t%2BHveUWOhOW6LgQPYMorP0MzGtxSPF8p0mDCmUUImcxURgnkFrwv0DiyjvHqZHMh4%2FkWVxxr%2FGbR8MC3bCqfoWuiq%2BDCzrdsuzfnyXCbDCj08qkIk8JRb6SmBrKroj9zzskU93dw0bJb5J%2FO6CJINP65ipt0CGEbdX94tlVOigvOnvBXfaKaX%2BtvKFdP%2Fyst2d45XSqHvlUXEBZ%2BjfQvvT87x1VmHP5NvkXjFybmGqRc%2B9unMxyoXB7rEAHPTs2dB3BjOv8Xcte6ZQEQenmgOxXRDMCDwb%2Bn6pTy%2BZG42irGRxKEDofRiuyk7HOIv3XIrGfk%2FoGC%2FwHMV7YERps9bk8YI8g24PsLh9X%2Fkux1CvOVxUzZhw4gjvmkA06n8k%2Fjlp3G%2Bfwz2MqM%2BTxXhDGvl%2BE6xB8B0MOyjmsQGOqUBYXtYwiEK8z%2BLIdqkxSLVX57SddbfvL2eMAIR6%2FgUG1VsgF%2BCRi8hNqJzUQfyO29sMHQIuk70Q3Fh01%2FrJbc9i4s6P54JTWHqgKEQk08DKJuY1UkKsupmwjQ%2BJ%2BfAmyhxLSFcFsSEi1ftlwLyy%2FzHKcuD0zxbcK%2FWPVfFxJejVjPVOlX6X9m5kLGIfEWeieh5oKJLoWOgpVG5jFDUDx7PMASE1TVR&X-Amz-Signature=a5c5f929527462343c91ad51403083ca6ec7e6227e18ac17249bfea9e39c4629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
