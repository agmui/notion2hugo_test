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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEFIM74G%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuCOc7aDigA6%2F1kB5oovu8zH0GerkVcYsIv24hU2mEuAiASvA68JFeZiuxyJCC6JYF6Txhp5p7IfopqjsI2xQLhrCr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMQYhzxt4lcFIy25ujKtwDllsxV42jGEMP3FA9RUKzjNpoY9aHaqF5r8EKuqgZ%2BZt7kNt82kFdINbROCp2WdQB30fQlAQ1dFkLvgO1b0kvCt9Qgz10sErwfCBi0Rhng%2F1EuWMwckkvpdEhC51slC4Rigu0ZmKt7R%2Bwg8%2FQJvepT567xc1wiG8NYT5HSjehhkMdiZdSqqG%2B1RcPwgcgURPgQP2Xf7rs6Y2PAHz3W2Ek6X%2BqTtvh7P790OjWZqGUSNE1wwrBUTIDYktaNbyn3cbUWgC9hmiWcqqcFQf9O5F0rvL0gmfoRYcgoga7EStnTXEy6jJ7Yxt5RhobNmweJbhrzbt5jdUlFXmhwNSr8IRyLIof3IpElBmoQZTbjx0FIeLDCK%2BhPLlAJIplICZVus6NKGL2xIDQ5KUZ6V5LlMggh4NEGN6cVYxWEoaKJJ9aOkI%2FNevZJ5f2eVTrBmk54s0fr3shjXdt8ESkZJ2jRDOtebbuowju6fuzVODrL2p4ONLAI%2BRLfdQv2z3KIqKOEAPXIXvfmtOWtPbqcj%2FHnAPGMc4s17Np5cnwm6LUQ8mgH%2FQY6kvcxmWedInfWmnMB%2FFt0RYL7qk2DAHsmeecd87mrLgb6DVaSlOJSsl0U4hPeGxietF%2BR81auLtM5dowz8%2FhwAY6pgFKYInD2N%2BoauLG%2B7vR11374KwlafJjjZy7OpowMOtAe2ml%2BRxgEsDdeRRwXfPPEYFVKscYs%2BvcRCBSN7fdDdyd3lrSFEgM%2B1TL93yIEqU%2Fx9DzmCh7CkgYB2Yt2pfdiMcSSQ3DADXXiZbIw3Gmu%2Fiu3hURXmjvcgID6LjBGld3b1ji1OwW3oNr%2FnrUfjXOMSl%2FY7j89KIb4%2F0%2BLa5DOoapk8RKqEwY&X-Amz-Signature=fd663d8ad215c4492e92289bff69a4e5f987a40403f8ed00f2ef3131801fc65e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
