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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPOVDLL%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIH40Wf8ZrJyu4Xx4jGYIAEQ9RHHF%2FnhwTESqrx4iaQ0wAiAo09VurP92zBjGRWcyh4a%2BBD97dtQMuXbBOICqtFlXUiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2SZ%2FPormMnucnmosKtwDceO10sEmPtUQgjUNCHqqmbxPEGuBYHzlKIPvYxTYTs3SkA6rr4itctczIHTlTD6OkwTuQYWCG%2FjQG5zORzvMDDF8s1lUUMwrKDAuCFM26DeNE9AHcptPutWUNL1nJR2t9zzKF5y%2F6H82UgydqxBWYowr0RDvvyCLwjz%2Bij%2BAn5gVGpMB%2BEfnNrPRwIsg7lhBg0HgTREPh8PeCtE9Ba0xMecz4bZHe4IQe%2FnRsIsO8aZdSHGgK9vGex16r5WDOP0eShAMe2SNCNx6WtbD78kqxltkr1eIGPPYF%2B8gnQ7e9UH5qnct%2FeDrndCinUl%2Bzbic466JlOb1I6t8cKo1rSHnXTYxw4cyTd73W8nOG8Vd1ynk8%2BF3PEqflTYduxo9XV7qRH47Rt1Zj6bXC4gVQd4WSwYcLoic6XGM%2BSLrOvxLJmPRX7nRjEZPo91qRkFdX5yr8Aced4R5nwtc%2B6bB92o%2Fxi7czbhvjfTn%2Bx0jgkUm7JjIuyW2PdfiXl8nkDTgSneyNUWpSIeq%2FhuO6Zsz0Hr%2Ftuk8rFeEA0jvV6UBWsGzD10OWuLJJV%2Fts8RdrqtJfMimrvRe3jRXfvn1CZiw5wkAExFN6JcdI0SKmMbYkAbEGdEYKjAPWFfap3Ll7www0oedvQY6pgGSiIGbpYeum%2BczIynVotLa1BUyVGD8Zc%2BIOmxmi38QH5iOjke8d9463XW8LpfXZp5bEZgG6Rq1c%2FQc3j6ocXWbFnpDVa3KFEvq%2FBI4jzReatUVHTcosyLkZDwhZiC6eu4u%2Fc5LRgKuWdxsByPaxOT%2Fq%2Fqi%2F4gM8r8qbgsSAuiaGkx6254bCPTrl95F%2FAtA2ttX2A8sCMScDJhjSue616v%2BCgu%2B%2FPfz&X-Amz-Signature=6f2defe5f65a94464926b4502b5044663b4d30c69861b74b2d4cb6ec14014317&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
