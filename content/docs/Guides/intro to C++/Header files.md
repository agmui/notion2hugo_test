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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGPGYXOV%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCID7IJrEa87JCw4ioWt0OMlc%2FJ%2BjuGCXcMlCsHzhgIUHpAiBhANI5w0zOQGTcDXo6hx659OW9WuYMebPD27yrEKdkSSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf3ZMOnwqm%2BwetbsaKtwD1tBL5bDdHTuJqm67ESN2G7zyJmF0u0DbcZX4K6WlnNmJ7jtW58OSNN1DgY6x4NTgyrq530lyDmPGHv3wHgoNXsnA2oS7jhZ7ae7lwun9irJpApT%2FZ8uc8xEJOkeoP8US8nXVc4BiJNs1XDhRYJqLChIUPEUP1Xvnnk34%2FvdoNRgOgQDUMFDGXCR%2FPAT4PIjAdyqDNjIIUL%2BvyLv3%2BehEfEDlqp2PV2rhc8h4pB0f1srZX3MMe%2BXSZPF5ooDzjNk%2B1V6jJTp3tdbImb5Clux%2FMudO%2Fg6KKxRNhP9hpAKderG3ZHOFasl7xpHeJDo4CoXvY4t02pego7Mr4jP0cQRIXEWtFxd8tftIkaFtMtnHRNiGt9nGWB%2FkesNhmC%2FU6aYGGfKco2sBgVISiG0zmrPO5QEA%2B0ezWp1ylayhIMmlPf00xb%2FhZmoj9%2FlQ2K65AljuYpBhacCrbIb6LRxnZm2r9yebif0S6WFxIphm4yIzn33oea0kZZHlHw6PivZDTeI5jAPmQ3ZXV7vA075NOxtpkroWbRoD54OellUp7Py6da%2FqfeC%2FdpfDrHa8ZTfN4faAOQqo6Xo%2Beha42hQBN3RF205MvgKmThzAVBznu8wu%2BKF%2FBwPcGTDGWPbmgMsww5HhvwY6pgGgBHYXRbuK8hA1TQRZZp1nnzeIe71y2zeOPfe22m2MwEubfy%2BhHaVnTUuNAx968s4Koercc50Yr1%2BRNw7o52NkgKF2dcUJfYyLJCjvd5UBJ4tTM4ZEXLsoCcXe1L6XlQTVWIdVFqAo8hVssIotVBw0jZzOJ2hVDvRm1FygSuq0d6wfLPzuaI8UBd%2BtJC7IARxwO8PEGDEBb1XQwb2b2eQHDCcy9Qiz&X-Amz-Signature=45d588f9d219aa13e187a588e4c42c0cf03c0bb3f33a128f90a8af98c2c549a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
