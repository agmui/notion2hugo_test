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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYKNYCXN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIA3fBLp6TV8ClRrmd3vc2oLCOE9AzmGSX7WdkADMuwFNAiBcMDKMDSdfGftcn70T%2F0jB5ikPn1%2FTVbwYlj6hcrt0%2Fir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIM1XH8oXRa5Vf3cLnoKtwDgbCNIgWN0cQQgjbfzScQTQac8YwziWfUik%2FwGO9sNyG3kgLIqNYPvmwiFoomASLFokX6LqdmZGx04ICKPjO08OV%2F3DEnV%2BdytsJRo1Z0pR3HqLXuefkLnJKBFdM9%2FaqKXD%2FLb5%2BzfjY%2BGIybA2y0P6CkKxj7XGffV0rKkJ%2Birv%2F6rqtAsQCuksom5n%2BhKo3JY7GhUeOlbMU7xwwtqHZlg%2B9f%2BxK2kE646tffC3%2BBBab3hdRrPxkPNfZYiGbBxt35CHb45CPZ%2F2wOCmfjUooG0RzE%2BekO3ATs4LyfFo3FKgZWKj89EXs3Du%2FjjG8SF3kF8KMsIqfUZKwY0Yu3pE%2BtA%2F3r%2FW44uhnLbRSoHVj49HWDmcvN05NiQ%2FXY432uC6qoTUe5ALLOxVJowaECB5KAUu%2Fhobkh0Ai%2BiWuN5cHhvBPDW37wC2fCThG8oGNYFWAgGSuS%2BrPiV0H%2BNiLhjWtNRPtcTkKiTPwepBY0W%2BtG6aVLoA%2BHpqkQqFeuzy46tAactfPrm8ORT0UqLhg6Hwt%2F%2BzqpPXcV3NQuosvQuO3FRhes4JB8ASd72Dc75JiLpTYSNkZl8928WMeblSfS8draez3BIz9mXMbnS%2BMSpAopo2JnrqSrUtGw2%2Bv449EwrOT4vQY6pgGqeHdE0VN2o3ie%2BjfecCw60i7vloM288sgiaLN2S131YFV2xzbqJEAwyiAESNKuKHeWBTISMewm0nkzduQglASJPP9Mt%2BVaEx3CLMeznXKpnCeK%2FkESy43keV%2FGQ%2BqvRy6rdt6XE5gKVDItEKpJdOT215Ktg53FA4g2tjMDVC9uPL5DmxRw58vr0cUdHNC%2BP4rdBOc9KJtQ%2FlW8ZOt3weoleNJXuRl&X-Amz-Signature=2e883b5ef16254a292aa885c6f72133e7fceec7ad325c37c2e4a704d0759b458&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
