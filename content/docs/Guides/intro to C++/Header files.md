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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJSR7XV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFqBKgtm%2FvvJPgf1GyKtyUdSftYRMgCxOGIm4Km7WXiAiAMubrXjIHma2E4ZeNNSpk%2FSpB1NLUK03E4vhMIPpVP4yr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMWDXWkai10ZJt7U5RKtwDyzY5oePEllHWFezyEVfnbzn27ez4rxb%2Bc5hItOjrYQfAQL24XieMl0EjSIbdoAZKcBAcni93xXhCPhQTqXqmzijRBHZDxy0inUHq%2Bym4R05F1wYG7eM4iGxLea1E03zJd%2F1pzdxrMMtNdTTDcKSeDok2VPSYs3Y2KjKy%2BBPO1BuyLpzFO%2BOOKo4IfKpT%2FWZ02D0Zm62G6FmdF7O3kGLYVQkj5k3WWpFL9c%2BP93x5dhH9bO4kuf%2FVYX%2BJMrgCrflKrH2Db0YaAOLImDAVPlxXLw2O0PdcdMrmY6DLR2QSSlcsqhHGW6LxlxW5JzroknJ52sGbn2PXxVWVDjqo8QRIZgDP%2FR5IW3suP90qa5hPhO70jNy3BKflCdz2V6IuYwQMn85sL9OJ56l3x1I7IJkJXSJxjp4XqYpOd67LY69dyg0KhsIDVsokrPcX4Hav2PEwgApmWNgVSQ%2BqW8cfr0P%2BO7%2FWvJG0Z%2B39Aj%2BWG9c21Bqzqn3D0Euut1NUNpwNYPGaCG%2FXmaQtSPnk9p2jx16wvokqsm%2B5tt5CNIOfulva34v%2FxCyjWKPfgK9obKsRHQGquSsWReKilrDPi9ynqWL%2B5uoaJWvU3Yx1RIWX2LFqNyyM1%2BNvsgHBxPmOOtcwqdrvxAY6pgG8wnKgQKAyXt8tJZ4IKskJW31URTA2qHgEGSUvOFD5kJWyVaR9cMxaDHNCqAoXyg61ToY%2BCASvIx02M%2BsJu0Y60EvErIuGbRKBD%2Fj620TuVhUsKILez4i7zdPn0RXwmi2RGyvp3Eb7udoHe%2BWRr3oA47PX1Dhe4Ql0KHg%2FGxFPihN0QuLkgQJX4WvSBtnx%2Bv4xYyIGw12w8LSbzjUIryUY4fczZTzp&X-Amz-Signature=81ef25ad30777df863ebe90bc3225b05b1cc40f91c8107eef70a6c5b520e5aa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
