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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSJ7DVW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfKtcD7%2Bj%2BxfUvlBFJUc2ATdREkHBF1Spl%2BcwOlVbHoAiEA2PU%2BuXlzhUtPW3cgsfB%2F4sYIG%2F0Ln1TML773kL%2FgvgAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLyzHUDpbTZuRyChtircAw7k1elsnPzgpuzGhTXXUbso1z1WCqFAtF8igwOgCyeC3hOK4qa21e8BWipjCi8tH3kYFfvrCuH059WSXMNMaiw3zPyP3uTdQzlntEsixRN95G678YJ1ySDfYWpPDwzvl%2BiUnaSOiXw14ANemVSavP6WBWm6E4gmaCCkoxqNRVdPCfJx8u%2BQxH6P9uy7Z3tygAQPsAU4QV1sQFvHMkFI8Q%2FspQjNRUlnIN%2FdEtTUFD4E4NpLrryBtkiUrrHjG2V161ah2pDjxAUM1PFm82kho%2F0Gw3tt02Yg1M%2BDiM3EkCj9sLa13CThqncBgWfOAOZZNXZU5SFdaPSehtM3zDdEkNd%2BlKsTXGf7SbVm%2BbHWNCrbYgnu4X0OJy9tmRl0U0B8Fa8q6CCrukLJWV09f8h%2F4b7bdAYuCz72FnztXYZV2R0mHBikrGw%2BwN27Q5vUQTRdHFJWZ%2FvLefcuf%2F%2BajxlJPG%2BSnHJHBVN%2F4f36ty42aWr4XJ4nj7NIQw6EfxiKbDgHG%2FCCFNdu7SGgUfWKYx0eXPVIHfeqdFxMXLLenLUNgAwclytOndCQaLq42xYnTUMMsYPfDFlj3lJyeQOAey4tf0yhgUtDNvSpqeBa9uejDDWEE4IVkK93IjhpTKuHML3G3MEGOqUB%2FvnmXovUwiMzfFFjEjMPwWBIUDMwEFkVrf2ksP7lJAOsdUEPcPUMSoqgMEDGfpVvUkuHvHGCztgiUC4K6LRCHjHyo%2FMjUGaXseFn90h7h87q%2BsBu2QXkos7aYfGdYsFhqMj7lmlZKBP45n3YTB3qSIpI0REvYSeGTeJ4s2KztiwE9V%2BqHy4QmQBhT%2FzopAGgBLsiRCMGkgMAfEm3M%2BxRwQYjHzyb&X-Amz-Signature=c517e3bcf207a7353c6ce412d97109b06607edce78c51fc51cce58ae5cc7f536&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
