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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625QU6VWC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKTlEa3I2ys8zMmhEB23z1oIH04z2JEo1gcuVZkgvO3AiEAg65gNmGvq%2FcUrvOXQq0RBKyQ4%2FKBL6Pqdoy9Epjbc3kq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBPLT7Gtvkqd70WvoircA%2Fb2T1w092HCYZfUeykjU23u0wsVUJuhbF44nT7idO7uJiHx70vz4Gpu8ngFrRv7Tm2fUvP9LabBKNDKs9EW943AGHpY%2BBp4OqfDBBaFSNZgv7vFIDxcmFct1Y3b6BNwGG7kVRebeEengVEU0mTTzJocYPkgvefw6U0xHajkAe4asHovdEI3nNpLqkwW28x5cJEwXUVQzOiQZuig%2FdixngPsEsiNYvnFe7%2BzYt9qzBB7IR836tsuoBosA9FPjKilS334M%2Bck%2F6%2BJZxZRGFBLFJVNBRBbMmGdTeTq98%2FVzJA63EUEQjx3HgCpiKI2I94Mk%2BdhwXnpaxbXPMHRmvRQuXOLbkLXsax3B5Fe2Cf%2F0pT%2BweM7kBNaOM3wyE8hG965qpTGk937kLnoIuJHem8gypo83eMo1dFuWZrCHN6zNaX0%2FMhc6%2F9IITFHLTWpdQDU%2B8vxLh21w5BEKzilum%2BL4%2FLilpWySfVHJfyrgUoEseVs4IwPl9fUqFQ%2BxyQ7wdsVqnyBjgHsA1DczX75hlTkA378acTlT0HiF8AjgcV9%2FGtzYTK6Oq3IdE2jfJ%2FSs%2F2Ynn71bXNbF1bnl4KIE53jhOCe3u8AimDBtFsCpbYFLzhAy9%2BlNQr9mXeD6KjdMPrK%2B8IGOqUBijNDAM2OuXb2s8V14Vb2j%2FF%2BcTc6qy0v2Rc0BEdb04wrFs0OWHli2yKdNjI%2FusPJMfZTQpoRlxVzhlWNVQi2aAgj6ZFl9oeb83zSdnuHumqYqOBbsYJkGGA8Z7rUJrQSKlIlX2kkxO97fDWMW4sg%2FGwpN4UbHysEHwrqnrp65BsbUcJKf1h9IqDTfz3IsDQTtLh2f%2BmkRCsN8%2FdjbNsGdvON5MBe&X-Amz-Signature=316ad4ec96f2ed4016b77e3c491b89a7c4a423c02f846c9c30e0a515ca008f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
