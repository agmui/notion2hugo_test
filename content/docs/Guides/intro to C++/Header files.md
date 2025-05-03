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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2QBZRDM%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFcR3z2LtCeD05OxOPlsDTx5NyJd420nIic7padb6U%2BFAiEA4Ytusv3fLRlFxFDLA166T0w43T2ALhv1ewAzUNYlzzEqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvhdIH7HM8JIzwRhircA7B6fPrrdjJDQKSMLjyZ4jB0OuNQfyQMkhL7iHCf4l1MietPdqt6H0%2FOW6Sa1jKZIabAk52ZoxCOqTjjX7u12meLNoOmqRaOgItw%2BgqFmIYbyqNSXuh1cTCDlZDDdPzpoF6RrDzJnrS2%2BHP0mTElaxg7bWC8lhJNzHltfD5SxTKdHx9ydfT1yJVZwyt%2BngFVGrjWwBa6KrLRZWqYVxUTa3kFNIzE6VAD5toZOXKKU1D%2FHbzGeQuX5fuTy6NTgdqlFuTAAyWf4ByxhKdnuNwbasU%2BAOmmohHNjjmWfqwQZAoqcdPcEFmEW6WNy4n5L8WgN%2FfE0SUOh96h5ZP8tKlP2lwBnVsB6wgw9HlVRTmwdiA9NxWqdc%2BBCOCjEtbwxgwknmvWd8uz%2FWHQT0FOPKc9vSoCfEhpmIptIWCeSoziOx4PYSp6%2BYepDG6sO1szAU4dgwMNgYZ6kqcQ864INRIwLb4dnMnrjBlGdoiYR2UTgMfUcpXpYuynsHE9t5oyg7PlZdhdmYVok9uhb5Y%2B5lDP6JjQgZAJ6pRNoNZkLLPI9UhaGaX%2Bhg4uhP9ZKAL%2FFh%2BqY2zsnSaUMvJfCxcth0Wri%2BFS6p7Rp5XAQKdDMshT9KWEe6Bryp66XVqzbiqcMMOq2cAGOqUBRKoTS2ZK4O2AjRwAAqcS9K9LXn%2BK56akKHhFEyvsxlrwjAgKx3ntqG6wguAsSR1mpPP%2BGjAVxf0p7T%2FeGCUuXibaaLplnYoP9mQV0uLFwiV669KTiHp5dJUwBhHdPmRZCizcKeaU5RzFpdDwyA5ZhXCqH2UnuFXxRZpmTspLLx5T4wCATj1P644ZaPl0XTxh1w1r6Pfuo5NJHvlOmubR%2FPyY0157&X-Amz-Signature=71cd79afdf1e30b35da1157bffe16b0568fe6ca2d0f3c7c176918a3f01036697&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
