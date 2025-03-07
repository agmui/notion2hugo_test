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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NEB7HVU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDDWtwmCr9c%2BqtI1VXBet0m03j8VgcMYGR2cszia%2BJJbAiBW3wfFhELJ1Vm0glh2JHtt9%2B%2FsLcPlQ%2Fet5vVegckvJir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMmDba4AjTTUvyLSBdKtwDB%2FMScSbtQgAw%2Begrvh3lItQJ9OA%2BYijbqzXrZGIedwHdw1YmgYVBiR7%2Bj%2BKzk9iSoWfrB15LkV9Xf3xg%2BGSqxtzoGB%2Fnk0yEhQeMPlD%2BKZscc2CMtAEVU07YPNzhFyklWCliDiIdJL5n6gxaJsOTx9D4%2BgXOVx2AL%2BUBUc%2FOh2o7pNzMyVPNGGEs%2BBjgVDKEi1nuPryPYKL0Mkypchka2NhsE6ztZOAtp95tS9qpDARbr2XQuLtkeqdILNqkTXTO5qxrbAn2NqA5OpuL%2FjwVidyzd05zK5jfUFFiG6oMX9fX1DlRlxAauA66F3EIIUt%2B%2BI3HWee6OBWBYd8LND4Nt1EwGIJHFQm2y67X2qc9AL4hFeXSnk%2B3ddI%2Bs3g%2BnCj0dGt7tNL1sgWTE%2Bm%2BiANak8gr60qMSWaoDt19BZtmoqsz9HCWqtTtHyscrS34k2ozw2lbhZWnDvZ96C5jZkBHdsk7qWEpz0URqA36mMP0SVTWSSA1j%2FA30DoFE%2FTxNavkxE5au%2FmMxX0GiJZKs0PPzix6NyKiJeW70JpPW43Hz8u%2BMAGMaC0G0kyB39MSBtOOdZuYmSvOJ%2B%2F4F98%2FM6nxEJPjMpzbZwNclZHNk75B%2FBBQczcpsGWbPylzpZ8wv8CsvgY6pgHMpDEWmWK%2F7g20ZZzI8o45GDeebUMMx2aWYHt2LXc2dOEp1tmM1zvGRREc37EczVwCR7kx9pZ9gu5nGw8UZe9W1DFXPa%2Fny%2Bk6iFUV8KO9kctq2eDboroQTLyS4j6TNos2HtZ%2BM00L%2BNaHhf2ikRbg2Nd2kuAd%2F7a9824BI4wxX67m%2FR%2BOQz5KhcoyLJHdoMrCJ3BaQzqr5%2BDvxzXPfLB2nropKccd&X-Amz-Signature=cbcec51eefbb682fe5f73deb0ee12adada7ed57262ef3aad26ad72e08e6a48d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
