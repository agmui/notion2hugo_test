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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQS66B4M%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIF39cFIXr0obbrJVSSUQrtIwHiB9JkudzsqlIGug2BXSAiEA2Ca4kVMzVIDggQDpucnP77OBM2CS0XQ02i%2BEnphqL1gq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDETtUIn3PR9Tc72GOSrcA7xMGj7zuTC%2BBAUmRanRLmeQ%2BgT1%2Fkwi96rxG3brKeCD21XeSJHl8KNkgV2RzoAHvd9fhRClYJUvl6vwFC%2BdVNDRwpR5ZhksbZ08CwJpo4IS3MUexITXLuyS8YVsB2KbaPkVMXr5ivDjJ%2BI1GYhuKZ2oHdR4naKLMbLUdwCfLo5Mc5x752ozJoTNPr%2BavziyNVOUamp5saFNSGRasIUS%2FkiYR4x2HzQnL5l0EFPFH%2BpHo3W%2FhQ3jay8l9pUerf10jK6eZfZzkaD6C4A3mIW7Y%2BklkT5drpx2xHU%2F5q%2F3cf8OChy%2BYHy%2BeH81m%2B7ykjSt8fYukQVn%2F2%2FtcJMvyQm11UGcCIi20eAmV3hTiO%2BrPu78WT2PM9D62o3AulEQk9VCDhZ1ykofoQHMCJ4bIyQUdVAXU0kbvT8yMmPq5QXVxSGsfeamGaZ7Yp5hT%2BAXsiGxJL3LT6scYsJj8xd15UPPek8Xt7aelMwrSjcaiK9UlJdyw2HaEtkMfUf%2BFEuh7gLA8xWZUt5yDmXg3C0XPdvRyvZWira3fXk6RIHvvn3zQbwklmHzk0h2UqX7m6Ou5%2FAR4b6tB7%2FQRKYa1U6TkJwsYsNUVjn6WwHAIO%2BVjOIleKWEJaI79g7X5wmlBiOLMPfV0MEGOqUBusIifwf5PAMDKKIOehk9hB9pkUlfnOur%2FQpWc4C2bdwaDWyN3mhGzuLPbfPfGmb3qjqlD89Je6%2FYRPAHYd8F7bnuGu4yEpNvAVx8kszSfnm5wsYY5H8Dp7WfhUpL5xdxZSyEji1gCtHVkbCEQroPBNCecEnYbQxKDeerfnv9QE2FfwgltnIYOs9ERj3h0k3HZdg0pmg6p9khElGcZ4RiISOLrnBA&X-Amz-Signature=c3d9ad245c035e50e2fb61def484eb498b7d6ebdd156fdb773a268e33269b943&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
