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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THUATGOT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDVicbhlCTrQU86zNu7evtdSXTEMmDKC%2By3bxZhoDdzgQIhAM2a8IG7n4qISqWJqzxJI1RCXdxlD4ec4gkHG1UlzOMjKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZQ76n6oUclsUUKN0q3ANLQtaJmIyJqPChsm%2B1tdoPts5hztRwmikBFPgoNz2YVfZ36uMamgTH1dzFt2Nu2KhRsAa17yCEIy%2BvL%2F%2FWbPcrDGdzU4NoLDnHjqMQ7%2FE%2B3XteCV%2BXoR%2BbVJNKq5sscJ6n5vwtm649S3f5Uldx3huPlRqeN7MNKPFhdXJcoEnOsI%2BCGHLozyHKMWfaOiYl1Pyqw6qS3G%2FbVvJ5%2B7eJbZLmKAVRazHyrIB4vzcf42Yxfyxq0K6LNqYlWqK%2B4OS5BFwd00Ku4WOkHkauNrVgWafzef5blz7adY%2BZUX63R2Pv8cbTDM%2F8c6fjQbsnAP0ldEXhpxOWgK0qqJAyEuwJXz%2BwJLJaQrISEcBCmY1jd6IMzpf0l2vC%2BTNOXoMFYKFobYKaQJJwa36d92xwIvkFc0qTjoCh9V6vC726OSwY6V8tnm7gldwPN0TTde%2FknSYsCVVnLsc5AOCYbks3EORJk%2FquYd0WidhyBNFM%2FDGDT%2BmIlt4RyTyQSo6vDUD9wyoE29lCyZlo%2BwAM6G57t7lW2srNHcY5Z%2FOAbi4F8iMQQZ3R%2F5lYXzZoomQVMUtAVIHW1w12kTQ540KM7S4d5Krd7WvROEV9mryVMS7%2BvAKLZqlQeolN11np5xi1boJbRDC27b2%2BBjqkAUlJKFB22xRgU09mT0gdhs2U3aTV3mn3%2BYTQmM2i1Dvq5yrPdmkfF5hEU66dfQnOADp39Jyfsdo7W9%2BWOaeTWV90wtN4xtgjuANnIrq4Fq%2B5zHJ5O0W2Lmolu0VjK7zbsAiDzVr3TwNbIrMu42qKQ7jhG2vbBUqOJrmACz6ROL4D0cX1mXDgKHwZeC4HrmLMcDjGcO7yJoCTM7gO8swYrrog7K6X&X-Amz-Signature=cbf2a8daf970c36683c50aed5fe8ff1a697160d264b5feb912822911f048b2a0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
