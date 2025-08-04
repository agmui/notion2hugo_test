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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MFEI4GN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIG%2BmPmfJ5v4pVERHoNfRD9%2FZ3pnwus5jjPjq9RZrJRuHAiAYRphtGDGYKzN%2BgbTPH1mfsQEHmv5SJ9O7uLnVM%2Bg5tSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMDX8isvjzJ0QXqI1aKtwDwOquin3ggpTvkIvi9AOmHLlmNsfhNsqUwmS17N4i9ziEv%2FGPeRWAGfnubKlot2PkE9eFegJt65I%2FXTW93niWDwTX%2Bnf8ai%2Bi1xEQ083yLirRJc7NVprDcQkZ104QCulrWD7Lb%2F2YAWXXJWihO9gJsdvXsSgVfifpXxVho%2FLB189aUJ4exhyIHiJjQTI2QkBQc3k%2FJtjqrtC8ISg4HjoFh5Xcg9EkfT7LOii%2BksNcK4EhC3gd2A%2FlfxmdpN2aIp2scmFAPXxMBSkZWfjv5ZpPKCsNrG87FSci2081ML03eW2EqpTOWSTmg19xVKkso1voC1wHYu4cna3Efgiqpzu2jiNDMTpHF41I3F%2FJssDaBaC60%2Bj81GGGTsMZWhlplzOZUzAtwenhAWJB1zlyqT7%2FAhI%2B5%2BG7qZxNJh3ReLBjhrFKFpXU2iWj9BTslQqBeMMhT8a2iOpGaSgQuk8lfcg0hA5aqq7KGng9S9mYWRbyHHqfGtCyMx7AgHua%2FtkEXtdfih6256zV1rZFJeLczSZMallZSG%2F90LpEtFvIY39P1Ix2di0fEnKuwQH3tFRBfX0ZXvADPaKacZtowMLW2LD51oOXTzbTSG5XhaDMqQvV1rW1OUGDmpS0TnwesgEwgurAxAY6pgEU6B2hjwOicsebicLisX7juddCnTAtVHe1%2F%2Fpx6mlFkXIf5x5NnPrHfRYXwR1rmvsTcjguXuj%2BGR421iT%2Bx%2Fh0JFPvd8EokXS2je0S0jLPmo3rgPtPg2GBToYkBG9op3P7FvnAALmYCdtrp0d6q9MrWtK2FX0xloa78omGhVYcCeJ6WVnGY1VKJEcytr7GN6UjTcxqE05U9%2BmwsgQ5SGxMU3nAURse&X-Amz-Signature=72bab8503f7fb165c53835a4e94d836f5453f8d86ec4aec280577c35cfa79b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
