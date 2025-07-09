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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6SOPUZF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJZko4Am2taqNqLmcDHpSc4V%2FGu0tG5zNatNaPKrPxjAiEAi4zeYBGrZpMsxaVTa54ltrr%2B6eFaw%2F720fo0rIiZmA4qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjmNBFxNuuxqSPLACrcA5jRnFX2q%2FtkO%2Bl9r3wdLqrzRTMiwbAKmal6zgmAp4SIP7CNUksZ11C23ql1CX4%2FSDDplYXiCfXQoXa%2FHYdU8QuKW2CnuNX3ucSaj3DF1C5Lc4jw%2FLAmw3mY2nDQMNIiQj8b3zLcZ3P2wSEvBuCtICRzZIzQWU9vu1vUcDIbXaSAzCBLyjzPdjErcgpIY4Xe1eDr7Jy1lg0MTw5pi13iOGpl4IsV8rsuDJ9zzRLyy%2BtK98cKe9A2PIm2nuWhZylJACKi1I7izJeKWELyuDgnJECj4IlT26%2BwtjBkdPw1VDowfmgQdOacZDoXkOst8VVUFB7ZhNR5ZhCoI18E1eKxcDjk0PJxiINLHvp4PZhj2LU5%2F238MqrDVskOS%2FjFPZbjtoi69UTHnfDKKols1rbCIDJhlia5aQe9GgiccYHERtqxYoXHH%2BvglAbMhTKtdUTGpe2E4iugBk%2BAL21llp5SbybHbvW3Pbk0Ppcpj1zzinpM0xC%2BY8ngsSL0sGECdIJ5TPIErWEn5YrkC4fMgl2htJ9eXrAcv65BbeSwwIBuTAhmJsNPQGuP4yWjo1viv9MqMzvPGQSjyVM3Bp1HuT%2FWOTX6IC1teaN2OEyw18YfsBE2R203FJYdWdDCwfJeMNPSuMMGOqUBSJQ5CW80abJzDJDEKSF4hyavU0znaZ99UsdAgqQRKhwB1m5pizDx9hDEw%2Btu1V9rn2tYeksfh4%2FU%2BU44Kd2yNula%2F%2BcsFEg7HY4BJWzitjDTHMWRD7NwKOVQ3Wcy548dLvMHlsLEtHUA5We%2BTcebTh1l35vIdsj3Z6j9MrclbLgwfsnygvNSJaME0b0JLKn4LKZf4e%2Blcq8I8kCqS6%2FaGFv%2B9rpY&X-Amz-Signature=aa979b8ce49df210e25646e959f7814a063cb409d9fb6652fd68466acc146e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
