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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTU4ZI7E%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVgalrWBSig2WIMNM3Bhxf3pMHONKIsMKxqHZfOczbiAiEAp1mU5sXPdXtm218emtcvRVqFJN6qm1YWfGecxadN%2Fscq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHvu2O%2FTvJZC0zhyCyrcA1%2Fop%2Ff2jPY7vhqCtpzAU%2BrlqNLcwyTzPRTsT0QL%2BckLF0i0Od7zVCP8V%2BDepEEtxOVBKZ8E6%2BdA3km8Hy1lC%2BWKo5iyew5qBp3MeBulu7oVhaOLJNFtIxuf3wVEfLjEWlPMMw8umcKy4fypdhfwx%2Fx9etpyCJW4olSHmBYdezH%2Bkb%2FvFuRCYlA9v7mMRIeGXYehpKoWxnJbwUDx23mJokvkAyib%2BjabRu2DIxffARlpjnOrwyGqAcA6D1qb%2FYqacN15kmmgBFjh30LZ7LIE1jKtk2oY82FQWc9Xe1S4uVqO9BulY5w8%2Bb%2FVIgfA32S3fOV92dyCEf3NfXQRnE0NDqsjAl762GJNKyDJBQUOTZUBmR8aQ8pFHp1ZDk0MQAGfEaTKOAC%2FT9IOdKsVN2j6dmhz755s2QB%2BhvuqYfx%2BzEYxX1Wau4%2BPbg%2FGA5H8e%2FJpEKj9SB4244ym1Z26S3EdvPmNlCLclmVKlODDq8YgBdDomTKAuH34jNqPyg4mrlyay2aOAD4BeyBXA532waqJOiKs%2BksUVmEOIHoL3q3CVbhsHOgPIuKva4MLLrOaTAR9FnKmCqBUszrf26OVJwzxABlrJXfCb6yzWQltTCEsJfTzslTuotFb4udkXVJtMMvCxr8GOqUB5omxzSx%2FnuEz5Nxd706QVwnFAOPDnO%2BxiCpuKgGBsQ7G9s6jQOM%2FqbBj%2BsO%2FJDW1s4v2eiO5Ay1c2MXc7B69%2F4K6vtWQTHUtGgIN%2FLiB7hhTMTHS7A%2F1dL8gZrvPN3acwOeh0XdbyaAntf9bjMqoa4szubcrkNmFLS%2FKocjZwqJAefdKEg9TRjpReBsvhI24dsOkB0B3OLQwjivKOrfUWypRARve&X-Amz-Signature=f9aa9152e0a469f493d73424ac4eff3397520d1ce6d3348c1fea1397b501c5fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
