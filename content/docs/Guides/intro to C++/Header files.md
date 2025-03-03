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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TGWDVEM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGnzbJnkKxOgLwHVfm7jBUs0dyF2%2F%2F4nkxdiASfUGokAiEAtn0fDVbKB9%2BI%2Fyqlxoe8ozxCgz1e7ZwTlsYwkbh4iJoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJf9663Euo9FmvpI7ircAzZ2a1r9VW4pSHLxfdbqfya0KOAxDAb%2BmSl%2FR4cYn4ELWyqrcHW%2B%2BrNdWoiVGm9uhFQtdRKXWzKsdRfA3mgdNxZ8u%2Fbt5yCFUFElzBhAa7RBqc2JJTcfIlXiyMUfQBBbjtW6xIrn0QE9%2F3DQ8KtXC8pIlZVkz48Im9GSgd0PBe3V3owqmEWDKo8ttVEwOPHxAlPdE2ahusZGgKRJYckN3zy21feOilRuyCh5IK4iv65WYVTySvNpdLIQWrA0QYFra9941neJWF4nWR4pNRUX%2BNoEtrzZIMf35oKGstSaMHb64cfWlAlAD2OKM3%2Bkqg0G8Eg8aYH7VUrImJfKS8%2FVYBefmk0sJlWxLFK1KkxvQLlLsFbDpqioq5Su3WyNYLMFHF0L%2BcfraAHRGP8DXLdFmxUTN05IDH8LbxHgd7nP3%2F8wKndizOH94diV9O01NIQdCfHTSA8DN66wyc77eVgnD2NDe27s9KzfPRXmGKezJhd5zeF3sIFShHXppY7wBgcPiHxPFkPcR1gceW02nVvkoe%2FIZadsZYXESXgFNk6f0qtIwWqli5QT5GEqZlG6evDctalaXj%2FWNKne0uL72abwHcVgSVHQl6ugqnaLe0wyHlLwxV8OK19SR%2F6aRqNdMN7Mlb4GOqUBejDPzYh3W0rV7vrTY%2FFbsEjhQQEJmVLDwgPYa2xN%2BIoChfLYHxgE0JEgtVNvxqTADcjyYWEkuXIry4kmHsbjfSNG8I%2BDlCCo1Bo2i6p7ruSTFxKEzyIDpyD7z6UXCIxXBt%2FUWYbLOi4%2Frvs60eKCuQNZXsRHZIPZV%2F591s17jCLqghLe3xWPnRH7gfqc0v16Xzdz6B0QU%2Byc4ljXd4I2QmCsxWNX&X-Amz-Signature=4678dfca4ded2fa2e73e1c1de5187a7c4314afc1b427058ee708fe1dd5bd95cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
