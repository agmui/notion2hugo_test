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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KYCOGEY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCkDNQdy0PNMmBQ0UeApO%2FJvA75b9h765u786zgMxUingIhAO7QA7NjSRPzgAtbJkiKTdx640enypvwxbbu8jB59ix9KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGaVMENEF78kSlvh8q3APBNLVTJH%2F9rQiRelSHDOrOd4xLoMGActVHpIwfQWIRIoE%2BpH%2B1rub3bIvwyjpbwkrLc7Ymgqi8%2FCg%2BJjAZnHz3gxRd7Oo8HbOh7PhlE2yK%2BQuyC0qF%2BD0HHriwUkugklF9lJGAWYP%2BtfIYnEbt7eUwC%2FYV3UHa1gTl9YqGHQuHdU8%2FlHOybJLHWXupb%2FQdSZLbaL6lww14APW3x4SiC7GyPVODgZxx81Ci%2FyXFfMBLGxYDXIBfo9N%2BlRKPdhtwGJC86Q044GzfEvBgxlDCumHENszeCjafH0%2BAVemBD0uZKdYCuldZyg7kH5N%2BADyPMu6Z13bSRWgHY%2ByYHhaDDDSKrvz6O6oH%2F3uQk31mHNCd5R%2BpVHJ5i2563sWrePAv80NfmBdLkP8sSoOeL2YPBZIvOUKF1cd8fJF2fvDLa3N%2BK45Jy706WP6DIu%2BxItDRNQRtnnjw02WoURgV6KOOsWuyQTcoAyUDiUiOQIlm0EMs57puTYEZwE%2FXhhj1yobR9Tt%2FoEWtpwLr6DnoSC%2FcUFtOd5h36jPUnNPehZpv%2F%2F%2FqRHhhMQDH%2BF1oVbMki2E81aFOlS%2FhGdWfy%2BkVIQ9ZH7419JucRIr%2FqXzMWj7cYzjr81tsezoBvQvcn5DtjjCBxN%2FCBjqkAcWp%2B779O%2FaXNiPXLeA8sECm9zCUxF1CtcNS9GCc63u8eiFFItZr%2Byi0Mys8LsrOcyQiSPwmhBiWLsA5oSH2Q%2F0sX1OrWDZcJsReC6V%2Blc8%2B%2FanldR1Fc0ti%2FeWkT2n1%2Biq0zyKuTzuOZMZjn%2BeTgoinzXT9VJWQeYqlb5guMEfkKcMySAETWzLu3ENVPYnjQvPnwfjSDOv5uQoLlEcdMX2vGHu0&X-Amz-Signature=b2a55180b84ffe202d201b37ff3a97fcd07f355a21d59cca820c53f8950a140e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
