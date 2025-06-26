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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRI3GMPA%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIF%2BHHpTwM1uATm7RPL2odUgA8VVULlvc%2BNTjtNpmZ3XxAiEA6W9m4aYgy8IVY1dgpS%2B6b8d%2BFPU%2BP1QU7UkyjLWawAAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNPd2kqX0AuV0ST%2FBCrcA1Zk%2FOCJ5ETFwSwEoTSZ7GK5%2BzFdBhMy0EAQXIUcJ%2FsXcojfjDAgClbyRVeAN9T4n34%2FnDf0TNdVYTqspT2ig7%2Fje%2FFNgPKcWo8NPGHbEho8qjQy3slgbULuEMFrpMcvRRwUv0c9Og9yNcJHK0S1j0XbIT5jmdh0E0zsf1we29%2BTsOS8TXdbhQCumtX%2Blv0AIFqheX30FkxWRdTnp%2BdwBX%2BjDI0jjmrTygZb%2Be3IQf0xctX%2FHnX9aiA9WWiifttRegD0Ny7780c0v8y8c5bDNppBePOWl6XiTBjw1OMBtga2EtAOZEzUF98DFQ0JiMGE4XXS6fgdto46QxTX1SChE6W0Fnp5%2FpKAJKQyy00XJg48Q%2BK3d2Px5LfUQd3myzeCQwD5lYxIuyaUNMIqSbbWKhzPw3c3ME87AE3zUrJqkdaN3NcS88XiOe%2FjguS23hAF2Nz4WZj6yzHqEQj7A5XLAQlaGMdRQdrtzgf%2FiBPDBS5h22C89ldgWCeUg07jF%2F5ZDnVe7ForfMXMdgasY011OAir003S0NMiBXiY6GT9Vic%2BktG9kHAPeBiWaDBoG%2BW4uPwm7%2F41o%2BjwWQCp%2F3JhuwUbFH%2FO65cacURf%2FDy%2Fj48cCc%2FbvWYlA30ti%2BYWMI7z9MIGOqUBPrtYB4E1jmMCuSPYwLS1oqOwEWlX467L9LZcqIG3ifXFW%2FWvs8tUnQO6zJlyrThuptZPJXt8h%2Bw1ko3Ef%2BFlDdPBgr1obMMmlQhFgg%2FilBdxIqNutIS865Gc1D4D98mWutNhEx3j3Y8kTdwUJXcn7MFiJDHOEbhYcWFCqcz%2BCEsDBj%2Fbx5Yyj1aeQ%2FuXNT9n%2BXhZtL%2BRYQSR%2Fn5Qfp0SRHBcAwjk&X-Amz-Signature=a38ae48ead5ddb4ca9c5af0af1c83fe46c4d57269678950f61081fca56b2b934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
