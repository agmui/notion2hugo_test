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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBSYCN2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbuHhsh%2FnwxNAW%2F41eUPYBRVgOLnpxHspRh81UrXid1AiAfiEcGsi%2FHwVewgjFdFGjfu%2BlERNjH3YmjR2W5xTU7wiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGRcO7EEaEPTwN97cKtwD4FbxssrkUyf7G2Q%2F99FJ0qSRlS5ZU5bN34Ba4sxihRV32t%2BLyD6nQgNNv%2BK0bPveGZHZFw6%2FmqY6NpnpGbSLGLd3Q264KAM5RcNIhxg7nb979rYGurSvM%2BS9PaSnJox4QDJFG2ooeTD%2FoneTMWif%2BaseAdHBm0mMrUXL8ECBr%2Bci7sXim0xpJ4LkGOohoP8oeI8RR7HrhZ%2FMqebIAntQ31mNbd2N%2BiZK88zklznlqKuUe4vUdv38uE9SWg8k8xPV%2FxcZqM3pIF8sQE4vJKk65wiNuRfs2lg3Ozte%2BK3XoCqDoajaaxoOO9cctZWLuzjXDoehznIuswWAPjK6bZEnjSCi9jb0JAoqmcTnI03b1TjnrkDce9Bc9olSJCbOB2nfG8x5v2QziOumqv0LNKq9ccpoRQdhBlDSJggmqrocuAqUCxcJS1QIVYeb7jF7szo0n7W6Ehonni%2Fgg43hF5VQ1ploOsTSLQ%2BQW8%2Br5DjRgaHeWCnACV2VbnVe9v3T0CmKUN3Bsdhhw7wFsiHsQ6M%2BzwuYIxiPKyRJkkPbRoKbLpKUB8Y2ORssMQGT7EbexR8zjy0JYL%2FEyfTqG4zSusFgT6GfHvFcLpyTFbGIdy0lHAMk5x5u2WM0f6TKrkIwiKnCwAY6pgH8%2BlivBS9MIKC9%2BZB5KymUL4z75Vc2yXuLCrqMrNoxCcS8W8I6UE9mmjxOuZENDxMGf79pe47p6nKiO9knfrLxDlzhhOEXpp4eBm2Me2Kex3jQjOrq3tJIJYkGvmYpEwLVUKC9qZf6NVdtnJHssOBEw4GYQJG1kgv0xg1lMKmZl7M5vnWxlJIKpZTMUDGvoSM7KotIU0xYLif39Amnqyllz8xQR32s&X-Amz-Signature=492dcc8d55a0f9e29fb0623720b5c741c3e2c8adb8f6c08c5403fcb3012322ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
