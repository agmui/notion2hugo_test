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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4DTOEJT%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGo%2FcvTy4tdJP2EbK8HxF4N4bH5ddeluDseBSCnBM3tiAiEA6NALF1PsmArgOH%2BUgtRUhT%2Bwzr1w6aKm9MSIXBBmF74qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhA%2B%2BTu7riGi6NQiCrcA%2BfeswsDmsYC1ZOamez1EjXuwfmmWJAK0euPNBkxgoHlGlmFkUAzKPE5JzOYVmO0bvHksfXIqbDQ0uGL88wK1f3QR7l7pgQ9%2FvpuGchzjAy9GlyMCjuXdrSKjpnFwdtvEOuhW5xoTy%2FBfw%2BKoo%2BqwDJo3aBNa4xWG2303qBhGi8HLO%2BV8pfr70UG3hI98Kz1Hh7qbfp1FXPjiLisIfu8ZL3HLao0sDgFUk6UwljujLwW%2BsUEPrM7v75xuRJcAl8uZoR9lUUcNEVDmhePFEtwu3LUqs25iCUTQWdbPt0dzPZ4RHfEloBusy8zG1rHNwEyebGn9huUYWwMgvYtQdxQlv17vCsRxFXZp7WMCSJqxE%2BPAjcLbaxn7V4p737YjKKhw1SipANMsjEKtKtjfHJ6XjA5p9SoVj0uvKgcJiG98lDWfM6CExop%2BA%2BB92Yzyunn1UV1LNRkFiVv%2B2Cbh6QmFDH80%2FntStG5sSgITbTo9qoBQzUo8y7Ze7OvtL091ibtTwlZg%2FPSkOl%2Fl8ffKEAY9g%2B3Mfw50avgaD6o%2FLRnuIGkuiIBXCls1NkZNdw87Sdf8VSsYbyzXsBNGbPCjCd%2B9%2BlaSRVQewlTOxZDMTVxF8e2g6lj3%2BxRGhR5IFgPMJmb9r4GOqUBtxl5dNfea%2FIr9%2FOd77RwfIo%2Bdhc0X%2B2eV8YpuLi2n5f5BtwSaOs%2BaxFBdFER7y40KgTBX0lTn74AgWf9jMCZJ6htdB2vA%2FaiGCSz%2FFIJkpo8KPzQcxL%2FX9TBL0PaC57u1wH7jpip5yIU1FeoN4d4RaYpPHISVYbiLy01BsQKR4Vtwg84vmt5dyxjwhF%2FIMgdR0NISPEPXo%2BWzMlkyvsEQeoK%2Fg6u&X-Amz-Signature=c4f21fb4eefdcfa4be1464a6fdf15bd5da1887b305549cb0f47b78aef78e6617&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
