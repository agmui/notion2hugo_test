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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNWWV7VH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQChRRHIsltWpsHEI0PcMKa9U30lW90Bno%2FrKvgoFidGygIhAJr0Y0x%2B2Ovml783hnego8ChPPy1%2FFHqKzfCMxSipzpRKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzppKJIN%2F8PEMnAry4q3ANhPB2jm23LYDPRIqcrepJrJN16K46hJBh%2BWb6j8%2Bu4wBn3gDzvZnzboV4Qd9x8i48i0Fd8MCfRL6IHJSE%2BEb%2BixaHv0ujVH1jqxuHQJkRoo9nV4%2FiONcZSp%2BqQonIT%2FcoXltcDbvrgMSNSLlTJRYns3gvCId9%2Bvr9M6AArvEL7ApWoVqHm66nrVjAgE2%2BXnGaYWjdRvjkdVX6UQzCai6WxtJuiq2PMulJnpmOXfVq1gTYBJ2wptA2iJvvC9XWuAKq3qkvngwEHgSa%2FTUkZGAENXd7UVEQw%2Fk%2FiWD3LDPOorWZyWCanH2k4zBQing8hDMchvyxzvrooT3i3%2BBeqd5y1%2F4K1tRMwDY8oyEcIjwN6Hb9VoCbRbbglV5WYrAC4CQ9SI2AWhMv9J1DFTLd7KDrS%2BPIjMHA2EdhnFTNS699fFxSOwA%2BS3H63vLRmbi3XF7EmNgPrtyOLWkEEFzjgY5qyqbHT11KompwF3HdWU0ZNNVZrhwKyThhK0SfppPV%2Fxwl2q65iqu8fEiGj3u1Pfnw3f0InmX1%2BHctq3TtJyFnpe6kaF1gwc4GpKhTjORnU50Df%2BrDzqWX6Os6aDnv6IDFXBekdZuoGdqtWNGXozrQT%2F%2BPCZ%2BQbmTqDWlvrRDCbt%2Be%2FBjqkAZniIkKuD1F677O6%2F3UkqUdeL5vMzDB5xC8E4CrHsO7UlJRFFc31IVWEZBT7dC%2Fn4ZXuHf1jlnU0QCgqwTOnO2FRP5IpE5GIhaubUpFTpGWTLhCFrYbS0gQS6fg0pkp9WkUr0HxfbW3T3MYXywR7Jcu3VTLiC9tZuoHlfPwuYCVTL0fUibkMUP6MufU9hpOP8GFyEsY85IeozLxTTLgsxJM32TjB&X-Amz-Signature=87d95558ecb4356a935dae644c806ad7fac5994447143ca4b3038a059ed73a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
