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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDUSHHGH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDV3mylbAaORm3Lu6OM2TYhEWvyDAdqNl6S06R4lNzwbQIgMn9NVlsfl9jwXgYnTC4YYrYA5uEvCcZQMpVjEWZtt3cqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANnUHSHa2wrbPZEZCrcA0Ua7WmEm1H4IZD1Qn0RPedG3S%2B9BFe%2BENj95US9mHk8Nv8cWxDPbVkFnEyIJySIHecrpJApF7BJ97XE6LtH8MTpaRGf%2Fr4TbHPUKZ4VTWbeb9WlnbEINmLsW2L5PL3%2Ft0lOzILzE%2FNRaKHZ9fXupqnJCLfi%2F%2FSGt4bYNQeLXjb5D5g7MAlq%2F7kjBEfn%2F8G4fqqJW%2BxzLFTV20j4cOx%2BnOPb%2BvWbpi1oQaJ8pzvEgX7bJwGMLALMcjZXzehlR7FA3QxkqlWMO1VvXF3CxvksPiCtJJWJ9pOyPOSnjmjnXo35aXamZ2K1VQXtW%2FjHU1kBPhW3WgrURitNP328ARa1buYLEtrVspey3He7xedV1ptUwwwW09slFelOhz%2BRCXAC7MGzaAbNkcOwm4hXcCAG7mEXEpjgpgKFnkZZiG5FmwSOGqcxCelqGW4S7aFA10YugzN4vzwzghwUszNIT7geDY4f6qnQAha6qDZfJkxznsOgb9pesznHMHxho5dYXW72geJOutVJnFUShxOsEIW123iYCrku8osdfFg9cHAGoXhP5WUlZlzcnBgeZ5gx8CRRJN16onQnugKzfcPjiEAryfphp%2B2aQwk9RCYKvd%2FEHz54ebjE0Or86JbaqYB6MNat1cQGOqUB%2BqwxhZ7AczKMb3b5mRn14%2FObn%2B1MfLYTTqj52iIYQtyhYrpehmznz0FXmk%2FOJhHjJoQHTDZ8pPlFKl1e2WrBfanFjX4Pm%2B4K%2BP2i4XzkVjLcLWIPj15mHfG%2F7ON4t7W1XSVjoXDN7H0pq%2F3%2Bf242XqUJ9%2BF%2BcwhlTowTi0wgO9VJZtrK7NpuuHx13lQEaMkqqdYtBdB9mFssUHulW5HUuIiH4a%2FH&X-Amz-Signature=948da2120a8d67eb8fddb99448f6aa13ffabd1fa7f2eb58dc9e5cd14c47b035e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
