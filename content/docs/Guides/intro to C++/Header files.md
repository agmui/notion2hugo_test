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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCLFOEUS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCZRdm5Nzonh73r4VmR5HiT8TC26%2FuhJip%2FBjSAbfN4lgIgcygDMGaR3y22E3DVO5M7s9ol6sau4lv%2B3hita77z%2B60qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdzcOUTbkPhOOXXPCrcA3R4Xa1baYIyhqmlJU%2BacWf08iFmEdrHt6RchJRv1tq7P1UBlvlagCMLPFEa8GE4yp2mlgCUTqzTvC4zOtJ1tojm9YA%2FGR%2BS8VnpjcrwGDKyVzhGrRv5L9%2FYGhS%2FCddC2NHqSEqxwGDxOiGZjWMnkAsEmwyaN%2BWp%2BPOxQ5tPg3n5lx%2BYAhO5%2FVfJkbQa6LsnBSdJffCnyDYjY4ipLJuqcwYn1cM3b9ufRxDaiP8laxtJr9c7cMumsiSwY%2F%2BMDjjTpFYCB4qtTZVjy0xeRUNrAOuQ71qk%2FRXPiGjjDMuagRw%2Bus1jdXjmniKNT7cyRdmpUCs6BtR3KbnVXe%2BNDdCeAIRmKTDmWOlryf7FB%2FgqRiLvdFaMW1K%2FxeVBcxb%2F8ji7N6UfDlP1woDLgkxGT8yKq7h6g5qUhbp0HWIMXgQoj9BPfdlkkcuTdVc7f25VhRADKbkMGe%2FDR6tEQZQZRimpQCrxSG2sd%2F6kXwxB7NO%2BCsIXQIs8mokemxJxGeOEyDCPraplNbuQUMUOOnSU441ClumKOphlTbadK1CHTZueRY%2Brc%2Ba6jgpYG6J1w%2F7%2BFUdm4SAsPHv74iMAcLTF8EM5ygH964ys59WVHeVMZTM33fk7iymBsClmBppBESCYMPyFhsEGOqUBATP9YLP951IdZuI94DRNipU%2FXiq7gHrwN9JpNIZdepWsdiDcnopcRksTT6fEjzZu%2F4eIXPBCwWE2MUzqW5QZTtgQQT%2BH1z2c9Y3oQixx%2FsTAhlp1UGQRJ%2F4hTUeuhy%2BzMHEcQmGio6Q1Q368DSJFE3juzksO4PniYAmcZDqWOUSGmptWZox6GYom7Ko%2BqyofqPfO9iytntZWtIjELfVXqQuU2arP&X-Amz-Signature=749a353927a51a82e83a0f0eb279d62c1aee886cc8851641bd1c90532a7dbb01&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
