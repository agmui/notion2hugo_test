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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5E5FR2H%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErFw%2BmInF6L%2F9FFmmXhJu882w%2B6CkK90ro2Svkozp3%2FAiEAg0aiRdEA7WiVki70oz94fRsy3s%2FAXDz7qxqizDahO%2FIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDBAvIyiPceyDVEUURircAw%2BBUkIC%2Bf5dfSbmaudtjxIdO5gtm9lvjAXoOxhlVLyc5KIKcydvsl3v1EajRtdudaTTCVv97Rnp1UliGW72o9WbSekPO1U8kwMzVs%2F48Zw1jFwhnaTrvhDOGRYCVbtsNiMLV8WPhbH4w4%2BTfszlzwm2Z%2Fxk8jeOQgDJIl%2B%2BVgF0FTVEtkZxjy0uB5Cm%2FnEuY5McknmjbjnZgKTMiTSCIkB0jTwoabniQsnsXP9e%2Fg1czYyVRJtGYm0%2B78DVb%2BFRSyGD4e48iAcSsgUMMkmAg4nJZadbnWBOBkPGgxlIKZevBEQ3ZKu5fMgHm7mUW7JdcfGCoDdHegKquv0grDdchp4w6dxAraf%2BpFARmO5%2B6wGASef81QJoSIvtM2ohMPyRwzHUOdhB%2Fl9ckfkTqP4REtG0X%2FSI%2B9n%2FSeDLKOndkqE8KAkwjzY1PFQhKHcg9GGzKUmz6gwcB20oSE0z%2B%2BgniZcUAfd1bKSDrn%2Bl1IwfesEWvwtW2sJyUa6NT%2FgLd1ceJuu5WM6pAcyRP5ZXWYW4MQZbW9%2BwpQClf4zP38HJB5HpsRUist%2BiHzrTKS0WwpcxX8VEPQpuAA7wFwppdh4mRSd%2BpPnINVzrhOSnos2wI5HKW3pU10P9mOXc2wRcMNDQpr4GOqUBKgck3Krjk5GNw12mBEDkWJZRrcAm44lbQvugRonDNGVGjwHm2kkCwEXkPr92IjgTyxWxfQnxp%2Be4CYiXbHzBaGPCkKJAL4yrVw1R9Cey2y4ydLZW91hmcd%2BS07lgQBbkSFgIQ2eyI%2BTCsVrFyc%2BvimU0Z7oldaLuFmjENfRtRZJkvhLKw8MD6Z5ULeu0MU0j3t%2BlvO%2BB6NgGxE9Hpa%2F3OhmEqprD&X-Amz-Signature=5be9e2ff2b4aecb65944fd5029572a778c05c62e22de36cca48eab92128aa828&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
