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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMY7PAJP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDdPOvK73cSCaOx6oYfl8t92bNijFrKj4G9hdZhpuFO1wIgZUZJuDCkIpkvT3Ukgs3uMKOSo7plmUOBUS0Ghj0qdPEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXFkhU1TFk5af%2Bg6CrcA0Wdxg%2BI4GYg6jTKtELJeHV1W48omdkJZ%2Fo4WX881KXs%2FV4Gn2DGxxwQTPC%2FGULepyTw%2F7VFcI1nY7wbYNRkrUso8b7LstHQ6n82Ilmx0kh8Gbw1auAlb71od0Sdn6jt11LFr3oAIAqcWPWjwmdNC3iAxVyB%2FhjbD9JoOTjEBamjTvbhF%2BHGmvi0T9fPjHQLRgqlmNZhxVfatks3BzfEL2KfJy6QHIRf%2FhzXK6QtBIeNdLSvuDgBD39RtdACNGuiSPnN8DXuSX4bNlanjs0wEV9Tf828uWgekl%2BnvYPp83GQhZxwcp4uWUB4u4qgDtYrYHnpUJ8%2BYz6p1gPach4DVajyT0aOdYzmodoWWgstKXd7VtGuj8pZ0LLbPF1PeC2%2BuSCRKfyy%2F5eni1cavkttDnvvcYz9FQp9BYGcdH1o67f3HkPn7d%2FHJE1uLDUR%2FO%2BA08N8QV0I3QchulE0lLCQ72AZBKfBQgLdVXeLKu9KTwsCiJhQK3efuw5wH4iBL4%2FqWxjyINmf4HVUkeP%2BlI%2BkuguQeLF3NxpgfIUdw2p6H1VbZCr%2F9cNV%2BSTK%2FhpaSPm9uqzsEos94UgFHdAxDvPTzuCJj4a1y%2BDQP2e0LJdwexYcQCoH%2BlrSvszPJz0GMIbrhcEGOqUBAIYsXSLliweO%2FKYtrtAIl4iJ1bBsaGfk9bv%2FvDuCzNKxhht6uV3IEQ3O69qkBWRaKlKgRO72Saqb9Yb9QNYDKy5F6Pw%2Fm8Ozx5lLOK2bABZbXkW3B1V7olkVvGvUTvdOLbjXJs6%2FXl5IBuRsUn12e1NW5Y6%2FvELwsqed0FgWzmVcvuVQf183p%2FieTxb0VCaoQXL1d%2FWnC00RG83umkxV7dJ%2Fpg3J&X-Amz-Signature=7534fb957eefef60139643aafdf2622993bc74c528319a4cfed682c129d19cff&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
