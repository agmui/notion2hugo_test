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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWUDHUHF%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCPzsMRZZgZ8NJ9PiiMLT14TRLN6UbXql5hvjeE5OKIrAIgAlP9BCC%2BJPxUM5qCdYmaewag81YpUeVwLD39gJ4t1dAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBolUPm7EpJPNLkPEircAyDNDhOxDkZCQ7N9DAfDGNCD8yhB5%2FH87B3eeXRbUiRrcQYd0FsDG99bwUYAAr1mW9%2F84wgL2tfcCkdOoJZyk0SvacGnjkEMcsiVHLb%2BYRSpRpl26sVfCzDWSaceHnkm4FVVu8uzHgBWAkFWD5kdNUhrmFv4vPIqbu4Pt4ZO9QwImaAGkEab8GI4cOiuGhPbDUv45DF8Au%2Fkco00LNAfvKuphbvUHr9cBNpBE0Hh2aH2APvSQcRs%2BtZmmVf4eOWQyHPEMXtoTSzAHH2CpIWgTGce8TlwcdzlqvecgH3Qcfh8QYEw2V%2B7Dyll7XWpK3Ch%2B6XbxCSNTEHHK%2BYtVEJ2lnxrRFPGiVoQfr30N5E9T%2F6SsVv7xj4WvzRK6tWXTQxp5Vx%2BmZTy7I5enNdlYmNVPUPg8FQHTFcWrDWGne8DMFb4xosDc22mAFjhFLrT7gT1LKz2BuBi%2BGS%2B1mOp%2Fsqxsmf4Qq62OlKswk8sIPTR0kDvWE%2Fdz%2FHDLO5KXINTqN4F65pWUPuOpwleGclfxv7jtUgd8vWe9P%2FP20%2BPlgYkmLU2nmL9zYlbpZwQbMpZCmqpl1q%2B4m2Isxw3hl7YkFhXVUZa3CuVnmGzlwbCQFGoUzm4GAibVHSO%2F%2BCeYTVCMKCMpb8GOqUBPU%2Bdtj52Vg8%2F%2BFwvPOxevnYVrqU5eBMF5LqN48HImK8gDoGbFtwtrdvCRdJl4vfMTxKu4B5m%2BJ5%2F5Ag35%2BLB7clNVuSPdG4PfnfVJMhS051Pq6Vn3a8vEz2KaWCxTEq14m5xflQR7mvWQBH8CwLsgRzSm6ofaHHV4vXDXiMAIg8vnklgSBVXVqc3Trg3UEiE0JRJ9nSfwLjk5m8dLT8EK4ANsfdg&X-Amz-Signature=e090a4cc4cfc751a160433d324d8b1571a3f48e3a4d016ed980538c9f319a18a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
