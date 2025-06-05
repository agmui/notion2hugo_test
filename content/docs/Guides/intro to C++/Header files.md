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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI47S75D%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCvTT46c%2F0R8cOuU1qb5%2F5bKlxNoM2vy3L5kAYkc%2BRZ2gIgZjMbWPvM2XZqWvP0HOPNJajkmUFAOJvFx%2FSGiQbeSaEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOpfJMd3rMpes3%2FspSrcA1tVI2OyiZ7cafSvwsGFFTKc8ZjcIQXrx9t9NbWYGOc6DPdxzzROdjuSjp3e3KfZuuNn%2FX9ejG8MKTUqaaMrgHI2nOhQtfaek35whlWa0svodyYL2kIy9mFni%2FXewEuFp2cVtuDMO2pywcEIRZhatqGdGOahYjeCkaieJKzTo7ETZ3MyZsOyy9REx2K75GR90ctBJMIpOZrasl3PDwlE2LUrvH%2FKs0b5KlL%2BEvUfurJl5iCxGPS8qgCOjFnT3nENTWiKGQE%2BQXgqbvwOUzoqtdmVI84Slt1CKNXwGO6pwGI%2Bz7M0MijJvyd2qxM%2Fxl8R%2B%2FCTi9LfszCL%2FxXnNyt3Oj2Z3AD7AbnaYCI%2BZDZQYNJ3REPv343imqiNGllULwPzFU2VR6SPsKnWOAy91VNcfhCS06%2FotIrAGmKTmi5iDFitaGlgUfv9laMDG0dfW1Spp7ZZsT%2FEfvxu0hYt0bs7PyGX7vUQcSyXxUV0YxDCD9D0Aq6zLVMP%2Bm3tnPSn7T6lgq57zlQMtnGFtj%2FkZDw5R5ZCr8mbg7W8b6PjtjiB%2FC1%2BBV2Cur4liJBPte8Hl%2BU8ufDLKlA1PR909S1g9iRn7usYlRhK1whwWQz00yWjlB06c4vx2WjBZ5W4E9f0MKnEhsIGOqUB09TjjEmVdEZlL0hAi14%2Fn%2F8DKr6bDsaPuxPgJT1KImTE0WHQn%2F%2FTLdSwcFm3iy%2BzZbFUNUGzqYwkTFyS%2FCab%2BgXfEjcd3%2BbkqQaqGp7e1q%2F54TjdDrjb7arbf%2FYmf9PBVu%2BR8NAUiAS8HgnZM6I1Ezn7SoMhOtJFfOiaB49BHHRrBmTQJ1vZyp2UjyCP9UH9wZax021VXsAqmtBIrgYpa8Mk80k8&X-Amz-Signature=73bf1a7c8f0e5f620188256020bad623fe0db7715cdc5c739d5d960352a23a1c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
