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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656RARECD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfuk20hcJY90BUOo7MfJVmdHBjLuCUHdmEAwfEVA9U5AiAcHIO1qJgP3ZZKtP4pL%2B7nFwsYlhMoJYW48lvlip%2BksyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiSDpLw%2BihPh8UO%2B8KtwDnN5WH%2FErt6awaUuUTjtRfsZ8Xe9F8KWZ3gMb7urfZ5iYb35Uex%2B9IASN0qpYlcz2tJfazo7%2Ff4HQuoTFJDUGaz3WJjQSnP1SdPNGdiR6fbhFq2IkyH7Ud2XiCMVDnFN8EzBV%2Fyy40N7%2BiyAb%2FQKM5q%2BdDpTlldmuXGw%2BcZlZ7owWzGROlntysp4IVq0DMoUdWMBmJ6BXKADOk0B0L7HMMsYlv7kfoXWrst4zUJ34iVpsC1X%2F8nVOFofj33FCv8s7WMXS7lBmeNg8Z1rufMchtfqli09M7QrHc8DmaUNDL2I839ztFJ2f%2BjxgdOH2VbAgoiSR5ARuTvZ6xM1ZB8tIxhPKTvJm2ImoCoJch53OM9ABKSpd1JgAWTTpECqsOPES5w5q%2FrVHs6e%2BjLYUjoly0mt1pm56Q%2Fd3roR%2BPfmO7GDKMl0X1n%2BrqE%2FauMIV2FMAj4UD3y2wtVXf2D2qniuBX5VbzY%2BPCVO9f6LX3QRt2%2Fmc5btvCy6PVQDKuDtECCJF7pRvH2u4sjnG45N0zZ4pVZ0lmk%2FUM6KscDZkAguM6ADWxM4quTWqAMiZNHmQ3pvC%2F70ICmYL6vBvh9zpN6%2FPlHjE7QwWSRxzm%2BohX53mEeBfc2QIHkVKI%2Frs77wwwrXewgY6pgGm%2FEbygsyM76rcctaqeO2yjq0%2F4pDRJbfhDeBMdZZ%2BUD6KPk97X7l1YRAK7arB%2BNZ8EvC9q%2FHscw1I1NdHY84TQWyoEHeoKMiJ4KFVps3Sv4YiJvAW08bmj14RkXEjvNWNlUvYFsBCz9MglwmlCpTOMFw6%2FnasVm6ctA2SqrvFKxNWmHVQfWadLcXeOAFlHYfNLbsmYGwjRQ8vPL8MBIdiE5Bq4Cr%2B&X-Amz-Signature=44b26b3a522c20bbc6a30b00ea6828e1c258f0787b9e77c2d7564683057db6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
