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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDU64WBG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFWQblEtVOxZxbpuRmStusbgUvlMRj5K%2FlOWe3EsPU66AiAOZWyiirQYT5QYaR%2B%2BlL3vZ6%2B%2FT1KC0vUY94p27IDCLiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr4kvhMNUWCjOi7LeKtwDd9chtgqeKsBMS2dqotPhXSsr3%2BE9GHyFYkXAwxZgLclkPWmbTQVfVH7n%2B3zpYdFIlpJPn7xubwrVwuEG1SgO5sDLTOSYC%2BJyC9amHMs2IVTzGagCT0Lri%2FI9SdgvnLONP99EB5x6SK%2BTh7q9WAFgdNEq55VmhyyVgBUy6oPD7yDPbPEpjhcBNzYmNRZ89qYDp%2Fr4UkRL96eWETV6cKg4p9wqzN30dze8KPlNDcTeNLUzR4k9SdmGi1UGKIyn%2BvCWuoXpCa4d9f8emKbmrZkSGzH5aVIGHkUpiKngJa8gZO5ETVfKDmCsWrbbn4fg1jc%2B1mA1sxuFKOe4co%2BmH1tC4%2F9Z3anEgm3xNWjE99BS7FaH%2FbCNi5QHIhHjc4wsEyxYlPfFvHwQ9e5XSIdGivo60BWLuJWwN1PRfXWWtnube5ORtJNxcKBh3TQ23XlY8pFRIRs0FK%2BnbSrSv7Rr6v%2BL9nSn%2Flf2mey0sXLopJBhgBCUxy6AxNTGrYsGg4LhGv1ObeRmCmThQvb%2FPZcbYlsBrz5DCp1WIdcTtGC5%2BG5EZ4UMQmooQVvQ1h6v1NVgUmTBUYxlYP2yvo15jyzxvjrVyPUDYwrZfE63nN2vJhkK4Z9gdqSLv8CqSdvMGPEw1fjEwQY6pgG%2F77pOPgaC1odmnmNSSO25Y%2Bm%2F57CaWNwgzm5cu1KeuPtotDcpGzMjomdYdzdivb9%2FHvV6vi%2FzZB8FLs3RaG2BxkiYkOW1dxodx5j9L2sLjvDgqykE0yRoFPfpQVyfP2yfufaQ1b5wFamzGFqdmG9kZ5IZL0gywrsl%2BVfC27WfWIisr67VztA1IFMDYSCey3xF2djxJWsSjrWdSYCAE9jRr2fRMuFQ&X-Amz-Signature=139b2b26477473a96e52e13f6698a3ac5f217bea68aa023a9ac6389c590b5cfe&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
