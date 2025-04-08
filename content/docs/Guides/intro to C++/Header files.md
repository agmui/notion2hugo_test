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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4UPHBA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIDZvdcUKp9YK2Ox8T5rpWVi7UjB6BL3x2%2BhM%2BxKjP1V8AiEA32cgr9xKg4%2FJzJl1I%2BhkdcdJtlCCbDCQdwxBzhQZ72cq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDW77ON7SmjYf2eBByrcA2EQEokb9B2gSNM6FzYY1Q4D4CqXBrJTyfmMDfVjCoQKWt4957rNYdZuq9l25nDNOXhb7AP3Xx6CSIoFp%2BnS4bS0EZyWcq51%2FO8%2FukcUl1lU5hRaQ1stQPCPa1Mbh9oZnUbUPbIdP7bBCanGPbJpigs%2FYMGAISgCpaOucUyMnmCCXIv%2Fp88o2pTJOQsOcvmkLUgN1HdBxQ7J%2FsckDQDhWTmVp9EP4MFsj2IGQL4ZATjXIOyPb34ZZQDpUIA9Mlvzt%2Fz4QxY9dkXe22wjkQuAO1slThydU5X%2BHyNTONwMIt5MAFxXHe7y9R2%2BpTqzUnZX24oofIHeH0Rzbt7y1H3V2DH8TYGdsFOb8ukGgAFkimj%2FyqC%2BLUFwz%2BscRJmCUXjNwPon4EHc1C4ZkRaBdinoXh77jXeurlCFDh%2Fu0QTZLGdHUryY638loyulCu6oXgmQ0RY9wR5OAwEK6kuGVjcU8sj3aAjGPU0r%2B0y7nTw5o9%2BPU4%2BZ8WPKB5hDk4PSQpAClKX0QTvq9Wk56RO6YOZ1Im42BwbKuWPRbFspK%2BACQrlOAEwgArxz%2F08rHNJngPH37Mtw9DMxM2Tqkma3qQUHqJYMJA5SOAiX1smMNIePYetoIodVXANKRunB3hJjMNDV1b8GOqUB1H5C9HluD5jYkyXjbgPKh%2FB%2BFGGE9oL9E6vwa9ByKyoDS6bYFoo3q8MI%2BEoj7alonMw%2BZLImKpLKoID8YhPfaoVTJbpCl2Bx%2Bvlbw38QnuCfye78wGvTQZeOA4DIkXSX1Zw82dMEPDs7NCFZdJMsyrgm4B9P%2FQXPsM2nFV6AH5AsEh6GVb0ZKJJ22QFn3GsIof7nSFTL6DoEC2Qm%2BXBz0sg39yMo&X-Amz-Signature=85498c316e291454fc3ea4070b6667f2131c762e5aec99eb80d2df7d9d7b23a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
