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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LO5YMOB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD89JTbncy%2Fc%2Fy9WCFBw2Y4z4AiwKwCq0Z5RY3fcAFgnAIgITH0k5IlnLH5Dqq%2Fn1NeoyH%2FP8lc4GDsmVl9W%2BJ8nxoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDD7W%2BDACl95NAssP%2FCrcA4Cw9F8jqUgKA6WkGyh7uCbsutuqO6O331NjYeEbxE5jB66kvS0UcEtHqYL0yelphNWR4espUvabVcEltxDzAe%2BxMd7NhEM2400QWbSLjqz9Uc%2B%2FGwRTeKRe2VaoKvq5zupQ5rty%2FfxGme5LUr4KwUeDYwXRNm6l2tqX7hx40dXIPv78mG2xHFHY3a3VPRUJmPGIL%2B6GRuzPj%2FAia%2B6dJBRPRjQOHRNcVfMm3QQy8mfYNXs8H5Ved2D3BVelaTP1sd0pBtVf5%2FCid4zLMC7sV%2FjALX8xF5z6iUJ2ao1%2FZTP1F8iv5YjU2Acqf8nECiEQTo9XfSgc27xBs564HQLyBN8A3MgIpkVDAzlZ0kLE77AT3BgMTc9zBsaN2%2FbiOCka7IylfzlrdhAbjKw4jrTXS6Xzj1kW%2FBQ4BFTsjUvqHoqcYqOtuJbk9khtk4qr6Vl1byupJ14qbL4yqeHHKrB7uVIeX0UGvQ9UqpCu1KBXRJfJ8saEkKxDfcAam1xUknZ%2FxqwxPh7Nu1TvMgVpbAcVAkpVPngy5BOUJ1vrfcTLinBWOZK8MSDBjiTnflOghUDTVC8%2BNXXa7VIO9fQl8YyFdbGTbH%2FOnf4mKX0cLq379GJTCPZx%2FeHLweZwiIBkMNfY2r4GOqUBGZhKISVKJiRD3CmVBJRDiC00xLqL83q4shFwF2QWX0KHkqSPUMf32Kxn%2Bk01MJ4Sd5ShN25QIU2DQOv5CjgGNdJiJLxUu%2FEn3Epgh2dvyY%2FhZRyvTab2KNjpFw4Ce5U8A81ebmDQFnqLWRZ77KPL7FLaDmTMo62UwFRaW3LQXjA%2FUKemwM0WuvpmuCpH9sn6gLdKesGotvJdqeevCGVsGSQcKKGc&X-Amz-Signature=c03ccecab0e77509053478318e5cb1d45f64e52ec748bf852b4783f30af9db66&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
