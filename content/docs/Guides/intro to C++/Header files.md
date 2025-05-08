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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ET7QVD5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdSNNjeShXS7hEG5LihyQO36OkwjfKYXbjfZ2epmZFVAIhAJ1iOuUOPQO4knUQCTbreNqWuHfAYe4JsL7qwD0jcxTyKv8DCG8QABoMNjM3NDIzMTgzODA1IgxDxC7a%2B5fTAvrAyP8q3AP6keepGkZHeCrJOEJ%2FRjHG3uxPAIXlILrd0DXNNscxfcVnTqFWf7ehsyiLpbsJRAl65w3VkZ3LFgJ4KVrSz%2FcNFRQOKCSwfcQTidOMLwqLe7%2FJBzHmfmO1vEwiO6MrqRMl%2B1%2F8vKtfuJ3Ny777xorqfZvSzNwnE24fYC%2F%2FlQejzZpO%2Fq%2FCNAYE%2B%2B1S1J9LSQLLwA2YlO5xhuhNMMSAoquuaq89yEd3KO9SfxxxvrXSLEz3BHI8lRkqBb9UhW6gveDyfKn8qK7j9zSlV3lUnuZx%2B1th7lsW9BRhE%2BoJLC8y1MAWNM0ZYCefOnUzf2J5ukI1My0KqlxkqoPWEvpnFWrV10jjm%2FcpjBMGunUmna6D3pFD7s6xYHWSZjMsRpWtN0ArVDqrqvwK8s7euShe%2FntAaHg89if66Qj%2FHSaVI6pN4fm7Qz0UPS0nUCw03%2FKUXpY21JY8sMeLhjmDdfCv7SE4UINGSFKbZ7XCl9aE%2F0wSKH45UqMyKRuhtgMpxbqCMBLe%2BX7hiTG5zf1%2BqB7qt9NHXhEQeRsa1rQbaQzkAAA8ZOAOZlirxIkDLO4hZQIl46%2B%2BzZ02ZF371qwwZbVpu%2FKpVLsNAYxHsuyRwQeVUwumU%2FIG%2BRnNwbeX65PYazDvlPHABjqkASQkigtw4rSD7oUazeUvBmbDVSq6YPFsspATkWDnIA%2B6KlKKXG5bpOwv6QK4r2fooSZNAk3okyB8vqtQ%2FpLJKcQ0qdu52rVSINKK11V812qI2oirvCTm%2BlkcgxI2yyiKUoPLwettV6HTBq5sl3dqjz4%2BDwfTLF5vK6AwWkysdU9I28ei5jRmYDvU83igRSvfjJ2fK135UQ2HkZ7ZknNO%2Bn%2F47f3n&X-Amz-Signature=8895b7bd084ec7f8b6e26c0ea592a3d81bacca22bc7c01662f228e2fa6330c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
