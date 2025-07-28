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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD3OQFRA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCW4EPUE3l1fOJrBTfNkZAYbOX9M1H9t%2FPJ9SZiIftdwQIgMJsP3GPa71yNmkQfSntHTkLnsBXHJZ2fYCbUv3wOUIIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3LBZRcOYvnEIcahyrcA%2BaUPFW0BK3pdv5iwoY8Bx1cdvCWUcaL8qZiRssrRorvLqVhLjDrxkk9439dcNxupyyXbrMthaGIg%2F%2FR6HbuGXyhz4qiRaoxPjF7CJ5zL%2FYxIng7Cp9vk1fZ%2B6hhrCladBOCUgnYfNncOxSMDkGCd33QIEIYGhWCy2euSfafITl9Sh8CPt9YjiTcdu3lVz1vL7OEe2jaFStT36cD%2FcDRL7LTdvnQECf%2Bv%2BqdfJ8mdCDzPUx9n7PnJyx94JNrw8EyFaE1jHNWZFPbLGM5N4k6Du8JALyR69SVLqRVonXhQ7OCmejsQ4lUShbhtpckdrO9spzZ7%2FaERTjwtLdZB4EtZUuCXGZKJRNnD4yWQ94%2BINtdJ44u9MvbKiUwLH1fBAf1YcAJKVfZvet%2FEELyuq7rFUoEnvk0DSzQWbcywj0OZPoVkntLrgh8a7tHCb3%2BVAakXYwz%2Bp7HsKHl949EN7uziztQPkTFyJWmpt8QQjl1PfPsoyAjjLiN6KvQTn2kfkUWdfP1kKXIiozVegur9H0LsHqPlhDih27qoMbnexEn4%2FBdcNH4pvasw4oO9CdHSjdIg1IuXAKnkarumtVfYK12Erak0uRirJWKgNzHMqyzI54y8K%2BV290kZ2hIC%2BCRMIPvmsQGOqUBlUSrU9bbRkOayFgiRP77p8%2BoScqZSPyK%2B4L1lqyduFtNi3Nv42JPkalQc%2BasxjHxPgN3KKubxAkEQD%2FIrngiCkhdseKgXTdceW5%2FE%2FavGCuExtb10IMgpQgFu58GKoSUg1ftKE35o27BjU6rEqMe%2FSQzmojsNRJ1PTxE6eJmDDH%2BSLjJrrSBkt9LWRhFxOnegGChWZ5A9zBWl2BumR4AQDQuJyt9&X-Amz-Signature=ca1d55836bcf11f542c9676b03c1e1d6a0f9324e73c68cf98277a14c4d6dd30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
