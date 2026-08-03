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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AYAWUAO%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFJS3Rfzc2ovTFeJFNtMJWTMxXLgROyjAvQ5SNGCP7NjAiAO0TZz%2FD0v%2Bm9xnO6B%2B30XHPeKGJkSpEqCUCWsV%2FM8pCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXxQhwb2ckyR4%2B2ikKtwDJ4IzanAU4w3JQm%2Bb%2FAuBTs6yZlmp%2B%2BMUaJVWyOapswDD8C4SlQqWNmrfYeLf%2FltvT8%2Bj5%2BWWhq6MI7fwq222vZytlnU9D5862MrKLM32y1ItL7Gp5FNhrvIM16swtGLmdbamXma%2FVSjVtixjL381nDDBQCvwOmaxPPi019F%2Fcl8pJn45D2wurtthqTR5bGfQKFuy9ErCCginmalWqtUw6BoSSZJykMQLB6EvBxRGF4mv9ldMZIkkYsx7w%2F5qrppBf7aDH3KuQxal%2BfrlEjaHgw6n%2B1B4fzNCt8fxNdiyDcfVwnCqJ%2FyGsIKnO1mQVyUEPoOsX79OmgS3WNjend15ES%2Fqee02knhlPSvSh62niOGMawDFJogzwrRljzDueNzDhww0QjkO49WQO0K3wBAX%2BxOQjP%2BfP%2Fa2K7BZ068qPBuMM4tXF2ScQbPzgLvQU4R5nd%2B4aRJklsJycYqhoBjdYPGFMKs7JtxkkbHnQ8nC%2FhrCBSUbKqM168K5LMZKHoFsJiBPnZFLUj44WeL4IJTyppK6f9TZDDJZj5bK7zVsgmoUzMvDb0TuAJEO%2BZUz2qIExsezIgdZbyQ4zD84rVUgXtYJ6gN3xJjxaahM6Sc2oaD9vbBLgVyrVMegd7Qw6ue%2F0wY6pgF30ak7JYsjUSkyOI66s6zocFcyqvXrcJyqtyMQJwma5nOZw9rGjShnunqqVK7cC7hMu1XYGWFXyJxZaHUi2WL8DoQcJ0QsMGIXq1uV4yWIowcfYksuXZK5FQa0U%2BxB1swt9rpdZlvdduGOn8BsFTUtCGjE56RTQ3XjANe0ZojKUZKvQiEsinbTEukakuAVvSsugE7ywmVbwxPNBWUTkHE%2BcoZZvuUC&X-Amz-Signature=b12f833aac62da8e0f176816f6e02e3ebf3740c432ce54c6f02d6b1364469c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
