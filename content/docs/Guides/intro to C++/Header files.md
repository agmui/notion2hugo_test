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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEP7LHCF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS%2BPcnHGLKB2mHV8RHPDL6SPZvyOZMu91T52GoMGrnwAiEAlhxJLv7bRs1B%2F776QbpgrAN4EiiYjXvGhkHZdJViEnQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDNZlAazV8eKT7FZhQircA013OtHIDLRG4MxWc2gqqhsVpAmJulAeC822NABp1ThbREOXHX2AG%2BlQo%2B7FS43MLr15r%2BmLpjKGu%2B4WeFEuJsYzwpxJ15W9TzwqH4nfCg7CkPMT%2BU%2BpNs%2BA2kAtcGfhrGnMeaftb2uV%2B3%2B5TY9WByo1KHRNx9aMetVOGt2n0APjdaa8iCDX%2B6GjwXLOS9Iw3y6WXo0V1xY4GyjHxFYEX2wj8F8Bg07j7f84pM0d1tr9ZfnuaX%2BXyy7%2Bw0d02yEkqTbzIX4Y%2FDLQ4hzqBJiGYCYJBhWwecJ%2BlpsOwElWQFsKkKS9HuCNvVvIE929W86UHZJ6QgHwoO557Kub09Rl3PMX5yfXZTRhPsua7YOkh58W7bD6PnzgvNc7P84fgM1bzfc30zSE41NOf04Is3MpivKOkwOzUIuN9kT2SoAF3sVri0K%2F%2FZ6WV43%2BPdSF2gh6kdd04JZl6ISO6PE4A91GjeszghuwSg1%2FI5wA%2FYXyD9nBAJ6%2BCY4g9J0pVWyZu6IDm5zR5MT%2FdxXqXL2Z%2FmH4fZUyumotdKyA%2FCjXmX4CRQtO03CkJZ6G%2Ba7g6Szj3iZJxu89U5h17LLkNhnLFUGiuqPiYoQZv0kKcujyfokiYUdHxiF3KA4emeOTfc5yMP7RoL4GOqUBGTk27MOv1XiO%2FOdY74QdIF%2FY8jaWmtRm3Ze04DT5h7zMaBBidZQSDcLwY0eDgpddmZAe%2FW0Yg0YeMX8YZEPUhIIgKh3zJyZZd9JN6O9cucrKvwJ%2B408dMYiuhL1EzaiOipbvWDdbWSkob642rmagISIp%2BDFgQ6Yea5gAmqrb4IKlHhdgYMfF%2BPEfL5nB4%2Bwni2UPIOj1z3D6NOapFxERXFs7m5aH&X-Amz-Signature=131794424af27ed54d204bf2b7de5dff1b22cd1799452a7744d4d578e2335b42&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
