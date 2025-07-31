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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOQOWIIJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzRq4iPSBI3s6yWtGwodu6d7y0oxBBlSS75sw%2B4d9%2F%2BwIgP%2FUyqZ41BYeqo%2Bwan3P4tES8JUsuOVn%2F%2FE9P8wl8eCIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFptLmQ%2Fergbc34c1CrcA3eXxt9xx%2FBOp1e592JDaBMc3zmuP6ddiYniwIz4Ntnp%2BK6vAHUGVrx0s9NQ3dC829Aqg2koubDKen8FlaHyK6gmQo8lm1QRluNEJe4EQuy9t7X1wX7KRK5eu4XCJscEjXG8qMXh7aoyHjRw1rtsBkIbfKd9NJSm6dkBPCNpZxdinyAnKCRLvB1A4%2FWvauCwLunmcsSEJzmlYXNd4Yp5UjnVuJ%2FYszDtQ%2BXVrTvRIheo%2BkfRaoAEmrwWPnzBQ88Qm98p9%2FhLy5CkfG%2B6mlf5pmW06vIFjW0LKpTVgwlFAiemaQdHH7LDu5mjf7iO6EeyCSM%2BeX%2FDnAbaRX4jx%2BqLocP4V5qvw5iT9nU4eWXNUdxmm%2B4ik0OSi3arUS9J2%2B37vFDPoMEA5rOue4yF26%2F9G%2F4DTi%2FI0Oneb0zWCpLP4PY6ioX5fUW0ylSyeXZmkYb0rjmzuIuZ1BfwRrUY8kDkPLn9ZtdD5Nui%2Bgn1x6O9vLkPwN63KrohXMi%2B6Aw6Jpaq%2FI%2BhOmE8YsqThzYfJPwOCIDYRdV7mTQnumNTmrFi3YXHxOH5A8GyZw%2B4zyOjJiZGAASRPdKVbfWShycwEjSRwGf%2BjADzcVbBO1YUcNa1PsWha8S7Ui1zMjLs8tHZMNOQrsQGOqUBCMudBE9pXfoSil7gO6w42a0rWebTCPYvvs80HM9TD8WCL8x0rZh0YKmzO%2BW0M95J1f0IYRcA9lvmsQApZV0FZzjienLtreyElMB9bFbjMnvb2lo9U%2B1RPNNNzZGkoTRsJvnd%2FdcWAXf0DnrR4QnRYX66EMFNxTW3fpVkaBFRQHzKhdK%2BkwchQ1ykmUi9FLPwytbbHbvmsInvfXnjpIcKTLDqyWCb&X-Amz-Signature=f30b36e2733ea345e4e616bc14db7a644fe140972a02460f0eb7134d49f4098b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
