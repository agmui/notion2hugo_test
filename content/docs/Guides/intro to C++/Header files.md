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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VIRMYIK%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwR7CV0PhyVU%2BaPOmE97vdnsGE9ZX2au1N04J4OZnbRAIgMXQa%2BIzj68O8QP6i93wf6rzbPL8Vrc9ORhUB9wS9jXQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHwlzAOxF%2FqLAFCvMircAyF5fYf4bOmHbXx909pfUnO86AfkfoJ5g2s9ZTcwtFoFdy2xkwnDy6CeGYF03ecITQx90wu6wn7SOtJMT08XvAexZiWmfhZongC4QAVDSZTgsXeZsA97uW1vaZUDaix1JRm2QdfwpdgFRhHjMRHoRaSueAjhdEeqreoyK%2BsUn1WXRxiZg4OdSiS9VuFFHm9%2FTG6cL3VQ53WAVhuYXgN4kRrybVQ1hqsvpG%2Fw186O4%2BHuOmY%2FoRKgrtTAHXZyGI7L4LbVSq62hJCX51S%2FITr7q5T%2BDdci1IMWUlLEJZ6NoBxk12AU83vIP20Fgu7k9dtfelc8KDdsbRhif5H%2BfpiN9bf1CMd2yk%2F%2FH4C3l1By%2Fp5Z9frv%2BYAe53InYl%2B3OW0F2uyolErPKNrEsGhS5QiKV%2BA9sUGWZboeLPEcF8zePlq4Iim%2BGrUXHfXwLSxA1m32auQyavNiB8VE%2FVGdVfekxJ%2FpWJZiVzUXO2mL6bkF2TiEqS5grIxZxo7gCtmPdmQFWsKonc1esv%2Fz4AZC4j%2BqKGbL4ejnz7RpRnz%2F3p6YOeVxJqkhVOLG60vdoTiRbVWd6gzsHuLS40Lf9CbwrbgeG6dWTZTInn7MYmFt74UYx%2Be9uKOw3wcOsaDZDwCvMK%2FCw8IGOqUBpApIbRHoH7B1h59gF%2BEHw2cqiZIXooNBhlFZNAGWHMwYN4vr9YORl9Z%2BESxfzMBNAp2vwEkgYEPZaQCDTlqXFiosjAiLJP2TXKT3x6pV4hEDNBNHzeGsMeGYkAroFjvBjX0wHs4TDlnZ%2B5A7YlDMDzOE%2FAXgIXEEaNX4DCLzH9dq9RLurjSI00jY%2FZhsLh23IIngWcIvxAcktHWAouNto1d%2BvHwx&X-Amz-Signature=eb68b2788c5a2e12e6cee3aa38c6e07c6a41da7fdd86334566851a8a72c817d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
