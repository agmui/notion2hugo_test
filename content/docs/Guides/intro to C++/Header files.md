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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3EAFO5Q%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGeRFrfIN4wCSAobT%2Bdt%2FSya0XfvMEpAohgCfpIGIoLnAiBF89I2Pdd3dCJO4z0Y6xGf2OPOLHfqy%2FP1sBfgig%2BAmyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMvVWOyTAFNpVN%2FmjMKtwDb4hUJvZ3R7q2NQoBozLPnnCbmi79aqFMCyB1GIMStpNwLrqQPboS3rHlRNwWG4EIuoTXXTVareDB8yiFUen48vyNVeiW27sJW64ux9hD6XzhXkDLM8gaR5GWpYNuMFH1gvIW8I4v7xkGtZGEymmIwtkWpOCdCdpNZoqF%2FJtlNr41FFFjYHB%2B3SO22XX39uBSYhrICPSZbYoZMGUqOmK8fGVC9Jz%2FA2eQanXOojzFdbI83ri0p1sZ7H9PeAFaR8mb1x6AozqeHwH8ABlvhv1FMqniv1PbKAiIAzyohSMtoJO%2FicqGQGLZNPamjuXYEactQ84dDSfaPnszygjGCNDRnzSDTpd%2FXKM74m9oiol%2FoPy9FTi4PUZmL8O6UOxtSi4nZz5xE1%2FMovHGGVcsFnK6vC7MbefPENWL16aYbiBvdXdGPhObS%2Fg6hcvmoNSVA3d%2Bv8OGp24UQ7ejnxP87nhIccbKUXE00uUtKSzZFp7%2Fy00%2FDbVOyUGiIWZQbccXWoNOCSvaW84N3d28J9RcaVjqi%2Bl5AhWxDAp5YzejOrJyXdiJyktN4GU%2FJ2B%2Fttyloj8CclzoJsgvlpALMq%2BaRO76zTGTtg81p6Bz6vi43tGKtMCaMR8fycQ246%2B0pXswp9XmvgY6pgFT6AkmEbi5CxqYVMhaezQAM9FiM8zMcNosCIDd4FQvVZ5LN4N%2Bp08VbRU0irIbjtCcQrgXyY1dhm2VG0lLSAyE21ZtglhRMT%2FsM9Y8pbFnM%2Bld%2B3Io8r3tYKaZtRh7XXmKodQusX5pa6X4e4Ca1KOWxIljTu4DbBOtjzKKR8oe%2BjhUToykIk8v44QYdzNvctJgfxgSt%2FFrRuS%2BFGmvwriGHKwPF2wq&X-Amz-Signature=6c367cdcac937796469d78ec9451135aa58bc343fcaed8143efce1281f516983&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
