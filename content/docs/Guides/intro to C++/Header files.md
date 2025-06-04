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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYQK44GY%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIALWmcuv7eRFErSyF9DtzsBLj%2BtWEefm2zRFrZ7RT68lAiEA5%2BguWDnjORQunM%2Frdspweq5CrPM8pprAsaZeYkO2zoYq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFZVKS2QxrVBG%2FChuSrcA5I2KRhfuk2mmejH0XazdoEhaqYw7UN%2FTXGNT9ePvMsHBjZu28RgSu2dbyg2xkWiv8L%2BTXA93PMJ5Jh2opEhzp95eOzOscIPp8kKFALgSJosk%2FH9OfoGELni0QWuLgm54yqsNTdJsQ6ku3a%2FP%2BosCRmjh7obEaNResXC1K6w%2FMI66guzC1IlaPqpiRByC8O83ibkVZejc0B16zMy4nab3oX36q7Yb8IIZtmJe2Td%2B6chlyYM6e1K%2FRzRGCKlsqd1p4YE%2FgSv31D9uPmTvSRqGGdAJ3MOz0BCB4YhywOO5mGVv%2FUqyE%2B7QnC1a5bQsKVVUwkuynh%2FLuttIMf55w4V3XVp9lwmidNILvEt8mJEJxg3kVtXr8EWyLM35bLf3q4AHkt1S5%2FQoiI1Iep6vXzRluhM3HdRhzIzL0fjiWO%2FM1sl4xK3ZMwUzKeA03J%2FU%2B0LB%2B2vMdH90hY2Mp5DkTQVBc%2BjXGFyEnbhGiMAg8SwPGA75NfrHaBr%2F52CgfqvgscUAHgsNXOa7Qn7mbHv0PPIvUBkxWJ%2FTSlRxZZp6xFf7do50Py6Bn10dEakpTQW7F8LqoArmukmGvH1K%2FT0FMIqonZXCT803KXoE7%2BwEvkipqCsTO2JCbmD3A2yikyrMOTUgsIGOqUBUzDk%2B3AMtCiBjJyq9CqYTN11hz%2B3C%2BDZtN0zQkltppFtoKTm0EbpW6AuUbEJdQEEQJrQqiCMwd1t3rkmmHU3obF1XwPgHaLI0FuKYtJcWh0VPJJzb%2B%2BNgMVTFXR4tC%2BLWMuLDCUBGBg%2B8%2B6lCSn1IxwAXi8111oIE0tLFqos54hmrlo%2FuLRixIm5VenGEHCfpUNR%2B7rwFhpNh%2BiHgEApaHZpWRk2&X-Amz-Signature=f7d583f21396a6aad1305d6efeb1543184ed4dd9277a53aa361ef97ee0fdf3c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
