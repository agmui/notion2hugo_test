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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUHYWTKD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAWdxRpShVLJ0NesJPvTum39Pm2mzPtOEB6pmpqlFxyeAiBDkoYMAL6c72ypNHaUIh%2FPR6ff69%2FQ9tkLl3ccJ42LRCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM3xkajbNg%2F2FVfohNKtwDbc9qKerVBxFYVs0bPE4h3OHBfT17Rx5itnscEJELrPWOjiQXpNoERgDMGTg%2FIm4HAwNJ0Qrsauf57wCumIZY7Of6O2IJACWxvdmBbspyiZM7TEqmYZ5e79ij07i0b9K1HIdkXR0J7FaYI2f5L%2FvAjivojcdavCCqvozSxpirGbXCOZQaZZz593r%2FgyZijuEsTmWg2qEynf7EVh%2FxfIkHDzODKtspzzM1IJhobMjbKGGTU1MxgD%2BnzDiFkdV%2BpKujEA3v73hbgAna4Z%2Fq%2Fopadb8f6619dr231VOneL7hY8DVjlb0KIJv0yxvnVEf25iVNK8bF%2FaV7UTnMyp22Qm3XfKbqL8VB8B9%2BkmmUQensxm6t2oOW2S%2F5snjfIWxdZc18dq1sezVpDEv4Psj79O%2FV5NMWifWhN5u1JfYAW%2Bwl5oax5ORCw%2Bsbv4m0wgCmz%2FRE9eAdBpUOZLpLrINxW7N7v5iqhYczjthrtm2GI38GxfSOV7p%2FFjcV%2BCLIPHxj7U3vcB95LHd0tQrh0ce8sqc%2FXbu1ySQ20AA9aRO7TnBfHyaxKBTAN8FeAKaNOnIpeM5q5eZLLhCGjPkN0favB6%2FEmdPWJQap0uCvLzGPVnSOsBEigbJ%2F0ly1xyvr94wxtj%2BxAY6pgEYS2ugBOGAAmJ7BrIEnBX22ArdB8%2FWTr0Tb1S5YfzIMMNXeTxCRDXCgHbqENblNA9RnS4NCav7OO2pIz7%2F6C3vdkcAJpdqmY4aZv1toRjb1lrQtQioq9RWP%2FKhDhYudLPWc%2BPE3S2Pi020g8j0uB4wanVJE0uotRKc4hQ2DyKj%2B6tYFj0wLqf7%2B3zsaK9%2F%2BYatMynHyUhb365iVv9qwiGEP3dMkR5c&X-Amz-Signature=4b91137d04f0356358faa690c4e4dd6c8601bfde2bf3c91c17556873fc933fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
