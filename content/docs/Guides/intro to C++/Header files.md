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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SAK4WUJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCFS3U7EVkTjVuOS8HoJQ6bvO4lzLIHOyLGGHfkrsN%2F%2FQIgXCCNzWE75enVC%2FC8GwSkZctItGp6TyPKI6WL5LSc0tAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDArPo0WDsyhXkVfvzSrcA8A0fK3LDySHsLkTV%2FFgvFc%2BFmK81bZzcahxp%2BCXsoQ%2BsJpedOXPkAn0X1PFffzdXYpnjtOfO0GfupOuFi0qYiatipbfKHENJ7vd4tcrM8M%2FLhlEhYBJVZe%2FW9GIw7wmDZjL8QVs%2B63huOYwtQTrC82WT6bJgJ5B97SmfsmbRnIP67TGyPyosDOdpF5Q1dIl4U3YFgbcVRcUvWhb3b6hg1nCLzNpzJeXsK3yv1z8NXD5ye5sgCIF8K8kKc9L%2BC2D%2FK36thxoibF4slqZVU1WMu0xqZ2h2lFbXuqm7JALIifI%2B4UXI%2B5EbzuT80ZqNX4gU6DYqbVxcWTW9F6WaKLtlB1CoQglwM3EMInnz%2F1EHQKXYoB8Q768KX%2F6bSuMbSsSxV9XbrZ2GGmPk1Mh%2BX0pSvDxugGzr5TUVVHvs2ZODiQCeWskYgkajt5sNXQPHBcAbIR3O6cXj4Nh4HwhXKuhIGHTSDVMC8P0l64wDkN2p%2FHlCfzACJLU0nZUp1jUD%2FkYtQVfh8exI7VnYJ1fYR36jQR6iNpozNh1%2BQlEiWptrIozENjTAoSrgxu8IYoHB%2F9eRH8sDVKTZBeQVIexs9SZvRblbn7ZRKN9C8hieADt%2FEBgc89Ve2%2BA5zKCVylwMNrMgb4GOqUBbNJzjLbN5zGnosdEmdHP0cB8ePuTaPpq8C9L%2F98ctMv6FPrxIP%2FdjXp0iM5gshoreDJzkMJ%2F5X0roRBxCEittVs9o6SmCCiiTne6QK0Xf7Nrmq4z%2FVk9ITj9Waaj3RTmjSoSnNjJyDM6B0Xtie%2B94daQ39B5W00tJnTveFiU0l5UCVto8PSnwbK1PDT69p4TfS9H%2BslvO8F15KRYxMDyo4kKwaQO&X-Amz-Signature=8e9cf46e1dc26ac9b24de3ea001435e7cd3924a1650171e6911934d3f733f29b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
