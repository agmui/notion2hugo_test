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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNMSOJA4%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIAzdeIE2YMyE2l6g4cLjv7pYwMAc9O4WgHK9vRmvDq2dAiEAoZhUQobAlayAm%2FiPfOOIqQiWAKXQ4HjGkCyU9%2BWcf34qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwgm6EWaAGnQta%2F%2BCrcAy%2FkI8sNpkixxehMRzD6PRwDJNLlOplpqsagyLdESR7XSa%2FBEQSdSz4m7J51BuQU1NeDQmTDN0fy3g3hhpByKQzEx%2BgEKXciZSe%2BKcFJwyZ9dFu5E%2BjU9NuRRzBsz6uKdkfopXccbzbK8wWfVgEzjpjnyQ8JYR3BLd3I7XIQ0%2F8iZgKdQqP%2FkztMe6FPvt2%2FtSnX2lr850oZ9G4m6coKcZhB9t5Nq9Ec0Lxn7kTSEq9PDcIRa%2BfKHXwky8eqP%2FbALBNhYW13RXzxTnov878u8GE6WvQMyEZB56b6S8Ny9jkaY%2BLZVUps%2F2pgo5PQ64d9gkZf4fnwktXdSMUOvaDSomgfRBhoRh4%2FOPQreexxnBdK4rorgH%2FwoqlHODxCLHh%2BWnTxz6%2BBHZ3JGvzYbL44Q%2B3sj7Ipbvry8VOV%2FFwM7yAQBE3hlrIpNegNpqrWFVaLTawTPz1ANQgFlQYrJLPg4g9QH19BoQscQSE2ss5%2BoO9ZkOtdE42VSYwrl5XvdX8ghzxd4tdjuZoKd0AfKgXCrjQ1JiJdVYNbdOIBApug8UlxAES%2BlMNOmxjLgDqnx2twt0UuSit6KvuM7cLlw5WQu8F%2B%2F11Mnm6j56jm0wYDFUpjB1mpQYwtxJejGbT2ML2R57wGOqUB%2B4XkKR8jEQirR%2BITAwLEfGJ7ztwETxL4URrB0pcZyALpJ3%2B56%2BmWzs2oXo3bmGYaxLiex3Y2OfSBUYAsPctra5Eflpx5%2FaK85hKH0i7reuxE7aIDzHRvs%2B78Vk0cqQu9e%2FSSEgTMG9zPqS1AAjuzTTXzxXOWJMh0vbE7ACI%2F6J8NlLYpqHGNPvJhQVk%2FeGp0VulXlaohPiuwqGkiv4tRuIISJfhv&X-Amz-Signature=948bc504e5979061289caee2a0b583899dfdf08684808d4a8455596ba5db908f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
