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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUW5EI6%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCRE03reW0DaHoB7%2FSxtL3b%2FaGkPHKjifAXadyFNO3KSwIgGHhoVOv3B6yK5K0ghiIUy8IFrepjC0PWKN6KoOdtx3Eq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKuPlRZ0mR%2FWFmym8ircA%2BGOPpx3emXx5EWBanH0hNAwTvJpPGmaHblMHr8m9EQpEn%2FyDspIMSD%2BIBGroIwvHxywnt3MWHMzEgoFhjRrswZyjc6nUXvT%2Boyo9MMs9sKHjKMOBmGwED2j3vubd3vTXiNfYSbF4V6ilibFtPV3oO2ugbGu%2B4shP1omMxVr5B%2BxMP%2BhY5vzQkZuG75WY6Hy6JBpxFhiHOsOawN9Wh%2FnEkBEqn9Pfi%2FFx98RdobQgACAAi8zElsjqOY9zgmn2T7uGo71tHnW4Uo4d0SuxY8PKgnQihDZUP3PHxsmvA7ZvA0E1iZ1qJuOxKNxSz5z9Kug%2BNZ1BKuZ3WXW%2Fw4tSdhtjPzx2UpU4YDLbKnppf%2FHVxarfy5fkFaDy052OcW%2BVtahx7AYqZ4Q%2FMSODqVuEVvijSRboYbPVFgPVhtc4PKPhHB0HeOdqjLRvFMnQZoaGHtqE3POrij0fALqGIM7BT5Pb69YHyARAYzgc9KCpl8H8KGSoSubVxgmvsDsuA7tYYH1Wawxal9UcZXLW8HKwActwBMDSWjb3M%2BmEQPPXrsFGk1LKQuKyL2KGH%2BZ22G2tHaQZurT9fp4CIGC08H%2B53IM%2FhP9ivPjVCNfuS2XAm7MZTdRJVg%2B8On0h1NIye3rMI%2FFzcEGOqUBu%2BGquuIOo04hvUqX2N3KDwbSCfwgU9%2Bpg1IBFdUhrPIGQyUDyzc682uhN2iBsyqBbCoWxfnbOUOrJjtYjgBYan1S7ju425dkVa8SGInEsrBp6zCSc9c4FmnuCQzCZZbmT9iLOvDv6mQehTumRVMpMzBCmYRJRNE9ofNb0djoYxGX1g%2B6yJ1JxeyUdLGWsXnAHs%2BWG5pEo0JnelGytSJaeCv%2BJF2N&X-Amz-Signature=8dc6295b7e14275a0e58470df9f643f5e7baa8e23c87cbc1d7ae4b87911f6f63&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
