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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6MDNBGB%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDkY%2FTUIAat7torswmhv9MMqj%2FK8Tufy3XARyudqUfc%2FAIhAMDELHE5BswLRk5mF73%2FbSWypQYk2A7Yx6Py3%2BrgQZrhKv8DCHIQABoMNjM3NDIzMTgzODA1Igzm77RbJ5Tui2D5sBMq3APExv3HZ2FicFx%2FjoBoJmX1k3y4hAR2fxbTbDnpVacu50H9SluibDHPHxNahBe4r3d%2FKCGQ9x5NXAEGurUmXTwNkxCUzoqQFdFCibYVR2%2B6Gtg7p5DWchBf8dmLuZiwSNnU%2FNdhwq6HJ1tOeBuoBdlq3YYFA96svAV9zbPX0REIvCVUfxsEj6wrk09vwyQ0bVPhoOSkelG9Jfw63%2BpmaJtGBFVYRwLe0lmjyMTHgMhAy8ZQPdmk0FxGDZDkmSwL44YdfOLSh86C3L%2F97PvHB%2FA0wwJbahGVepTftxfumOCsEJOvl1Rv5y%2FoiZ7vpT6rh8a8JZwUJdwFQdsjvxVSVj0i%2FrDFKo3wvTVzcrYHhEWqelvM1bwUyjYHSl9DH%2FUiNS5PNs4vcTsBdL5w8ZNM%2B36wOA3%2Fc%2Bj8INRweQYTx49Jf4UckHdbFF%2BQlwdrsADh6mGbrmK99EeTua051NOKHwhvXXZHX0O20P1WGDhqYNyy1%2BSEpqxKUr9gSMWhz626xR3JFvgRCifcI9o6nr26h0tp3zzRe%2By7xGprXfu5qeymTryJWd8E9NliVlbLgeeWzO%2BF8nnEVODCB2l8Fbj%2BPk2LpudNlIKyGVvPRJAx4T5kSLQ3bPEZRYZ0Cx3oLzDu35fEBjqkAX5OhUuxnAVlZdpOPgU%2Fpa1qyYGejvpxYadjPF5vh6HsvHFo8q0u1ZUOh0aUtfgagyb36r27kMPzypnaV9Ofivp%2FoGxGj2LEQge3hbPzCbVzPnbo%2F1X4i6kr9sI0rdkUYlMijqgSxr8XjGVZ0c4RPQAHY9mspID5Nhb3T8AYprMsu4ZqbSOhSgAdy6YAnePi1YSl%2FNLjq8ww4EA78qbPFHpzPYRK&X-Amz-Signature=31b763a7a071f4d2dc0eea559927f3e58721450419bae897825d5543e32c8264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
