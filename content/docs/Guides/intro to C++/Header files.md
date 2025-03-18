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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPHKF3QD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDsx2RrqUFExILk9f8ps0xcw0OuPsaZXQU2r8bOZqjlwAIgDCLDNtkAsK83SEnmb2NYgLLHJH2fHbTkYyz%2F2UQYo0Iq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDI6OZjWMTXXrngzSgCrcAw5DdI%2B7kUvIGB7pmKpmaVesYxBUM2ZvS%2BJ%2FkKkykGXWQZCznX7R7Jhm0fLlCvFQPuLvX70%2FSbkULV%2B%2FQRo4grCC3nVMt9hHPcAXCIqBCiNRDgwZC08kKH9HNu7VA%2BRR1CmMNb%2FBmRsfkr0vIBbzqSoLqoSqYp9ZLpyxoCz7799S6pB7hQTF5r58OGmGDDAkRSdiMctGywOZc9avmr3950Xta5EI82twleq%2FTVqFQiFSgwXGT7oIqK%2BkLWFkagnURSNLRKUBSrf1T5WU4baBnkDLzq5NixruTItgdtGhdmuaW5d52TxrTGR%2ByRTsl6oKi7KJagyxLEviz0KGLNyX1HvZgwx8JjDadOkSjPBULRoNeJDPM8YlfQh9n6sKYchak9KBjrqhq8wyehllS4s%2Bc5s0zD2NKUhDFTLgS15uixP5%2FGZlCaHWHp5pFCDqhIVdj4T87V7FZ9ptE4M8qXsBK6uNWCpYrlsseqiBlQ%2FuMuh4Q4lkofbJwuLG0fagBiHmZkG%2FxcMqWTSwaiRy7wb38hnU9Uj%2FJ4qZhOK%2BwmX%2BX%2Bwy%2BbU7nnp1IuZP7tDhAn%2FNPihWZGEBs%2FvNsK6P%2F5oekqCKAestMYpeh6C4URqIT1wmsVPKk%2BLVMyanyvXFML725L4GOqUByEUC4JeWQz8%2B7eI0OroshxYxPOuBGhK728MKXhaFji%2F%2B3oRj9TF1Thl4r5UFhrcysKu1Q1ri%2B8t1C1TIkD2gJNv6qLxWFbUvVzbHjgAWUb%2B4d9zjyHII4EGT6ek9iwzP8JdKeK4WS14Lv2ewRuOcy41MhQKYQluMrmk8ik5aHbw2gzMxUmKMjunUIpeI0wCf9%2BFRsSWyDChBicoFEGymjtKPEYr0&X-Amz-Signature=55e2fcaf8f40ddaac3042d28cf50e8ad0e535132a61634c35aed73e4c04b1f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
