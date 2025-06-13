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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K6AFZVS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCID%2F1vJ%2BFXWdcCym9YvkiqdEddZGJWkedZohgmY9mQ8UUAiEA6RCWgOKzXgZVmCYa6MISRpy%2BNUDSPac0xF03fpvWrEgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAFKY5lf12eC04xpSSrcA0SRw15E4%2FKMoDmObjmwz4OzvdCk0ut%2BfvCNPm8adjv3NYsn%2F%2FOlAvCt%2BvRNsbgQjwLKeVpHtWohx8TbfXre5eqaxN1Dbb1%2BdOt9bvYFibuSXtJBLle%2FqHb0fszaDbXUhlCdCWpxr2Zh3fP88d2GB9TmzdvX03uiHpbnahd3i6OhL6pqMFccFhr5bdTVx4I2MAG3UXWuplfLc%2BrucI6uQM9gg6IrV1x9V4aXFgoa7XG0Q8Ro25t8GOaRg8%2FUlt37GATcrnW6M5SwNmGb6dkezZqygq9n3qQ5dsCl82eS%2BSdjYFFgGTltMPqTMek3%2F4lzgJ5HD1sHzUqIYhqUTur58Z8Alu7boChFu5xieoaiMHpTcxQMklXSQUopInstU7vMYySDegC86gGRU2rJPQ%2BIbIxprv9mY%2Bw3jZrbjUTjAnLt5AjPmUA8XKS4t1DlL4f0hg6g8XnNkV88VWJtT7qgN2%2F8sfkqTbizluvAHXs5kijs3bhkcwoyyz4igudJxFTexLo%2FaJiw7sShrHxARmQs0g81OpW0NAfsPZvXUQqZ5asFUT%2BpyMGxmnwOS%2FSR1VeR%2BZcEaDbL0jVZh%2BH5w4IFPpfI%2F6VHehFI1I9efKi2QY4%2FhzS6C8V4cknk%2FTujMMvFsMIGOqUBGjkTd4LOMku1azxnhfMIfFG5ILH4oykRIiDrZvLsRZqc%2F21HrkI5pcTgWtAzmIFe3nH4MUjexw0IJvXABKVEzcDhj2%2BYdjPO90s1pvJafhOvh3g81bzSRAbRLJPq3mxkwV3JLclv7UH55SHeOm4CIshPRPy00TQimaXAvjBJ9AZr1QJIk0iO8V1V9JL4tOP0iVuHWczK2SMXXlEHY8KJngfIolXC&X-Amz-Signature=a56667a42e0a5df75d73f12193b7a074263537477ad7631c33853a2b5bdd1cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
