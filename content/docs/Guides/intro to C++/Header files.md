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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTGCFZV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWAKF59xFVNnSKJADRGBDGM%2F5wLFjB5lp52CdkRAWB2gIgNtHzGq6up1KtoxYiOu5mHZt16G2t6x8NnC9nwAbsNsEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDH6tuJHzSNsd4ttu0CrcA%2BmBF9iS0gj0kOrnkZTdNM9sOE59C%2FMtKRy71Y%2B8b0dhiawKEc0E6gIPt5Ww66a7rFa8hb7h4xB%2Bpq%2FK3EbeV51%2FSjAiIsEXQ9eMfCm8WQJwyLAlbDGZ0quua8rNTAuiwu2EQ87BClyjOs3aous1qolC8%2FnmXh%2BOjwWGaJZxsy97oWxs%2BsvLOB3AhWKV4%2FfysXidgJXDjGV%2Fw%2F6Ix63m%2BkI9sXGfVS00HgGFu1Ecqyfm7n3ea8sjWsRHZnikzTrE4oOsoep1WRIxQo%2BvBHrXw0rcJDaDUeDIGP4jcK9MqpvLuEAEnLih0huWsdd%2FBg6F%2FK%2Fe0JFGOvoV3SOlPpy8OmRpGFPPsYeihO2lfhgRjkcVqpN9DCsN0G5NRWkyVHA5lCTbu8aVf%2Fh0QtEVKi3Qq9oajcAvJTvfPzZxZiCFBPIKIvo3ImOxY1fNjP%2BBLs6vU7vbo1qH5oHzmiQvAOVSo9gw2Pv%2BiVbCtrDMbQfzA%2FinSPKPGRzxNqq1bP2qFJ4SbOtqpcdlnGK0mXckx6VqiqwA6Rsj2iIW5e9kku1o0qjN%2Fbf2%2BKLp4IX5YaKOZpdCH9q5rH0c6aKg7oqLgpqQ%2BDwKcGO8GPDwhbS1Dj0z069eFbwhuh0s02Mq5P6%2FMOTfq74GOqUBhdBFu%2FqcdwGWWBOUidoX5tsfaOUGxxzspIieXRzMJ0ivx47JcSm%2FBh3dhuszTBwzVeofNCbwWW0Kt35cfl38S9W1BTcxveyH%2BfBbv8I6JPxh4MpLUj400tgr%2BkaRajfzLD2nVX160H0eBe5HsujfzpXB6No21y0MbPCGC3SaL%2BfvMbQ6C5BRr0UWcUTCxFLF1preUqMhOxxAaIu3hoHzJB1CBKhw&X-Amz-Signature=b47eb3a66942e502d0e4dc881014abe42a689edbf63a9faedae7b0837a827451&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
