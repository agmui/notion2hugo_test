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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCA3QUY%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDz70lzIMUyZBIoezrh3oag0%2FrY%2FJCjJOW7ky9RKxLAqAiAoGR3x9VvSBOxsSOg8vurKFbRtywgzqcg2SqpLidyqwCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMBbc%2F4EV6qSip50trKtwDzEZ5IxQGOEERaDCx5nG8FwX1hOqjeoPrYDqwnD1Fp%2B33J%2FbE8hlytoPJUrRDtolk1vOrP4wip6cf3mE46GeuzNtxUwtqx1CVjkp%2BSFS1xS4hSADOEA%2BAwPli4%2Bj%2BPAB68a2Lpq%2FjWh3aismrr%2Btn9KyiYThLZUZMrOzJ3%2FKSXbT45LSWgwC9fhKQVKUKCNRem3ki4rv67rrLWqVkG7xz6JEVbo8uMahvLh2%2Bb1GcwQbuuFviKuy9MzjW57KHJUnBPQfsxJjM3r7TsKDr%2BKdhFBtVsM%2BqiA6hcPJ%2F9FMJqUhidKPqh2I%2BBp79nxLJ5Qtf3Qc8KxrHBwMQXNnXfVcLx3WSb1p08HpeSZ%2FYITa3bQUsMPtvkgnWqfPInG8paZ7HADp%2BhBVrPjMRpc5PamL6G3EQ29Fsi6Lxy1UNGhOjq7hJM5gE6R3Y8XC5znurRQgWAQujuqfvFH%2BglwdHRBAICCbvy%2BwrDZptMcztIeDspeXXGMIXi5C919BNAwn8W7k5O2eL0ZeoYMOhgpPUZ0guwAa2SYFBZoMV%2B%2By1en9NuD81s3MD5Mln58m4rHxuoXJKpHO%2BHGUTqMcQ0garU4%2B71BgD81Q2L6QeQ0KeXH2107myC%2FAuEfoV8jgadccwv8K4wAY6pgHvhmcfZavtiIclxcDqKVESNajSc%2F9QzNfgODhL1rVQIhLl3Q%2FTyJQ8DwGAHnc3%2Fo0HqN4vljQeg%2Btxz6JS%2FY%2BaeyWOilFARx0VIEqmw6mvCld6J9c26sE89AScXlG91htapqjRbuUHjgESU8jS7LwntotYVuUIOb9gkNt1688QBjBGh2NZfzMMjYxnuNqm2OYuWP7NPQHVU0KKvTWieyI3OjJ6P6rE&X-Amz-Signature=7bb6d4fd6e2ac7b00715d6c6777602bd638edbd96b4cb2555f6fb417578e23c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
