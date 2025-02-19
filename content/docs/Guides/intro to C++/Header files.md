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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623V64LKH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGy%2FLLT9Ly%2FlE6VJrLTBu0WmFHdKslLMA4L5z9Cm%2B13WAiEAzk7lwSJezle%2B5UEoJ%2FZHTd%2BlOdiTPnYLauDDePaYV9oqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkxgGhIIhMa3jPWMircA3TsyKFXWXvSxkZcdkePF%2F1c%2B%2F7g7R6OSqkjkMgLWyz61bGIGciuGWEM7i93Yje3FPlw8u8wHJfyaGJFwfIsPag%2FVgAeYQ7b7bCPXkA9jOhCncOkDmyVKISgu92pZeA6LIy6W30ZsbCOEChGqStsKNMXaETi4c2vxcXc6ubdgX8Z7S9jxwx2CMKrEOgBSnyO8p5TBFqe9gXOHtFIm3xn%2BhGJtm9OfraK0C5A9C5nliqNKqI7ENPTLqfFYcyuuki6EXTqbHnrk7QxdJwsw2cQIju4MWDmUjaFrX3jy5yk6VLcrRKI9GHe%2FUaYPezIqnrBG2SJmEDuXlT1%2FwCIy4GxggD0tEbHxtjcriNFmk1DgSaTeCIO5054guwkHw0TpdUugJ%2Bma7GKMY2MBqFKu98ilZOpYt50sZZ56F9G13ieIIBo1u6X7xQF%2FCNvsWR4484Z04xfurfQhzKKAKMHkCMdRQ8qe300aqFXWdZ4zVIi4m7dh5reyA6rcYbE3cGVIUsiEDq9KvlIbXmgn8QmqtvOvxo9Rv9SrHxAPOzEhf4yanToVkxloiMgTDMGOjs%2Flp4NadgBM%2FVyOZrOWba8wMq0%2Bm57ah4kjiX8H3513pOkaWgB9LSCyPf4Rse66ol6MOzu2L0GOqUBLvy8b90zUKISFLocMHr3V5hKSJ3eV%2BX6KEYnSGuMX4Oy2Xw%2FQA2z5IGevpWrIMYlhvrIAc9WGDafmfE87%2FydY18PE%2B07mlcBE8gWOmNkPoIcoidR%2BSYCIoY%2FjGZ7fdKg8wLyo1jv316aH4s9x7QMRM02p5CJskQPe5744wd6Stpq3d6Zjy08ti4nNPakDRXtszNvqj4DGnqpkc6WYXjyTUFoBnVl&X-Amz-Signature=f1bd1dc4176ea571e17ddbaae7aec5e164b5a61ca3c8390214b14f3eec24b569&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
