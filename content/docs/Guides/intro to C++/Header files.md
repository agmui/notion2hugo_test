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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JUHWIZD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC36Q9SQ7Ku19H29nBmxJqsm9BTgaPbR6tlDK7BVnteFQIhAIzPE9WTDM9ARyF4UsVVscZ2jEZhlsdkLcrqLskQq8CTKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzjxove3wQH5yMqqpkq3AMrDdwblZOsmyYnVod%2Bb8whnwEGV0A2WChuH8xK5TO29dZ20eQcFYAGYwhcir51EEoS%2FhxGXrIv2XqqmjGOILyF6in3z5Fzj5YvjTWyuplY8dpeKiAO6EM5l0tFjVoFYwM4spY3Ir91g%2BgOYcTFkzn%2FIuLXI8afAsRA7lZqU1Ty00YOv5oWN2D1UR43uOTiQZC1Z2Q%2F1PzIdOIa22HtGljL1b7R6xXD2DPulOnN2afAoBdeNqeSl2TNG0gzJkkNdzbBTLwOtymzIgiDxycDzncw5Sxhb7h8roGNvCdT8RNTxoS7jAN2DNcaFLKqNR%2FMDBGAuNPAdlXDh%2B4lyXOdeSyDnz6jmmGqTHSpDL2QmrGIWN8e2jJCuKqN%2BIs6e7BBcj96b7Dam5b0bg%2BKeTSX759OhJv2DZrSMCHSlmJibFZdouPamx%2BoHWkBOsvieIfBo%2F8ZyX2%2Bzg49i2EPPb0q1PqbKflgMtYoWq0H5Oq5tPjPkOJ0zuF%2FPGQF6Tnn1ktv0qdYJ%2BnLifmpscikORxJGZujaT0wOi1x%2BwXEEvqs6uG8orMA6CCBZ5DOB4i9qtpRg376cl5YXI4V%2BukORwm2PWmFI8oHZ6tqjsN6FAIkpo0W%2F1IEN%2BcHH8OqfcCoyDCJwN%2FCBjqkATtWn34%2F5abNC5a3auxE%2FQocQiS6aqx78PJ71m4DObTqKvmTnfgUl6zFPW%2F5S3mWjdAwvm6i%2B3DyvvX7JRqFqNgQHeVJdA3k4aAHUWBcyA4l2HSfFkqgNF6Wm9ZHlx%2BLgei19r13jCTubXKs0owlJEpGbyBi2hNPwgPGeQKvwcuGvwURqrVtHej5jEl3L0T58zKrCOoEkw0YGQaHJU8%2Bb5UZdvVL&X-Amz-Signature=4c5a785fc814a6877efb185949b77de69227790d0018db315f8f09816c3261f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
