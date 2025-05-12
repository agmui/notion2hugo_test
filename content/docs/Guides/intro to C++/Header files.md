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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBVWWHS4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIBlSU1fPIlth85vkvikzevQpcQvxDE7GEy10H%2BMCHYGOAiEAnkAzv4ifq5s0nMjAG%2BBEKFbMAJPgJ529rpuWf24cdLoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWvbmIBacbmcVRzDSrcAzHoANJff4QNgyl72M52y1tukL5Hbrco5ZnF%2BTKVWcmpAxYyhrnxz1QayRvOmgnAJQK4Q%2Fn3XwRO1AnQ972PKTlU0X5KJANui0LHr%2FfS7465Yoi5InOWmBuy6saj5ITfJyIEFaOgnDNixT86GFhrnQtg6jSbaOAfSnjays6I3WAjEYaiazLRdrCegFiOZSUhsMpH8LM9KZT5imLsCw%2FaibBV%2BARqKd25POXX5LcLUgKxl7cTKd14pRPDXqL%2BDaLhyOApiP8YAgiZgYTIhZpFgRBZrqz1Hpltglg7Z%2FBacwoH9evIPULwoaiS7ImD2LS%2BdmRV9QaSrD0YI5MjjXX0%2BuDCcWwWakTg3fDy6P%2F0i7ceSS7JJdtlQf2YWybqBlWOl2Ig1aSz8nD5SiFOQM7G1P1Kcc9uWE13Ld%2Bxxe%2F0X%2BhLoXintPqKRBWH4kFQR8eGQqvKU1trGecQnUapZB4xiPHsKgP0EyenI7SqdFB9%2Bv%2Blxa3Dp%2FkFRxp2ntC55V6DAA0iqU3bUCtIte%2B3Yt%2Fys4P%2BW7QSuRtYNAtQR9NBQvhH0miLXg6XeQxNKifMNPr3rkAEGQ8BOrqsBk37Be%2FMNW9dJf%2Bkb81J59hx1eeieT5d0Xpt%2FbZUG7NaNQnYMKf1iMEGOqUBk7pULpHDYDgI5efRiKhU19dnSHqd1l7HJQjO5ZXNYpsDVzcQ01yyofuKPV88wHYBswM9SQFvv8Ago6e5CvY9zxdnkmHQsrDN1niMaJ5E6yGyRnN%2BVnhDM7NSj2NqK87eB5THJ6A44KmdTDN59%2F%2BswvfMR5fyYKiYtaRmyYp0BIFkmla%2F1hzx9ujf52xUtWhP4UMIVz6CcbyyQacyMwHbnkQdAqaY&X-Amz-Signature=360fd1b3ad624722780ec831bd0e0dd4cb72018485e28342e1547e1ea0434214&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
