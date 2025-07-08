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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZI5KBZ3%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiZMQ2VgFBEalcFUEUTKxnNX3mGwaS2YwTzjWAiay5igIgOZp0YSR2zHAhoCLXeAbjOmLEvHDPcDXiCv3kC5tUo4MqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3cWwks4D7WmilqrircA9c5farvPDXU8kCo5vmcIlBCM4GTfz47reouqq6XYVGngJvFjz92oNo9GsLBoOSo%2BNGTbbtGWPGFZEMmeZgX3IAzyH72ePmaKFTVLRH0eAd8mzV8vYWX7qG6k2kkNgR%2FcfrWHDijo3WHYRerU6WHLcwWdofUHTGefXAWQUWiR7PpX4M5nVOvrhoyD7QxxUOlpMX1YxohvDObK9ao8%2BEI4aP0x512YTveceFM2JCyWPPKfgCtiaU%2Bgcqpc0xYXVGQGYQ404l9pecvlho3XvqQi%2FuODVIgn0ANpX7AmLqnaf9a4lkev4pb4vbDfDKu6CWcOh4H75NQpEJ%2B3dYHvhe11%2Bb4NOF3LwidwrBWmPkDCy7ZCuJC4sKzS2kTqztzZrNyBtzfbOBn7T1XDJmEjIJJqf7d%2F1hfG4k%2FbmRutDuWCki29%2F%2BYX8izdXeI33jcroaEGi7cj900XO%2F52zj0HkeCvZDVFYXZwbfuBCGGdLVM95CXkl9PmOSRRw6nVHUvblyAY6rm6Gtx9oWwVUHjau4iOAs6e4RscOqR7EqqVzcgjgoyp%2BzNOgnxm3nUAA%2Ftbje8%2BJG%2FeaqA5LI7cGeDW2Rgjad4BSAP16%2ByWfRQVOSSgFy0r6bw4phe%2B4bqluCSMLqAtcMGOqUB4RructCVDaEh8VC50C2xEjYfteY5nSHL9OG%2F%2Bjtpu6QwV%2FA6%2B4G1rLYhcgnhJehZHJP%2BvOOFjxA%2BAy03xHrqRMWX6HQ3Agxe8aJKFEKItAwHAYBmOBDWnsW%2B9Du0AuDvAqYzm8wgmg3VWa3F2ATnoZ23ouWfmQ52zVfhogDEv54faE3knRWiFgXIPYObvz%2BgZSERAXGDPlFW%2FxZEv%2F8UiXA6kUuE&X-Amz-Signature=5205e586390e772037937ee231e5ac4be46f3b37be6bb686763973ac2ab71bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
