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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A5O73DW%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDpvndJMg1znByR4kScrkPLCIUd2IJM2yTG0rDxQekKgAiEA%2BFDjikHKWzIv6p3yT%2Bzbkotfp1nO1vQ%2F%2F72qStsgdwYqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxnTTvs2X%2Bq3B3WeCrcA%2Bd0aJ3ETrDbGzAyBvWsfigMMDvnkvMuDK0kre8J3rCv1jxmybyxzgaJTH4f6vFy7KZePDIMP6bA03NNSrOU2%2FNUkEpUkWZu8snMm6vqDc6APciC%2FtWE25S0WWu%2BIy%2BLVZoWw59UfjTP9ZI7jCrs%2BnaMUJqsE3JF8yGqzdXb38KZUOZXFBvjEKM6r9H8OO2VnxFTnAoE1734zL4XJYGP00dGecGd18Yv4cX9l6XqpvdMTmprGyrZMRpclkbrrHGLSbC%2FpoROgumeps1Ggrei3W%2FyALpPSwMMEx6vLmlB8KNOcF1bC7ClZSrxJThfP9QMQPjTVpDgCNsdGnxvGoUBjC4u2Yzhso3yX0hYmsHl2jikDufdi%2B%2Bu%2F0peAcOERlPQZ8oI010FM3LD%2F5Tl2hTkdeKly1IQzEWG5lbG1aMcefe8h7lLBew07tRbWwy9c%2BCyMBV7Nc6vvLpQaX%2B7IOk6G7Ch8EMiOeHyTIx8BmYGerKxP9Ht%2Bd490g56q%2FQARtr1%2BiTIc9zdcnvgLFDbPq%2BFtdlWwR7ZcpZ22UPyRcB%2B0cKtMyv6viWGQfzTiRFoVE2DwmKhbsIr5btOwLNofq9OIjs6z3bksAuXcvcWIqSzuSxP92I4uyZU%2BSXCSeojMK3vsr8GOqUBFwEwyMlazTstjdCqr%2BCFNBX9TJGo3obAvELaS%2FcgMQ2V4%2B%2Bumf8PscFxUkk0iSqxgW%2Fvav04lyHyC9Sd35d9SwBN05Dln3Uyg0XBTKPg91IhDte92xvn2CmBqDHnnOni6aWG43ZYXKKb1YewDtz0a6GapqgtKnZl4KiSRRdxVTIeA7bdNZ6oWvtuR%2FuGwCLQ8Lspd5Zk9ep%2FmAFdttKeY10hqZ3n&X-Amz-Signature=918e254c51d6bceb0fb93306181e2aab75eb17135c3b49ee81dcd0efa5fe7de8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
