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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZFUKK6K%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIHHNeVK1L4HsuiODrnBp%2BTDN2RsEMgHGD0RW5WbuP6QRAiEAueoSmzUMDm3Ad7NtQUSFWE9y2nnmjFbUhlsoKsNx7WkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhFRj7W4P01L5rl0ircA4vZ%2BPIKnqvqlODMknGAAjm40EQ9QEfLo%2B2QUlwiJtK0L6wGv5EFOfKVknbjSTWTP42nLuzchcAWla17PiWcqmp2fjrqfsbd8MUo8L3Zz9cIHhPSTMWdqBaSC0Q1Oqt7j2ffjT%2FuO841gxaoAZ1mtkga%2BZXsrNYk1%2FNtb%2F%2FUL1D6ERyqssOcCgZdQ2b3Rv01E3RVF4DLe6OUiEbZv0EPRL42dx2R0vdB1%2BI2zjZV4CULINnD6SKergqnHS3ABvePCd9SbU%2Beuy6D%2B4W%2BnJXlbdj31A3I%2FpMGkwlxvldXtLNVBhwKRFCrFFqUWjUkQwf9X8AoKionD%2BS4Oh9oiMlHYK9Ai80pj2edxuIrSZI4HBg91pSWOW05zapL1UQBACaStxBap4968Uk57kDHVR8IJtwbDPiWR%2BSzhtI4iYRgfraf7pXPLZCU3gz1RRKdpyTC4RYERMjdVEzbcnER2ffl%2BhM0YYciDv493SpckZZ4A%2FBfaKjIYZL1mk%2FHQH4Dr1iSdpcAxEiXs3Ie9wrhKKuwp1UctGtJo3fqZ0qjprWKXtTYFMryrrAg8SOdeqsInswa0j5yKok%2FJnoD54Y2BwLxw86ZxH64rlXtZntW9EymX5eJVT18OsEe22kq6TuLMM3mqb8GOqUBALHNnTqvl%2BwWl%2BkT8FjGCLjXeP%2B0EQo5Yj13ZJUNn9Z1HiPxR9aRswG%2F7n2M8H%2FYfjP43Vkv3Otvfq6cKGSOnLy%2Buqtx7UVxDhiJ24Xv%2F9GnxvWzjwGmpf2ogaaHEDFireyFtnGnwmHK6TyNkmuj1JkEbNFXF0J6HhdIB64PIAzKP0siuvtr89SpJGKjT%2BW69YPAzrmJ871vCiuG0O5B3PFb5nIY&X-Amz-Signature=8203835b75dacd81085b6525830278f188923ffdf7410a9e33dedc117acc02c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
