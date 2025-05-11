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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRWBBGY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDlIi5iZUnb1Aow3cI%2BIrRDZo8qJmNuKfjt46JmcKcZfwIhAM1Bs04rXMG1sv2EDLdQy02lJ%2F1AGYpindAreb7RlmeoKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFEXVXeepYzXrSLBkq3AMKOpiXK31HCqI2By1MRmbzEHESzqZRy14%2FFuSZerJlWwkutmL3P1Sr8qtaNF3DFYRtCkN%2F1zWLRHGOyp5Toz%2FcivET%2Fbz1kKWeVZFa9LGqpkGGq%2Ffs61Si0NG5rD6v5yTomsOG%2FfHF4R9frxUMWZWxGWh5s8HT%2Fm2SOIU%2Ffn7EVRa52WnmbZew%2F09z0fq1l8GLz9JqKZeSkXVmWFCn99UibKvkujkQW2a1wt45OO0tgdMs1sexgCI7TPIIS%2Fgo10105j7dlDzPm%2F9p9nzbJxeryrpze5Y1B0exWtlpVoy%2B48JWksijKqrI9uZvLD0SIR2XT2aclVb4C5yB7aHjoyeSZICyDxe9NBnM7Qli0V6qN5UPM8DqZK1yh1h%2Fimew%2FrSqmBQbCXCi1JONYChtNo%2BiCHC%2BovfBWwO308fxEsYEOYZCCtKG9c6RFJUBpE1fapScVK%2FwVgplc3xouizcon1hATQcyeIuG8uZNUfan5yOYbSKq2pnawo%2BZws7OjhEW6ip4e3JCx7P5%2FxLAlE1mLTEkMynkDaft4l84MjMLfqG3Kgh%2B7BhiqqO8wf7XbfXC%2FR%2BWkLwHHaZc%2FYF3dGNEjvgf8xDhexe9uE6XnESMfkbiFpkOEMxSwddCTva4jCCuYHBBjqkATcATqSmghwAJ1jS6fNpdcEy2diX37na5yJRGV9uFEI9QL11%2FxRQqapFJQQ6vHbF%2BQZSWCMF8OgXydquts%2Bm%2BQLg1CUfZWQdjbsiU129xPPUK57cxgTZUeCPYukna7xGaK13pblgqsmbB%2BxadkgaUOX3UOCT1QXZzO%2FUdDiWFHMNpNgnBr84SrhHEvgE5Zp1uIquRauP%2BL3ZqrsJhdGAnYcqKdch&X-Amz-Signature=7e9417e67df19a9fa7bda8ad1259afc3f17b9a138f6e2a7dc1f3b8309e664965&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
