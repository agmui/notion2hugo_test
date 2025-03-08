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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T5HRZWX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQD1p3ff4etKPCyZr6ov%2FH%2FrRfqR4VuXHduMDi9PrfijpgIgBoS7984v63%2F%2Fv%2BOzt2JuweFEC%2B7iViU%2FC9do%2FfnsoGcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPoaA%2FBrUnWNAs3h3ircA%2FdFZsYlLercYjCqCIsh79iFNJDV5qyjjHhFkmegMs1S23RJfoy72bsvAWSDwbLkPoGalZ096QeglHwMmieDQ380pP%2FYHr3tmiQDwXA%2FPKvs%2FdcnPcGHPI7cNixEMt3uktWI2igLX0oED7R%2FTj0QFTJaJx9EQUY%2BGQjk1sa99hCS7j9vrWclrpNPoUMMVlyw9ICxOEN17vGjpc8g3FjAFQKua3U%2BLSE29CAurzGih%2B4UaxdnxGUQJTiBvwENU8Jv%2BPOeNw1VbRdelFt4say1Wa6xPDkF%2FD9XUKwbu3zcx4EI3LW567Q8bZvDLMPifT5pZM1CiF%2FNLu0JvTM0dTW0Btyby3md4ohldNNPyVLBxzQHt6Sy8fh1Gjekuw5MYOHJRvFVzzR2OpeB0IiKT7%2FetvnVgQrIE07S8kY9bCPQQuzPxoRazclJ9EAPGYJeUXiR29xk7hfpxcO4VOI%2BtVg4sWD%2FrXXJ2juNx1PkgyPmxPed2PxoGX5mWuLo%2BmKDVuYHPzEoD8NnE8I3yakYwjXjxQSNIMgz5aKsSl%2F2dYxWZjs8Lq8YzYTAI4MuFxSdycBElSpKYrYKFa5AgHn2NTW1SG8MuU5URQyNAyp0GDMkiH5xVNl2jaj%2Fr8v%2FDm6hMNmzsb4GOqUBY%2B4mza%2FNk7Vu0ro12cwi8rDi5oODjzpVzFG6Ve8BTFF%2BLt1xXnXD5cjymuEGFhj6XZMVkFtKISzPtWwvjidPRhLhHpsrh2CZE7XQ8NQJEmbcDgwIbA5QKkhFZXlS%2FFwCjG9sgswNBFqk0QxC5aO2JC3x%2FGG4fPyCVncLE8Fd%2BEOFVuIseVh6%2Frg29M3rQ6OXHlBh66CHpPI6kMaY7ByLQ2QbIY8n&X-Amz-Signature=8a941eeca7a23b191054fe4c657f1a12e9a600c292fa80db038eed44108e9496&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
