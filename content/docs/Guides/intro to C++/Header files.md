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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z3KSJUS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T033947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCbJ1Vokrjsh6f4qeAGw9zgRLkqdcQ7q0Rt%2FTwy2lK2MAIgVmU8UkSNfQjf%2F%2BHRn5%2F2A5dbAewH6hVdsSpaSuSsvkkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDG%2B6MEwYrStX1KAD1yrcA0ugnHY%2FiGdSykDYdOcATd0VAFTgr%2FdcHjVTSC6Gw07yw%2F9nAMWdBRncqXCuHckbMrbQfVX8ydd7JLX389H32ArYBXb9bUUgpqbNOo4I5Q1x2P2IgI6nXbtSEkmxX1SWFBcQqe0H8Up3tsXycNI2EUOXiLxrYS5NAad%2FP0o5YNyXboa48%2BxHId%2BrR0tB5VJ38TxkCs15RuR13pJ28nfE3u6R1XtG688CIPC7WSwjh4DA83t1UB4O7ku0qvvis%2B%2BVH38bvMTpDQgtUlZjsyzWQR6e3TvJfvJoBF9taXw9S72g%2BXRpDOGMqE71VFArzhUUp95r727MoQOevZ%2BQatiGB2yBo%2BAG1wWZdk5ATqIWGdoUuzibVqyQJB%2ByMHF3sgV7g5%2FYodb3YzZYEErOXtYdBFJSxYFE84B6fiZ1i%2Bw9YrxkgmnukSnqRZAp9M4QkQeS6%2FjGFiVUSmRd99JAy3PbegJUfasvyVr%2Bgf9mM0PPSi7zoRhHxmD9OkDxiXzdiD1i6hJV%2F4%2BjZykLpkGT3G2UHq6bTm1Y1R%2BHI6TAeSUH7V7NW56eZD2xz0zIsDyj67Na%2BDwAlwykTaIEsIBQjxXSeRqTWo7DucGoYNce7dzPq2qMZtdev2h1WpuTBZc7MKbh%2FsEGOqUBO2J4I8hCdYfWCjBvEFqSAdogpWPbKgWfwayb%2BZhkCCekCguWDRVqtVB%2BGfIhiY%2BQiICwtfmAXLwDQbH1E9PW8ZDku9JrNed06VXYsjOGWp94E0gF9tG8gK0RPt7bE7JZYPyJ7TRCfNAcbrOU3zwRWHfZImMRVASi2x5GvDUp%2F%2BoWyh7ZCLBLMkyIUXLmlIs0zyG3OpcwW%2FaMtektEgIKvKTE49rR&X-Amz-Signature=27581848be8066121fa3deed70d87a26c65325c52c724e46a42b057f0186b912&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
