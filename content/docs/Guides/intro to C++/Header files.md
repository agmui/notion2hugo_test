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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCY3SUZT%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDRt%2Bq5btbRL2c0Rx1WgMPNOURUdK4ouLOlFv8GHIYtmAIgYa89Dr2JXXdEbydAtoXykqyb8xp36VvE1EoxKK%2FUh6Yq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLTbCZGM43%2B1p7KTQircA0uDu1nz29CkxtO%2F3WhmbQF7lV85rwXGao56fiFGjaU%2FnfxArG4eEADJHG%2F%2BPdNM62bnoJNrG3QHMASIHgCQOLbqtVCJa8aYIEh6wnbwzEDCUe8SVYyiK4FHn24Um3ZIACkMuecJu2j5nTws9EvtOdZunHQ%2BkS%2B0vpblWscOnzYophyCjpMnnA%2FPTLP%2BSu%2FKowR0eSSflwQsWsMED1ey%2BCdLAZHeO6x4bA0N3RzHWeF7BecT0x2Q8L8d6WAyoE6OEEs97%2BNVWZFuqJr0kEaT1Ztp135aCPgXQpnYzQLG2HpHPvLlj1KGIuPO5VJDdkVp0xoBtBwCXPS53UwRZZtpg6SsVe3ZnfHu%2BTIpJaQB9fm3JgGibAoCYaOV8WsevGRmXRye4nNUDm9H2GBhfF4My%2FSHpfZwWIMCfKA36NUz5m786Qbzr2CiASR%2FIwDAt%2BXwFKJ9JOmZO7G4k7oJMB6Akpl3pGgqbTGae3fNQTiVjNByBIF%2BJrmaTB8CVAteeglctqOSQ%2BE69a0jGrHVYreRz1RWXtRuI092VR8vHbBIxnIraKtRM8p%2BOAuINCZJ4O0JhA2fpk8js2MfBN%2FKYlpIzgXd5dbwjTyoB2g6jFLbJWLsNcdCcDWQfuyxTyPVMLmc9cIGOqUBgMK70LA5ZEJd0wa5%2FRT%2FnEPxQqq4crUd44nPZHBFo67%2B%2BRlej5yAYbjJOLZMuOXEVrHASUoSBvjgcBburS19xFDBEE7IPwxbaVBy5hCpRs4HCMqFRZk%2F3ZGnE2WwGdh%2F5J20SKVjykR1Ttqrh9ad9J4EM6CrYKHn4VOvEKl0prZ2FeoSNVWzTkupl0AFtRnxfoQb9KADiXqGqk1qEidPlNs%2B2QQp&X-Amz-Signature=b432631412310b5a64df434492ef3269919cd998bf73c233435c2d6fc3579499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
