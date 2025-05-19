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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNVXKWD7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEB1tLqd7MtybwtgLfAerXGzY7%2Bt%2FvO5HtH%2FBNa8a%2BYAIgSWzViV4bNMGDldm42RKTB%2FluYEtApHNHM%2FliTxC2i48qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGs8krhHy%2B1OhlqdSrcAyoto5hhG3oHjHlRRhyd8178wAh03qMjymp9wDjJFYxD8clkuBV7TzPpPZBGiNFIiZsgWuM3eSNDUwuredybRdxt%2BI11S988%2Bz6i2hszJxApIgBRKGyVRP%2BXUz7sCbxere0FgdYV4g5XZO%2FEUxUzRH0Xk5CuoJs1vEvT0ypdlQzNT3KT6zR3A9Vhh8ZBcI%2F%2FgRuSXrlXhjFgQi5yikTWnCUCAO0Psin5KRrSMLn7GNuJsGJsxmCKTJjWQgI3z%2Bs7TSXoDR%2FADnmY1NXLIYa6Nysay3Mny182aRPVvGfQMwOMnIVxYgZ5RHQIkiSVZYj%2FWqFSbbi0yzqbjahahabqXlxcVtfTLSKx%2Fv0HlpYKXiJZYut7AHRpqsqPDgWF17CEAqzv3OxGCeFoI6eRUvzsTSjjai%2BRs6d1%2B13iEN0%2F0Of0Mlx178dzwEIGja0t8J7nNhDt%2FLjpbAZJofshEyaUcliWcGUGFbYfvpi3F7vW4pO5XMmaEtFq%2B4uCgwEZ%2B3Jt59OZ7zJQOhO706ixT3082FQqNEpA2jsgK8mzPcA2cFMaybfVVKJVxMd4YPTXaVu0QxdHf6N7YHVIS1M1%2BHxPYooKMzQgvw8zLrw%2BKQJgQUsboBNg%2B2kRnljbPz42MO6eq8EGOqUBHqZlaJQT8mzuXhMXgnN8fJxPqtDV3NS3PdqYTg4CsRoQENnvzjtYaB5bFrKFcYWPAgtA9XpBTYYQXpIxTbZxmRpkOfurm9x0QOCMCLrMOZCMKaixSbGi8bk7XVm4a4wqnsapLbqpJ6SuNUgdXgZFhk26SzZeSPMNoNP%2B4I3SAfoBwIK2v0E06BH3dp7TKiRM394mRx2%2FVTod1YYmlWQ1fKpDy1VB&X-Amz-Signature=ea1d236e662366d5e523f9e4ffdca58c7d396be10e02f7fbb8c641949711b452&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
