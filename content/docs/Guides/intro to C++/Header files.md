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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UZTXIB%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEGabI5jsnamHMqiSiB9aS02xi4ycH%2BPyR9MCdwq%2FlIsAiEA6Q5xvurVtoRFnq7s9ZiEmPUTyv%2BoVTJgiEt5qmD0uV8qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAouB0mIhfB3yfttiircAxAJvlbCrogN%2BrzK8NrUt4qR9LcGrN2Ce6cvVsB2Mss7UtStnsMIoVK6jTW79IfVQXCvi6YyRPUXSDgLA3Fd6uswEcmdd3reg%2BGantaIQfhqbAJIn0kOdIzsSRbWIyRPB2Yv3kfKqcD%2B4UcymByg%2B5yKZgQ%2B2e%2BV1kZedktV0pYl6rychOaYf2Y2u5T%2BnXWtKtSKz1GTjJfYONz0J1%2Ba53XsWGzOGGgisqsovntaHixMWurySkyd%2FFflxJLjXdAyZSJ5rOkqtbmb%2BVLFDSBHoZP8ZgrtX%2Ben3HRD%2ByZMx3uyR2jlEzPJ9LqobVRQFoKAYn60ofEQQneEDoiJYOeV%2B3O%2BI%2BYC%2FM8crIiowNgQswJuFqWO%2F6FXhasTHeQDp7iawfId7bhrUIXal2DqsAHgxD2ZavcoiBt5fR3%2FtasaATbS%2FtBo49yfRX8I%2B1CCl0hHgHIL0P%2FKtFNCNK3cyk1wDapL4k%2FjCJj9GgHDMroVZf6PgIbHXofI%2FxqfHaeP4TEu6dWbxwHqXzDZu80LSbdU21dZNIUF0RndjTFh8D%2BnNW2OgfFpxwtk3QOP6RL4CQ6a7TZW2iUYMm8NAhesKO%2FPC9XoYjbHAPYQ%2BfR2huDVkw6PT4R2BQTNG2tYbVPUMMjegMEGOqUBi0KIxqzlfT95qGd310e9SSdyTIy937%2Fl%2BWwDOFYiU5JieXqbsBjONxVMxHqUfanstM3PvydCjCILLP%2FGOm7se2tvuV2aQF%2FnvxOTqv6s7BH%2BFfz5md5QeZrPcukv2apX7B6cNxpZRLydh8mH8AW%2Fx7mb9tu0t8ysLA6y9GzDB5Ai3x2feAdYoPFfcS5TtaxJfwuCS136kPzI0ETXMPmcoDhclhgs&X-Amz-Signature=9f389746c91d544a7820bf0016d6feab0499e1956c137afd8f7c1e77fd212b5a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
