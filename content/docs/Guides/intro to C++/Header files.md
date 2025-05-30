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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHJXVIZN%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6Uv7v4BQ1PeLezMhYd%2BKKrd7Bf%2B8XvROB2JFVEKypwAiAc8aTw3AyiSLP1m26O%2B4R%2B20CPAKJzj34dXC9it2PiHCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAf%2BBLiElNMkFQUk4KtwDJlasAm%2B1huyLFkB2IlIfMd8tR1o%2Fig5rG%2FuAzWDYmjb%2FF1z7h9w4rcoEvymcrRP9BpJuz0mRGphp6%2BUTEariYLdG1W11LcCiXYb9LWncZyoFTnrAonpaD8%2BD%2BImvz%2BLxytwMt7fTGXuXtKNAr4yzCAOcX6HhKb8yebAMN10vjdhZIc3qBi9OQ8JQCJg0MFYAQXVBecHSxrDwWiB%2BTGS0WPca8ua1HuQVBQlmnK4DbzgYaUkq3S3COYpXm7W4ixQ20twIcsWVtuWoo23qgN0r3LPdWRhq9SH10nbJcyIHFy2ONxPR4g0ciqiGfFrgV%2ByXdx0gMgfcHdJ9qBajFtCbzK4IZTraDT2rXuu42lgmK9FlLcKRv6ZnY6FWrITfsbnjplSAvTzZwPV5j%2BUlpzkHgZjz4rX7qU6iLWTZLgCox3HKg4sImmqWB%2FebGzRPxTEdIL31I9dw7ft2z4lldmO78xeyVnedslzGrRGHr%2BhLW6r7MuSXYS3jAzNNGdQspfl2jzwY2JwsdI53V6L7MJCmeBqyeM9v0QVFDmWlDu9vTHa%2Bt08QCrhCtpEL1GwSwdp89akSg%2BB05V9NK0k%2BQ3EfHMrCctsBKYkgYJxjn%2BVcKLfYSAPqgeN5%2FkH%2BvD0wu6bowQY6pgG5cdwdZG%2BN0SwIIXXcgC4sDYBgqLTfPfHtW%2B6mpSmgs7cGw%2B1dQNRp960TXBs1O11MJXQjJdVTMyl0RylZcULTCgDxbLWw0%2FK0i2j%2FI3pRiN6IJNsrZ93RRCwu6MVvlIOi%2FaU6pe%2Bv3qfqdLpW34pgPK22KEJN4FWr5PA5SFRt8vnz4G2Av9yAM8BcnRTtqvhe5BO7e0xjvzHbiI46sIKCz%2BuTUuSi&X-Amz-Signature=a60484ad92746fa5c7c1841c0967848add3975e9c6cabc10ce41c247ae6be5af&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
