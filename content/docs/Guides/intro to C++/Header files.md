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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRI4IBS4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T180950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bx2PhdY8Wh6bxaxkqb8tL%2Fq%2BPH7%2BZMKHALaD4OqIabQIgPcEUvVG1%2B89R2UNC4aS5tHi1xbsVSztT9ir6ZIGmhi0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBiD%2BlKViZG5Y2IDXircA6NhmstwCKiHFXm56h%2BOWwtZqwXTB8%2BJhzZfjm1esCNb1aevh2Okmr%2Bja6AqMvYXUwHwZqJOqBCoxI39sK%2FBT9A1QhAYM3wVlK9JET11rAgGykbjMqf7lHR%2Bok%2Fp%2FJkRax%2F3FMK1T7ur7h%2FKjVFNU%2Fv8N4Lt9z1Rw5dN1GB0Hho1ZPy7QaoCi%2FYmXwJ83wZDrj9kxzaJUYN4MUxlJTzNHsTMSGYc6lyOPhVKP66LiscU4nwaB%2FK5IayBHesjBIp%2FwVNZqXdlkzE91vcei8tw1e4bAaGj8CJXoOxuh5ip7BsyYA7OR8IlQtfzoEPy3kxbUzJAfKM%2BsVKtPZgJjdoDaBCUWiYxzd%2BKND%2BxJpFlNanvqKW422sIOK53lVsSw9WezTTujJGICRGt2dQNUn8nGy%2BJ%2FwVKWit%2BfQJ5kMCyA6Fo4jn07%2B9mxtXqdYhB2dBrCVHzyAZ0SUXc5%2BUAaEHuwP2QgmWnymXBMOw5RMX27HOpvkS8SB%2FPZPFuYCvBV%2FOcbjZJxXLaD4sB7mkgCv%2FkT4zO3cnvt2NRH98LcI7Le0kZcTJ%2F1dYlQbbvc0J2L7C%2BwfVJWPOHR4L%2BGt5Xua%2F8Bu1FAIkgww%2FqISFO%2FusCDLN5sIWMMyWM75vJ9K7MMJzXucAGOqUBFIZiwDWBDj%2FibxvHCdoDA%2FJWfaSBwWh9hEy2NXnLdkiFzTyfwVMmtXLeofHkAg1fFQ5nq%2FQmkoRid8vV12lu2wxmp7Zx13sxxHTrxEsJyBs2S9MLgksaQt4oaw9u58Oe2fJeF1hvhlg4m1vzuK0W18HKv%2B8JlQT0IDn4aCecF4eHollZLZLtrXrScCrOR%2FG4o8c02r3pLWE9LQRwBfpCtJhQMWZx&X-Amz-Signature=f2d31d360e6be807bf464aa42d730aae308e35217e1f4aefc564f4c43fe176a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
