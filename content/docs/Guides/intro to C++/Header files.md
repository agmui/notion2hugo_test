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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ML55Y2A%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkIYc%2B%2FVSxsgUztH0mN4mfxjQs0c%2BF24Reo%2FW3uVd11wIgbofWvk90Mxr%2FtlCMotfR4lcsg%2FlNMeBdmNKKXSd2%2BKQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZjLmTrWN0h4Ar48yrcAwwPKz83J8NWKfi6o3o969zQKY0F0rMRwI5RiyJOMt4pXZT7DE1RFKp%2FM3XLFt34DDLmdSdrbd%2F4dalqlacUyZBP0CR37UGL4AuWAwoq3HFm1NzDtXId62O0twM5s%2FdDU03C%2FcyATH1PczF9O%2BNQ76f8cZCG2u6Yx1rBTJ7KM21M3%2BWht6kM674foNmFa1AbaSjGGScadcBwWCiO8k0UjnB7cEi%2FwCweag9DTnqAjhIq4I4ifpbuzKsDmlSeXajyY64QMBJ0kojVuIx0cW6xZCbRUXDaUUjclfzDJuIkYVAPrNvvXdJt8h3zcCrSZoKB%2B7qu6m0gP%2FVisnJa9wuxJfk2cVIsakfAblHtmlmdRbAZXPr0hxuVYOTnb%2B6878WRT0FFEbytLKqtBFBEhhX0tGWjs8Ob2pkTe7YLYJBsW3KzsmZExfkKdKuQ0OdzctTSKcOrdgBWEe3gUbW2BzOkqbPJlMPasXnz%2BxmiiPLyfRg%2BbR4Ep3AfHc6gZR8Xckqbwryujp6%2FleW8NREBd2mwo0KZTlrqMzvQuamb1Z5oAJ6qnggM7iEQwlc4scQogzwvHH3G12zV8rDvDJzpqyl5TEdy7xk5Bo%2BA%2Bg7n1bec4mRdp93fhQxZFMKm4j48MOTzysIGOqUBO49w8A3XwoKyF1J8L7EwrmbA4UeQ7CGqZUjHF2cieW5v2Moi%2BHjRWU1dmW%2FnKy9Kd97DVXkPpddHhyc1bFmjJXRm06JKNC84bsa66n%2Fyo%2FGbLns7xSA9Eorqv%2FZwHvC1gX7hQjwP5fBnQ9QE2AscLceIk%2BaRAsGp2UKitiLzzO1PYRTGmlUNL4oEmk7c8kHk%2F4LuKL8PT1RO0tc%2Fb2OonBFktpLx&X-Amz-Signature=ff587453c1056c3b1d27bd99c6b822896ae611c7bc0309091abf8b13c971752f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
