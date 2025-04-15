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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTOGM6B%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfi8cHzg9b1vP5U2z1BJ6e8WjaunmQY68l7B5bWAB54gIhAPoj4S9DmmByikbs6SZqFedkmk%2BQdYSRJDz4DJqEcNX2Kv8DCCgQABoMNjM3NDIzMTgzODA1IgwZ%2BOmevJ73Ct4NXHEq3AOylupaRZFn5ovhO4pbPfo8qHTs%2Fdvy9B4sEQavv8yvEjQVGZfIkBCYug4ts%2FJe8enqMpwWHDA7HOR08HbSBenza%2BAcoe2dgL9ngT9f%2BQudfP%2BrdMcyRV1p5eRnj3Q6fxnFfZ3P5g%2BQB6g7azUfpkONDhLsEYxyRo%2BGg1AH75tgfUS6DrBGU4eRt%2BL4xyAYUhaRf5Km6Bt000miQwnAqxgI72AE%2Fo%2B9zKjFpkWreLV1BNDowK3fShsjaeHLG16CVywZFq6kqrepO91AEV%2FqqkovFXQSWFVEIpPeUjbEO5KRy1lY4dvE3mxGtkDjVu1oE7lJlb%2BHf4yed73JjD1yeNCyKMFlqzhVzV6VEpiwiGLek2LSoG12wzUz2KLaPN%2FZ9f%2BpJJLSiQNoBhBpXICAAdVPUlTsD2OY72Av0Pjb4nA2jRrFhKAyeKPRNhx6T3ISXqK8AiQffUcgr8Ffqe7lejGFGoQm8zY0UqadFEn1aOFiNrpgrzZM0SkDy25LvIH4F6Q3sPg%2FMqhJmP3cR61y%2FwTZlQgVkt9IEg3N57ehFLCiqkNMs4OMiKZWkglzemYPXZ5wPIG5cJ1V1%2F1STMAVR8MzdGd38aKYAwcAbc34TX6KXbx5UhIeY%2Bzyhkf6ITDhgfi%2FBjqkAbiEMA1rmNYB%2BIXr1zbuSDdyet%2FekOQSvKPUMHPKPAU63pxh17jf07ByPUOOFrb%2FTp93IzVaagvvwh3U2FjD1ayx%2F48VXWxHk7ZprNXvqGUAQwvp1mluSK2imrGY5rvk%2F8FDxgR1KAP%2F4mQU9%2FHO5ND2cgkkjelH6XNDfOHMM09m5K0ZK5BuH3dEpLk5Oa88ComsHjGi1gV9ka4dM2m54crCEX7z&X-Amz-Signature=048b4d11c7fbdc0cf17547397061aed0a0d64a4fe5b4cc28fda41e38ad835828&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
