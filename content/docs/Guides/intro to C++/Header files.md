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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIOFGTQJ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGM9b%2FfRfhDQGPaiCWSHzH5F7p%2Bx7Ey16%2FSvn9%2FfCI5AiAAy%2BclUs600aRbaMKb8wHGCsTbo1XDsFN3oW%2FveC8opSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMexcpXUrp0PfGXPjBKtwDapAQ4d5KuuRc8FL0a9JYbGLwSRc0AYsCKuEpoLM7jm2TucywMnuDFrrY4l6yU5ihiT475k9RAKmb2YHe12qWPXElW6nKFAoCGGeCmsSSz6HuHpX%2BshBqVAZoWHiHulmIbIn1pAsjehKNd6S4qIrzJfsj95AwvdK9%2FbI6W%2BV7G8%2FHVAQ2VwK1PCNf%2B7WRUAUMLQIft8DOesQsg1UgmU4tL6kit%2BPWc%2BLcWtfU%2BgwytSd1BIkUAv73%2BlVBb8eVtUWhgd99S7KXvzzTvrUIvG39CIcOBOIhr6LVrQIVuAgifPy1aWsTEl0Ues3bKH%2BWWBPJcVfGBqA%2Bf1PYfWvuxqGz9uJcqlW9xr1fuHSbYZX57vesARtcdbl3GC%2FJ4lBYn7t8B1zdA48xwhwx7c4kjVIbNgQajZiyDcSgfiUS5KBzKFGBlhu2NqSkV%2BGWA7sfk5OqavXN3GBw3%2BQn2Kw9Zl4fH%2F48dIj5jt1A5kIsF13gbZo2dnht0nzP1CWU4ESZiP5rmsE6NNKvtUEEKaRLExVj89SkwGOrIZPRO2KWpRrcNPIMDkTewa%2BRIkakd1OzPy%2BfenMGEMsu2DIFASxfVUpA47NMvcI%2FPF9ggXn6NmERsfs2RhXYQusXYuIzLLswzKOLwwY6pgFtV%2FMQXiPIQ%2FtR1KbzfDKAyJzn770OqrarIKH1Og2xrCZGM0hCyrXP5hOd9GM38xmb%2FP0r5AZRrlSnFFmbkOZSXt1OrdM1LTWRtjyLQbbOMo2U8Ji3%2F%2FW8tJqEMpfkwyfls7eU%2BvutT7%2FOXjLcXJuVGaNspGaBLC%2BbMJd0gj7t9%2B5iY0H1e0tCCkjPrhyucR5TsZ8aFZuVHOmsTn5hKRXhHPuDKjeY&X-Amz-Signature=5a361184954b140b9d42423104f3cdc2991297d088a187511f78a73c84654295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
