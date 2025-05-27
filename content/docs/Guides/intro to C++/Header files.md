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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635G4GT3E%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrAo9y8EX%2BkRI3s0KVmTyDnTh1mRevZqAEZ6rYs6ctFQIhALoYWZrMYlcEdlXMplPpPJftpsH45uc4Y4UwT1OFndV7Kv8DCFIQABoMNjM3NDIzMTgzODA1IgzGXOadG2rToLO8Y5kq3ANAedv5%2F5noDne9Fvw8UXZW%2Bdcf%2BdEogjldWFuUPuDwFz3koY52qd5at%2BoyxDr1TyHrk38ckbSTgvaAVgztnQhYjk9hy1k4JQzmOgaj%2Bv7iPFla48XHYZ%2FHyJ6nNNcJzrWoe4Z8VCtvXV6chiFU8FGJcRvJ1Cj8V7feYyfKFpGiu11lawFdf3z08PmItI5fFd10RqHhcfUOFSkWwhgSRXy8tWBAEu6onNtxSX0cSTytAhDFiWfZjkNuGOdRWGpFUXJIiJBcyt9XP6I7KLtW%2FVU1SOvoFQoNxTrb1t7ThKNYFGgd48T28Iuo8mxXYaSQeMaKsGvpUmmkF2tjPmjEvYzE91RN2IXsyg%2BtEftiPLTinxJKCfkqIv5nwzHb9GgLRvFfJpPruRMP%2FQC9tRDqg2YJcrVbkRpZjvwLrNoiBz5mZTRcrpRHcJRrIXfZnjFBdCx5ymNk0dlXTLcuqUAO4kgyah%2BGaZoNaS9c4DsyHj6IRMp0gMEwi%2B42O1pq10qRltpntJpCRaEczgxfBnz88ZjjkXDB%2BuptJWnoaiO1uChXxyxqCitF%2BybwfdkUWGZ7zkUDd2QzF6HyuYKyWcfkcGe8ORPUiGPks3oFkVWqI4is%2FTQnnXhA9yLu6z5J3TCql9TBBjqkAV97L3FwS0lhBRhob5Lyjf7FdgstdcMCqJAUmN4PTJRJf3LLXM3Fa1KRD8FEyeqpW018uG4Gya6Z9VeGvVTlmhdxFri2%2BzBwFsNARhSfKJ50%2FvN%2BlWKLIA6nP610VmEb6gMYLOWmP5TLOMa6po8XWWsJu8LF%2FJI9qBH9fCNL5av%2BmlzquY8Rlvd2g01%2BfeiLtAn69APmKkvhfkizKkza5I6n7Arb&X-Amz-Signature=4fd42e68b071306ff4790c9b8290f02025398e01b7c8cc07349bb72016218a72&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
