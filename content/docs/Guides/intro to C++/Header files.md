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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQGBPRX%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDvTRfQGjiaCKmcCB9bQd6yq9A6VFu0%2FVBkPDYcI3FIVAIgIeQcyNSPnRkDJJ0uPagbe1lJzDST%2Fg0gzCW8cINfvT0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDK0sk0hLdxtK4Pe52SrcA%2BJTX0%2FcBqOKwDQMNVF0J3b%2F5q7iRfIQjw%2B1UODkWMF1aFqm9OiLTNOUOc2JLs0McSijNDBTTw6Gk7gF%2FfR1NgFQfNh77L9Z6eAjmkTC%2B42mPcDjvsZSFCaI%2Fw5ewjNn%2BsS%2BdOnoT%2Fa3UKOkG0ML0lJzzL37ARIY3vuXwr1WvsjJiLk74tJA13XUF58QhlAbGLm4j%2BJko8YoER4lZDkk2MnySUJvdooqbUoaqrXNXcHS8MMUx5zzCGxkqc5oTfCW1lUF%2FwI95gY6zAXeIS%2FnjRZV4uY0w%2BCYZTZ6aY6LBC3hqBL1mAOC6VyzKag7Q3%2B82%2BcRsmwP74qVMi50tHUz4GmeUC3cJCtM7kxDHVtxTbPzGgq4a82yYGvgKPiL3gV5pd8DwaFD7f2Ucl1YVFyXzzXYXifdB%2FECsgCnDHYtgD3gkD0GLNKnJSGddB0HcQYxa%2Fw3ETjuwgFUrkmiEP5%2B%2BSxPbnT%2FZ51QL0B2MeGpylRnywJeTCOoLKRxNay9donQr0iNBdFLWZ2iAemFMcT4NmfTwrdya9mmOYgTMFBpfdeLGEBd65fDNEtP7JzD6xWUkM2TCyaEy1SzS0T%2BoLfqwahhdq2%2B4a7GLRGb0W9e39uTxajWi610t7fBHuqlMP2O0MEGOqUBr4I3%2B1SQrXGkH30YV3IeXu8b%2BH59GEl2dGHrxPLId4Cae3dwSt2Y%2FzJRPBfsmBKpfV8B3SF4t9BMy6s%2B1p%2FKr4VrDVFOkBIxR8fsNz8b0MBTwJSx7ou4Gjxw4EUhOw9sTtD9O70xGsg8FAP1BNzy4jR6pm3OC6r15KJHGy1cISP4zZFRLCefFUTcucosydW4NxkDCLRBNZV3sh3izYVwJjJRyuPC&X-Amz-Signature=51bace6c63ef834d20d49c25647a81c51ed0d577da5f14a5707475f2e2bc46a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
