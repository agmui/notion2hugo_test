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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G427AWW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BzjLT9q3GhXkT7HjKIm%2FiHpNIJqmsgsNLu0SWMvC8bAIhAJn56778Pqw9EPyuLgKO%2BLSrDCv%2BcgVtSJ8w%2BcxWJ9g2KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqABq8Rnln%2B%2Bz9%2B50q3AO9%2FZCXoPbR2hAocrFm8HqQ8FEHLbs23VAXxrmEGT00ioiaiJEflsAW43bagVLlisoZ6tYAWGlnWCDtVqEBEm92jIhh6TiZeSFuY0bqm69qbvychMQLONc4W246yDoii4u%2B3lYDP%2BrtY9B%2FSZYDwOhcA8bQlXT4O%2BEDphCx%2BPj52wbcvfX5%2FdJrG9g2DNCMNJEvTYII0cheJvbxDn3wRF5xcWdcy2F6%2FyLepVnuk53cX0%2BJNelsPQL7jT9cZ4KKVGU%2B8bihi5DRygm5S%2BQDSBiclelQa7Bocj5d8wdQpF0XgnI9anceZ47dMvbNkHQB6%2BqCtQuLvoLeQRR%2FmkndB7WcHzLo4SErh1E09rtRxj97UnM39KqwU%2BEGYHVvU2OmLuzTFguswNy8yT02G4RPZ%2BKj%2F9DS6FhwXrinxzB9xfiFEMPPwmRI8G%2Fr8D0T7wov41UN%2F8d6JLGly7cYM2OmAqaInpT%2BuH6yZIcg2rmEUdpumGxjdUPFPDUnygpbnpZoTir%2B25X%2BO08o%2Bb9fziSFHTb4ZfFO1PgCCpMft3Xr9aAado2Djz54jJPPafiPXMwaskZhIx6GwycqPMm9j%2BBjmeVrMUku6VzT4n6MhohGSVHECh5AOJPH66qWtPwUdzCTx%2FbABjqkAckZH2CBrRiWPwIMD49b%2FugS9HAEoGhHwwGqsSu%2Ftl7%2FBe2MTOn0u5dgXw1SxcvjonCHsWgucrr959Ejp4w4chC9f%2F7QmVRtc4a5pVNT%2F3evQiJ34JV44ZOUlF4p851z7gHXaP9%2FwnjLLigCOy06TYQUx2y0MYMqjMeKXGmSan1szKJITBeIXl77tDeQ4wxnGbmYrWGb56kqOrnJ9NGX6HofUaHs&X-Amz-Signature=8ac5239569f6aabf1f2dd3880d3b6d35b9908d8cb50b87b75d55ed2a4e037f28&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
