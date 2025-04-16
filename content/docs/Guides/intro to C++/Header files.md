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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DX3PYNR%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqBjU0Om4vyfOrvkxygfysLX8KG9dV8x0befLFc3qoxAIgZtsHMDR8aqWZcA36FpKqwF0xCUpDSN3C7wiOxif23Zwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL3HkubLBpRIinwX5ircA7HpdGzZ29lFDha5cRH5ovrr1y9ebtwrACepOzGBnN%2BC%2BnYYIMb8ujsC3ru7PeRrs9CISBuJivUonVRzypn9f0wi87pln15nyyuMU3VlRU8mcjI1DLsx0rho90hYjVm3zs8pXupco2HxnF9SowErERunPPQjI%2F%2BEKkc%2BRZd%2Fqpg8C4rhSwwEauZW8VgJgJRaEXOV2YJQofdXNwjQ6fcCQT7QJEaX%2B3gSwZeNu1w54k4vbNHtwwLi3ls5WxKG3fyBOtTU8RxUWf4RZv0E0aCmkaQWrZAeU%2FTufnNh33VA%2BFSXu%2FL62COlzsHZvLEd8RSY%2BtJcstbMpeMMDvSjbxbPuLj55U2UqU4%2BGq%2BCYhN76Lx2YSonxDluDYMM2Cxjncrr6Qk6ZhP2Z4tgjBky2eXwZEVMNpSKyaZIBqaKx%2Bjgj6jfu2ZJ38iTdJQDVjZjfaUUSgH%2F3vWfAW3Su7qZlZAEq7ptrpNijAa%2BLboMcgA0%2BSTan3rb8CIC72qoSYr88hu7%2BCKAbXU3F%2BXlKQMh02fjkzP%2F1fb2FBVUm0RlZY%2FccYN8X9IDsDyDxu0mZEr5kurPLnW3Ie6IJVmmoIBhz077o%2BFf3WljcOabE%2FNe9WT291exMGIyOv23%2Bj6IxULpMOf3%2F78GOqUBoRNwv9bt2H1y5ZdLFCXuXw03vGxcWxJ6kbx3%2BBvf4qq%2FP18ZnHGd1KIv5ND%2BT3gtDUjcwykYf1ljtPP%2FF5uftlbYjYWjkXp7Luh%2FskV3HK8C0rmzozmJsMnMDSRbMOD%2B0vCrrO3kKOwf%2BOjJ7eouu3JK1YIcQ6DVkVUCv9iPKteOqURpghEMe82ia%2F2wdSQULk8qfhJ%2Fhj7YmTYxfzJdh5SkWcm0&X-Amz-Signature=9cb5e4514d8c7169ec56126ef566934b15333c8b437267f8f3c9506f16946f9c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
