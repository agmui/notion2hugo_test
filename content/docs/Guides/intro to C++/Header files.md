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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAYVYQAS%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHceX5fyxHHQVWpkedrLgazDUUaTLVxckn53BTzCkNxkAiAt9M%2BfpYvUPupMFmhbjoVRDCw%2FaA%2FK74VUWBiL83gJXSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLMhdwqAjhV83B8ylKtwDwMYoiXxCemh9if8Ik7d4E%2FnGSdhnNP4OUogr1ArL4pBFxXwwY%2FCR%2BIeBnCxU0rCQLeQQZIaLLFIx4K%2FADlcUyCzGwWydlZx1Tzj%2FmFKxKSmjH4jarcGQ4IDyvpYaLjz9mV3gYNxBeXUM7t1BM6YTev9kLv6XB%2Ff9SJj0ff8EAhtSFTlvAKJxmFxKuYTcT8jK7mAn15NbhaB7XG9urC7QqQlbasSfjiBoF38%2FWB%2FIvlbXXi4g7SzdIYaCZB7paqYhK%2BJgz4On%2FqWmN9yZoF5VFHMRB5rxuXpuLclcl5DE2UhtTTnkzYbBq0GwUhn8QnXhtVLgGRY7sKeItY2lfpYt4epFlJs6tAjq4C9Wkw26n%2BOC4lo2w%2F3mm85A%2Bwz6%2Bk3i1WtARENJEvsLe9X2OVkc81greY3gPTNJGSzK1D55LKKP%2Bs5%2BjaaEv1RS9pLHzyOmiP9NiBtukyIKks55cTv2AooWRQYa1MXg7OX8uHdF2IwTaRzsD264gZERILbpSwL8VScjvmk1WSDYfARofL6nOamJo7C%2FI1sxcrukXmFo6F2YCM27lthBLUsrp5oSQTQ7adXDwsZt%2BqKQLuXnSXX41mLK%2B96X%2FDkeQnaQ%2FRHPX%2Ft4g3PCW6qwclh0hj0woKTAwAY6pgHGzboOh55sqoxHCSjSRumaKNjTzfDp3ztSBZ4yTIDFy1l2PRi5EMaYgKEJmb0QNPBNrd7WK2s0mosVJZBQrxclT7r0wB8fKbcGDd3%2FGsO2I7vWu8POtgeOxr7KqJNKs7%2BYz6nr%2BlbLfyqA4h3mU8zMLjIV6CYkpcwZrl2wZAkFJ0Zy67EejyjwTX2ka704rV9qSfICM8IpvvmE%2FSb4qumlPcOevHzk&X-Amz-Signature=7f863c6aff2af42fb6a6cbc39e7580b7420b439fc1b770beefba405cc2c49502&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
