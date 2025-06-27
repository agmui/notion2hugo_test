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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WKE55AI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIE7jvJiyBTVUDpvdOWTI96aM3hTHzlKnlQg8qs7%2BSkpnAiEAjBreLjtBiZr1HupLdln0rCAcR0y%2BgpiCEdGsXH7nr9Qq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPBg5%2FxD6%2BCyK3fFcCrcAym2mDKE7gJdtk0agBc8Pk2zwZSclOIanFkYXbBpDTBlr9C4T4kpBjJfJ1apZR1lKj1UST9WiNEK2bxDywlaL6hN%2FSoQcDYG9ZauZi02A7wzJrAv6pSAfO%2Bc24jQ94z%2FsonEjc4EGX7sETB%2BQiwa4DJZLnY3xMfc0E5OrPqwNMqwWbP4svXyKVQJMgu4SmSDTbHjVchgy3jKkX4NgL5m3wsyQLTveN73hrpVd%2B0abwe42EfJpmuap%2BRT3z47LjuI3I88qtsXugq%2Bhrul%2BuBVgCDVklkQQOPPF60dxEQ0pQaNxoMBqJ7WvCvbp%2FDuhS4aiHsH6aaD6QKB5o1OPsgx7ovwQ2NitTff5kk4Ij%2B4wEDwVQsowDyyibpyZ26iuJLETsuBcPwnvkKw16n3BHukRZCz%2FpcBBNUstltNGvHRGcj%2FLpX8K7TcgkiT0ozNwtnmEE4jO9jO%2F%2BARKB3CEiyRrKZezIs34PqI82w282KqKfxYiAWQ72dsQGyvXtPhLtBR%2FYXizEmi4lRXO%2Ft7ea6bDlnktlwy6JnIgiSmpCPVBjiEXdfkvv5Sk6kXMQ%2BB2eELqjwMjqrOJKx6G66DRTrH9AIbOOnMEWM2LZZT%2FVCt0jhC4dw9efGOE8pFdAmRMPrT%2BcIGOqUBYOf06Tf5lQF%2BN6V0oRhSZVK00jklf8VmphDp1YmU9%2F18Y50ePti86fB4TVGyeByEPFu%2BB9etgWxJlcFguEFieOQE09jPILsN%2BHi%2BMareRMJKNLxO6Zt9zC6y3ed6Q110Vkvcv4Z%2FPbtH4eXWacdPEnhhTp6inmSsIlTFASnicN5ugvW4xXpWbYwIEqDjIqlft0BP7cXwQrL1sNcowO4nZo5r6vOJ&X-Amz-Signature=36791263ee3b013e1a03cf1bbdb032025578a014f357edc2226b5b930ead1d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
