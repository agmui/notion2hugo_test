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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFQ4KH2V%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEte%2FAFc2oE7xBiqr2Yo6MmhS1v%2Fdyt1Dc9sGbb7xA4yAiEAnkd1D%2FXTr0J4lrpxLbOpGWp7F9cZUJ8wYdDSh5xel30q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDIRjQj9%2FuHKKQHdvRircA8LaocP%2BX5XaZEoFsFGDawpbu9756bC4o%2FSjOGfnsUSdwiiV2ud%2B%2Bg5bUl8A%2FcJHZmIjdIFlvKkpVTivhmyXJTYrifZ9%2B%2FZrtzTQ%2BFXnkeKEO0y3HtF%2BJUZl9XnQltgC2QZ2KqifjLq5QnXBiP9AYg6QgRfNGbirzvKT%2FQ%2BxPtnB9jGwnz5xRNUEZNV6ockbMdN66pgBpk%2FmuOT3GzINT6UbeLzG9TJlp%2BQJEv35T5uGs0N8mwvuKwG5sDZSCOwTBVkvHQJsae9zFDR%2F1SRPk0uj5FyWjjV3nbWJLCdCL0Xt13cB2VIKjHu4rMdzYwGvoQUpjPybUiR79QqrrCrCwAJHb0aE9iILTcDP1r3gv4a9CX%2F0s2XlLgcSUyT2PTOyJlN%2FZRzxjoxFZJbavtnmseKg2%2B5CDKcRujZ0tIm7SJrRJ9fxx3lPerOHYtGI%2FeRdD59majy22IRSZPqpObf7R0KNLmL108YAhFKtgNvd9Sn8y4O6wHPdLxR1YH6DeufCjcahFubEnjtQKQhLdZevjTjQ6UTu%2BIMDSE2SH51KEt69%2FNgyKwd9QLlKVE77DvcgzjSuiJg%2BwpisdafNxI23JGiM3whJE8eA4PEppBdcooyK8frCFFn0JSeDcYREMMK2qMMGOqUB0%2B0SdRm4T%2BdgqWAyMUth9CfgAsOpKB67nec6II9Wq8Io8LJl5C0dIRnfXiegKLy1y74vB%2BRhY6rAhezdXQ0MRBOOhAkn8spglhJSqufMoH9J%2BUb4zp4Ct3MxZbh5D2Gk%2BI%2FjkEXNrTCvqwoDp5GA6h0mnpJjedYA08P%2BhX0%2BT2IVxwHptnuKQZJ%2F1%2FdIZ%2F%2BP2gt0LN7Gjd8V%2Bf5cQOtz%2FDrk700F&X-Amz-Signature=eb3ba43fe93dabb75b923dc396e75dac6c4776bbd4f53bb97ddb9fc4f5ff7048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
