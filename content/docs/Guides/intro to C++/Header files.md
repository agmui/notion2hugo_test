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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3D2IO4T%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxipXw9aXLMRF7vAqP1h%2BAwI%2BDDj%2BKRRwFBYfZMxIoYQIgEiPkaIwi6kDrvJvKmRozrHxRtDgZaH9%2BmdLJofEukIsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWLUS%2B28doE21mYtircA3dmgE0Zey8mWa%2FltgVGv0YTE8jV2c4gpxDdIActSFdh4KwXB%2F8tCp8ou7HLNXKBS%2BK%2FNtv6Xy1QKExEXZ8EuMQMTqPxr1ye27pctnW9CKnjBLGoB0JydycZ1kn1S%2FL0qLX2XU0IBtxJJu%2BJSnRHOIkwVgDr1Ex9nT2taFE7s2BiafKcJEpvxbScCMQvYkJud1caW91oNxqS0y%2BGyjxK8ZzkGBs6p0WY5UZO4cWjFrL%2Bd2rRqwVtvCQbhclQ%2FRS23OGfvrBtDoIdqsdZKoqfeVNUC%2B4h%2BoM1cQjTpsCv2nKu8JTAGykh6b7ALU6Ok5aex%2F52jr%2BkxU9B3%2BLzZoXoHb32TKYQtkkbk%2BRtGO%2B9Poph39i1wtfV%2FlDiRZnjLQtI61XNOwoilWwb%2Bm0g%2BAV3RdPv%2Bo73Abalb687QVPtsXdiNQVBDfQ%2B%2FX71A1z1v0MCMkZ5d6AUiVfFJ0m0cJspGmoVA6uVyqiU3VYuY0Qy6FBt9tKo5AGmKVPdojgnttdEz%2BOC9KdQBQHmzVB93DpdcuTKJOYk%2BS3VUdSSzHzcHuVsYrTauC0NXn6FG3UYrefp1pR1KntDNdtELLSFcIa7nFTgTbV1ta2AvWS3A1bUTELOnZiVbkXPkg1xIf%2BfMOOVgsMGOqUBdhrbAFOXkw9TRty9F5zgjUd1k3xKL64XTuZVzQ6%2FrUmJW0nXgR17j9s6J5%2FfP5iWw3RgWV%2BXLuNf1AkPwguHcCgJ%2BmsjxCbh7zUvMGxX%2FaOzqJMvg%2BN2bwWiRZ%2FYP2hUzFE2wS57N9s6T5rxAxjusnbwanjPRr1Gb1tKi5SxSH67j13GWJGGC6Ua9H9gq8Lwj%2BSbP51J%2BtN3leoOu2HzLLaSwBma&X-Amz-Signature=9d3711587132dfeb89f21f40541ac7fb5da8792dd3692ddf8dd2a5f40f8db531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
