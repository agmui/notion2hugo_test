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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JINNNSI%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDG%2F1qPQfezD0fjV6qWGHf73IGeu1rUs7wBviq2Bnp6QIgSa4Z7fSKUGrv7G7lzbKGNXs7u7I1QsCCxP8feNroYUYq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDMhKmT1FYs6Xwr4VOSrcAwrq1CpVbpYgz2idxTJt3%2FBc2QenGb79mZiVPaN%2BBz8gSFBPzxPEfzPd2hniZFS8DmufpvVWz9AvXy8M9QLUAIbJ2IYkLFtE5CGYOuFvt2GN4O8vvtDVvyWyy4%2BFQ6bWeI4b%2Bt%2FgrpOQXZ8xtpiGaDrEHvxLPfJSglkmoXbxlbSsXrfbOMhk0WmJqaYtDb%2F8HhHb72bCW2aCmrSJ7VQr1MtnBoBrNoXnvaaMIRAScs%2BmU4IXMEKKFhY1m1zN6cz0UF27vcrEzMhlA8yBw291MkBQ5apuVNWxyh7NFswWJ4rgrV77xGKCf%2F%2FHA0ODdUULH%2Fw%2FwL0m%2BjMACCQbq0jDE6%2FLNpjMyghcAMpK8exjGxShIInS47NfFqwwSPsbwe6HXZpm7PuZNiRaRjxC5s5P1pxJwpXTmiLUuj79WMjY25wTGH9SumqFW5NiVfjNI0xDbDqxcbbfsAQP0OW4OIsbm2nYmFoXp0BV1oILlqv7YHCDuPnT4y8aUGmLpM1igT4eIlsrfS5kAksA298IZGY0q5oXqm4T%2FJq86gQPJdQfEHTO7ZQ0RBY7fAMorNYgH9l%2BBJRNQ5c%2FTrDpT61LLLmVb88Kek8c5aYH7ot5wWse5jd47SsitoPsHCSZ0cNbMPCW2MEGOqUBxhshgCfs8PHKs6UYe48t3jDqaOS2vA31tM%2FpHVLulBRIJB4ewJTth5B7K4wppIdp0yDonPh6NPro2Q6ALqaMnNrxlR6MdDBZBj8SdlLy1qSU4uRsESjnBwomd9pJ41r0tR34pvZIEcnJK%2BXtu5%2Bi9hlJIwlnJRokiaz%2FYK0mwtiDndlxN5hHp4o%2BC6pshn%2Bkeey%2Bhz5v7pDbzaskha%2BrS0rOT8%2FF&X-Amz-Signature=944f07831a78cc3f835879f4770b93e25e5cef6b358193d5ebd132e48b06b775&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
