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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY2IAVZK%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCBd7S0LYNnoXJxDZaIGZ2Iqo2eFld%2FH3OgNH9dcrV9AAIgTPvIPhp%2FEAIH4TB0f1wE%2B6htJw3ub3EL43CozvkxR0Qq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPy7vKEfiXNDyr1%2BICrcA8xzU4bUSFA4EsrSc58bfadFN4JDQQQZhP8Sqm7jAbVufMtDuQVcLwg9flPQKjybGLiZXLJq7AQPT5GwX1tVhrCAWotaE8qNoB2BMrk5y3AMPvSQ7kDr1rMbEhe%2FR9x90g9Tgy1bnHOwsa%2BFUBF10gz2LlBSBT8sADWmLijFfmqI6V0j3v%2FCOIeDqbwGAEZ%2FS8qogBytXjeykZMlKLplu8QdzvnGewNVYclJrm01GF0DzalDnnC%2Fhi7ecHroG5Afuz8mQOUrVOsqFCfqAjqIhBXAg%2FCbtZtQY2C8doiqGCRhXxlQKqHYSbuAXOX8KtaEjIltSToQmJHWWd3%2FEmLkdiOq2Oi9geaZdaoMy5fe%2FGTAiJdr8ZJ2RkSs%2FClkeD6HFjHV%2B3j4uppX38g4VVrAv3VGCdNEduyoACMvQQVB9KcUqod5lQfNxHjrYyE3EsEzr9gUpV1L3w0NKA5Zr11DQ6x8GQ3Btm4c7BUD3ad7rUfw26mOy3UlHAA6wkAyTy22QTu5MoEgqwk0Cp0pZZ2SL2SHqvoy3gCxjvQFIXMvxWrlXDiZBogPe%2FifJEmpFa4J01MhPXns0eZ2qAoVtQgnin9NImr5eWpso4EbkzYIpOA8ndoz7X2RZxax5SUxMJrtgb4GOqUBqTPiYwSthXPjuX8wWI8bQntM96BsmspYRLsoPrcyB%2F%2FKYFXlaNFL4yWp54RVfOcSAO95ZelApMg3Gx0DGb7li2nGT9fOzkkViqq%2FoQkhG8ZYrYYdALHPjS2CRhJGiyiYzi7dEbXCCkilJ2m6AVCyJ9bhRBLbNZO834jIN2179AI%2BeJRcXndTv%2Fnj4POKSucm0VKMgZxK8QHu3KuVxOArVXTNJ52z&X-Amz-Signature=2f9027f493091c26b6c67352716ead88f40cbef94e013424c0fc60eb8d52b6e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
