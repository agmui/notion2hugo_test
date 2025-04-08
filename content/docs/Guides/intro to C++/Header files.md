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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQUO5GU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAMqHusWF1F4Q91Xew5CRVOUHs%2FLajna6ZdDk4gY2gUAiEAwgkfUYvt4qIDBN1vfotR3gNzSZUDC7ZHxMWY4tJMkQoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDL1z12tWFupGs4FsjircAwmZIkOTi7OrXuwm9I%2FuKE53LYTRrMdaZrc5MccNYHDVLxDNFKV2FtaR3d8sdCFA90LfV6EUmy4kS9NKzb%2BnOV2SbnGUUQeSjPhOtivtU0aCFnX6KtPIeqsRga5gTN11o1l5Tjpdihd3%2B5z0ixmjuf3jsBX1B7DeYgVZIGTFUoHJZZ6xlk3oq9h7WCEW6VrIOQCayZgfCDtCKz53fz5eFBNCw5yZUwm3LnKX%2Bf%2BKUx%2FRU5g1i5M1%2BY%2BdSb9HSlOgvhNkYT2hFAdSvcaTXOTp4EYuBvdvKX9IhG%2BdoW0igYceO7mzAsDHGkEActY8DzVB5HB%2BbWLbM9uTqFM2e8kpzyn%2BuuUymx9s%2Bt6fSfBblb4hhcc53%2Blq67EB2yany8%2F%2B0VFpZ7%2BUoLVDCGvlxp771NcDoj%2BgsP4%2B1fg4XzsWYHWoCI3BNOhJvha%2FhY3Uzzg5XamY1XssCNyyRovracMg9EiNNjdDbE2zPuhI0ASl79G8Iqw7SrWJXCET%2F95D0JP5%2B2ZTlwmXkw3jENmqY4z8axoUcXwF%2BG7BDVaIdd0%2Fw8MTNqG6uzeTujWVALIgin0zC3GGvk9BSMN6z%2FDhF8FXutC7Xd9xCNgHURqFgBbIMWkMtYIEc4lKpR%2BTQp9JMN7X1L8GOqUBdcOuEVz%2Bd4TTQ1%2BRk5lOKHuwT7326l2B%2F58DUdCcLtbDKshh4l9Rm6iRWngb2pArKIQqe%2FF1omp1uynWiKgZMKPmCBWLwUk6DQPzkbmD67rVILDV%2BVcTu3R2SqAHhXnPXZxktOZnNUqRBkMZAL693qMj1Iwe3xM%2F84d3lnc9xUEWwD6VYQ%2FJv9L4rrv5xKgDwDNiyvi8Z1J%2BptACkaGBvW6hFlxf&X-Amz-Signature=45992f2ffe7491153763ab8cae43e4190e2d390122ff254712a856826d865dd2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
