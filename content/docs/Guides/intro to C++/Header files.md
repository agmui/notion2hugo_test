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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVDR2N2%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC87C2mFXf7qEgy2YeszM6Qxb5ILV6SKPEL9ZiAhfPLWwIgfn7sXMxT71rYlFXIJKjwm1VCNTSS08AwVLCgCsYTfRgqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJXuksXRRzBU%2FMoqCrcA3PNsIR%2Bdbn8aBYUXQKtF4osXkzaVJ58Zm7OK%2F4VQJvAiZXTSW3khhLUDrfYCzKk%2FMr1Lf4tc6NY%2BbqOhmGI56FUUKc4FvbdDWRvQBA1p3ridHteBV21S4X5Ct7QBzKaZC96iMwtxWSBKN37XPN174hHSYLIGGS9Mrt%2Bcpljc5%2FrC2h0zPmWqfvDkwjM0nTSSjgE4yipn2dpJIBHGtBwXsOjNsKuIRRZixupe0QBgqK%2Fjikty5zqSlkX%2BjlhU9g%2BIemmmE%2BYJj0ngqGSgnse5Qm8H0csmwanIewv1XQXHpo7GtECcOOOMNMDVc62DH9tUhF7wWYHr6IeAOPswvcXXZzRY5LO%2BDjkbaJpTKe63D6ZFGNI129DSjxc6xOCJ0NFUmlWTVquQ46xy7rxPDVxigBpIqxfA1yO1grvsCQjAsAVaicOOrf3JhgMT%2BDDxQ%2By7SfpGZopE6KYjpFQYImHXz5BCoBtTdqnM7au1KSl3XGI7OP1JxSYopcHXBqXp70s1ym67MdAT1p1muP6M9TIR4HUZk21Awqtf1NBzLjEg%2BeYZolhsxgyGshIWyhwYQnBYoKfhO2EQDrO%2Fp4Y5rGbF1Qg4tl%2F3Mezpth6lhuSVgt8CGEIemSQYf7W9eFQMMnE%2BcAGOqUBK4rF0b0Jh3zdViCuN%2FfGIjUP4GVirW6FT2FwiF5T0tkJRBhes8GNEofinuKirprou4T8iCoNsGCqmrm%2B0Vcsme%2BETWwA2wx5mr0%2F4Or983kJghLVqzXrfl96d4eeYNrg6Fs0qZmeIxrTDkwTHZI4sE4EIfyS6VLmWmk5NK5sDRcTVvEHPyTzcPgsuFJNGZBA%2FO2dZHhpWFY6L8GOiMqaf4u4oRd5&X-Amz-Signature=2f8ce65ab627e7775a6f840a33eba42e6d059a3c4478a362bcceff591207ad75&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
