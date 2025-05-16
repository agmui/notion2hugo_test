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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJWPTLD%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARBsq%2F4DsIFFT%2BlIsDU6eCj6lbNbkbpLUhokcDGvMcTAiEAyE7V2Tcb0ozVwhiMAwlO6k6RA%2FrJ5VYdlT6JxAYzs5Uq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDehyE4jza7KB%2BRtSSrcA%2FivX7kDF7YcRqLiXKIyaDi2hAqQyNvYSvM0wiPMEe5X%2F4YFlEIWf8niiSKa3VxvmMos9K2DqCZxZIxCpiBhFrIKbSyMBFSFhpk9iUl%2F9BoQkzkDwPKcwpuDBomz9ZlayN%2BY4XPPXKS7%2FUmQynrsJmD4iX%2Bm%2Bw0x3Qi7ILUJLjfJOeZpsuNE8hzMix2Sf7ec90GPQiFpSUFpw7bzN1gACgg6vrEgjWQVmvTBPV7B%2FbkvG%2FnVisudvvA120hTVEKFM0QD%2B4xI0uFHC9RZ74wGuE%2FLeWg4Av1iNc%2FHl4SamLM85dhr3tjPtOc8P4LGsU0YBIfv91Z0xmczv3LWwJaIWX2bM6QK2CaIgYMu8KwlY70uUG6XA16LTrvUNwvv0Yq3diRQ0NDPjRAlC3m%2BAO47Nthic4%2FMP9MNhLIAIMy0GIs5CuJNjS0M5xHc9WAfjI%2BFXTVx2Xn4bBCpa1qbMvJq1D3VUrI%2Bo1Sm%2FbzP5i43H3bvINuKJnoo7pofRtOrq0ONlWaC05FuOeloyJeAzuNNFiYEoJ3UaJ1gHoLWDNBa4XGy4XfCueaGUhbQIb1HAdxlzIShOcbuO2sCT2vMhBDLM5MmdV8%2BM6YVb8p6TXeDadPYz%2Bxn6bEWMl1nc1cNMMyQnsEGOqUBu8mAIgHRIXz6E5P6tTAzpTQFFGGyisMYtDNb8%2BaifhXbFDICqtR5%2BSq6KchGegT53fcqO5QeEysPJWleDo7C8s0G4EdtEuwlDJD5HMrqSjxFgvzO6OOSFjIoPBxf08SOfbnL1P2EiRtFeTW1dHzLEjud13yyem9C3CoDRe5WqmsI%2FN06wi2G%2FbfRmFVzppgFZ%2BOqdaLIDcPcOOCHODqn9o09JheG&X-Amz-Signature=9d98b4a65411d35bfa9185a6da607c18e186b36b20acc28c484b6b79391b7ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
