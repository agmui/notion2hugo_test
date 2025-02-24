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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWKMMGA2%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqpEDyPCtFT6j526nqY8xgJ0pgMtpt6yaXKyMoHiysrAiEA5djoKrQO59DH2QyCUFq7dnprZo6MDm1%2Fwgc3FCu8%2BZAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJYwTbjmBS01ZS6%2FhSrcA3qO6ezi14zxdFlGyDLNpjXn4KCzXxnPQZ1fr5yZTcvtnTA7Nj5kuQpBKvVwnDHHAVKSRGVq5Lob5iOI6EAs6tfdeCEXEv0oybs4yXsURvYiownly6uXkvryyda01WRZ6XwOoWsvySYAb4QQDaHh1xP%2FlxGG86aEcQnngdQvc1J1677kO4Zjg7Xr9uWEv5Y2E%2BoVHzKTVRk%2BmTmQCAakrwlJCFSpuQpCkXfqvy4Zu4WVM6N%2F%2FD7CrYasEmsh0ojXCx4Li628MkhMZEWpNd0FgmgwPtubQjd8x3O3xDGdJKIfY%2BX5rz26dLcXJ6PjI5J9QgARcdT7yzqO20rdEvnd9TJ94gzDO%2FXkP%2FnxuNeYd87QP8gP38BCOjn%2Br0FxBc8q4blwEpqMPY5DnLomEBkLDD2no5BKkviGajKJmtKHxXOugvVf9HyroEM4tyAFv56pmMVNWw5Es3eODCM4B6reJIypz52st6uQHgykbQXEb23FNZ8PtzBQcam%2BfPxw4Jw5IceQ1TDTwizY7VjBwBO7GEqHRLrObmOykq%2FxbWzmSgTvJ52Lg%2B8WTRD4iIAbP0OtldDDlmJ%2FEtkm78SqnrVW7SP2LazGB56hPLYrJq6%2BIe5ndEA1vpd0ZTbc7viNMN%2FV870GOqUBNurtSFuKJ2noV959gPPrpxvRIgdRWTOqGal4RYNghQuxT0mg%2B8Y82LAHQiCVrgtkMuA0SG7HPXu9qUvEwvFI%2BDBFB07nUW2otVmg7RvWqH81d2w6uKggBjirqwGhM%2FE81In5sgKXixEGkXcrFrx0W%2FUcGUZL%2FCP0PPjAdJtbWMsygxt5XV1OP%2BYKcOybGbeCfvQY3nEeUAdn0QmOoJ3HOVuHfGmG&X-Amz-Signature=d784ba102e090504fa6ca61fdd102c9f0e5126a9510a81768221237206f382f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
