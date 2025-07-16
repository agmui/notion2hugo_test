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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBUAZ3QZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHNyE586ZF4HL%2BllO2jslmzJZp1D5ulX6BJhskGDDsaBAiEAzJCLlR6zvi87AmHOtrWS8LIu%2FdO5nP57l3SxnpkKuJsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDODOxaGejTqsEkaCoCrcA9TC08Wv9J5CZN7GPiRq09BVkX2qQmzhdSGrYBq8E3JP4LlVuLU1T4AkeXN7Wzhsv0Ff%2BmKfMopPPXAevumu1JOm%2FTdACdYOy7%2BmbJ5gPkJC2ojAaHEqfGNhemQzVSUVGjrW5LXLp1%2FlvCOesjnHnmnptWEvi7vqk7YAXOYcbZ72w5%2BYwORnrCjA%2FlhkJQJgY0VX1iHRT1Eo9MjtvYZnCF2EJRB8e%2BfSHY%2BCpjHf3pc63Sf0%2BVK9eUOX5ANiSkGpRj1Co2h2TRYla4%2FShpNDP%2BOPx7XVZbHX1hzFLLSJX9VTSGwiCRR9kCmkUSGJxFMvDGT8I8vplaOiqlXqiHWrYe1sKAvAKgeKt%2BHp0r3xeqZ5bz0fCpRM6Qc6FZ3CYFL1plFRPPDx5Hptfqu%2B3b3y9vgSpuyZPDQVoS1W6fKqcjgYePI2VLlhTMa0fJosCTIoq43pidmQh62F4dkDnscB1S3e44ZU2PEibubMdHxxoOt0grBBfasBBWvTEs10%2BFcn7aCxxUeIkmC%2Fm2VZSDHi0HPcrsvPtfY8PxBn6msaf0e6z2VCBI4iALRmYxYYAWb0W8Vq5y7N9vv1RlACGGt8HK0RPCyzgDQDjosPCcA%2BWEgLxwdXOo7OkmHHYJN8MKKR3cMGOqUBo4UsjoTGnF3HWb13MydcFigFEKWUR4Vdnp8dErQuRhjbO%2B8BPjv96K7hkdxgTU3Cwxl375JbJlUvSLeUBfPMkNKEZ%2F4DNzE8iehDuPOlhHARdS2G9tQ1VFIkPVmtctdXJza4dDJXcTfWyBtZX9OSozpPHzWuTXUSvG6Xx5NrND%2FCTwQATe%2FZy9Dw6%2BpfTOxbDjZJkm8t7QVM9K7Xs3796KEPyoX7&X-Amz-Signature=b4c2b3d9bdf60a55492c64da69ed8766de4b8ab39d25c6b764e2554a89218ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
