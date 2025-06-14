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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSA3W4QS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQC%2BCg2zMn5JDFz9%2BXCwrKijeINy2np711%2F9sY9OJf8vFgIgfBcbizSc%2BMIfkM4d784TUMxMDRxfjNkcCu9ex8SqDWcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLz6U5grfsViK%2FcjVyrcA%2BVAnV1zJVyjR1MtHSn4cbdHybQfOV7EvVffeaHS%2F5%2Fg9poiGmQRQCujM1M0gAMWSDyPcaRYUO%2Fhbx567HA0Ph9w83rCQAVldZupJMOGLvrjPQUF82FHFjrGXQQI3bDo%2F7cFgKd6%2FwhiQ4bEgfIT0XvY8FkSMXD7X3cSjFznQvH1XVlMCsNlF5Uphyu%2BbhH7PcnB41TmCpH17RZe8fuNHx4pTq8p4K2Auhz%2B%2FUJIeFxVs8DUmMZVcY5r%2FZAaOI3LrXCa%2BBjAVGM9Kc9XJCmTfQ0OKaHfSLNeIMSKkVV8tTmwA4g2bRhnj7C4%2FGIwISphZhxaKHPLnIjzAtBuWm81R370aGPDOaYNaFBxciKhN9bN%2F0Oh1%2Fbu9mSK5j00RkrP42Ul33uefK9D9RnrSFgfa2DPgDrgyVy7xt6GnTuN%2FAhIsjBea8rQADV5Levh%2BB82S4zJdDnjwyMGkHo7czwL%2FvoQZU2nCWc77AUBkMeafA8VetWOtNsqMZGyVJh%2BuhmqzstL8Jq%2B%2F3irdCMjOQhmvIPi82GCmAqhK0xaVwVqYBh54G7JMfIT3Wul4Hr0jn2CGX6xNx9nVmlCbxsZFObwv6TBBbzdyK1CufigdwbCalmDu52gbyDAhfRCMr7MML72t8IGOqUBgMJHFVtMLMlvW96ElOQMGcLrH0ybLa%2Fxgi6X1yO%2BEXxxmAAhNjY%2F%2FBnecjOIpJ1FpAcJ91T0yoiNZ4kqh%2Fi3fb64cTS7SR0e414CIR0Z5noqMYLElbiDsOpiZ7EEQDELfUF8rv6CuRttsDQdE7NpPhU1jNCg5hhaa5lYgkKP2GvPX9MJtr9DwUCkxtBp5BShtgnpGFnpB664gh3Grc2w7gkUJFxG&X-Amz-Signature=7d01e8ab9cebe3e44d4d74c78d00ee4c8a3466df7677152c729533b5e3331667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
