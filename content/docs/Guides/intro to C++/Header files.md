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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWPQQT3H%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCID9qefdiWEKbYXVAXUq%2Fppa5%2F4zFPAJ12SPqFOsaDtb9AiEAuZas7I1vNV4x3x2h8y%2Bnmp5qGwoOYI1epVORcR1fbJAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGqT0Vycm%2FXT6T%2FGircA1X%2BHJBGpqYB9Gh8tiyIurxJ2Ybde8Ab1hlt%2FbjwN7AMaXoIj8eTCuQChbPCOAWjAImIEn%2FVtaDj9vvgdC4%2BdOOJFjQ%2BLKQAN776OlqZJQnnuTO9BQc1SaXsZAzMhDTKSdVMxHjKLehThQf%2BkCztR3O1AzgyvLbK0SWuI14zx0ZI02yIIMp9f6zbS0G2hNk%2BVrBTFJCS73bQ92jXvmIFZ1o%2FCNBhgK7WknEhBsOta%2BLSC2TByY1BH1bHXUTKp%2FdDtcHHlhfGW8U%2FWZDo%2FwRvoyBkyeNpzHPl7Bl6HK8kg%2FKDrd3hfmFO%2F9mPJZqc%2BlBQrNrOfB1NTCSR5QyIng0ylR%2FXpbIhoKIRVipyhyUXQw7Xq6aPRgtTMZ3tXsyiDKX4%2Bxlw%2FnKvQJEtg3vWy99LNGPe2C5%2B2VVDre1tOyk8of6LzRIEvqnj6VvZ6GVI3VAQ%2FHkFw6cjCQr15w2056iw1eR72bY1fEW3kjSq8C48y8mDQSVa8CaWfnO0QpO5hSPD%2BNpSckpP%2BJlGiGpkCtC6kmRQQ7xqZdAn4kcRW4C01a9L6M0MwyL5uz19%2Fjju8xTVvp34lwXY7BTl6TxN%2FUuIzgxO0D7zGjEnFv4x%2FQBnEp4wbLYnR6k09HraBhxoMOXT1cQGOqUBR3griIXcPTZxPHoKLbFtJct8pfpsKT7ZI4s0xp%2FqCE0aDNnFNXZnfiB3%2BMSP1bGgrpbxb43%2Bp%2FgzqTGO6oFbjSTLY0ISyeG77bluZ0jj4dKlUVzyb78LsjTKZcNziGvkMzeaMSMgH10uTfAQyq1N%2FCgIWGEu8JKARidQOcsFq3VwxfHSMwvz2zQbrOD5ZleNobChLdQCEKb1XC%2FPd2h44USaLFF6&X-Amz-Signature=584eebe0235fba93d313166c032996c3ca9dce1847d3549593fa0ca33c59e346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
