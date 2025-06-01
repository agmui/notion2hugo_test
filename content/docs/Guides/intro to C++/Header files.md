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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3NYJVSA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEYwbVeROlVcbN6AaTyMQ%2FKGSWOSTCvLIxEcTRQh3lFyAiBiAGX3j9R69R6xuCv6xOaK0yWP6uiWop%2BBtxzYIoLK6iqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3VWNmLZ9UlubR2gOKtwDFWwMKruAI0PVwD1Ea5nggXfFkmJRkMBFfpbl346J1mEqUVK6F7JUi1ZbB%2FhnUBcbOFyG8DdrG%2BT8%2BvpWjwnQTa%2B%2F37MuCISgFZeeCJNQZp9Ml%2FNexr7SAAipxVNYVGR7FjBnomOCTOSwsZSAD0gstkUVmuz1KakavMBuDXO5O1FTdZRhDsNjQr1GXzVDoVDXr22ECiHV2bcKF3K8jo4oK035SVQUCkUGNCJR2iHxVxkvjbsO%2Fb2x8ZJPPnpxRMiDIEMNAMjtnSb%2BAKJjyoBdvYTxZSmvROj%2B5Z%2BXF%2ByHqwpVp4Kco0zhIp6KJLGSY4KNOvyhzrFnhnRhD9d6F5jITFhZ2Ti0oawiuvbugPh0fmo2ww7NqZFjoA4f%2Fq6x1FCmOMwaIFPQ2tTR7O7yj30U6aEY%2F42bf8YPvs1nT0SI3tIgmaGptN0mseV8YpvEDw5GBvAF5LUW2S4ljS6G0UTK9E%2Bsm5r6oyTwLN1WbHGEMFIrDI07onqvmKc6Q91ZFpe%2FT7oRWMe50QLS66CLo2dTWjO%2B3CHyoZVdrth7lMIieNxAlcEiDdbTsu0F87QaOAnbCMz%2B9QJrgJ2wifkY7blKiKr6mJ%2BCvoiMSgG4Khbi2Di610c2s%2FDbtusVbTkw6tfuwQY6pgHAC4afFm8xFnLWsTm6lDJwI1TD%2F8Vkd18JrBMoqDh54cola%2BQX0Am2AavIoNpsMvh6NFQP9Z%2BAI7WxfVvJbHgaRYwMovs7FZw5aNmYs%2FnY%2Beg6nuA%2FvmS14Hp8%2BiuaqjKABTeK5pfXR8Qk4gY3spWWcY3MegDLWeIJAih%2BcR4uP1jNKQ1SosBmOBzGUYYMoSE0PAv77PwjOI5YhBSbRfwxVktIGjR4&X-Amz-Signature=12491f217e80ad54ed75c40ef2d6f0bee3e9a5bd007805c27b9ecde74d182b8c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
