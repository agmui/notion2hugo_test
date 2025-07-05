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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5HLLKU%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIC5H%2F63Y6q5cVSC%2BcynEasqx2QQ8ZJxwd6bHwL%2Fm6Fb6AiEAop2RIGxJcoZHLl7QrtEyCo10QYJygmqK2GZSTKGXrRsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIBuJkfwCr7UkthrLSrcA%2FjjoMrq%2BtkXz8oz%2B88qztLerbnSHXM6QySzSFgHM7%2BuiF1KdAwXqCbRf5YbNYh1wgcXx2uisbDkVF3uV1IBARo6om4reWLro8cVFJ1KDuuUk0qWEGCh%2FoXptCj4bRBFQNMmWhFc5dNT63dj7LKsyWnlcyRdes38%2BxfUECUzr2N5gA8cd428G9FMI9EPqbDFLhwERhzEHF1dCvkf2HyBgkj2zBwOYtmFuHRnzfOq%2FSvFFeto%2BAGl38CLxq0icxW0y3IXxUdjlxkKhEifp1c7k5QcALdij6y2ZioPQI86gR%2Fzl55Hwm7emUZ9Ss63jUDwMh06l8C5o%2BgvE1dyVDX6SrvJvgchGrLcXdbeCNAuESBQLs%2FTYgVcC8DtAYR9tmrqXQRv3e6CV9rgWFpoU6LFhwFrOvSigDggp2lQrDKtM4NDYj6yr9O48yWIMawpdAiqF52wNv1BPb7nxlpPlrwsbaxe4i9VwpPgYheKs4yHRIi7Dd7Un4Zn6BxPHR9BAstTFZQIjFFPOzOd6SRiJsaJiNXPM0Oq21284XXp9zrEPPzYLRw5f59veyncO4SYAb49ISM5ACEGg4qP9jL%2BgtHJn67BFDOKVMDamSkyuP6bOb%2FDevrJcGwmES0yxXn2MJiqo8MGOqUBtLAAJDpPUxqaG8SEnAJ3S8onw2sAuFpM6ZND8Uti%2Bg2rkI1TS3vS2DM3lKBKTdenyFwHPaOK08aah72KeSNFk1HpFbtg5e5JuiHqR4v6hQ9J6opDTLDdrGbQ2FfeRUXn9HgBbZNwbz8xfKxnGM7iTv%2BcmqPim9piGiUoVwNBV3agAjhuR%2BC65xHw5173ULYicWfLpD63iCoPEx%2BYnex%2BjlNjADwM&X-Amz-Signature=4e64d435c6340c26f0ea3049bbe6310e3bb1a6cb0b0f70efc11ec880c0c466ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
