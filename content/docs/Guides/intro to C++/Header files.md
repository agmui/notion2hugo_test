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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALLEWKM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQChWsR16UHY5InKBor%2BrP3%2BVbDeNGCj41I0CL%2FX1y%2BPRQIhANQpl11KcZoFUZOtiXW%2FR3rXdVL8Z2bkQMN%2BwuRlYP59Kv8DCCcQABoMNjM3NDIzMTgzODA1IgzCu6FoD%2FI%2F4DxwQ4Aq3AO98GwR2yYJpCIqadlx4s8FTjF%2FvYLKgf6RpL36aJu0XWeFNmpjrBd%2FB8S1kfa3ICYvd%2F2mO8FrCrq4NN%2F471oIBjIaIKucRWUXFfmHPE1KI6HK9i%2B5x0yDLSkeZU5dhMnjRGN0CJnot6S0nqvJJOD2tT6VINXVGSSWlvlhY%2BSAb0%2BEG8tvaiV%2BaqeX2UXb7cwCAZOTbT4aYTiv8iZSQF91lVD2UtJaMCzrnB5uxMug%2BMT7%2FgyMHeGdpTX%2F0Pj2ZkchAPJmAi5pIphOUaj2l%2FcfAAv41gngmDMvIwiMPWfqQscIhg0EP4okRQaIcyKxWrWejW4NIxeeGI2o1ICl3ko%2FvFxrijbuDUjS7Y4p%2B%2FAg2mi9yH7GXlbW4AMVIye0cqbyH321BPeqSY12acL87l%2BkQMInboxcBBAzPd%2BfCutGcMGdKsgxa3NK474bt8g75m6fpy7sOoR4ymnPD8RZs9YJOaNXQQoBQvfrEa9wLHqp0o48IjiqB1sfouPlIcHletmtm2XXm2Ikn%2FEK8OBSNQ1%2BRLDPIiXjO8Iw7Q%2BFzWJyjovzJOxihSylXuIgG4lpNla8tqJoGfD0smrzF4A7rQpEv9XmjbIA%2F4cd1zEkebr15ReQNNRST2Q00FEawTDF0P%2FBBjqkAQmlYuT65gDGtQiWPE3Rut3ahHex1LWx1Mm681fUd%2B5rRvUQ6o8D28EkZvEoQkAdD9Nq2y%2BrugzMLDdVtLey8FXTs00BpmYHqhvvuifeWm6hY%2FXEQKfCR9MrqxXYuv7aL8Va6vpZT79G1Rw8xUkVBleJfb2uIckNai1TvBWLkS0BX%2BuYrjQ4cAYfdKXJ5o4SBK19Tk65mFtUtGQ9%2Bf3Tt0xhE8C2&X-Amz-Signature=33c43b1df484a00fc626bb99c9ef956fc08d9e81eec0e4f8ab6c6f196c18bb24&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
