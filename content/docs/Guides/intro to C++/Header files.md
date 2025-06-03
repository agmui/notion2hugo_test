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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYFQJ56%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T140942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCeSO1OV7TBp20uqd50mQANX0kwtIUwPkKOErj40dIq7gIgRFTRChsIFbgY7ybALEMyisElnJ3sfcJJGu%2BDZvfBuNIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDG6gUN0EoiAjGw97RCrcA18ta4%2F8X2T5q9Er6D%2FwaDqgKF2DGxeZqtfQ%2ByuWOmBGcw9mPSV3gcOxq1FW6%2Bgg1Ng9Rw6JOwUDGQ0ozLdrhZ4Sa1ZfRNAzoY9iBiP5BF3xJ5oSgdiWnTDjMU7Urq0l4lwMdgjq18PRjhhLCVmyuZ52xQ2yEZNNLa8kCfty8GaYmd%2BJi9hKZHoQ%2BiWZ0ixDQBUELX22rGXskI4tJP%2BSGfXVhvIpNvNGfRb1bVeUdJDk973qFCMEQ7YSbwLIUpicHcq6mMXTuVdmi9grBaS5R51WHiXx%2FB8wK3B3RjERLGoecig3xWfpk0Ed8hbXx0BeKbudEU3HgIHxktNZIB1KYRXPzq6iGHZMKnE0lS2xCkxvhxDdkl0gUmE1nDAGHrIbPlqtBAVJJvy%2Bv2qPMpU3c2N8MM12Cn9XvaVCbnUV0OaLXjCluHk1t1ys%2BMLo8mu4GrXd%2BZlENfzwT8zRNFlfH2a2LiFp4h%2B%2BITVdVHEkKzCeEVwvoVDHreJ3j32RbW9%2BTtqnzAmxNeda9AdbzuW%2F8bo2CJw9Qa8jqC%2BeRdMHwSr5g55Wv8ql3bK2LW9qVVqMek1eHsm75iDB5JWsv63Msc3CfkDQrjAuLHnQj1AmTA0PmZVNjTSzPV6R6wvYMIrn%2B8EGOqUBZ5BAzb373bQZU0Z56qTVNV5OxrFngcigI1fMx%2BlbSxK2NI%2BZhTiWTyg4gfuS1Dt360e8njTwHEaXwRG%2BU8NIdnAnf4vgOYW0WMgJB9ko9VO%2BJe9l3pUEShFV5oli5t%2BsEx1pZ5uwprvmuiOdJVUe7canOMqnPPccMRgQl8d35U5eq%2BtMJCOyduViXTIVd7rwwy7%2BMjy4Vpw4lHIU4are9IFy03u8&X-Amz-Signature=ebbbc6dac5f65c69421e25a0b95da46ac5a86785043a99b357b637140a586354&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
