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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JNLHY6H%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDijy4q%2BDpyn2ZedJULDlAOrdP79UjeLNRfhF48nZqjlgIgCx6Q1IrdybrE0UTPioOCuRMXKtfpkgLdc7lozkhphQoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDF3i%2BSwHph%2FmdMbItircA9vzESlLl3RUumP%2BL3diSOPQVwp3%2BWn5dsU0ziV3AdW0l95OkY278t45t4Uqtq1lVsSRNSRFs3o38RjFJOoM3hj8bMKAuEGAE7pOuUqN2Zph38a%2Fr68fUpZGojedpDZZuvOshZ3ZWWgp%2BLk95m09yLeUZOfPcAqy6zF90Ngk7onRNeqvhogsBxbRLN%2BEmy%2BYLsdMaktUU6pz2uINMiLWlfr434%2FkZLDGTq5u6EfNai1exAq8otSrpaTQCjtUtb5K4YgBtD1ZOke8RRjC8odyF7JfBs%2BAxMgOmvUhWc%2FKfS%2BybaiAijWCZcB0pvrdYLZvtSCP2efLkX63sIdOspxA2GwM%2BMn3qcn5I53aSXsi6dlvxhTb%2Bh8ObmaYcXXB9OtuJsK%2Bt79B7fIouo1Mk0c2bOZC3y6P5rPovu6H83EKQKQdhTZzLrMG8PO3xlIeOKVcWFwn6BBGXo%2BGTqvO%2FQ9EMwJIUoWI36Csr9ICXJtxcLY750K9nFGc6%2FMvhcyt%2Faa0LPcPcKwzNPBz%2FcoVNfUtqQO7XTREYGPrWu%2FFNUboyNRTvmCk4%2FSVhY3m69RgffanuI7P1QkXd%2Fgwb4A3gLGIg4xesdpHvcTRdGewfxbxftUajE7k%2FNlunCfHd96AMIGG078GOqUBJbQB1Wp0iq1%2FEGNWXiP4UXNiCZEbztUjIIHcVG3sEO2D1Y%2F%2FZTSufQ3dzYa6SRkntN4lBGJ7CxPqS2crWfDkFjkXyyQDewLN9LxO8ophv1sGeFI9vDxUmLHtJgoTcsKf7PxJxqLJ7dxWrTRebU7zAKTdw1XizjtHEFHWnWZnrAWp9f1mNOdBkLdS%2F49Z6TXA3kCntWP7h0NMjNOD%2FnIL8Bw8elpZ&X-Amz-Signature=b47c3de79bbf666dfdb8edea38c914efd8c0a7370f6991ba9cf9a2a5869e328a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
