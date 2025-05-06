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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HPT2DKN%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfkPKTbD07JWNNdz%2F5oI6LvUWD9B7ZnqEXsqGCUbANngIge7epAkLSz8w8J0WVfyF1LiLFJwA3XxYR6DkApC5dKpQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFNHB72dsx4QZdGXoircA6YDNo1AFbFLmRaAweptwyQalasA9m3N2Wiw18Q3dsYQclORMBbVPLNc9wnjItRezcimzBfSTNglJWDyzE2BWFHm0wHJ46lxkBj1XaRa6Wpyl2sICuG1IQ7qoinbj7WhyqHHAH%2FuMQSQZ9r1sepG3mBCiVnBkBM7G%2F9vC%2B%2Fsno%2BOF2x1nBCszqyboENXqOdphKII9BgxGnqZn1xN1D3lF909%2BTWiVYhBuZGbcQRN7sV1EoFBUZHS3Hgyto1MnCq9xyyXLrPotEhTk5UTpesW%2FZkiPiWVWbr2SPM1e6CJFu%2BzwKd%2BQzp9KFpI9Wcb7zFTWgqAMpBNycWoTdJ%2FS%2FavTahoD5SxErIZmoZCIKIKxcgNPCMKoCfjquHwRcTt8QS9A44BFmY%2FfyUz0yv60o9c1vNZDX4Iv5e9WI9h6yOEZjrv5TmpWwg8eKF0hsP6rNFUgzrI4Igy0KoG%2FE%2FoV9QdNsla3CoQR%2FjnZsaiSPuRk5wIWqRilaO0f1HfDv0%2FMhb2liVHt%2FrHAoXOAAawPJlilM0Jj2qAFZeUo0%2FN5eFtYHA0wcB8TOl%2BhyvoTdYMaQkGiQOaOK2FTX4YNwCg7mPyfsfL%2Bnfze4OgQIUyEp21vGeArGW8vXOkcqGTRLPhMOmZ6cAGOqUBuGMZY6s9flqHvxYMeTrvRVDmA1%2BfpNHm%2BTRWpEJwf18FEJSLOfisNZB3d2rWPneIQ5mMqZFezfPsvB9zA%2B9sGV5w6hEBSClQe6L5ghJmGXU0BEThPbVSoBgfU14gVWhvUnJg9biPnJr5ibtpkkuLesuo2QGDMrUJfSCBUzRZjuGsk15iRUFlgx7V3%2FCtW0tk2iHbfM1K%2FY%2B%2B4N8%2F9%2F5vT%2F3nJxan&X-Amz-Signature=cb2a938f27e28111d269661753514a846c90e0b446b45a0a49febb319738afbe&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
