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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQLB3N3T%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4IqMX%2Byba9iriR5sqI4b3WCNKR%2BCQYLNPeMxMdp%2BxBAiAjqVDSgfnId3vKEgJmYFb%2FXEWArqwjQvYq6btqcGnSZSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDgfGXK%2FbevBGkVgdKtwDmKd9FUvPGJBIgNdsEJFa2xIDp6Gp1W4HEBazvIEnSdmNvdicfEYeOjrcFVrsoRGI6sHIdaLfvygXt6uml6TE1TSf7P1XRV0TBP7%2BR1%2BE09XuVHVD5NRefdamoOswKx62hpCDygoHDounlKSr1%2FSt0Oq9XdTDTUx3rydbnXRgX2ulP27xjEDBb0pb98wc2vutzSFkOqruuoLEHxjUOJOtnbx09ahQbrLMQQrXKdWz8LARuua0%2BJjWMdOdZUZDiVHxfPrlFhVs4Zt%2BY13SvkZtwszpvgdLPETsuQWG%2FkdJeoILFYpoOd9hwPai133XK5Rm2kySblgFfgss4ojCrvWBnjtnrA3PP1l25EX2dzvbBN9G63Fxqw%2Blr2ZvADEb7s3%2BcVKq31Fziku%2B4%2F76MVXlXp6H5NRN7Fn55kEOBFum7zR%2FGGcz3gUz23jv3M5FCExv0j463oAAQE8oItwXR8Oybs%2BbOuuZmoOolXZYmPCQ84OVkTQFPTBNy%2BHJx6Z2O%2B33IvPk%2BTPHu%2BfNsogB23y2tqsiC%2FMA0Rzypz3zQM8tk1Pz0054hCJrqCvZM1WegNcht9C3Y6pfRZjt02sPIbQ0jRKa%2BBktwO0C1QrrVS8Vd5gwEqxLWVo34XHpTyMwqKX0vAY6pgG5%2FTDjenZjcCYdYvzzrL6m6l2L2rBRX51deB0CNiwZJdFs3DPZStIQwNMJ2DByE5%2BOe94Uz9ft715m9xOZaTSDRwT%2F%2FpMBuGAINqzUblfkeRWlDkjL7clCaEiHfsKKG0c0rBUedHDsW7htYU%2B7iyiTUsitiEfOm27mNceeVaN%2B0NrjqdNrEwfEf4UB9p3phH9wWJZeeFq%2BeWbRvGPubzZx5%2BbHoo93&X-Amz-Signature=38792d220508049dcb1c2d230ad32ef60660d5b319848e9c03c5f2352f87f698&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
