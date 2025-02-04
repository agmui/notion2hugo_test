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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYJEDJF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDBQlL00roHNDi%2F4HFHZw0GQ%2BA3%2FWyaO9IwJJq4RNdDQgIgNr1GwEsNkV0cep2Y4wGwc8DEjs3wCU%2B2F0JnodnVR2Yq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMftP972sqf6KSAPmSrcA3EcSX0PMDE02NgrL027jKXuq9jsZ77EwF2wlfPETEfSqEviLPe8NaCU2xeEkviu5AQbevdjdr4OdICvmG7TnLMe4bQ%2BCCfCB6skbX6kG6rSSrRw2CehtgHCUqB6%2FEjYgiiWLXInLZ0a1c9%2B0zX3Z2f84eDyqHS9sopyd%2BCua3Vh4IeQOesNP1JBByt9fF0r45Dcd2XAF3NdTWHLlIhCDO5VH6f6PDtm%2FUAdmxNgQvrkBEaQ4cpD09OgVshm%2Fd2JhzhRAdjexvatsL7UDM0We5Oi8uGCVCeFXQGkU%2BM%2BHuzqfE8y1%2Bc7G45ArCpQ1jtOBuCCsjlQUqCs%2B47fLjlbjhWG6MjlacDaH6TowJ7xXZ08Oan0518dD2Af4XCnkpS3bbedVOXpsVOljAEMBxFt2Ycn7YmvMqqugPpqyF0%2FpEjlh3CuPYYeaZ22UWLxPAwp68R8zfzHUxAJM0qvtfofbdjrjfLVP57DtSoaoQqSyPvdY0iRuguWwzt9O%2Bvnx6HCHxBR6JkV004Li4%2FxkeqILK%2ByZw4YdfWxcbPp%2B9vby86So4KDUNQh0lZutli%2FXx78fbYTxdG92BvXUkL1mkOfXa6HjDwJgYRcRsucIt%2BnwJYxC3QURgJz3rSshBIKMJ6fiL0GOqUByclxfU%2B%2F6A1fu3hKTqpSSNnQFfogmjINOTNHwy%2BTHHOc5GEceyNYz9NJboFfKS4EF17CzQIBWiv2ij3rQ7RL2zVwKOIhKSh%2FpyjZUblUaD1%2B7fPv4MV9QvBAr1qSeJzP63%2B7yJTtTWJXzLCeNyW6MkJvkDyuaDRAzxUqOph6ycTHPteKVW1NzWWYxHN9ek9AIv6UD38ofa0iWlCexy736l%2Bz%2Fm2B&X-Amz-Signature=faf8b2ba4524635e0961551f5e7c476464ff5339b8d45a40bf4725efb8629ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
