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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILVOWIY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEGGM0pmH7nLZPpQoqukhlwh0jurpyYB6djv2S9FqsDxAiEA8CICZJBlvBB1fNz7VnlfEoLzAQ%2FMYXyhq%2FKru%2FRPsKkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDN%2BbW2LU85AtliYWZCrcA%2FjRyvpEiTScurKMJxYARc4tuCr%2B6i4v8OqR3xYAGT%2FuBMrHD4ro2vDbE%2BqtPosI%2FtOGrvG%2Fqb%2BJwqJW7mOSs0Ckm%2BRYzssAsz%2FnJgp8DHNCKIFnLjIQYI9Y3IiRulgT8v4kjbzxBB55kq3NnArkg4McuHnig2%2ByZicnE%2BYxqrLWr1BHpUZOyYtegTGjsXM3hKolqnYObhZbvjUnJme7Qr%2FUhAmK8d3IvES3cUIVY%2FIph9bLWCeUyDtVrxikdrHw%2B8wLcxFU1uKa28AxcX6aRSmcTAmBpRK9Lw%2F%2F%2BYWhzzGeJ4K2fCuV%2FDPnJDxEkoWXu0jyfQMdSkbd3M%2FzE%2BoKJZ0Dc0FDtGEr2bjz1dK9ukHua6buJMePWGn2SBq7Yewjaj9vzDv3LrI%2Fb0kujomFQk66cEcwrDGFEIDGedUbXNt2yAWYg46wQZz%2BSChBcP%2BF5SCYvSyxRoat0ysvfMHWij24YsqQWoKeFbeEl%2FVR9Y7Af%2BKJOQcWrOlUUWUaw7wgGPSOGjbFZON8jtBUwHLTF65NSna6LuG6BNFcfJr08l8PgvD61SRQPvP%2BqLZvXUxSfsmfKiiwOYyUveapk86A41LXVZjPRY28YFrTt3ACeydgmJamUJdz6jMeMQyZMMqC9L0GOqUBZ2hIhrCEhOtzNkTf6bnDmeZfr%2FdBRFY21F24DKzO4NEbLEEfeTJN8qSyzBiFzLZC48OjK3OitrkG%2BTMxjgAGvlJ5iVx2Ui7ulDxKQT7AV40OLLMvKzjAXqFQ2CpTvP0AFMsRBWSkWfYpChF%2FPagqY1d1gMSCUa7by9r6PTwJ2f8DNcScLyGVGRuMF69EI17%2FJQHHaDboJ0ypUaEreYu0Wk5XcoFa&X-Amz-Signature=73f7ea094e6ca42ec0873e3ed6279ff217ff7a70ee7d0490a8595ccf9b60fdca&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
