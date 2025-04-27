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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7J6NB3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFncKRTI1wVUeXfLhGOKpMp1%2BYqmWkH3Avgc6GUYbavKAiEAscftYbpS5bb9OT82x3aEIthkVIAUocCL5lZRKnZEG1sq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDAkZhYzLp%2FDRbWYrhCrcA4YKtSUpEatkhDC6DLeCAqo7ZX2EroJ1wvupm1GueUOccPf%2Ff0hw1c%2FsBUOedYvE3cBNljGBu0NOARZGFiXjS6GW8yShlA6VsGpZaywn3aOymJ%2F5mip2wuSt6QcGt2ZVnc%2B4mQdQBN7GQdcyUA4rtKadmKSIr6Ol3Dd1IF%2BW6maMKNQozbiS9LPccuLs542AAnlWaBwTevAc4o2TcE37G8D8vjjdphWk59OtEMVqC8NLQ53EuXXVwyKxbbYc0v6rG6vot%2FoNTWVJhqgnDPfXfuvVRO%2BQnUz8%2BSv9wsz%2F83zCQBtMd%2FH6zqnYwNXK0d4j77d84NdgdmxFnNIUllFns47iuwdbuQSspSHnYoblXoJUepCxe1UWHkiJzbNXXjVklbcMpeky8wrm5wq%2Bp%2FuHV2CxOX6wcCt71EPtJ1Wxz59%2B8iaAmp25FsQQC29KwiyCbV1clJgBFAR2RjfdsYFUSzRiLYvLJ1%2F2jCVrV%2B8%2Ft2CLEQMfJ80wn3pC0%2BgGli8e7%2BzH9qvkPAt3dLRpfgF0%2BkGuMF35Bu8RP3GpVCFlX3c4061nN6zIbmIMICI%2BfbdT6gi%2BdAknz4C4E04c5FCFF7KjxsbnkmxDeiVv4Pe9hkb3aQPIymbJd6%2BDflZ2MOyKusAGOqUBeSBglhRes5H562yYTE7xhKDsQV5hOpQ0K2tENnfLqAstsEocae1d5%2FRByD3f68FAy9UrYQx%2BHBvKJuHuO5RQMUKrq3URVr28JwxajkAwApk%2FwwuizYaCR2uZHw%2BxRlUXQKTzg0lQf1vM6D2WJiYmsXycZMJrFNKDrLvh8RpoO6llIoM3%2BbWyFWUZKfzrudi%2F2v9LzOp%2Bo1crBN49LNU%2FMtZj7t1%2F&X-Amz-Signature=3d7ef7bcdef7637909437ad1a53676ad3f5f4947dceee39454406d6e4ab9968c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
