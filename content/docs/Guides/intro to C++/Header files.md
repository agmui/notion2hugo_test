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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ULL744L%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUb2PHNIsJMsNmvMt0TrjESeNxlhvSqINW2FUA2L9UawIgbeGA5vc4jaoX7%2Bk81VLS%2FQhwqLqMYE0blw3Y4skQlIEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsu0%2F4d0Qpcz5PMdircA%2BJ0EwtMLHyXUfUVZA%2FCEWiqcwd5LsNfqpUJBY2xloBbFtvi0Ts%2B%2BuxlItaHOp9eCzUl2tLUy1Zf3TX1nT0yD5FYHi34dBsYdfYWJ1o7vte%2BkKnBt1gVJ%2BndOC%2FLbwa81O26JB0igy8wLO5dNKmhCq3BnKRO8jRhChhbEbsn718ZRZ66BLw1lVoKfwhpK6ZfIqZpuSU5wpQKPheQkYsowiP%2FvTbPjQczrBQXS7Zd%2BTwkEkb3XpHSxxjv4lI9V1qF3ENGfoKDu5mLmkwxVFbP1gbyBh39xc%2Fmaadfq%2B7bsC81jgUxMq5pSnKwsMB4%2FRxFoxroApdrlssPCdKG4aFDDIAKFox%2BngJT2t8S3BFQlqWKZI4eL2KTWcVOOsSBVO7DDP57r%2FuQLjyzNcSkOKnzFfVTmIBREGUq6BzJj0q7s69jVC4SS3RzXkOukYcEqmNzDJXmwSHJvNkJ%2FdX6qH1J5p65eQqoumP5%2FqXqSn1%2F6W9iIDA2iow1%2Bxc3TsUx2HvbPncHWJthoskgPdZ25eLDoDK1OuGUSL2aPQbAtFfCjpfRpdbGrPMHBAjEjviRj4XI0fO58CpWK25IVFD%2FI3%2FB%2BHzdUByQ2rXK78lf4DebeJ5CUqC1jz7gbOMbOJtnMKTNwMMGOqUBgCLOECX0GeirW1IGeqHVSPvnFKBxHNUj3Tajz6Cn14XcLt1eH45tQLLm8MonmgRnIUk8LVPsVfwvW4ZYpYM5q7UB1IthGmmPu03BBVLn729oEebX7TMr1tHheu4JhbjPL7A2PNo2KXf0EZJf3LOB8hCQdHat5GqEkowwwXvTe8Sm94Ljd7RvLg7v%2FeGuJMXc2859ytyN8IwxqYvOyQz741R1sukG&X-Amz-Signature=2bfc35128681db82c408edf707b7c703e4c11f39287a413b727a927a04264daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
