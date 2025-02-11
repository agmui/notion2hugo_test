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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O2VDNRW%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkrExHUX%2FEMPOdCIM2%2FLjli6s0PlVgvxrbD6t72q%2FgvAiEAgngSgJXQ4brAxwkYPWQNRW9jnJNDsUMBEdohJPB7zKkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIMrSpQaVOvl6fvtircA2RA%2B8g8yc%2F72WzlkQGQksBjJ9O0cuP5Zayj6ijopyXmVZv%2BXYlfxGvK8qwo%2BNpkB13m44%2FmfsDSHDBNbrnkUQBuVx0fsl5jPhqP3Jx4MtjI9rz%2Ba%2B0afz3atIH9n1y94SaDYyiIKtupyXKX6rtcfONt86Kxy1hVwz3qFMpmuav2DQ8CKSrczEInLXbPsketrxCU5Gib41h7sLq085YoF%2FKzfh78zgJ%2F9fV1WTDpExnfnvAK4i8HqiaU2QamH9sIGmoZPBIb1dgxKcKO1WFQK3qRWXMI0O8qiROCw7cmMg1v9%2B2%2FqcI4cYnSIRpX5ljnn8G1BmxdBTu0HyEN1ycSL0AcHkf3zeGNSFz5tew%2F1EPqjGqazhCkiwqYsMdxMACvB%2F0vp9SYFaHKtVJAXVKk19Zbqvr7ut%2F76YmgHgIVFe%2FWCqPMiIY7OL%2F5dIQTwpFhwY4uvFV5OB%2F9LaXlRrwWhvKXT4D04Hbyas0xJODX0VKIBj5IkgOttLQ4cb1GjtM2dfFl7f8VM7a%2FfErYNTREB1YB4L74N6VYQyCPYxzTwuF3IyHQLJZOznh31tkLTTRdXorSwVZm3C4SDnkAZqUs1LKvqVbA%2BtjJmzbSYR2HXfskUUJRBsH9dx%2FUHiMQMNj3rb0GOqUBiTOVbw6PtlXG1cT73%2FmPbu4ZzoENVgQ%2FxOYeN0yuZE84nrAHvqC76wRtpJ%2B6y02M0NpRTFpk4Z%2BSTLp1fdvMSaKdTsBGH7Vss8sb6ADnRVKMYNlgI1Dvn5UNUtrSYI0i4Si7Eycee8NbYH3Cw5Z%2FFUVGP6O2HVz4EIxvKZ%2BpJvS4TgOQP7kf6Py2z5oc3MHUiSL47HioFlwKpVbVz9tIwFPg7f%2FH&X-Amz-Signature=31747de7d3262ac676d934e32edc0c2fc7ca5165636a9fddde71851709674307&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
