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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DSMBSOI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDM5BlPKui4CS%2FZwZfqJ8RymiopdZq%2FEl6o6KCDsxh%2FXgIhAMpTlfBiewBKC9WxnN%2BzsGHq9z06c3Nb%2FnLK426NDTeeKv8DCE4QABoMNjM3NDIzMTgzODA1IgxGeynbI8FtKI%2F9yeMq3AOPnhfyTezKKERJO4oyWcsAVIwjpLYvXB14Ik33cxmlIK%2BjVLH0UF5ZOvTCyq%2FhHewKg0AELoKUr9DGsK3d3YRrVXzPDcf7qNe%2Bcu2lsDvp771JNDnXDV1UktpQ65SF3UI3anCiXWkWUm1XXWz4QZBNoEZbdn4tQM4zeQkYLblf9UA7%2BWJyh95aFbkWO%2Ba6mJMhprVEz8PCjTizQomfxMFFNN4xil2pd%2FNYY5o2ZWwSXaAjQeqNCmGQaUdWSNvo8b%2BC9ySE3gJwv147cZ3GJYGbVKhkFE0P6nisvNNqDBIsJTyZv8AM4IOo%2B2Zc5jbpfHfCngDykG3ltOZqXiLJ%2BznX9ZeKq1y1%2BN5ltGuTQy6h%2BDQzL01K%2FJAOfaZIb%2FdRosO9fYNLkHkHRbmFrKLwxLbswbLZQVnn4llRmRPy0fGmhdc7DViz%2FCRKkAVyGeaILMsknvInJvu2%2Frsk67EYc2TDn1ygn6JwQn0Nkk3kKReJ2YP%2FiThZrBXcTFRjFrKheoIcVCMeTGk0SjYryqFSz9xtqFbRE%2B805v7TKXsXjN8NC4s7tJHskYoOh967ZPe%2B3AjQd4KyY9dHz%2FapHBUTmKrlvruXLikyxPsZhCxPqpFuOKprQW2inTWYYSxXMDCjuvHCBjqkAVsvhlVmA46AZr0b26Bd8rB3%2BT1QU%2BbgxO%2BAJrcN%2BNYcuExQU7PIpMWSoGC2DTxN8k5uzsAsyqUdKecjNNsxyCmTz89QuGl41lRPtX8xjMj%2B5q%2FmXop5Fgc66vxRCTXw8MI4nSqolhTUzI%2F%2FO0Ht6pbf0vqEjMwiOg0R4D8L8zWa4kE90ir2Z9l47VlDPd8HwdEH0%2Byz6R3EHVNPazrxmLOvqLia&X-Amz-Signature=0cd80e5783888044c522cb3629108cae40290a519e32c8dcadc97583bc04c64c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
