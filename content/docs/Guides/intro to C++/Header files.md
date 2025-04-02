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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TO2BZ6M%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCH%2FJP5Q7jzghSDMuUO9WPF2W%2BGYDndaBkg0SjdMsm0pgIgVQT6BpqmMVbDU5xHcjX1j3Rh3YY0GC341XLx7GUM1K0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZr%2FAIfOAnwNjF3uSrcAzLPl0TxquyUnorQJkj6cyPWn9Z2DjAL41EZvMVu7c3F9x5QBR2R48s5cRyDMfah3Vjchezek9u5Xfpn5CKbJ4qGTXs%2B31B%2FxNMpfsBnZXbCYZfvRXsu49hlQJOe2HR9aOqyoiQhPauEgCM6tT3NGt3f6VNJOBLmyvShCB54216yfW8s5bFBdAECdBo7kviOzAXh6Y%2FZ7LA%2BmpI2XiWVMwhUcsnv%2BN0XFyH6vjoQRd%2F6vVELd%2B2UORGsp1%2BwmMhfm5YHsVtCG54iMkUCkB88ad%2BepQJzdBdhMxdXFgmgT382aVA6urUA7hUxpFaFH77lhvz0a3p%2Fkh0LrVx%2FCGBJLgA7hb1BymzI%2BWkjtfqQ26PYqiZFXZaH3Bqa6j0RhbZtKkKrp5pS%2FByXbgdYTlxEIYM83DzvoXfmHrvjl%2FuJmKD3plB8m3FJXkJT53lvsCmTfMXXtUOfXZu99VM2j%2FmcGkvxQy2l4KrbTPBJ86n3C25QDpoWSe%2FiAHNAAxU%2BX81akswk%2Bh1x0goFzyK7KbFwmxLjMGNj%2Futyi%2FTGjoA6jlXvK1h5mYK%2F4Lv82qoleslUWbEubGoFAF%2FHlID4aEJs%2BXOSg60kPHq54DUJ95QB5iE%2BibiezXzz%2B9%2FlTcL%2FMPnPsr8GOqUB75s3EwDRJo6quL0v27OdSO9sybvYp6VJhuiXXpN5wH%2Flc8HaU88m3MHHpMIX1rDA%2Fayua40IQAOb9yeQJqUfFc3dg%2FI%2Fg7lbm%2BOJdK8E%2F88lEj2ZJKMVnZglCE0frusM0is6DWFhthNBN3yTWpaMJlnfmI9MKCq9%2BXgHnsGbFYDXK51rCyZ%2BrmMKnbvS5ZgkJzb8qnSWmcivmzmPu3Hg3l%2BORHuE&X-Amz-Signature=f949794838891a042b012828cd27fbe6996279d89d5d72b09322df8d794f5150&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
