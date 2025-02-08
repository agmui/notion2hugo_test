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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOB3XC4C%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHjQWvT1Tw%2F4zrfFgSU%2F6XLIg1B62ONcOTK%2BLsQB9kTeAiEAznmjLnRR0y3ygWBXpKnyYaPPX5UZ1z%2Fgz3nt33t5pVsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZyS2dQLJhgdDvv2SrcA2wWlOedhffV7MopW5CCaPlw6H9qJLotbYgSShHB2bNq7%2Bf30qiDjXz5mC0%2FgyeX5kVMHeQ6uhTrNDSR%2Fqtz%2FL62cstKyAIb3TuRg%2F99y0Gncs%2BfMQ5vRxj6djqroelMv6KIgfLCPZT0YETVfTjkZscwZIMUgDvSh3dWbvzSsjESYN5GmAC8NCf7PUjTk%2BkKrfUY1ZcZJAwiKSN4oUbovAu4IROp3SxFrl18CP4DSMOV%2BCC9JemPpPGWxLBoO3LS2guRECa%2Fi9MM2SW0JDf0lnN9x%2FgkkGjqUJl2llx64Wcle8RDY4XrlSmMvCrQu0mPqA5Igxmhpu2OcPVHVqShYf1qdVgDte3nRxX9XC9PJE5cOInLlRyYRI7ftJnpSK%2B8ntrOgeC6ulVve3xMfhrGkphK5nR2BlC2MtTgzdJhAxQ45xUPiDrt5hP%2Bo%2FXQGI4ZUq6DqKdOK5fpSSn5Eb4JRE4vrnUEZ%2BQNYtXPF1FQx%2Bh8B%2Ft%2BjF7A84tb5P%2Br3Oo7ac%2BDganU1IRAWQmagDyPQ6MU7AcHfh1a%2BWKT5QZNzi3JC0sAuVA9PFCnkXxqi%2BOSAi%2BxA6lho%2Fgb2XqXq0GBQ8zSQ5nU4dbMC7g6LvJR19S%2FY7DhYkX0po48ptgsMPO%2Fmr0GOqUBnRFLt9gcsW4Rfo%2B%2Fedmqzmw9T1R0EtmWwbw1bM%2FoPnLNGdqZuGcVq%2F52t8Z%2BpQXZsVryHvXwiYCMfQAETu1oZfOmp7eLrn26yqX3ctGRNSHL8%2FXNBVy2ftLomPRc54amxfn%2BsaesZyTuYlz%2F1VovOLaVgiaJRf3xsLTJPBPNbDtuW7xgNmZEOuR%2BDlWm%2F%2FvH0nKIUCCbSp7QmjUa4mJci4npu80c&X-Amz-Signature=153fc663064689ca8698fa08c46571062c7205e1cce90f08caa9cf088622d276&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
