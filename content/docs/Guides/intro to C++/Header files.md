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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6LEZ5CW%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD3VPIfa4kpb4RHSzoutWjkPksCe1v%2BClldDjg2IjjyxgIgaXaB5bSNcQe7IyUFWWHkyf96q8sXEprDaEpUlSCTrEwq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIezz1MWmaFKwJ5s%2FircA6hYBjmc9oTcM4nAcZp4QgibDC1msQuE0qquw8OqmjLXCJvsJT5e1hmN1jwMcTTog8zSRFRKkuErF138p7rvaLwElhorBvDAFF7RvaNR8n0uPI4ml4tSSRxi705oJQ%2F248tqemqTMjOb%2FtAAQgfcdQqirKDeMzDJa4z4I8WqobSNFrqy0liO3%2F4u3xz2%2BibfbHgiJx9tYFxHC05HrvdMujPGKHVD2PuvlHARxIN%2B%2Fp0VSrQnxBeAjBQrtnMlVH3qATzK0KyGVzII9SwhCZg%2F2KwOY8%2BT7Z4prZ8xoxghzhE9%2Fg8GM1%2FPA555ijL5vsFUWQXP3cOziyacNdAPe3OYREAqDLfCVvMCStaNvOv8VEFVLl2fw19pHbsjaDr4H8ytuy3FlOziUekT7nRkzD2M7578Z%2BWwsJsMEF6D52PUW0w5qbomD9lNI%2FEaQ4NMvOtOQRVGyif4n38jvqx68w7SBdb8f%2FaDU0D5GJ1PNuwcdcKwkT8BYQeWpmtZODJZmPeQkCGH7sHNiPGX%2Fmq%2BkNmS3PmueRd2BxCucs%2FniaboLS0XNU5bhbQSuXV2wiVA1SGaQaxtv4iS4jFvhJeHozjgRAerUELZRVq7p%2FhsM%2B%2FlKKe44q%2FSUhCGHNyn4OcqMOWYvsIGOqUBFS1FzmXyPr08LcDFSkYl3yIEZMfB7dPepMNsIa78fmyeq%2B4Ek06PkwYEUYA9lNrNejBUzWKY2W7eHp%2BXjZtRHM657Wepxt%2BPTI2FRFqmQdZTMB%2FybyoPmZQRivnvZB2cuJWnB5Ztloe0S1P%2F52Ee0d4JoSOW37z%2BASHMqNDewAt%2BRx2RbecxJb7DH7RkNvnfH1eWka6Xl6ueP8CMzcF7OfTX5E%2BB&X-Amz-Signature=400effc3cab9c44a1beada5627a70ca7e7e18e3c247dbb1800ab5dc0b4e9dc3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
