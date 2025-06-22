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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHMAU2Z%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT8Nvlf9AFGZYq%2B8AaYs4rSV8IQ%2FrnqXJnjS%2BLhF%2Bw7AIgAm7OTb84uMnMjVOql2nch47ciwOQDmx0%2FB9xadquy2UqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2N%2FKQlzlXPDQYUOCrcA2th6zwoJ3%2FpH0%2Bkey%2FAoBFkopWGFSSOQTX1hzTiG8%2FFP26S735ELhAR3Fwc8O0vdyfY8DAmuaWVJVUevEITcckcGcGiOfaTpvFbd7NBg4lPf39%2FCbULI7kN3amJrp83wFJP4ihrE9hZkrcCQmnMYcJKzDx5cgJfnhhDU%2BIZrxwxwBaJcSr0wobn3rCHbQ0w1apd3lKFleZqZOARisHkBvHbAMO3C%2FzoZ0WzyW%2FghbHcud6waTY%2FwuAaj7vRgtwl1nDZD8jND1hyB6EbgfgMGPPo804DfTcXUe%2FJ0HVFVMWRmURnNbO1xtIyYuOKFHG2KbqFPlGsZvvevYdnp846jNSDUIdIGPbImBie4banwBYCUORp7S5qn3B7bnQ4rFeNdDRCq%2B6CQQxwdA7HOJikGktAOd7OBHT6HCPdFlkVae0rwa8dLQH%2FF9KxVO%2F1nLyJfeGHOEAVky17DMJNRLGn6cLJVDA%2BP4LkcRzDr%2BU4%2FZxXDKIajoZMJekEfWF9JOSwFgL3kXLq3Ye60X3wzOH6BHgv0SnsUgKSZbMzJ1gjRFXelQBpeb%2FGUPOJbqSKTVWkzXr2h%2FdOfSFtXg041EajL4ohY6FgCFUCuLTLwvEd4ksCcnyu7gma4mFOrcBXMNKi3sIGOqUB1yYUtQmX4Kn89wQz056NVTlh7ZnRk6ebla5GcuIZcnGGieCbkbbRFw%2F66t55i49yYSK%2BZxQCjpVY94XAiv7MWnUHYpOoX%2F7OQNhEyyOOrCtPugmifzKFKMkSH6OkK0%2FJk9nMKRJvO%2FUcQs6autRaN3jxcUeNMCnlHaQfY75iY%2BV0yMzdsLAUlNmRz6f6s1X1nB5Q3RX4W9d3h4cMETSXDyffNUdf&X-Amz-Signature=806bdf2b63078a0fe3b809ffac43c060d7d26bb68f350d827339b36ef081bcc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
