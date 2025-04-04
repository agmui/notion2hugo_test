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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3KM6YOS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC%2F1i9CzWUJv%2BaJ10uLQtlQREli8BziEExkp8YtKQ2iAIgE4jYU0i%2BUhYDGES%2FspZ4GSTuB44tA9LJXuWFtWpVAVYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDG2Y9vVjUzCYoYwBZSrcA2fYiRZHKDph2FoHlqMQ1QOB4r2EieStAgWdNcCx0Jc%2F2XuRiC2oNG9uE6C2gHr7T8BPkPQESczBnxp%2B46%2BDcTnu8qgRtwGPoCYnPRWAAv%2FdM%2FizAQ7zT2RhzVpRzdXBqInGGlO4rw8tgmOv10eywyXi9fHx0FPULQJ5svLXBfe9tL1t8doX5naj8oCCZy%2BocDh0JqHzmJH8rZlxcEb2%2BQ8QDvFk%2FOVOY%2B7AO9O63CcV6aVMTfnpv6i%2FwYOC954HAxEioYQ1LugqRqWGhCNZnAPiiPt9ocxlJgK2eq%2BzPUNLTeJoAkhnyzwM6xwWLOxz7JMh7pWgVSV07erMxJraF6vDt6o0u8VEWfg4W2XT5aQ0ge3O0tFGqdjf2m7U66NNGuWIaYzjNFnyVGUdKsjdk2q6NKEj1ynd889Vjsc9MXpNlblXEQMDTdOGR8nZz6mc27I6rDCppO7pd%2BUF3yAGsJEQyRx1kmHwio11F4A7hRjvpEeNo%2Bk8esTIfa9BwoMgvPgSzA6JhGscsvwOZnnkwb9Xasy7yEtZYHYwJ3cYmXH09KyqBGf%2B68zrAtNewsSJZtOYjo7pN2H4byc67jJR%2BxE%2FS6ohkUxLxPOXhRtSBQR0r8YuaE7Gzp3iZN5QMLWcwL8GOqUB4y9EGce2bvx8uAU%2Bp%2BQ%2B0UmcoI9ED4%2FrdlTM90%2FgfhwEQYgsvId6NvI0rq4m7gXGb6xv3jmRnnWAAJeeNmYG3Y7p109J9hWyYBPlpwmm4z0wuN7NbagfUkCoc7JgsZAveogACKUacoGDRPt8V0puBUx%2FzylesH5E1w%2BOBHMHWMm1QB640nraiz1aoCt8t8GrchEwRpHMUK88p6vi6Yv5eLh39Fhb&X-Amz-Signature=cabfeec3f3e6668d3d77c7dd55d3e1fa6533d8e6a61d5f99a8696e54b68c2ed7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
