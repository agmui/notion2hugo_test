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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNTRZTZF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIqAgzfaxS8MMInKlbFBWt%2BLOsnNb0tHQBlxZ0WrVeTAiEAiPhW61SL4LqLW59JmBaqjRZmAweRUtUFdDHVIAggonsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKznhm%2FSl34QYtNO%2BircA6uflbGpoyjqBgRrJfUpW5grDvI3JeJIyIBHhKObwWaOJMhgZyRPwhPlPmIMnriSxF90%2FhPvd9gmyUvkwGwRSc31PzDk9NZq1m96s10sD%2FB3zcvUS0RAtA11C6dDOCzBoZrcvaTGe2VsI4%2F1YOBqo2wmAtOLFpNngP3yyj%2FEr9XJzftuhZaHjgbPHi2shAZd1NPAuRc0%2Fi157mxnRKUuiPkgvZtta8EiZ6vVzaU4aZdbLb9EFGcJOh8KOkdy1omcyUwPh83%2Fa3f0lMAg%2BGDgqiR7eQGKrgNKPsCZKS%2BFXvR7LTe6j%2Fizckn7AjE9f5KdWPYjuXLwiiGesHUyLQn4l9oznXlusERPCOduHYSBF6DN3eo9ynqsC0Bz0GSUiQ5uGQTpYcYIq2otS8oYka2ih8PYsHk%2BgEn07%2BJLSNO09F%2Bj1BBNNDS5G7jBzbQ6eHN1Qcs6e9Zew7QjO%2Bs1y6k%2F0WD9h2VcfGKmdd98YCi%2B%2Fduwn3B0Z%2BQzYQtj1MBGpYjPws7sIZpciq4ghRiyG1zimb1Upt9yVdctFegBdGz4QN0ChVc02AAcywj0d7wRPw7gwPoOuX7OF%2Biq7aimfDiNmprnfnTR8bq5Qd72cMHPUn5ohZctXPoxBofRnyaIMKan4b4GOqUByf5hY%2FZocybdA%2FXzl0sRbdOkaRg0%2B2e%2FQKE9hFERwLDqV5DCDX%2BacAKDoOBaG7QCX0R95SHpsO4GN2CQfx096VKz5ph%2F%2FEapU6nyIhKKYD8C1BT4xqHAimevAgDSXxaqqgAQagzJ1eZ8Oly10xOxtzmJFxYMzHLbRRnGhyVTpUFounOAPZ3Rw7W5UgHQS%2B%2FhP93yN4y8YaFZIhbdK2OJt7PkNLlb&X-Amz-Signature=7e26f80eca1ae671eaeb0a1892e4b1ed98c18268b73e7a1f06d446245ea9a4a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
