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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463W3YNG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDH94kScOdE4nBfYFr7Yh1IHe0dLUE2lQLHKNM7BwSzDAiA609KYh94tRhC3f6KX%2BYtiJU%2FLbWtzOL1MjmWMZTcNEiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgRsZi3PNmrWaL34JKtwDOCIW8wfL2ct6DkoUMKkNVjuDTeabI845ffMjIiBFo1PzaXyF6A9%2B2Xjyet5pe0N6GXzMZisX4D3bfp0UItVOcre7%2BQghGGEgWA6w%2FG4CYWTCw7o8fdl4qjEa7dtiKG3QmtanR0JAq5yrP1b9FrcjCWb6FMFwoVIRMMJGGPHFu0451wvKzIwKkai%2BiRoZtw38EoFNPLPpi7Zxurzg9GeK0kcwvSo46IGMPVspz9OyGBQmn%2FQ7Hr13f9Zq6CU6pDwjyYyN1v7lukUF5AEXr%2B74ZRISyzSRrWj7IYQxlO%2FNdi8dUwAGKImWnhh66Ag4s%2BvJDPAghqmINdWEGs1hmf%2BZ77veVBDXq7xIP052c20ofk0L0wag0%2FqC5iXucABVmv2%2FdQgAzFZo3%2Fz5VYOq9s9i3aqV17mUILvdSUuB89NOm1CPWj6tH6s085XVqnW2NMt1DFP7c%2BvwXdF2sngil49GExcbMs7FBl4S2VQz%2FiV2QXQm9Zs6M0ay29lNRbBS4xLJMlfpE5VmtVked%2FWe%2B%2F99SnixDjmTklLt3Jx17iegB2TjKcZDIAvnVibHTcxvALwOTuHJsV57wznZvIRsePGej%2BmR1CEbxYy1zZLsMgMdmmdFOB4axA3AxofL%2BfAwtcTbxAY6pgFbCZYqHvI%2BBuPPwwZ%2BRNtkiwmq9LEO0sQ7saqixi6BAUUk49aOAjbPgWHbGRnAO3JmWa%2FrQMmc3tduxFR4UWDewn9%2B5SWSS%2F0ZVmc7oLrLJj8VyG6ErDoyVNs2oojr17bdbPYZ1dPnvtNHEqRdyYIhkzFh2k0Spm1ZcHmoCBLAkANpcBjeNGIbuSqKM4POturvaI035YOUD7VxQSTh0tmO%2FkVp4OXU&X-Amz-Signature=51e9853b6ce3b78284d5f6c72928853b6c5ca22bfe214805d0c6f3d030f2237b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
