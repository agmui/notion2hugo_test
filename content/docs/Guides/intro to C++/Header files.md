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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGJ3ODP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3nKQTCp5dqiEOt2vf2ip7uUC3vO1SH1KmByw1QrF21wIgWPwqX91tsgAOqIbb6YKh4MyVc2TJMvbSGZJB8QUBsxEq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDDKeg3sIeDZIAx1oSrcAwMoUbiH26GTS2YMr3YthiAmo%2BhuD9GZTBrdJzRHkafBcJV9%2BH9RGJsevTPQupMXWkH%2FtbGghXJxUHxoC%2Ff%2B04yjPoxawNMwUKRSSCu2luCTILdTqq90V%2FFk2ANRQBJlNBpQ9Fyuvtxm3jhd1ShSPql6YaUuptwEiiYqDgBbtp%2Few0Fs3v3CqZ%2B7JgGbDW6NqEQFHql6GUDOVx3umBWSCPWZPbMVYvIMCcW71%2BAtX85vg0S8Mo8btx2uyYR0MiBBWkpvaOFsKRLNvat%2BjBft0E6A3dTMtntM5Md1XYADNJCzbsWJVhNiMX8mzxJCtLHcddQB0fMLHQ7BTyBkYluN2nrbOwJ5TROkS9UW4bBriPBHco3pXoucOrbmNT6G5TNj3zr5IgRz%2FMU3GBPSVFPSwz6bXiuRTTsyBLygp6bKUxJE9yGFn43bDlbGLCJVUQgT6lNSEz9sFntsoCdyysCzC3l4U6i17qTF3x0CVwf7gq7q904PMV3oMmqG8Op2QxvBsoYkhr%2BYghE9%2Bw9JeN8EOHLTG%2BEgIWMy1dMzgSv1Vjj2MXxjbsOLtRHu%2FN2QTOr%2BSRD6v7PP5I0JDpnJrJ%2BRkTWdO0VRuge85Ob6KkzFZAhCWbFy9J3xuFy7xvbAMNP378AGOqUBFc%2BrwJBlaz0UBBPZL20oObUSLR4R%2B5520Nz0t6AxUYPrrM7P2ZOpROr4xYH51%2F5GbJvn6VvUtdYCWtGaK%2B88fssEGchf9Vr3H58lLp3vbv582RoPIvJ6sAhS%2FRjJpKCkYtqhmGzHbljFf49lJu%2FNJeG%2BVpyoGWHdTrFKi1B8oBrBoPUloGXEmMbwxlbxtXdzymJMBWzHvL1ncv0DR1bH1iINB8Rw&X-Amz-Signature=786b14b4282d05ed1609b7bb879c95f0538364a982a28bd0ed94549551dae84b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
