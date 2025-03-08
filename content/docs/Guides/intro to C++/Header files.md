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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIGAZMP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDt%2FKQ18BrdZGibgUhsdYBQIDMLGO2wnkb33GZamgYYVAiEA%2F3U2jPDXC3CBYHUNZDJRMK9%2BLTcRxjjJeP3i5JSWGawq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDEQfpryy5r0MJNdfaSrcA%2BVttlL4ErRWVcsP15krSSiJjJ6A%2FgHKB2g5Dkd2l1gc%2FwM47UucytvDi7TTdHohiS%2FAUu2Fc9QO43L7YrGLCkLpHyVcW5aimGu0n8fXXh2X0%2FNbs2tQprad%2Bg7pePA%2BVpHQKuf3oLOoBFeGncr8SlzYOpOBbrv9YMJcXn2N3REdoPl9UPsrgvKDKRvboFKb5Un%2B57u%2B2rFsVizZFnBAF55LGh8ZcmpqmbgXw3KSHrB3uqstFddByIWbijlWaUoXZJMqF%2FJ3LeV7Hk%2BozbkFVQyL07mINY7amMOpvCw8PV1tOya9i2shYV6TEu1QhFWO9TfnGejWnmW9yVsmOdk2w77A91uttgrwvA0A8OVF1z2JtBoR9SW663S6BmHaW%2FzXFF%2Bk%2Bs11HNsp9uYFjg5%2B0kgL5x4cdh6xLAz55hvX3ktvH0vJzEoqsB%2FmVnUM%2BokCAofLJ7%2B3gLH1g%2FKoBIO5ubFzP86WhzgRTNsemDjtf7LpzZnzBZmwqsfbJSPA%2FGpZWbz7gXs2d%2FK9Tvzi6D2kMhEaMp6OiRQXumn9VCmDbB%2BZbhVGkHDvWUdVTmDrTN1oJY5ztZmbuFnrdv93REu3K7iNdGvWXLEumhiNAnrWK4CLoz9qWzarAlYCRovcMIn7r74GOqUB8MPiKrH02xXC9s1l6yTHaDY2STl7hkRIRqCztuDueWBxwsxJdfgt3i22WRMsUWqHgUz7VTNmW2oaaMF5E6By9ctJoxd2sH6acHDm9XrXvrnvSb9InbwjuX0hhYUMotyamYa1Odxh0Pi7%2FG%2BRT5QPaDK1O9c%2B3EWYeW344%2BeHJUS7UYlGUN3NKPWlrd3BvYiAQXhjxQeEvkQ%2FdyLp5ZFMIgeMsHLf&X-Amz-Signature=378c03a3d74eea92d39360e088d5bdff1c321daa8dfeefe00f08bdddd2b2a87b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
