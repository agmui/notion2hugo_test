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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX2LXBFJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDpe6CSSZgFal27W1m%2FdGIpJY%2Bheliy8%2Fw1wvHPJgpCWgIhAJt1Lkk5uudYhlxmvKnXKw1Wj46fk1%2BTOQ2aEo3w%2BQx4Kv8DCHEQABoMNjM3NDIzMTgzODA1Igw9p1wR25bv%2FzfcNs4q3ANYpQQfGm9wUpUrxLMLeAmR4E3vaH42xQpa6501%2FubAO%2FezlI%2FUivUq6IJsXEuXDtf5N3p56PHRB5p76ye0S%2Fusv%2FgxEm6v9HcqPWNAOr1dRT2HX58dGNNfWRttOzNaBS3drhpbi6w%2FZlIBSnSF60r%2BgdjZfJrVyfJH0PKO6do0nhX42MoN%2FlTNTUc7%2BvmIZHkZXMN%2BNi%2F1UkHrbq%2FpKPYxYL1KcGxJU%2FRWq4YZGhDpo6hKqkCi6uPxNDyMUp2XFuJT%2B%2FRZxD9xwn6ElM5NMXxdwMg2embxuykkHeEG%2BdjFnXNObTRBWqJqUbnYFwE3uQMl8xjng55tp%2F0PjRhTwGsFswtt67nb2VpSe3sCd%2BwopjGxPlU%2Byh8FVxYJX%2FKUj5zI3P2ft7xPhoSa%2F1KnSsqPpEweg0WS0mLHQvh%2F0%2BKdF3BCFW4lI4NiH%2FsQM22KnnXIpqJSzVvt0esAARqWRSAEO9IMPxM254j4B1Rxe135PhZApK5MoJGMBO%2FjpR4Ai9ZieICzvJ8xZnutJcPLGfISVoM6a87L8V3tn3zjGoj5TKh76vSZ3MI6%2Bej6d5odGv8%2FEwBfyMNXFac54NHWhY1s0J%2BT884L3%2BrBFDIvzK9onLl0X60uWewnc3t8vTCAmczEBjqkAVxhmeeEl%2B4FCWgS1HwTZiikjuRG5kbQgHSuDCFaled2XYMYiuj%2BlWjaKQuMHpw9FpNXJKS%2BkYxmVdl1IDgyWo%2Bri0MOrlKGFiegGzl7akXSwhljiWGLbxXy8LskP1ybTRocdbwUenjCSNUqjBPVQUz0EMlVNu4UZPwOHp7eTpQvQEuvrv5vLev2AlVe7m67AR2Y50frhPZvgAsbYR1KUtcZZz4f&X-Amz-Signature=e489dc81309693a4a50312339cba84e35893f16b6ede3cc7c3600cbd9814162a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
