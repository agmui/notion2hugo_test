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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFG5CG6%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmq5SzPtYMHFTDR0fZQK37Mj98ZzdNou%2BxpdseJV%2F3RAIgMxwG9O6qxX8OEroAZAWaXF9lba5HyQeLHitcdWs0pJYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIDVURT2hZ89VkNi7ircAyGmI8w1uo4VFm2sJL7JVw6e25cjHTZiQBdgrN1RkicMc5s4Tx7FiR0u9yPwIvpJCRFSARARdCJ%2FAAMYDuJfz8ROR2tWCDfgt38Cr%2Fcw9P3LK04KVGdIIRBgLuG8a08hKNR3%2B2tjp7fZbRm8Ld7DQpog1jzFYYZEic1HKCJYFjsPi%2Fr%2FqnOfALUrQiJXIj%2B7hiTwX8NMKMiVkSI7XtwNTQUDDmYHr8QLkPSxgYQzADaBueLAknN3YEynMtnAAQh5gnbOh6tR%2FlK5HrMEYCOSQ6Urbrf4vesVaurtRYK0MlsUNh4lqifOms7zaQf8bMVVBSSBRmOZdrYl51gqTVnkMGuxp1B0R73OIIBfRmHNkX3QLq0XhJ44FeSZq2SRrNEXd8y48yhxy0zJd%2Bm8mxJ8XHKiPOKZ%2BPLoqkytW4ieCGZ7qKPvfjclET3H8F%2BKUEaNsqyWDE7%2BHy2USgntdMO6CB23hKszwczvpDfSG77mCqvnY2FktoTW%2BdrVjw5hq7Sp%2FWdFl0Ye%2FKz0qXw8oUiV3QN3pN11NzRZF77W6jLkGYhpZRoCtFx3M9EnskF7olC6tXDuaKxuLC4BeCGCB2WSO5cZAZNYCCmRNKyt6haSufIUWo%2BTJeSmNclDtr9uMIbnqMEGOqUBCuaBurBJt2EumPUntR8dr6IZV5McfzuIFz%2FU9iNY2uKsv%2BN%2FziI%2FTXDQcUMGQQQ939R3AUGHSGyp%2BI7U%2F8m4Lu6SxQl2EUlhU5%2FsZpt4Tt3E9ZaWV%2FJawrNILrffi%2BWdfI70IdyKzPc6OtAzwE0VYjJBc%2Fk5utHCoSz4vmb62AXsMrYYcYVL1dDmxmAX6LenP31IIz9mKE%2B0zIxROoAC6THW%2FT9G&X-Amz-Signature=a62a7cca117e4874d3bec9f405572ae281dca5b15f3afd768d865efc54606741&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
