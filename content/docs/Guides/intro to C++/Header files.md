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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2TRX5LJ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJxn0utBE%2FynaRE%2FOXxtDqVHZK9%2F6TiDLHj5ntqn7tZAIgTVbzdztsPNwrijuu144Q8Fw%2FJR%2FXr%2BYTd2o6eHxfDpwqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoujyb%2BKwVnYqcPAyrcAz5d7QuIB1x%2F5AoNm7BIm2dhTZcoX7%2B%2BpO7sxbCb36wWiINjBUYsA234M2poiDNWzFBRPlzkJ6eFF3W9cejpadoaEqeHbpHOIK4UpKts0F2S%2BnYyZSRqNkRwdNWfZxA%2B1WPZLNXv6kgZB499r6RBFsP%2BsKFH8Ks000WwguWBJksVfNi%2FI2cJ3z3td5nXy31F7bCN2ITA6tMKVCJkfQhIzNRoirYxVnGUA%2BpDwupZQKWrd42Yfp35BUiyDEACzZNV5U%2BI9xyBz75v%2BPnq%2BAv0RIdRLa%2FOGqSHl7OGP%2F%2FG1FH88IxCa2l0OfrhJEkLX5tNN3HQqjtyJpxGydHFg5oeIZXe6urGSe2QmJkV3%2FM%2BfzfGhHC9t97%2FZqOkctGVhD%2Fq1sdgjI7lds73hiqfbuoocJ7Gb7WTHug9I0lioyt68Htj0YIR%2Bu3N8cbRR8oNeasVtoRnC7F%2Bx8DqbpXT5mkOcEfjZMJo9dqIr0VcwV3Ewk8MSIIGrEAMO3BBZwtY0YNcWr5YLKtKQGspzERUWSV95tbVFxSg4XkprZnNrkjUD8KYYJbv0OLyrOV93PifvU9gvQCj%2B%2BrUpYTZ7rKr2nvbskgVruHOdHWWd%2F2hj6UaRKLrBtl9G9gA%2FR8VJpoPMJ2Em74GOqUBoGX%2FokjYau03Mh%2BrN1W%2BEW98Ks8ZLLNoCIfsHEWLUFOsjCQN3Uckd0BVZlIetqvmX9s0A%2BvtSQzBs8%2F1z02KVsXPWMWeJMKidtgrvR5do5tTJYdajcuHv41tXJXBAQzPyiW0n8RHBrCVJRauUTon4sBt%2B3Ln4IrzYCufQG3dFtkn6jWVkarOpONWgC0FKuE3M%2FiuwGmzKwaqJF4Zfn4jKWT13L5e&X-Amz-Signature=c02a5ac30c1bfb4b48ee5d0674ac95a4b710252e9427318daed64d6bb0bbacc7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
