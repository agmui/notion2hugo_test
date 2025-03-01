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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677F3Z7LC%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDvTt%2F1fDY7g3RA5GJVVl%2BxZShBeRaR4yz6i%2F7Fim0SzwIhAIrBUuAmdGp%2FXlRxxL%2BGcXFgGIeZb%2Bwm96b0MnUVndLOKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyt816sHNlCDdAbIwUq3AMtE2ZvebGn8RmmH6vxbiHLnxS469rpxXI9%2FLdKJmZlTsVRbG7QWUlVb5ssDfOCabhhLAgd2gpUDrXsrsc5GNQUmszHSomnySljWyyL4wguLmg6i0VAVbWCtt%2BObPhR4%2BCaxM4PSI1RIr1514qjHhU9%2F%2BQEnGWr2ZiRAY1IjsIS0Jou2XGtb42CNoe5VzU1RjdAqVwuxHAYaWOwrk8CpKFcfOH61xnKRUO6k5WdPATgeUtaQRpr8NJJpVaOCvbsHC%2B3ccFUHjmBAlaXh1WEuLCYaVOLFzIX42NzUuLtzc5h7U9QIHblTxzlVh%2BGHt2zRaNekPEh4YpaxpE1hbRn5AwAS4l1modhzD6a9hliC%2F8LHaVhNdax75HKcAqf%2BC6qcWiMtl9R3aL7CunkjMXJPjQvdhSfIygeIfjMh823jr%2BwW1G%2BWcmlBeWi3QJn%2FkXpPwIhD1EpixKzZSDzu64cQmjOCzEgSyCu3T1%2Fqo5rfmdLJm021Hft0bvCkBgKBSL%2FqX5nlFbbmDjFhKE1kL1llMvJr0GI%2FD2PIZW5STZy3G87F58f3Kr8seSPTu35F4REwFJu9o0iUAfvrnBzslXHvmbXnm77uurJZUol2J9OBf3m8Bjcj6hPVbz7p09jMjDjkIq%2BBjqkAe4K6CGILAfOWmUYqf53bOhGcMmh6PJscHOyrsLedz538iTFYG%2BkKn%2BJCk8R3NI1q6rA600JSdVjESzpmio2EbLiLd%2BOkofj4CZP%2Fvo8eYCa6I4nVSooeNvzJT%2FLclFXpgyeJJ%2Fy2KHAZw6MnHjlfhj3L6Dnp35n%2BnNpGBURt0Dh1r90%2BTLCvcN%2B4N%2FGK2HpTbykkZEFbQ2u1dlnhoRsp0FAsGF0&X-Amz-Signature=0c41cac41441dc415b32368e5b1205c7b42ad880d3ff2d6231728ea9c6003b96&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
