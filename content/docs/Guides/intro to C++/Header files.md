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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWOJDTN%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIH7F40144ATLJvLAavCbJW4eMcDUeMGBSgUdDtVJopAmAiA5nICpOyrSDQ0iUi51i7eyO4fhBVrloKYgHY3H%2B3zRsiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKG8UqU5iTsdIBAJyKtwDqCcfmCWxLpKiVzxmdirJdx3jft0SA2vcS0YxyYOdMZvcxMPfGfMHaEN8sBXOSEsbPWDDgSrcrbkrfcT2TImXlmcYGO86t5UOslXwWYx3qt1p3ixLbZCtOaqbsdeGxO%2F0NPkbvUtpwnVWAXZSnVrFPjVxva0rulq5zkJZhHUH3IjS%2Faq%2BNEh8KcRBAPwzPGo3QlBuOOH54bU6evpi%2FZs3mjkuhV3VQJHCKYbgIApxZoSmJACbg3p%2BmenPRVq5OzbFLz%2FynRLKak9SJA6hcLcAU4%2Fr5HLUVo3cbWoICtDnlbOqXU0EdC0M5vP0IcuR8Q4rgoCSaBHb1GwBnP3yBYm9iDAZ8OEa4XbcAb031YZm%2FxH6vk6pJZ4ftP3g5Kexdpr%2F42NnNvdJThlbWyG8%2FzkDJ597GaT7JtUvW99LmpIfJYFeXRzDjwXDRL2ogdr1rLIsiPeCHPIgDzXbrZCKgoSD9OnJAj%2FkgwR9l0EhEX7Or%2F8JqMdhb0UoyTZsRvJfRg7yrqKbrLfGaZOo41of5m%2FCsYcpfgn4rZ3j7s1WxeF%2B%2BB75EKdnVrJOlKaAQeR7syX4y4ct9JrYSY5AgMwkjF1hkEGJdCEeK%2BjHKYGt8RAUV6j3vPHpdbXInFNetl4w%2BIbWwAY6pgEOszU1iEA3h7w0j059aNkrJxFzZ2WaBfWJ6df7s1BGDFlzfFn5imC5ZaJRVGQAopmBUMRevJzSEjIkhfiDUDERgdzVzsZEebygW9xkBZq3dnLxE%2F2vJT0RnY3SqPIYsR1bah1TTkkLe5Wg5et3IocNLPjYT%2BPW5JYtGDSwom8BVEyQOj%2BGmH3Z0Io0oRoAGjB1GRCZ4AVTWdR3j%2B%2BrISLSu6PzEIYF&X-Amz-Signature=391101241cd5a830a3978dae8466d42fb51f51025e2271d723ba9e8bda3a76c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
