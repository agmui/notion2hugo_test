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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AYYWTXA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCJEN0h8h5TrzdcfD3tXpQeBDTSCBFDl2TdZQv8fZUSSgIgKN5WX1wscgIV4TdcrLcUdZWVH35fgHkT1EXiyhqFz60q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDH14nfecRGSt6W31iircA7rzdSWbRitCDPu1QzD6HGoxj%2FKw9rq3Ya7O%2BxVQ1F6EqiX80gZYJawF5O1ZnFllTABjWc6vHKrezT%2FUSmkhDlThvNJZJDlcK381woc2YWieziU5afGiJWn8EDV5CIrKsgJLhov277VUbKEPe0LD2xD6CEouVPqwl83UOdQx%2Fnez%2BA%2BNucik8v1kZ%2FS48gzCnw3VRKvECNwZL%2BiyqE%2FKeCMpjXlwLHwMt0t6jgnMJPiKCt83x%2FdOH6Ln3Gzq4agvirb6p7%2BY8Dk8gO1ZCf8AMnz0f9NBzOPhJK78wRr%2FdNqgn%2FacDz7nygNDYnnFHCHJq74FU%2FqwJPevgafz%2FLKUSHclacfe2IyeJQLuR9ucy5MP7LDFfXTFYP1VEaepn60KJg0uLG0Tqi78LGqn%2B2gm%2BddOMgsrt2rYlgvN41jGSjgt7%2Bcic5%2FWQdjucs9Ru9AUu%2FMZsw46rtIZpH9wJnjp2lVaYKSeCKKFLbFBCQ%2BCxgqOo0kp6nZYII%2FT%2BgboKP%2FbbkbwkOTh51yNowQTYDTsT7ShFAhf5u4X2lEa%2BmVUvERXhYnaz9V9lS2dXPizzleO2VGP07ydmP3nAlfYzN94CtSjRO%2FU6LCYWOwyUzxvVccLoIwA45yuG1RVArxnMIq4rsMGOqUBqTamBRm5BNbRc5Cxlo%2BPAEQdpJxx3RoRUt%2FbEm3CShds2ueUpzfOmHTBZPgmhZmg5%2FjvDpkZuXQLLQmGQ7ay4zkU4Cbb49%2Blxqpku7WrVz%2F3mPNp6NvtLrQyLIjdB3zz437DJB2wVp90mlUlS5U%2BsXbeR80dHel4sUJoXP%2FOPxetAfNvjVer382Rl7UxgRQnpTPse%2B69U2lQjgZrJDQ9LaCNOGBL&X-Amz-Signature=619f1106ebe53107c434e3c0373f75f67434e1436195749ba207478a3996622c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
