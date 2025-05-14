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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4ZWVYD%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIC2EnDKZXXNj46kqx4hV0AklRrzt7XeRDXV5JbKCU%2BCuAiEA6tPIqLLL%2Bc3XUUBxheyIYLBLu2C%2BG3YtObnFGKSZ9jgq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDLxPM8Nrxc9nA36LnyrcA1b7Ee9W9xw560kKON67nPuNXjyoScNgj9Jap5hqTMbqRVsci%2Fmm4sTtYFnlR1oq3eLz8CmMnNlXe%2B2dbvwRmudOdH33il5FMEXp1ytVNKe9OUvfeGeAmbAa3%2F6Q4mdGZsPlIrxe1%2FuyETluH3kmiRnSuX%2B3Vm5a0%2FRuVZ%2FPOo1epZZATVN3O7ifXSiYLzmNsRLOoUrZdUyqsbYpmoUCJtSUva2fkVOyzrMy1ySIAiO5QPAmC6a7BV2LChdIjoLKg5N9Wzx77xDK8WKYiTLMC7jUD0LzgItJvLD0KxyBxYNEsEPlBAi4uruZ%2BtQM3w6B38N%2BYYScQFXck9ZbZdV%2Bs9l6tOJ7uwIyWnnE7iyI6%2Fbj2djFv7%2B0xjVSrmndsGkQHBGCfcb8Flg01XTaRyAkVNNqh0Vz2aG8%2Fq79g9BqRCm6h9thi3k4mXAS4GehlVcNEAVpd7SXIlhPwihlf3bKlMlWAivWPbLyM%2BUtUO8kRnSkvVtXJ6X8w1lgc8K6HYwfpr7ldSy8iuioSrujCZBc%2FFFt2foQ5f4kD4UNJwVpOTYW35xytc4PVtQVoea8DYwutvDrWaFNqVAzukGroFKMRIzQjFf0IVuBzdKLbfot50c9BBy3G0c3IitSXrYGMO66ksEGOqUBgDbrMCAOZIWeaJMsk7%2FxsjYu26LGKp8w4RhSWhklMsNaHYT5RHU0H8L1eICj%2B8XPenrMARuIxpAC%2BrI0c%2FXyUehHA4xANWBYTT6yI78fj%2FhIlIVqoRb%2F9FDBUDpIPHcuTuG55Q0ZMLuJaNG%2B%2FEsNx4GlIfTKdOGUthPp9gWegxxWYVo%2BaUhrFJsAMLEFF3aUelkKWXfJssDgpaTI86q8oz%2Fgpc5Q&X-Amz-Signature=a687687143c1b5cff9a14cf8243d0fcc1f469e396bceb8ab67752a4be7e8bb75&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
