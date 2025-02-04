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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S4II6RO%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFRPNEmwQoxzxgOuZ6Rolco7dfzlS%2FF3JvzcKW628R2KAiEAni7Vrvjj0RrIAWNJumukTvhMtwWy8PPGf728aamgMbcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDNAG%2BBjIBSS1dl%2FxsyrcA53%2Blg6g%2B3mUaVKCVyz2I%2F2%2FVGb9piJBJ8FRSlVLo3XUpDumuqSO4uzTy3S%2B21DBe2vhIwiZoOCUb5fzkbR7iGzASozvKakwk1TzAaPA%2BdobjiiRQXZnZtceElnuPLsLMZBkjQpVax9NcQf1b9cYApE4%2FexVCiUQ3vL3DieNX%2F9jjJ8gQAtRD%2FGRPcRyFqF5h8FSPzLZQCUVSx00FqwK9xBzS5fcss%2FUewCV6Dr4nbDqxnfFr73uLFFJYOBMMfi8Ex%2B76STr1OSMg5OM4IYikVwh4O%2Fxt7Y4TVaDRr1sb83Dgr4xVIP0EHS1JbSev%2BkB0Iko4%2BSpz%2FOsL%2B9gosUMGs0%2ByBn%2FlEx8Gc6aKXrchYfb8GHDseqLoeUyeSwn484iGUFnz1K8yku2OIALhmqbFidyoMPEjIs22DhTvov9rMLH%2BXeK6iwEteD%2BHyts7okbcZlIJbxRzdHohLsQr2CsqECriVc%2FLD8eXrqdFbbKbZ6wudc8ZgGrFzlxxAKjSULIIDq3XndI787d9nIOeH8vHpYhmfh8RYpplFhgITP0%2FPx%2FSYR154w9BqQ8OE%2BActyogkU6gfUdhk2FmoL0U26HHtTNt6GhV4xETiLzoizBj3UeREVnKCVUvpl2NRtfMN%2BVhb0GOqUB8%2FkM8p6AhsqEqcko1mMOcISSbctdrxoUNavU8Ij4Xg95y65FY0qui%2Fa8ves%2B7ijigs560rW4U7IQjrzsAPGUbTBFm8XNJlo%2BfNhqlkfKyzTumOXN41OEHek3L8b3736%2FXdB2EcUhvqcvIfr8v1kxMwA6vGN6JjdTcsqZYpkVoMhM1Qf4g0CGj92uyDQFmSDewR5g8rm%2FV%2FKSvDD%2FKqxYRPLMW4gb&X-Amz-Signature=0b07fea1ffaa0b5167363a4f37a341b115d400285fceb2f639d0d1218928a9ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
