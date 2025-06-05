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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PYBFE5%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICEM%2B1jb0CTaDYikl%2FVk7PKGKR28I6EABEzm7QL1DVeOAiEAlw5OeqdC5OzVUZP6yGxQoaQ%2BhpZoiPaUdsNGcBHjMU4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPqSu0h2TBBUsnI%2BxyrcA1PXhnXcQBQx6H0oLW8v7WqFQx0%2FTgRFiEl4dD9aeB3QcFOWoewwwLDhS15QAh8Z%2BcyqXEVu4kKcHcXAXyKFSF8uhTeSqR8dmOzwMixVWpzEkio7c0XMN1fEIiavbNks5xpE4ADsEE6Ec6bhKV24UqRFhI0XbIfaBOMj4I%2BJu86Z%2BSMCHmSRqyQuFMdclvV9HwZ2N0ZfcaFqWEQj71y3gqTk%2FWKhDHpdr7SCQx7%2BPq8Q6FiM92ULQ6Fb3VVdKCfriXbEaLzR60vJxFvsn8IowkUCwIodZIA7sKvmr45MNG4UwlKcAHTes9DXZz1nEKbdS4txYkxmBuYPn5YZFtunxFv43nR9NfEPNOFMCUpB63EO9U9zlVsyaunU6%2B41O4dNuB6epXStgK4zz4sqRup6MJldwIMwAaUeB2UQzZ4%2FYyuwuYho3ZGZp1tm99DFukSickdi3K8AtonxzKQoBKRHC0F2EVn461lXEX5Zy5kjyyPvnHjr5bkVdTAwchh39le843VvKD8%2BvDos7Xvu%2B338y6I9nMBORYUjlOUyB1Q6XNC8erMirIxbCi6x%2FgFqlqQmr6bjZS5lNhQOA9sc6uigLZWxW2Ou%2BoC%2B7AzO3VFJ4HO6Q1ntwOHrrMbTs7qfMP6oh8IGOqUB6MMaqooWoNQP4boJqgpQGNz0ykdIGNzugl%2B7GEuVwCBgLj3exYXfWehARWatVCnlHeQ%2Fes3ceOYKcL8jNwQ3T82CQ7BQYIPkgKPIh7YpxOyY8LKoj11AlBlBk5SOziekHQSu5JdahZqxHs6qQH5WfSfmRhdLwLPaejD4WPeBNQBnkX5l62CgdM9H7RlKeB0kirHO3ebehBCUsJGc%2FZM4s1t4GMP5&X-Amz-Signature=5de83807a2dd440684aea75096684cb853007357e9d0101a285536fbe816b07f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
