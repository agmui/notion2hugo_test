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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4TZSGA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFm0HnOR7Mz3E%2FVArt%2F7wm84KwUSlKjVihlpOMboIV8gIgEIwopXy3YwvTjWdAo%2F498r3v6Q8d7ORkPQ6JsPE%2FLtIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4cQIdLVsAoMGfKwCrcA2GObD9h88%2FypmKNG5XEhYU3c42BLtFTZrX4gQ%2BBywDcPRzOqLAhDMa7UVgk1jm91feuqoDBvUFveRR%2F033SQU8MX4P3Zwgp2%2FIrdLWWbL18jSEm%2BAJCWiuMVVAdv3VC1GbVQIUzALfP7KVu%2FzeLZr4kEtN7IKRIqTaOOhUHq197s29aff0YMH8mK%2BvvBs%2BuJ6e1Fztg0%2Fuu%2BtVQ4CgymJ7dRgI%2FEGzrTME3GDrHYJ3x5qPp4xa97exXi4n3N1TFcOiihlbZu5Sg0u56TBNuI6ZaCOCZ8UJJLAbuwd4M87tmrk3Hh9UEEiKQ6Nfk0cFP2ci6QS9XH91aHcl4RpQwoYBFXjUEGJEOyAgqGRk8d2nytyypv7%2FpbjViCIXcPpkaMDWJ0qUCdw1mj%2F2UtBHEQM2V%2BAYA92u20mK8FtGLRiQ14pg4oo2ODIV9MmT%2BeXnt0mv1boL%2BErUlm8ua3yLbqfu8AKkeTL1IAqDpbH603YqB4%2FlEAizjTEubang5dRndflnp6kjrKgp1uGdZrIHCOBO3Qia46h8jeTdPD%2FJJTFYCSID%2BnyQikPT20y43xpT%2BX44%2FCOyO3wXm0ULMFzcZvUUOpS6rPAURa7FVuoMl2r3p1IItRM5HjtgUwhYmMImk4L0GOqUBYnXlXvetvP8GS2cyoG9Ny2vxJwp5Cn%2BqdDqno6Uf%2FjEGVPUrYiRtPaJOC4CsbgW0Rh%2B6uShGUmT4lrfhFKJuEbuIy7QSLWB%2F%2F3p3jHz3fqfwtOmPTyHUVZRGmEWPgHM1AW6zyzLW%2BTs6hMofSc05kIFlNqc2JHy8pjbfLXTll8wN3wL%2FZnjtb8lTGRi70263u789nnAstNmUZNbJb2K8bP45gt4j&X-Amz-Signature=9d37f7021d792f22d317371994c076604270b6b39ea870dd33bce142c11d41cf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
