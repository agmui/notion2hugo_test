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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5WV5JZT%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCICOnncPvLAZpw3ukw2nDfRSoYMPPYKWU%2F%2BDBK%2FobsHoBAiBLIYnjyKyTRpY%2F%2BN4v0dI4uzOIrnoClNp1JNUymG7YZyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM%2BhkctBRaVD6B4CykKtwDxhjVEQ724k6YaK4C0VT%2FSf2qR%2FYI9Y3DYuxTlgcQeYSPoTQ1z013PctETdc7TpYUoc%2FitczJWnMfqbz9RTK1R%2BXd%2B2QjNlDL5eLDBKhlP7oJMugZHJ7YLe1DHA82AUjWMU4uH3shgQqJHSe4GJk1%2FMV52Rs6aIxi1Ni4wPrNR2%2FG%2FqRQoMZSNIdsTw87lGEXazhCEHW4rfLcpo6zk2E8xnJyrzQu0rkhkMjrk8O1ExtrRsvohDqZVY9d87sHTBYXI000E%2BH7x%2FQj2dzsZoQb1QuWCfOoKy2iB0gnXPmILfCo%2Fkl2yLP5W5sI3aHWFIJthgR2vnSBLizlPGI3ZfSNdiyJQ29AG2D%2BVSyDlX1fjEmpyXpZMhWUQqPtXFi4Xt5mW%2FNwfqqtaPBnZt2T6L6eKCBaL%2BaSrz9OIDHmZcchoXoHehpbqbO%2FKpjw0mjIuCVEYFH3q4l2kL0JeSyUodFAufk25U9OP4KH8qYXEe%2F6Y%2Be2aNjVz%2BEgaE5dnn1VVIrpWUV8ha1G7UVycXY4ItbJv6GEFEcnI6CUVwwk80yPvfMxtLIEWO3%2BhOg7SavWlMKlQg%2FIqU%2BK%2FC2iajvw%2F8FpbmzlhNfmLwmYXwSQIzO6Kh19E%2FTG2uB6z5tbv0wwrN6tvgY6pgECZ0Rf5uL4P3F%2FtKT1y8KDkx4B1rvKBpgSfAR%2FRfg13WPmiLTdLe7bQvOijsR6oxkAcvo%2BcNqQ%2Fux%2BYN7bs6V%2B%2FK83TDmYtW%2F%2BelV8YCSXpydAaOx2FurIbILvd2MCxTo6EXiYNn%2B%2FqRMZfupEDCK7j7fidcXmipGKXv7fUjJWLCFePDPem0hBN3HrJZFvL9vryCNO9i56UHEar%2BX8F%2BOQ3a4e9sTr&X-Amz-Signature=b7a7a1d37c2ea24754b16a9bfc8b62783ed935332c3baa17e2cb328890bfc523&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
