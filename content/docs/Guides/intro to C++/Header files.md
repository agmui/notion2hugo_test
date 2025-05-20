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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YALZBS72%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOEVcM5hBRI%2BMX6njUsm%2FS80NOELupt0%2FmE4u%2BayWfwAiEAnA8LdVZ6RFZgZ%2F8rWvfLWRjDHrMJIwR5qxrmTtZ5PNsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwtKsRoBRYm3z88bSrcAyPb7eZqf39nI%2Fn1QTq0mMD%2BIjOiiFTLA2uHLJEvO7gxtIc%2FlZmWRFj8oj%2FmPc12HW8Hc1S7zzBf12j4y94qLPpYhbkyiLZrnuSi0Uv8lUOKFdRps7jjjSmzo%2Be%2BWd%2FL9N6uvS6bRzc0kBkYUXWltqiKn0oudXmtKEt%2Bkx7p2dzgimbcRNinYe9k86lWil%2B8BKqhGmrzlLZBmfcj7RyLmislIILJ6MFlsE6tMXt%2BisC3VKRAipLYz5OOP8Te8F1qM4iKHZ25gg%2FV2tU%2B3h%2FEfeuEolECjteO0ixdWJuwdVUd945AD32MWKRBi98x6Oe33V3wkIvnhGmJuKnYi%2BJ1t9c4VEr%2F4xU%2F%2BnEKxZUG1c%2B%2FwB%2FoE%2BS22lP29VJFs7TdaEWzPf0aR%2F7H0cY3iaEWzy7CtJEaBWC5olOjfptZYG39j7ajKzDOprfy07Qnv5%2BtKZHZtGN9SBF%2B9pFa7tpylgNWlw34KUfsi6XgRrYKmyK45DvLEWa4BjS%2BdkaFCWDYLWlrpKlKMWYilsc6RohtNbAtHSzWnvrOBM3r1l8XFGtivVgHeCDxvfUys3Lqsv0UYndM36lnhZ3IIt0uxvidbg2I%2FGvxsfjkSc5Dest1shTDRZqIcbLCp%2B3l59RxMLzir8EGOqUBCYJiTX8KS4MZdkQceuqO3oLtfQ0qh9Yr0t6ARgpqvCDBU1MoxuR30d7%2Fk92WBfx%2FtxeaGK636KKv%2B3vO07Qj97IYZiIxBueyLdyuP6T11gO%2BBH7l6htyu%2Fbyc5NdRW%2Fwy1bh%2BA9JE0DQRFXtFaeJdknogIUx%2FkFunhph2kJysDGeUYHvp9MAe0dxKYRmeTDbhgFi%2FRfFG2wo%2B8GgfcJF0ajTVOXM&X-Amz-Signature=ba2fbd601dc65439257d8bc568c1f5ee5d4fd4e622f0d2b0a68b157ff9609242&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
