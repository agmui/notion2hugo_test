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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D7RLPYD%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCxRfJ9NxBdk2K1cy2DBhBIPksBJL4OFxT2dxN2VxDN0QIhAKnGLkdVhGcCECAbE2fas3D5Pj0kEKZL0uspvHzibD8XKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTpwIVOCMMrzp%2FDmQq3AOlKD9w4%2B%2B4kMx4Im7e5O%2B78kXPg%2Bnh7pm4cpAzuDhwjnV7naMiztdFh7L%2Fwh%2Bgo%2FbceC%2FQ0fin298LNLlI6jZ9Oz81apCr0KBgfCGvYCqRv4k5OzxRT0Xm3MnbHLFzBXGIjVjTZJubRT8blKnAKNdW2oTEX4KImPQR6wyCfq10DmFo4vN004P9GwjiYAaMdNyGOav2GuQ3qcYAq6mLm99BmRMu2v%2Fch%2BDUcPik5EQuaEWS%2BtKwVzhrF0IsDsAz5HRRERO8um4358drppyoM5rofHh8ePt0FKjh8ghmWdvdEaI66YQlMRUCHben2iLMGWorT4CcFB4x25v0fyLGDuzBlo9x6M9p4W4Bwc5SGN57oAgE3oJe2RmnmvkvkWEnDIbidXjHsmt27V0y7NHt4g2rLy0Dhe3dtqstFskBeeNC%2BzACD3KlzUXrwbywSX9mjZPTGq7TSytV6pgdRMjR%2B%2Bo4XoPfsTV3325OQKM8elhAV7ktPi9Ke3814cGTlJGLMYGweVAyfStRxP6j9bX5Zb2uUBnixk4F1J6CPA7i%2BxoM4xgiqq7LXEPkRWRv2edZ8JpQuWwTki9DEJcv3WIpZ10Q9tEbT5ZDEqn6krZ1daIelC64%2BepEZSmdp5RpkzDY2Pe%2BBjqkAVokzCK4LeJNYqNf55oNy9xJ636NW9PtgKL%2FzqsS%2FIiBxp6x%2FquWZ7mnR4%2FygRbIOuMseYtg4eHz26E0V%2F931DGDmrV1ksOC6ayZtS6jv5BaoFYUDCk1zULlw9S2Ch4QQ%2FISYvBhGqNb4dgf2aL1%2FIgG1xMix4S4Asp5z9Rh1S9yMtUsoh19RBmmAq1KYBvY%2F%2B4MEdsLQDHblbRvlBgWR3NtMrYw&X-Amz-Signature=35449c6cb415aafb6bd1346be1f34552f69c5acf70a10eff05b258631b68b1a0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
