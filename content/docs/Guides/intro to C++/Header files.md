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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLWOC4SN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAixyuXVld6yYMrxH%2BLzcopirJlELGNGeUK6NSRrao03AiEAiq37OUk8RyP3LUPvSpU07fPRpdHRJ6mMaTejPT642J4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOmv7xDf08J5mfVuxyrcAw5CC%2FcflKHrlq0nMRjjqZ8s%2Fo6eZ%2Fifx5Qlvr1W31aeUPR3kZWmDusSKbRcPAMAfF5i2lbnPOqKR8nOjgX4WfSvKCQF5Zi75HXAHLTOKEBKCb2VHtXMs%2F4HUlUu%2FGf6c6%2F0fgi6%2Bf6iKIPlzR5EF%2Bf0P2uNgQQ45IXtlFrXwLFJwLKvDuCHuDfNdjJhnQvJodXIcmzy7TqSiFMkq7gJ6Ovea0TkOFDowB2TxAUMNyT4STm68piNIXkz92I9EtwanxKI6%2BJEgvJpKJDDuDZuwmKsxEFplIW36goxD%2BIGrVsWXEjRY3E%2BLZbqFZIhHP4Jnl7Wce3%2FLQT9dEZf8zbBZjX0CYYWoTiZqNMffZzQEagnE9cQp7BZwDzIcHTH73%2BQj%2BxYuwUg%2F9%2BAgv5x7bL2Y4jhICtP9SS2XaJPT8fVB4Tjpa3NmaA9kZiyiQbBIqZrKkgbHTiM0mPhH5S1zpmRC1%2Bg1i%2BRf2dCi0dk0epg4ZSkUVMn4bUGKMojakicNM1UaVYF7UstkbHtomZ%2FaCheVAL4rXmvHgHVgUpJ71a3uZ47qQK1N5LjY1Nfe0toyjV2PvFI6l5zUa8c63YbyBEapOgoFwelInAuZuKpxq7Xft46kX4epAj2J4sOEm9mMLi8wr8GOqUBUc9LOtJ04VxDARFC%2FUIK6iVfL3VE6H6HCqL%2F5HRj1RfYqUo2lymZDeWlGKJU3DwceDaSbepK3TcbtZQ%2Bcz%2BGvSn7z3G4x1RoKSkjTzUPnkZxMIH%2BZpGlzdGK4pGU1aluGW0Ai6a2hefymax2H6R%2FEm7owkz1irukQFeHI0u9HBfqpKiCUKWLuihF465rkQnqGMTI4orzPe4cwp16S4C1z%2BFdjrVH&X-Amz-Signature=d87e83af081f25036e268dfb92524cc805f846dc0482a774e26121414d232ec8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
