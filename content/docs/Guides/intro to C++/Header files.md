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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GXQA63Y%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDRSiuomfnYQJ%2BLbFBcWPiczEg8azGmQrX0L07Al41h3AiEA%2FSOi2EHJm4iv85ugDwIFADVRw5494QlzsxOrurZRlOsqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3QT1yAbZ6eWMd%2FaCrcA0hvsEna1toD%2FImq%2FKD3SrnAOAe4Bt4VZmwbvbKE8%2FOrEguhZcmeUMHX48NVP6%2BMTBvntOjdhJHXC6Pcr%2FcNpiBWvZM6BdfLf9iJJug4XXNCSFKiCOyFBxLEE7zdZjwLchab81AEjjfpQRQP3hlnHBoLpF3SkjAyJvBlSexfoMLuze4q08HezshobV4uHttqSaL3DlNLo9lYxcwHKonqgH0hvBdSpXJsMiLpWPuL%2BnFRcSnnFW%2FIaO%2BkKJJmEcIIRIev9l6WkhjLmxwDIzPSW8GUMgaLjAopFI4c6A3ngCw%2Fmgf8krjKAiqoCuaLXis4iQ0JxqOhaY44n5D1KXIcXdwwLprPbwzG5BEN2L8LoX4gDE2tnrT5Z3kh5pAvzRDGI%2FU1rPk7rIFov5EHIADWfPYIwTOxh5tMjxElNe%2FKtAqw2NzBJs2Y34y5zvW7%2BfloA3UtW5XCQ6sVjNKzlvbxANvgpS8f8G2MDxpd1K8hkxCyHOMYieDGejF5%2FBSwlPf8FKKTlPfHhLPBCXOLnBtxfELIHRxOCs388wq1utIrK%2FHEzZDOpDSOs%2BsWsbOI71ul8KH3S5ihlZBEE9opE4FbmF0bmegT7S%2BKJnW9ukwUyl8782vtmv9QlDrFLCvbMLrXrsIGOqUBm1MYIueDE9%2FsFRZtgMy72z8AxxAYhbmNDj9JOgPFcF1nSbXqlDoVICoVodtzp40bJ2H2H8Fk6Unqmw3T%2FIpuDX9%2BQZV5yqBOUVi4NzPO%2BUF0BSkVBSo9OBffgxsyBhNOFfoRPRPMLJGsMxizV4mEQN2BLSTrvSD%2BL%2BNimBbegq7%2Fd3WQo1nWQPBpMJPXEJuazbIl3Owz64PFF%2B38%2FoQ3AfSHF4u0&X-Amz-Signature=5c0e781a653dc899a2ade5cd555a4d2132049a87b7244ac43aa803f381f0d484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
