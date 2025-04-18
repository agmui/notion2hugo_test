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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRP6WZIT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BagHrNgh4X6tAjCmOAknYurQXn1BBH6KwhaHRTYhDvgIgIvBsiKpJD39BrVgOIUNhvM6y9LV9dh7%2BpKzNxy3%2F61Iq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFNnZIOePyEHSc6SqCrcAwlpT%2B5w9wHSQpxfBTjMoYl8lQSOagh990tARucyaJIo%2Bs4wg7ybZMl5ARqDTUdA%2B0O1e9bFhIcYvqXzWPjVMVyiW8T0po8FrsuLOf%2BwrU%2F5dIFuSw9c3rYpUAWm2K5FyF6XXr4mnVdaRbZREUuYs0lUw7XWHpq6wdkWwNL%2B09v%2BzHkv1vGn9ZKbLLB9i92iX1JMkUq2A74JwnhjDeaKJh84Ntm5bjLSsb9ioCyBqXL2TzuMfxCsC6Srnm9oDC9puJa4bN%2BL%2Fqv6lT%2FXUJEj2GD6yT%2FHuaQiyp9mFFDJrgKA%2Fg8kWbpomlesGm%2BewspB%2FVyqVFfjITCvzKPC2CwxIMOtNUgxHXkdODf5pryX4PC9W56LOCSBfxbkwjlB4zMlUON5KSN7CqsRgEo562tBiq6vdc%2BQQZhMNB%2BlWYDfFf7O0vUcLpWRnFs8kUTCwoaPhCpfUDp5Ab6GPaOmtDqcmg35SCvkDNEEXP4yNXeQvshIg2wY3lh07WKJoWST31%2Bwd%2FjzzDldARTkJ%2F%2FbKSGGIwpEcNe2yugcKYwpIzBngnWSRYYKoqMvKt2dXytzSg3TxaR3TWI%2BAcneTj%2F10fUeg648%2FlhgFHWeHSKYYClCGRpv9rMWRvEE2bCqE%2BpmMOmoh8AGOqUBtjHTOxt9dPlPLtqRof3tRA%2BhfYwYeCYoSnqAM83IyvzGfpFfaWlowoR%2BJvpDm6xM8cYqjJIWB3sJ5uiSBuFsdQA2FrusIRQfJ4cJ4g94GNVVyR%2BiI3n7Nkhr9mG5AwRolGYthMgQLKJNwAws1Nn%2B0H%2BBLNuQ%2BGEMhDZECPKgo3yToSRZBDVeMGyEnjl2NDGPj1yoKYqGEM5FrdnmioeusLivzotu&X-Amz-Signature=0001fcc23fc0c1ce4f09ab29964555d39237d3b31b718949e248df03f96e97f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
