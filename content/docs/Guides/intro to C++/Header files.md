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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REI7GADH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoUNN6SNNJA6xmoiUgiB8EVJpMAwbssSpOYuNPYn%2BYSQIge4ILyoJEOaG65mInETMoNBzkw2sl4kGSgYadyGx3VusqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWA5MbcUMwTZfqhcircA0sYfUtKhf7Q7xRxPxYKZlphDW7w9xAkZGG8MJR%2B3pdfL2MfblCF%2FRHtRWZsgtmb5IKnUdu0%2FGiRdsXtvAaJaV9OoVa%2BOKshbpw4kfjzUJGALMKAQCcBt1WgQZMGw0hZE5%2BzWIAlQKGIjuujuK1RUh8O4ez%2B6CLmtqYRV0VwS1NWypKr6SC5VQEUgiNACKo3WxCodY34k%2BItARhFCnywjTMJXGY5PLzVcHuHdueikJDiHZZZ5%2BE3gMn%2Bids8kOPtQRaHukOtaFAko43se8Tfe11481zBXrTIHAL8LNsBAS6%2F%2BJjSOy8OT61JPmucQQnVQ57FNKzZtPe%2BZ0ZL3NYIyh9FjNw5XpJC8IEsJaEVr9Qx9jMUMkKIt%2B2w05lU4FD8obVuznbtoa4UlmisvWXKCG7AHMHF8Mi7t6dZUbov%2BLsjiU9jQLzqHScmmm6PXLrHWo9r9FzNg7AKxDpzbCmGE91973aKOplaC1ipJ%2BSRRgIrU%2FiJLqBjfMaJIRcZgaIjLZrYc5oX5dYdl2wkAng0vP0EAO1WC%2Bgy166fbErOv5H0ZsLfNTexnc4v5VO%2B7De1S18SMwdqhSaiGFeyP%2BCw62oxQZLe2ZiSvQqvNLIwHI9lH7m6k1wVAJcIu%2FunMOi%2BoL0GOqUBiljFNVqd7i7Ak4cPIdzZ%2FvIDCURSPMQ7nbzHaDbrBrjp3yqDpthGYtx%2FopNDEpTACyX6cqg4NwprHLLJDrsuDGkFTijJqBiCkgNYIKpsUzNi4OdyPdT1uPi1GqxBg0QQVpUkXGxBHowLLZhvbhA4wrFxZKxlN%2F2ajZUmCE5ccKxz15cQFGeP64mZahbU4dpWkt%2FoCbpBIHYf%2FrbYpm5KggZp2QCv&X-Amz-Signature=87c05fa61b11f96138476b45947ce245f66be3969e612110f256d0e9be7e9e96&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
