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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U32ZOX7D%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T031953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCa5p%2BFusekoMWifK32VSm3w6gdmQ9MsGmoa24nuwmUrwIgLMSSeGVqqkdtNHWo9a1l63EWclxEcCU%2FZlsm7XAIqzcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsNP80zxbUz0YXKQCrcA%2BVfJa3RZr5RPSInhUzktW8qDdpIkMip8NkUwdpnyk4WzpGSBWw0gcXObJsbSn3MiiP0qY2EVvEjN0h7CbVMve0AsOG0oFfDxXrwa15yCdp1JGfAlfPfokJGBE%2BisHicOwHGh%2FXcKjxqBF102dNZ%2BZduHEb%2FneR7jLNSOulGFr4TDAlnhKSJ54vHheG2eK6lwtBnAK3EDJegzc9aq2ba%2FJcy0b9mW7FGPox20vldVUpeyXTQMmjheRdFHzlXaVPpI68wkKduCHa5ekXO4gB6hW3VISxRa0lgYdfm%2FZW29VnnstTASLhsQo3R3ukVsw1YDpfeMq21jwo2vSqd3DhUjyJ4jiWnA82N83iMP6kKAZ7P2g3wSJaLDMeKOSGQt5W%2B5L9SFQZgbUQN50UCnkBASLQlBMD%2BppvJ6MQE2OJfT3JphkbR0ruVKyMIk2Xw2%2FxDLjGt9VltNhoqoaS0ZxSktlc4gAtMdjOvin53rHPav6vdJjTQzqZo0kwaUjNf24vcb8HUPVS6wJEhHXoH%2FYdj%2BqZSCScttala67kCRBFK94go4J8PwB8dLZONtD%2Fae8Vi%2FYDzA%2BBiBEYAIunvlnaA9DsY53WGXKgVRYH6J8UiH9TOaM2A430ETkOc6PDHMLfQvr4GOqUB%2FeU2zCFj4WnB0Ii72XgpbSDpz1aW5IbycPw9lRyo9VnyNGgjZUA%2F3JcVEvCWQBpH4G93pU0P3L%2FOPj%2BIHXatKOtaK%2FweVSZxugQIEBk7hR4DsTt8EE359JfUonPgO1X6FOQ0%2FINzxYRUPB80BrJdnRmCx%2BLxOjjSEwnq82cXXDtLPO%2Bo%2B%2Fdkh3ldsbtmhIxDcwVBCIbwJ5bvmpXHgyTKwy%2BorSn1&X-Amz-Signature=f28b937941e271ad7a89edbfca1f60897eb2be26b2f2e130bc4c0db51f6d8971&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
