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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675PT3RF6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIA8fP7EDWQ97uBos0xx0CRIslro4iOUJaNt0M7ELLhBfAiEA0jwwy7N9JhrPIedi9nLHW406ceNbtUCSf3WtIG0BAW8qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVLZ1cb1BukwRN1EyrcA2fBvborTCaImaMvQEdgFtFonYIQyU2reU0ToFUNEP0YkF4lREoKwYJ5LiqQl8m0g1OwpgY9pc1gIaKOXv5r9sQdmBTyR6n%2FFDGPHS5R56AMVn%2BMgD4532kNBQ0hEQm6We52to3RTldv9%2BSlkgip3pthITHIpMwGj9bRd5uqO9gEBBfsubW5CL%2F2X7eHls4BBlFV9%2FSREDVySRWlqmKfEw3bKV%2FpDAnEQmO04PlbNm8qNCZVdqvLaQ74s3BY9mzfDsOD1%2BU8GfCbYqauyAGSDlGOl810K49tgLpQXDunZnnro%2FQ2VO7HFLYqK4AHQn0GEGINGwTHten7Gq6YFPPNUty5ekZeV4O0%2Fwh98Hlp6Mnfx339i7MKtBTufziQB6umrx5Iu%2FIC3WuouvZVHBbYazomG2og5rRVfL5DorJqyzIiiF7cagmxguJMqH0tTe4%2BbjzealgHiDh5yEXsklFxRx5TCvO%2F6EVHHUDOp%2BVlVpuDAiV1xakscNeNoBs%2Fi3moe2smgQszBhg5fGbPZFFHN0AcB78jWIAGUbBORfsMG%2F%2B1Si1bbnYLO75ysgWmQwnRl9VfA2oeXxbia%2BiwnIXMJytzp7EUniWzzwuQ8xIxVIJ%2BglGQnFOJFei74vFTMKqcxb4GOqUB4YXKrCY8CgapnuzBPVUH1VGYN0dqD3GsRy%2B9Mf8mVBAg6MyFcwRghiyGtrMelAVAdfXpL73Z3QFXqSIYjVrZs8g%2FYOFYHiDpP0JjZyNIkhj4rWwXWHJDto4K8rG%2FRnTPI4%2FudJHibAsl9SEIdJ46S1iTL62XJ7u9mAogp5DhWoBqy%2FDmiQnF6A%2FQSIVTBuDcgBEQn3RUZsOav5j7idOWxVSdqGmT&X-Amz-Signature=2bf2e633c48a8c0e88c032025ef5c3268933178a2588417bf51bd0f289224c03&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
