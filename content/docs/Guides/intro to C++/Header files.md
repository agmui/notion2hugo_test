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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QERYULZE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FCoAALxbTH%2F0Jm6Xa3Ro29uPjUvX%2FWEaWSxEKHtYKMAiEA7IiD%2BaGxJ77ftC6uM%2B3MXa1tX9co0c86ViXC%2FgmpWYYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX%2FgfSL%2FeQ273KA1SrcA17NjXfsYJ%2Fkd2Cpw1qs83ehxyuok1vjpPUcQ8vBLYgFUeoVZmsXE7y4z5N5MaGLYyLJt%2FHzjyStJWrkrS26OhmwJFbFAvlHzEueDisQHK0rzStyaBKTAKgxlFYw%2B8iEJht9HCq31SFbgB2z6QJnydEby9rrfyGj3sJaxvrT0TNxK1ky6xwPmZZUF8R5sScrM93JVx4hJckz3uFKKS%2Bd6FVpvaU6UQweBSw3BqOZX%2BQA36qx9fcu0VuRUoVElu4WAr9RPtebDsbSpbXrOk5nnbs1NZLmPkEXFNS%2FuZI%2F5k28Zu5L1a2or6mREPTg0Ka9BWu8CnuetpcGmYTBs2ggy99%2FH5Kh4hX7bp7kGlHW45izPH7AWknL%2FfPk5ZWlfSHUOiVaws2gOH6udMReSbeUlbNctC4Oa4lbMDsGy3lPU6ienq1Rey0MH4pani5Xpp%2BCbaL%2FZzruWtey1IOvG7X9bQhx7nOk7u6S8S5PIR9sg51E5HX1XLpgGQvGnK8ObfbBnp%2FJRajbghjr8ocZbcYYocNwGkNGcIJqPDO3oJ1GXJep1PAXZ1PSxwfxpbGZZ3ifTR%2BJg5xMQNB9NRVcjJeeYSvY1UXp%2FDZhrcvcuGDlek8aWe%2Byw1UR%2BWV%2FL7%2BhMLvHyr4GOqUB5LZD7XTODeyFAYEQJHu9m09cpRVkF59W9vnmpdsYJLQNOLCNhkPrtsFloE0DfuSo8x95GoHNyAnvPA%2FlHeVPjG%2F6lXPTfsQ24S6ZNdn2%2BMiDv0gWUbzIzesmGFkrMksJkPkXzA5fdiiNAUYtWFUNZQO6JUc6%2BmeyJvzsoBBzKgdSB6xf9%2BmQh2sjJi1vawe6bGz2XeJ00gfEDypty0WbNlUMekOs&X-Amz-Signature=786eea2749de41615b0c142a457656ae198d51b12994ac9a392dae4d9da049ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
