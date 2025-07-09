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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLAQJFDE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4HfndvRSRhONnK3M2bAXPUhvjg0EgKx1Zq0cR1f6M7AiBMycEGSbJh9Wv0fn7V2r7TGMHL8K9TJX45nwA4Oo2fBSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5FK%2FzM7j4MS0zSUWKtwDBt%2FTS8UPHR%2BP%2FUpozwOjMSa81CM6hDi7DvJ8r%2B3GKJDLAW4KxISKGXZlqrp6pCn5A%2B63D%2BS62%2Feiy0NwoUPtpMywCaSNNodkgh0Di3XWmvYGJx7xCCAz4Ij24SI5ynPzBTZKX3%2FiEqya8FoaEKMx06n96mgOR%2FQVqNUY2AtPteJqmV5NL1%2FQfoEqRujYVu%2B4WTpYf8QDM7eDcPJ6E6krvQyHrb8cvHKcv9BZRuAZFa2ydKzsAAmp8w7eKG%2F8yc4GD5YkLVCGEEoVoChuJAD8zjQmlkyIRn9JdO1eFTSh0MxLGKy9KWkMVYTz9H4l2MCkwi%2BGzi4ZFnfUDwXyvghlgLy5joUuguPZGdHxJNlHf1%2Fy4WVVMcHks2b%2F3Q5VftS6UVxTLZP2%2F7GGK3ywEYXwW4TNXo3nNEka1R8SCrE9m1j41qH7E5R%2BCrQPwZxK5HlKwPDHq17D2S0iE6hEnoAvNQhYhamcrUT6ih1UG96higH%2FONyLQlX%2BGFxIYNLmuK1%2BrMH87%2BqUY0WvtQc3WVmy2Jczhtr8zwUBW6Bz41nVhWWokpyPBampISFr1Yem50gbtGzoMFolnukKULzfT3vsoOeV2PxRadY8M0mynMrcCyZS8p%2B4BH7XWNBPKcYwncW6wwY6pgFx3Vl5bHeF9rpUZxzyQyTXZeg9C9uXykh6WHEJbTH8tx4SihixDwFP7cyDREpDln%2B4GEEptaemFFVY93PmUeNkvsKUCJaVYWZ6L%2F2jbd65Oa4zVRsjfgY49fBwZwwj92w103F0ycQGoQaTKglpdlhLDSA56%2BJh4YLsKQZ1HyKrwhYxNK0dkisi%2FfwJSYjmXdq3%2Bl4xpNIRiPmf1MmI%2FMgAKE4aKUNX&X-Amz-Signature=3541c1eeebd1acde891d625edcb77dd75de5086f691a532f0dcea6d1b7e90d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
