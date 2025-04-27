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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VVLSF2P%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbpOZRKpawBlKQYGtnqLeQ%2FAWY%2FoTTrXdrtcAhy%2FgPeAiEA9%2FMjVfth%2FjXROtSPnOiD8%2FrIypMtua3Tfj4GXBQuLrsq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDOeoIWZt4zqcM%2BLG0ircA5shKyWLklN2XCjXhehCfZnnxnh6or%2FvgTb3NOgsCAzOPZ8hT9Yk8Y6oJenTXaSC24utRnCwW9HBLga%2F3nuzJ9nqhzEP3ycX5KdRccT5pEOIHz5s2M0t%2BIxPNR79ke4Vb3r6hlq7gSmb598GRlQpAQi88XqsX1JI2OV6qz%2FU9%2B%2BbFwa0P9N1dmrOmahVzNfB3EWN%2FrP8oG0bdJgdkh0kR%2BPXVR9%2B97bCV5p0QFF1zk5k8Y7XJs7CS29D%2BHKKuF9Wx0v%2Bt%2F6ya1QhO4ATjAEeiTvVxrP9X0vNm9Ubk%2FJeTaDr1U8EhlUrKlSEfISdLXh6417Q71atwvgS8%2FNuuBuyFpcOVK1H%2Fmahzh%2BKwi7FLunI1UbM7XRW0HDQsIzL9mdbSsSVcDMD6jhYRgCXDjrgN4oicyzfDYoYrEx2p0eB4FoGKdth6PY9M4E2vvzPGyoSTb3rCTAwln9kdiqQrTzRUauGbbo906YrTLSnw4jVXnIwMTuQIHNDPRIXTnBRWsf2JysLh%2BBu6wmGODCiez6%2Bvt%2FOAfnfGakmTrmwZ8lem5T54PfD5eA2puW52ExDH1B4%2FvY4t9anYwflVj4x%2BkuT1cjlR%2BsmH%2BA73UMV0Wr1kWHMC6lmGJW2zA8ZWxorMJ%2FxucAGOqUBrJU6%2F6wPxfqFYixrvaXsAhoQLQOgBd7%2BGHtFUGBDWpMfn9u9MT%2FHyoF6nG59Z%2BGrj8aenSHsav7AK2Un1kEmPGyDj3V69lz0PN9xLbMCUGhWu6FzEfcnLrH%2BDwCFWEelPx9pT2sMQvn%2FWX5UhnyMV7ZNwpd54MBwmx%2BvgAsvr762oewGHR17wtIuGm%2Fiw5Nq6s2XlG%2FKz3mYXMHUDbKSDIltP0I6&X-Amz-Signature=d5373f1d950463736a5fbc0b8252a21f6754fc8c7904f1c241f5f8fa3c58de31&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
