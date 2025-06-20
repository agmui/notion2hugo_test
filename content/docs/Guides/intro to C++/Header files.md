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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJU2CGNB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv6vNF94qFgo8iBB2cx2jYoI1a4IV18IQoJGDSB0uGLQIgZepVDZWHiiyh6ZH8YcJFRx30KdloiY6l7dn9r60Sgb0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNLN5%2BZn%2FBkLw4EKyrcA75qLcWkh0eM%2Fzprl8NHE8mlcOpLoHnEHRV640tUPzWlYsjRe3rQnPU36He0BD%2B7xL3nZE7fSram94SGC71VQ0hZLIM5Dv8L45%2BLKsWKUfVSjsMlQzMaAxKyuHLVxb%2ButypEUwpXKYVimtp0%2FKBbMUAg9vgpJ4MF0UTiWJfpzeCs4ITRBgguBAQ4w79uJBDfBi8yojywJbfxiQZkXg%2F%2FPPB4uPQ7thYuWPAMfXDW5IEpgTRKVY54mn3t7paIhqNpiau8H9BN3IBqZI3s6j1CR0PfjHqMe9rMRuLYp%2FGjW0r94b3KojJtLYZX6VvPlfiB5flbSDYWhnl8Ruu1No633YqqJJdNW%2BRjuB7xPgEBTU1aEiqbRrR1oZvDMU%2Btwh3mXJDhaVG79j89ImkParhuqtt7aRW1jhKoIt4zpONERfn62h%2FdJQ7X7jUtk83FIuEOUTO99S3UZGGyURxiQuBrw780Lp314eheCc3k3eRkOpaXanfkOzBCuO9Y0SeuDLtNr3w2NR1NU5qjn3ylIeqI0QVho6qe4dhIdi%2Bo3uvdElm9qMpdaYbkeo3a7qde%2BKW1bHBp0o4ztMw057lsKbQDRkVY3SMZjDUJCGhCTWmQHWrLbzzqCM70DZzl8lR7MJDA1MIGOqUBFRyuIzhYEQ19b2vhSF8mPn3XZ3%2BwzJHGzObQQCbCOOucAQT2Unh5A75n%2Bvr5%2Fml5tU6qPbtcJFG6JIQZ4T67ks3CkxpNjXfDpeT1GraMem8KJ%2Bru8CjXXAKFNjb9qC2Fw%2FvjvcPa6VjzeJCxEzcTAGb5LgVTLf%2BQaKS6KhTE02F11GeMW1a52tS%2B75V%2F7pCmQBVNnv%2F2wi6ZJVog%2FSZsyDp8dcFl&X-Amz-Signature=a23546c6573d957aa5cdc59509d346e635107b9766086011dd69c8fed2d2706a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
