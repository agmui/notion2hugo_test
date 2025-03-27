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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISVKADH%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfdMzdL6OEZV3wOqcDJhGv%2Flk4AeAqsaBxdjI4d89EYgIhAIhFncr0Bw6Uf0ZHygPA0WOzD1EQ0l3WYGFKme51z2DuKv8DCEkQABoMNjM3NDIzMTgzODA1IgygWptt8vCYrFBIESYq3ANpql0SLCD17mSPq1zqGZla%2BHk%2B9grgiMWYN6MwbHF8uI2PUGXNfpKLRAfWT%2F5X2i49iTaDLrW1gPnrYjJE4IEootqKbJccSiw%2FFIOlStV9VxhiDq1rM1lPxVBVWuRt9Qfxt1Fmk9o8ci8tAk7bef9NN1HgmYRKnBouc8ciICRPXsVF%2B%2FYltlLnjPsY7gxrDPelB4PSPQeIDGhCEeGfdX2kzyTwnWXLgam3Qq7NRPTdz1n%2FqIxXO8ZI1sltaCa1PqlS7rp6tWr7w3WVmnpDcPdvk8xZn4W9OxJ8D098QnAZ9OtI8qwXlb18PwJS3kGgZYpRyHJzC2jb75xiHAjhdrcJWmTqd86Y6S2mwh4hp%2F1J6BCmwfpNQTErbZRwythC1G%2F7E8F7yU%2FJW4e%2FsNs7KDrwTBoKmWZA208jbSLM%2FGuOdQ6yfDVkRLDkLd%2BmNJwY%2FL43YVbZfSQlBicQCQPe0qefDFd%2FLymhJ0xsjk6AyIr8tO2GwinCAjapSB9gxXF7QpLnM23HwxC%2Fk%2Fu3eM9KHKSSX1yOMKrEVzMV7OMcW2V3H%2B6IdA0sFQ14J7tbfGjxdiGoELCz3K5%2FVUCXgbRpRiOh99sq%2BoqgJ7aynW6CiLYljvt76mYyZs8KBpy3hjDQ6pW%2FBjqkASNM%2F%2F80gUKrHeCLBr7vPGIgmK8OjDyZl0UDbP8luOduDVJAf00VJEsDVS4kDYaVBLKkfZWs4srJPZ6dxCN28wqpjRRO0vzmcsQJtsuJq%2FwYvIEgZvpmdxTlLb%2BFmXANdI0wdwGuxNrO%2F33PPf5MQtfajdw8xnssaJ%2B7GBFYBTfoIiflv3%2BvlUzlGYzcUe02y%2F3qFoms8SwPs%2F1iHnFvq4X0Hdqt&X-Amz-Signature=d6118111e7278c7408c974bd2d9b5b816f500363da0433824f315cbdca116655&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
