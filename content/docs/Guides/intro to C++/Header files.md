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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZV276RZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIASJetVLa7cqY935qT0jOdyZZfOQVdabU6jN8C6Ey0XeAiEA6CLfRSuFsflghajcF1uakiRTVMNuMsKTEP4iLynVyjwq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFqszfsWrlpW1lRFHircA8f5KyzCDV28yew1U1El480PTRtLDXRtu%2FWLFfGlwDVo1rv2mziTcz2BSPW4%2FmvowpDNpsBcHGiRBTzSxy4XZKH8HQ%2BMV2uZwqjRxrOsx%2FUBxItETt6MQSTl2JhNvP8l97Cr6s3o0t4fYeWLmOdRbza40FtGEkTxgXMWCHMtXH5j4i30JsOfsW57TKtzmcQi2eTUwGXCbIZqXy%2BtkHm3d%2FugvfjenVb70egIY5OHkG4riejxPjnwd7IzApfGcCPoWAx3SF27VHN%2By6i%2F4%2FYLTcXFgnHtpxJ4uFdiBYuLr9qb7%2F%2BftijmOhlngjY%2BsAbFiQDLlngVd7nCjWWT1Tt8hZtgFIRzo6fAmA%2Bs9DkBspKzNO%2BHmVLvy6ZI3KuVkSVH%2Bq9W012D3E9qyPaGdKDi07YsVb3G6QVX3GIsajehZd8GtrqzZI8SE4uW7ZXtXPPBvj%2Bi%2F%2FTqqh6VPONiv%2BMqklm%2BP6ss4fnGBSeXgj53ZQoVFHk7ShzG4LlynuC1Kta9JQabgthYBJt%2FQ8Hr21GMBD0LuGB9nxYju1PYPJ7622PO75mlEsRC11MUj9TpNW9Xt9TUPPbB%2BvJpolVYKJnCklD6miwhzmYLV%2FIdLrF2ixDxYz3o1A2PpIDpjaZTMOC86L4GOqUBSB3KzYGysy21cgP8dRSgR%2FmI9Q%2FEyTI3HrZxbRwlXXTPI%2BUeBNCyil60%2BlUjlzIgYRKcqwsiv6JqjXzBcupplXvWrMkYXBCvDh%2BdoryNykf4Eg1ay70AzCQR01icn3ev3wBVnXY44jN%2FNg6HvJjPgvjCI3avgqtFf6CKYSexJZAe%2Bmmjj7IsA7950hCY0OKa0T%2FXGAOl%2FASvjrRRYbHk5yXwjTqx&X-Amz-Signature=94160330bba4936cf8303783cb7d49999e8358fe4a0e8e99fc5ed63a2632d2e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
