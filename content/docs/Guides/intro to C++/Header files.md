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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAKRPQDS%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAG33i0973ItNb7NRkLnkioViKb1gscr1b8d9hzZsRI%2FAiEAgjjSZws5%2FIG%2FuwLzUXZzss2vT0WDDZ%2Fp99EhPhNudKoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIN6JDPX6U3Z%2F%2FQyICrcA0VlDmj6AwrXvHFY9aHVOvAX356R1NPPm9DtPA6lHAlTolwqgQ92gt5e8m%2Fh5tKdzDe2TPEr5bhWqO7Fccp891I7IG8U4P1QJaJN55hcvUmYOTyemRWnht9a0qbmAvUfE%2Bka5rHX3UAcAAeiVcYDCfjd6ruqeMbJF%2BCK1oJ08CGyDdrhcCAWlW%2FE7rc%2FMmuxn43%2F3PIIF0aWwFgmL7LQBC%2BoXieHwVwVyhxVcH%2BPkkj97h%2FfQtMJKBnoBBzhVQjgqhjCFyAcqj6iiqDI29mRNPjrh7C8b1vvYy2M9HTRJkuq8ol%2B6KvjOzlwKEjlsl5UP4X95mpSAZZY1WYgzEY1ozjGFgmMoWx%2BAbnPT4u8HZZOpT4pdMbbLBP3FtA8%2BsC%2BiQIAl3fH8qdNIRRSMe524gY8yNgVlrwwbkDChju%2BcJ0d9NldyeTBLnGokHFwDSu%2FJCFFpdGURj2dX5qXGbFr58hAeUi2iWlH%2Fnfuhg6YtttMcsDawWbBCDWTujPGzc4ovrLRNlQ0zuZ%2FTDjmCuwTHVSY1hX3G895ZIc6VfJz5373%2F1lKKLsd4I2ii4Evm4nXqpuecoo5Eb3DYWUCJ8aQTP4Hse6IO%2BI0P%2F%2Byui4R9%2BbeK4Appjzgq2O8O3r%2FMLz91sEGOqUBzI7RdUCCYN1hcZn%2FxXhmyKPMYhR4G%2BGX8%2F7uhkzd65EbaHzBYN6gdZm4xfImIfSil6tpx6R40oURNcFSeCoOg8i3Wev%2BlDu5MyfzQy4Tw4zV94NY5iameslZnKjp8GLY5zUbFx1ZjPgoghLDQ%2FIQTZ0z1Vj0DjO5M6zexsrRni%2FFgVuG03fX4MqiL4COLaXL4HXqvE7tc8klWMYktKaGl0ruWFyn&X-Amz-Signature=be79ae88efd0fcd75821a8f977a12c6c8747b75e7ef7c890189dcde9421ec0d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
