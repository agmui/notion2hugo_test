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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAXQKY3D%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy8ILCPhgzVchByzMu%2BCNPrJVB8ezv%2BNnZBHDwR5KVvAIhAOH197WajBuVfCxL6ogIwYllqPdd6Hq2Jzs5Whkq2Y3bKv8DCEQQABoMNjM3NDIzMTgzODA1IgwzZRGH2ZMbS%2FLCnxgq3AN6YTOR8psluXu67W7hwdIg%2ByPkyicbY7tEZ7Dh0vD4EnJORilAIT3%2B63Fs2kHu9zs8lI2kPrJXPvNZjJCtqhLN3rcfvrU8iAhnbIabadOPDLfCK5ys6L39l1kwijTWYv%2BMAVMS3uGaGy7Bc%2FJn7INAvNdEPrWwYa%2Fh6dIJTRqAnvxL41zahMlFSJaU%2FRclUerLQCvs2dpSdMW8Apu39HF1%2BkKhB8O01wxGWR%2FZ7wss9TF89zDqnGKt5uKyl25sd84QLEQwMCuclNdjFK1fvYIAijD8Hj5SMyasHfImqbwvBLUnOlaMrZ8eIrm6BnaN5Ach6VrgFfp3b7sEkWTcGIw%2B1bMoT3%2Bc5ADFSICx4cza8Plreu9tIqN8kgjP%2BgHTb6myKfBgsaXTOLyGD4p54np%2BJ3hUtkmZS4jbX3EeOjgdDGhaAW67iQtyu71hyHjQa10Bh6U5WS7oP0ugoZd9dWCbl62CSQl5IbuiaIKc2M35TIcDRpKKhDOU74TK%2F5avpLVHEhH2kkP8A7oemxh7Wbp%2B0ez3GVVtlSPdGKAjvuVNGUwSSViLbt7CdmHMEC%2FDUoN%2FHn62qxn0sonSmzaVnZUpkAk%2FID4bqkKSq%2Fx%2BN3yqsmlEIICL450F3qPVLTCVqqu%2BBjqkAa84rZTZ1667SMNwx%2Fhlv0feBbgkYSspGo1K%2FfJprxYYaUo%2F9g8Ibm7jg8r3Gr%2B9Qo7arzqwz%2Bex4w%2B4AmoATEt2fOiRdHFGF2sNtnzzXh6TaEbY8%2F8JFgg2AsfOy1V6Z31URjIic5AjcR0cZPkezEgkWDVAoPPOCogFctmozGtIg22jRyfrUv3Xzy%2FbD86RR3L3n3VC00cEzzAtA%2FdKGnsFhvEP&X-Amz-Signature=707e9b34e6d0e3b94344d8cd00b118320b81b2ba3622de7027ad84e9b4140d5c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
