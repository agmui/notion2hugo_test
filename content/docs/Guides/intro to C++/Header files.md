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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQBW5OAA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDFDnKBX7f3HjS44rCpoqy1Ecuu2RRkO7Cb4%2FBcX2FIuQIgfTMNFmozLQ7Fltsqie12x%2Bt5ZkrN81cx8oHxxKLPovQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEht7sWSJ2u6DJWyyCrcA6UjWK0ei9ub1uHnBywjRFG%2B0RPYnguFa%2BaCBGBcrgV%2BIXKhGlv6NRgAx4UprPYmu%2BoohB3xt789nT%2BZVh6y73c1NX05CzRXojvFNPTXmFUlqjc9zCJtyrfG1g8cf76LrbVkaheaUoRHu2AqALzgDWaFNCG3vlR9oG9mZPReaegm6tJk1VuSrJOyz9sHKUAgN%2B3%2BTkKPZ0AM%2BxU8NTfotviVjcMrcMIfH4RaAa%2BlAttJ58LquJGhViJElWcDLNiSdayXe5bWsqhniv08QNY65uL%2BqLLd2vTd5er0jOQgPn6lsqQ0oCwrg%2BmAsT9bvrhABa2O6NOJxqaF1wcjJenmmihA4Ms9Uvu8PEVG9iFNXGbnr62cKAcJ9NfKVkP%2BsZE73MiExkUBhyO8SIh9GOY8ZPIA5yRfsUwCXtrq7%2FwyxlQrp5NcudPlMQybP6IivBC9cfMgT9h%2F9vbjNV2gUNC4Yexns2v2VVWvelhHqTKRwhTu9AH93gnG11ysGwdJjWtu5XNi016RdyZmNX7ACHmApza6CYgg%2Fq7gP2aAf6x16yIiL7YL8sqeMxLEHXVKI7xWW0US53JnlDJlgiAEzkzsW84pkTwYtFaVZqcqjmDuTz98bvf9f6INyvKheyHGMJDl08AGOqUBykjpVPqmXcPrfmN1uXvzjvN9enxope8pVkAW%2Bzb9%2FSJ7SYYGtg05kjlmWpzRg%2Fo8Zl4Z5M0Lkk4Umn2BQMtCqFeUs8rUJuHp1knFFuj9xieZT0%2F9KQnB6T4Fx%2BruIJySM8duSd1Wze8CTeT8L4Au5y6WeSNPm242U2jpQLziFIaBv6wNLKwIRfRap66MNbTn4HZ4AGE6yd%2BR%2FExGCC0fUERYqa4x&X-Amz-Signature=f1d6b0a931fa4b1986a3441bc76b54d5cc57f6c4c159c2e0e520eb6e2a5c6417&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
