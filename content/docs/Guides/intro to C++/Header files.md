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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTK3LDNH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIH7V0PYzvKAJZiJEvX%2B3%2FJyIPguLwajFYCifYFkOm7wDAiEAsWCTPGhR3xGlMRX3%2FSswCUsUod9ueHDgt4dSD4x6YiMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDK7zFUnbTKbirEHLfSrcA2Y8SwQKwoHic3Cvno4rSk7Myotm8LRWp6rhhCgcoZRVrDLdeqpugaF0Ta2T20No1g2BsegZdxkUso5Mz1A8gaeR39QKJYG9GaVJvZCa1aCTdy9MHPupDyC6gRUb4OHPQXoMrYon2cSOhNJTF0MTeWxKtSRvFzCvX18Lwf8b0gbBvb2%2FZnOP6dzzJ%2B%2FxonQMSUcDAQTrQ0x7hK6FCqTh5lCrKx%2B0kBRRQRq30TVnKIrh7N7eFWGu868CeCPGK%2FsnQdXxurjCxm28IozM56LYSGs%2BDPXpc8WHQnkjXEGNATHpVBuVztsqUEQAbhg5HpoDVaYawAOZCr5YvAmEAeGHTJyg2i0VGIj1Rq5l6nJFOryG%2BAFDKQGTLMkELrgzlBYFAI8ZAWqguQ874zUItyNyQxl%2FBANCTkZjGwsOpXX7pcVYISNDZOnlfEhJCCcveaiHGsAh3WS1dzSJbKcavHSylD0McWcDwy9S7px32prX%2Fgmy5r8JzKvwgGJTF4lOgJZzuQOKMRgIOp5RHuHroT5BAKpcalmRoceswY2UXmtyO9Ru0mVdWxd31xOBUxq9DUBYiTqt6%2FsFYGR9R0OALrFoxMfITjAOilFxcLNutezDpfUxOsdKIxnf7MllVzSSMOL9xb0GOqUBcLKvXhOS3EJOFu5HbLXm3nLya1u%2Fj2ijUM3XCR%2Fb6RqVO1xssaPfugRYftWBtuNEtiIksNMYTXAVSOrO0aEnYAGAXqzO7mgCltskzu%2FCoo1fgM9tJOu%2Fhnd3GmLxY7IrkqI9QXVNTmCW%2F41kGa7lZoYa%2FULijKxkYoHAi3a4eoVtSTeBn2pr8SGzjI6NI9JH8wuqxwdByYHbe7aZP0WCjdRjPwN0&X-Amz-Signature=cc03bbbb471aab6fa9f614c40ea3334c6e04f14dfb75ff7185cb78ccd97f7970&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
