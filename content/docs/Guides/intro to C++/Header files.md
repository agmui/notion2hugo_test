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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRG5FWDW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDUE10ESQjcDGFw7qIz%2BFXyms935%2FpTMRpxhXY0Ey3dPwIgH0Ss%2BdAjH06q%2FQJQJ7btYL8CGUInJbvwYUBKb60VZGYqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQNdo5HoMVcyvveUCrcA6s0%2FSaX%2F0uNoPsMk9on7jK5uZYDmx2Fx5YuG5WTqrn4o%2BIPJBkP4HKM%2BAyEC4vALTEC0u1Lxb6P%2BVSg5o4k7B31Zzux%2BxLxXGrytGZX6vY%2BBBhckhsibVGimdY3AgdreN1pLr0TPQnh0dOAqdNv7bujgYzjIwO2V7wK16RZWCH71mHELwDRE9bCUbj3f6ozFfPIbNrcJJzq6DH1XzVAMIgWLXjC0%2F8vIqDwjz9r1bvz0h3lBuaqds8dNgm6BpzmeAY8gx2xNvyBjXVqS1cnTbm48V4O1x09eZ55AIRWKFOd9bkhwvp2RXq8e9IaNK9Y8XtKR1C4ze1GDf%2BPidxEdwSlxUlci6rf%2F%2BDZYqr4NJcT%2FNBbTnDm8mvXjD4jtFofUz9%2FLnldFi7r5Mu9u%2Fcvi2Em2Pr%2Bn4j2g63BeNbMy0MMIa19MpBPC6469NlX8t%2FOPMYkJsHTh8td9h3PnL9xFvrzscWKIxLOGS%2BssMn84MrE9uNXHmwB1ng0AshHVLJna4u%2FrOWdFcDSUSppL%2BIQB7LAyIqW3%2FWvh%2BYD0mP4lv86E8glmk0fY%2FwP13zpVBkvmURsDTTARf9ZTWIkOtNbUhODPAa%2BsS1ynGrc%2Bw9hNMsRzgY4P8wYsMiL0CnpMNjGjsEGOqUBS31uA7u6HJ%2FP%2Bx7loAft57vXF4GrDn%2BATlaolNrA6kqM8kf2hfpAC00%2FLzqlTc9W0AlvDv9S%2FYWD3%2BeD5iXotWvdf%2BzkLp%2FuBZUg7Ki9lv4NbBKOC9MK1c1FGS4aTOoD7dhXaPBC0H1LI%2Bq4Gykui7BH%2FMQTYmOWZcpQKW%2BWw9NkJL36BY0lb6meMPO%2F%2Fgen7jm%2Fox8Mfh8fn8A8p9egdpRY%2F%2FTd&X-Amz-Signature=1fc7a9f08216c53d036414d52d1f35b25ed7f91fd45eb3bbf68c1f5282141c8e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
