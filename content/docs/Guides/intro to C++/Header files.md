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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLILAAE7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCPZGkEzypaTPdllYI2MJEKTsVGa4aakWcgsPWrTI8kSQIhAM28Dgy01Vze%2BRBhAtsDTEUw6wLebiIOMJeuBdlAGBU6Kv8DCEQQABoMNjM3NDIzMTgzODA1IgxIecl3GmB8dzxhfj8q3ANiTZ3crrO5zupOh3WK3w2B%2BKXZt1VZIbCkkWI3GJVJ0yZ3UCLrot%2BDzSYEVl5mMUFtqjnC0wiqTpOQQqOj9R8H%2BMi4tS21YjgSKJyo88SZyVLYkl3as2cXG%2BNKRgtfSdcZc2%2BqpbO%2B%2BiCkjL6OQdDZ%2FdF18e4IB9Mxq4cRBO0bI8RrvaGsTptL7GFG%2Fka2CTqOCXmqA7yhE3QFfrlY0oJAoSfnb2oLlWkyDj9%2B4mLO2uzSyZTUx%2FPdrlWo0h4L7m62Zft%2FQti1pWBq7w0KrzXXciaWPjbke2x3wz9G0DsAzjvPZYj9OnREY4IQqHwuyYAOSjWPuHWN4%2Be%2B6%2FpJrS0brv5hSppZqOAKGDneKs5D7ZL3I01TO2SHXg8xHsCXNnDPnplCqjDTqZZX6%2BSZ%2B4EULml77e68W9yvG6YHGoyvwxw3vy2ZKkBPFhiZlTG8Vn1E76XH7VXbdqA8BCXzBiJlq8SO7NfPc33393vE9HEEYw4KeqbhP%2BzKhRe8o1mi9M5mBo9ZiETT9z4EgqPRBLksqCIirdF6HBcBNEDNc4QoLiqnFENYXyR5GQG247P8g5fLmsJduBSuI3K0dMR%2FXmP4%2BZdzu2iWBFqPesYVNLh%2BaUPy50T2SGMHvrbmMTCz2djDBjqkAcR3MXIgA16swx5XAV%2FQhtW%2F%2FquRjt0naEtwABdzoZtbdhr7ITduJeFasrS1EQabRc5rldNIZvUGgj1Vm%2BCaP72GmZcAr6TExOwsKZ9If%2BQzdv2%2BuRelwQafoZfNYmil2XbMnS0jMWcZTQi9I0QI0BvDiCNwXRK2PSj7AvU4l5nDscn9v9mGCYK0YgYulY4pb%2B88LgUQTj5uiIcSwC5wVDbhJksu&X-Amz-Signature=5390b0e61be2c101d1a75d032c71cfc63efa22b0c0e8bfd4dca8f9b9ead8e586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
