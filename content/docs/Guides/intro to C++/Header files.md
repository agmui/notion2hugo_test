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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P5LR3VZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWzjxSzlNhaHp7CBft6EOQLTSlSqwnkLpKCqU8v%2B0RYwIgDvJZSEvO1Ceessm3zVdw1Pp6VJFHuX6uoUwzQQbBA3QqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaXGJvh1rYFpVJJeyrcA5mR7JJXe3wNh0JzlnuLmTrE%2FDIY9f2%2B32yd40fG20p9iOkaLqnEljN70ddZUd1us9Wcuifs1VEmHxNOmnhNHT994hXxer85iWRFvLG9FNagDu4ee1iS2pyUvjz0TSg8xV5rnEK1ZESno8fcNkOl1iDW454zi7NldnA%2BIz6pu%2Btr%2B2gG4AyOTWFCYuRGwqZypRaRWyWxNqk%2ByP9MCyRUU3rlZ0JYyCzqvceGI3LUR3q1X%2BADFPYvfB8n2znwMMD3AWV6mE04Lkh3CYjK8QwmG8ekotLLjUv8KOQYFYURf72pKRtmKMNnK7ul4L%2Fp3Hw057qKnCW7kk04bXYm74AV0Z9AHAr3y4AJrRBKSCEgQGVbNmy8FuENWPSRg2xv1O3FDXYqedaNkxcHqCqqQZ58yFp4XtZPhBQ7wY1aQVMhBX3ePWvxFIucNaq8uIKfwUYlT55dtjueQZqr%2FvKzJ%2BBId9SG37Br6%2FeJDxsBCaPGG3jnDZqf2Kd1iLEPOwEBGK8fbQE8WrOx2EJxyJs3ckg24HkT4uNsQmb8%2BGv6BaUk3zU3ow06h3KXVhY%2Bzec5Jr6F9NuMf8yvZe1d08LbGhdzPWgilhNixlzj54VpVtFJKvXxEJ20KYu2%2B64Nz7bbMPrX5MQGOqUB2dYrCW8OG0FRjxGKxMpwahVqKw%2BPFQFVsHSj9a7yIhP9TehUcN%2BC6i9uGNrhLXY%2FLmSejSV%2B8pKZFdrdR852JsSm71pbK7jXOb2axUWwot3csSXhBheplx7d64cqTNgN2PCWnFBN9e3ipTuxt6YU%2FWAcNQw9mxFzMUZOX7WRo7NRzoEcfkLoe6OfHf77VrVxOWBv%2BKsGCLjKkNqtJPasbzVkTg4F&X-Amz-Signature=7d6a8e72c60fb921a12b053f369afd406f65998e9fdb043f086e1e859ccfade7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
