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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3K52PE6%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIHOpLJNXZT3fNrmECT2y48ax4pb3ORSBcWG5KcMihAYgAiEA7uU8IKkvteFMcAJ2VxLSdGuR%2BZXic2o41iHJOVRMRiAqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECTxVWPrAsB3paKjSrcA%2FtqAPPAaaMHrGkXZD2e5yfhPuU9r0MNjAsXiwyJ1Z1a4JhpEFHZQH22jSoLY%2FU5UpiXwxI3SGjVBNVlbzwLhl%2BjFfKiyPTG%2BTgk4LP30eFzHdVUObuuwbZNDtKMT1WGBBial2Fwq7rER5oDvglM8bPGXWwhCH%2F2vbKOh6DLr%2FCe9t%2FqaftRn3JtHLK%2FFe%2FMrjw2QET4AT2nbNYlcEbrnU9bWtVegRto7QNHTunnf5bJxwojt44EI2GnkdWLbcIuXgbr0QVJL4j1cjpnVdo1I4vGrXR4cshFbKONIkWeITq6XCXeJxgRvoKdE22j6nFMRDiqz7Th9StcVU3DW%2FUQanMPf3l%2FeQzoBtOMPAZv87oH3x8Qwm7yUNimtgUHjD8M1aRMdcPYJsu%2FbkXHig4cSLpoh6jrVHMK1QmOgmN5A8G9BMb4uUZNcACbceXhVon0EwobxIeoRVqB%2BVCArc60vn3GmQRSveVaPhm%2BnAqDNIqN2U0qD5NgSBXn0toTJrVllyC3%2BCOOZ3K7hQDHeQ4LUUmARXmSpI%2BwHlgk19w6bkkfEdH3XSfwVb0wBkmHKx5FKsdV7446kTePKp3kFUp6EiErb%2FqeWjMUgrdIocgeFQ00W1c2bRrVo6JNuj9QMM2Z6sMGOqUB227chJ0ETx%2Fs7fWjS8sm5dMYzwb5ia7fWaY2m%2BgzwWlvRVYJzWz3uRb%2FLUA1M8BuG0Z9Sk9WHUTN7IKS%2BKwi2EIDxz7tz78fRoFKMqFky4SWXEN1RqDWY7Y5LFcvdXBwTNtl4embaIiTTQC9bAGdGQy8wBDmm%2BZ9zkh6TGcKckF3Qezchl4yXhC6mYTG6oNm7%2BZEvdtyNglJ86klORs5Q9AKew0e&X-Amz-Signature=de59ab5e4da3b2b68d49c58412ade5e8223b35aad831ef31a8d9d304792a746d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
