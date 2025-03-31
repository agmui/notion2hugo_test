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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVX5VOKE%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCwUeQR9imYeiR9lWUdRc99lSaJl8Mgjvs5WeXGU%2F%2Fz2gIhAIeGMbXB7bg3CwOO8LT7F3wVbw2EvVYHJgwGv3itulXWKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzry7WYeJ3%2BYgQ7dZ8q3AMeDt2ypQCFclMKCcHx0PLxW7WW%2FM3jrEqvmZ04e%2FSvn0zHkMtEQbtvpwWbgZGoEZPPtfwB2KgmDNgLboT%2F0bJ%2BBB94p11UULqBockteHK6KJCyh6z%2FGYHDf3DDAI2ZhLVBtm%2FPLV8jw7kl9Cl7PuaXNLvp1JOEmuWXM59dEbg5bzfKIC7ox16hWkNL89aF0AsPTcENZWt2sxgcGhM3DRSnJeJpRegVph%2Bh7gNMMTiD8FoCrkwsdBkBYFJ%2F1SfRvJ19xVa%2FxBEyt9OxKmuwZQrIWY2c%2BmnnmJF3TN7QdWTsim0QMJAXIWs8sHvwW7YQJlznB9KbHQDVgNmwC9nzM7KsMbFdygJcCf6e6daXYCeeqy9VnIgeapc1pt24ZmRQ3mkR6CPsg%2BN93jmHVCeHwIrvmZO%2FZ9fMt%2FqjBRNrmzK1n7pF9Vqb44uyTKKJnva7wVgAQRMnvCW35mDVceU%2BCT%2FuE61dP%2BC2HwGJHsRuVFF1GT9t9ZDWQpwBj8SpgcxxbeoDCE%2FRcmrD2QOayxJzyi9sdCe7QKjXPoad7%2BNvP2%2FxC05D9hutXa0d9vGU5gH8JSLr8AE7PSZ4Wco2fQtUZXVVT5MrPVZukSd41PSa5BGhDrH80Mwns%2FolQmPxjTCBlai%2FBjqkAaraC83j01FAbrsQhQSaeyE6k7O%2FpKV3%2BIxx%2BmBHmYJfkYFpvINoOUZlBAHxQLxv1x74yT0ypMCD7bi%2B6UuTOZcbywMKXvq0IoiQEZAM1p0tzRzIu1VmwDjSRe8CfzfU3wjBhSfD%2F30Hk7dRnsktaH8H%2Fua%2FrnlICqSBnBe97Yqn1Dg3g9yEciMRpHPc49O888L6LJSz1tIF7NqY%2F3Mxm9EKK6Z5&X-Amz-Signature=42195e0b25daa3dd1966d2b4330ed8580eb44c8ae1708517f52beca17d9731b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
