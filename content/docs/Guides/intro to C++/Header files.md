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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJPY7VMZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaWez%2BN2dQ4yMtPVmkyw%2FsUYsVeGrvYEJzm0atfBJZQwIhAI2hpxbrCQ1dpFQ1HCe5%2BFWImCrDJsxmwqBnP%2BxEO1P4KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaJ%2BgHRf7ymb6MF%2Bcq3AMa8yLWJdN97ZH7%2F%2FW2KvRQJSgNIPcqWV2b9SpvsMoE4tvGnBeKnyrEV8ZDyHmi%2FZ8bWSCYamHtJ%2FCp7Uy7Gj5FZ1IaevjZ38g2xLTNK7YrY4pwZx9B6O3ZdeRXAC8cs1Nr%2Be2R2OoEnqjPRgWv4rdF2J7rRw0ZLa43DCQtpb6%2B7qH4PSKz%2FaDUuFF50O5%2BXCoVVB%2F5IBYkD0ki9L0xwSYesLGtWFBrZxtWzHmy4TkIlJfPV21WeN7YNOgjpIEdP8i%2FWTTTigYkfusi90aYLX%2Bgh%2FHmoNF34cSb89P5t6mdGWbTY0lZbIPPl5CQ6TumDjBsdZoFV%2BGewhiUa%2FJvzgtmQRH86oR2OD8UjNaXjAtHFQ9Eb%2FkKfF%2Fz7O7SuYjafsvMRMcMnq9HoDvmJoszFGYKdHjwUwR5JwL4589mvkSOkLbTblh45P08kMp6XSccOZbwPJaHqNdINnB00AWpmSuVbrKR6iK88%2FRXzivYfkzXQ2Ms48T2OWHWEZYji3sjDNpgLFdKj8Pk8cBngyC2ByOxouLP4OCMlcxjB5jynTNyiMNCaPvTdcF8p6YXhIYmbBGZOI3nn3YJgO%2F1EWnXwX5SsovTzq94pkmnr6j39%2FD7hYC%2Fq4Zsow3cDvAOKjC12em8BjqkAc6bBlVLPdA6SysLHMIzU0Q6Tq2VMgbr%2BPzKooRWwHWNX1ZK8bFJ%2BR8QEcrEwAdz7KS%2B%2BsTcBeka%2F76kud%2FUdOHnl1QJkxL7XYVsHaJq8u7GrVdoxaUszsO99cSc3aAHgLF77FnA5dOYFaxzJJ1MptU6Yf328sRlV7wwmxaFnk9f8OBh12XtczWGj1ev1dBCKMJlmXfiJtzCvUoGg8HftbIaiF9G&X-Amz-Signature=e9ea274605e7fbef80b6bc249b214c6be9a127537b3bf744bdaaedd67f598cb4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
