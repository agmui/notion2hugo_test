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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNX2YIWJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDq6A9XYBe9VLhRiGcnxpoQZVOJQZ0ur7Pd8UBprscD9wIhAJNQD3%2BLRJaQeV1%2BPrpCjOfcSngCJLia7xwkj6jH6Q%2BaKv8DCEsQABoMNjM3NDIzMTgzODA1IgwetIg1bU%2BWAQlZQzUq3AOPQ5ddrgpwuXuhS%2F2Oc2pz4LKB2XZCBVz%2BHkYRN9hjkLobGz8Iga9TOdZmgxOBP6csfsbRZrCbOF9Hgkq2GWpy97fYHvJ%2B3DU6eiNUJQ7dYGggZKxNOfpagkTdSrXTpK2n%2BMtKikG7Itzkmtbu1qsk4eLh8qzlWQTtFP83d0FWWsmqGEEhCsQASWe0fMlRWjXWkgfKZQCoxWll0cCr1d0eYnWZGMxP6pbG%2F6ymEj3kPPSvju3WuaupFvp16B7G71WkSfCiooKTJqSl5I4aBHRz0cbCWB5CD11OXd6fF%2FWNqZm8exFAxu%2Ble0VG8Q8AtdZcwMZerE5JLwjyr%2FOB6%2FaF6bVMVYPJvG8E8wIUzwE%2FFZi4L6mectIGvxE%2BayRBE2KyXM2gHz4UwL0ZKR1ND9fJ5YDeNmh6rt3XO5eC6XKSqgWoN4wjPI2Lnwr%2BY0eeGqrRRlCvVK9JwQjuWZJ81Ua2OjVqWrDH%2BCHiwbpBypYpTbCG%2BMmbOepzM%2FGC3Cjj68QlxMckSnxJKfVFKkeTsokS6Qa7Doouln1MSUMLCxj6ZoQGi2uxw8HGIw9tAheD68DKn7edm2tHTVOtONLxpClg8V87OdNEIIEDYvZVlcHNWvfOF5BznkN3cr17hzCIwvjEBjqkAcWQX293pOxnKpw%2Fyti6Ot1LjdxVd%2FswOp8dbNCcy1TKRnHhyoFoSym8%2BRw8p651zV%2Bm3X94Cm4c4aAcu6qtW%2BYAnMalLjSXU4GOUpWdbazdbv7e3E0XmN5Ity%2FIG8mvvTyTUeONr4BShRvAb58cmXidiotzgxooR3eLEIhxcmmq87AZrXAI7tqQQJVMrflS1kRhJLSeFyUgMOFCc0kL5GFxT1uT&X-Amz-Signature=0ddc243f9ed6904b43fb74fa8358f345f77b7c4f9254add5abf3bd6fdcb4f6f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
