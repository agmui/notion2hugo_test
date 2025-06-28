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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PNIKO5B%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyaSUUS6VaZeCKLYPflfZhzX0mubggKYKgnxw1ZqZUQAiEApyCsQ1pU6SD7RuKHTcyNSV3o7fOg%2FILOdsaPq3yk2GEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILRMUFJ5i8%2BxHO%2FtSrcA%2FOcfjhhNDmhMxTdIKmTqXVIZcVKxY9oOmBCqdEqmTN5fRRYbSmADolw6lE24O%2BCx1XsKy74i4oVJ4jvcVwCpjs5LMrZ09GUPssQ4T%2FvQrwFpqMXFEYwPH0Ix7J4l%2FpyGAD79wxs73r2N%2FUhAP4N3%2Fmht%2BbgEdlWRhnLpy%2FFvQuWbjhdcmC%2FiRJiF4vYcbA0iuO61Kx1eJTD%2FFn%2FfcHCkEB%2F9RhiSmljbYqRCeSZti17pDFwQK%2BeZhugHEVYwuJIB4vrK2Nsr3fJdqdkMy%2Ba%2BASB370nze%2BcQ8euHhFVJgKc9AkZdyvODFTVw%2BuljH7ungfrFrJ%2Baxpr5rFlqIJXENkA0dMbMcWFldRVjb0TUkbPRoX3RHofqzvkmYvRXhN%2BedaGF0Wl2xRVy1ljacLtS6WYYJC2lssaKzgYhZja3UAvg1H9YRMbyg50kIeZYzRm8wLbDfJfSby%2FxFLVdHMa4z1RLX3v22t3umo8Xk57AX58vnOOr17QS4CWNdUOt9SqOa8nLZ6COi463LY7ZCbuLgNK1wnCPfjLbcptKK3tpcGaOBtfICseCzp6CfLhQeJAqrTG4HxIpGJcHr0UWP42BizUBZf8nafk5M518PYFRB7iL0Vue0pJkZV8gKilMMf0gMMGOqUBlSUHDoo8a%2FmY2KGCNoLm6upwAdr7AIW62bpeXerb4C5wXYO0Fx%2BcmG5xlms8AsavE0zHULGyK3x7qyfWJKTu27a%2Frifi6WXW1vi0N8DEkCweyQUEpA5zdjxKSW7HKiVnzPVW15A22mpf5OM9JmJmBrNWwpJAeBbezSA9p%2BH%2Baa0gtHzDErnEGVGrJWA0wS5lP%2F6jRQim0P4j%2Fg8he0K4JhpLdy4i&X-Amz-Signature=41ca40ef3e8635c6161286489323c404409b9c8e453f5f338be7229be9286efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
