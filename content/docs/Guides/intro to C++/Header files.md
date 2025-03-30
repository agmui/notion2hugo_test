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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E2K6PST%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDXXkmnb7r26RYso6g5gCr%2BnF5dYgYKWq%2F8AH86%2BH45fAIhAOiBuExusFv1XK4ekso%2FX6q%2Bpzd5Hve9IJQhZHmiIN8cKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeJ9CsgNCJ%2BkGJeSwq3ANkZV3vHRfyF9F6zzGVoo9dCI1QVbu11vH69dHDx7kkiX%2FH6CEog2NuRJ7j5X6Jdph34kqcvmgiBusrHGazSsOHuo9wq0i%2FgZ3zDf3ToXudtN5ck2KhDyZxtJCtkoUup7uPlXlQ0NMDi5R5KR2Ey1G11lRccyDr31%2FPC%2FNAR3x1o3thvL2TIG%2BmZ2BdbgyLF8MCkA%2Bejz6yuA658OBrTa%2BwpZLFjREBM3pnj1ysxj1puxQwAd5ZxNqM2z6ei4Kt1CXyRTwyx048aLDdGic46cHWb2QJxM9g6BsKTRwI2W0HAK4zjdD55argwERxG2xGAnsnyOxl4TIJ9PkczjvgroFBjOcQCTRB6tUOWZgcfrbsw0Av5G6Jj33fYugQCXApMojmA5nh2eXjkQFoGWebChJhfXPQD2aAnUxtUj2ZeRSZYT8JmOY7%2FSpOXoA6eH4lV89aAvBji3Jchvbdxefuh%2Bn%2F9n8Nn%2BxcaS%2BAtbk3ySJG%2B6U03VY2v5N3gFvGImlG3Fx2TWH72raVqu532mluTkeBy%2FWe4Sn57OTPewzdlSPLbYVChHjonXHN7I%2B9LBsBlyOV%2BhvbkYMBZfgqdkjUcM7lTNh8LIt4FFuzEh0SPnL50mP%2FbX30YGGuYWjW2jD56aK%2FBjqkAfwhupIm5c6rlifHJjpfVDTQ6D9RVehhhE2NGEtzgkBSbTRb4y4Lq9%2F3uZJcwb7arf50z4wF6556NwwTZfVKVwV1lCnWMg0wmcq8cU2wEP6PKf7VWZVO5OZw9kL2mgQWmbWaxJU2HoFwDpJMheGFCauzvpDBZbfRdYw0%2BGnCKK1pmjAdjBlNqTEHAUQHPyeD489QG%2BBzuv5%2BQGOJOaiRD3SqkJGp&X-Amz-Signature=ee5c5ec1350622fcc813faca5daaaaa80fa78f299e1e5a285ef08b0b2953ddb4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
