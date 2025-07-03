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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QB2QX3Z%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD5GbI8nnOE8qYo8QJRa%2BtabagvQG%2BIOwHTGpMi0hHX6wIhAOLX5MbK8080l9Vb9ZYV0P4z5zT7zHpI77twUqXa1yivKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuhVFRlvNu2S4vFjMq3AMe07C4QKGZVUUIcMXcU%2F6ewOF7jLjqejshG3mz9aBPeZKmRr%2BI%2FYV5EMKcdgmlkzTwEy64oYG7xxFpDk4WTdCFwOgcHNGI2ytoPPrTeaWJp77onYaQhqMVcQTKFektDK9hz3d9IIZsUScvnWc14tnez9cNsx%2FX3HOG74qL4ZwdBv75FaDmhJvsz9R0RBZzFsDy0N%2B315DWdLQiQxkSMLmAEL2eFCme%2BkAwFJgkYSLWXWTW3%2FNB3TE23L36%2FHpxIxlx64Uzz70EB%2Ba8pHHzRr5nBGKqGYMMLtWi5%2BxEUSAQ8OTaeBkwXNN8rMD1so5IJyWf2c36oDKILpyEnt4%2B6HmenFlaPzRSIN57HAvjlmU2heyYQ4ljxC3WKSpxSreFnBzdVdXzGO8JYWw%2Ff2PxllH04qbKBz9Pr2gNXQR8dB0TxAy%2Fx6tnXsUptqoQXXFan8pDCXamrebyDtJ6CW2BKuvvp2vuii%2BbOilKULnzzCMaDqBpDcnsJ1MUNrU1U8ySvkRIC%2Bg3NmEr7LlPk2TyZ9rWos52fN%2Btg3AJFKGWCwELkLLjaCetdzH%2FhoZgztL7kb0uiasru6TOl8FH5C2cD46zt9%2FHhGd0yBbWXO4G80eYf7%2FkJKURJH8%2FJUSSzzCeh5jDBjqkAXBmrvCN8y2lOl1phxJdEC6SaF%2B8C8TnuiMiSD%2FHcUDL1Ar5LfplJoU%2BEx6UlK0fLykGgU3UXO4p812UxPwWlsX%2BfQLQJsn4WRCte%2BUxVe%2BYoEpjP7oyGEmRkCwZNmeWsySmMd00PPzyLgI2lzIXYCIn%2FU2AYOK8pizY3vb2LKF2Ucx3jxHOXVThwmzklc14GeljhSdjG0MTlcYPPs2QDIp%2FuT25&X-Amz-Signature=c75217778b05f9d69fd3bf5c748590e310e8662e0add6888ba604f4202d881f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
