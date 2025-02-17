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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYQFLH3P%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDSzrobyuGgtA7q8silTRI1HWsAuyWDT5pHfRyUqjy6PQIgTYjmjCAJ6NI27NICG0vCjscsdkNZhukug5yCrFfW5VMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIS%2Fa9GgDSoSFdaG4yrcAx9wCRlCxMuvLNlreG8Z9Sow2jSmwav%2FhHec1gVPQZhdahHdOSVXuJIPywfZcPbG5M6j1Zv9D0Lj%2F7SiaXH77Url9AWN9FEgMYt3HWihSjBiO2crasITMB981FBkmKdUUxpKZl%2BWbPr82NKlmDa272x75XIQRU1gvxdlwdNb%2FWNJNsRIXXbnkKRpL4cKMD0uUqtxuCkQRDDaDB4JH56VVhqxrFmq%2FEviU1K87Zwun2kaAqXc6BZ73QKLWpPGnpwWKuZgKGSd9tfHjPTMYq55Kszi%2FlC6AN5ojZrFGUHwpRHiKgVfOSIPo2hQDYcH0PimqWCYe8ztv8VCfUbBIkvPDdzNLJ%2BN7bVUDP3D4%2FpLZDmrjzuE7l%2BKmRlXCc6vBkPSCnMmpex%2F1RwQJTtyzakgLSVO%2BEsE3BSgo29vZGDevKP5aDlNw5itbTzSnBSUGt9s4zbd0oZcTuljRUsPBOVy1Eaww4nnt%2Bo%2F4aWKV4B2tC1o0F%2BM2m6htTI4rZRAuTVewvD038kOfYfctvVGSGD6WT%2BinWhtcvE06vM86BrXd9YG40FnHSF92pSMEPpPe6pvWnnc12eCxwL9kyX5Ai9Mtd2b70dlYctDrrTkqj3D5qiKmH%2FaxAehuJt4buooMIP6zL0GOqUB8DnITSIOhweGVtcy1SgtFq6KV4VZ8USUUizWjBhHiX2KWVsSKznZQqG8w75DyPIyYVRhghBC022%2F6mVAV56IocvMiO3Xw0n5m%2FAXLDna46UiTWtFv9ie06pztmZiUu1ivRbQgxZXnZQEgYr5sjtrrp9sYzh54ryfaUtH43MFAm2W%2FGPxmn0gAQj4FQzXhLaWem6PhpZFnYbNCx6Nvtq8aMWGsmO4&X-Amz-Signature=d1fbdd6472dbb05e958f34a99869a6eced97b21d0d75e23f60b3769892b98aa2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
