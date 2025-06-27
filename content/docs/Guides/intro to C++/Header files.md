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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RQLMIPD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHt3m%2BTDgNtoYYz7D6G1F3IZ%2FnRbkC2%2BKMrda3LUvP21AiEA8tQ1BU4uMe4LxDqzIY8aWzhlosusqfQg0kd5o2P4Iqgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI3F0Zc1VPBgrS2ZbSrcA9nIJO2R3XJznDje%2BZkdmlB44g3E0FPjbqJnQExZsegdGOZG6DLDL0q5yon2AYQLG3zpAIPnmz2skOAKC8MVENkC4PYkp1tlF%2B7DrMSsmHJa8oZJu8Fp0CtynduGZBPeneZfjtjCRqMHH85VnnA5H7N%2Bi6P4FySAcQgoDLmGolgQhsTTLrak6pQ%2FO5WQUsfKFaucniU2qSghxz012pU0W0Bm5sxEzLKbdlAeOdaJVNPy61Xmc77alV9ZcT7Jd9NQMj8OrlTK2wrH0IhjEuZJKfivlKUdbxde0tHYuozj7yZSU62BK86vsbVM2ClVe%2FiqOGzmvu%2FgYjoe9Zg3JPKpU5YNeTQFW7W7E6ChjiNWuVHOrpqfsgTB%2BqwbZ1lOVfZoLKvuaTkawHy5ryoNPQoYwg%2F4tGL499KSXGas0GC%2BWXa0sKE8EWs5h48JzgnZUFeSxeGXxJM6pn81yFSYLWTYXb2hpsPDODJgi0LsqcpGcVxVBA%2F5Ennu1ehhvLhoSdh25AEn%2B6XNLu6bP6Kf9hYuqZLWOmMcH8bdBLiWvcLHQpz8sciuCiidur%2BUyloLr4G%2BAknGEP4W8%2FPtvAIB2fzwqMnlRxUh8b%2B8eAvRHmSvSSsAwzE7XHJFsAHWqhzlMKig%2BMIGOqUBUjiYe8ayI11Z%2FxlDTpMvAG9DD4nhg92b6h8S63HW4SOiVejL%2BlRBK1pOqrFPBQKsKwTiVDGvKljarNrKdjKLgCwbn6DxzsDCKePGzvuAPvW%2F0bgoMe8g4TE4yPoXQmdQ0j1rgTh25KlNi2PqqKDO77p%2FgqJME53Sc0S2yIVjnRLX5Pml61Kd%2BTW6Vv%2FqqdgY3Be%2FDP8Fa8UMWD3%2BGnVhFIsg%2BnOq&X-Amz-Signature=090879475dbe004ef9304c85c276dab47c3b93f295c12f91dc06d05a98461609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
