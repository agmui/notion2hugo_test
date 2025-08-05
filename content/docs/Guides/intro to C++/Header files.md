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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKLXQYTF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIE8K0Z4LWTBkKe%2Bbl0Xrt9%2Fhf2vLlUHAZuoIjhXi2wIMAiEA7tE%2FMZWyAZRXU%2F1LGrVFe0PnhkhRJtd%2Bca5w%2F3RG8bwq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDO6MfZ1WbVq1YOrBKircA1Qf2b2Cut8c1sKPewP6MFYg2ckWc1NnZsGOAdP1%2BFo%2B%2BEYqFu9WvXGoTh2uD8zD4ApijRKvSuOsHKYJrObPCay%2BeQdT8XPlkhE6gFcaiPJh39OMxrzqkQ3K%2BgVAH8k14FGOP6QPdfva7u9P4i7N8xAIB7cYNN9e%2BwU3rlebjv8vp84D3Ccrfwd6sq0ff3y7FwrdcQDfen7U3hcLDCXJeGy0FrdzULXaqK%2BxTyKH1ieAj%2FzflBPu8EB48rjlvFu5u9J7CdQogV5ITl8ZcPkvf11QMQlqxXGgsBoEKKDcy9ADe5rx60ghiYBsiBv2llowQubNYNVj1FOtHmoJ2p7K5QCPmhSKEvKx89XSro8Af5WGEXlUNzScSbEa4dPgiduURohltbxOowXixwpzMsasjbVy2aV7mgI3LLFja%2Fg6KPQAZxxxAqItyfX7IR8IY0k69ZJrQBzYc3TS8xWPvOHMDqMwJKY2jkJFxn6JGdSsZDPijdw%2BQHJ6V9HSGVkaDkOETfOosPy61S%2FOfmov%2FcYm3SaujSZeJ7ifGE2fUSYqEAw4ubWp6zaFZ%2Bm88tZpGs0GXseYWQzUY4qiH5tDeVtLv6CuaiDzq4Z16WkrCB4MlrKHKJiQkKHfymlYqavmMODZxsQGOqUB6xS8DIM%2BxPX4hXtejEJx8JABWJRakseX3mPoOBww7EE6n3uu5W6qvIUxGXbirkfxY1mhHfgh1l92TKuI%2BFcMkxGDIMCZ%2FobXPNNrk0ZSzCsUl7aVbJYO4eswrCrGgL1fhWX9rV1DxeRtuECmFBL5GG7oH%2BnNr6JBWe5%2FMw1upS0iTocSCPs7mjam9xHfHA0ifWtjSQqhhzWee3sn06Edsea1O8C8&X-Amz-Signature=52ffe31d395f23eac16eac1c739b77f3fe1e76ec9781269b5f0afd2bb10e6e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
