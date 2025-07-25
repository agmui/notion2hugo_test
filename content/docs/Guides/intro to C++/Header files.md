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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MTMNT6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIDgIt15R%2B3UsNvBPqBP1X4WwkTPtYb86q8tofzbrA9hnAiAvrnBYCCO%2FZOrcK4aSuCbKMv%2FW%2BbYeys2I4AR6URY2Qyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM9lNmNDw4IlduwhgPKtwDmQlBKAbV9iZedhAssK9fcl7T944dSDEI7yhFk%2FmGRCcgR8SfzPadKBUDIQaxJ%2BLGfLXX37CvbZGMvdsWv9l6KeM4SJjl4jv6pOGv5q01b1sCi6o7pTm8pKlPob6fHW6Q8AymOs9wy3rk8nf%2F2j%2BPILOov7x1ILg3N7nFLiHgHR9QkRj1B31LH5TDjoNl8emrjNPchBLDLTfY%2B3ohk5O8UP4P2gn5DvoFHtvGpun%2F8QZ2CYLtTsv27wdkkrdsLqJLPBnue6d%2F6oShrpb%2F2Sk2598XoaChHJkl2pFCkalMYIOwMEPGD5UhdCeHuIsTJ4spoE6wL7xwLxu0iEfZzKkq0tpYaIh2md%2BekROQAJNVmO9DYAz6MosP4FSNN%2FsV2q2UH10yZIBHubyIHCHxLDcVNqFOuAnivkU2J12vySWMR7H6RNxlpxi2WaB1q9%2F%2F1gozURjQxmJCmKCuNYnZxoGwDDBgsJM%2BBhJ7NyCwROF%2BJzDfsqYOTBcRQyCtAJy0aBlmtHk9VnMn8MZQ0qLHnQK2KOL0Eu%2FV%2BUQDA3ms1r4D8aqCCsfs7CatgI2DyvddhLP9HaDdea9i0fSBuMdURc6oMFFq72QtpIHevdOK25VzuSRHKLyRK1y9WUrlKjQw8uGNxAY6pgGImPBHyjgAtl00C4CIsehVhTMNi0GQO46mlryUUW0rnXk3Oa7bepMEOU6q%2F3o6JIurBu3D2tj7%2FkPl9VJ5PEB%2F4tYPdIoBDSFHMil6PaoPLmihJAmEWTxZpFST54jKW%2BYBj23YHYAV9k7oWeHerhdswK5eCUP0dq8ycViknNYciX9aZefbBRfRxSyZ0axmaA%2BFQCvuamf0AOpM0xH8ygX%2BcB8joGoH&X-Amz-Signature=0e8657b0ea76489227d223015986a3be8753a52bc776085c99af52e9007fa048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
