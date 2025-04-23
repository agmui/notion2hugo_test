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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ESFRSVB%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIFBZzxMuYt4cxsRixAqQHUuuYUhpDva03WiNOnk2Ig%2BKAiAaR50H7oZDMg%2Bb1TxSdhE4C2tRuPT2DKG0bEwN2tICgSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbWTxHWLHQuETy976KtwD1XWkR0wNoMBlvKNrY%2FN9Ud1B8Qx9vFnEMQWjTtBd0swK%2Fy1AcujQRx4D6GD9ilnV0w%2BLSfUZvb27458bBxQ0wUphdPH1R70lqnqNz8a%2B5FxHe5XuwTtwANN3qUZE0JxG0mSgdnosf5BUF8fY7wvdNFBYlfItQHRcpvNbh9rsaZVd5sBtBda42WLXAmtReF%2BcCghtr0SGpIGq%2BYqlSJwThTda0zps7RSJzW3vJta%2BsRY7mEvr1QVFU62YSauzZV5rwXxO%2FLs%2BYhNXJMLxqlPxpQHyFJR%2Fu07oTBA2zEOO2v8ugrYf4JDPhfevr%2B4QBDu7U1DywtaN2wusW7D6Wn892RKOMyryrKQWPemqR8a7Egx9%2BVCbl4FdRxp57MpBdezyNNHzM89qLo6g9e0dynhrJ%2BhNWmXWJk2FhnY%2FLBbxYi1DlT7%2BThN0rBnkMo1%2BRsXNsY%2FYZjUBTYUq0hXjbmhDR3VP7kD5YOMGpP1yL3JMsoXqLq4cZzU9LvlaazWCbAEcATUdjWQIAhvtf%2BIpYEvwUyI9H9D97IGdQrODWHY4iLMyRYFdCCLqfrqZ9J3RNNNTuIAkT0O5PAsagL0EJXi1u5c8k7i0nVy1VmK416G0ErBUeecE%2FAIbYOi4xaUwo7ykwAY6pgGyQDvkFc3RWxiuDlhPx%2BK19%2BlfHmq4gyg7UFopnL4d2NJhGi044oJEH%2FXminu02zfM02HR1jc78oH1yt6fWJ%2FVFzdkCkBiKENLxNjzKjFVMgqJnMKHyi5ActEADXYkESVZua%2BFLz66m5d0t%2FsDbUHnMfcKGrEwsYVN5H08KFSmr8S15pSi%2BCxrnD1QAUXceZ7%2Btq78huMaXjI4okBAYXT07k0q%2Finh&X-Amz-Signature=6fa50738831654b007027e96a796119503fe65b9c9cd518ae7f2c3f8a280ace2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
