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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJAQ4XM6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFv2He3SI2OjS6qe%2FZdCTkRdWWwMOskaSwKD9rIlNaHzAiEAzNpn7R2oER7kDP4YZdQkAQckB8VR%2FrYsxp1l8YaRvIcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXp4s9lvtUl8hUYRCrcA%2BvqvmuIdnJPFEtO5ffb2HpBaXYif9mZI71mrnkOGBFUBk7AgV30b%2Bjpp7qnDmbpk0i8ay3QMjuvH3PZoL7ItY7ZudxH8t7bwTR5L%2FivEGK%2B99J5kdQ%2FvM5YZl0mEU1N8a2%2BSsIv8TSAjghED5yXervD8S%2FED4Hp6KikK5aA58ie240Bvv%2FszEq%2B0FOHq%2FbdJjeJe6JyVXAOqsfeaWkmz8ApVMasHUgApHAJqESnHCRDT2VxZNIwp8VOooGuT3fVw%2Ff3E4XYTIth0KMXl6cuKoz6e6z%2BPokjM7YvUJ7sZs0YyZftwSjV5aUPOFtPsgH8EJ7RhQiJa8pqdbFlXMBeDN1TjbZqZuVCBYM5ERnWC8oIBsuv1m5XjC3SHZ1XoSk5si77RKTGhWiMavlSYLmmSzDXSPqQ8nA9FG8P4tyN42KoYxtPgkkn8%2F9e7dXZHRM1G07qXwK8q7JVvPpZVP5y%2FDDZwiwmFayDp%2Bv9Bkx0zskJy6tFYeFM%2F%2F%2F5nobtWqxZcMDIDwyTAeU2cs5L7acXkcA%2FK7yaJMqSLjTFmyJLpuwEQEy52jz%2FrSdna6jc0Eo2UrG9FdEcd8OxqiA5Y05QSXo0BddfE%2FfEDqfcIYEil5YrDusZ6O4MmvzPUu6JMIfv4cQGOqUBtCJ%2BiYqmAUpinI%2FyBv5d466g%2Bv5JnBmSgPzODz6IR8l%2BnW0rku12ydM1Hv6%2FOFSpGT11ACxLe38yy2GgIe6qYuUYQBpnOWzgAjvWqAd5IalxyBlMvJrfKkHzjNkeG3D01%2BUzTE8ouC6NELGpknTlJflBwOxUC72grY4DTbitk52mAwlV9ZTuwjPfS2ODqGNQ60J%2BjszLcMqzO2X5QQn6bF%2FhGfMm&X-Amz-Signature=bd3451cdde3d937c2054090d235b5b72300bb53c3603a933a1daaa0de527183b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
