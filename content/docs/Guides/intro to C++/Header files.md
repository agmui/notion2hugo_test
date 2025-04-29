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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW4RKX7R%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOIFHuJXqM3ktKNYXG7xtlIGWfhS9bVDy99tKsgdbJ3gIgQ05rTPCdpuimcHSnD339g6kciXL%2FbRzftHkvW%2BHgqTgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJ0mqpyEvnNeXJo0yrcA8eOm03yixSjuOi7pLFGxV%2FrcH0Y2ZKNXEKkWrSRb48J75hZreoKrM9U4%2Bu8ilEuX1Br%2B8N4D%2BMTzKTfBbDblYRLaQu0XVexbD8Jy5d7CB0Zim2Okr5QM7%2BvadE2NWg%2BgFjnABtLyMT90WDnIydwzZgK%2BBXI9evD8hxKlzxY3E4cIdkXh%2Fx2FTNdngPcIJUInUSus8mS8YN%2FbqgBMG4vELduKld5DzQRIlivRt%2BLda2yOcl8%2Bp9IwJrIn6i2kGmjKbG76uLjHHX%2BwnCFiVnAWzGpPTHKzpOywygbQ1KLLIFH4W2V7AlbK%2FwYSe36ob6ti%2FdPtSzAa6Nc6AE7%2FDPzOkUtYKGaMeY88ypVFyAslevl32Aljxqaec2grpv%2FM1FMciP1A%2FSiyKccwJwdkn3gRh6HUorXZy46Lv3P2KXyo8u10rMKk%2BnMwx03g%2BNUVYOgwbVkULY0fSoJAA0cAIqQmktteYjcZPcW8t1ogyaLQ6aMsEqv%2FNzkJaosvJe4PNZDUk3J2Lf0htWx8MdsKmBfdnZW9Vm1atxid4nshG7BEySzDegZxDvkUl9EHpG9YjoXu2eyl4WxN3YAdqbFip6T5YRySt1pGC8G%2BULRXVHG%2B6alhagFOxdXNCy%2FH8OPMPvRwcAGOqUB4lTM6m2jX4q7dPWK9CDFkb4FDm%2FFA4bny9o5jQZ7Y8D44qe%2BllIAfTuJsywLBuI3wGeE2IrRRI8pGglhlErobKSuj6CFbwRdlgk0gjMeezwL%2FvH0UNgbFF4DXnUH7TfcpP%2BTcrpk2MYWwuFajBzfaqv5X2RneCLDMbUkbY231Pvv1Lm4STzmMpwK5NSN6moBz3t5UawWD0%2BIdR8qikOtHVL6s5%2F4&X-Amz-Signature=e40864bf8a13774d8e3169c64e5ffb3ac3dde0e7a45c379e9d9f5b7a7fb0a538&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
