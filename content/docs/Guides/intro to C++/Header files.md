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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHITMHQU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcKNoJ%2FIVepaeEKtLKYnMk1wvNEmmMlKtJNPHNbXOL0AiEAsKzmiggOnOeaOrk%2B3MOAUIKAWB8QMgNKNSRBY3Lfe5Yq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDOYyDHmRpPHl67NGoSrcA5A%2Bs5Y9z4b9K0Cy%2B4yfDBT907yup%2FuarfxlkY4VjxzyaebHVcb%2BQ0d1Mm%2FfYRNUoQcubp8dYsiavp05sBjkzdZjwXnwynVBRAeoOmI88sk9B76qC%2FqvSqIgy0EAj4hNK9TAPB8veL7t8wf%2BB8JkpiGSiDfRirRtpGIcr3sUt%2FaLNDFpz5tBbVCn5QGxLkRBfUbwPr8pmRtXlBWf2OC0e4puVE1PaxZlRoQPip533RamkXjHGtWB1egTf2mrv8sVosvv8mwb6%2FmUSoVzMxMlstyJJo10zv6Nes4bFEO1%2Bygxgg5uh55XFGDwDp%2BV4Y2BUJGZNS%2BEThXX2ybZhgeGB7UbOkn1yhNbgIV8CkIQndFyb2rP6EHHT2ERRfWUlwAZo2lUEsWC11KdusxIxXO%2FcPPpoA6dxuL0J6U2D7HKK6H8YZXOPVKzYyAYy8voqSj2FWtYJ23xF5bVwsPkI7%2FysX%2ByXyYVTkSuy5PREWw7GtXIHpTzG8gOyWayWOEAyyP3%2Bb%2BG1nfEoF5AIFefG2nPPJ8hSNYf9jneJT0Z7fLTnX7nctJP%2B9rxWUPT68fU%2BIF8vAutzTkyCg4xK98pjKZMS394v9IHbNcK4v5GlloJG69Xd%2BI9EAkdKADPNcO6MLGv6sAGOqUBEwkO3aebfXv8kE%2BZFWeLZoXb29qY7ri9X%2BAiWbgE6mWDnHFRMCL1ys%2FlzyIEfulTR%2BxJflosp4uZSYCGxo0jS2Cj%2FeSq52A6zB50gOd%2BiN6Ydk7bu4X8XeS6XXqj60mNpfhyqVfVrmbby8Ptx7HPQpJnPByWM3M%2B0SmNdlfqwpOp6PElB9yqqe3ARoKCe4F385FG8Y%2BXGjdkHn8ltA89zoBC9gnv&X-Amz-Signature=342bb0b44150e68a7299695520c1566ef9256b136d45e222403d657e4b3553af&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
