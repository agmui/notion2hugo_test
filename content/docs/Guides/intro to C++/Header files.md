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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX5VOLVK%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIArwwkHWqc60nC3vxp92U8mZxIo3B5dtfVzDngTGzkNHAiEA6MnCFGjiT9n1ar1KN%2Bmo3Sc4%2FKY%2B4JtxsBzLGqbVrRwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLam6hF8pZH3EZVeaSrcA8Q3RWTJWu21x5a4ZHpMlXYfl8wldmKsuyiYUhTpF432r80AyUCNuoaONcSsE7UKndWK9DZCoEN0b1lMtbCkWW7aLEvUxY%2B9UbIy3%2F05ibtiEPxJfvlzbb5sV%2B671eGPJDhILX8fFTOsHEKt8CTqgkrRSoFdJ1qWZWVg5YcoLW9Yf9oIZdBmBQMlt%2FpSgCd1jGxbPj8eKgdEil2TAC1ZrzELo1YVF6HNjbkJLAERtTUge4kZaM7X2xC5PxrVvBowHiGlZ9tYkNoSZUAOuqKr68bPPEzuhTWngjLp4ZRiRr8tqNwWJJNhpRdH%2FM6VBmusPpTL1V%2BoeJ%2BSRq07jwryX16Fsyd%2BFYRzBOrgkB2njDmZzSMvHCXiNESOWDxvbx%2BVIB2BOj8jC2ItRkF6SNdebRxq9%2FErgld92%2BdeJx4XEhNO6XLXT70H5of5II4FCXFaAAv5p5PrRDNUxb5wmhKXG7fNyleVubW3WKZ4yatBb3gNPliNeRs8bvAmxa9U49Pr3WNfWO8CE%2FepGxJLOmYztOKaR%2FroaXwMhJYKL5ZemS9w4ZS1WBhHGe8CJxAey%2BIjR%2Bzpy6h74PuVL442VMNSMoB7TTcEwUYMtSN77j539QOf2NA4jps0FSNp6s5rMMqDvsEGOqUBm9VWXFZy7URz5amxxnToCcAG8P89wIu7Gceuew%2BEKEmv0dubylXTCOriWEbZ6eM6vHameQ3FgfZbxq3MvLIxSLt8QmVpgeGAH6%2FleyzpGFiKH%2FT8%2BVnp%2FTj027muufmL8sK2Ublgf5L8tisAGpNVhgU3ksBNxrb48l2bq3ECOX%2FGY12NhC68VuEuct4trzfdjKXouij0hZwO62OWRYXQdw93%2BKfH&X-Amz-Signature=9269d4eef3fda46307e24cebaeebd1fb61a652ccde2c45931f58032b8e7c949b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
