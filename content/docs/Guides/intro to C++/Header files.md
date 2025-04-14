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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMVJ7OKP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChSxmMsrY4vNueF5cV9VqpnCuVMMPvb%2BBxVlDRduPoLwIgbD32fFWzuJM04leNjRNyeXdQXPH9lhGDXdQLdHH6JzQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcGuWIECpCDyqMtdyrcA2hpJHcQKme5byiDq86qq07vOT4xfA4obML5vKapqu9oH%2B5MCqCWSgtoOeiqDSB5xGYmCaBHe34nUVApwsOO9VkBeFgdzbSh7tPwJJHk0W9D61Oq4AoyWFC%2Bh5dwsa7cUSFnLcorvywaxLCiJSHFzrG0FoBN43cjZLS9mJL9R92cVZidwvnmJCFTyr%2FGpk8Jg2CB2lCMT7PE%2FonSmTGQNcPBeZXSpXhN0BhGjWmUB02HtnZCPhdPSMdjng%2FsFEK0HKdmC3Tsmms7dVZdBAclCvWvLg%2BNmJB9nb41NGoS%2BVqXJGvuLyWPlJK%2BjLV4O8Ke89ZHlImKG89KkmoZ9X6DkqNE6rwOGc1IW17JLeHcMiOIGOBlD6xUI764cZNm9W%2BZQL6VLl9%2BqnxJ93qOkRgpxZClunpLZQjkpj8VyvKDd34OsgNf%2FXq6QlIRZq7OxVTjwdm8wuMQQVsrOdtQIPc0LYB2Nv%2BvOA3AlpPUcu3ILaVOYDzdr2SvqAixXmSGoIQBRUGQdli5PwxKjeaaE1U0VhguVLs95X0gcu8PbqMw%2BUwKuRQrFNDV2Z3wrRj9NGKjFwh29XyKkqUEuFzxm8quix4vyumlS4QziQyIr17hd0VIHt7spZNHsf3QoJb4MMSv8r8GOqUBRwwvrpwGBOGvjq3nCG4GH61MWs4QIsQPX0R%2Fa2zK90FXhwa0FaflLVLhOYwGZr1gYRzfQcuIY3Hyd1k3oRpxW4m4fbRy084I2tDA%2FmIA2D9XRbV9RjI9ghFLKVObinpzI4bmJzsHX0%2F%2Bre9KNOqPiJPSu5o%2B6aKNp%2Fjk6dSobjkIwyiJ2XTq0FIA6qVHWPjPUgQj9e8L40u0u4C2oMnWW4Ia77th&X-Amz-Signature=e60379b3597e7bb4cb7c4e9c62d789b207d080893b5f3f8a610852fd9b8232a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
