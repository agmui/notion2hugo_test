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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYZJIEF4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDmLtT2ncwht1DkM6XnizpzXEgATaUaAx7a9anarlk41wIgO3k3ueNT6aKFXbN0FNtzdWGwtfbriLk%2BWon2fGWOOxsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCWFRThJi8r3pSsGCSrcA2gWQfDRMcrlLR%2Bx%2FiJ7D9SEIFyC3Qk2vaF5LolIfsnR9b57d2SapnXQzDAYBksSTFXgjg7PVJE8f3X54aX66PAdZR7qw5ZaMPGoHNtIbYqnEsiUTGmH8CYVbU6MwJ0iJBrZdEH2bRJ5fbHsY8uo3MFqO5z27Q3psgJgyPlXHyxFM6w%2FDJ9AL8e8QbddBUls3O9lBI4cYpRFVdJNquVfi2XGtmOQAfc9wBhDUhei%2FXF%2BFydqx%2Bv8ciOPbhpyBw5wD9tN8bTH0hjSA46MAYT3ddpVEHi03KMBfRFDJAc9AtTSqb5tvQJkE4KnL%2FKv1b9xs0UTod75gaJNqNlp0zhrnoqmQtx4IDC8JQb9ShqD%2BccS7ofXhrZIWtKf1j6arZd5Gn68DVAoAgr87Uxv%2FQRrYOrjx9s0eyK3DJTJvT6n4Ac%2BBBmcSdLovIZC0qT%2B4%2BduC4xMydwg8jRwI5r0xWElXjHuy9FG0voeBNq4pyMzgFzcXDijawrw0uPjaozc%2FWcFi8BgoittkDrs1KZaeMAujcAleyEYl7gcD8HOfObsjD7pkUms%2BR1%2B06LHRVSppQAV1K1BQYm8oGh%2FRbvGvEBXafdr706v4zBCCp%2FzMxlH0m7wR41qNFJZAFibtK2NMOfAyL0GOqUBAjWaFhhHZB31NEtqvFLBrNQIrgoAy9MHlJjDVnMGIoKozzm1zHYZSpSMCOMpaVnaIm8BG89wswu19DH4a0ywtvFGBjaOvpaXV7s97iG9GDxlLW45SenFq7ZYtiZoE2EgbB%2FtKl6Vez1qVJ0GZcLvY6xDE0%2FrtFnwNLMAnexvbjHJ5MMs0XXfKyj2o%2BIjimz4WESkDjHSz%2FgPP0Gq73lGxO6F3CUt&X-Amz-Signature=21253d85c03c45137dc2226f3a68d44b329e57cfb3ffb53a633e288e11a99ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
