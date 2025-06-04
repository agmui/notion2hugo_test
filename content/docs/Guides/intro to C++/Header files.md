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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CVZCRYJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCDWxts%2FcNBcnAbUoM6OglrCLIAS3vQVB5yPKe88XPqpwIgdieyENLDt0n0xa3qPfKvTPnIZ30zeXKQ50KPwsEJMcIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBgVh0w8smu28YFGvyrcA7Fm9Pm22t3FOKQBJDxdeiwPLBuENcuDguxIR7czHlUFM9ImrI2BlNBYuNIp89JjJUMlYcv2%2FMvDnhRGnEJe0usRYDNlqlT4jd7ghpmq9syeWYUNTFoE6fd1OadFrpT9Z4o9PwNPjwc1D%2Fv%2Fljk1Z2Le4LMypYOvfuvx4ailwICEjQ1iKjbxh5xeqe0cLUBT2MWm6a96Gqi%2Bx7nQHp0LwTciE4OLh%2FQECHbRYXVUsl0evdUq5lnA0C%2FmsqHQ9eW10%2FX5UGdmbACSABK1FOHpgVFwCSGA68whMFSJERrflQBtNe66M6jbYmRrOG%2FKtDpJIl0WVAT0lFrsAupVtLvi1ldE%2BDbTinE01yZjZ2Euj4hEtXIvi%2B%2F980jt0wFyK1LKmYiZRTjmIngkUWtVn75EgucY0eMlD2V8OhzlyQoNkmE4E323s%2F83FH2u2m1dh71oj%2BFQn64P9Xj72XTMGyRAifPMAczqSpAsiabNQQYtNGoMXZFyFtpxjJDgStqlFtCEz%2BhbfS1V2hGTXezSLSLx0Ud5zg6%2Fvb%2BGQcPSWCAvBt3Jbk6V7KQJxnJURu%2BDMduSK2tyKMjHmG7GPEzA0Nwu%2Bb%2B8x7dG9MiqNW78%2BBN8aB2olX9fI2wOQJ50WwfxMOOtgsIGOqUBYr9OarEjDHCGtim8d7dcr1tFyv1bJZtNb56lkmWe2qs3lciXI%2Bg%2FbPqoM1DYDC%2F5oyN5%2BefC%2FE9RwvZZJn7azoN1J5TbifvyJfhIXrjBCFYQ5ivhb7%2BuFsoXF3RWeMwqEL5Kmzzep6VU5DSpwhQmBIuIHpiuwz9oACc6Uh5ZKauIhJAQ5n6E4aVBQvTkzGJ3EBCmxH4c9vSQlbcI8Ar63b%2B0BzeI&X-Amz-Signature=f2e8c9b46ce04d6f3dd269299be317c1032c1a8b27fd7d057f81bb7f6969031f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
