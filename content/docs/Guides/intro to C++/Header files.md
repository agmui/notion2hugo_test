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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQ6ENPK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD5WYFR9eyBtPlQg3giopSDYUf8i5LKOLYpDYkJpCfUxwIgWtx4V2lBomLbrSpKSTfC2NdrHCpvUzoODqIyAdroMv4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYuslweUbBCJTdmvCrcA4e6AzmGS1OVnoYv68VJAoElbEJgrIkRZHFH5Tyn0BEv0Ath6RAesWBcQhEItOHUm22YEqeKArzj5t2JoiVuVYj3P%2BYQj1GnU6emo2eZwOJJ7HoCiZAJg3NFVbkrChhzKzK%2BqKFxoQTM9p%2B39Ko%2BjhJ2FsyS9pqMf%2FEpP%2F3ssBgbF%2BKWxs1xuPN0%2FHFWAul3ANSy9DwsqJ5zzioRSjVljXO%2BlKsD1lLVvEz1ZqUKGlu8eKi2ZoZzGTP2V04Cm2vtnKdDx5ozcn3MhLDQnl5P6Mbb%2ByOpuMkCGPUxwffX%2FiYLFUOZxrBlJJPSvr4yTwCPPCjzuXx%2Fg%2FT1xuB1Qh%2F204Mnp1Fk0L49WxSYNIiiUJVgimjO9DbwRaQmM4GIUAhnzsAWgR0rruURqroOWz1Q9fbeHvAQHF%2BmAT9fQNXVPuI6DFMHJPuPAbTYeD%2BQ9FYqNCsyheB6YMMTvLGNAY3ALQwJtG%2FqHOHKF0Tt%2FBx6%2BmoswGn56RIbTpU1OEPOYpFtd2vvMvYBp3AZ8PQIysL7crxy8gNPTQOOCT3iIB%2FlEDVMYJrwJ1JD45ye1LhVnIsZPtkk2hk9FPOtJsFaZJ9jhJuDDTBDfshNeT%2F8hMgoIFIt2s0LNVIvpieVhkPcMJmCh8EGOqUBuMuSE3pYEAF32V98eiKod1t0W6BfbM3z2AJmiiMcX6MkAzr5pmEL8ghfe9VQT%2BlCx2rm4Ncyowlc%2FIBsYFjvSWK%2BzG8c4CmHuzjroItdHwy032HwvjPz%2B9%2BzDNKq49zMXp6T7qy2E2gxgAqu1KhUtwb2nch8e2eMaKtGxT9sCg1fzWSVrfKWbD6lxD%2Bhi12Z5m2ctfpHBybrHtNNFUeB6J4QNTj8&X-Amz-Signature=0c1b1dd086ccc1ae89b00c9a2ccef6fe04dade352e5564564844db0aa9e33c59&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
