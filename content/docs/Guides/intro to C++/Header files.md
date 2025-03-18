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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642MIB6S4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2ZSYdp8tdSrsbxqcXSOoGi5LEt1CwDeGXX1bpot1wQAiA6Mw2He9FFC9Ov6Ci%2B%2BHODQqb38vRfjBiuP9HtNfrLfCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMOzymFNNMUtst459SKtwDHJLc%2FiDCQknchM%2F0yZw5C62tpZJFs0LqJQ38bjw2TtW8Q%2Fz4EqblmbN%2BUpWyD%2FCivoeEHt0H5dIfLO19IOGYtaamKaYdlepwweXVXvTYLT2CV%2F69nZVR80XlmN1wyMD9S5b8xl9kDD%2BgGSwIhZWXRQFe0C1VO3YjA2kkXJmWJi%2BVo4uC8%2BMRVOXUGGvVobeOjeQHfvv%2B9uX2I2MoeeI5TFP3T0YyEPGXg148d2YWTL3sF%2FV77ia3Rw095JhStw1hGKTgadREV4RvdFdl22krCqtfEmlq4%2B%2F6pKyjGrE6yob5PC2JrVpvsDiOL6Iz%2BjCrqGnpH6tQibtFC8hm4wvRxzPoY6n0VT%2FO1ruM9XMm9PzQ9JPbgNPCRhxzJ4MTevW%2BixxtOJ5MJpimoLmTnrjKZtC6CcaJ8UDvr8raRXErd61%2FDOPRvrUMFPUAdTGfut1DY2CO1uE%2F8t64DOrTMk38XsPa%2Fwo90DaMeePZW%2BwfyUUvnswqFASt0NZxN%2FOlmMA%2FzmidwPh0hQ%2B9uOAP7GQj5Ubv7t79z4EGKwvsrNauELxnlUYl3NeShvdAwChlWeL25JwigYHFJWqVDAOOMzEsowL9rtfoSTGGR84RBVrIvpHBV8%2BCeAr94uFf3%2FAwwLbkvgY6pgFIh0Ei9whpz9TMozIU6bXOQYeP%2BGK41GZFTWQK4z5aPfACzLIR%2Bi0YpCtwPR1T3Bkbm%2FBLkqw4f7K3vHFx74z6WuUTnsLIrq%2FODtM224L8%2B%2BbL6qmxSpf9M3nV2GPlnpBsd6%2BQDYy5%2Bs%2BIsU54mvViZJ86bIsdKjYF7RNo2FS%2Fl%2BM6%2FMih0fdDy%2Bbuc%2Btx8Zyig0vOvjXItc34%2Btb5ViQlA9opzCoW&X-Amz-Signature=a708fcfcfa57194d7a2134c5d46106ce7e1f6d4bee6a3932572964a9db27b3c4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
