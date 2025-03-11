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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUHSUQRO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCICE%2FTZXhuD%2FNTwSUHv0To2cUvJYW6op5s0JJR2Q4evlOAiBv1OnUcEVJpxuk01DO%2FC%2FL42Kd0mAuHAgAS2F%2FZSkjTCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8BnlbrjOzTOgeujyKtwDdiIBGy4vdCo28nCE0qby8tJa3vh%2FaRS7m%2Bp%2Bu%2FYTJupMbdeVwlmZTzhQBlTqs7tFvDnFEX2SaOd%2Bk2N%2Bn9mkCI9r%2B7AkfpPs%2F72lIV5WcU3y0unzlo4dmrUpPIW%2Fq%2ByPv5p2c1CGgS0Dd15q8ndkqMFK%2FiJmSilLtjpGYYjhCW5usTyuM3%2B2%2B5Mg7oALXMTK%2Fc65OkeajzeBRgWaH9UhHdf%2F7mjJskEk%2FuGOJ8fWL09NzgscZr2%2FPH4ewh%2Ba8K449x3f1ly%2BmC%2FwME%2BmvNueDOXCA%2BYQ4o%2B%2Be9NSKr6lS54W2wH7FZJ1Uldd465bknUDtEDPyUdh%2FBRoWlvGsXsxBI19f2Hhr1ZH1Qu%2FH41606OmEHPGgAdLn1iQgs%2B1arOVV0FjIhmY8QXEl4hvz9RHDrbOStCqiRd2oDc3fzm5n1Gyj0%2FqWeH2xkfnnnwHTdfts%2F68JFM0Rh3zWe%2BsflhBccT4Lmswhe4ufKtLKA8hvJXB%2FNq%2BMVA%2BL2wPCWRiETq3%2BR9pEmWRv3chrtbmquOf7CBN%2B2%2FRBa%2FAnQ8TwDBmRjqoifeRmXTVAGEEhFgRg0IrV1LUHRWOjKSY418v0tt9FH8JK%2FLZipDUocjO3eRhAs8pX4DEAJv%2BJa6qmJkwl7C%2FvgY6pgGnOMsteIwdAVNVWw9D2zmMrB7vhj0cfgynYnIjBgQ4vvRK3gX6K6C3Mzr6h562%2FsmrqdfOe4vbESwYH7jcWPgPhBvcKrCaTfxi6oj3aDwwldNy6G08zF8csHgIyteY6flwRQCrDjcXCdg7PDMZxp6uT14X%2FTJ9hvvF%2FjrnP9J%2FakCaNtcc2WngGKtSSx6jAk8G1%2FA51uzaFeZisNwpny3Rb5e973eM&X-Amz-Signature=a4ed7ab6467625a8595b10c3dc61dc9441c35e275da518468b27c8db23c19530&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
