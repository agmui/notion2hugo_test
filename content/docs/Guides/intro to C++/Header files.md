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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LVROB3C%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDqbxiyxpQD0qy3zJsdbDr6s4ULkmVtpbV70I%2FIyY9FrQIgc7xMI6zJ%2BQyPBs%2Bh91OoRwzLc0IdLzk2E6rVF7MG47Mq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDZ9btGxAeGXJEVeaCrcA7p%2F3gwIfon0FZjKEqBHDaHXdVedlobi%2FlIWC0JlnAtMAIPh1kbEz45ct2Cg35w3fqhU0JTWDpqzWKPvCS0hKDzd5PeqnWTCU7chBlxDvmdF7Kc6PMmf1mrDZnEjT5h0R3LGdXPd6sdO3pv9c8pUwQQKkxjbtB1t3HztVBrKnSBHM%2BYoHjmLLHXBOzHndKYhcWuKBUKNPhhrVsdsVhr7YkgHUHt4JHQd77qHzLv1x38rtuUuKpefTGXJONwM5lI%2BOfN%2F5djSSPpeaEXTAm8G2zFZN8LnUg%2B3GtbUJzJ4dUE%2BN6ZhBr8%2BwloXEPxCmaD%2Bi0wVL2xDrBaJyrLCsLbywK%2BhpbzcycnSWd9WzQeNcNvcUeCA1AYtnxzaKmQB4XSkyWSo0J1lY%2Ff3qIuY76zckzMxUxCdT92MjsYny0gzNFgbmEYPIK3l%2BTwjQ8U8Zvd6osWAceQOWyDYc6AKoTCHf1XYG5DuRnZLZv4rXGu9ZaHQwhcvAKGnR61tmOiPRP5hRPeB%2B5Z0sFJwn8sAGjhv%2BMwkx0Huj%2B4y7PMLXv4TddMeFuzgJIrVLgI4pQ0dsOOh1q4zBQeVOd6c9%2FwrCcB0ml20xHbSUjSNe56NzrnydLqL0fN7GUj5wms01lxFMKj1zcEGOqUBFGr9z5o9hSZNu7S4prIFk6V7hrMopNIJn2ZcZeZILezuYUQQiuN3qv%2B7NNu70zUI9gWaKNWMOGgw5x9PIFb29r1Z2FrlN6EZizGyT5hBmWSU%2FwaXBs9R0qEOngGkeX0j3dzPUZqrK26A15tPfdm8uJLBQExIu8q6q%2Fj%2BnO46M0Apea17%2FicV813qELinYx9jVJ5hLAIPjrvBP9CqJ9nJ%2BiVnqxQD&X-Amz-Signature=ac633854f03cb56a0a0658c21913a9c1e54c63be81eaea1e815a19ef2d71076a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
