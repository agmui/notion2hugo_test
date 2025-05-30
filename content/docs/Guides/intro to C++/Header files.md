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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRZN7NNZ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ3JtOaq4EONReuwnUN4TrCT2ROIP7hFcc2SAsudNoFQIgYzdRs1mkukSU9r%2B9duol5c7wsEYW513P8B1ibFdG4ugqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLMQ10tt9Xov3Vp1SrcA3euzBJ65IpXTRg%2Bl5P200jQjp8nm8HcxKma4ykyR%2BMZbNiWk3PuaaDVYD3ZewbZXaZmONIcAgmC5DO%2Fk3IdZXCgv6svEG1gcoezElW0y3Ss0%2Fe47Ik2NskEZ9vDtMi9kjOa7wXao9xLvCSVNiy5QDPNvP5Ml%2BCsb%2FSBsp2TjscORM%2FZuz4nP75K5%2FvZSKVhU0AFOxI87tYxQ2MRAoF%2Fye3woN1234Vvnch11L%2FAw25%2BFF1zlwC%2FK%2FPBxNhUk0yX8%2Fe7388T2HrT7bfNG%2BycMvcNN5lOQxt9LRMV36PCD0LAj8Bf9d23g1IDebNWWe61HVss%2FYBYKwnt8Zv0rz91CO2nFnWY54UZwclymjjaUipwlbhZ0y6NHxLRhLy9siIsSneJKL5ZmydCY4cFRs548bB2tzTmKJDqRuBBz02%2Fo2zXr9lscZQL9Ykf%2FgyAc6LIEY%2FaW%2Fte3uYeGggC%2BrV1k3WnNs7NELT%2ByY7xFbgiMg8pT4aA%2FDIR0hmE6Dq2es0noSCfUBpc%2BNRxONUdsE0O%2FeqaJKQeDHqtAenP3f5NtCV4gr6%2FdNAiyNsyX4pk%2FUBFwwGijKNOsgkczj6Rml0myG%2F8GaRX59%2FD2H3JpN9MnLtxXAjGsD29X2cOO8kSMMDx5sEGOqUBjwg5I0ofMigO%2FI%2FSSdskVmTfY0zJQtyDP0b6pGRbJKn4mMcf%2F4AatsvG%2BTpeRPSgUBYUlpqHeDCW%2Bpvl%2B%2BygTxt%2Bq42XgJgKTt%2B7uln%2FrI3rGHx740wIRbCFa4G2bcE2eD1pIKpc1aGH%2FyXBteohzPYUuNvAxKcG%2BAvIrWKRRdSH4vkGiEme0qhejcMfvUr48k5EkHN237Mw1kS4dwVQCcflrL%2FL&X-Amz-Signature=c85607cc45bbdca61cbc2a605547adc0f778faad5eb6471a24f406f9f3511cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
