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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKFG42OT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDC1YSV1QIyq7ajgsC0Etb3AkBaogRxsWRw6fqeDnx3EAIgZsiGk8qpLX%2Ft7n1B6zb2yvcuZKvoG%2Bbtrh5LEUbaAdUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLLRArmL14nbZXVpTCrcA21CnrdZjwkh3i7VJhZs18mDWKzX9qnTHOee9rVUE%2FhNYMF%2FOvMeqWPilSoDsR8WBDuCk2r8HpuDE%2B4hr78x90ctChVMNDbbyhHlFXE3J5YW3PK0nnP9Py4b6zW4tkJ0tc0Uo0sHJk2%2BPK6T3akyRP4eWf8T6vIKm%2FFqjiDQVL1em4O0g3Lcq3lITHNR%2F2E59n0BBdWPNskUvbgar9MsOKFpxYvtuE%2Fa79ZN2c8Nmm%2FcVeZ1LnZ6VtqvMlpaNdMcLIr9Sg7IphRV0sr8oQbcxX35uCEnskqx9Jq6WkK8%2BS3tsTiD%2BfFUnqjJA4zwbmO3w%2BdM%2Ba8iq9LsWX9gUyNuUzTVg8d2cnirm0ApyNk7LZ6Lo7Awbub6BHHw7rf1rQ750fzHnFwJvcz2kiH1b1%2FNE5Rr2AdTUslWBZpBJtX%2BTC9C%2Bn5W3tYDmpof5H2nw8PtyWhv2M1YzT5%2Bim%2Bm4Pgb%2BsSnz0aLI0L%2FIZOYve1cwDzSDSdOhIsKPEVt5054YNIt57AsCUJxuyyHpOI%2FwtC%2BSdHGCUgQNEl5OXfxXtQM3h4vhZG%2Fm7pO82sPvzRjgwMRbgOF8gedQMfcTYO%2BQ7lTDZ3bcCWwdUNj6ng0X%2Fyxb83j3VJZcNNyeoMW7jmPMPWcjMQGOqUBZYfUY6VbLXrSreogfJsqa2l2tpuTR19axCG7n0qBWffPEqrjuNPmczfJRoN5QZlZKmHx1IyXO4cdl1Pl%2FPVl7owYAz9fXGLY6ZQKHEldK8o%2BblJe31JHkZAJHlXYlwx7IOSIcPOE7mB7cglq7PRQewuIXsoYA1BaaQSB6SO5PrZw%2BmJJ7YDe1arhS2dJv%2FAKzIyBH4FB9DBntIcSAOcPEbAOMhSX&X-Amz-Signature=bbbedd17ca3f749383502b6bf9fd139d55db9845ae15bbd8dd8c16910355b63b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
