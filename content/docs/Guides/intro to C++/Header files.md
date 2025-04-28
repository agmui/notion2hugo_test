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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZV3AXD%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDof1Quc478%2FqAw5oDKnnaYhhCN5%2Fp%2FuT3SS6h7Vz%2BT5QIgI6mHZMJMUYlsQVdHvSFc0vxo41LShl%2BCdynp%2FHNJIxwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMIlPoRLtXp2MpHwbSrcAxzDPwQcBUmbR9RQplA8Z1rhflmADqpiXH1Pkt0DYXpvH46RIxnsFYvYxMfR1rwdJJsD%2F2aWbBOY1W%2BPrpnctQXCdCyzEIHZF762Qx11EZ%2B2QOGs2j73JRQWM4f3CZx%2BAMQbvYf5v%2FBCBCZ6ei9xyWfimAZW5rFrWes8Wpe5Wm0%2F2N9dg99nxVbjqnCkDB1GjFNf5AAl7aLINaJaNe7nLT1qKS%2BUdWe0ua9Dm35tJYevglOAYAdBm88eFzTnhhWANXLG7gDQ9v09SWzcIuKtLo3UdaOrp7hBsWRDaSeHtGAC1B0dQUPJ05wX7u8%2FVsuRM6GGXT3h0%2FKXe%2FTVXaRfYR%2FD3cuHHpKKfMInr8JpE0WAXtxNEMbVo5AD4nhT812VBGNYCMGUk7%2BLmHdO%2FBG1O0kadsPzQAtl09CYbudQjLLfsQtAojkEcwby6gCLh170sdnEiucb0rqM6Cf4YfZS%2BJlTSVNQUNueRXO7mJJBlRalNPSnCLEzRpJDKFyB5PE7gpAEDEyFc7Rff5hGfyO9BhQvO%2FA2Qv2MZdutI5rAN826IKVet%2FSU6MbEjtztE0kwl3JhsKdtkVHUk4fnBfFtN6z7JixobpzfwtZMxg5HS1pOriWeRawROx4aPKpgMO%2F0vsAGOqUBYwBRLKRJ5a2HFepfXc1DQ3NAkK%2FwMYnuMyA0fGEczMrCt316744W81gPnLtwZrf3yY7bIsC00N2x59DJ6o%2BcsFUkV5dDp76fmGoQbY2TcylYNFZznf0%2FflEXR4DYMYSYWO5TNAVAvZzHT5hAGpujqjL9OU0%2BdvvlkdPZDMz8UbGIYUPlH3fXONuFGfUXGklVWVDrOfqAN0RnD8yFCKIKmvMOZ880&X-Amz-Signature=c430b470dfc64f89c61597df36f5880f637be321731366b707252c196ffe6684&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
