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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7JMNFIY%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCt%2BulY4zrks5Qo%2BytoQlh0oTvSeKYkcXHrVrM80CyeHAIhAI49NB3A9TsSfLkV3vYE1SF1TaPJx7QTYu%2BH4DTIoIfaKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw0m%2FGFI%2BM5PXlY08q3AOweBz4uPgTd97M6lBzmgWy8cHj0Yyxrvv%2BtTy%2FHugOo9GiYXURaEYZmZ6lPcXGb9rx1mtfT1a%2FXScHGO8wvFtkRVD3gWaMKmThhxnVDgYIqgWAA8QOShSZFAlY6i9i9dF9xuAAXfeXhmCsTzwxC7O5ppwZTkDv1Uk%2Bey%2BkM27QKua7zbyLWHcHdGuQFQxeF4Lyzb5YzmzNSmCcp0%2Bv9%2BZN5gmaIkrRCk16X0uykOy9%2BWOHlvcgO3D2Yd0zNELUu%2Bxh%2FBfmmeKxFlhKVkVL9EZSnqZDYAsA2upP8eZ8CC%2F2irvTVtYooHx6GcSE3IqUT%2FH3a2gvBd15ZnNIqnkhqAX%2B55s7FGwnrHPKkkPepIgB9yMM01SdLqbEmuJt4zLPMn3bXbf2S%2F2rFSM64Yvcbr4DwgYCg9VApD2Yb3JdNrzEUeJjIF3mQ0jXPQHbtxyyiUwqHlvGnF2pzbBgbTFEKxGGgRJcCtZ5l5Lfnch7lAh3tTXZlovjmwzMrYqRAcs2gLti9O44bb%2BH08H8SxHmdqFsWHdbeWEsuvYcw6pBcQHOZnk8qPjpjzN2bVscgZ3l9CdaiTgEyUu8coD4oGJyzCOREG6C41dQ%2FuwtQDkX%2BgjKvfKQ%2BsDYL9XKWK%2FsKzDBmPS%2BBjqkAaDWnZZ5C%2FViPSZHfmaQTr7emHgZn3tProx%2B1SkZlxi0Bwdcx0kINjJWb34dCIbKANUQmL6xQaDlFndz9UqLcES6p%2Bu5kwIGhdsEfae5CQOWuwpaXS1cjSeMLMyiaNBmRtyEerODtpW7WCyZuFPhS9%2BEn%2BQnYwUYddvuVS2%2FWqffTNxd3h8x9Ob9%2B6cCcruxNXvBgAP2B0UDFiW9l3k5bwZx5kB2&X-Amz-Signature=b0f45b62b8c1e385ff4bcff9fb1dcaf537bda0f346f2166a534b410bf6b05f3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
