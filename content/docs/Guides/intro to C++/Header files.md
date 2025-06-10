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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCVUT6Y%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmual9I0c593uqFdvpmRZFGBGCoYsSsoRUVxVCTUR%2B1AiAZuQkHkKcUeTwPtrrzWK%2FV9LxrDBKnDkSuUlQ5N%2BbqkyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1QFqxp3zfmttgcJFKtwDRh9uqucWA3cwkwNAMS01hbJ6Z9h2doBHs4kxnTIzH8CZw%2BHEDRCJ0T6o0qzMFgTtJ3i2V8A7FUDNHFXTIdobVXEhzAbezQWXfgFHvTmoZGvGr7HFhblFoQ000DG9%2B%2BpFlr83SUlFPo0wDQGXbvjFjbUorkDQFEKzJJWGGrFn8e%2FnyZx4G7Ift8qZv72xLTUgjVPsi2Oyz2ax7M%2FrhYwURK6il1Ag%2FZdUv6jE3jRSMlcTGPqcgHYJUCOKG3b0m4euGoEiSeCet87Bh5a6wgg%2FXB8iXdE%2Fe%2B3btcy6pf92tfjvq%2FFRvL4RGLzuAR5x5XumWINCyGE%2FTcB5WC6l9ASsmNiZVap%2B3Z3g5oWgzBAz01S0q2RDVfNRBK6IouR2uo5AjXRIcIdMahHa0SaojbwtyP37orKEM3eWGLZuCibKBe9zUAy%2F3lvthS63aIScc%2F%2F69LRNvI%2BwuBoN9DcDFppGy4%2Fcu%2FBT60mKMqeRSfaSPnsad8CQU8junppFgWKj18qWcdskY7hW4hLYy1gmG29vFXzaC1wlqyBvXUsR4akeNbybYycSlj0aJljvnOEY7Py0AtHeOEmQ8tyomTmlC2Z1xyx3p%2BIdDeY4TuLVfftPnzlZqNgKt0cABwHYQr8w6eaiwgY6pgFMqeJ8iTNoY9oPBANwnzDCAF%2FIan1yN4%2F02BrR8S6ZQgSKfOjQ7BiWBxN6KcebFgkC1efAzF2WBedePUpRuhn1f6GBuf1v3hEKdKF50LYSxZrW1d%2F2e2l%2FZK0j2mNm2zY1zIv7%2FScCKCMGQxb99yDnkXlZeJJ6II6TlNYYbayrGMhHyxndhuINSa43w5v2j8Mns9vGsgsjL06IVzTvbX%2FBQ69tQcQl&X-Amz-Signature=51e8eeb2997e961dc6c6bb261aa4d7a93e56c58a45318225d2d40d85b35c33c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
