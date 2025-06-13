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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZ2VDYU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIB6hoxhaorwXIV6HqgsLWTHIvYzbexX4muEc%2FIohjpTIAiEA4B5zW%2B6tfAppt71DN1klJdC%2BYhVcliGz0M9tE7xVDTYqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnNrExuA5PmQZRfWCrcA1bDm9usPfmcKh4wpXtAIIGvEfWvi40BAi%2F0VBzsar%2FpBCEf8KPm%2Bs3cE2oir8nAKerNqEc7QoRUXnuv8ONptH8ypl4vpxjBJGBTlyD9jVY%2BwV62JlIVXfM57tGMUy1uKcJwaC9tXQz9T3GnHLaEV0R6w9aHhDG60LrC6eDMEEhgmPoewTtJTi0vly6lEfrxEKVOEuBh1ssKDGgkowoS%2BbRjXdjnjHdIOtUTMw9OW9dpCov%2FJj9dEzS4ynLlI8r5BJg2%2B4zd8IIf9DqLueZ4ni5C%2B0LOZUdmu%2FTDb9u%2FTfB0Ke021c2fIpNJDkUS7AjvMJWkVZNZts0kICiz%2Fi%2FKNYCJipwSgacjIpPbItn62GiJDVb0bzAvgGsOGf0FrUftua9q1gja0s1Hc32x0CKhMvGZCh6cro38Q4GdNxxQGVNReI6scPmzS8x4s4GrDcTh%2B96r2Fup5bHdydHLylmymkv2ZMffOOWj3CEq%2F7sh3X86b0BMNSrjGylGHDJmwOREOSmg%2FBpmG0KyuR%2Fl1Ofhs633y1tUgDolPdd8j%2Fo%2BRkTQBjj5JiVR4g4xi9ekpuAxVT59Idd805r7YIroTA4vjjO1EVPict09X4UbZvgQTSCHkLQLzgAL9D7qrTjDMKK6rcIGOqUBJRcZvZMakGAwbHl40dkMIjpz4U6AqNKCDg5EZp5OJZoMv6SKiQQBdQJQW0ytuDgNNKTEq7lH7nbjV4gEaUQR1%2FPhTzyYRqvsFhu5qBLE0H%2FPbpYFpsZhh%2Bxu0SMc3kclZwsAm%2Bkg%2BPOvwsOPUI6dXN7zJBgyarr0psBygiJmIs7spLiX7g4pf4MlJXWUO6xCHYWgJRKX09rKbPq4Z5fGJXs6%2FPFx&X-Amz-Signature=a88b1b443bd5dd003c9c20d88ff4d83a3dfa6d5fe10b2fd0282f68cf6ba9d755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
