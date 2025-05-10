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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMXKA5AW%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIAlLNkOoW1amfhAZJYa%2FL36B3sEVwvCLOCukCzowPTyKAiA3kUtbCa4FbJ5bJYwicSZjvzAwy3XxVbsPsQLYZFPUhCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyISLeyQc79Iq2PgYKtwDDOVapJYhM1yUMC2Qio%2FY1tCOtp%2BdCLXZIbbAr69cXzb5zKpVbNv0kSMNQeJscPhdJxGViBfDivTjGkICHlXAKG2%2B7yTxsWnVtJW1vQC697A0f8xkDDkRFaxQExg13NOW8xRslyaJgSZha3BMkFwH8F4xTRrixYRnOtbeosBGkUnC4W3L1pAtpGn8PX30hqGlkFaV9a67y1Irad84i7Q7bqhs84SG9fjcxoU5%2BoAlzxI8edsyTh2cHUPfnETIIVbqPm9P8jcTUAYn9oixHdT1uHyKoa5B7NNGrB88ppkd44uZIlbxNI%2B3b73prFcVvHBBpjan8wrPhmy6tJ5BTC7gcvAqMPMYSbTvcqYc5bRQq0OJ%2FXGyrRupyBnARlEVgS%2FvOqjQgvy%2FJuFpJzJJ53sQLkHX8287uwK30qngiXN%2FnJ2EMtA5oC4cTzjICe1WpqDDFh2%2FxisAuADFeVeyIAN%2F4ugGygDYNMrhkdwhrMvFdrBgaWsw%2B3Gi%2FzsFDNaviW9HOXMDnxAFABenPu3ILOZZJ3ekqgIjZVkoT1ImcLKG%2BH4gQ8WK4jve4Fz7hWrAyA9FMAXrzlQXkO4Hs%2BR%2FEMhUtJkFMChIu0LAdzcvs8aeBnI6VCHfdNl0GIXGOWowv7L%2FwAY6pgGAJinbQ%2BpWCStrtwpt6mx7UD4tjBm51qLmbE8kvRMaQYJRYUoLCpo%2FJjWlk02j2j0e%2BqwU4chjKtH0gE75xih98rZfhdiTe0OzdUACRaRlPhQZFB2u4GuVg%2F%2FI%2Buc5853nM%2BdIl2yIQARS3Y7FhOkJKUee4TfzXiJFWrIXh%2F4kwTRfH5gVO4j2N1Kd78dDllQ3LNwPRvd3PDrJ9kde%2F48fimkTaXN%2F&X-Amz-Signature=ca44aba48e707084b333a2244ec6f4ee1add526d7b111b083bd217ab972fb642&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
