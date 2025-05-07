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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFNKYXB5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnQskCrDIJsipf0SJ4vYSjvvzE4ki2J7kukIfx7XBe7AiB8CC%2Fg1ouaBJu8nPRvBxVfW%2BgAUP7%2F5uE%2BRPC864IlwSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMeVze8qumtWYBZU6%2BKtwDM%2F2eivVpAtdttti%2BMpYBLbGCxbtEOTadp0RTRLpRz%2Fu3WE7HGR2ZINmQfIpvQfcLRhCkHLoQzgYtjsfZLXa0uMgKKRiU%2BSW0q9aR6X%2BMscpajdSHCjqeyDDTXE%2B1rYe9t6ipmbnRPa1eAMgr%2BpCmAo9fzwHIhkOKvy%2Bpo0tYCI6DmLz0ma2KSFFriuc4mIiWtFcDvRjC97UvML%2BxFWby3%2F0KsfohQHx3YOdp7wn6OSJLK5TCHXwxZjSHL8Z3ta4Lj8qSfSG3HqM1KydVNsso0oZkroEZX7mGeaDJZJlrjbOBAko08QYJXCHOkaF65TcsXXht2gUtJROqYtgn%2Bz2Pf4fWbjXwYoHMK64v36IU5ueglJenz2JwhISbb0o28GjDqhsSK5sVThArwZY1qCeB7RdG9GRuG9iNsyCPhDaiJE4LvtS2GxSo%2BRmLkr7DMudpWqWFh83zk3uLkaTKgGH9GPl%2FIIZOYV4n3n29Yl4sY%2FfKJsMXjBwmXUdoOf5HLOymkxxkTjCZdD%2FjtEd9rBlRUSXmwL7y3Auy4cs0tWurZR%2FeAIzhpb%2BGEL%2B3yLzfFkXIx0hD1RLZPdVe%2BWJWzGuYikebsMBx%2FTFVhIN1wjkgLtOuaVi3P2tv2F8sxOYwq%2BjtwAY6pgH2jlwmF03jurlP751jXDYhjFGGU8yWEnk0kU5EesmBjcjYa1I%2FiADR1RzucoDcC4a%2BvW95IWfu7Dl7fsPrPscXh2HVLO%2FAj9D3lm1DbtHIE9N1MTPp%2FVeLo%2BV2az%2FGmoc5wnLhlKN31VGNSYYwGM0t%2B%2BNnuoq%2F%2Ft%2FHEPTfZc%2FRpG5ijc9nXV3mO6KvnWsE3LoZO9OUM%2FmbspUaeGfbBbQpOJrSIykS&X-Amz-Signature=ef668b127d27efb4649b02d0f0a7e929d1794b00c38d9a8b94b962f719a9df05&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
