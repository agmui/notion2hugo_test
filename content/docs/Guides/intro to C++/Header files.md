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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNOVYYL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8uhHHnSXj9tiEwXjgiM2VDmeD49AQA3cs%2BaVEaclfRQIgfD8yqAHOrnOyhwt344eImGcxb%2Ft%2BqwhrJBV%2BeCuCFKQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDBQf%2FA1crioee0wRFircA1gj6f%2F8XtZRwXWwDidrjLNSqv%2BxPUlK%2BBV7YoT7NPDtuvGaxbLfTb4YSIaMf1ETNtxe9J%2BjvKJq7%2BINE%2BxsqszOTqIXm3apDI%2BVU0h4xEuo9ALaJJgfnAkoMRsAdfzysE1KDoWmGRUcR5Dni%2BGMtDDwU4r9h0%2BzLRJW5Kwl8Ju%2BsLm4mcfmOfRV1lKuUyIkm4C0lizI8FEMl0n82Cf1PC5C5xnaCjGM5PVofFg9NNF6LBF621UiJYRofzadaHGuSD%2Fcnje%2BWs2cRbpWVaO0eIT3n7LPhsH4FGmJSd4BGajoLBi5ZIPIQOFBhfQMoragVtwDHX%2BQ9TQVlbBF5%2BF6d7K1v5pGlE6rTgfuCgCOrjYMQbiLjt1rS8NsLO38QlsCRfhe0BbDpTf%2FVhAE1qsHOfsiJbzrenZ%2FlLZlz7REHdDDyBjtgVQZtkBX7MOfndZU0WwjCo00YWHg7a5pysRWi%2FIhbgBQ76uS%2BmU585qwbcjhbmcdFAhX25Cg4k1EEp4IW0uRc8MaS212ju4W2zIJpzZxWqP1FCuxeqTv0ll3b9ASmU32s%2Bps7SU8WiQfsvoP4UGnzW%2B5g4wRjWGljLnQUrebp%2FA%2B9EBH6QnA0Wh7%2BMRPaJH%2BiMbIOfe01NIDMI2x5sAGOqUBhiv6Kmzzy7Y4TF%2F6mql0RfubrUJ%2BwO9VMQXA8UYGYi9xZU8HbqLDe%2FQpJJ08%2FfYmXh6t8SAuHdhxgozDvOYp%2BBNRaoS%2BGlIDDkMSM7xhn84UUG%2FyR940QndiobBKy2IJhmGLB9dJwpqHPAlOOKXXMkj0G31gI0ebni8A%2FtlbfDRpy9ghRDL7RP06H%2FB5i3uXQqfjPoXetqxJ459pBsHVV%2FtjoUWK&X-Amz-Signature=7012f36a5bde59c774b34e15918529d9759d67a0ea6d79a56ed6a717e9e9a0c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
