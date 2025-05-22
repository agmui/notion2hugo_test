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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJOO3UJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIEXvN83LAJ6HEN5BkZLVVsV8RmCOYkI4Q5cXMf7pr78UAiEAxP1bbAluZVAgNnUHqrxoUGnSRTpx8C2NzCcwWXVharoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNW7h%2BVwWdP0J1QGyrcA%2Bxy%2FZT7uQzGUIFdh0mCTZ%2Bpp2z2pPWHPXgzkPELoKK%2FKWKNSn2j%2B6yS2qmIcCrtIHB7kKAa0Dkk5N2qKUQAWfR%2Fx3jC8UV1DajBkc%2Bi3TGeGTYIx2nKQBzSIe1g1KYPcZXJ7t2qxWIMcWi65VbuAu1dEJ1W2zIOrlynEB7ljS%2BMGT9aNux1e2RJOLKB3ANDQklj4z07IDkVvZ2Ec74EOPVT7HkfiniA%2BEiVgY4ZHjZTGDNBxz61BFL7uQIvNDJtxoKEWtzs8Udtb5rCA%2BdFm19w6sD3riCD7tc%2FsI%2BhaApHIl9pHjDzPj2akvf2CLNW8mh7V9A4PQLY4dTGpya%2FbjyFjUoTTwzLjNq3aAHNjE3gnhqyGwgO0LM41vtJhS5%2BwD2wk%2B%2FjrbeK4KaCIRm1DRmjw49a00y35q%2BvB9D46HIou%2BRwAugSi7u5kZJd2jRjdI2aVNKWxdeSo6DsSBzskKlscZoDxi5zAjK%2Bcs8q62STtV2GVPCQuTIOqiavEaeLl7UhJY5TyMNxYm8hrqGM3lh4HP%2FnzCOracoO1nepzwzo2iVyNOg9qE30IujWDQRHq412zZzJz5REMf8%2BRlYRhGkUwkQ%2BSz2iXyTa8MDd3yuwpE0Uz2DoyjPe0Z%2BvMPmwu8EGOqUB%2ByU%2Bem6th%2Bo9VeDyYU4gvFQheBciRRXLYxowU3BrHvBiV%2FmA3qx346A%2FOBZLEWNP1JclWGTW0qrDNipOfH6hXP1VISD23hlJ20ZLkQSfbLKB5SeN59Uit%2FRISCZth5lBSDGsevWZ7Wulh6Venvjc9MesntAnKHwTStGsoet0gBWLk%2FAPR%2BFXgf5rLkjnwPwT%2B%2FJECJspSPPIVAOVe0VYfxeQ46xt&X-Amz-Signature=79747e26bdf896708a13bf1bb74dd71236a1b240e9fe4ce6450f41addd59cadf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
