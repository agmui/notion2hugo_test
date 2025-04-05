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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMSZSWF2%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDedy0tpXJTPyTo7lShY7rNGu3jXfrOfOCopLWbNBkCwwIgLu2jkh8o3Zjqm2DweSNB9g0PR5OAwuxT8hDLBUAH4IYq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDItoGCsXNAS5qjtKgyrcA80i7vqb7UqZY1HZIejSzvVJVu80uRWulALk7hBcJ6IkbX9GclFrZi35%2BvOnpVwfjebkbcAQfNC8O%2FGH4lBM0ekX3hUai49byVOs0JeMctu4ujNTvyh9S5wKVcXzEzS%2BzSnwaink95XSp%2FVNs04kOn%2B1sA%2FRUirNI3btUpfrqwSjpO4IvHN%2F2MDsaL633sN7MQBy30%2B6gMGKoFFvIK5PqJbstpB40CZyzLZDjox7isMqWEz6szbWiY6pm0nPCKunWMQoULnUuqlhpcxAc1ysuQ8yZ3l1RaSfliAt1yPjtyWPEFqxb9%2Bd9GnhDwyY4uy%2B57rMRXEGY8LvvFH%2BE0okku0p6opjou2C7062r5XHejX0srB%2Bpxg23INHLgO6y8FYGnduASji9XgDZFr3gHIuimk8ijj4NCZ12wsBtE55hnPszY8AYcRzE3Ou3r%2BWpKBFclcRqn3sWd9Crb5DNlG%2BbxOq4g23zto1GmTV%2BZCwCe63T9KZJgtGAyzw%2BGsICWAgzDUMQpYY6g82fG%2BT1EfoZNtjiKd6p4ikWE%2FETCCSkV1kKIwjGhVhX8aiHbXcGH65slKVbDM166QyOOTrUyW7WdQIpoteYz7zXRvzGeqRRhoRFTkHkPcXTK6CbBcPMNDvwb8GOqUB2KJn19bmUq%2F5txGfAJtBURq3ODZESqoOgnAM7nqT5C0SxVBhIbqaXM%2BD%2FZjs0w%2B7q2uvHiP9LtaPmGwtbfAJQheBUb6OSPv2tYRm1IWFhWIN70Mrc2mqLogWuarC2sKiUnsuKGv6z6JlG4iN6umLHg%2BASYCrot15J65Nti4NHn%2BjEOCFYJlxl4H6PDAyMEl4uoVBCqqM248VDUifPv3phi%2FqKDFm&X-Amz-Signature=786e50221c59663c42df9261f75b4334177c79ab25ff48ba4b88779116d0d6aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
