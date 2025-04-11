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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOWJVK3E%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFe2DfB7BGvZGpBFAGJPpENsSr2Krcyw6KQtq6iyAsH2AiEAtU4tVe%2FWR8gYDyZTp6ZU5QP0h0nAZIvzyODS4bhqhF0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BMhi9YFeu5RxRIiSrcA3GiRmKFKsN0efq0YFtA5%2F30zB6aWODYvic9zhBGTKAWOryneqbcdTv6ir%2Fv987OFlU5lJGZkS0VOhqTuFjtsRx70cCqplD9qoZOLPii19lIxQ73xIphoAeEbUoMvxSldO4AucfOPyRkIIxZxb3lgleuGb6e7y6pBb7M2zouGMWzbrka4POP1lBl58WJ6W6tuwXRe8ls%2BIx2NLDNx2%2FGw%2FruWPrE4NMMDEhX69%2BpG8MWQJ0ZeaWPpI7sQKJg08jiEJPCMTtKRX7emJvKbYLkdu6q0s%2FLoPig0yDofBec7MAOq2SQJZ3gihBD0zWAdA0pw8%2FAOM3db9sUIhXqsfBBivIJhBhFKY06hg%2F6C3JRvycBrZkZY92Ll2RAHBWMGvoYHSUnUylliTd%2F9cSKedomBXdlimDJc2YeVt%2BvNBU9DAMX1SGa3enKrNtgN1M3srs%2BdTsQ3axGDnZQtlHQhW%2B1k15MJjdE%2Fout6UwnD%2FXaQR5klOuDBptcAU8MkSD7LUlXaD9q1mBIw%2FoainsOv4knbW1idq33p7ATg7FeH6gZQUC0PB6NohS3O0B1eWLRYD5PPO8i6Ty1B1m6oBRbAoV7qMN5PWuw5mk6V9OKvD2cqkQTH47wW0p4TbisZdnPMKer4r8GOqUBfZA1qIKmGGUJwIgKMqwWeVUaijp3QAq9DgmK%2FrHOuv%2BxPbmv2gn%2Flsd4162bwgsuheWTh%2BHt9GQS30mVSHCGha%2BtFvR%2FmRNPiWQMcaosA%2FCOqHuZdED97vD9Rf6bPuysyF536ZTeeKSJkf6VsUmJs%2FdLa61nazYTJkX5DTp%2BSM4MAzvqyJvdsg7Z8EMMiT0HeJwT%2BqUUfIZ1Ntmsl1r6o7UCGJGD&X-Amz-Signature=1fbb5c55ef2b205082da29870671a73fa89143524a22e0a90b6f4e46b2390ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
