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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GBZE3PH%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIB92ocvUM06O7j10YDJMR4xYpNtBG5OL7w3ot1tj8WqlAiBBUZr%2FFmHxNc2SeDPDMdo0QCi3w75zwcFLaGFA4PNpkiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvRh5MRvKYQSegIJPKtwDAGRTE%2Fy4wRVrxXi6uBW%2BXw8MIv4hh7UnqqgTN76QG3FnbKO6tAsqg%2BYcv%2B4CaqJSzJW%2B%2FR5nRtSAoKnQq%2FBS2zY8s59hc8Vux6jujQfOP0xvmcQXWSJMs0y%2F5pHICYc2xfV1E0S%2B8mJeBXNrE%2BtdyTgMiRAjXUF9ct6W3E4mefb7tPC%2B9w6ChkVdc9RFNEAU0RgHu9d94d2arDk485RPTdWXhkN3E2NO6xZNVLSeCLALS2QJiC4jM5C0m6kG9AfQHXtgnXXJ1f9v1L93m5do6dE6rCqdHYMR58S0tZhq9IUz2qSgBR4z19e0nujFIpRlHouYdXPs8yBayJicx8aablwoxvMkxaFBTbUOzispi0us9SS3h7zbiHjYNrJApBnCwBuQwW4ox80%2FFLF25lB2kgn1WaroU4vikQoJhXbfG8k7ohnJiyzxvm1M3chqMFV6lPQG0CZN7MZffHya3rIRoEu8e4hVJg8IKjSuxhgRaoxoDLAFQYvZqOyJa0COtFf1JjgXmZQMm0rUsiBDuGDmMe8UefOB8%2FOw3QQnyRHV1PCwIqJnlSDr4sWXX4%2FYepQNz8I7JaeHbFqKBBHlf%2FfJKtd3KQT232sytgTJDkeZfZ05Rxs%2BdoLV7p%2BZl30w%2FI%2BswgY6pgGemHWNzUHATiViPzx4A9PhU2UgMn7GiCke8EKqgrIu%2BAaF5vWIqQj6whFmP9CYqPEf1pn7Q9ZUpR3L0WuwogT7kLWu4AJ2H2vNYHKcBBSqD5KDwNiV0l7cq8r%2BVk0s%2FxAqyMvaYOZ6LwJw6H93DCNb2ZOAJioE4a06sfpD3xb5%2BStTc6cU3hPh8Ra%2BIgYXi0ikuqExEsKEyIn2kuFjnNVT7b0pMCL%2B&X-Amz-Signature=8a9e5710e9f9d92249a1656078312964cf70fbfc79d3ed3f05b5d694ad1bb70e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
