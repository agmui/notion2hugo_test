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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624MOEZVN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCFxfuUS5SAAOX6H80lWTq9ajni%2B8iqPe35uOAUoBn%2FlAIgSWGpoSMxpxZzfcEb%2BzzdSP9ZsdOcORD9zKKyy7%2BuvuQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCxNrD99MDUm2JIu%2FSrcA3wNr%2BNMpHbWmZV9eVEcSNgwX9OrXlOhGR%2BYr8GVCK1fuzz6DlOxmUmUULNWyaJu%2BvWm6X7cQXCiEJKh%2BuFCGigR7AFISbcWQmPqu3kXoXvs6uPBKmUQk%2BnUM9mcVs2qMFPQbe5u2lwuOzFydK%2FJY6uRF6PQDdmpvPZiL6THhbJ8xHpD4JG58stM6vMtpkIQei7AVvR75qAMlBIbgPpmHvI8geZ4hOMl4zMJGieztjwBD01H0CX9kXKz22W1Whalb1q24ZY8xPkCJzVXx2iveM0GSJA2CW0L0AWQEN4hSrxRFuzSFuPW43pmTgZJzQk83QpeBlKqDTLGuTD82WBkmG9xypvt%2Fp3qdsfNh%2F41OGiEU5TkKrYmClCgcoEkkiSWNyBNM%2BGSFRlj1glF02S9fibMv1oF%2FKDV07lA3HiSKX8HUxj2cjae8rV970l6u50Nu3tHvbfKEP26DM6jPq7xw1GwHhQEPrgwePdmWezdk%2F8VIcd051eP7biCUkp11m2Vz%2BvwHJtUHmY0Y4%2BI1bXf9h1IpEc%2BdDolaSImfuYHxVQqAFIs221SOMvvag9zCclcAUY4HcYQ7o6Y7%2Fl%2FEKAZzRA%2BqIzKBarnxoL363z3y4qAuTVST4gJwqVZQfxZMKP5gMUGOqUBCCobf5PUPQOcfEY6lPv%2FG9G8WE5LSje4IjG3lxBxwmlTQ02Ve27io3HaXoQB2jLUn6V5Y5QbtH4vo2hCsXl8FVWNIFOKdkO2EU5uQRLHwaWUQ3kHQQicJ1qgOPtNuQcfUwsOYrKKHMgwdTf8jlw2Rywev1xdp9oKHlaVDWAGZXK02C%2B2bPUFjB%2B5q%2BIC0Gy%2FJNDDMkH9DcwHYDCQp7EJkGvgFXnK&X-Amz-Signature=bd5eedb694c67dd283d467876f7e5b626de761c1298a35a069633f5475162c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
