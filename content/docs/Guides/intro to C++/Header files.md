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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TY7H4UA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD%2BLtGPZc1%2BcdBA%2BqpOkRIsj4ZxKjMwQ%2FxSwijuYLu%2FqQIgaz60oeSZrrvkzDfE8QAyH3BBi7GKuqeGdGmeLcD9tyMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFu8jSGuM17bP3Eq0yrcA%2Ftio9uBTxpFYX123ceoDTMSt%2FzKNIv%2B1PwqLnHDP8ik4IyvSFHirXfSsK%2Bk28Bm9xYmUXL%2FldrZIRLv6CexDt3pUlOA3gdl0G8pVIZG3QCy4id0EnGI5LAIdld8q0Kr%2BKFOBqRusFbeWYCzI5MvVQhP4yqXMfg7yqMUb9vSsmjUrHDnW3uRc4Cgc1jos4lA7VrORsQRijlxEmDy2wshSZNx2Xrjld6wDpKDK1vP3lTL9iCj7qB%2FBt0Efr%2FFEBKtEto%2BjsWiQCx5Z9oZoeqi5wey7i32mq%2B9M%2BUL2CMGigjeZ9MA7jrwNXugncnNX08j2tjogYwKuTHqF8HD9ycFee8ujkalb2P7SQMasN0M%2FulD7SThGx%2Fuic6hoI%2FvOENbiVD1ymQnG3nNLycgXq2pjpi7ROGIBYBVTQqPP%2F%2BGSCvVZJjIFofAObVvuVQfPwOPaUWwxNzV96l%2FqKNceEt9%2Bc65DEye4ySYjyP87%2BrveuJ6Z2sj5%2FKM%2B8tGFJT%2BKqYHbWRn5EhmQqeQCgSZifQQ%2BfUA%2F0DfzMOzFr2dukZuKpWFGLghbHfDrdkXORsywV5Dv7vHoh31Qz5csSHmmYs9hD3YfyFJbT%2BnrQ%2FwHP1Ph3qFJsPR17FT08Nnb03yMLapu74GOqUBTTMfr3Iv4KT%2BSqfmUIxvw4rdvId3XuzQD%2FGe6UumZ6wobRSynlyfc051TVhxYqTzwe37O%2BkiqTOa3Jt21vrkwUUjD2lpS3YFwv9xewNdX8d5pZ%2FRnb%2F%2FpbinblIqQgRezNgOb9oxiWLzrlsJJWd9PMYiYE6ukkyItEUy5q9Ls8BBkb2JNkAaY3K3A%2FxTPgFt9JtQDCbds8XA%2BJMZhNQzIFG5xX7i&X-Amz-Signature=84febbcd2e85dc8c025a1f208e41579ef7a265e02bc1164e089601274ccce931&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
