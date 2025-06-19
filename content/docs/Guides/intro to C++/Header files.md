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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ARMSMQ6%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy%2Fy%2BfeaKQ2U4uzQ%2Brd4yBaT9ZpbGUiqhbqCdJGERgWQIhAPQ8ZbEj1ys835A5VGJCKJdTYuLgOSAs0xGLKyhrOvLkKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze%2FEZYcAFTlX1FcC0q3AMACocY%2F7C5afn2r39GIJoZ8jalfq2hwRQQXpaiBTsduuWmWNQFPAvQZBYhjC0mf7QL%2BUNc9F84Q29O89mo3nLzo7rskICKM2kcqps5YPHlT8NSz7GwJv%2FshF5knqoVpiIvNOl2TrYe%2B7gWeQLBKLgR5du3jFPK48khDTBOlv%2FdlyOMnuBMEdPBDX6VdzTJaCOLauP6DVdfuwhKxWF4Q%2F7uo3sd%2Bd3dXTjJ3rMeYzdxXCMpqOp266cJUgNQraadnB32U0B%2F%2FSxy0%2BehVk6az7BQp1ZXmTkHCHd1HftvC1Ij%2F%2BLAvrZilnoXMAwJinfm61E%2BymxUa89lAUobiynnvWcnC4IDPfKEW9uzRgVHchLUBnQmwd2PmMNE5KrPzBto%2BQwdQN7pw3fujvWKgXSXyiNz7kjYL3TUEAzVL2st3tiCdcR1LqnAZVjPxqhA4ZSmrLExGVadIYOFduw3Ad%2FrVgrmUtEZHVfJqVk7%2BIZ17j%2BKaiSCECccC2WKHmYW0NLh%2B9xLRJO1HeuUlCX1Blezu6x33iSkvyKsfHeavCo8t5cEZ22yjDjb8O5LqSiNYvQNxm2S66kczMyzh1P5AtEiTqD9nIr00QaN61I0o4bd%2BYvVfrIlPh7vvAF9J2%2FpFDDL0c%2FCBjqkAWzF6ece03Q%2FeTYdGp9D59TnQUMAuxgK3tY%2B%2BOcb3TQNsXm0WVtbwJk%2FV30MQ%2Fko7NZVo2QbQfBYAyma1at2i9npMmShJ3ldCGL%2F5QfopZf5Rzek%2FRddORlzREbiy8OZ9Mm%2Fe86ULqTckzJ8%2F3aoyf%2FtmCm7xYhFj%2FiTstzu%2BnfYtKRSKOSvr5WkvuzTG%2FxD9QG%2FsoCLnPvJDsN8UTOEZzlUS%2Fj2&X-Amz-Signature=787018fbc32974f11fe82cdcce3c28c608588e49757705a2f987d7716679a5b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
