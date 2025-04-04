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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4HXA5A%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYE6oNzV17PmG%2Badfw2j0oHqbcXkzWVva8Tzt%2BmgDubwIgZKRsti8jYO7PlFYhYUEFFKsFySPjlQxOEhUh8z%2BY5DsqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBT0h1KUO7Y5BDq%2BRSrcA34k8E4O1dX9Yt54tWLVRmNlhyGyKZMR%2FXolKaorw354zsEURu8LajrFFgdZv1C9tIQ89hUDZy3oBhiRywfQN5yvHsPwNNPcgg0jvgfhOv%2FigMglNZ0nYu%2FkeDmBQcM%2FWeHbXJ2zwosaBrnnBbJebK5NYr8tRBCBtWJ%2FD%2FUZcaMzl8eI1YP%2BWBHxQ70XrwX%2FDWbnPmyEFNY6CL4RI14Ey51tO%2BpoHg4JLF9GFwX%2BtyREbU4iRT%2FxsoCpSoRZttHxNdh%2B%2FkCdIAOSeveWT7ialuEYx6MwtMUz%2FL9%2BNmcx7s%2FvsXm1E0FFzR9XMbfrl3LqY%2F6zpOe6U8gpbqW9hmJw0KLcoFPZJeymClbolqJgTIVFH1%2FMSPlJzTsur3BGgtnxuP8uyozghuhXwYeaQImGzERE%2B%2FDlNBcWFlvMdvJw5KuxBQdNCYVvnr5mlFDGgvXwKFdIMH8VABbMGNOGMcDcNaPjH5eI4dGhzlFLHKUH4qDfqRZ7g3ii2eMhUFtZb5W7wfR%2BbJ3gbLj7PBfummkhW5WC9ZfLNtckAuotnKJVlvaPPMQJ4%2FszJMkBabMdt9869bppXPYtI4awD1fXpeN6cmJIXwt%2FDPpNd74LoXr9TxTY7vrUlNnO%2BHPvg0hUMMTGvb8GOqUBnFNfNgYYpyc3v3EoV6afzMDh1B4vh7MUbRuGjvaMrPNohDmfQpqSiH%2FkGRRfm4sEVymkLFHmZ%2B%2FdJPwXDLHM2sIGZxmODDSqjdcw8Riavpn0pohXhJ2KJTQEZ4nVNfI%2B5pPZ27C8AZ5EBl9P6d7w1%2FXFXrc9g33QDVz2NlesFfrwGBxiT8GesN%2FtcqkCxMvIXnyxLanJY4YFALeDg02imltSaXkW&X-Amz-Signature=16b96c3d96622065a7598b354412d7585bfa12af3492a035d181488da540cceb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
