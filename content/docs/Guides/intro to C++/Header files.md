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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6CV3R6P%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdFPAH1V3hICTgSH4VWQK3t4yiuCGj%2BdS9ZrkqcN9DfAiEA65A8pkDmRkZFFHHCNAPAqrLgrCxeGat88clXE6jMefoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAlNRYaaPPTPyCzKJCrcA2Gk2L2NxwD53EZ3rPMpdC3HrRGbEGvtPmAtF0sT6VfHpsMO33HQ8k54cehgYmCjcWmuA8YDbUVpEEXBmwgaVPNegqdNchm9bxxXdAGXr6S3I0HG3GC0QtHuVrqPGAaIXj38Fx24UE2vtpVzLF3sCHOFKw9VSbpSCfNo9igX9cC%2B8jshizUlWW4Zt%2BfnJ07gxcINPhpgxvWBlENY1oRqylFaf84Gj2dwqonMomDhouZEt3%2FsEGXSrQMAcHzh8p9NpEQaETlc3VCbsJyVX3hnayttNOrP67ZvaxR6cgMfhogBfDPP%2FfNkkEDYmGTTXxKbD%2BRtRoLM7zur6Pto7nvkx%2BxEyUGnF7l5oe10%2FDm2em63ty52%2F%2F97X8k5t1RCmFu5fRHrbw6C933H1Ni3AQR69wZ2XJYr%2BgzarnUFI%2B1Sq4wvpocDsNcPphxvFOwYJYV3dL02vXeWdKZK9Bq38PkXKfGJFVT06%2F%2F0NJFLVrFgcWQM%2FDTnixWBS%2FLQhMmJERoev6rzdGluxTROl5JyH11%2FHL0g5vTXABuSXiNyha5ovyoozWWhie%2FlzcqZnZ55iFn25RF%2BLEHnudAGn%2BWiEKADPSUpC8WY6Py8%2BXWtWyrXRMz2nWJ6XYdFp4p%2BlfxMMMj6j8IGOqUBV%2Fnwto36fzZ2uiBiBbhHwLPAtYqa7J%2F9%2B8hGjC38Te2RftN5ohM1KIMVoJKYBZn3xrp5OJyq8%2FgbOLSPdEuWZike7VITXEgLSAuT8ZclH3bu9UeA%2BSldYZasSi5Hoaud%2FhJ0Ejpbofesykuv0wdjOn2umOvShhqbJ%2B5fUePjCT55uIGQQ74MvDMWT4XdzVmblzE6hiUrQ36%2FnxUa9W2NmOLxeEZn&X-Amz-Signature=9c46221227243ccfb6a65b2a29cec48f9817e9296d9affca82b4a93c083aeb7f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
