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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZIF2Y5E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICyQh8i1Dfn26fpVLtvTUku6AZzb9uJa9D38Kpzc3UmoAiBEtbsChLFB5UFlP9hSNfPliKwF3rcpxXSSnPsfeVAFdSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX78wyCXlC3rFuYAzKtwDBVcNi%2FLS4UkAr6LxNrKOCaMUWxmxaAKZcvZYBtlF59mlxQh2%2F%2BsPQ1yZ%2Fap3wg1BqzIurWfl2HbguRMzbQUyI4UcGWCjDxXjn0QQizoxslKbHzLf8Ah2gDVInEd3GTZoHkwdbrspSHTRN4D64%2F1sQ%2BrhB0f%2Bl7EGpm7%2BsvfChG76bhRNxbiEtRDIhK4%2FmiRia4JAttzCCiYeiFp3t0dptj%2F0wWygsSn1%2B4JeA%2BObOijv0hho0NYDGVnI1l1Wm7%2BoL54vEXSTeeJruCsVuoYnBtoWn1qGNzAOs4JKJhRBUil6bNP2sjxDoLg9y2PO5DCR%2BMzmaeporn%2Be5mQbziF71dDXG84IIQoA9ZjC7jbrEf9Bkx%2B7FtJr1gNxBEW1Is9tLSL2KIGnX1g5s2cTbLvJW4%2F7e4mfch%2BTa9KGPI6Pz0X%2FwmzsYHNScZgHoXjuGyqbcjlPl%2BsJcm08BsImZpHQwayx99HzQ8r0Nwawao535Z1nI1%2FDpSpZJarmBLNJY%2FAhYMnJWJIm1rQ0tNEZRh8C45YA3Lrk9928s5xN%2B%2FV2O2UGHDX7apCJvfQYCZ0ngPYiF84yzxjoHmVQY41nHnyQewkOe7YlSg77g8E3VsYn145TdNjyDWT0i7vdB4wwnsTbxAY6pgEvz3pQUrqKSgiLQ3ytATooVzrUHMA0F1DDpAQTEgcYInpxMoXXg3bkDLFehFhNcwoO1H13AupdLBuatNb0eFF2c9AWdW1LilSv5iPzg5aolFZu%2BHgWOHDnMWe%2FGASqDo%2Fj2s5LpKTwYvOht3gSQ0kchFD%2Fv8UVKaFPXc%2FbYzS8%2BGooZwsR0SeHsaJQIN%2FD%2FWclVaz4hPGBm8Zy8GwLYWFYnM8wO8wg&X-Amz-Signature=214205ca90c0d32e60bf9cb2f7df344b4d80866d51e63798172fe3866460dfbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
