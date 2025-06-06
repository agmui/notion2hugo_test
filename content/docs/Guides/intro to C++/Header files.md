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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VRUAPTE%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSkcDkZ%2FojofZxMMkTAmT4GxH9pCDqjH%2FU3TTKngqdUAiEA2Q5omLT4vhY9C7MwWzILObEAbEw%2Fzr89Mu7rp%2FmScEIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFv1MRMBqZWPEBnzRSrcA8QzsWY0U3GKQNbHSCgm69uMcrSBqPkzpHjVuGSIv0dpbRB8%2BguppVcjEW4Rfe1Mbh84p%2Bd5v9c0yphKrTfyZw9vjdPS29kdehnte6X9Xs2hiHmz2Ocqjl%2FbQEugrk%2BxX3ZDN7t3QGCe9CEeHN9bRqH0tSydSKUjguN9YlboitMVsHBag%2B3zMqYEIlSagHOeZGxr0%2FMKKBEekCmcGlfD0ZrByrwdJPlYtFHQ2V7U1eN1gWEwOpKUKfm3OOktfIsE6UdnSUvMCwfls9RZSwDYs2sfJB%2F67COhueV469y6XofUhw5LTFIplWngW48gm5PT%2Fo9SZGzoNkiw637aNq9MKB07unWIcEGbHeMXhsSJW8IbhlMatcBCPAM90mZLqmSOv%2FI1NJAKRp%2BLkxNQlLZJMGxjPP9ofMjSuUI3ZNp%2BPI8nZdAFp4GYZ4IS6cEp8Gjhd%2BV48ECZAl7Wgt4V9hobJbAYV4maK00bbHSJzfmDsI9ltwCDKAtzAQ0qCR6YfibBqAZ8r3JG1kVoZcpQyL2WAI0BYd9EnDjRpifPc9kfvvCpX%2BxW6mBbfdBj7gGJC3DUHQ5gOWBUanrsG%2Fg8pmFDc9R9YVajWRZfoT31IbdbMbNZGHpA6h2uwQzO1x5iMKDXjMIGOqUB%2BShqVy03gwnzY8DN51Vs7LbfzdFRnkb%2B3cE7mup8fpnmgfQDdne486see41CKDBGhpNotsY5v8L%2Fnt8SrGG0sD4Rqew74RAn8m2Phy14G3FZbdz6Hb71soXrI92uUT8DFjS%2FhEoe47Z6oXwuPOt3pPs0xktvBaJwchO7CwiV6PFthClpQGxLU8t0KS1rbggF2eRNdEdcv%2BP4FDi5w6Fe4eRokr6b&X-Amz-Signature=d91cca18d83e18096258eb31e4747955eeea85f03984a7ff0938df03e21757bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
