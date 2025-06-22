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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBOHMHVJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHf%2BZpdO8aUEzaFcv1kfQUrwr8AYNZR8x1EFPt9qXfCqAiEA9QUYVV2UwXmsTHz0muxHb8r5TD2V%2FCSLuBSfrFiz8NIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpRKrv7GR4czahPeircA7JJHTjFCZlNIPhOAQn0UHz7CCs32V4E6J%2FUH4zqcfyxt9SW0asez6c2ZV9Gm5ToN6vI7Xb5qz6vYLfu0tdK00pYamBOFCay3LqkRsTGEsOsZhH%2BIu5dtatgrLYg%2Fnk%2FR0LfbgCdxfD0Qltg39DlhaNvDBPlVMO0gwLrGt6QoUgQ6W7UprcrPlUTLEnDWrmcHOmOQYdTCmaFRw1qr4JmxcH18gDm2F5OZy7B9IsQ4imscmjfnVsuFrPFP9tbhGYu2j5zL4m0UmZFaBOBRSAJ0WsNm561qWOHUgHoOPqpMco3p6UQib2TCCTAW%2BPoi03%2BaW8YisNTDrRwH0%2FTGsqzAMtWenwJ%2FyNrqaecR6du7VijBe5QaBGCWVifw4XHvF9zMjBiKaviJa27fgTU6YxxtxIJFeEdXriKUgEbwFpyKInJwA%2BXv4ESLc7W%2BFK0En4FNgjGnGb3ZtVVEbiypch7iA5bpCROEFIzM2qhY1TbQsB3pdo3eWza3g0PhBWOl%2BK1iEWqu%2FZet2PyQ8ZMrHe60%2FzcrNLaOydHrwXE1ebcW4Vd2IKscUD7BgrciNX0WChWwxI7LCX6FoND4tQMmYTQmyiDu4mcARkABhsUIc59rvAo70ekZ8ZNGPrLac2fMOKT4cIGOqUBHRTM2Ht5c7bp63YFMZ%2FQlVX02zKvoKKUXg0x1ncX35ll6IWXkoj%2FTSufHa8%2FUj21igjwwuZOEVrmaFGqpLEbfqRBHJcsJz2C4TUnTub17aAQti7QXCHUDrEqRz0PgY0r4N4JZ9JM89l1QUI19Jo8cbPbiWQtaONhuXodu0g86A7zRVwOiQmUoKfOJHima%2B%2BC9k%2BY57V9VxOI3LDgh1p9Q6DSDqpS&X-Amz-Signature=53a98d008eb3b381364781b312ade50257bb03768cecded269f3a7d7545a7ae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
