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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HG4SPTJ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B8kpF59iqPv%2BypHS6yNKFf8jIVG61y07bBUq0aLldOgIgZmwrpKT%2BKE4zpMgwtL4YBZ62DZdQc4s68VLdF8pooVAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJVHq28qQSxtLN%2BxSrcA%2FrkbKeWpjyfl%2Fzt%2BURY434hXr8tCnQrqw7CuD5FuQJD4NRpuZdoYSEWSrCpX1ljqR9T%2FD%2FfVcFLako9iRjWFLKFjLHZXT5%2Br%2FPdY6sEr65kS8ojAM51Z8YjS7u27praSClGN2xrCqsKjuV%2F%2BnW8NfG6csK5rgxkpxa6kKDlSJrWCouQm32jNsZdwr38LX7OwQXvUUsloc3SnJ4WKUaFapKZYmaRRS%2FWzZC8TDHrqAem%2FsoXuAMV6hUNOZDjiVeNUImu%2Fv7nSTBKLtROEDWINdlP7gVOaZX2hjCBRGaiz7lEe30YFG05IHraGjyXGyov7lDFHf8944e0iUgT%2BQyALZ%2BXq%2B9teqR0MpzitATjZNdc3oPQdpdm2hNrKjd%2BJ39QIr1aj8DFYnycBBj6Ajtukd0EbeHvdP6f%2FQ8GDLmGdkxsJzYZ8%2FzWAbnunR27MvsWdfihLnndA1CxusSlD3rDOc5MQTGrL2Gk3D07tX97ZRKGMSeONfFWJdxNAxBtgrh6r3PCXPlx2MDDDYoYO4XCQWODvMC3z809Ie6nBdc2pRjRGqmIV7pc%2FBa39l3R6zl9LQ5cIJDrW3HgjpOTJR4sSncQmhBJyocX2bx6kvBtsZzmHCZBE4Us%2BMK%2BUJeeMK%2Fa88MGOqUBPCuf2x75b1UJzT7LI930CWCpLVr9K1tKTpl3NECIn02f%2F1pyG6Mz4yZMn0t017ooJGJswO1sOAgm4DmjmgifslWZUSc%2FfTJh4v4IaXvsg5%2BRUUuPB6D2d0mCa2T%2FhClc9mWkoqNj8In5c6Nu8bMLyp%2BuPDzvey1s0jDHfTf4Zs8FO7aGNUaiGaNR4YsT3KgruYNiWPNnAc7KJnTHF986P%2F7p5uKO&X-Amz-Signature=7e2de1a78ee34bfbddd6393ee19ccc8accfadcce1b94d601173dadfa8ccfa277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
