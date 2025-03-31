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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX24VUEL%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIQD2a52OsWHm%2B6o4WyuXBmKEX4eMezi6XVzdrSE7sVoDJAIfBvL1BU%2FqyuKlV3k97wqiyBMCnHFFRg8ZEE4%2FiXYMWiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM461jwKWY0rIR4EV2KtwDIr00Mvm%2BFXS4kWLEyNGZc8VgZhlbCqFntNXLBUsNadr97i9zSgkFTdTHomejDHQ%2BfJPsObpkz83vnLdO%2Bxpr2Ok6v%2BAolhHb4dis%2FVDDYGu%2FICYASbG7J9Ok0DmgTQ%2BzPepsed1wHloAQ%2Fqt3z3UDerfdVHo5KBv%2BJro6TetNr5p2HLrrt5kTzqSlkur3icIPhohAEmos5NlhXgU8F%2FNwb0Ti2UPQhJ%2Ft4XUxlf0QPNSFcIQ1CpeXKTfNluv%2FS97KouoGfnFLbfuVJJYHm0CTuLdK9xAsbxULdpnvCcypSLGHnWzGqrWinE0vBXtLqcWf2mkBtqEpR3T4cWXB%2FzCU9w%2BSZgm%2BEZKgMGK74%2FP7NQ4OQtlcN2Po7W9gsbij0szkBZpOlPoFq%2FzOzYRtD3HFWiroGhWhBpyaYwy6%2BOHdVyBXpJUcFkW0EJguHHlhMRFqsRqQyW6TTKl6tnnxJ%2Fhl4PFbeTdTyHiWRPs3EtqlwxHXmds4UswtgSCAld7wZOGkIkJGodh3uJ%2FrH97rctMjP%2BkbnMnDQz28fZMO26REWi%2BqHH0cxPU61fQtdyOeOK3CywRBVzppN0Icq%2FZYbk6h1ArJxBnK8rP1c74FlK%2BKAUt911dcVnRT2s7SH0wvJyrvwY6pgEup95NClMcPAWkbOM200jUBH2Hnl%2F5bOxor%2FxAbmiKuDWJNzCXuigB3KNpKdbjXW4DHod92bj4qPqB6ic9GvikP6gAJ1YubiSIyqIbtOTp6cKQuMyPv6XdJdqec9cbgnHlOl6JO53JzbQn5cWIwykwzlyOwfa58%2BCOKLVU7CYs9stbNM8%2FuUP90FvAvtMW7fKOVlByiJYdseamYrSHvu9I1T6WtzQ6&X-Amz-Signature=634ad2038c8223cc6bf8a96b810cea714e071b754caa44c60bc652d7daf4dc4d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
