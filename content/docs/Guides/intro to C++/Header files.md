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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCAJIHZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIGOoviR7yTdkL%2Bo%2FVYS5wKUTX0ZHFxN2vYWpi7nAsv%2BJAiBIywCNHPXhjdXKD3b0f814J9Kvq6CBf%2FJCoCtK6kaHPir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM7rjSSw8DlzHTvmM4KtwDkmZZz0ClUNtipEw6t6ywAmdh84PFkzW1%2F0ObekFpMs%2Fjf5NZviZzXBoA31yCA68jih3DugklWGZQurYQ6NBXCfrGDETLSJCO6mx8sRzxPPmrcCriwiisP5skAMdQprNqotJLd99whpm%2FaCkl9tHOR2%2FfyvtH4VpaOHqfmqSyHp7G7yARGNfunmaoRtv1FgZMAxsn1sMDlZJTMa9cwxLZ992pEp%2FjYjU8epxfYB4%2F4yN%2Buom19SzYXVDBo2%2FS9WpLVEXEhcW1Hs8xQJlK4QzhLipuNbpkU9yfeEIutDXs6cKNs3qNiYJIK5Isa7lz14k33KrqefWe4AP%2BIhL0HEvEQZxoCCV4zX3mcs6EnIbjbVmf%2FVQLOF3o0MMXy%2FjVzlJ%2F1jzOoaXsCH4agsXDmEjGR2kQVHK6ZG%2FFTH8BqqrSiSDV%2BVhMc3vwvUEzqz5dHQxqjpNhUGPo5zXRYYoZcYMgOzzAhBd%2F7lMl%2F8i0joj05YfcEstm3%2FBBddrhOIgdr8gKRYAqBvbE%2BD6DWjGMKv1mIl6C6o6CUSpU7G2mLxaLtN%2F4iFWjVApKgIEy4ze7eJ1PrL1A0Tt%2B2mIFcOppuhi40tJEZ2N3r%2FUcYPYfgO1ny3i8tZ29uEGkVlzeuHIw6P%2FqvgY6pgExjvT%2Fv%2F5O5oCETjnk6QjMSVu0F9zRiFoIDwC5L3CKZwTxfnUgd%2FtCrLl1B0D7DOWaU9sXRt%2BeMGwPCmYcj%2FW492GNownRNpHVzs1fqiJaYfUDW57N3uePMnWr2C5yS3hoJOMjGrjtGTP3T3EskFtcgY43IEevs9V0WJ%2BeeuMYfGhs%2BQPw1iIDDBndYv316ckdvHr5f6Nw0Q%2Bx31%2FtAfJsZP8qG9x1&X-Amz-Signature=f9ecd00270b2969d4b03ebd87525650891a505bad4ec98e9ce00975f4ffe2ddb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
