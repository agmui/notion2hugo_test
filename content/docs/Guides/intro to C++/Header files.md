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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HQNDRQ6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIFf9hWkP4CtvZer%2FEdzTVjHig3L4iC6KmVcXZCH7WuwAAiEA7LhYMUAXfPN5ldSs%2FkMcJFIh3BZuy55QhYKZf4n9dRQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDO%2BqJzOGmyvfXlq8IircAxzvPyKOBfJfwD0mIFbaLdKrvBmTGJROaaIuRGy7xg8Ajen0zxH%2BtVt8fItg4nCgreTmOeYwOmRDVhcuiKzabYRimH0xD132c6F0Ucua93Xjqrya21lRBmUAGSy4hwA3I8A1E9OqfXGfiJfvyO%2BJe5d8Tv2bIKSD5nKEr1jU4IdE6XMCRfqnrDTFyXIM8QUJkBP33WqJDlqDGGwDloSe8euqvhxtRRqhlF%2FGVHB55%2B5FsouDuHPRIBd%2FHbntSZATBJNe9ebozLNFGmzrfHjt1JczWMMPOr7yT7ABrI0vF87oavqHUiVAs5qNMXazjpBT49nEybQM5%2Brz8DsGdY3Ao2ER87pfhHqquP9y7Ff%2B%2FReNVHhuAJ7uswcn56lfWAAahL8ePxQVQpGFB5YyKbfAQ92KFx39Pz%2FoC9pDbi%2BOjbn8Jwliqj1BptPXeFyk5202flsv%2B8tKlrNzTHuw3pO86VyNFeqp2fJcdr7FTWn%2B6gTPmZmGrgs7jLcYwnUypUoYM%2F%2B40JLbJ%2Bvpa8EzIFeZIjNeUeOHDiYVVMkA%2FU0RayKT%2FSveRKWtWLRcH43ImszVAmBsjQdj3n%2FPU2rtTZupxslOGRtL%2BjsYdid%2BtYlHs6bsRRMf43Zux6UU9zKJMMqwwL0GOqUByj%2FEphP0OvC4vLAeq3UY1C4XpDWcMYZvmfpPmNqewSP2jnzFHd3z%2FZ0N2g5Nyp1cUJJYu8isLF5tU4EmGEebHuBhGclgfzaI%2F6%2FH9N0JtKDt4TQUiNNaQO7MVfIRVsb%2F0mvr8kTfWAoOH1GRe%2BHk5CJU8pY05priqsYeYJo5ZYiIIHjTS20fszPcp0ddGnUeG2lu2HKF%2B3iuf7KAYpZUASCkKIE%2B&X-Amz-Signature=a361b0bd85582cded934d9ae0343a2c3efbbd21c8074fbe98c90e5039127516d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
