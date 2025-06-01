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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQHYQ2HN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCvORgnexD0aPnWMYDnhxh0qG0WFVLHfuD2BC%2BO3I8hOQIgOCgwwfBy127spTMTk8GHIai6YjQYHRjlY0j4lEk9KqAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCI4ThfmL0whyQmTyrcAz8tmztH3edmoUyyDS7rPtxP4ykhD8o%2BC8cQP6aLPEx%2BGmhJEOaEmlEVibL5oyUdfkg3ee7Mt4JNdwnEqXi4JYk4oCk9ESVc6Vv%2BBJldmahkzbt9CKAtMwWshXtJH6WOYpjjFeG71yglClQdw1l13RRaC4erM9ZlEF1rrZQnV7acOw%2Fkc86qJWt0yP%2FNr4qg6lQT4fK7wKKvCAm5x2T1sWH19hHrC5M8CoRMNzVIfDsZ2p1s%2F0RyIg7NGfVdFEt8C%2Fkt89O3DRLqg%2BvTjZifrLJYd%2F2CYmNtEp28zcDMyoTTdpKwZnoUFVKVwRLZG8EwyUCpNToq3%2Fzdp9K39jMw8efU8lcq6gcGVqCoXn%2FqEOBnBEW9mZE2SL%2BGHmbLUGeqoc%2Fg3Kufwsx%2BZeDtkI6Xe7jJ71xSwsu%2Bo%2BFPKuTJIMuRZnoFUdRvQ5oD1OdzUSvARaV6AXCgJ6bmLzPFQM%2Bq85LqSqnWRQR%2BOX1XrT7xtHKhwTBBax3o%2BcXs3q6oVZ46TeaEmTaPbFLDD4VwmH1xPKIx7BxhZdWtX4px%2BzN1mOvf0trQY9IcLCL1mTCoJZh63I2s%2BZ%2BtmlmUcsMgLmnBaj2A%2Bdzf%2B9hedFADdI%2F5vz1tNW0D4QM35DZoTf1CMM387sEGOqUBrNAUiLJc4z5EWK6HanKEI0Z3PjzsIwJlCUNgutk6A4Sh6xBD00A1hicPZlijiDx979gSkn2mUB5%2FgJ66B4Rb3%2FyK3SCy2RPc0fvWyrn7tLrE1x1tWfuQ5Bbp2PNA1DylXiCNW0mglL0dn9VIiYc4GDCzhBJqjeMx4yU0jATHcwC7uSeykM2fJ5pQtDPrWooPSheK%2B7GUi2oErCR3H1PQAcPOxIvC&X-Amz-Signature=9854ea8b40bdbb0d78638e5d5ee3cf0477f2f8b6482a742e43fa88a48676e814&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
