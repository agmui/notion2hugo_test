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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKOU6ME%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCRlbLU%2F9QmCYg8wHP%2BbhDNGOL0Nga8aHNegQHEBBJxDwIhALAJxeWnoeMo2h7qzQjoOLTYiELBngg5bXLwsv3b2I8lKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQJ%2BNiQx9Hbvy4fnIq3ANdr%2BW6zd0xz8dBGDvGCw9cnkkDg3aBK5iT7DwucrODGwizN9XLsz5CoHncWia78mI4UWo%2FPXJKMNx9TYepO6hBJHzG2BlTJ%2FmC3K1WNpTOuaFpxWKLs965zUmqTwhdsQrxkfXFE%2FFm9yxyLXcx7Bfq5fp%2BhKS3sIraw47T9MsiaW7%2B0lgPFClVt1%2BP6c23PMRP72IQ0eQgYUAoWkEpaAclyTkDGGbwbKTZ%2BZ%2BLNZpWQqS%2BLIKWeFrF5BzFm8%2BCGpI9Q3RhEbFXIKNzHM8Loy%2BF0o0dhuEaZHcKXfqjuuk1rBX3LuH6TpqYOwwEhAxZZxb5DsusQL5tCMN1oodrJevWhBC8dAPnbMXqPm2%2BFPJaPGDmKqd4lTxqJzQar38IdUrV0eFEy4yWO63GHYuIKuZG0TZU2CRFCFpEOkOdt0MrqelaN%2FHQB6b11D6HxJrhEhuIh1877k8vNvYDIaCrQtgUjVs3nevaLs%2FB28d6m2B0cyKXJ466R1ERR44kr1ASwquucTNWCfJGoylSpxE%2F4ztTJniEfDWoT4JmeUvyvL3eb26%2FEQ5dbVgKmN3xKCjdLAKeRVuw%2FJOSxD4%2BI7HZoP5mbAi9MkK9zuURIDsI0pnctIUQBUV8%2FhNUxZUPVzCG2YjBBjqkARs9rV9A0wtbAKMl7HklR4mNj%2FroNwtFLeaMVNDxLiLm1bQ0eKF1%2Fnsj%2B91hYc2LZjqArMteu3ae7bkMvoQ2loXTnQyUnpgcAJkHDXTVxnEPzSdlStacAmRKz2Ku8p03D71BkBON%2FmPQ4pZxdIOSlTIwCBNL3X1i7xfI3REuqt1DMBhg%2FkYcaPfBYcN7w4Bz59kUtkI8H0B3UxlOGNO3BJQH4KJz&X-Amz-Signature=d2690e3ad65f515502f5fcff80200306a5a4e3eb903f910ccca01642ff0391da&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
