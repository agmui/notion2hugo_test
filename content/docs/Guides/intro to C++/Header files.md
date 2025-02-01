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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IQPJ5BP%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs3gKLQPeiqLQr4E3yMRC28ruTU4wEwLd2eZR%2BMjFDMwIhAOPI0kcowEbzMhjGhB13wVSX%2BgH4muX%2FLdiIqurMuZR2KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHTSxVjruzlMGFKfkq3ANBGXUgQyaR%2F9P1IR2i51EpEUCwLpA11PasW5i2yskgrEVuR2g%2FUpUdECASWPzG%2F5JY%2FFLNdhKeD5msEZ84UC2gX1PzbmASIYrx0IVc6suAmOOvgYXyajVCfrDmqrR0YXYYSQqYxjjqiDiMk%2F58tscXHGVhoNzyAGOPv3bk67tskj%2FvCAyE5zfJOEQuE%2F2Gn5plzqKUzfnJa5go6ruODSPfb%2BoTvzdah6KeRSxt%2FWcP1MTLOr2xZALilY3z%2Fr5BP3A6Kfpzz1XFw6UK%2BFQSgEO7gf5%2FmKFSFDeRI%2F%2BUaOPFpDLOyGchl0QCFSQ9dnNGZgEvuv404wTApLyqSWDZ5Oh1mN2oLPgzZjUKBgKjZxlWVjtlmbyBauFrQYJGxk0IWfRXgd1kb9X2scum0e%2FJ2%2F8IMPknL%2FOJ%2F85dphiFYIVVhpTw2lXLt1W2gjhdzByu%2F89g2rJQRnH5JLCYbbtrKcEHIMSRNeesU5niRJ%2BUD1IOgIG2DCb%2F%2Bx052oOtCXuSvNPG9Ox%2FY7V1GLcjt4IEMLqAFoZcshPekRrPJG50mZQD16u%2FaicAxStM4LdHmS93s%2FgxhTTjqq%2FX0doan8aNsLnyewVk4ARYHEv9yun87a5mtIsH91K3ZK75CcFjsjDrwvi8BjqkAT%2F0UnekI2HFjQnk1la0BH%2BCUonMUh2fYco%2Fv8FguX5LzFqxIKU9oKm9GzKHP6UyfT6a3VS04UjaOdjzRk%2FSkrwjDKq0lTxJxr%2FQ%2BcrgJy4sIgoxjDuUWllDWJEWgzwY9yPnf0OEjfwnm9lCAIvt1AsFugC1GqYw3F%2BDLUL2uRdfAQyAiNWhWI6X%2BTffS8lflRktIrBrxKu1lb%2FZeIkHNibgHL5y&X-Amz-Signature=26d2a0981dad628f1d873230ca74a00c05f5c1ca92f07e002efa1a3f27e2fe7a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
