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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BOUTRO4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FAdzIOoUwkRpX%2FqFtE7xbtD%2Bnxzo7lykAELCO666C8AiEA9C%2BH52DDmyo%2B0amJFOmhHE%2BBOZhCdMhAK%2BYBo9K3fRIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0B5zxyep5KBkxYoSrcA2p3%2FJ%2BpN67EVmJYUT5p4%2BC1tE6RRzsJEj8Mqc3iTv1Utaw8t1XSw%2FfndsmHE1KXPhmz1Gcx6K2yjIFCGyUeYxd0n%2Foka28lHJJNFAl7TQ0fcHnW3g%2F7%2F5PwddTL%2FeR3sqFMwrt0zbN1XTe69cVSfpe4rkmahl6KdiG%2B7lEo8bq895WqDZO2Io%2FJ8wlKv1KDe0Qghhm1BrDvHuW0v3%2F2sARBn8UvLI3VwGjQeMS219bAm05LaQaaSzZoHdf9WUNZPYrREVWQB1afsTItm4Ro8W25qwIm6JmlQFyE8xydnDrB9dogY5QFONqhHfCIJiqehUrY6BjSTFsf7kl0dXH8ph8ePL7ESeelV8AjCpZ2dUSj%2F7MgG3ELTwzuJISO8E%2Bx3mycsvVwgS1BWCLp0pCMAFhMKxdA%2FVuhLnzAWH1%2BWX74EJiDiN4cRD9mBb4n72yNz%2BKvCPJhMbWElcVCDKmewWWj1NG2p0vb2bmM4RyWEXWRD0lOis1JTS%2BZ4c%2FlhtUUmy3nzSqokbO42hsY%2FcvBWMa%2FhiUM8mv3wHc9iQbwY7T09V5m07tRRyC2oy8sPd43lXYF0j3OKVjm759t%2BGbnCzhQnl0D12EMIrsi0p%2BcDHa44yN%2Fiz%2Fhsqri7um2MO2s3L0GOqUBXFo3YrbQUGiMxGd%2FP4XpQYz%2FcJqX5BDE0IlvM69rPQV6pVYHZX9yrres2pBVVH5gSWKmONKRUNAEjUBmgLooJlMorEZSH3uPu8qmxlhTrBDcSnWKVffH7xMqxPiea7LHgCYsF49nF3ndmzmTjzM1bbhN9yj8F388U6a1gTh8J4TJ7th0qbZFQEBUL4N7DI90hMKi7Q320CpTS5Qd3TOAB84Q83dt&X-Amz-Signature=be31657980eae02a65e6115d5e7594d7f033155f2726d85b5999300294489e0d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
