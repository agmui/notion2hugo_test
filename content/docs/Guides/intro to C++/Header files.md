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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GHLIPPP%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCvCr%2BiAmA5NsrAwqR%2FPUSAY4BEF2Yu%2FEST4LlP%2Bl5yXAIhAN765O%2FIigq%2FXjJ6crq3U4sg7JjP6SQiPi%2FyTtaYZJyUKv8DCFcQABoMNjM3NDIzMTgzODA1Igw1stUIlwpDctg09Qwq3ANygaUorUvx9sCeVpnZpwc3FZocWWu8t%2FCfvetgrUH%2FD9eng1zBBJsOTsHfkpNEqMUglmIfEl9xlpTd4uCmzxBLa0vch5QOTgiWH0EJpUTlYr8lznVeQ1HvHBaglqu9%2BND0LcSEONOHTgln%2Fbule2LaAdBsJ6NYyWK%2Fuv%2BsaThrjgKVAZJdoNDOBdEABXDTzAMq7Z2PxNUrJciXjlZLH8Y00JP7kw0KZV2f%2BTaFwkPJ4FGHA7eonPKTDiRE4xCi%2F7toP3nUiBouuEResA5QdkY4I2muF9pAEG%2FJ%2Fl5pXPUfyUar%2BXA%2FKLGpunkgXmSyu3nVA%2Bd3ww2SzZ22wnVnwhqj2Rk1xvUKbn3hsn3GDaVhpJ6sUfW0uvXXgJPRQk%2FwAR74QoFF8%2BUB2G0No%2FGRCnt94V4dCKYQMVFJFRzWok48otUizaKuKih%2BVgf01f%2BdGkiP5u4HwiDLndNHheLKkjFblNv4WKr3HIrX1pepxHrxSbhj6MTmuf%2B1wvbt7ogQeL54W1s0HgYKlIeulMoDmUqtx7bAu9CSuVSlAI3YHc10IPDYhyVUvC95LKrELGzJ49mI%2BmhvKpNi6U28Vf1uZE%2By1cMBJ%2FScrcyitlB82%2FJrMmIZeU9MhoBMrekMxTDX%2FcW9BjqkAUOWcc0HcjgQl6Qs3T4R4EpWLA0RGikac4DNIyQddQisbbvJq0hubEVyURe649qb3JnIPFueVdJacw2CpfBFgV5X9mf4qkAPLZnuDNkovW6S0O3SoJqn7oSsnRlxfJpU7nB9o1kQvSnhFli6hsVig9tPKqMXBe5XHuAfs5ADxuUkrXFWrQByUmGRNH3FG%2FZO%2Bm1ViHQebG2kffoGiSovJX7tm5j7&X-Amz-Signature=9bd9b4c8eed8c785086b58b1b4a6aca9be335c183b710ead7129d7ecb7ae0b1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
