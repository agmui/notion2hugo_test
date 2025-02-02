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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRFUQ44%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2aPij0Fp8y6ItsIcsNObl4K4J8EXrzN0alkN%2BGZaIcwIhAJBygqH4JyED88rQEsoY1po4i%2Ff5xPuKQ0bwoIk9%2Fx4CKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXH7Bd4UJ2KF9I68gq3AP6VPFjCHnvG0%2Bdf%2FbdecNzc2A6FemVsZnCM0kA%2FV2yENcrf9r5D%2BE5d73l8rf%2B6INOyr3CnfSBfk4wYlikGlZK2eHs2gK8TeqyNb2rFDjOe8EcULDK%2BtR686D51eqS2MN63CSNqjyz9HZcL5J0Wae7Rt1lvQ711vIHaA%2FN8%2BsFt6RGE8lOX3BzP0CbmHrbJgLwG4b2EvUOLEftL74iXZ%2BxaaDoPhLLwDz9wSWWhg0OJL0400i7f97gE2%2Fal1d9J7oluK69NHe%2BzN60rx1G6sC8ImzebaEoOd0u9bChNVpRoilUhgcwgncyRnYIV9n5jwxM6GWxuSAi07248WsOBCLKylxcp1QmAbXY4bH7DtOHLV05OuSvvB2kfEGeFZm0KpXl8O2qWVqVbzM17nQ91pWXK6D7MBQIadvGCIvJFHh9ImCj67t1Zr%2FX0uja3Kxbo0uNZtiVkJPftrtaSe%2BkuAA01yA3I7BOVzfC3MSNrcZsqvyrGZLJgE4kVHU5lLsguWvL1h%2BTBCM47oP4N0rcNMtiSkCpKYAXzN4GDFHuJbYObrpL9T8x7nWMRKWjZcvyeWqLeZ1F8b7dgwSMn9p%2BOHX2Jbj2VzHEmkCWypOrv4788M7Gsff4OW9ImbcuYzCR4%2Fu8BjqkATslOIua4w3S6%2Fqdmq3hM%2FaqNG3xHebtLYJ3cTKO8VLpFiWFSrVE63iv5PpQANnJ%2FQlyn78LpZghnfg1HpaDPD8%2FDO0lLM3SLYuK7ZtPnoGJVqO3TihTMcO8KWLlBj%2BVbU9ryiNdwu7NcvGQxjxBCtELFnkH2UjECgZP1OQpu7dBr0p0W6Gi8utM3h%2B%2FFRHdq8rM%2Fn0QgjaAJlg2L5DZBwbUpjke&X-Amz-Signature=2a96fc0e5e28b1dae807466e86892986962882c28de31a1219f34d9c8a9928ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
