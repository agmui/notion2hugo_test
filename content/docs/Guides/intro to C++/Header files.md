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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKEQNBMM%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8zkc7ytVS%2BlPca4XiiLYJvPTQqNZUF2yuFEgeN0HciAIhAJLWUONgpQ3rgwqmd07UKlhz4C4ujk31DKplMR3X%2BAIwKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwITyotXnzyIQs17s0q3AO9Ku7DQEltXb5u32V9yEz3Jt251ZRX5IG5XYeTrwMf6dsicPzXOWuFhS56VIVL4SymiauZ8erV4AxlqNSKrvxy4pGpJZ0fFyunNLcv7JrdXiZDHcueBkHi4yFPTvvMw7RUzPjwycBU416ekofAE%2F5Z0KKIRgGp0toWprstOn73En4u7LM76SzL3IxoLJxfFsf3gxd6z7Peo4%2BxvD1l9bMRU2D4crl17N4RhGlit4nmHH8upr%2BaBffA8eeNs4l2aFIRz7QC46YiXO2NOagHGM95OaHqXFuK1mqTDyP%2FQtm3dbNHQ%2BD8U%2FAdbFPgwuf8AugNzDm2rs6I9VagFxdxg2%2FIshHbe1t5eD0GIotk1%2FjBy1r5ZBoaGBFMmMmK%2BYvmMoejsBR4KJ%2B2ogeTdSdxaaVZEaJHbF3oH4XU69niuMhYyujPACAirBQGPLU8Ys3754ml8Nwcze5ahHTYedU7s4iOwNg%2F7K6VU6Qss6BU0XhOJSfE%2BQppeQwq3sPHGW58WaJs%2BZ%2FMCiaRHffMuvTEuLrjhS0l2MrjN7NRxst96aeLw20y%2FiTyEVcqIzN1dIdfrV3L4JCE55UL8DWj309woj4maJ2sRBifBma0PPL2LaOHqoAJjmey2d2ERE7OYjCXppXCBjqkAdamjx5ZuksqpBLTPWCVpeIpvzE7BmfKPc%2F%2FfgE3yEh%2BbvxZGjFWNyeyz%2BzycExlso1QuqYXAMJSV%2BmAZRNx5g0ZgeUpKeiwviUyjjtm3m0tPFIJlWNFeyJjPp4xtoSVZ0E6o60IaUy%2FTJtRmFUPk8I3jTHlV0xBwzqFCl17B4kq0emNkJI3VVy0HdM1sOdegt7fSAKEfjGaUkZGq81OVu7yOBA9&X-Amz-Signature=2117ca4c56c8ab6f889b1b4cfd4a0cde9c9373b4a693b54e03a3d291443762cf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
