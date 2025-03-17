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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSTMC5AW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH9FSbu1sDOH%2BnyTpzUsb5FnmYkIj0ED4T2MMvbrvpGQIgRHmhLv1erQdDAU2I3RM90PhpectKYhOu70XpMiZS1Koq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGDXBVrf6wSTCbAIpyrcA%2BmQ0PxLFuxc00izKVvFLOj%2BuJwgglRWIvZjnigfrDtRgwUiiVZIszgDvoO%2BkCoXhO96Qnbeh7RuhPC0MofOLKpRXgtJ1mhmUcxHhOicJ0ZHs8bKPuQm9JvEJd%2FErikbiRQypn%2Bzuai3HHYgmhjIYu492fnQaj59fNVMAAQqZ%2Bp1CsP8CzuXIbwoGceLvNxdG3Qc0ROa4YeZlCk7yvl9TO8WVYyqi8lNzSNGPc9quzuy38Z4QpEfvXw9X08YPBr4MngvunchaZyxV%2BrLtcokSb46GW3MNjNy%2F%2F%2F3pY%2FpV0md5osbItw9bf28NmcFpWqbJRkmXpV5Ep3v0x1dD2MCRfsDvCNoB5t4fHBdU0Dr5YmqoZTQG5cSvt3GcqgbFrNPPKYbQzQbcPMHV8wuf%2Fa%2BIbRSfgdOiHsm%2FXlXYtKzG8eKHWdDc4jtMiL06Ig%2Bf%2FzMp4be24GqF1e0WNWeOGyBL4i%2B11PBU%2FcbTbq5Co76iSauv7%2BuB0CU8salC4B39HHRz9ty36mUqBb8WbeRCDmOcBwgPqeTFcfmecxLU8LRwWKVxV2rr5hNm8jZ946xwvDduUnpLFPmMg3KRBIyj5Fw2TPlkCSOCRlPGms%2Fjcj1k9Jxs%2BllWLA3bP55QLXnMJ%2Bw374GOqUBHqU9py7H2ej1pKuNI6qQhPpLCdldfLNqCkjEkgqEcPa6N%2BWCFo3Mt6suHZG0TCdFlOJ4KS3%2FT9LjuJYaYjlot4ciYwcWIpkXkSVpszLserVWa4Dz6PmrTWFpb6YRLRsWI0u82WGfwRZ3%2FCohfq5%2BNQlLOfJLwl7KDs12edywMxTpR%2ByIHT47yB8fC29Qpb20xXtnMEiQkTiYH60s2AHxE33%2Fmeya&X-Amz-Signature=60f684648a44d1b78ad071457886b5d7af93ab12b183dd1d272cc3d5579c9f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
