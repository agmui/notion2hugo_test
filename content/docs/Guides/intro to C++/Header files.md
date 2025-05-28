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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLUABBX%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSAPQ36EUMa1RvWBYe7UsqX%2F974xW%2Fp1GsZX1oHEdAiwIhAPXI28neweNPI6ouVvKAdBhwlxa4EM8yNVXAJBrMqsyKKv8DCHMQABoMNjM3NDIzMTgzODA1IgxhY5FMSLHXJjey2ycq3AM1MBmvWwdjAtnNQfXPDNu%2BaxtoWuW%2FMwU83Eyoexp09ueIDW6WU7iDVMoWNw96UsuTjLqwiG3Nd7xz5MgsfR89mQ10WDK1ylxkDbQd316KD4pjlg3DjpAguXH8FS0c0tw0bSuZKTlyV47i%2FrAeU3gVT9BN1VdMhvah052nCPJ95Yynm2lWx9QxwLq0Rq6UpR3FF5TmYIgmwkX7jWDA%2FWTDXzC4qo5dy1PI4Yp8CsCmO4dSg%2F7dw7kLp3FrYaNItsRJHR7dMn9rx%2FqaWLbiALedlnXB6durTAfvG3JtjBmIhvE8z7rPfyYpXj2eTw%2BnRbUp041lpoqgjJzW13SXbm%2BKoqhoU7M6xKA8YS0pA5blcwSyJSAuWe%2BHh0LYJw7j0OE468BLjCVAxjVruUk8YgP5PLi1Ki%2FEXa1DC%2FQ80rRq5LhfgDOOrBVPgK0LpCRP4Ft0Zn4%2F%2BWH2S7kDuh7I%2F%2F5B82Fxe8En9ilhUZbCdi5vatnYnlh5yvEgd5BV3fKgTREO2ADAZO%2BLJK2PuwhRz8V8Gd%2Fg1TaoxfboUHxKnVSHlk3%2FltxBoxWemsztZv%2B00prqCOHpCuRz8efxYZR2DB5TeTvMSoPpUkaUgfIzJsMRKW9RTn%2BjxqjZaoe3EDD8wdvBBjqkASdy2S9J%2BB5bPHsiDZ%2Br4zYPiVz8L0ZYH7bSn4vU0xF2bWs6JEjbEcoe94piAT76aKuRZogtT%2BEEnVurpc9%2FLc0b1vDRuYPVFf%2BAN8vItx9GeaeoBKvI9NkVPqSVnI%2BpX9toV1RVTllhQu6L0lCJ4TbeJaNLaYCVLVr%2FL7d68WFeU%2B91OOXhIsM2nvm5PP%2FF2YSzu%2BXF7HHHmcBhhz9isaeh5yLL&X-Amz-Signature=2e0ebb7b8fc0e0d72eb26d3733c599544becca81b586aae0c35236b02b584070&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
