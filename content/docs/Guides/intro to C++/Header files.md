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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXPDDC73%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwM6nOLKQSyonZh6jx7jS4ZvEIQm4yxTqjHLKZMerY2AiB8EU0hg5fRM2SI9pr0cRn86jhutfG%2FH15iJp%2FKWcCkqCqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEnUukPMOxq9fqEvGKtwDif%2BlxFxL7X%2BXNSit02X98q8sjB459%2BigKrDDOMB4ddSvmVO0KsYUiunej%2BOZ13sJJySNJ2QU543hlidlMFgYXDwVUWfcPlrcish8od3lmV2hxf76wOxlGM9%2Bdv%2FMKVhQaeuVX%2Bb7PRo7PIIRUdEw5a8yMt7uwBatEaNrbCWVJgvES5AugeuO65uyEMaZ%2B5C4msV2nKrEYGmvBDYnsaR0C%2FLiv0RsRKLxJ2vZ7r4qN4hrdp%2BoMI2W07EJZFsoUGsVheAdS0ebILvgs9OuOWf%2FpjwNZrgs09pI15Ch%2B1Ytn6Kr3sThe0H6GoMAfYe7ohVF%2BJ27Jhz8dF6RYUw0s96qNUifh7lsOfXcckrdrV2gyxupsgzWQTDgHgT4QtQ%2BiINk0q8M7mMmOOCfSVrx5oYkMbhN1d0wx%2BLOuz%2BZFIE1pKE%2FgLS8Pge4NLF2n14IOKgQK6gd6C%2FHqlg6Q3tPKkU0UINEIu7kSCJU6hP0Fglad4YzLnXY3eAeS0UyYEo0V7FM9FVXrUQtogJs5bUqGCYu2JE6j7dur2TJ2EE%2Bo%2BRke0mfM9oakokfIf%2FUJzz%2FGxonPGcQYe2mNU%2BSG3qAF2VKH5%2BNhlnFyvfsHM8yBWJWD7DGsg1y9p%2BiyisRdKsws%2FyXvgY6pgFN2kuFrDvtn6U2j9X8eDGDPrItBWzftNDpLQd8eASuG0hNXNCCnMTyqySldpVL0WqDEmL4LTTz%2B1tzVSq8rg1YNsrBrrG6jhNpmQR%2Be9YbeFFMx0yDscrNSvXCvDWQOBm8EyYNMtW0rCbu99IrFy7RsL3sni5ykUgCyIt4nqMJhLJg%2B3oTs8%2FPdshNOzkZLm8qpSYbQ1ncfBNMnWa%2B1KghFX0Ukcsg&X-Amz-Signature=117c3940dffacbf93de8f0e5bfba3e86de0a1a0b696c1f9bb81a15873e86f524&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
