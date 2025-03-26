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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DU67V7U%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKy2INajDCF21KtGhq9YriEu6u5WQNIb26uz7BDh5ZkwIgcDIKPu%2Fhfl1Jckwz1yZB1x0vK%2BNjzzB50OxNPWDrxj4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFwSRKRf8zn5Dupg9SrcA0zQXldAb92arF%2Bh2i0TQGWcPEqmZTpyK%2FShWUmmDPTvAkSaai6i9%2F5pogtGNmlUezJgLhRUjZzRvP2qoDxE7iJYukrdqb33oGi2I%2Fj1VnpeAHXaEBf5Yo%2FzZcNjOGt5rAHFDLok39fMAVFgDGmb02blks%2BvR%2F5IlwdT5sDq9FSneRWeatgigbOmEd5I0iuzZkmBjQQMzZIPc9mji3T0EwryM%2F4csYwkviZAhBbY4UZ6oDwuqWNKav3Fao4OV8fsKvGRZgPcVqGWetgqT2ZjJSWBSgxVsxXQ8SZZR%2FQFaFTxKlZdLWvaK%2BF9wHyFY2d3MJcsOZhkRa%2Ba8xK1qE3JhMuU%2FaQZ9GIStg%2BlaIKP8DkIstuQ%2B2T6s8XKosQdd3kpNXT4pPlalhQHojDbnqk59Ou0veGTdSt%2BPsTIn859z%2BYbfN4PB%2Fy4c7aLZFSBB0Hsalarb2Wz57vF8HMm4TuMjOAINWegMrx7KySEDJcUtBEdhxEspEl6jASJkCwrazyIKzzcRPvm7pmhCcOzw0EbRTT7rhpnGnH9NlWh1FJc%2Brjy6LqjBM%2B4mZtlC9kVpgabiyWWqO5T5yAOAQy%2Fs5pLZBSqYdij7Njcls6G1TG8WCMlEOv5uSJtrTSm6vQ9MOT3kL8GOqUBSiEbW4%2FDt55Nh0GvoOz6GoVvHVfsgrr7gHmpmTgyKpJcVzUzRe4LXT1AJfg4JvCcLsdgmwEPFGHa%2B7yzve%2FrZXR%2Frw%2FGRNVOCn4h2LfeHstx8Xdljw5fLJO4FRKZVyPnmltnCXl08JaKeayFgmc8JmWSZjCqv1bvRkXwIDDsXLP11rplnH64G90E1qMLqq6OXceSyJ9bseqUVLOOULwmyLkwknPW&X-Amz-Signature=f97d97305596ec6857171af60403656d25c3bc67a48cc8c8ab60129fd70f9db8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
