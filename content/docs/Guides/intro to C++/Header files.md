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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJ7CCOJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCxOLPqHCjsb9CVLKeUWkYSneD%2BGZiNa8csoetT3lY5vAIgB%2Fb0GOyTcSoWcjqCADw74k0GfrKjZFoZlHG%2FCCDtzlYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPFKEJdU8ON5Wr1skSrcA4qPkwxNiB84BD25M1IFZ7H2GSL0Rf8Ft7ygTbMUHyLyFPxN4NehADPijk2iRfgt6I9biyA91%2BMLGzMCHkqXexNZZU8%2FNe2nhbKwNAFG%2Bmv1mefXdAb8MR0eGKZC993U6QmgttI%2Fy3bMUYlC%2FgS%2FffQuokuwhEPAA20IgmRh0u4lhfUzr00RHWqhdlhX4qn2AZw8BEVesrDs3qBgyUHJO2Xqj667ld0VGCBGR%2FuvHvy5KHw53EowDi%2Fb9kwf2Us6r4xC2HDk0kVdkgo%2BKiWxjEJKE6qUQ2FueslvC8H58op1VJ%2BC1j4kwJYoU%2FvTc5tcm%2Bgpio0NjxpwxAxXMl2e7qouK9vkviDjaWcIV4HIRWNF%2BmZyTkeukThCUVUzll8ZFRlqs0Mllj6d3je2QztN%2FYm6WeMR33ltfN%2BjvmvNlPiYOQ18J%2BWvDeA0t%2FRBJmAKSpaSQoc64jhn2udSc764fLJjIjK2qDuQ0qVyapI0lZMtfWA0CXoISUsdNORBfA01SgsCQhz37VZZC47eZHA0ynhDrFlkURV6SvzurxZSDZ8LBooYdpkrXTGZRv9rH5lPcO8CM8RMN8Qlut8oz2c9JzBtucM8J%2BsXnQGs6FkScjjVe42SAIGbYXi1HIsmMIrgr74GOqUBBiHV3G5Upt8ILM4e2U3ERCEx6a45ZsIjvoJoOX0yQxsjij4OU9pdD0jGF0EznQE%2FDMsbN2BhXVQWyGHRiL7p%2FFaa7lJFmJN%2Bvu3XoBynTHbSBLvUlzQCADSKQ2cQhXaSZrVv7KeyFI4b52hZaSOjMYAIINn5x49VBDfgSGj5IVwjuw1NkOdGabV5O7S7LwB7iq45M6oly3lExDnVuZS%2FvaS1SJXg&X-Amz-Signature=3b90f939e07cd22faba888a1e105f2164fff7b49aea79546fdb4d019dfc56526&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
