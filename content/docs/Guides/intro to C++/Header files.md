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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646E75GXJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSsNolsoCJIxwBTTYgdaPPyC%2BFwBVXG%2BSkPUTBPk%2BU1AiEA6%2B%2Bq6OLchM%2B3bgydGUbJBhEKOQs0ed5VYykInL0Q6rUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBdYQTzMb3xMbBIrTircA7FLBwJufCi7npEyMLZG5HBcoKgss%2Bmj7SH6VtcxWDvIEf9adS0Z%2BTKfoUtS20zCDXDig5o0imY%2BwVlRXjVEv9NyWJSLtpPbW8ND1%2BAlxhyGX8BeLi1aqw%2BfIGgSHLNfjzS%2BPrCjdn2TUw8oGAEjAkFTiZIdbFdwaSe684Zp0t7pgRDhLmC5usB3qlS2A1MT7pCQR123jZVIfDee4uYNAqjTgrbfq4yA8ltgR9EnLWopaVpQVTvlBdLpjfanm7ieKtm1Hainx38Fp2sHn9%2FeFgJzauHIpfyqu0LjWVzQH%2FmnHpIiJs4lmReqX5DC6eH6D%2Fse1SChdt3CEn5lP0aa8WM3bHOYnU6Qcb8BHtQlmvFvdd2PodnjOjIAC0snQCQ7mwFLPa9PmNowJd7s0urvrmwkQrXl4y7ev2mkeyEofE2FzA%2FnT%2FAAG9gbdBCBRJ968pkqzmkQrNMZfZbf7YqmgDD39W%2FAP7skTTsUobQogJbReWZFJnukxfsDwk7xfOqUIyEfznOsQAojaT3aL3KxBqKy%2FiRw2yV7%2F1IqVzdg2AkpvFXTdAib1we8%2ByRIWckmSzL6I2UgjcMMicDm5AVDu4H%2B8ydcTSthypt00ogxGltVUoRMsQtQ%2FBdyHMqQMNHAmb8GOqUB2sYcSa8s2P4%2Bk56%2FJnwCE838MPBSSBYtrxfxz8LT6tiJY2kGl4yviwbTCUzMB3wR7dK995Bpi01YuE0zqtoAjQBYurEirXNJv6ayx5oH%2BbshA8xxG7fVye2ZMWcOKpQhbV%2F8I1%2BqWSxf7%2Flvn8LE6px2tvwxALyBYMFtwAesnjnk%2BsSxxWjiqCnH6GenPU4%2FAGpdZT0tkFMxLHBTwNeP31mjtvmH&X-Amz-Signature=6bf74a1858c0dd893929e474b19564480fbe55b0444281d675b8b5dac9e0d1a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
