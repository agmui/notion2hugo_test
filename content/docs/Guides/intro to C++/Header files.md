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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676LETAXG%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCID1n%2Fw37zweI%2Bdy3cPuAkJc5oQgecVyUmGliCS9S4beyAiEA4K08Wldv44KPMOl3sdEtBHkSOKlOgTtdr6FUkNUB%2Bjsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPrb6sx7xqUqrItjfircA1tMWkgbRAodm6smuXpGH5SPSjXBY1pz0MN4Cj%2BV8YnrHgytCwQvzCmeHTKBaBriSe5q6WWpMiV9t0tHTnr17GvFGwGdp4dyD356D2tfP8vJkGma7%2BBoyqgDLxkyWrjht712mPFlieg5Ur5Cdvt%2BmllYshGGqrFmHAEYBa2tk6%2BsfZ%2F7t7hLuGUA3626668EfJzW8IHcZ3z0RlGx5LyABAJKDem3BT9zHPsIu4ajdCh7v2A0QonuuD4YxV%2BupRGifdIuwROBID2BSXb7Iqzdj8r1EjJ4osbKc%2FZp3gGp28OCc9R4M81NvvMBVpvN9nOmtq7iTZSDHwZ4X1G1%2F9WWhq3gA2bdgSBIo%2BK3HxPDu4n%2FEk1qEQ8wh1mTYux%2BBHb9Ga%2FCsEgGy55T5XB9EBRCthPRVFIlkdUngi62240Zj%2FMHbrvMOoOVbIDWfJgpGt9El8OPnYuXNmrS67sjSlXfEQnzQLa96XEvONovMKzC29j%2Fs3wnYF5kb02fC7zrHOxpDVVdPCgyoSvWWvjYR7DF4AXUs8spbsKmmtJw1umjoMwL4b6ttinR9R8J5xjE%2FAh%2BR7ivQnGFUf3agv%2FxctmxhuWRHS3cb0YgSGD3x8A4VavVizalpBPHc57u0IuGMLW5lL0GOqUBD%2B6rvgBMV0gDpuQXthRPV0%2BMntKGIUx%2Bcqk4X22j6ucoMsltdanaGQlmHkiur9vN45o8k6ZmLnElosu0ojPzARwRMSuzYMDtofS8ps2cX4GiBI8GsrzXLRWTEyHxD%2FhgnbBeoyb%2Bn3V10K5VaE4Rtoo2NvgAlfG3pGnurYmkeNN6V8LKnq0l1pzrvD3FBkFW9UiyDWSWP%2FZ5%2BSnwcXc9vmQiuUeY&X-Amz-Signature=98ef2413f92229a813290168c6a16b6a0a50c62688429226453dcbf021743727&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
