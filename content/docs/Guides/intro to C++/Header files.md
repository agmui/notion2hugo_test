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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7Z4ZUP6%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNabO49%2FDiyUd4uiLrqQOH97r3tyX8qgf7EesNZcyzeQIhAMbY32r4MRWIhC%2BuG0K5USP5R8%2FC8j0qloeGpbd18Z%2FxKv8DCE8QABoMNjM3NDIzMTgzODA1IgySwbvXNRBSgTRCicYq3AMTf%2BjiyG8NclBvtBQV3Hs8wcoa2XOf0gw4fKxm%2B%2BtpkwI5FIRA5DY805YgiGek%2BAso1L3OZw4bJyR3B5WMuboFwDtVuViVkewhgvGw9WJw2ALPboIjuH0%2FDNm0xmghmhMIano%2BFjQ1gNzRiiezppomdT5VrsiNpn7yS%2FaClngC9KT%2F0pwLw%2B7kGbevYClrJpGhQrFb7qB1qBJMfhsG5JlJsqed%2FwJk61wsd3NUCZrjoIZT25xzIdvFVdxfaDSHnrcUGVJPLkE%2BTQMbSCCoRLeUiUmvqjxbt%2F%2BOmAyYH3sU3CL7N6NkQD0dQT1u6grHjRXOG7bd%2FADTwLuGxe26WQEgEQVXTosbiGuIiTxtYq%2B0nfP1fZ1bX7J4scFE%2FE5fhoz8OoRPaUUBieeMsrsfG9%2FiqgTlqyg5KjUOzwUHbKh9ojH5IiENdCbHbEIirLMRBK2skyOW538ao11CtP27NRpvsYgcKZbkpfQqs%2FJEh0sD3Gc3w5oMv6P4%2FtnOZe%2BQ%2B7JTs6USsPl5vgl%2FHlosJ66%2BAgLwOL9PUTYshYwy3DPNAYCHkJUNwMiKPBqh6DhEvXDw6dZjCoAnF%2BtuawHemNoXBfcd5SAL%2FelufM5WaC7yWPWl7FfOi4kAK5VjezDQwOK%2BBjqkAUpju5%2BBqnuHQrh%2BMkMBnXD8JO7%2Fd0%2FAVBwh3DKZH5H0Ex2kfhLU%2FsW5D751HwGQjBBP13vgSpP9NWEZgtJ%2BeoLJ5exi0Re%2BCme%2B7T5kQnr2s1hIiglsWFP5zXqWjehGp3quxiJoDANEwWYndQJKHKvIW9l7Z9tMsxaw3c1XzIH1eQuj6RdebhvGhYxMhtausclwMTlS95XF%2Blt5ZzUYAahsKiE4&X-Amz-Signature=e9e208e84cbf525a93a423283668ece9c6343bbb38ec8f990ac3e0da9cd5cbdf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
