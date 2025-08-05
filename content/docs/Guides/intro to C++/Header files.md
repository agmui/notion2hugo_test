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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKP47Z4F%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBQjRGUNoApBMWsDOjnUYQ6giX%2FzXGEt2n6a%2B0vBFGheAiEA7FW4iipWuo6BA6gXYndsAWz92918xSYiHhiiYIIsV4cq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOLc50NQT5haRRkchSrcA%2F01LZFkqZbUdd9sPGk3n7zxnDnI%2FMOm0IbLuE8AVxSyZvyP6o%2Blb4l%2F12H6HaCcCh2SPwBW2LCEAMHQaSp0Qo28H3Af8UbCvgg1RfE15dfTbsGQpxI9toMND0mBxjTBRXbemz2stFjT9cGMsICqaSPB7LE5Ofdsmhj%2FVUNbE5pdYkEW9JCLPqqnvaw74qtFLdXijuGiQKKF9AdSfR5q9NCxpRSKCM0GnrfWW9h4FDS0zLGU0Bm9d6gViBAATcmOxjMoWuam4Oh4zDckxE0iQTaFOWit%2BKnEdG2mM6LoHCy87Mk4vIuDPNSdNgovO9a%2BGngLFgUoBjzKubndj0hCfXWBkEbJO8Fzz3DyGQEGbinHcLHN0m%2Fm9tLPBUjYP7fYB9uSv3Gh66Xq79pBMp9II9ooCfvKu2XVN7F5EETvvOpV2QZV3XazVmwmPwmads%2BTIo3%2FZ%2FWuhEDJ2JJwu1B%2F1ezpSUNEo2QmfAST6fC6fUQfwoIZHJq%2FnVj0XZKhvvg5%2FdvfvxGyubnk%2FHXUE3haV3CEH0rWArNHgeda7%2Fr42d9oPxkgk40HGiBtVA8StKzVrrjp3sbDJ0l0hpdVnOJQjvLroDi0%2BaF9UlaYmRbSsWkvA3odgaqTNJr7SNpUMP67ycQGOqUBtn2QAmsbHY9XVfI%2FsJoXcMAPaaZiLOw05jZHMtIhfvQUjEpmIX%2BMoYM8RlOG6ncnwQWqQujUoOkWEbvXCUHxfRBUieuxAwer67etH5xyjkKRtG9S7wvs1gqmnjVUJvCiJhhvotuxwFPzjXFsMdiIINZ4wCqOQ55Y42%2BNKyzY%2BHiq5hAjZfgiHucWMhMIfSBoLiYZkESwyfEPeI%2F0ykEW3Q%2Fw2vYE&X-Amz-Signature=4ebeb8b47fa6a1b36d78f7f7bd2332662715435de2ad6eb34ccd11f23ef62b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
