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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SILJKOL2%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCID3cGX8%2B0ToE7rdJe%2F0w0LSUWOBv3BD82JuH%2F66KHVJoAiAsMMkmbQ2odxYTTB4uJ%2BLA5p48qkpqNASAK6vSTpbShCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMvD5lavFUbGM8%2BmMuKtwDQumuw9aSHsfTm5X8uKO%2FhqeAfs4YV3m%2BPSJBwoAvDozPpd0u%2FLPvIflLeyufBf95Ezu5mUHOzO8xzTkQzrjpBj3L8obvEzCXAk8VcmRZhpezpZzgsbUxkpF59tIQHAVIsmepXpfob3kpuZQ8aXBTMGu56JAEK8ZwWSTAAd2tvjsgnH6R%2BZPgCJU%2BCTr%2F8uMTqTwSlaNXbRDIGcqK2e%2FRFWg9KkeYYjwQXaj2KRytfmXxDN%2BrNRKts%2FOnl3qlamY6mq7PF4aY88A6zDSDd3UDJaA3jTmbStCA3Mia6OojYEsdq1uBy55zPronLHnOSlBwXM6w4DztF2dR5BT%2FgjNTj5J459%2FxumzXmfiLUsAohH4GuqOUSFnX6OffSCzHn3e1xEWI%2F12DuC9gVC0zf2HnfbR93IlruTKvOa52BsQprn5IePl36EjUhMOUK47nD9UlJX6Lcrv2loMC5TlGZ004mRh%2FfrQnFrfBsuip5bvobyM1gueMv52RfnVMrecHdXR4cqKLjn%2B1MrIAW2vOU3J7Izhyj%2BAeBtVkbasOmuQ4ejIMsn2%2FzYwkQ87G%2Br8qmFOhdyZKTcCW3JtihYEDwN7B%2BTyYysi6Dld%2FYAghSpKcidE9%2BMV62sJpx6DdcwIwif3vwgY6pgE6vxiFQLEpm1SzCKvWgm5dzCL%2By48DcPdEaAZzswkg09wkUdpHoyN4ajKBXhzKhldSe9ha7ToJVLcSXB52Z0fY%2F1F2xoELY13wgaJFPGINU1UtiObBZsDwlx9rXV13oONnE4qU9KSv%2F%2BXyXoWQY7l8RFWOueVvEwFkZaoBcleaA0Fw%2FI2cjowS4oPZo9svb99WK%2Bee64m1xftPx3xOEZM0bv9jREAR&X-Amz-Signature=674871fc6b92e96b61425ae0b967752e60782d0c5c0f28ab13ae8f2079f296d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
