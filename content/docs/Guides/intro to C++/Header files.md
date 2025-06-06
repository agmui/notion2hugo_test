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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R56CNIYZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzlhKVMomowk0k7hu2ldj3N8Fm9VFlK2TtM%2BRkyU3KAQIgDZLfIstQkB%2BUbsdePsCpgcQ4OQ0H2%2FYv6HyvMuxMhXYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDKYWLBGC%2BeQTEC1KUyrcA7mlzhPDraDJkSmlIQArE5CiJHC7qQ3c2Cahf0ogKgqoAF7RfhXZOpA0JwKgaA8PTgE3f06PShKuKBkODrLxj%2BwycUUy798D8Pbdinh4o5Rqo5Mhi62wA%2FPeZMEldq1Qsf%2BunrKhmLs4hdkf3rEKB3RnF2o%2F%2B9Qtej6vinA9%2FaucfMUdsDM9ye9dt8xJurtk%2BVTt%2FO2%2FMYy5%2FLgc8GdxeGrW%2BsE1fOrV3eCGeNj3BqN7r5YCfvx0%2B2iN6iL2PUyUBRT4zs1FCb71u6%2Fa0cjjIhlnBlgpb1sObKbtmd5kAnDJ0oy4JS92yt5tg%2BHqcyftKLInnS1kc%2F7MtPGUuD8z7AIvb1y9CT26Q8VpqJFr0%2BHX%2BwTSFf%2FKFi6Y6%2FuEuTBs7dmxraYkKUGMayC%2FUQBCzo4dCKRWdVEfK4hf%2Bi%2Fvp1G%2BvuWw%2FLpJGd4ju9ctJswHIciULnLk0eL5euwwEhPmRKDcoRJ9IN1f4gaeQhan8bSN6RsAag3CiDuo2BdnZdSJxopsVS37rExv7zBeBfs3KiOED%2BWhblqX0Z5t0AoesPgrF2jaCx5HTptjWxhTlc7IhiT8U9UJCpi3HCAg6Wp7yg0Bp1OorfirfUnL4CoMYMcSTldltOZ2sUTtZgJ%2BMO2Fi8IGOqUBXV0ygM5Evek5FKLeOjhDAyT9Zck9Rg1IZOuGQPEDMma%2FVxcPeln7PEZc1EOtmWeqnho3YT4H%2BNJPDp8m9E2r3e3vqwt40yr58jUU25S%2FAum%2B968ERzf1J0piUW5ZPr8ieYxsbzwHw1y32m30NB5bU4JACPNhkxn5AbXnIlSUVqoVDdJQzGFYGzI%2B3g3DbT74hqkFX%2B5Kkqe4aof3CnVATTdgQ71w&X-Amz-Signature=310dd4c6eeabdc0bc53ad5bec8066938990370433a901c2da34c91de3e377303&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
