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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDNBXM33%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6E817XEggjFfYnK2vUNdf%2F0FRtp%2FYr%2BkxXEt2aBObJAiBO2awignxWm%2FopnncsdtYUGrS%2BWa3vWGClQ4V%2BprO3eSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhHxDLN3c4g00ZfAoKtwD0OGHW%2BAVgZH8PewIaLTa3RJMd6CofOMN%2B3xjW6H4QSV45iAFzDGMXJjirgceazBrJ2dPzgQoVCJ2ARR8%2BCiB%2F%2FGDTL4BqNhSomoSH8Q18ZTcnM0wU%2FbC6FKKnUI67ykyjjI6N%2BGSOYO8kXpazVBPiTmkX%2B89cnPj2SBm5cywIK7ktJnTWDLRJxBtKKnDAdi82RZIkDZP8Cn%2FTliSjJPvDeaK1zUqZfmWCoS7M2YTxqeidbWlPxhKIjGME9UJkgwnDdjnkX8aJ6tv%2FS7q4wE97Drk8hDLT0Zo0bx9wJHYhhPWZnQGe1RCuyjX8pqaGXVVI%2Bq7HQv8G%2Fx4A0w%2FQvZzsJ4U1%2Bz7U3xRMymkAjJsl%2F461P2ixFCgeGs3%2B4iknmaoU6%2Fr6cN3VoVbk4virYWB2kNFWndnMh2Di8TzcqbDpdvE7K%2FaKIf28VOO6GS2Jbk5T%2BXUfFt2nz%2FE6vyYmsOk7BuRe6tkQlR28DraCtmbBPod5woi3QdQHQx1qPLapDCNky7DZZ2b7HYvOqznFuIumbK1YCNxLOtP5QzKEy6s6%2B%2BbnTxZEERn3NT7GbLJsa4DpI72t0hXS4q5y9qXzYklr2JoRhHhQ4OSILUWYfIl42mkENepYlI7ViF3M8IwqJPSvgY6pgEgpoy2i5VRdjJcm6Y1dY6%2FA1JhGj5EDufPahfscAZfzG9rsboj%2BpKXcJpcHNyh00v3OhHrGD2%2FLd%2Bm%2F31msVyg1mVkz3OrmP0v27kX8%2BE1EtwDtTFFxGsZb57%2Fyw7cAv7tvapjb0P8SksgOiV%2BlQ1MLmczxZ8e%2FMElJP%2FlWW9gl6F1eAlJl6vcfk6kz%2BjqaQTg4w7GRSgt1RwhMFyISeXx1tUN1BtZ&X-Amz-Signature=de46170ac1f6fba4907cd4064ee6de627a2196d142728fe14330e38ca9adecd6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
