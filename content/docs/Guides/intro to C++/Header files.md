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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NYWUUE5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEfoypE6ZY3YeIYY%2FPZM2vxaY0zv36%2FGzV6XRxrNab9gIgCKz5zT9TiV75nuPgv3hBCKbBgbmroFLaONn6x61unGEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAeoTHVLQXJygrdK6yrcAyNey6VirRZhpCkaEmX%2FF5ms92A6Dcwy6RKw5bBWo4NzrAtfBcAIwLGXw3CwNQJLBEvW7do7WCWqG1vvad%2Bme0ZtiELsVZry6XvQz1ElwqdsEezyiwgbYx5dHoAAATRghp%2F6ea0m1BgDWEDs4ADgFrOvZ3uiUbvJ82S9WVB4IDQFVws8zXJJ9GmGNBTJcNEbz7Uu7coW3oyIP%2FsW%2Frg1IQ4SecJW%2FNUzvk5Bk7recWDb4SZC78bi0RLvZC9Rddxq6jqTb3c5NjNzuakOvSzNTrKeS8QavkF9DXo%2BLtLs0%2FIUItK1aLLwuWbXjPTrFppJVJrz%2BNzKQZARzu%2Fb8jW%2Fbi%2FwCMzS9efb%2BqtMjZtB7yv30Gro91Bg5rVO1K05y2uFp32OTgsbnCgzSh47e0iRNHDdpKEL2hzvRR1VmPWQhWYrJSOHAP0iihewYzGfPF7Gk0vYv8HpTpfeYsn3OmowUZ8CvFIUmohO0aWDf2OnqzxjcVkZsQn7xz5FZbpx1%2Bi4TO%2BIFXe39oD4KyIw2XX%2Bw9FkvyvUzoN7coIwEAEjfKcNR%2FNmlLa71f8jOpJ45bg%2F8YcrWXXlIfRayjX2ZtDiTVXhI8i0xODMMMoWQKJxDYV6W5rlEX%2BTxMI1oxnVMP%2BB2L4GOqUBhpAilNhTJG0P0oqjUfxZpKRA6BE%2BYzzrRNvE6ZZw98O1XZDM1UgcADUIMSVwgBD%2FC67nS80wyLdWWuI6x2paT5xqUgLSAIRZYn7r0rdsf4oZdOTH%2FEcAni119iJ%2FO7oimAwE7PV%2FfmcdpKTLnVpaDkrbccf4WydSbFmdCQzF%2BZd90ETdRFjBbaj%2FqSzKi1QMYd3amNmDyx1r0rJU5xAzF4THSN04&X-Amz-Signature=ddb53a8c63e0f9e2ec37d430107bcc376d391e290ead384bb11c1f202b801a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
