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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAZINASK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDW4PuDAc5RuwvcCz1jWxKA0BLOgpKKH%2BkTlKi6RzFHjQIhAI%2FQ3wFFaa5qt3FqA0QM4v5Sx0NcbpQc5oYLaBtr5n9hKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYjNGIW5xKA7yTeJoq3AMY4SkiXa0K4HrOO%2F9OZIa3ugLG163Okw%2Fwzama3I65bmzxb35%2BBEtXebmckVh9OJ2CNWE%2ByzWEvDShFzMOUw%2BezRjzjGjWyJH9XMHvzX2ZeOttGRRjupr2cpfhjIBqOMAA57guK9sdlDruUQc5EE%2FPY1%2FMGiWR6Ff0gTSjnGbPvjAWwSSfD%2FUavkyBgIUIuvj6q2Ec8QU0k3Px5tOMMmsID6Yth0ZGwRzmQhG9lxI%2F6gd1GKFZ8frNiiWLwy4YNxbljNSfc57bRounS5DOkUibe9XB2YJTd6xoNppiYMN7Jhl0hLbkN4Wo5juzHIeKk3PGyFOzWOpkEMgE0cNniCjCT2S6n0ROIEUaA8%2F%2BE%2BGGYzuLkbjys%2BCoqqhe1n%2FC%2F%2FIDj8ShqImARhLgbuxmokCfziieyQ1s2635pGEP06hWcuvVQSwcgI%2BVsoM8Zc3up%2B8FoUJErihdYoqI15NomnKE8M3V%2B8r%2F2IkCkLNZ6T3QEbgzgDNlfX9PQdQI4rIoQ8V4dw864P5MT3Q02T6hZUst6kIqaQ0q1THZc26x8%2BosYoHE3xHOW%2F7oiKQGA7zyzM1VKqipST8m%2FQg9XCL2X3DD91yTJalf8ojCuQuvTe6kXza7VEOlGCsI4C7zZTCV%2B53EBjqkARFsYMNQ568Of0ldL8D3jamtlAZU5Xu3BL3Y6KQqGZJhaw8r%2Fjj9VX%2FNXdijB%2FaFKZUYh8zEg9O5PstZcm0bE0qtqkawznD5JFtvOjo2F4NdW62cNgM%2FKRg5SAhG31iieCkT3v4e6JYUMZRab5xlhRb8OiSQouyXauyHmcYhZlQVK3YxlJKTPAT33UIaV%2BJ3lbYK09TEzkjcQYueMz626u8h4Igt&X-Amz-Signature=59d62368352d976efebfb3649ffd88035557de158dbedea918a62884011f2744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
