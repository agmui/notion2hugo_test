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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTMFYQIB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEI%2BQ9rX5YUQu6iuidIJhRX%2FXhSzW4z8uulpy%2BK6P3fAiAX%2B0K%2FEugw4SeO2u6DxHJT50%2FWS6rfrYAAAhaItGhSiyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoenEgvWaCqkt82GPKtwDcjoHWxbJxO8HXsytH3231gNAEyb1zOL44FWmEvSn8fktRHabha3%2BQLbqzYL1guUvc5tgOTqNJwibq%2FPyntTlh0ET9B1D9H0%2B1dHdzusokzAA9FFFtKYw%2B9TChuR1bHKud%2FAIV3CCuwK0cw8KxZbcvTp2kiRbOL0753jE7jYOS0J2mvuhkWmo8aTG0go3NnxNfeN%2FVBZWk%2B2iF5bt%2BuNusTcMuJrVtD8pf%2Fya26muAc6so1GtjuI%2FWUNryiY5zmoQClq8QgrUpczDfplGrv7pW95VAkmCLDxg9v0kA77kADfSTMzEaazw3tj2vLcFKNdVLHOnDphAkTGpQi7yiHynyEENSOoDKSP32pPCYrkig9ag0Jc0tSbUFNUvr%2BeFTL0wIIVRaaWy0fcdMeLVgpTp3MdzGZRSUT%2B%2FVLAzpfwMDhZYUe6y1st%2FHTt6%2Bwrm52DPQt5tgU1KfXwiysnXRBcmqPWlqSKSSyG2gtOQXgvpGw3SsIeKT%2B9Ca%2Fh1xGP6YGy6z%2FhH2WD0foFVliv1BUP01vXjaKOoRD16cPg1Uhlbi8fzib0BWulNcjQe4eXuOWirAhSpjczlFafk1ItXtSDdpmvjke2YfiClUCoBUUSiY%2FwtgTuVfrgFmwxNmJ4w1PzIwwY6pgGgsLuVOUtuQtiVGjcHKCz1zOZqaxnMiqgyqHlo4NYFX1%2FNq940lueKHGII%2BfpR2aM2JDiSnQinuE2A4t4ZVPpNwU%2F0iOVafED%2B%2F%2Bnu5ydgn8VJawy7fxTABFxYNQhdKlOtnn4IAiM%2Box1fOw1iP9Jre0SNlivbUKNjQIYLqtt42jxhFrcJTQNSkefe0ehSiVh7R2d5AVmHY3NvES7vBpySu69mF9%2Fz&X-Amz-Signature=4095dfcaffe12ffd0838a5ab8b61ada94f55e005cf361e3f55dbf80509509e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
