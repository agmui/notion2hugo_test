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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKNV2ZD6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4AHlTqAccDtQqcZCFF8FADbKFWvLsmuweFmfwuPinWQIhALPJPDj18HNJOgzSP7zIA%2Ber0TO5N2ifrZqc5orkrz2VKv8DCC8QABoMNjM3NDIzMTgzODA1Igxglzj9txHN%2FrAQiLYq3APb1vHDbDpL4Lnjv%2FZJ9Lv0Oehc8rHUtmJs25RGmUCPcvJ3OZP%2BI9lmuXLzqWNHXiWOJEYq74Nf2MKfXnq%2BYOESbLO%2F9svre%2FxWzsr7zJzs4S8hyVrTYnssQQuxhXd%2BwVdGyFsZPm4R7Pbe2FkjLgCwl%2B6BsTFQQrPdtUYw8QU%2FpY2q120b%2FZ08s1305nHpm3hrL4NYj%2FV1JIm3fFeduJJAW%2Fqsp6tBfmBpf3bJ6cJC9HPdmwghputNcVxkVS6nwG2SFWSEhaxfsKIuSkGw3Db8zfYMeT7ENKCRS3BcavvOBJBEdr%2B5SbIuwn2%2BkY7Q5vKa8Pmx6pCMHa2mzmQHLcpf27HiemnD17tpY%2F0ohFDJLDC%2ByyQFjb2H7HlM%2BniTrUrCNJUxIeeMGoYv05PnLpySk0%2FLnGWaj91tj2lzDWdpENu5sYin4aUK8pDAD118l4yNraCT%2FQe1qbTEMx08wSF0ZFgoCBsl9qhuwLrgdUSGmMZX%2BBRb6nET3Ea0z7jSyJ3zvxfTSsWiqN%2FADcMMceR%2BxoLTpjG1vmLHbcPTPVXWDM9RYfqOd%2FpDzaBWxEvio%2FyJKDM1y%2Bi%2BkClFV524kk6qIT0Bfh1QfW%2FTZPA8Czcj%2F5xRKvhVQqthUp6M%2FDDos67ABjqkAdmHXMsIAZlQ4tVOuLOQ2cjecisp3r%2FtHCTxRqg6i7mKFc5tmeScUHYlNPu63y2FL%2BNVMpX%2BfJQAihTVaCy25IL6FPoPq%2Fy1uwxb9k5ipr%2B1bKYwbgujRDG%2B%2FH%2B9Ga3kDD6BdWnEViYsA6VmY0ccVVFUblyaIvnZ2sZsF9h5m2QS8yObWf7Ao0NWCLeCnrIJZ2bxZMCh2H0vxec1WJziyJPxIFfB&X-Amz-Signature=35a8e74e41351f3d7a0ea6e206280c75409ad4ea63b7416c80b7345102df421f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
