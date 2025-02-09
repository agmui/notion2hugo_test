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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466462UXCEP%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD82ZGrudwa9muS8P3BIN7%2BTNDgEqtUHP6GXkGo4UbyegIhAI5Tx0Hq1Xhzs47IymsiHScoY2DEtxzd5ipmRTiyHQAVKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0272nuGW1zxWTUyMq3AOhBMDO22cU4eLvSilrFxtIBHRdWQITvyfkXBHcuYgb7m4%2Fmi%2F1yCQ0dl%2B535N2lawfxt8aPVJEDWdi4uM8O1LQ7fp4CfWfon9DJZSlgcmVSNMCmShFUYiyW7Ypos2tqVHfzm2j5eM0uwditgPXAws4MBadVgR1ouHTZ%2BgQGKznjmLxe8VJB3pyL9sh3%2BCshLZdk4qpP%2FUETdyb%2F2aN8EuRMFaJgpDvibX4S%2Bjh2zd7L8fqEvPb27h1mXHgriEYDKVB%2BYDnnUQivIuJlBGEG%2BuVOC%2FH%2Bspa6yeCNDCu8xvZ6V8qadHm0%2B9sPGwUYGAUnPqXcxsZo%2Bo80pzg4vzt1gmqfIjFHIVTkg41O8yb4BydHIAf6a6f%2BMidGotXOYTTx%2BH%2BvHpmq3O%2FO%2BbICH8LRgfeGzrETOhLGCDU3Zw9stsiPNymFj9gIEvOJZkwwhtBoDaB%2BuvmMJMZnRS0WxkR7UwuRKtNRfoLxWtaFv5TiiASDHWFYjA4m7b7%2FABfWKRx9fO8z6ZNzd%2BHwEQgJqLEGwL47MsG4dHgcqj5qXJKfuIMqI4LMEXgxY9EZciurjHg8LrQZCsPif5vF8qMCG7XrEHkV2X%2BWu0ygBXDTn1J2mgEGgHgK6yZ349njEvDhjDD5KG9BjqkAens%2FOkJ7JKb6PPMmR9RDQGjvB3jgQw7xcZTxTj%2FPIcKNVJh3M3TQNdC3hVSqRq7va1IEhocx5T1CWEFMUInIdWZPT1DHGvaEuBUuMY2vsPnaGvak1jGvFF1OliNE0VQsC0GoAhby2GJAWDVvL9CTCbSuchXZ16bjzNoDMGBZ8FE4I0Lk44pOx4MUDLFTed3qkclTSbjEhdEKMdkQiuQGgGXt8x5&X-Amz-Signature=2810751a567afdcd987a163976b86dbdc77ede7e051c04e581a8d2f30b022fe9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
