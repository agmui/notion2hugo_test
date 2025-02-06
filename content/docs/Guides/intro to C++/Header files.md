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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SIKOCM6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBadoMLUmkG2bfKR6CVLKfPkRdk1xEpjnbxoq91GQ6w7AiBY%2B6cCrXCfV4qu3HrSXiVs1C5saIsGk5d2P9RKgbWctir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMXUrxm2fOnuj6YicIKtwDOWdzgv4oodDgoJ4k18a1DOLS%2F1Pf%2FZZSpiLiN0hIz1uvh0inClbVr%2FmIeGYrMDyPAKVMRckrcUzZlISdrz%2FB2GgiF3YjPIatrXdHZ78cIib7iNV6EYi%2FzuabwDLW599o14%2BFkCEoaOuVGU7qehT8f7syePwgI9%2Fs%2BMlDeU5WpR%2B3%2Fjepp7CvsIZP4G1zDU0ZZd1SUWXXT2MBSWRn1fvTj3isH73zsZvqGOn807rm68g9%2F8mTnpuSRzdP52BrsKQ0JRZ0LpNQ3SIJ2j161ePE%2FCgEsmLJFzYMr17p3v9huok45OqmduFeMROQdM%2F%2FVO4Q4JNFqfDu5OdLhaeWml5ZSXc%2FLxH9aIBk0FNsts9ZXDOqiLGGwNJQh7d%2BJzYJpy4RjiLxouowddjrceJ1lzE%2BdZwSzzOwGOz%2FGeFadbALZ3fpiIAY7hpndm9cHKhYSsntPzIVLrzhYhkCb%2FqntTF%2FTGhJ4vBRyjy0Qzc60AhCy57EwU1Zezj7r0d7aWm%2FJVu9YYO4LWJxbnoacjnsfs6sIaf2YW3LMHqLXuI9wkft5cAYRakSEaUNPAq6rbkggVyiN0KPaHKp7qEvWZ%2F4DpoYKBFFbUqzn4LZuHxi04ZU3KsT3Tbh1nb5q2DeBWYw7OyPvQY6pgF0T83I9OPv4N%2FRYtoXZOiQYiqj2ePp3g6se%2BQ8pxaiDn70r9Png3V82qIUssYVp7jpnaKHomrez%2B6K8lZVr2PPvMxT90vTnsR%2F0vx4kunfp%2Bev4i5e7T8UXMxneuieAeoIZKlJ5EB0NPt%2BiBn9nhtO7%2BjsYPrap9%2BJOJCuOyQknSYHwb%2FTUqcNQNMD%2BlN7EPbuhfPCK3WE2KpK9t9BR54rnKm3CFnw&X-Amz-Signature=85d15838e9e8a1e9e69d8ed878ee8ca2559f0f22f32dc0e5844f505fdcd77f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
