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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MW5ZFZP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGdVphHJ9ZCUL%2BVNSsCDH5Nv5jSENo6hn6DtQ9zKZh0oAiEA4Wv%2FVKlPOFGCuKkB73Zoox2rFTtjm%2BaKJtx%2B6aIvVfAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK%2FR1PnJr461LogQircA9TnCKt3yl1JbCoB%2BH%2Fy5iJqk2oqXw%2F2HzUlXSe%2B7hluD5UvWOx5sCXA6%2BXsbHO4Db0H4Ijcf4BHStP07hNu%2F4i1VGyuNtipbOOZ7wtBz7crLhcOutgL7HfS8G0cMSlFopOQsd9yHvYyV%2BxRyrRcqpxIVXH5FD9Xhw7%2Ber80Ak6JvTncUA%2FX3gm1tPhHMInRiidl%2Brn75cR27bmWD5iBl05pkefWzk7tMNva5XOVAk2NM7ppBn5LcwE302hZo9hGm6zo1kVuq8uQXbyEPxA2wU49zT22h1E1jXgTpgq3Z8CMV2B8ZC%2BKW8IWBhFOfVumKYsalferfcesI%2FXfy%2F5zmNbA5UwvEnbZpgQrtY41WXiYTAeR0ofH4MFrZ3Aq2UhTzxL3cmIj09gRDgqxnsVBKkcrphQ7nP0oOW8EXStgRW%2FfFWCqT39qnBnT4gejXyC089cZiAXNRR2XxnaeRkttudNe%2BM3pchhiW8WJBLmUVbRTl88ji8Cu7UxCxZl4muxeaG7eIuvRLSyrn1nHLi3M0B0EhzqAdep%2BIAxVtPf447tiZG%2FVJFAnEKPPqGE5CPqb1AM2ZN7CGfey6X3LYsg8qIwFApkQ3vH8Eiz%2BDMFoguAsS7m8V133XVvobA9uMO%2BF8r4GOqUBDqwxXBU4FZ7USL%2F0u6yiWRcOuozWeMhpgArsbEzsz4hTtTO5gKXwLfQlZE7x3CHqMH8otk9%2BsSTRK89zGLH%2B%2FZmLEFX2anmBD8qbmVmPiyUPyqR4PoC5y%2BSfM4gu%2BCxxbbVdKuLIU9%2BrpqHPQEMzWkciTexavy2jN9YvN1mY%2FsbEM7CdGmeVFfVp93BYlkZqtwCL3X6oW6Bg48hDBr4Aehmp1UI5&X-Amz-Signature=f1787dd89c0a0d372fa648ac6cf08f931d878426cbb52aaaf8f36026cc98b7e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
