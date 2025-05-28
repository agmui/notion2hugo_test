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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLRY67T%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSGIboH6%2FpavycPzCtg38xG4yh4jEvvFZcuF4APjuzXAiBQZToNnntS61FnSsBtFzIkBlh%2FVfmd93MfCRD7yu97wir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjr43Bh%2F4W3JPSG7dKtwDanSev89CYQ8HTP7P8xBz0v8hx%2BKIzTGCItVl99zTm36kWiJqZADxK1javvfEbrQclP5p%2F0RbIhQi%2BV22%2BHMfGnhCGtK94flb3VPr3RAYWKCaipn%2B5YoUwqufPCA59THYwMTWRPpacJ%2B2Czk7H516golYJKtJNMzLR0UG%2BBjpnU1iqgW087FkfGlXo9%2BRAANG59YCE3HXqlMaPqKQlIVs2aRtQli6L83UeICtCTtJZ83Fn3zhbGw3kzcQMLzlVuGP0Vp7KvJ9u90luJlSW%2BVRQVK7yEorE6h%2FRG2Y5lX0iD3yAIScK9P9C9nEi%2Fyy9XD%2BtdAoxsYEa2xBQ9J1Ph%2Fa45rPPL86djCd9KtX24rgSaHpmNAk56RnIsCCP4rODAqu6mYCkTNxG76vOjSYG7%2F5oJp5Bds3lrmBFLukjeSoT7I1uSEa8lrGhOn2aKlgzbcxOTdHv%2F99HAiZnY84Z8FvSWJrcoLWi0idgOqnfvHGNsd60%2FEU%2BvaPRX9r8VPnd3sq7k%2BPN9JH0YDkidjAwCYaWpB8htxE%2Ftb7k06P4TQDAZfuy8CjIeC1kj39vZOC1WgeS%2BsPX3Qu3coK0yCdOfn21RM%2B5P0lbenWHXGgwTRssV5Tr53WoXoOVnN6o%2FIwq%2FbawQY6pgGdVjmdYHWw1YXkjNbsdz8vk4sQWgPwQ7AAFFsGgqkFNg1q8guTbMg6DF8x7gJa9cqpAfe59zgwBcR8u2h3%2Fn2%2BytWBuTfXEatoWDeSDvoKOJ2AXiYxYv%2BnGg6R3WAmY1TRsoh9rOzNbylf9Hz%2Bj679BZaecSyOdV0Ix45aV3bUkJ6BBNYygrX3K86A0%2BTOjs77MHwQBb3U8XqlkwZ7bghWHpwWqSwG&X-Amz-Signature=720883d9cdf751e3efe1cc2af25099003aef53af7eeee504cce261ec7e4dbd5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
