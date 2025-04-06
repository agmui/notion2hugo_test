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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URSBINNL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2CzOrYSL9eclDUY9Yo5RgdgSHBbU8VP35AT%2FhbscQeAiAcWWhueGWG3XKC%2B0qoh%2BrwvVFdeMRUl3ZUxLmw4oXokCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMOvrBnmr2efJLCQ5EKtwDtAm6R7HqIMukLo%2BfeCa43Kj1b5YsQaHXEHuSdFOZuc%2FmZiBt1D2XHGuc2eCZe%2BVEyLY%2FiSZ14o1cf100SvqiI2jhHGuZ0oIZTjr6gJ%2BN7MMk0TltJnEb8aMsYM5HFq4xpN38r6vgXfJE4zxMPpWGCRTjBg4LwHe0SsTvIwxFMcA7JSkLva2wxjEQtV6v%2BoJg1kxAfQqbvf3ZPEKkOhBboVyONLX%2BZvz6fqTsczTiwNnsww42KBxwn5J%2FzQfmya5bF0L6UUb1T%2FSoRdEiFnclsUvky1hQBwNPhovOsjreB6J%2BJbdqgbfbWsXZgXaIqXzOPTvtmQ20Hn81wlIskLtfNWRUo%2BACSaAOM7TTbKG7EfeCp%2BHP7DANCPoT148dYeLpxP4k5p4uuY5nXBufkCTAJQwM1nornIVQU65NZl0JZFNTyDCproMs2f7UEeN1jeyOHwEc3i6anF8%2Be7GESUREsyEwe8ZI0bD2MFzrC6pnaxApVPt1yFUZ4VRDC55uAHZK2lclGSPinFomuI7ZYl0V91eV20rYZa0N7FtxgqkE4b2FlFiT46dcqLCRmPDAUGkl1jZ%2FIgFJeYUqwJRrN6kNdOn8PzotipDTd5AmUVan8yknQDznqOF1U6m%2B9%2BQwsf7IvwY6pgElxr2vaf5rl4xOi76QlEBuwOdqoJdyWO%2FBgBukDcQjBdjy7YH1FauD5SxprRWQDQLKJA86mHsLBj7wd%2FixCHjx2ld6CMCK1NNzITr3RYKzpT0dCDQVe7jWpJtr%2BaM0Nz0snuZ5fM78mrhppJGJZYLBkASzZ57jxeClQY3Ect%2FhMi8MISZxQK6dMGH%2FCaMSr9rNm171rwrmPQY4CmnLLFfHZQ8atmnI&X-Amz-Signature=6cc9f60ce1fa14a08fae44958d9808a04cbe6e1966e14c9502c79f66f5a15940&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
