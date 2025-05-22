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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZTNJTZ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDkCcHRV086%2FRbNXc302dg%2FDClpoAp0Fn6UIrwPruncxgIhALcqmBpC3HZ9HNZm9QpmcNH1MuoOv397GNqJ%2FX0MyGT2KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWYdDJSn9objt4%2Bjoq3AN8THSMLla9tHWYbdrWPNSdKRq4KF5O7meOJekxnPgrmzgHUgoA48xGf5s5SmpjoiPkb2NC8esRlpr1bptI1QEhxWsPN%2BzO5ZZPEjhG8OWlHD8QbKZjcm4BOpqbWR1A9kkog5pudR1xaXiMwIUteqsluwBtKoxG7Wp1EjsL1IwRXeqp01JueT2r7xx%2BPWvcjXECI5eIGtFWbw9ejc0fg20YkBNe579n0OON4DrBBTCADH%2BwEtNGS4SZilEcRcHhBAGtrLVqsN4aeH6bWEVAvSQQJNayD6WDnlaroAKhFHgYBCQVnYnoQ6bQBqasg%2BviTD8HsNpiWQ%2B9utbeJEic8IzG27OAlSYz3ZoMLtA2qchcGoe05YBfHxSxequs03ZnM2elhdO7fh4%2BV6iKOyt9edeJyGw%2FMfxrcUz2%2FvP%2B03rohzk%2Bw0tM6IU7qMTPQc%2BC3HdyBHvwpGrRISajWNWAu5n9RxgBgXIo92OWw3mJzf8XwEsbd3Y5PMzz8PLlw8C8YiPFOqaGW6dX3FeBJ5bYw8tAbRDE%2FjRgGsQ%2BpGbBOQ59V%2BEhHeVhU8VNkLlm0yFkogYXKMWeVk9Ty08jS%2BlFigaSCbjPbOvYqbwQFTuSEfPOx08ut5m8Yhd6vFHxyTCQlLrBBjqkAQLEraphcSUZ6husef6kmGOTcLzakyxXWPIEIfqJuAvVMeekUMzPJ724Ov0FDKC76IlA1CoGpkGdEbN8Fb4Lju%2BDLsJ0VR2ddWzWCXsEDc9xGumD7zQRhsUhti0iEQYKATSnHPx%2FkliXAWJhjKr2mxNiFp3X5ivWoVklvDFLh1dQ6H0zVZJAX9CgD1XZkycMdJl1FITnGMPufAnfbIBEQq%2BFhaIj&X-Amz-Signature=e4fcc4d195ac4532de66dc9d039093e5e0eeabe11e7176a4bb0395bb5ba1c0e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
