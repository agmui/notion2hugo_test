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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVVY2Y3Y%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7KwBpSIAYLXtXkluQd1%2Bv0VSNgKWPWQBpm2qr5RA6ugIgKiTCmmDjUu1oRa4pw5TxAKS0aVn8skSALqjbt2yohnQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNME%2BM0RlTa4XeKqrircA%2FVDpMvth4DoSlD5LIJkE7pqKykncOb8murUdAx6Ji%2FlaEa0DLlQ7%2Foy21VnUH9%2Fi6Y%2FJErdGKPWKWdWFRTu84YGlfPcxiKJnEsrW%2F8nMskssjqjUZ1FY55tWiEDCD9i5BD8MbmZa7LBxGCXOb5n6n6Fs6FC1QiT69Z%2F7FUDCLhkmjHP%2Fbp5j%2FCd3XlTHrIG%2BO%2BVRLcX2i7zPqWjnm0vRwuQinN6W2LKSfW01QSxzkS%2F1TYzJIrul9zGhIOpzfTMtZR11cAkymndq1XTBt2Jr9KM8DBA2%2BcNdtypPLVFQqh5bI4461rluijXc7FzAWwVUmcM9eZbyB7F4y3A%2BxYhln0UmxcaCuCLsUPMUUnbYHPyUj25mpj9JVeTv8Dlr%2B4Ky9elGoTsU%2FoJXVU3xQ6lWOmdlHUOwPEOUpCI5vfVz3IPiF9xKkR1vfMnMPVwbD51H%2FI4dBPvq27%2Byyr7xNRRykM9%2BuaN2xhDl5NOSA3cGvTd6oc7KN4p7Ck8Pi2G9SRWcPXlCq42EfSsiy8YesOlCP1sG61AsVwO%2FYfjCMYW6%2BvTHeVhBpAf6yJT%2Bc7J0DUQGPQfGZ3T51y8SXEAFj%2B4H9C%2BP2i1oqfhbihXoxs3O0DdG6z6iCCaDYgjruNNMKSQ28IGOqUB9chrUpaJCOjZvTsflJdTo7BZqEpKfuudZkXVCmSbdXzsBtfLzOy5VxL9immqPcp9ny2%2FwJWqM9aNZtlM5zI08bV6uSZ%2Fs8nkikHvAKXm9o6%2FFV7rkInFelC2aExBd%2BdoztiPUBNsyvSTXpSrlGz%2BYQe9i4i%2B8PweM%2FHE6eABJ3z3etp9laf8p7FzMGSkw3xuYbuWlw4w1rm4AMJ67n15yygRDoq4&X-Amz-Signature=4dedd9d802c36386b46d463abc5bdb177714275f7f0f1a48ab95da8659208e2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
