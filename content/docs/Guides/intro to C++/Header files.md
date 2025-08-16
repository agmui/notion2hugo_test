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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SXV3L2J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDeQXW7uv8Q36jRKTHggwE0eIWj8CSfV0FNJ%2FQOfD1%2BPQIhAKHNlcOjCq869c65B6U5t9lNwLvBznw2B1tXdgRgAOEZKv8DCHEQABoMNjM3NDIzMTgzODA1Igxf59x7hW%2B48XzHHHMq3AOdIUgm0D8FKd%2FcWnD5xWW25eTeI%2F4blWA0wE4YY%2FZLwQm82z94kEunadiarlGz9pLKV6mBshnc%2FkRNhrLeI1ZdkOlicYt62ViTUydCmr5Yu%2BenXG%2FSu2Iy7dfv2g54oJ6Zc1nmsj6gdUlWDE%2F1lNCfTYoDUPBseCziy1EHDf%2FGEBjSpdvFuyP0AhyuCDulfUqv8nKu4iHZZfdxegzvu%2B36hVgRRugYTMdywv3ESHia2AbTcOZ17IdaAB%2FOpILe1MCsavXKJsKIYhFDhpVD9iu4lglMJ352YooENy63mE%2BR1E0e%2Bq71eXLlLALBvKlhWSjGDyPddlvo1JDus6MK6%2BxNLgORQekAnTsTuJurb%2BYbtwnYjWEZUbhfFdGktf%2BTzN6GBsQINaBgQhfaazFBSLAu2wz1DgBaxLm%2FgRg1IgvmsBap5OPIUqlXgXwi94N8bFv8w4yzZyTZ8VfIA9GKVBry%2B11g%2FQzb5xxIxQJI6mtvHQ0FUsVQKfWEYnrkvOIuzvKrouk34qG2xu1JjQtjS1%2FN25PARjhn31ZyD4425at%2BbsabVRpmE7IgYkY56M5i8mqvdJ8a5bKctvQn6x%2FvOMAwJ2gIfhH1C3hdgPYx0q0XIzLel5tLMfxlfcMwPzCq%2BIDFBjqkAcv1vyrnsu4nXHkoybmmlYUjROs46m%2Fc19rhY4jsTdW7rK6JyWmP%2FndA%2BZJfIicc8AhRKz3AvG6HjTjWFRRMQ7j%2BMSx4%2FLMbL5IhJDV5ktmTky2VEx%2B53FLa%2FjbSRLuDS2cRO0wcJ33vSIT9IoKNKQcDlMyvTOv9dPINwTSNpXyp9seYWZEOGriT%2F7TuzkHdMVaXyw%2FGox1RCr4MTLPGTaoyYXg%2F&X-Amz-Signature=ec9b43867dd9395efd4b3d5edf46254d35ab3f6d8e2b4523189c8dc0da15c842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
