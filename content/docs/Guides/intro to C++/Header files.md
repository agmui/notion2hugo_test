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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJB3JYEQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDWa1CFqS997rNTClGQ1OxuAInipHZyibWiL3uMBpbMgIgGx4gsv2i%2FA5onz90zJ27%2FIKVtMp%2FNojFp3QHgRGjYlUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFMqcE6W17q9fKMBircA2JkNSmuM3oyZkOCyZsyZ2JqdDjAkRwjS84yulGt2ov4NPZ0ce6YE61ztDkT1XjnxGo3dgM%2B3aNvBRv13O1XYdusvad5HwlnkfVTujoTqUQsQoTGnU7QbVLyeDKBbUtw2Kscva5h%2FUZnSTdlcNZytYiPlkmY9MEGKAL64XJS7zpo90d8CNwhC5euUwdiMzzETEHnuvlNy6liQwEijwhwD3pX2IifXJN2vehoLVOMZWeL%2BpVJEiiBkOXf%2FxgmxMduHInCtQqVhSd7QvQuLU9%2BAzC2bg%2FXI%2Fkys3iY%2F866KELWd3mejoCa9rXHHRw%2FQ80Qx8wvYBi0dzO8lVU%2BVtMv%2FIf0HOu9xF9GhFQ3oz0dLaVEekElRYb7WVVn%2FogqJvENGMVf6ByQBVM%2FS2xRmN5QhOK%2Fc14JqChKsi4Em%2BWBLLRySm7WCL16tN3FnSkxnEuLXxh30KFe1%2BRswqIqx13jQOBgEshIM2V8WJmK2%2Brq1bTEq2j2Mbs4x%2BCoMBKTpUPPSMbXzweu%2FD%2Fxbjg8psQaYMT8Rw0gVo9ax8Knp71I1FSQWKGPvguEiFeMhkIuxr0wnDy5EeYfrS5aVb0I8ObHTyAPaLAzyqR7Sg%2FXVfPm2cTfaN22Xs9KSF1KCBQLMJu648QGOqUBenGtAAPnguqUc2%2F9f31N1r1ZY1%2Bf1CUBF52KqCsJFdDaVg8L344rvCtIAi%2Bonf1uVEqFbqgleL2eH%2BGFGNlUNcod56striTpYT7Zev5GK%2FexbGRkLYG7emGK17Dm25kNdwdS4qqIWQLCRsHYWIJ4Z%2FOf3S4yKHnK6h%2F71l7KazLqKYqlXO3wWm%2Fmw1d7QDQIhCM75xAtZ5Xdoj9nwkq2g6XhPdFz&X-Amz-Signature=2350beafe5fbc3704d4a55d9e60f1dff44b9b01d768510b61e17bee573343c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
