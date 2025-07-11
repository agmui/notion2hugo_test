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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6NWSNC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ8e6R%2FTAmxSoxXhSk3oZSiUXGVRlI7M%2BSllVtUT1ymwIhALbomFHIm35SYNPN1ASIKuaCluWP8NY5AIwA0%2BvVHMAqKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyla9dWdwRm9QK07Foq3ANveaaYqgvOzG%2Fmj32RYBHGTvn2pzDZ%2FFdk8KeL4zkVmW%2B1BWTrYWaJRGeXlsOXn1QAoJRkuWnoYlOymgsOl6J7ECvSElqInbV5Z0SlDutRyYok2SXuBcQc7Mf6iAWqY4YnSPsc3viTbEPc9quIyt0NVmd8WYT3h8PIeHCQmHrakorWfmMvFewPVCZI%2BHHy3bJFsyK11ALcHxSDmhlhaW85aeFkAPWqsZocmGVMOk1idv2bLW91yBx2pphRftg2%2BoeG%2Bg4Tg95OrCyNaZhDiYafzC8lRIRIYCfNzZG41ExQssJwT%2BPd9rnQ5aHm04V%2Fi6O%2FD5WNSkaCD5zYu78QuH41UiyZdvRDTIOC6C%2BRvNzPhk9w9D6mkRo9Vmlu7yeO%2BU6ppe4IRMidPGj%2B6jbaSHtjJQlevrHGD3llk5cQfyNtTgDt74%2BeNSBpU1F%2B%2BISxoOGzCbn9oWi49kAuuQMb0%2FO8LdRNDu3xuq2ehP4GNnONEXpawypxgV6kok4f%2Bgol1DoCJ7OLaLcQ572RtdGTvQ%2Bgc7xNKw%2BOH57h8xkBjnZ46eFfImjgxWiZQgYQwsOXIU1l%2BhjmVv27m7Iyo6rxNWNVjR1COnaSF%2B%2FuwjO7pMGUp2bNng9TJOO40kgPDjDB%2FcLDBjqkAe8zy0uewz2LVPwLrEVGmzVnSBSj7VA4RhHvb3F%2BbXOY1UgpEFNchHQjkL42xhWmwujcw18FdV9aE4htSU%2BaRsibFnLvDKGTR1aN0VVTQ0%2Biszf9q6uh%2F%2B8RSJuWUsV238IU%2B7pOJPc8xB7m5zSSyUvmZlKknTR%2FndWz2cZeGGAxBfd6uanln9dM3JbHxUQrvxdDF2KdHuQHm2I%2F3LkUH8XG%2Fejk&X-Amz-Signature=b0e19aebc7feed21ddc221f71283fb113298eca77edf8b35e024b0b1cbe57327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
