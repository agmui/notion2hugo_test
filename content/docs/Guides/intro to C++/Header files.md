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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNG77BM%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDYFP%2FZrNISynZSCLmVAYBqN5eblROpP1Y%2FUKPY1A0ktAIgKxWfNrSeJ2A6JU0r%2FzL2%2BEvVLRt8yxxWSfmFNgnnzr4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ4Z1M6h1%2FNLaUm4SrcA4zqrbOxhnOPw6ZYMnMrPENqZotTmFY0Y1uhSjkIAv8FabuxPfIlO3pNNUK5oE7Zs7eDeygi71I27W9QRcBmpOvaCauipsjuXvpd8%2Bb2G7SY9TWQ24zftmWy4XXvX1WqxdMWfF8EGc2mk%2Fw6sx5xTBdYQk%2FfrkRgHzGOhRk8Xs%2BQ0zYL7C8rZgLntbk%2BalPKOXp4aTllmBiDUTjpj5JmDYalp6v%2FzwvccHEncdJpCm9s25oaCkSr%2B7y2RGaLr5lAfgJaB5fpx9EklWV%2F2j8FN1Ne0SslG7iEyJ8Spd%2B096a2kVXFvzCIq9%2BfGthGZEsQHueSfvymG1b8Dhor20Tyn13IbExp5%2BN30DF%2Fb%2FFv2c1LbEc0bBdDhkIMSp9ZQaR5ZkbM%2BueZ6%2BoHf5GBHsjx6bchIj%2BIVr9hfPrDBKrUtAfN0Mfp854OwT0EewaeeZOeA6XDeXUzTax3OxvBH4S8eq%2B1rGbvHHX3AMojEIKHAjCMuklxMjoxpDFL7umUWoDGoJ52WWnk6Bm6u%2BRlpoIP55tY7QE5CfgFYMrnAjQQRSoxfdcw2v6IB55eQw2qdGTevXR3L83xdTbT66vPsKYuW1piAaAVnNhYsditeWRRqicnaZjxl6nstki01sahMNv09cEGOqUBHehteO6LLZwMmPantpWkPdzD9PHT1opTdEjHWPbWXwmJ66COrjCke9xP7m0J68JWBOr6JKpQlHN3W7zjLnyK6nZDGO%2FnHRMjyyIxDpLAM5ZNm%2FSnBcAVKqPM%2FEn6Fnopdaj%2FKw2Rh%2Fk%2FdhUiQc3yCT9z7ZFkc0SYvsGaP0kwdQFlsUwJA8NEh37kQIaeZu26CSZueGFPwYe5jQFQ6WbTOg%2FN3seK&X-Amz-Signature=4f5dfaaea3b29ff2ef9cfbbd04cc27ec3758c5288d65e08961f936cbb49292b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
