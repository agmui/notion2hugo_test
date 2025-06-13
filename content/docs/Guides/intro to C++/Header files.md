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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RGVN3YM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCJ8Qx6%2Blig83SDF4WdFeXuVFdC5pxg7d7yFebxxJ5pggIgWa%2B9xco2Vx5X9u9bSUfansaiycEIllp3QJ3dPc4ycRIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDPHzljlEeROx79q9DyrcA8ZUH7CejkZtzn2MStcex98DDByWBV3Jaw4Y%2Fj0SaDjOlP3aX7R6eZxJmURR6QkOLKaM2lfFEpbtpBbDOMVCKDShx5Etbciqo7iMhvDtmxwoV%2BedhQPhtLS7umqtvBNZHcoabKXnQe6qNlRKPAoe%2BliBgu6lbYnh%2F5WnZfX5hVJWeyjWq4OfTlJVf9xOBSqrqoKGJEDO2HrkAgwwrComYMdEDAYmUa9PhkQmGkvR%2Bvb6w3o2VcDZ%2BDLawE4iVQnT4MECqR8fwCzc8YeqBIHGZBIqujl7jy%2Bsr2nzGKOk1tKemavujDZMt62NGHUvkMdwRrH35gcVvgOLmglAYgmcq%2BJ04y4IrNNRBLTd1NKF3GG91khLY9R5a0iQWi7NewiFC7T%2BTObQKePy%2BKroiRZG2mFJ%2FjzB%2BCc%2FHa1YBQTE1I2eO1loqvyLCQEipBwdKYNIYBd0C8FIomDAwuxtaXzHgO2hGntOOnMEFVa38QxLURGy4jme60hbaD1oXf2nRz3ge4SSBrZVVcjVIP0qms6yzZNhBhgwaLdhpR%2BlX3Q6Unu4DQuKylK50nEDeC1i4aqVt3Q5b3Mhbi6OQmE3pjg2%2FiSMTMFKz4JpQwtbPesyox5JoKHGrPMxG1OS%2FPlDMLeSssIGOqUB3JxXr6c6ZUO3lukGqCwgE6vs7z8fGzw8mLpWwuB0eImGv57IFdw4UMnl%2B8kfxTvE4xoDWlYHmFBsNsIvF%2FukiVmDwHGTxb0Te9heKma6S787S4OQWhvxR3q8dua0SURFxHQp5biJFer2avf08m9%2Faf3q0ysDGTrQypTehJcST9I6srg%2BzmM6kFa9DAy9SBk3tNfpwT5%2FG%2BW7y8H3JUgfa%2FP%2Bo1Oz&X-Amz-Signature=9fd9340b1f034206f7353f92b101141168d1f2fcf279c112f199b98812d8af1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
