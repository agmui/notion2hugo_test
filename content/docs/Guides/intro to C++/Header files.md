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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJBC3VH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICCInf7J%2F%2Bf%2FVPJsBA16rjVSVDByR%2F761rMHaBG%2F5rJsAiEAjXeo%2FUw9amb6j2jL54ewlSYBbXxNz6nz2AMZqL69LfMqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIO2PrdVks3goRlm4SrcAz1bKCcTxjhBFho3jejqyPUImnQ7dPJq0A0CWMFTBBlIZ%2BT16aa5C7lQLWZFjdTeFyBOtIiJapQLIBZ4Nh%2Fa%2BoK39QEP1kzYN6yM3sXb2ICvaHiMEmDV0mM4z0XYdVsWFr7s91eBil5RD1GGETOfgkzzrBV4iMa0kGHsyRv7VMuQ2RknsIdohTLTGbgI5VaqQ0FrM%2BTEpYKXugOoWxMhgLqPhIoIItXzbxAHfDaZn2ZTV2RYB8dJrDojlyztfA4UcbLYlvE3tC%2BXQ6%2B1RJBLS2qFpoOpw4Ki3wFTXl6hrRkg3vdgPlk8MYbnRudJKLzHF1xcobJ4e0tiKQIBXD%2F%2BvSGCmQlVCm9N05KLlhf7C2ro9e8NWoFrkG6TFy0zhuJaGxONRsjgSLcE4oF5hmgR8EQrLrsRtChxtXOusNY1do9b9DYdxAXKq4dyl8ntxKG811tRi%2B%2BfrHlZ6Dnt8a1y2bCOG7FabI6LC839hbRMiZpLpCGWAolip%2FJrsLDdw8l5URS0SD7ONuTO8gvhf06HdXVYT4%2BfT4FZX6wxGIBSG7nahHJid%2B2zplIZ5wDZVR9Jr6oaPeIAD0PWvc%2F%2BWGpEDifwFHw1yUI09lhEgXrUa2CGY3bVDZYWKDNMugXiMMnRv74GOqUBKLYT3QT7QhXMCFY6nQxtRLu8kh3a89UOM227MshzJrB1qGYn9mD6oE9XY3c8ErFKt1qnrhN8fREJhfyvSnFJlJ4Yl0L7TGoCuzwaiWd9%2B%2BqPnGga8%2BX0sLZcPJ1wCOXa8DtW3P1uvvlvKBB%2F56Lqei3Eim6uVWFtiUt86tvFJCH%2BTESk8SKqvcLcpYqmScMHe8cQGzMB27jzDlelKjlKuNoaGxMA&X-Amz-Signature=19551cb6f3c286304eb23d585260ba3107c7bf15b62e025e7a8528aa4e7601ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
