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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQMVMSMC%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDIsc3%2FS8IF4czI8qbjbQcgvbuQ5JiLjraI5WxJogXg1AiAxYIfZwWlnko%2Bx1z1Wma4V58w9xLvRM4u4EseoJ2T4LCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWgta%2FesO6uge2a5vKtwDclm9QQCWwAmzpPYfFKlOKcEFOsQRVloaZqNRH4DHJCvJBjQQvZJ1DSOcX3JSYYIOXiUCTNoT2F8LLRjpDCwh4Whiq88MJN3kc9XHNaavd7mfuhfP6MlhxR3S0GN4PNCwV%2B32UZxdz%2FcB4%2FfZVOiGuS9ypkI1pHNJPPzyRlSkGsMh0BoBkUhB05tSzkNoyB%2BBAKcrdR8HunryXQ6Z8xhHzZANum3hJKeKzq9WFFtL1QPGwq55pf28IrlJbfTa59Ux9xWQmW7pSbwhs%2BN6%2FvSZ5HgfK%2FSqvxfviOiuSgPMBH0QLdTcxCOejrSyngW5ep7HGm8UsKy53gnEpVGDoNCm5ayvAhCdBzvRuuggfpby92LVIUBpZrn6Z01D3jsX5IAcWpZE9R9zofMRbT%2BN2vognDMXX6PAvjP1J413ei%2FxBrhuB4kD%2F%2F1vAgWbwrFv06QTTbWavomvDFSK0%2BmTrVJNsXgN%2F7HxylxaIwsXwD9B3PIaqP%2BEVs469mQRVcMsfeV%2BiOa1PggTXdEzGGMUw5J%2BctVuWpNHqYHAWxxOFFYly7MxFg0zCXYoNXcK9nfpcyM0Zm%2FfGLw22YWPKoGXKyCUVsJb51sXDxkU5BuhY%2Bp5H6loUTCTyfcaQQuzOfYw%2BvDawAY6pgFrh2nSou0PsKyaJcnCqDMJ0pUnB0wXFNu3gAsYBCe47sseXrleGZNqN1%2Fjm6NPvOBWaT6KKTwT026K6vb3BkPqbpuku6NMHJZGMaUtOLKwd2d3xXfShnBpRx7eZ%2BZ1Cd4cEm07vvJJGeEzJxLO3g4NyORssHkXXB5pBHzsrLu6GwZcTyH%2FowVeBELv6NhXC5Iyl1tSl3W%2FTkdlGRPeFncuPwcIDx6y&X-Amz-Signature=ed675d96336e48668b7c87b7167af793c5be20339e0c01461c927eb63c996331&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
