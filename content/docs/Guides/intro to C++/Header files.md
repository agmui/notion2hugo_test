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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4RENSN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJBqgpKxdeqhTyR1KdPorTO%2BlEyI9HvmerHV%2Bo%2F87JCAiEAnitryr9R%2FiqT9T4mBtEHSMgbpVTMO3lFJMOvNGG6FDgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDnFgy7NaD8GVmjrdyrcA9BBa8q41S5ffe%2By66x5EPtC7OQiNN1zkw0TVgAZgEoVn8%2BjOxb9Wt7xk0ydjOG3oCOrqz5lQc8BLm1BqSZNJL1cOSBgV6gOL3E6aF4J9HWniUPg26Hri3jv9Z5jhIKJnkDky%2BOy94AzzqY1bhDQavX7dU68WN89X9MFYxP9Qd%2BhKAjh90kSL768%2B7LSR%2FvuCt6TK4pw%2BTgog%2F33t7Q8vSbm%2FF45fwYbavlTMtJPhOBhokAZl%2By%2B8Bv3cklQItr31umzw1oSX1bUYbQ9HO%2BMW3Fr%2FteOfwPut1WoNeye0ttjWNJKDiW8bxHOu5tOXb08uANZz%2FGUlG6cLsGUeWcUv29F%2FVRVxQDbeoS0keisyA8LF1f%2Bn8lBqyF7alH%2BXGDdknxeb7nDxLxsYxm%2FR0XJU60UtS7LgiuIlv2IfT2HdvkWfoCr7nybzt2EiDc0ARlrGyJnjVE2M2V31n1aFjWVUprQ3vaGm7GDMo7xqJD9600kcnrmrioHPIZ2gzRVi6m%2BXEVWeUNnNAx4tAQCtBbnRXx%2BYdL52g41ULnrw60ZD%2FHIEjQ4C1hRVkDfYZVAF1iYdCJqRMhGdTZoq9FT%2BInNzjJJUVqrQ5E5CyP5ZnphEbxDl9SDXLvXYsfWLTGIMPvB8MAGOqUBhJPdimk3JLR3Fv%2BGZqijgo1ucOCYsS68ESMFEG7o9DR9eHGxHybk1bGXmjNTS6eijU%2FJmnumKsgP2ethIRhOcGsR1kpo6LzxjPBcOP84pwgyJSydMSuEpOp17QsXSh6iu%2F5mLJIky0MQYmmzf9bZjvQyJVrhKKkTtIrGUUvDc1TrkRGDU5j7SkJLXX5yRvAqccvb5UZE5i3DwBi9cMDvSkmzO8v0&X-Amz-Signature=6934aee36dff64c93c3c41b67d348a7f49be5f4e3e4d256161935f4004d06703&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
