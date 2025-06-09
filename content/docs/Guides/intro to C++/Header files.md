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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QS2DXYC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpfRhw6U8dDXd2r2ei%2FAnuyoGJPoKR49E3IbXzw89gmgIgDJGzvdjKFglvtk8kvLxM4o%2BtDmhpzpom%2Barft6sEnB4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhX6eW189V9zkbBEyrcAwgTO4WQYYgq0vXI4Agprw2PYNrxDzMKIpyxn7w2W6RY8wPKzCJySu%2FAIebqcX0fgvsVCADElhlgXjjmAo4rZ6L9HrL6E5%2FBaMWtPy5oPuyhAaOoCW%2BpNXLfkfrNXf8B%2FL86UfyCDSZ%2F7RdJxO85K%2FFOKBjGMkkbZk95%2BLkgKOZ%2BwcefQNZWCGBFyvhsm5tgCVmACkIHOJzIY9O0ecyCpPYxe%2BofXnJKLnRYZp6Wt3cecaDl1iPsvaUYG%2FNwLQcFSvrGTfBjxngK%2BJKx05VtU5IUSwk2O4zfSntcWhR2hon%2BsmcMD6lvuJRtzkmTFxV8Op%2B3pxBiPNv6o9M4GomMMldN4vZoWy6a3SEIyJKyBLNAEt%2F70OBvgxkzoq33GeRNO4oB0SBAUxntiheJbmfNH%2FlNVKadE%2FJco7mzspp6RklaCdfnMAzdTDRCC6zY7SxX8rXAakAkCVUCoasc4mBHV9%2Fm8gnDWkcO%2BYQZQa6h2IVsb6%2FLB9ALI7wCx2s7ZEmbGuidTEinS2QA5cvnh3HH6imwNPet6uaJTqt7dheAe635F%2BQKz3ryXswOgzPSraUjJ8y5KfyA3ffywu7d38Yo2UUskvacQynMMbUw5us5qIWkmaTU0neF6g0oHpsXMP7dmsIGOqUB6G6XIOznzGopy5U8qteMO%2FFc8cCPMvbp%2Bxc4MbCKHmVmYjuJYN%2FoBwLJjBZiwq8wuyUUYzbCr3VtbiwyG5zbFMp6kVWNIGzOHFEGSJHH3LXzbFXjwKM5BaE%2B8JUTDqTWdB5ii7SpNu6NbbALtynRTAwHn56qUGKfvOkAPRXM9wFgy3EGGUMfMGhWGOsRftYWQSyrLqbf%2B6fynWg1QegrFX3DBd%2Fb&X-Amz-Signature=9416df03f41ec45bb1c4c13667fd63fce3f7d93a21970a04df22ca2f051582fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
