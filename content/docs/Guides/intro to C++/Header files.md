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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFMAMWTV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP3xmf952mTyVQzj8qYJWR2SfpBauuSkbnkEcsW7WM1AIgZZk28Y%2BwQR7%2BhLr%2BH%2Fe1PNJExXMsWFsiwbOTYbGd7RkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtH9HQekqpB9Me8IircAyPBnnf3qVWejRq2nkNjZw1N%2F4xuBDA4xgnSp2yr%2FdaU1vga0ePtxjaSjlFXTBHmR%2FDfeNSZ28z7mrULzNUJ8XX6k2iBL1FiQLNPh4K9Au%2BBRs5SMkThZ9rMx2lhclM9Txa47dE586%2Boa3y5o0kAxOYPbHNjPD1Iunc4OYNrGXmadUEafZm%2FAwtIokFA%2BNteim59gBj03hqiytzzobIk%2BDHf8TaT1mCNiqlqH6%2F0Sx9FL1ZaI%2B6veQ34Aqhfjl1S06uYla6pNUzOEQdR49txafeRvV8QkmXAeYC3maYMQkVr%2FplDQ9%2BYX2AnakXc1nAldBOedUDxs1QF6%2FaHxqgRdwBYyN%2BLruLp%2BF1EbFcnO9roQl%2BmicR%2FeO5iZgHJZXw%2FYifHmlKUHcoFV7O8WbAFKq%2FVtYCd6e6ocCoQpZqdTeW6010FPC8x2nPiyDQenDiu%2Fk0LpByJ9VfLD0V5S1zjfV8M1cBrnXxJD8tsUuKvkj1tbFFM9sTAaoO0s%2FWPDD4GkvUz3RhIKH5IyiPINUS4yXaJAW9p%2B%2BGBIbaGQCWEDBn%2Bru8t3Q1%2BM%2Bgj21UqyoqLP%2BfGph1Us6BxUCY2fuv5BErR3WD648iC4kROKxP4zXl3KULW9yikVds8YgvIMOj6s8QGOqUBiu1TSorBXzM19ceGqpyQKx1l8DO2D2ZDo6rulxZXydeobNpc80b8W2qGuIE7o8uOxKREVgwWF29snC5OLY3YNPXF7w9YOvwjj2w%2Bm2l6mmTyTDda1S1rotwYy8vSt2WSM890jQjG7BPmpWINaoKnnpg62RQcpcNROgRR52kXJxX%2BXHZhhqc5D4SoT%2FEbiWz%2BVqpxifZTZUbuqXzBSeuFaeLZkcZL&X-Amz-Signature=48ef9fd9505298003caa9c53f5ab42a5a9bae560cb6a017a57aaf26acf692584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
