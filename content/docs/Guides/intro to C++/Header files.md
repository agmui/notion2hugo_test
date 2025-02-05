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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCKOC6GS%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDDw6SOhmA1kDcUnZgTtESNmdJo2cYbJ14v0lKzVpMkagIgaFktJErlGwzl9AjoVG%2BdlxiAfiZakLVp9i5BVtxiynMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMtjJwzNVP%2F0QkD0myrcA2ZsKdoCf%2FzCXJ%2FBrTVk3XNCUQ%2BJI1SEiHijm0nW8nVZb%2BiYNUJPN%2FXJVHhuCCOZavSsJ6SUCzrieTsisR7yuv9YeezjFVPFdt2%2FH4MYxwIKxOU4UV%2F3DWnJQVL7oOPpfEaLTXf2Zhpu%2FPXSAQkkaSEvvZjHJcD3SvqiSoUuA2UyX4%2B8lkdjmWnDFQRNR2yhK2ntqSm0%2B3nFK5tZ8N%2BM4SdR4vNy7SOKThKMl5IRxNPD9QjXMiymjY%2BcgtO2ZmGvdbRwWPwl2dAZR5DWXsshpBcCWfi2mJuu4eIGlf3vEKjMSJ%2FCgmNvwd8X65xTMs9Dx74SoM4l0S2banNV0Ra3xBe4AUlFr%2FY4CVKZOzwAcZr0RwtwkmkX5%2F6HT5TUctM3Zjr6UtbY%2FTyl6Zk3BY%2Ffgi3gtp6mN4VNReFn0%2FmSV%2B7pVwfCMJ5J%2FYEGHvYOx%2FXf1A6ijX2O5SOCsVLbTPgdwQAAD4tYkXVeHyIFAlNyuOeCg0rEhtX4AIjBiJyf%2BxjVzO9pb7da56Rjida7Of7ek7uoAIXWS1mnaKUzBs4hX3k4wOIbQPJwqNy8ug4aTxVR4xhg%2FIM%2B8D4kh9%2B2AksqZ7OKwFLJ25M13a%2BPZvoWC4XVJGZF%2FVvdPp3UE70pMNe7jr0GOqUBy0EhkGDvQy%2FzRz11l2rEnNf7Mf7sGJg%2BtchDcv6earD48O%2F7%2FiNuJ6CHreLre8VHYGfwIZ88Rtcr5yvkj6Fc5esjLneGXtAldXSBYQEQcztI9CDwIx2F0Z9cgDWcd5ohflHSVE5T7ZSsCtpXCX39zygg0p6pm0Xl0v6YrXS%2FrdWvwHDgjQyUvZydiwP1C3pitEz1c%2FxhJMYNdb0%2Fhx0UdZ1BK7Fl&X-Amz-Signature=234c65be61fca58bf7df3281b45c9e1c8418470773b25f476e6b8f068ee62cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
