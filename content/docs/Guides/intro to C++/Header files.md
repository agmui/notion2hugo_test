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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646NKSUK4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDxeSX00bojq65ZIvPn54mCcYM80uapI59WJ7hCuQ5fTQIhAO74YYxF51%2FWfs2sXzcnW3%2Fl6R8JnQVLQwFNS20bZzF5KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0T9vHk5ORqzjUikcq3AOXkJrkWbme%2ByyvHar%2FrqRgofaUnmxrjXQ3KUlBQC9DYOI3zVJTPpOiaQVleVoxbd3DQtuphP%2Fmm5965dKBsnttcxZbs0hDS2m9Tr0plWbxSWDBRqyVsBorbN7lS8FkgJFO06ID2xdjuBcNEi3oCA5MdAf1fpO6CdjwkkeOU3DkDPm3FcX0LvKKHX%2BoCvuV361ZOthgqDWy5ibaafwRRzyTEDW4fp9WXH6gcly9JFICD9W8MJFgBuEdP%2BeZyJmZ8RbV2N43heAOVE0yJQk1FWG2gNa3SHF%2FFjGytCRRZ%2F97nBdIX%2FDnuRsUKTrn3JrJinR9BSJGDZkGhv%2B9VKyug3%2FPlInYW9kEJ6ku3F8G%2B1IOJpDnm6uGpuZE7g2UI5rRoFYvmIUOqmjCpBx2CY2NPUKD7sjxdgL2vH6K8%2BR0xvBmGO%2FvPPohv6DyBGoZX8mdtjMqckyc1ZbHkxf3AdkZot5BWI737GBQoDlxvDqus0V1jRXAMxP3%2FPzdqUbHCmbJOCAlAhUYi3vUEARggp9uJ72EGIj81XVGpCV6AxhKHOQi2XGg8a1QX3EN%2FAOpyC0zOe%2FNHcyAnRqv%2B%2FZbhwMXeJC7CONV4E2MWrAH1TfoElB%2FK5mBxIUI86re51G7MzDahL7BBjqkAUXSi%2BcKOAKeqAJhbLBicpoJ509CKx%2FreA%2FcTl5niPiP54VXxxOmteM49Zij64lu1iobJ%2BUUk8warRGv52TJJt5%2FUutoRPr3SftZwTn656cV1yk%2B0bvhm9nRWIAl13rX4WY5COsGFZ2Ae3FiiDyIpcyZ2IsZyBBzEqraijZIEZyyZQ6qEPHP2nPHzNyOPxkM7W22WXOgCtCRMsPnH8rT7A%2F21c2V&X-Amz-Signature=4706688ca9b85dbf08fd0a207f78fbdd316926e549e61e6062f6f02e13a45b05&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
