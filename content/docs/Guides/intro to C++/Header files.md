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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HPURR2K%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoQ0dFVfaafnHpLegNAmJYtpGrMlkqXx%2FTbCPHbx50vAiEA8v8cFwpLEdqiOwq3L%2FdbK2uRkr9IkAVsXY234Sm5Uosq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFA%2BWbL8HdckmLKJkCrcA80iKKIuHSRC9CeFo0oTEO%2Bht5dRhw9AH2vDH4oDNdSInZUgC%2B6I08mtoA1B3J6bIXE6Q1az5VO5c6NJfP9lgvbD25M7ebch9NWWshQKCrER9euAcBMG8WfPvqAE9Hvw4K%2B4xMqRpt%2BSpPrUmb6hTi4rbQbUPMWBxYPxlhm2g0VmDlANiB9fszE%2FSEqvyZee4vaDytHGtdmleTvmm%2BWvX%2FVYgGVrJMXlb6y80ru4m%2Bf4ohBJINU2d5pf%2B3ZK1%2B3u8%2FpMiJH%2B8SyijTyHuVwwmuRnnb0BKHHHNBHIv9IhQnnqznASWi%2FU1aFqr%2BH%2BPJJho8H5BlDmSI720MdMMH6Rk6%2Bj4ZOJUt1qWgT2Z6WIqXQC0HmL2luDXg%2BuI9%2FWp3y717f8MeBAVK067HRnKAUEZF6wN5pYypNUGRdZiuYn9wjiz2hK99ErWvbpM0luDLGUtBQCQG76FF%2BB5S7hLx2yg3OGYgkEBY5PwS%2FSRPf%2F52LHctY7IKPYeOe9QfWI3ceRW6NEsix9mKKCeA8N7JIkOfa2Q6YFaY2x9s9UID41r6DHOKU6MjcRtyOA2WDyIT7XTw5bszFvjRLNATyP6ZVoMZjc7%2Bykx5eRgh7wwW4UHhrp34vWTN5x1QJQnBxWMJ7ok78GOqUBnrxM0IkcibV2zKJxPU3M6NE2rlMkm9rG7Zfv8g65lf4XbXd0nRg4PgB%2FK9IgOuBaUShX90X%2B4ZMXRgfiRHxk3ZD53Ltlwdl2rytpSmhiigiDW%2BW864UHvffY8VRR6uvH9UnM708dgtlPfD6mtBssVKIXBtl3Cu7szFo%2FWF2ooUSUKlHGsw4T3crjbc5iILeN2bhfFrUSuOAYBee1PZNEJJBTWufG&X-Amz-Signature=59ba86e51553a17fd4c40b32d2d36fc077d5156ca02df1957a2fe2b9bf07675a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
