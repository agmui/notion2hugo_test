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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J37GQXP%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjdkQHKZbDSdAwePibmJ2wAuxolNORXs4Xskos9cGeCAiApjsc5IJhJa1BKrJwwIdzgz%2B2GEDwQfHmGXfkopfOE2Sr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMuHqNBbsWpSnTcCOaKtwDhdwDnp7aiJP0YFNaIOEq%2FCL5nGxIHPYr1zLm0ZzduzZQgLkH1VSbYg3rTgyi8MKlSGanv0JUTBn4dRz%2B4FL3XsIQb5sPUnmAkNEjFX9N5oY4sLyN4SZJeqhTfcopiZ0mjjlvdKZkiLqb1tLZm6QRHhuBhwDgW%2BHqJZHdgRgRg1v0VhmklyPB%2BEEWwTjgny7SB8AqQ8GoC45oamSLVCHgtActkseEiDyk2uJ0EaueUzDKpB5CY7tRW%2FB8XIaIUWcM9g6bMF9jG9nMJvO90kDM7%2FbV2q6sLHZLkBnnDDzrdgucWVLRFhc9Fir1EVsLbqDysSoLRD%2FFWdUOIDXs9GmlM%2BpqqxIU7gA4FZ0GJn2%2BuFoTzH37lSFK0d0z75Fs9QkVbtRSMPBNWpbGSROrWH0xSb91iRWLIWC%2BpNufCGtvhks8wiOojaQCab11I3q2Q59tsH8VcKFmTIKyvSV%2BkBesBd3mntaBQTMb6aaVKdSgiFTbJNnyNaMVPMvjoh4BOqzditGexHXhEXycsjGjDcCTGEoFOojuOnusFtg6TKrNp8mZ5fFHMC6JmRJ3Is4UqIg7nz6Wvx%2F8J%2BIDrLxn4syvc70Ada62GThqLzItfgMkAdyXv0BOpeJqIg8hAVww%2BOCCwAY6pgGAngA7RyEisijwYUdEUX8X02OVIaXMyZMoOF7FeNV68trAI965D%2F1hnolWxOsRnTwFt1vHcCq3HQyy3J6NfMd5k0loSgIT2UG%2BSmxUst6I5CUlHRWRWs%2FY%2FxxEE5feKx8fvmfRoIHEzIaZvUC%2B%2B1qu8Wyg%2B5hsmC6f0YpGv2s4X9vTtD068umdGDBDRrgHDrj7IHi%2Fmx0F5r7BHgvolB4BRRsUFmtZ&X-Amz-Signature=4ff6aa53a4d3ed5785343bf496cf883bbbc4251eb0c80d7333c7cee8d11c255b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
