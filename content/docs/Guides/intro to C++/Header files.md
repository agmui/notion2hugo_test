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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W44AI4WF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIAOrnOHj90%2FgulKnG0zwWuV5VIExXFqk6ZMxy36kRiOrAiBnKQ7nsYLDse%2FGN4hJOO3QSy8IG755%2Bv5cQjj4uqkhFSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQuEpkA1d6mB6BnKrKtwDojIsx2LJdwwa5gQe65PrRAG4k7Xe0wbgJ4ppWAHBUkUKMJ4nznb%2FJRhsNmjVM3f7ZtALJsuU6GlHuiA5YQ4IrAp2sYyu2sM6oy00uvhVv%2BxekmapOiWoTkktlSpYqAH%2FJG0fjuUVYsYxbcgY5qNcOkvK2Gtdqd3VAT3O19AOLiD4aRPsZnv7re7Tdjr5I6sWdiVbGGpfGLeSlZjP08WFu0VHgkif93kh5TbdS%2FYo%2B6i2vXfoyjzq7xfZT1HtLjaI8Ejkwm6MkUiRTC1ABxIbmmHvd0MnRIHwbJ2tNMiLUck6aL5%2BwM9H0Zlbx6H6Ahk2HwJ9exOzSsjkt1kAjiUqxOJuHPNLi7dN8v3kWaKzLpUScWBwMCfmAnq7kBgsnb%2Becmb%2B4GisvkLfa4tedunehf%2F9fykjE2OXj5A63Xms4Sf9NcejKVFzDjqF3%2FRlyRKF8i%2Bb45qNyuF2eUjXD5rLEpZ5YGqXi6iDrjKpUS90J4s2ViXEoj9E46Mybk%2BK7aEUMnQZJNNLTQhoHvosGjpkZIxpueke7GxCk3M%2FwVoHlSMXA1y%2BEXUHMNQD41I%2FD5j4oOeB2kbDT%2FsebCopkVyvMddbDPzF8ZCcRUc1jnn3RVAzLm14UsINoYDVZNAwu46xvwY6pgFZadpxZRZ5lKl5%2ByXClVKaQDl2pQ%2FyyV1Bt4ChmwVATiFePlMTx5WVPyMasjS20%2FtQPFjgTKBC%2B3yujhJtjvl2Yd85biamzO8VaY%2Fgm4%2FFb%2FP1XMs5%2Bk8JRsB4mPaMnpiPA%2BCSQq3zAxZ4hYa3nSziU1MaUUhXGj0yn9341wsUXkLC43%2FyeN182mjkGFEJrcrKzPmFaMvHbVW6fM0vXGHDLq1BOzD9&X-Amz-Signature=d1aec6b53655fac701909762e8b443792e26a5ea24b1237b89d88ff6fa65a221&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
