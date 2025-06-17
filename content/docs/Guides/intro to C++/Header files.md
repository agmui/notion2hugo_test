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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKSHJEFZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTiCmylBXzXq4MGu11staAY7dqJQriwzqr6VmxpyFZ5AiEA1g7nxft5DcjSEju6Iopf0GwFrV5ipv3rbmS0E8fva6oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL4cmyAmBCiEHS4QWSrcA8UkDZAJgwWRinxDhykN3Yv6fvce34nWnxjx%2FMdvt%2FiaCmEB8X7lmhUaXfkeWeTT99UtKJly04GyFe0jlGX35AJ8Sn5Zz37oi6SO6YxIdxlsanXfhN1e4s5V2Grg2UML0ps%2BYe9ko8DQRD5MNMgs5xNdBSMHbowBsWnAfzyCWtE2ED3g3rT87YLUqj%2Fq15Xa2nPHJiE2aVshoSE7lE7YYQgvHjyW9IKcm%2FWbSl8iNqNvRn448oJsyR4bF0bxhzbJsQ%2BExsKKcYYNQrYRQ7IeDDqVdff8%2BlM7JF6smgd3A1PDhPrU1Z3RBvout9D%2FFJFCRYC6W1ARrnv5hZCSCrDu65dEhpV%2FazD%2FpADOQmU6i0XbVdtAQdjZ6vbrK3Ag81gW%2FguaPWvyHtoFRnuzdLOm9t2W774rI9AT%2BcMbBt03E7JYPvj1K4dfjOPJ%2B7Rw8G%2BLwRfQVlLRVVs6%2FCMAa%2BHegapH%2Ba7hykVonD5lArIc%2FROp%2FyxCXhyIgsNsFiGLoECRgi0oHslDSkRMgNv%2Bx0P9nFhi2OivRh%2FKJV1w4Xv90XWuAmSOPbw0KYAJvZ1xdu1%2Fzg2l5Po5SCm5qC8hKSvGpd%2FTfTieiz78CaaPecTkGxwWOP24tFr%2F5hELVuGyMNmmxcIGOqUBWCSe61VS%2F6O1U2vev8EWt81PvP1L73%2B3L0czJ3I%2Bt5A0O%2F4wInp%2BuKrECfmwfXsvVy4YbUt1pgGvgIM7R5uYVzbMJF%2BWaq5P403s6Vx8KSHKX6Wvl5b1NX7JRAxbFWYusIYKajSw4iqjliNOLPC%2FCo1onjA%2BVv1GyDlgse5WEwu0s%2FEKZXywxWRtBHXpqBJp4hwNGoCDl6bjrVTgrMq0cJetxlhn&X-Amz-Signature=666d1a28b80b218e5ee23f3a0e148ce378f79f2c2694fccf5482d50eea366449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
