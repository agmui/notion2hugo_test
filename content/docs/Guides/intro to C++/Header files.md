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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3AG5FO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGP3AJSmQrVOYkP3%2BnBlFaIj8NNprumtAqMlsWPmxunVAiB0L10EeQ2nx8Sa6gKHMl5ObmxLD3wXjYch9%2F63qITnYyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlfzvYmvHkGtEWns4KtwD%2FLTRpBjLQPPg9PuvOQO6alnBI9%2FfvAwn3f5Qla7VHBPlG%2BROB3a54WWkjnod5h9%2FDz6ZldeM431kn1B2yrWtDXb2yR3u2KNuPPDonyR8b%2B0VumNNAVRdzdRyJqLKRW2FpryPZqS3UVgie6x%2F464q3w9I8d6JFWiQn8Jt3wy6fFu3sDC1Yni7jX5cmIbpJmMOrbhypVu75AbcxkptMMbPBT%2F1lFHghAS8NQJAVSM4KYYOwHd0ngiMs98fd5Xo%2Bsy%2FKDeUwijMlb31u4KdnwK2GkzCMIo0Iyy9Cq0CWCkrODqlc4qAfuAEJroyvQ9AW0RMzG1NaBVJFAJpBxTeOjUTvPiP5VKusIuZFMMO1atq8efEU%2F%2FNjLquZS860i5utuf6BP2CU72eReEMUQ0lROdSZAMLc1R0RRabIe57pO4H9%2BSgTLK%2F2UG%2Bt0qxR1D%2FJVG7mYFx9jx0ZStxsYhNzlkYc7avVYRzEXpg4O%2BwEMCh4mb2G4gkM03wxbzbBzhw98BSJWm9UfLsizO2%2Bv6UtyUYgdoFKhTWe%2Fs0y4D8aoTuNjLhtrAHMG6hzeL%2FWZilVU9xa0QzQZ2p%2B21N6GbG2PRCEKAXoEk9O7BcUKKhziNx7Ik6%2FyazpCq4IXWSng4w0e6YwgY6pgHZPY5mezp9qwJvp3X0z1WqLD0MH2tTCD%2F4rTZ2W9OWKiOWWMWXR7yLDJGp3%2FmN65ZpmjY4OangSGlAou1hAcki82Y19FBoJMGn4TFT7QTbFce%2FSmFYXqHFAyRyhCA6UHx0SairpM9GemPV6VoMUExWckf%2BCYUoD2X8Fj93GXc4OtN7A0qQ%2BVyZxODzoL4UT9qFEYmAua7nYFy2lXN%2B5JT3DCRvyh0A&X-Amz-Signature=f8385156fa8647a25008a8a6a4b40dbf6fe7948cdb5699f8754fb60af30265ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
