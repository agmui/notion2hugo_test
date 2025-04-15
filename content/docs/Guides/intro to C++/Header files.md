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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI4HZJ6A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHj8OrGYR5GSfe8vAsNsWXp6r3RLw%2F6VRM38E%2BwiUGU%2FAiBi0mNvBa4u5DeqBvABeYbQc07Vmv3qbSFcJBgKBlPRuyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMxqPU4MUAa2cXfQG%2FKtwDIr23sAeqD57l5NAQm%2BCP2SbPQVv8QfYaKQwJZvTsNUFxIvPZOlKg%2BFHHVytVXICozsKa2flVrVhqOopI0GkOLxqroaXauUGD7zCTnnYXvPGGRDYNgoRIM6LiWaG2y5EZTPgXOg1F6bfIFZ5n2DKAdA53inmlHUNkNcTtmEU76gJeLFxHVbTVXEYmbldcDp%2BkCYulf8FkQOvRAWZQMS6a4N3iUfVOJrKSMGgn2Bexi3wVnIplw8NyUg6n0NscVS263lOfXZsWCMf6s8JOPh8PROjUsbNfKec9WwERGRZVtu6mGVeu6NplhzNkiqFXKPSh5p42%2B4F%2F7cFUTsk4jF38lOk4B%2Fi%2BlaNCHqNk7mZTnE7g%2BExlicfJ2OsUt9R17RxlFhe8AMRUHbyPBCAOKr%2ByFvFVXytj7evGRChzRgKwFHTutFBcmoj4VX%2B5Ejv%2BbBFkbP%2BDvL4pwPrgNzKXf69gGAaXl3lOnO%2BnEpo2C6Hk7ru%2Bz3PCOFj4w6H4BgKQCo%2F%2BykygoUxZIuwhE18SJwsjdTDFf0sWc5NhbUzX7ccddnpFG9cicm68sb42tK3Q4jKHVuj11BEiV0Cfaah5oZEmmQCg%2FDlXnGA0cko%2BfX%2F%2F16pYkn8u23MS4g16XJQwiZj5vwY6pgHpFTiA4mctfxhLn1PFmAZ%2BMTui%2Fuf6qclvhqrPLRq%2F4wK1lEA95WrnTtrdlMiAbIPyJCgLdmqB1bv6N%2BkmvsDQIf15Jih4SsN6RFLjodc2NdCgcGTy808Jrhd8OySdmbxoJc1lJfXkSs%2BQXqUi%2BOWB2vJXsv%2Fq7d%2Fo2Za0V7P%2BhnSIzjOOw0BP8ROVf5n6hOsE6au6TvyevHSRYJV%2F9jztOn7eKmU1&X-Amz-Signature=2f7744056f96741d2a168272559adee9bd466377c687425b5284e129f9bf03b3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
