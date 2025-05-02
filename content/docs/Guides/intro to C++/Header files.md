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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTAUKF5F%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAPOaIW92rMWLyzX%2F2nukwepwIxT0w4jTcZWRDnj3cbzAiEAqqqF4IegKrVsjBWEL7d2LRTAhtQoqFWskt1qhs85q78qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJ0NZuhALcyyw0qXSrcA%2FPFI%2F3%2BBi%2FPvsEx6Up62IGS6DD9yazWAgTASpiKgidMqZ%2BoTJhyC9iSeJn32YVMUJ%2BBr1sm4nW40CK8aEs%2FkC4W3%2FXtcqYEuUnHgcbkjv488%2FzLf7CwtLxpV0vZxmRcnMTzC8iJSlPZeIPjyzWMp4pOmLevU05HbVHntXweYcMeB%2Fx%2BbXqxx48qtezWa%2FkPO4LK4qxPEcfbgR9YosXe8LoKQDNxiTgejORnJmEQeYODU%2FzddMgY06OQB5TVKbUWcBJYDMkuGTaSZOt4rrAiJzYAw2t9%2BAvY3lGeNXtIaRvt1b2MVVYpjtmLIAVUFQlK74DlAlL%2FtKmrndkMJeMT%2FT43kZpjBBKkDDFrqGVVcxRtXP4wKoMtyJaa8CCmD8ZoIj5p9VzjhC71ZJggE5Itv9aOKHtK7%2FtZhc6oyPqVkHSgK10BVVFOp6%2B9Blprl5%2FEcRztiUdhA2wYwsVCdU6dRmK9mbZ3rNEo08YT2QRrhKzM%2Bz1WaufxyxKcNjj9z8WzuAbKxPqbIRsV3hXaCfSVbJMnghUVvteuIRbgRo23z9TVMkfz0wyEmzmfhlH%2FGmBs%2FBjHCDQdYHp3nhhe4O%2FyLpKiApZbJGIodSo9%2BOrcQQP7q5M6WB9NaYdg6BqzMJHk08AGOqUB2Oosu7zrhMilg5O44ePhQrbEgR4Cvf4V3ou4fsPrcY67WLLQSSUtrS9ACqTvHooeWmoZc0txQuRSlUSyxM7BRK8IoycMn6Tx2oRUIEQ3l%2FUB6HZLsocbZ4fL979YO85OZ%2Fw5p5XcWbiLgd%2FNvDunNHS4dGOL7UyT15nneyZ2F%2FuTXl38tFEtiUZIbVjFaE3chF65sku%2FfppCI%2F66%2FzlFQVRBt5bF&X-Amz-Signature=a1b9a82829d1d92f35799aa6ef14024aaeb4ebc8e02dddf96af108b33b9f244f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
