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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAB4XM6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIAzzq7eMO7gNtRBwAeY1QKY8IL7g44ewJ5tEdH23gdSHAiEAz2npwnyOGWa%2FNE6Ryz3HSAv9DuWvKr%2FjnGAO3IivFzoq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJ%2B621Br%2BPKs1ZfOzSrcAwUlVQWob94eibY0AQXuYTQkG1IwE5jaZCWQV%2Br0SKekLCJsx75yyrKbGCFPIRKd4GcnDLDqcbRj8xPAOitRIu0NkMrIDy4BXPj5h7Sz42w%2Bs3ko73pArp%2Fi9%2Fm1Zrw3B3p6kuvjQyF1ai%2F2OWkQKyB8qqsKffDB3BTQ6vV%2F%2BXSrhiHBo6hmLwGYYrYqKVFgKO0EH5A141Q2Sz31VkwIOVqUvVtiu7XsdNkwSuwh51b20jjmjK7WIjiRTw3oPQvpAKMFrzCHFvY%2FN2LXjICxrXqybXl9EvWsvBqhRdnTlXWEHySS3goyKUr53aejoj5WQbB9EFXlBqa5JcioH7XvTv55Yf6pT%2B37LcThRnoGoaApKCY73PEJnobcS7j9SEpk4U75HZrVvxYkVLmIg75bEgoZTZ%2Bf0eIJ2FvU%2BqgI0qqHX%2Fa51Xpln5cpWOl%2FZnZwxyAjhHDLYePb6T3C%2BT65ed5VuX30hN8h2lvTUnxxko98iLWMkc5dI3shp5sUeNl6Dqkhkv9E%2FI69wEaZsrJ4HU69PIfxJPZDvooKshQglMvMZJXs%2Bah%2BeppcEoc%2Bp5GgRJFM23TclFaEx9lh6Fw%2FuKKEgObKV%2FSRueODQ2a7TcVTjEETpBc68cryaxVLMPG8qMAGOqUB%2BPFdr9E1Ubiv2Vkfi5rUla6c1QSyC58V8rMZhf5kdQvJK35d9mEP%2BHYOMxgmlUo8cK1eIsmYIeJ5L%2FiCbJhJuTXPhGs8Q4OOOYlvIrEKGdrCOi%2B5u9vJXWAjQIe47%2B2dhqhMXHWfpYYQ3sUD755PlB%2FoV1%2F%2Bho36qw6tloBAUra0ImCCo2nlloGtR5BNB%2FXWHfz%2B5GsFfBVeZ%2FALIa26oHj8t87l&X-Amz-Signature=410ec0df87c5279724978490dcdef76d5100b8fb313f765e9959149460513591&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
