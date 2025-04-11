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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z3CXJPE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCgX1grow1mmrkKvESH2UUqi39fDx9zl05Cm79NlEyiXQIgS9cqt664gyB1mKh72wm6IBnw4MAUsjKpMfGQ%2BVMGH04qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ2YdQ5GhS83HJ4gircA0wWYjm0LWVsZk%2BstZhchvx8CAj2Z0BFPEx2oggdG5Y6cYFk8wzVO1twVh5DYV7TnfAwa%2B3U7rKkkYazPhmVeLpwsZrh%2FYzsTb3Aa7UuNTflMPxM%2F3cMB8mhXdf0vS8ZvYSXyinT%2BwNdKfJ4Ytc6VRWfsGUN57phnoodTKyhpjXpR3fq3wF6IO9nHomWqk8EqJUSsZmTQfCcXrzpHw4iyA6MohLaAwa6EKAmrsbsKzV1o6HWMEbMkJTpGVireVa5K%2B3cz%2BQ%2FRDDMbSNsyK3QNfBeW5B1Ml7S0QyJhg8EQriH2VBwlat5rggE8NrRevQUpDgjIMLfL9yahPHAK2D1LUWE2rJAqn8RTnD9qZQg1lZHU4RVHZpb4gVktjnn77PrPoj7rqGCp29y%2F9m3SvGrWXOz70eFTkVhVCbqkC4mehZe8nEyX3AnxNPXqT%2Bd7XDP53j2NoxaJGk2o74RBSCb5sSD1oT7ajfypsQzMKgPDahRnSt1DGTve3XMceN6Nrzacm3kzr1ua7yis5uvm1fFiev5Nw0lNEpD%2FGyYb9q4yQd%2B2y9qq9w%2BCa4w9szS%2FhglfGHQFuX%2Byp4tdV20MvZ0WRDEWzwjehvQOBD05A3pmDBzR1eLWvcMntzoh5unMJrQ5L8GOqUBloUsuib2khIC4Prl7EyE6xfS140xu0UiaBB%2FEIjDp%2F0JG8rUzJSj53jD4ApsXDGNdmLKjIlkR%2BnzPdzTtWjK5hw2%2BcFCp4C2s%2F175pHuwrBznuKp7Ylp%2Bo5WaPaEdjwgDlcakHKhlSEvdMMlGo2R7UkXPTfHm0dcO%2Fpex6rSzVhu6NPdSQfeUY5K%2FdF7lKdRinWWwZLhHHi635bs1fyQ%2B2AynQfd&X-Amz-Signature=085b9f1aa7b578fa1e34daad3044da8b6e99e032191f2aa6fa0f4e1500a8b251&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
