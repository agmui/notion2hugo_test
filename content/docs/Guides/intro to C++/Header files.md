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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UALLKLTB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDgoYM0bs1VEBzx4fsuULltkgUe61TrF2ueJ21SpyHt1QIgCpieIUYyOZjnQKxVnTt%2FThhAXIR6mm74h3fl1N0IRlwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPsUjbzSaA1LYEgMircA%2FtTVmXr1DT1eJn%2Ff%2BYAcL9Wi6VOS2h0pdHMF2vEn0IvIMT6n87%2F3bs8v86d%2BISWQI6i3XTbCYY%2BzB86KI%2FGlVHd394%2FjEFHO%2B0oolBxMxlytunWTRDMvrn9M7fuN4IGaxXGD9GDDlRnVXJq8J5659zcwUPmaox8Dxn9iQFz89cVKxcDX%2B3pvC%2Ft3LUlBNPghMyrmoY5KaiM9SWx08xjD5Kb4GutIUpTI1DBvk%2BmcbWmLV1AJd4D8eKWOGIOo7M26S1LyfcEksjL6DQj0e8c2tSLZao0C3SabwE9Q%2FkzY0uiVMXUKaueygshVKV%2BfYwG4abEZxiQcSFnVUg%2F9Mg0rQH2r01kq4zULRaL9nwuewtzm6WpSX5jcB1q837K6PD8PimMs3r%2FDNwl99FlHVPIdRgP3B6TIXFayYQ9Y8z8j3%2FKiSh3jO7dL8gs91FQSEwDm%2F1uwsco9X%2FJ0gJFyGoCHQdmoQcoW9JAFc8aszXNnvuPPBXf%2FpgNEgj9Y3itSBtyQplhgLCUeMv5cI9VehWGbwOg9yiNp8crm1uzfuMAVu%2Bv5i%2B49yQ6s6a8g0Qvxgn6hCnZQODRMU5N6CpNdWLleQSo%2BI3DfPcVp9O8XinuNPMjkHyocHS1iWwsTp78MLq2%2FL4GOqUBFgNiT1WiYH2THAGxh1r8FcYFHtreQdSGmehSKRSOBBa14Leh7%2FzRV5nmrGEAc3Vw2E2qqdpoUXVZpTXJVLu%2BgXqHNOJ4XtzeDLzVfClD34hGZP76yECy6y%2BzVZWLBqqkrDZ%2B%2F%2B93eQ9Kyn09AI2vZGLSTttvDySAxy7mKuu3HQ2wrVFofB3prOVbf8Am9NZm87FzG9KC5qwds7ER1jC7Qdp7rmpH&X-Amz-Signature=ed71c33833d7fb6ae0c163c0164526d0998bbda14c1b36f0eb1cf65e247203ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
