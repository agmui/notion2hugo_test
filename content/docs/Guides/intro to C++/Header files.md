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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJBG3DH%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC43gn55QZq4PkA557t0jQxg4rGo5KCiMxWAFaT5m4fpwIgDJZUaiDT66WQAOI49jReUplNbxjy%2FnQmlo%2FftD%2Bx964q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKEBJgh0z2J%2Fp0O%2B1ircA3rCt0lL8mRfmcm8xqnxxWBR1dOuBoaf%2F2eNHpzcDbuD90uLdd3KhrZX3WvYiKaqA1kAXh7Y%2Fd94ghfoEudP6WuAu3f1P0h4U9Z%2FNOrpPaLtBDHbzzPhpQBzGfeGVWwDQuEErA56u3qg0ZjGxvyUa5kIBMjH9%2FokI1wtYhEc2Coe78XRPsXTaHeanKJvfUuvEoUUMCJOyPyk640LF9c%2BXMFWzx4RTmHG%2FKWWACmBK5esSv1P0yxjAe8nXPoN3KRA45A%2BxB5m98x9CY4pXHjcHC0fT4nJYs7XfqBOb1HOJFIDJj96Q8vDLGB0v6w2KPyNhZeGZt7g5VCU72BfR%2Bt4Tdpk7uZcPeFrOi7ovUOLVih28qyseWgVjmSOshka9HR%2B67SzLpqiEPhu2LJjLjOLC%2BnmBR65sWI8oLuT3%2B%2BBviUs9MqCz1wZZql0BuHzGeQ7iMVCWFPhtkDh38pmO3hUfKxabaLf325l2UGuj9lOwfxQpTU9uKiHV6YrncBCiGmSN8wpr907IRMhZLLJwJN49SQ4GCeHx34h5QX2VaH7oPC73T7aMRWs0JwKJxO%2FbGghRjhMo6lrV2z9CprsroiswDwCDv7AURA4PVxyzp30U9vQCY5rgNY6k3Uu4khlMN23iMAGOqUB5TknURBbsrMgkBw0s%2BxCSq4H7W1az%2FQ50sGr6%2Btlyu2PhuT7AliSQL1fi7UUoeUQiWV5Bl0JKPobpWPbimN89aS2liFtJTPB6FSsQw1qkV1uYLE4WkJ450pg80x5wodS24IdF1ytwf2DL4nVFjQ%2Fo71n5aMbP2o6LxWnR1K7E1zvc4pV6OM1H1CbSQ%2Bm9CfbMMMbnA5TYxRTOr8jP%2FlUShAMb4GM&X-Amz-Signature=1e2f93c3bed65804ebd93a26546d136e41c9a9a74f9e1107040156d7c7014734&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
