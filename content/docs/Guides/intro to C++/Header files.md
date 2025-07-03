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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2R3FGFW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFOOH2Pgb6B59WL91Fnw%2FaB2xcok8TvjxINwIGF5ArzNAiEAup2uVwJxfkXKH9mDhsCf%2F45Qy%2BWllumUjQmySnGAquMqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFo3p0xkDzF9t1kcPircA%2FJ7n33bFVx0jNZNfjRaWWIPrcdjeCVT%2BNy72ZuKqjje2e53vRyfhBKo01326BfveKSxv0NIopg0bzyjO66pQvFSo997Gs%2BvxMpXMbts2LE%2BmLkCBbkRlZXeg2vveTYQ7U%2F555Mtt%2F0awkyf52f9o2UO9SHMlRH39MwDQivzTgPQcbE6qKRKPjo2%2F%2BqwTxGKhITyla65NPl%2BG%2FXg1Niao6SyKU4lvwMFqujtp4Mn1l6UsVnTfcjKw9JTAvw47iuoUpolCrmtBhEHBXtI%2BxFd41HhnFbzXIPXEHK%2FVkHW9sHKkl1TBsbweK4YiWjUgTnd23DYN1RfHde%2Ft0OKoEleYCxxQVuFY6X6ip9u8dfLLh40RLiIopsx2V558ZKXg%2Bhq1VqFuQTfm5Bzs3YqGwb2Ukm4cOFaKppsbH8Sss2vir4DUFJhZI71I7WShJVFBqbTh5340d38qJq9NKbtm1%2Ftt9u4JoLT3IIw9%2BUi62yZ%2B1jPkjR9ebAuRyzitoFSIu1RsLjYQ0yRGCiN7PT22%2FzVzMe%2BxQoOUw6XY5zX66mMxhhEEMwfoa2VL0idwJVOrXefKXfkQeSzb4RuTYM3UyDcNCmRNJmLkTDtx2Ok6k0wVAkqEC4Ndn0uJRnLhrbIMNGvmMMGOqUBh3Q8oQfEaEMjVusdZBcZIo77oNhyJTZm9lmw%2Fd9iguGlusCbihhVrhQxCmM9UqjAKcl2ZlaSEZq3GhGXi%2BlFhFg%2F9mUsgtf8V0KGhEB1WCfN8P%2BYNDa31%2FeRMaH%2FrlTSnttiuYly1sCsuYL%2FCX6dJviDrnT0JDbvUoK1g%2FNYcORVuzpXt0Gy1mf9Z%2BKQfRYcQWV%2FCmUFhyaLQixft%2FjRdXWnguR4&X-Amz-Signature=7b5e9458e452185b3fabfaacf12f032ad417da323e8dadffcbd840b18480f149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
