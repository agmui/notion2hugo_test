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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642QXS3G4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIBRisnRemIcdwcx0jP4nhUignZRK%2FIULkWM%2BjTGM3i2jAiEAv4N8X7NwFkzeq5LczAXuke5MinpdfepyXKH0OfcbExoqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4YyjM%2FOaYvWs%2F9PircA9HrMbVSd5SUI%2Bya8rkDHbP6J4%2B17%2B7UMgaXpfRuNqcOqgxbgDJQblFEPL5hoBtxZ%2BV0VUNJlwlrYs4pcmm09gzeqGjuS0Lz0bZUcj0UL3GdRTb3u3FNKQRZTfZ2ku1IGsjTIyW554U1gae%2FaucIMHx0GuZRPBNsuzWbRGRlbwHEA4mcFLcflEla%2F47moaBVlu75KAQWQWvID5usY%2By0etsSZ6CNJMpYWbcxLobW1RMxZkrenCQ3oRsqqniSMyPkmeM9XkbayhR%2FG%2B6%2BBvz%2FAq4lieoud5WnTyT2dElXl72UkVcGqQBynwn6rZaVtIPbDz%2FlZEuwmoZdu0Yzbm3wpp3ADOJ4aBZm3228FuylwF1eKzsRnZk3GY7Shtt7uAGoWOwjXJPsLlYcSyfdbDBBGyFF3A24TGr3DDyiMYt2jAW%2FH4gn%2BpJHj4WJGQndJuJtmz39Qb7fi0bSaqP56lrAfFx2fPki42sX3jyn8g3eT%2B4b9ANZynBhBKBRMBiKWamNLA09dZD%2BeY1wRBU3mp3aP7MguQ5R0Du3qfPqlzaRHL7oQZyuWaAyFykaSuFt%2BP2WRMnG4sSIMmu5P%2FPciZoQTyZtg%2BWPvslyvrNmt2ilKwlDMlyRsFVAoWTUZVDRMLXLvL4GOqUBGHoCxacoJAr%2BVg7JLEf7T9Wi6T3aRvs5Cv9SrB1UM1Y9QIhzwdrhJe2q5CJgq28k%2FeBHHuTN5nUSxvtgXZjm7EX%2B68ZjkUo5zVRj8WfgT%2FIt9Z%2BYOo9jfL%2BBlEntbd35CHECOQPOVba5Pj0mVhoc14di1KczSt2aV2Nw6V07JTUOrFCtsJ4Kp56NOqYLZcHi8zkwYm3Xa0pLHxy8zAy2vghtPmmn&X-Amz-Signature=eecb8832e5e76bdc01fac6cc3a6e62b0c4d265486d9da4e950ac7ae57cae4ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
