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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466262NMGYP%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA0zzhaSq2qZtE1R77AcPmehXPd9SCdUEPDNy3AFxHAgIgUYtlhwagNy0PXcacgCs4tI2o%2BkSUWb4Ljnpy3OUJma0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5lQVcrdgIn6XwigSrcAwIt0P1a7WdSs42n2N4bhFQIz8S1QR37fjSvChyrv5Lvmvvu%2Bg38uSzxOl65wv1WGTOJ75PWdp1k2uzEwRu%2F6ni%2Fgop6%2BuJoBkAagf11kpokro2r9RBhFJeAT6m%2F1czWWE2JJwSCbF8viniOe5R72ru3r4Lo95P%2BEqcs1tMHw0gdxHmD2vVox%2BYXHpWiRTM%2F8B4ZGsIgisnWuAqrEkWZbpdkXwiLwsYf3%2BdkN6dSlEmvUcBT880%2B%2Bn9bR4NMSCNLIr1Iy0zngxw5Nthce2DcG%2FCIGN5NihI38W%2Bcqq12IemHQVgpakD1fdDRzd%2FF92jfeXVQj6AcQoO4mYzEW2KnQ1XQWPUUQjGF8tXCxtVYl5FfHj7g4yLClcitI7TneZHNlv4HjZGHq6Vg6rENh0wWlvRP%2F4H%2FQ3efBd%2F12SE4S8dVuEAvJhVti%2BFR4vhyGn9BJzEm8dlEDnT8k7RxX%2BAmmIwJkfELu1lfo8m4Z9hWEXBQQ6vbldDL%2BiYUKXe1tH7OEGLslLjpeIm3UzeN0Ny70dnI35N9v1z3GULILx0pFKyma2Rb33Z5W4KHhgjUdz7HAaa7DX2SxeLRdihCtf4zd4AwD1OE6Gp9RaDBw5%2BY45%2F6oDn0tXrsHjBy%2Bc0oMJX5lL4GOqUB%2Bx5GBKqXdUd%2FEBOfOCffxRwJ2xhkiaDPJObwo5ubKFtEApLOGMpBmfHdpkuIhvXUxgUZDLdsEaA21iV8On%2FsclwzUPxuZQUfOWakS612G76vYARWmIlsvQA1kumP7ix9zRn1vJBkAD7XNjz7RqT4JRReTi3hoOhKd3sU21%2FdIUHDOsgj9YciQsopXDwCFtC9rdzXIrjFfWEaasWeqJ1KUYUP%2B8%2FC&X-Amz-Signature=4a348e99f5c69a710ee8fa8d95556626cc02c91d7c0b41efee7e8921b239928a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
