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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R74ROFGP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQY1EevMZa%2BBInqbui1DjeOFVSHCJoUw3zDtL%2BMKX5zAiEAnby2c1PY6%2Ftik%2BTGtvgOKX7CNgacthI9mXZnweoDV48qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIF5YmYRFFjaRUL9lSrcA%2BxfdvJbLzK826AKKthVYxYxR6Ew4a0hFhAL56E8E25x%2FLngn80Hpre5Aj4OVwHSSyelW8vW5Ush2BVd9X0VoNQjVD8rzjQisTGFL%2FTlmaY6uvDca7PFWC7Zp%2FhTTwKJJ%2Fx6aA21wePob%2F5dEs8lY2HYbYEPshJ8fqfyzT5yFgUDlSog4frNUsZMti42lHafuUTK5fosPcheAY5Gy5K7V4obzZyNMCpDn5seEME6YMBxcYa4N3nBCXhrRLGsRl2pPLbEe3DnexJf67AnQwEDJgtyuKc52A0BY%2FMS3CR131BDLd9RZYegAI3nkjr8BI6aSKqGZboqEifdgg%2F5Xkx7a03VCDkFZsNFtrjK5PJ4KeeD0pQOEmBbjbHo1O0jwK%2BGJBP89v3%2BRprLUYUC%2FoU%2FbgT0Cf8pbg2n0rUvNGlt2OXtbIvW5E0syWBsekImeh5Kw8WHfPU4qdsxn4WBPn2xCD26XuOQA3Z8KDEa75iZwv4YFA6Pm2EtHqzMhXtLLyfNxy4vrEUm9X6Ve5sgqHjzvhI0KVgqKOEQwrOZmd2ieruMgH%2FiJJNZ3dbmB6u%2BocIFfHGRnXWC3OBRPSTEaUmq1ibvwJ8k1Jy8xyIy4UgEiE7m09hDa%2FXk1V6NOF%2FMMP%2FQ88MGOqUBh9jgsHLiD9IKNH%2BR6UWIrfu3t5X7I8W9xN2o5foLpwTyD67%2BqxHB6Sk%2FSJIfm%2FkJktc58vlik66KQ7KvX4sV%2FeSdGSn1oUVzB5gO9bbsjmw2TN%2BwgVPVsodTt%2FavGnKEOUB4J2vM7sRqxfo%2BAL%2FxySwpiS%2BUQcbms7FQELlnlTc922KhGIBGGAp%2F0HA9o3LwUA4WC2S75s%2BlbS%2BTGLhypD4rWIRj&X-Amz-Signature=a2af8119286d3807fe709f8c3df41193d53b32e59a728b8605e8f87c48456784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
