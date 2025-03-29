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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYF4AKT%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCvXwPj%2BklhZojDd%2B2K%2BuLpfecG23wEq%2BgaFQkXV4kJAwIgeLvRY5u06%2FjOJLpCAxx7JIT5vqXR2DOm9Q0ENm8shSAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEtbl4Vzk4Uv6uirdCrcA0teYt2YUpiAdoaupftutpvCC9lLLYMRI9b7rh5rdqniMDSMT0lrwbYKuVHHBpwfCqkzUBgna7%2FBiM43GsSxSldthFIP%2FfZfpwqNJ1byPkAqvJzYuob%2F%2FHSxJAGvMKArhvPINUAJp4GK4kvBJg48w2x5mSt3JtrydqjVEpopyECw%2BHtYG3Ev%2BAXrRdqeTl%2B1vQiOT5JaKff4ooqQhsXFCUBFDIZ6ZCf8iFB5Zmbp9zNpU8uMn8itSMSMukFQ0tBZFWkE1R8eptRIeCeuMsm7Mq5ERvZN7PN4vVSiu0It%2FVt0k6NLlU2SsBcKUfMb3bALlmpS%2FotdGxaNaTeGv3t3bG%2Bsu1HUQCsUeUZcwrvhSXZhJPF2LuV7dmp5AtYamuTrHgQ7iz%2B0OWISBD7aeBMClkmbKDkW9GuriR27vs89dy6yhDIjRddhYZTCshxYMuiagg5fHfr%2BCgYS%2F1JlkOZ9hmIoQnWXw%2Bpfi4AC7wq8kBIHG24OQn7VqsLvCa%2BHwTLAxGXxzh9ojK9boNOwxg0kYgoEiGBtDeHzvvZ8rc1DTHaxqR537Rgz09hTC%2FF%2BW%2BXn78isUUuXnWdY4%2FA9aJRI5OMR4hIcqIyCK2h062rPNG5v%2BhyB2G38wuS7roTcMLq1n78GOqUBl2MH6TaQYKlx5prMpJstzZ5RfszOjsuNnBv9cdfiR00bRbTgwUHr8I8VEo0AfhvePMghCl7B2tnB8ldaWyFaISOkA3Hv6uKCjlD8jefoX3idsZf9r2BcTJsHCogCgcrhEv1P3H%2FaTLHWHNYq1jwFifkbR0wlV4%2BC0lxAQiLtdE5ov7NGLwpoejj3%2BWbITIAmruYNx097Mxct%2FDAJVTbPyy8jWOlL&X-Amz-Signature=d9d6fc0371f7e5029f88e237daf1d24eb955f3c970a1d8475b982cdde290147f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
