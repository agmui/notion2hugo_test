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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP35Y4II%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDm0pN6Cq2Tno5jMWDR4PD6XJYS%2BTGwHcjYhYHLu8r8wAiEAsqhGjv%2Fvces3QNk3YHr0gwmcAvkfEa3fiKHYT050bsUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE0Ptut8KIu%2F5NcryrcA7%2FWAGQll5afE7%2BZ2MFfmmsppSpk9IgWRrOhtTipfICh3jyUpNl%2F%2FvsZhZ65ZKAemZcCiJqN75EhvDChFkBl2DJORe1ItkVnvs4klGtrhhfS3xXgjRvNWeUlqerjDVBV8SVH920b7FRMoTuXtaHyiLDeTckgrUV1xq54ywI6IrAF%2Fer49kQRv5x0daKvTUQrn89a2CRFWqqrIrNxkjXSRW9nm2REVXWRSz3CU7NMpTf1XtGrT22EC%2B1Nsqznb5ZuUilGr5lcD8xSVCd8auW6N9le0r1kLm52swn95TnruTp6%2FLuuxdf2epKnsT5pEQ2DhIUa3WdkaXDiEJKC7NAdsTGIS8B9y7olFd3%2BdddZKnPoC69nZMqGX1jRiAMFciNKz0VBEE%2F44DzBe0KiMTHTWw3XLByoQBYLFnZLllhrZTZgXM0w0DYY67LOOepAzzwU4UQwJHr5jqNICaUrsYc5JP%2FFOo2LvW78MV1yL0xzRM9dcphIW2hyHlwT70xrejGKWR5E1DUfeMBDyyQ7UnA9%2B5WX6l0j0aQbt09U4EcAqPnIZtwzfhS9SK0i4ZPoFf2I1UYJA0fgLboWkHSpLNlEAQvMkVGM%2Fee43qFJB72q1S1gY%2B4CXv1b4fGIETe2MMmv48IGOqUBh%2BPnjMnHBz4sfWQiwWwOxOwpoZ4OEewJWUtMmOJ%2Fbq6Fpf%2BtXDyx6xV5iFx5WalpsKTXzgRZ%2BsWgJWhPWYJnP8xq5capRLCIGHdvuJ7w%2Fm7o9GL8EUQ6ICwCRtKvDhaIFKJcZ7C6nMt63y%2FuTFJyetvicpk3VAtTCXykvavC1%2BOTK4BPC9%2F56IzISzFjE93rjWjlYiUtcCYR86xcfqHbYl896hgA&X-Amz-Signature=9e1495d6d85e54baf8b7a78be3a250a475a3aecf74636f56e0c6709132296eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
