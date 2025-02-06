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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZLAJ3AO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD9ZlBdDELRRbHFXxwfFw%2FDR4U7cegZywl0TyjzjhHhYAIgRIifjiXWaQox%2BA3lN9GvfOsv%2FlA2XOqJwfgq9xx7iUMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBhxuJGB95eN63I9SSrcA15Lt4d2hXQg6193bZOefCk9CkNiHx5vN3VgLC%2FQ9Amt3EmTFqamSbviL183z%2BduCA2mQAp%2FNSHQNI6Tpyklh6li9U%2BNdJup0gFXFpAjhXrcqXu%2BUEBSYsUTlwCfsbQzPVMWHJHOXEp8RJeoxd9o2wbejVLJ9xG%2BVmWU%2FxfuD354%2FHA9NLtDGG2QnWQ5ewNePyFxYOgDtvtWxG5PvP018Ci7V6hojOEN%2BcEI9JpOUm18E7gEuwq2KQikDoZxe%2FJsaYnQd4ZJer1GwN6L8TousXw6FNuLwHw%2BeGmfrrbDPzzpN%2FyK2EjqbT%2B2W71He53dA09F7RMd7bZeCgPQjRowjt9bmKyaVyzucg9SubeTjw3r7ljAg3d76%2FMOardGaT9t8gGzUFCpj7r%2F6CuPIig%2BDcy35XNN2O5Uap0jYuO9vyvRHpL6vR93bxlPyDHRh1N37Zy4dQGyoFRdeTLL62lMee9kmsgAp7giOPPRUUmhIwxz3zJhy6iSgKp%2BrxbYtzV3HnW%2BK3cRZyOP1vjU6LhF%2Bjr5e%2FoIS3Q9wNNGSwd1K44IyNlnvPgfEGDuW97LdPXYrSlH5kIkgNSUTSiP0S7Z%2BeDhtK%2By3n3anr2TvnExVBq0dah79Qyd75%2BhbTzPMPjtkb0GOqUBbSIxW%2BpDB30dO4cRDON9TZws46nDUpHnU%2FGEFHtZAZ86fbsMjuIjOmyxWIlslsrAnNcQKye8voEUKxzxgoQYLjKiqp5SUoXWP1C%2FFTD68NNwh5fng5lEw88Mq6apK%2B7k7VwGfbcMhtJSvh1pP%2B85eDVCw65JxnPHuS5wynmwauyrQRzinoPhB2T7LZGf2hg5UL1sJSUf%2FrVeo1XOa6mU2InRi8Y%2F&X-Amz-Signature=80ea2f419c0636ad0d1f5f861dc831d5957a56df29a8a2bdaaaaf849ac857e05&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
