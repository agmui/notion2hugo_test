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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675XYMGHS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDhGP1U%2Fmxbv3mmJXkjvK7QZYfu2zhcyybAmGeZzXP2%2BAIgQ5%2BJeY6%2FSd9ADTQfYlRKatRMiV4LEsxBJIx%2BcqVWEAoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDPEmee%2BOAX2zI24AZircA9k0DKGCGRSS5uhdKveLmtAHRHTKxg5UHkz3H159gKv24QkXrVZque10BzodXd6YpI%2BGsm0RAZ3mGPCRHRtyYr9N2IJ8IkzYhwArnJBZR2gs67j56FikX4LygjCo%2Btl6deIHchPWZpYU3AD9jgjxnLU%2B2D9L5bnEvB6dKndMAMg1LSR%2B5wc5X%2BiLLZDmOIcKR4VIhZdJ1GShYWNzzYf0FS3N10lkWHbQxndXSnDlgG1UQi6oUv4%2FEg1M1dMh0bkbUWP3JV3iVfCvy0WM0y8NwQXDatPRcj8PXv4mmvxSx2aVDp5AFAJW3J%2FgKtuh%2FVqIePerYxV2RH97HaZePDba8%2BcsH0%2BGuYG15eUY7pAN9qvpLnqx6ZEOGG3nptqUeoo4xOcrVOCQzvaoSJqOxPK0TM6svMxrCqAGPUJZugCwZZfaMfDUWB6iKphasJzwrgui06zyMZU7eNsWJnzee2mGC7WYgaShaqHIs9d1j2dHOFAHJczOSnfajyqfJkibWyfLSjctnkXpzHdRNSKW8wlfevrur6sTRstNUBZUCxOgItBwpi23Z%2F7WEj27I8JsGYJUl9NkGMFWNqzQHDqahRmq57vIFz3B5KfzyyeQ54X9pDrv3YVTQzCwMfAF2sWuMLDEhsIGOqUBnuss8VAJHjn57dN8OTXfnHiwgw%2B9udIYaPOgNx62YGSnRdbgM%2BtT%2Fr86jTB2Wg05P%2F61FlCuG3jX3vRgd8ANzTTeXbUFak139TjLGbb8AUWxUD0QpXV6k019q9LF1r5uhkNrOLT1S6WP3oUizZs7kqBG7IEG2QAM5VbAxJ%2FPeVBRB3eLqFz9tEqlNK7N599VkbSawW2OBWJKjUhhxueLy64JlPtx&X-Amz-Signature=24674519fec03a9ca0d73fa7435d4c682fb154bd37a45bfa2e7aac161be53d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
