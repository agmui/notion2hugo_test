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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIYOVN3%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP%2Bhn%2FwDhhXRBGo0s5xJpTfKJZBotNaqS8FZWaJtFdWgIgT9gcP%2FwRuh%2Bl7WbguTHeKaHS0OQmWw8Hwa0n7lE%2BRgsq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEfEWaB03JHqzS0V%2FircA35s58ORkV5OCGukFyzIYo%2FwqEAY1Ymek0BZyUxkLQP3KMq%2FJ%2BkvShEiJ%2BMRtYznfqWyoC5vsn1KRd3hGEwU4mVLk8RE1INCRKiVP%2BfSIoOi%2BKTOiFARNqstmEagLUQAp9UJt%2BH1JaHjij1x6LyROm%2FdJTaGJYdcYPWJUO5tDhp1RB6LVDw4F3BcoaembwmdNvAcQOmU8RdrC3xDozpZ%2FdcfIVcq7jVOfmZkLMkiSPK3pou%2BZWqZbIhEyYxGASOtCTsAtbnF5LAc2ERLN4wAbBinkbs4OKtGKumUiwiZhX4O%2BNHghoxOcXtGg6JObg4uz%2FDyH6Lul4k43h3zchNQC6oDcAxx7SZNCv8TP3cwbjVuaUTYEMEpmMhQXs4PTcrL3kvuLmVp1gv2dKwwA6%2F1t8xsljZugSAvBvkRu1ESKatlmOpRX7%2BKYJa%2FEZXjHK1Z1roExMc0ryso%2BDuR7IJZINYxrfiWjntodoc%2F5noe5qmPr%2FH8u7lbC1cX28OJ0Eip2nvCsh6b7yK3esLxBB23GwrP29UcBOvY7qNKrA0AWwlnADS9GPAzrFnaimP79%2BOqZmh50XtgZtPy0vE1yyabffxdUB92g%2FGcXpis8tQrQeY%2FB6WKK5Or%2B8ymxNQ9MNuOg70GOqUBnTFI%2BlIK0xxBpBujiB7tAEnaJz1Jxzbh5BFRYCuiiUEWTVaCeRfUyEAgdpn7QYDVvB2XOGPwdkTi%2B0R5WB17mWYff9EWjmgu7uMahUgUs4ppWpOdzSOJwjdcPBewEa3BVHB2muD%2FdFttl%2BM9GmfB%2B35kjr54rlarf5%2FEMk7Wxv0Szxc5NgY5PmY5SusmpsKX%2ByajuE1iKhY1xdJPFmRZ%2F0sYxl2B&X-Amz-Signature=6615b556955c02f643378d412f55c95d9f77bc133e373a157a9750f874d32dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
