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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDAP6MI3%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFM%2Bs80Ypf8drXZO9zuZUJka847k6TdkelYK%2FTj4o2IAiEA%2BkQxuc1tofjytHk%2BgxlYm2bf%2Blgy4ThkejKb1YeSuT0q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDCK3O1%2FRSIDaiSe4ZircA%2BBuh3dp9Rw6HjbI94SGZ3AUFva7Tu6ZAYJleO4IieJN4cTbw2NEbgIip2ypOLnqzUZPLgjGb%2F%2BPuy%2F4WePYSjVCmt2LiY%2FJOS%2FBbwGpDtDwnaZOn2ATRehCXH5MN0%2FUQS0%2BLjnWCZZfnMelm5CXpvPd42tEDAxB%2FjJb1x8qmSNcoOHS2eJbqrCFKnX8opSGf%2FF5xKeyFS2YdDTNjaRvUoQdk9cfwSXmKbj2cyAM43WP8eZkbvtBG8z3J2%2FXf9c7xVqeQHecGcfxYZGhIsQGTXnwe1mMcVCeI9CVv8jGyv1Ymr4jsnc4cvfGQ5iwl6Ggno1V0KNkKXhR8TnDFJoZ%2BmkhsQMYC5irW3aQ3xxqSBPC7AQIYTzMi1tcSZ83JAs8eE2G58xAUmJcSivZsO3Vms4uaej3OPAZWArG1fPUSXYd2ZcTvzxTrSzjjuPKR78arsq%2BQ2fIFg5hcAKKBGHqbvDyYxcXLsiHhqkgPryVJIKhZI6n9FH1xQZHf92p%2BcElyeFtyhoSv3akg0MbCv4wAmZa9%2BDYOuYa%2FqP4x8MwLvMyNOnqGSMDHUYT2D5M2HMSaqITdTtB2Xo2qstnccQekwNsRHrTNKaIhcrguVg9X2wcIxLDc4dGhkTxaVtAMJj3%2BsIGOqUBZefMFBn24LXw%2BVBmFzUr1yaOXLPquWewCB4MU6Za%2FAvxLI10Ye3ISqmO0zVOhrQLAhPvgCAxiwh%2FvW4TS%2Bk8yc1wmdHFNYPduNfkJyLczYmgnfhsB4g%2F7TFXrz9O0r3N03D%2BSiCX286la%2FYV%2BhRJqAUvQBTqXtlzw%2BWK1%2BK6T9vljGg4eczSXRLzrVytnJ7fuOVIeC3h4V7BoXecWd4U1UeKpWnV&X-Amz-Signature=c64ce0180bb6da50b497951f0aac8a66dbb6b2346dd8ed5c510cc2d8b34cdeda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
