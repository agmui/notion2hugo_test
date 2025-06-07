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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546OOBUG%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZQL4pyY5j3RFuv2P5ncIUwxl4ArehegXbDBfojb4lKAIgb9lsnKNERWlY7kQ0g%2BgSJyDY%2BNpf1Z3YvVAAE0MK1xkq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFMylQ8rcK2VgH1TNyrcA7VPPg3Htx9NX87U8WFX4p98UJngPZ7tdGR7uwhl%2BATGHFbiZ9JHpChsdd%2FywOHCGM2gQIhb8ePAKx6QIeyS09IeDxrZaBYgIQACq4HvOkyWoB6sE0jRivuvWdxpXPSBoRtPh7lAhwqRUkELNqHQ%2BtpCbxqTOzgrj2cwHD6y62oc6ojvIOW3hlb1Ck%2FiTJW5EjTPFw%2BzAG184VxiuUtpMZq70ZR4YWTe6Za%2FFGg1gGgCOHQmMh68mhIt0zfKHxVnicpcnLkWnDfKPk%2BGm4bk8DhUl3qvYrzq64Si0sGKzyvmT%2Baj9GKs3vaW3%2BSJJZcHgoHEpeU8uzR5AN5%2Fxw2bBPriNRv6YEqp%2FhfhMTiJvBUR5B9e2CC6gqYAgJgsGCgaaE00fF%2B6tWcY%2FhTqfwnwFiLGGn%2B%2B6sUQ5xqDv%2FU0Nm9MFhTqZzyovL%2FuvuSbmFK2lKrc4o527TJcq%2Fq2CTI3BPXbj1kirFywfakL1yNji27httIQuLqzMVY3DIHIKjFUvRiU9DXn2Wo4ChATkCgjlnK2GGupaP40EED63ixeAOx3Fqk3%2BXp79AX2Uix1UxNLT3%2Bgk6OKombCfPQ%2FJvqWF2PZXgLq%2FQzde1o4q%2FadsRMjZYxoY2%2BQs56fc%2FtUMMnAjsIGOqUBL1NU6D8rILCwbpgKXgcZa6dHAGF%2FNOzQnnQCM3flbrnTKFxVMVBYLed9TIdpPb%2FOpkVU%2BX%2BYPTrR%2FwCtLIP2yWe4nJd%2BlI1eajy6VvvilhCEoPG7Bkug3cIc087s%2FpVWpX0WtiE7iVH6Ifson%2FFtcjDfhY3Mu0fLCVM4HpuugjJxLfiyK2sLV1UMuR453qzNxy%2B8TiQ7Ag8zaC%2BMxIFOtUWLtblw&X-Amz-Signature=b854773630bc3cd1e1f7734782fa061223d9b0023744b681cbd2c9e12f4b38c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
