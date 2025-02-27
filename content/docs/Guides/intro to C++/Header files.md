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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I666FUN%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIEg0WnKcWKm9JfXsAM25ROxGKJrpsG2KZDXeBhiXRdVqAiEAu29RxQlcs2rqDS57B19ibgp%2Fu13Jc6ZEg0HvPvly27Mq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNWCaY%2FNJeQPireTnCrcAy%2B0Sak88XlyJAbtQFAcyn5pwccJu2qbEHE4QomNkplxCExHu42JQf569NhwFGMgpV5XWFWK53kyDI8m5YMs%2F5loEekIxiezfWXX2k%2BtS5RHkEb%2BTljp4ZMX8b4iQZFg9UlP4zAlCVdujWz8aAbi3kWqEIDmWU37gN7uxcB0my1qha1bEkFdeMNw%2BOYMp0XOvJH7Ur%2FZpkFHsvawJqzW3HJQz9nDpvoRAJlEZoMN5hbvlOwhxTzGWT6Mq6IGlUnAYqRZDedajfkG8GeoKSW0qASSfnHg82jsDVPGHfMr1oMerWJx1crJ6gzmD1dJERalrdJQdbb6%2BEMx08Us5sx91aKu06%2Bra%2Bmy55GjaFgxPzQQRvCfJnBIph8cjChOA2fgIxnNDdcVP9%2Bxt0laf041impyiMNB5NOzqE8eFSH14nK6fcPpXyZiZkFlT0bk1dd%2BbUOY5fNZc%2FVW2CGfvD0aFdyrvs5jlSzkmS52%2BvOKARhFg7a1czxsPXWb2CbBXFfddpT%2BLFN8rKmdsvQr8rq7KOmvCAHilxBtIGwPgbAmNkTAzDsKwXVtppZ4XytFVBnpgSxMXSAKglFdanBbFW%2F6uUZMwSP3CAeouXr8G4vOsuSoLTJ1%2FV6Me2uEJ8aMMLz2%2Fr0GOqUBH5QV8x4pWIt4gWU0Fai9uod0ZjY7tBq2P3PYWwYoqd5bOXNZDNyh62cWQ21EFgmeGi2Jb2nmZke8Qms%2F%2BVqrXTLo4eKlAKr9TRVzgRS9Ry1g%2FH6cgx%2FWzn3B65sse0q14hWrI%2FoR6KqYCgNmt5hUDozF4kj%2B0NjKcG60c%2B3l58EQmAuKIgQyK9BBhn7jiAnpusFvCxXt3ZdplW%2BA1sTY7UGw9hxt&X-Amz-Signature=493f00e4fbc6f7d40c5fff415ad15466f85ea6a6616b36e10aaf8c4e5fc2a14c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
