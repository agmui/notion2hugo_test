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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQF6HQTV%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFPwlzT481FK8%2ByLnfQFpMNZdF3gzHJ90vBp7hrh7khgIgArWisZJd2vtsfk%2BVjBa%2BeXgCuJzNV3nUpzjL7LOHHhUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHeOAy4IId9Kw49w%2BircA0XiMCQ9AfZk5rwC1qo4PA7UMY8tHJOA9Tcq8B4Regkf3KH4MSVa5q2l7jlJOy5GpPQ6eFQqQ9%2BW65EFyOuc9FTameAqBGidaybgyZcPetTjDUT2aRAnJHwQwLmyn78yeZQw3jKYlFF042M98i84YZf%2FMtPjmSgcwvHCh9Kw3bMfINn9zIO9D1PUdYpCnUSvQuTockXuQDYGABNXcR4OcDxcvkU8qEiZlZ7quFELSnJo7Xib%2FjHienqgvCFDNx4aJ9zo%2BRYntGOCZr%2FrpVlEI0Pa8cH1rCelFmCPNa5cneMmz%2BocWOWjPKWjwhlRrSD5wEHt1uS6Y%2FLcjI72Bsr3Kuf5INxVfOYB%2B581HQZo0%2Bi6OvWGwtqqEN90gO6xKRF%2BkiQEDEGlEfYXWTDKsdo%2BM5swHyDMDRQQB3Y%2FCxco67s2jHGeC11DPfbIet2I617vly9oyVCTbju9dBb26nr0uNUFEd6Evw%2FMfYB6vOEkVIONFfdhDJ5wrBVJvQNjRUIvF1gPaUrcZGHaacmlLElu8xXrkkgKR%2BQK1%2F1bEJMg4StIC6mksmXopK%2B5%2F%2Foqw8sQqfVhy6CI63Q0CrhwC2vrnfwdjae8w2TxO1aUWTij7uSm3nj%2Fr96rNmjeLDC5ML%2FmvMAGOqUBo1qg28caUzllrM17bxgyHnHeAUV0JqlNwA%2B7qgmS6DF%2B2jpXXk%2Bya9bzjT1CdzQLjRBtN9D3XAK1r0MqnLNQan%2B2zrlU5Hx8pC6i%2BRDbmjXxpI70ZvgI5T3Ulpd%2BSgZFkE0GV6nmahIAhK8BuY%2FuMd9vIDBkkcuJyu6jUhaVmXRkeuzgd6NSChlbJPOfzubslN5IsdT3wsVP4kR46tILAJJ6%2FVG8&X-Amz-Signature=228a5ff12fcdc34ab42ecd256c2f5080ddb1e6e788b665a920eb5b8dd54326f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
