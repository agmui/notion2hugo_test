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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJODWZR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDA9LLwMUQcbcHSLeFX%2Bx9u36vPJo%2Bd3qXYOJo3h3jgXgIgHBl%2BrYHDV%2FfUNKsZKByvqj2bpEaPgSOQVZ0Jwa1a8oIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDutNOY2Cuh0n%2FuHbCrcAwrSUdZP80oBRTCQdphb833TouJm3mhwlX%2F0Zb5kUKZdigiJjJjHAvuZbR9qId%2BrGDTITRONb4h5LXDhcMdtgbJ%2FIFT%2FKuM4cV7kW8XeuRaKQoKzWwjHq%2B6RTtxKirhDAh0lVDgyxwCyyyAwI8hHuECuqHeecrMDMDPrxKlo6tVkYGKRVPDHm5Rd4Qfypv1FA5Y2nF4TR6Z5O1kOTzzbYhuLxqygLzUiL6RGUkc53TfgchUSpQ2JvrTJ08E2ww1x6YUJG%2BkVG9KQ001e4kW9qdRutd8MZ8Vajkjg6KtaNF6v%2FW5s95fmLYtM%2FedWVqSG%2Bgjcp1OWXsb87ZEsW5xpeJVyUnAvWjrwg1UrMDnJ3SDIFBV12923F6rDeqGpwcIeXCeYIaNL1McLDWR6laADZhvwN9Vqv7dCu9UdCRPKF6h8Llocua1hfJYmNelf08BFKCCCud%2F5TZjwOPWqNUVgFbFZJjSi83nUPZKy7Mws8wMIZZAPxaFjHmCUlfzyW8834pFn7CAB6852vNy0%2FdP%2FDJ5HGpfJ0zyc8yOLYTKcx4P18Pu2Iz7nW8MtKCHN8N1ytExVyslxlO9mMWdvcQMxA2cX8tudjnVm8MyDDHny35uaxgx79DbPkcYSc3BYMNTbl8QGOqUBRRuVPEm2tuCTuKep9KYVWi1bCLYMHGtBplG1NwohiZ3feCuuzD0Sdd9sxvtlpijmpu8GmffJsc7Lw5VhHu47TFFPFOkn7N7%2F968axOzEoIZnaIoO8nw2upSHNuvp3ys79dvkNOWp5A54zf%2BaemJftr9JyI8I66zstjeY9Y5LZJA30bZGnolBtlgfNqlTp1khTXeM92YHypghurODEFzddTOplXNw&X-Amz-Signature=546d4f142a9737aebaefe08c4d9a971b4d53a11ca2e0745eb7635f0384486b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
