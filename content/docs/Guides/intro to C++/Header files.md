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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXFPYZO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBpHNy2WDBc13qwXdQvpkseakDQ%2FN0EKyh7ftDMoyUXwIgHhik5G5t0%2BJFVt6IvtYOne%2Fwhwhuw7fkBN7hevSqGAAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4xOLlw7M00Rtl8lyrcAzklTUR53KJzWVw1ZOZPi8G7maJk%2BkVdsDXleYoRRn5SJ%2BgxWrgCEVb4ycwCxNG%2BUwrhGBsUOmIK7UFtxIhbiFkwZ%2B8AyFlFeDGpVXPNcyvOhYKjzJGirhBP030JYEMKX7mijKw%2B6%2B1w3ZLVv145ihIciUmVPAsRML6AoFHeWuCPvaQqUbkzoAs4805jQlViOagxrXNA6Lq9mYkHlquJ9blWLBcs1NRjiJ1Gtmj6wTMZ%2B9zQkQ7xFNo4YPEqLcjPlFGoQnUQdkKf7dytPkB7I5cDhPz5dC49qLvCj0Oc5lcU%2FMx0SUU3HON5yuZv4J3btYe%2B%2F%2B9%2FnB2Nw0Vib%2B8jEWEKcqRHPQuRf%2BERQEpyL2dSCpguWiAu0OY7e7MHDgyL2AEvCgpiywJfspJ7UIgrtrPZw%2FXksYPS%2FnoNyDGW3GwTMS5uVcm4L4jlaUZmJ%2BhnRnyuv8ISrlCA98pK8yIq0c9%2Br7dmWVuk6cyVcbDr%2F26J1%2BdZ9sgxs271WtBjLAlxc4TyFzbOdmrUAEoz%2Fm%2F7qhQiCb%2BdRHDIB%2FbL%2BH%2FajqYptHsqM93dMQT7w9yB2wdPSOJkGKZnDAsezeZB%2BtG%2F3d2tnkhcN0gev2DQuXijSn84IrtoF8K8zGG9mKb1MP6R3L0GOqUBMABokmPMszGmu8TurGmUuzPKfP3pE5VmZeOxryz4L%2FUa%2FX62RcZspItNCVN1EF5qnExaNsUYq6BjCiOBJ3pXxaqD%2FujrmVgIjbBUmrhzHlusArEMAPeqAMnKP8z7RqheDM9dBxXMTwslHSDknvZH8VovB%2BuH%2Bc0qECAXD3W7UaAJA8AiH15M8w8mwW%2FRqDlSxzb1kMxUDs27rBOWsGKrIY0PgsEr&X-Amz-Signature=9ba3936cd4b86745bfe7a4344269482fba4760f0ea2403f9a3afbde5ea4c582e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
