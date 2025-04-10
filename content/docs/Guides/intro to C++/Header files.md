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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLFUM36%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF%2FeCdeuvI6hqSB93I2qM0VNSz9DlhhTzeaKL%2FZ4kxPSAiEAj5O1LQhrKeMVHCNfQTRIFpb71HkADbws2jY0fPTKR8sqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMznCjAORId%2BkoHQoSrcA6U7Vm7vJHqc%2F7GV0lvwBwEtKumJhiV3adRv2rRpnBVIy5xcuVr0n5IA8r07YRM%2FjAUjoxtwLJSSUR8Npqst2DXf7tfF4M2t1Uci9km4NeLtS4aGXyvQo69JXPlLRDe3I2fZVhIjWwjlSOb2ibscqOayo3Os3iYvhAOjm9Q3NCwXJ490Nij7MKqEN3KpEImj%2BbkV%2B6LhTfgPzU793QJLFC1GkjTsh7PZlQ40ga4IJeJ0QGFTc7i%2Bxc7K3m6ofJBC35z5ti9lqpEy%2F6THDQ2sv76g9gL5rH3lpwP%2FQ3Jo9GENuqWsbwSOdS84aSFwcgiMyKQlcVyGKKYzGoVOXVubEkEcI2zZZ60bbC4HJ6RR7UMYHqFBlSdVTlzEAKfy%2BKeIKjZkOupFm%2FgcuzeKkg0Ajk1elA5fQ0VKOS9zFoCkaiOMibbvS29P5GeL9dDMONf8tQhCRsypSNlHMkgy%2Bf1X7OdYd4iy5rs80UqmHYRb72OVoloRB6gpqzIvTHdzWLJZhGqZWob%2BFqJIWgmoxFS2Eh88dJoxD4jQvjLIrql%2FUop1rU89VmH2LrCpJhLGEOwePte4IjdV8F36%2F7beMwvPHMrwJW8lT5orGc1QDGjdGv9lRhl64iiAJ35U4SxLMLWo3b8GOqUBEuf8NLIyRaYrWeI9Cy9wEXld7srwv23FY85%2BVTcLYdlWCRJzp%2FAtfYAg%2FRTu8c410pdh8dxeeC05oONTjgYDKnmtpExDjX0dc6cMiBhZNyCZ8TGJbdWkbeseDAycwQKJjBCIeNxjG4TyL0lsSm7QkCUcvzGFrOrVD6j1Iyr44U7b1VgBSJyfuUKt4uHRaBOI5RqcJru4VA4FkCt9bvmLNMtUOHVW&X-Amz-Signature=39b579c69e9cc62bdd87445f45cd800c300a3e5e9a39d3fa19893d9f9a4f6d55&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
