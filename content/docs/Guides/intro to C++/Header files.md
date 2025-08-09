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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X5RBGBC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIA9GM0XiPJgYf04ZL4JFIxOQ%2FvHvv4ztPGJ2MbNKldn%2FAiEAs9I1VSrnENLK2kzPT45lMGp6YGr21DzTZCY%2BxX2dNf4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoL2Y8SDUF%2BMEZgjyrcA1YX3%2B%2FQWL4ktl8Ou8xSH%2F0CF48p%2FBHSB4VLiq%2BBPReqLRlgdChcNTCiXo4PV7%2FRDk0V9OIBw9MMb8s2vf%2BDA5qjD8Zi7P7kRcjEZ97HePW8w9WXkHvCgevXZb%2FL1itUB%2Bh1PFiotOs0fECteWsWpUpBPiz9i%2BulhdDqU%2FSufJKSbzRPugJBv%2BzZJv1zccd%2FlX%2BUE7iT2HtF4ALcJFRI61NmJhV%2Fmk64TTP%2F06v5zq1D5xP6toFKAo9tXd%2BonLmU%2Bb6IVxrXf12v62YIuDA3DlZ4yplIRTt%2BHflFbgt7XGb4qWK2qzs3JV2rIOgSC9MqwKf%2BW7ds9UihrAJ5jwt7YfZbTh1ZoR6j6l6E8MJ9IYiZNFROzZZ1IADhaNdqnzF19D0Hod3ChoMMWkPPddI7v59a%2B963wxmM%2FHnC5SjHTX0sv%2BqUxn%2B%2FBXl7KGO9%2FfPzr6fEZ%2BlgyCWT%2F%2FHKCW7ORPUsviLjiJrce9%2FChmxhd%2F6cM%2B%2FBnlwHv%2FkQP7SHAKK6oAf%2FcwNcoNpasx9Cyzve3KNbTCJtW4EmUauA8FvCuNqtiPfXiukzRG1uLMqD%2BUAvAWhnvKIwif9%2BpyPTRo7cAPzFbdrlHAuWlzB%2BOIUlawRirTZ1BeF19kkgUT72MPWf28QGOqUBKl6CXZb4Sy4PHOurQQk1LSDsvIVBsc8LbmIi3imWoMitAlyhknFxNRLZzDWk1Bk0S8pKu9OnZ%2F6eJotSHJFKc05QKeAZ2obT9F0uSgkpuFZqw894jtcnR7uzCbVX0x4RgYokcTrD02Sv2SGxWalpofpj9971OzsRGEM5SLA%2Bcnhhugb2rNZCasy6P1Ml%2FicxQFP0Uy1vvQIiAZ4Pkubqw%2Fgon2sf&X-Amz-Signature=9dc6d90c154c0c2841cffcd3a9e3891ec2e8263d000c1027f192dfeff8ba4716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
