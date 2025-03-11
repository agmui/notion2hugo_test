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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OXVVFCN%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIE0qeRBrq%2B42bW6UIov1KP7BUoAbfMgXbU294Ja1H%2BDMAiEA9OUFpIN8urh7VpxOQD7A9Xs7UZ%2FPwKABrO9k1QsT7LYqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFH%2BuF0fI64RPY1axCrcA77ATDdoQsY%2FwW3GGv1vVayBpU0JRS8kc2AR2sFRJD4IwR4YkdtAg5pQn9ZUXdciMM%2BLOQge66fZG%2FeKBhFkjtcC6GOeRitVZ3w6ts7IULCzaIlDTdC%2BSfdKylO896Csikd9BCMMDyXwv2T1yzw7uxk%2Bw1EPXCw4ytC5eAFrTrJ0DoIzwqH%2FcpIEpOanYeI%2Bfe%2Bd98MqMOBpUHroT5Qua39EJ94KbEpvgN6RrDPJIdk20Tu37NT%2Fb%2F%2FM80hqKmp10CyMp%2BFe0NXZTxQMrkgrFnO3sl3fofs3y7UDbXCLUthLhQkggDDWxlWzV5%2FFbcqHQDT7JUIZnMK2%2BSVX%2Fd9OWnvG98c6OgV9BAqSVeLvGOaC3J88aXPJtG7DdduzQiKFj4nUwz9FFBeSeINh0HwFoVoOBTqRzfGsHwYEIzEcFhapikKFKi3eaDtLyiZQKho5q5yoA6fQ2yFxVdQNPnxxMWBjc87rhcxSU9N5qRdhscrTPm4mjxIT7pXnhVlHKhIpG9yp0yCWF7HQmPE3M6xU%2Bc4zyHzOojgRCPqYzqtb6qDo7hw8soJXRWk4BTx8%2BReisftojNliQQThPjsfL1KyKhMptV5Nq3OPR4YV8e4RX2GqkeX7Nq1U2AUTqq%2FhMN3xwr4GOqUBQCTP%2Brj7aQVPV0U6ExEoTfN7TsnKB6ClI34QKP0NPxBkDQGUAv4XtmiaNyG%2FZD8m%2FAdOr3PPBcjANIMfmf4Fo77S9EwYvKZCRV603xROVSPtIuc6t4aBl5oKHZg%2BA%2FHVPkwEgG5z4if6h5w1hOJafDocSU7KyJPtjIHHRJgH9RQzOWoMqVTVjDzXLvsXcosuK%2FI5TACw%2BS2vd5Bn4xMip4vu599X&X-Amz-Signature=d4f765d1125de90991c2753ea11ef27051d81a582a5d37c34c039e07210b1109&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
