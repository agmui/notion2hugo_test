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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466446ARXPN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIAFgHhdCU8junmrkUYURqEmGvOXM%2B2tF9r7hM6tcc206AiEAipHeK0IaDFa6NIrCCydBUm58GIpgKGk3pHYN1vMshJwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIiqR91%2FZpKzszL1FSrcA3DWW%2Bkp%2FShOwphr2sPARRnlyP%2B6c%2BCYu%2BXtYL3DpIrxySsVx9nCeT98948by0feO7oPOKRipkDdThsdMismkXq3P6NMiTgmfKwH0fKRKEXXXIWQIc0VoOz8kfFkZgIcqcoGGj2T1bq22UDQxZIRGwUsybhCBB5HiQRko%2FaHXiF4UKBTK8Oug7l7YZG5mTCRDcPDpQBYUwZgbAroT1AY93Xppc%2FZQpj2AzViTJmv6396Zd1br64LkRwQ0kwGBV0jV5OTAkwz85eUdXfzHkQofdUD1roN%2F4lvZOTIWT8Y0u8jx2%2BGZaB%2BzPA2srJvXarzKBrWjYA11jjWCeyto7QOQRl%2BC%2Bf%2Bvf5a4XLHU8LhUfssj%2FSLr2fYPSlrdKj0F3fCWmVa%2BHm03yETL13lUZswrbdj%2BSPj5qx2Cu4%2FaLgH7tpXeUrUODOFxIpgjhqTCDZ1oHrmyJJZYXs6kLQxYvHjcSQiwdcU81C3qik%2B%2B13nKCL1XdEc91nbVYIBDsZ1yBItc5Cr7P5YLD8bVFYxxASKnr%2BnND2au4jo0hwyvEIYHkStMD42VeXe6LuTq91zDGtgNG0sJKz6aOWlnobrM8kM2LbNr5oyIsW0rsdM3qlBXqcqGNTaHAYf7yCQPbYLMLGZ2L8GOqUBF6EskTxZU3YlzUlX%2BtCA4%2FXSIdafrMoDWUyRUIt01fvd3j1ER%2Frc6%2BcHK3WmfmBa9U19GGIzn%2F6hC%2Ba6T0PTevf2%2FP1ehszWI%2BMDfQgVp%2BOr5M3FXN8jqnktUi41bQdeqveUFYpZsjyFziMm1DZ7VMpdjinN%2BEu5sU231zbX8mQSP23h%2FBHSLZEC5R%2FFIyC9vuKZWdfpdajbzQ0rj%2BXAiOzldwDV&X-Amz-Signature=234d1ef4ac4e39c44f382706d5388b13b8875b7ebc667582dbab5ffcb1f2c335&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
