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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSHPOAMZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDilz%2Ft6LxNwSjeRTHU9ixoOuD10%2FDZ%2FvAGDDwpX5jxKwIgV8FgSYjIx4DTwo3fsq96%2BcrL1T3JkDqGeMkhjsW%2BCdkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGaw8B59cvlyrMsbryrcAw4eeSRUiMxSzFy76GOcX6jm3NIPXrCXpSLQ1mWSnn2vP%2F10Ie%2B2UvY38JilVNpaLao8ErTQ%2FaxIYjU9PC7t816U3ZRenSSjZlNAvWyAqgOcpXJLkuYbExI2v5KRsa59NMV1vhQz6NMnThmzQO%2BoEj6X4%2FD29313Fg1YKM9hAzeX0HjoUcm%2BzNNPye%2BNN80%2BTV9EscDnKXGW6oDDaVCh2D6GcTvpXfUHdPN11p8%2FcBSYi1miN22Bl2modnRUmYyQ0Tzndj25Ce4pBfAtRkpJh4wWMoWExRyU842pXWZWzzClSDiR6znkKdXq5mKCop4W8s5A86MM89J3GVUzLjiGxEx2bcpvL00Sz8hYeA9vDkjfAOBope8Kw%2Fr6ytrd7P65dZcjd6OgNZUW81Kf5RBlhyn%2F7v3CzbEYb8wFiAr2ua4p%2FSJ2Y00mLiYboNfC%2FPfwPyXOFsQac34fwIWENWTo9ymVtqm4aE6s72l4nNtqbAkvK71BuXkcVzj2PD1syXc2lP%2BlhfmfnYKj65rOeI4bu6BtYcem74PSLnQYCEAtwm%2FXJjv7Z5GkOGBx%2BeBnH2svdANqvdq15nzC7CnLUzY9fJDCIiQdgzZrWtMFHp9nUijJtIPujJKPF5IxY7JNMO6eosEGOqUBHQ5zAgqvJKM8hTP4pjBMeMJcJrVCg26X2oPDbBXfo7QjXxNwxykWV8jo6%2BZgsFK%2FC3PTpESP%2FcGyq4POqRnm%2Bn1NcdU3SGAAgGdHuaQ3oKJjXUEVnSqYJnYHeP7N2D3ehtKWfiSIvRC1zriHMzBoaVEd7VzIRsEQX3yd1rM0GYli1hI9kCYoT6e%2FdRyzl3bUOmi4asOUgXv4%2FafcwwlRj5cMJntA&X-Amz-Signature=d5147dd7e3bb5ce948ff94bdc84fa6e18367a930fedafbecaf018a5e67f87c52&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
