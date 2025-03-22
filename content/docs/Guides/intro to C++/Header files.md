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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAMMU2BW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDayVdRG%2BjF6avomFpiz6jEDR08sR14hnhCd%2FHyoQTAqAIgT%2B8fNYHW9AhBWcmKfjnwzqtBpNb%2B5mSz5kXesecC8WsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDId%2FB2BG6udQG%2FtbVSrcA0JLHljXpoGuNJyb6rzGchCsW9qonyRbyEuligoqX1zS2kgIu0t9NpHIAbHiH7Ij3JD3b84fufzGadjbTFyc4zY72dnik0GGQCZvP1%2Bdn4PTinFSlA8OW9xwZJZlEcSNNzC53LfYDIlyJCL7SBsgosPZyiS%2F4UP%2FcwdX0cHEYnuIR41Yy9m5VY9ZcltsnZiUHTeyJ0OWsGiAr%2BqG5nGftcXdqt3Q6m2%2B7NKgimVwoAd%2FWfr42%2BIO5IPCXtJ90AJG7aLOURj63oF%2FWRVAMwXLvfKcCMTD4bIig7ggcWe68ibcIZOgTY%2FbyzdB5sL041psFv3bLQNPC2pvnqTj4tCnICZaZ7hmWPdQBTS4wxHKvBGrP9A0gPsacfcDsZ6U0XVhOEDnITGbM987tQ6NFkGm3lACWP3lYYcrFOu4oPs0pAwfFheFGl7Lt02f3N6neV9NSCwnOLZOQ5yhFubNKkv%2BnITflrLPWj5PWhxSPYurNp3hV6Ts%2B9eCzIdpq7k8oZQdG1gkFPgXe5sIm8siM22WKmU4YX5JvFfh%2F34k48lHsaplkKVF9l1ejp63Cj8N6Ot9KjQpdDy5%2BFq7GJAgAMXP1OS8jMaMiFuZ%2B7IeYwXK8hv0DHehGPAUIB1NUK9uMNH2%2Br4GOqUBNtzRZBie2pfcHUuHrebKyB86Ad90sKKuZn6%2BHJKtSvKUjzjHM%2BYHf01QKpd6kkw0%2FWhwd0jUensEvvALiXNZHN9o4dO7QS9hf8Fui7XLWSh7mxRzUeQ5UY7WKGGHIPRdpzXuvj9MOuYGPxK%2FcFzDPTKiNELcnLNnAHWd60KuuL1teNUfWCkzMPgjFCcVEgsP%2Bs1CTcT9duhjhP4P2gl1Qtf6lfpn&X-Amz-Signature=4e2da2cfd0e3dc4c9cd8f4c42a028591ede9d5a693008df4f32aee925f89a7b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
