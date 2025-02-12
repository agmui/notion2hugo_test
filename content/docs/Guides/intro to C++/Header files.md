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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZHPACAL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQSMCSqyh6xRkm9ZT%2F8n29BvPwqi4C8BgsqUDf6Gp0DAIgBrcMIXiXQh14OvWE%2Bf%2Fq8oN5ilIXHvQhuJv7x9dogJkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2bJQeDQH70cYpoaircA8hrkJ3z6ZgLA54Ea5HDBQ0OfJ%2BF579fcTP1q90GvY26ZXycd4gGWQqbhKQd2vmDTCZPTQoTLBOddaMZsgmSFmakTh68E3qDPz5OL6aE%2Bjqr8HD9qVNv6AOXbMUvI5M6HsfFYSAULb7oBr0qVpXZi%2FhYV0uE18%2BDiRU%2BaO%2FxxDLwO8dzR1d9ytpkgC0ZOPRARputwxRf3Y5n1KOwu5SweZ0Sc7t%2FnW%2FeqwrAoMnBknccl2%2BvAg09h%2FSUEXi6Ya9UVefz%2Bvyp4wbcoVi8r6ApDqGxY2r5z5Mc%2FxrpFX1GU4KhWYuvhNlK9jOmv87qyaGpUtbZJU9XK%2BjV9KlCE1mupqcuccCfx32%2B79ws6kVcahEQ98P59GxKg50HhXCv2zC7s5Y6DPn5TE90W%2F%2BFBjJUsogzh%2FFUBQg%2B1pvwfRs9rpYmQWSC2Z%2BCW%2Fq6GMNGVSo14EG04URGi5FtD5pWpjYAv7iCZvgRyr6ON20ghWrlNHAWo9mwl9s2P1JJ7tithVrLplqvLSfmp1RIAwLdUdJESAFgpx61Y%2FZJ110f6mLavzHR%2BuYgms7bikx9ris2zOaIrbVWzxj1f5nREPER1l9qGkMgWazdhKpk9RlmLDzwNsNGTB5fci6Qn3iopQT%2FMLnur70GOqUBo2QPEnB%2BlL%2BL03MZvWRsgt4RT9yohgaRVxNEnGr4o8beUdvkh7ontXLpRl5GXsl9b55VkixJqmmFm0yYRhs%2FRjpiA8yO8d4JmO5CARxRI2HOKhoVJZGhsyLxcHiLxTsRAZgP%2Fzi1rW0RFjhFQolrPVs5W3X%2BGxPSC%2Bs6o6xb1Vx34MKeveXYY5v4RCOr7gGt2PJ175Z%2B4voYmPLIICiy%2Fv%2BwWRit&X-Amz-Signature=93e9eaf4edccf0d7ed7f07212a9ac034748e9a46679582891d5d05b0fe434e69&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
