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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F4SDZLC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCIKSzDQ5PO%2Fzh4MyV4OU3vM1PXHgpTeXO4ygfwHbYwPgIhAJwABEoL5trcyqgOxksKWjp6C7GbTEtbApQEJDz5uECDKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlbS0D8miuTAqHnk4q3APOiVDsSTTPSb6euSCcubfRn2x1MwUGhZDtg%2Bf6EVI2KqqLclrgaLCBAQvwNCA4M5y79ugnAEps1sxMWPBUGnmWWFcwPMBV40lodKxJ7gxsIs5SAKEaR86zpgAa2GdvH5wmhfp0bf9XX2tAbI5pwAL8%2BC54DrS31N%2BpKKx1iKZok4lDoHz%2Fwx7yewnQqh2v6Hdnk%2FWtkcD%2FLbdJCPWVRk06FBgnteHOj%2FHfhcbrjJTpJ9cN6gDD6MIwd1QCmR9jjPPpx7htWgiFSCnCOl7BsuNggR10SgFAtJbg5zWiOHxkLAt%2BOXNL931UlvI6Gfn789%2F8BQsLHHmbP94KRq1nDayRU53w%2F6%2B0crg4wAeGAJ4wgY44uu8yCCkcg9LIbsKxOEA5%2Fdvrfr5amwUBcPnSNvBMYJwOCVXpTZUOtzc%2BHPveig2YfXujXBGYjLDZs%2FbWTRNJ1X6PyHV0RuZ1JUjO2Js%2BQ3Qov8%2BvKY266sQrQ4QwuSM6DASgp%2BNwKqxasnOO2Ffh6IdhR4mMxH8UbGxVr0AZWCxgd4RRtEdKT7qXHrfe6e2EgwJQJHedEcQeS93NkBcgMFuGNIOJdVpsRbW%2BMGileX2qddoDFZfgrFsKRpddlfXEM5Pdv19fa5vbCjDJpJLABjqkAXrhyyCoQbVLAP2OpCxYH%2BDUX%2F8X11E69IuV9%2FA0TrWOPhDmCGjv0qjGmoXIWIIWwq1VS%2BKDZ97dGgLqSuwUsciA%2B%2BGEEzyWd4nCVjFExSNC40Y4t8x4t5Q6qbNTlSundGI%2F7CnP6dqa02xkMmqwaoGBz%2B3AE%2BdLLd4Ezh6Fl6%2BfnVfr5LLEeNnaQ%2FT0RLs2yFimeKz8nyy8Hn1NCAR6iSRblUzR&X-Amz-Signature=010b3fcba81491c98b618a6fb9167904b6ca8b9264e90a70cf4a5756a3ca60c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
