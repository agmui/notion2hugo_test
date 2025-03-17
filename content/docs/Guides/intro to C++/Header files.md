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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCSKPQM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9nMRTO2xCLWwPOvQLwew8dtKcYTrCR4rHuBVOr3dSdAiEAsHw9G4rC39p9uOq7fCC6v5UhjDBLB3sEq%2BFvx5hY9Bgq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDNPvPx5I%2FIEK9RA3ByrcA%2BNJ0g2SAk8eIEf7cwr5mMsDzOQgb19PorFZf8nH65h0kX7WXcSN1f%2FUIiMLzfG9g3p7mfJ0ZL17%2FqibUahVS7FDcc%2B6JouaQnHdXibv2PtCuUYTOGLjHsFgZbvkYwX0wGBHBaLHPcRsRjDwuRD8edEJ37D2iu8lpfMei3Lac%2BTat6Fz9wj82sXySxfV6vaP5D7D1MkZJbbJCKGn4FBJY%2B04b%2B5uZnd8Ff6xDYOxi5TLbROo658yO9bBu2o6oLh%2FI0ha1aw1tMcybxSlAd7CWy7Cjs7oufqyVAYBPh2wXjdrmIu1NENfc7NmuGJOxqP3RnsdOsMnoVhsECQzWYT13%2FqR1%2BQblL56DtDSqiZoaqO2rEN7Khb8SsLrloDZDJ8C1p4EXWx1sXWchIGveNltBEnD8WOTj6qKcICR5cYVWtMhFgu71Dy6dzM3E%2B5PIL6wDw365dNW61%2BO0uE%2BiU%2FdPUf1phnFdAHqPfAKAf%2FVV5kHZgkQMGgS86M5T5e%2Fs3NtDlaOW7IJJ4kFmRq1bruSRbaVymvr8YAcFn6kIDC1dHGgD2irTLrqNPCFV%2BONoRYexsut2xKrLm1WUnDYGQntXwRc4XliT3nNBQJBrhgKs4fsnUNB7XeP9Fvy%2BUKRMIyb3r4GOqUBq7K0jZOl7WG5VoZ3ilrxwAov%2FuEQ5aMBL6tNe7F%2FBtSJxk5Tw6X7I6sdMREMeFX%2F93Q2%2BrRQ8QwatmLVJUI7sxAMg2FDa6FLfgR8h2KbzzgjHy1OzEMDMJ7khv%2F%2Bpf5ArcjVec4dfF30BKQMBamYLlhOjgFHQMQ5Q7VsfykLjFsvP%2BzuNZ3X8dq%2BbDeJMVfJAroPzyt6k8vKIaVHboS%2FQd0h2wyc&X-Amz-Signature=80f411c7482c818e97e5a5ca4db0378273c6ab01fee789ff443774897a217c9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
