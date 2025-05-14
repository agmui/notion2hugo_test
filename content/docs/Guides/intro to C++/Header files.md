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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTMLSLBR%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCqSCW5sqdeGSqvYVMWMOj5%2B6bi0GFbBHbcMF%2BSq0sTLgIhAJG%2BE6Qr%2BeMTSB0rqUT6r1BoUm0jfj69oJbLqsiavoc%2BKv8DCBEQABoMNjM3NDIzMTgzODA1IgwcfvChs3EM4z%2BKpFYq3APQ4Mesx6NKGptuZUDlUNLv4AeaGxOVNQk5B5uPhlEBJlBojK6LpbtnvFqNW%2Ff3OBY%2BbkT7lkcfxmRAcq5wzFlAutwUpLYEE%2FjlDtVocEvi%2BuqvlgGeRcnf%2BH8JqnXhCUAcGMwLtd8fI89FyD2v4X76UVPTe3Z0P9IEGdl5Z82Ms6fiG%2FAIqCG%2BzuuWok5VE2CqnOI%2Fq0x84%2BMjQLHMV0cDJJ0sgMMFp2S6ryRJaNnGPHj%2BV2qKqOWyMaWCFo%2FFYwCz%2FYh%2Fh72ASwgXUU0GVkgdS0ljS6oMHNrWoqfi3qo89eGsRNnmZ70YmY52h6EzR4%2FwUhHGjDOW7U69JpL%2F6Ab3SaMqyXQcJ%2FXJojB98yPZEA46pIpk17t9sE2cMJKbLjC8Sjknj5yZ2rKnV3F75MgTzWRRKfJseNTJvw8hYsjkODdb7Imhm%2Fv5ra8j%2Bq12iQ3Z8u2WElnAs%2F2EEAlq2RrCIRBofz%2FqaniZ0X9G22O4%2B2MUGPX%2FjpUUJr4ydAZo%2F9UYo9ZkGVhCxODErZLu3tdSfFCcgw60dIgywh6Nuaxzgk3FZDG6s2NPkPvDVsxwWMcDBWRseIRf%2BxjQNZN3PavTdFfvPTTIAhe20Hct2MFp%2F1Pyh5pxCaDKA8Rh%2FzDhnZHBBjqkAYqAT137Dwdepv94MFBWFU93yd5UZcLylpVGLkyxb1d39waX7tuKMm16GcXqSOkNPaSzzQFnsy4IskIl0Vq1NUOcc%2FKI8sk25K3%2BhROZLWZ9slYslRwd1ayzEVtpXooRFKRQux6lSjMdo1GJ05EM6Qy3KmAsuRpzCstyUJeZGEQAhelW0I%2B1yKO9wzUsyf6BROtUEEmO14Mc3%2FIqmzreYBgpQnhn&X-Amz-Signature=d932c08283d909555b332f33a6dd4ae2c249f62d580f1d5e6a7069c23f17eea8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
