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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDAZ3Z3E%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAbZBzkjmF9cwBl9WSht80lXA9o6f2pAOkddGaIqJ%2Fk1AiEA6U%2BZvYisU%2BN0cfIGSizgSq6Gum2A0yRr5kN5oTgU61EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJIslyN1Ru1dnqn5CrcA3%2F4CCk%2F%2BbhqwDejhhSymTyIpB2q%2FCbkhdttwcmvpQOhGKlT%2BV%2F7tnnnxMPYO00IHYqGY1DlNb406iyfeUAU1Y5H8fs2pai2K6gPeSQzGIfN%2FzWapIM%2BCUG3o2TRafZPnk3FjqNCKVlcC01UwtdhRILWmMXGYt6BhPQ27SVL4Xtbot0mdOZ9OKaa7lPpFfdxokEFkpw24IWIwZrItMZAkakvWU6Fnec69hZn%2BaViAPyp%2B6gCsHtYHkloGIImc7oFpAhCdisE%2FlZs2wsChWv%2FNl4YoP5Y%2Bray2IP1GgMmG5m07nW4q35fXCybZVIP8L9nBdU7DNVcbTzopCangR3M84s%2BJOvPlJtw8hJFWO8AXsjrRYbj71E97wCSHFnmPaaUxcTo2Ad8tCA7t7MLGNVNcgP10xwpi9Os%2B8wkrPAUHQeUW3afKJCE1YjDiT%2B2iJt%2Bvq55ynnNR1kMdYmKo9tI%2FE5tgZc4LJ1hrS6csu6Tjq%2FtmnDV0s0v%2F7Q2711KebaUnn7pEyGg1DYM3O7bV6FhddQXnyO7cuo7IzKVFP%2B3R%2Bh9XWXeW7wK5MuPZiUuzWDM2EQko7rRyiutDTHyO4HbJvstrWc3p7rFF8Xk4WUxwi8Cgn4qHc8Oa4henZX3MMSj6MMGOqUBm6sBUBeejDhxTOjVikaXmsaXM6FFQcxGzijjVwNmjY6rkUUh4aDIzOzMbtNCSagPs%2Bxsk8BjfUSSWCN9KsYDF0lUeevXVKtWn60TkrHgBEEXcDUbJDwaIsRD%2BouHOw4MSQeLeEY%2B2gM%2Bv55uauvdZCc4wpzTHd2C6CNC3EVjtz6eWycDpx9RmU4AaZ9r5y7GOjYtSX%2BuYkKuiD4BtdA8399f95hS&X-Amz-Signature=d0e61741d0cd4edd54635518da0867ebed954dcf5826e9b034533759f3efbd13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
