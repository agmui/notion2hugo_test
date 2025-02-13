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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZKK73MN%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdukBxNwOVVEVesPaTc74Q34gijpgiIFz%2F%2BnjuFPkyZAIhAJ%2FBqCOBhbtK%2FYb3KYVb2OA%2F2M663XBeOdPqMuEPrvPIKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgPMWynqQPNhL9hbcq3AOnuhSl%2B3dCXJ3dcO2TjuA9N%2FM6WYeyy%2Flo3RsELE98tqVkPe97a0HSDAOvPd28BCI%2F%2FgdVDQh8QjJAXO2q%2F674XxMVuikjeA7IYnwAl%2F8UxIo8fy1cvcZ3%2Bq0FU1LM1hc%2F0ZMORvLrsf4bxwfK6GSmTdVzLaNc89mIW54g1h51bLYWClpsOh0UHfHrRwguSNaKFcSuKqRCShTwyYqr9FeQpVRrEaQL4lRlayukM7Pn6v%2B88aQBetEeV3oOkf8Q8bfTFn2%2BNXlsCoJvWg1Nia75rQWAP%2FfpqKW04UIfjoM2xPJCvcwMzmyQmEc3ZEnhLgLMYbjyLY8ExWHxy0XXHf4Vd9RBdp0LJHteuMOFjvBU4xzZDl9ti%2Bdju1%2B17DIG4ihC%2FVDW89qm6RcUH2G1XfYZD7r%2BBpjmTf209cR0DOWC3vnlJmL5YXGRC4eSEzTKuiajHaSbURBgHal5HGFxJivnatp9tTO8XeoHe8CnHMaP2ZChtHyFL%2BxNXyA%2FmDgqc4%2B%2Fo5w59fxvpNSZsh2Uan%2BY3dDpMYtor4gSE8qt3hHyrD0uJZKqH0SM2oi6vD4uwuvc1iv8SwWxW%2BhuVjQufINVPdBr4EvQJ5fygXU1OTQ6X3bh8jLslNj8S%2B66dTDujra9BjqkAWbIHxDcaI6B%2Bcj6DckA4oANkKDu8LDMxoHLGdD3g72gL5wapLCgqEO5jAgCZSR6Npp3i9i%2FMuYjF4rp5XwEx%2FWmfWJHMqfzHmDOl8MxnwgxzZ6rU00vOvVWlfzYANg58NQppCJHL3S%2BfvJMZzz0X0tvadwCrJxYE1KOWtoqcRiSVietMdbbRMdGQT5TWI9feBA2E3zbm%2FdeP5ujAxu2LgOTHwIw&X-Amz-Signature=2af1988a1bf5855456d01e640ad001585e37c14a0e7bf6f597dcc298cbcc9b34&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
