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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KDEFZX%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSGkwtI0GqqO9cAQdZiTEdquehQG7A7ANUj4V3Ej4gyAiB%2Fq44PiAvqDzhsu8p1Oj4qDujR2qDCnqQrliSl60w8%2BSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtaNG%2FJUl67yMjdKKtwDuAvDYvzfopilV4BzF0FTnIphOyLUqDoifOwoLuNTePd67ulpWrpqD2Pa0SLVBUR9v%2BdDLr9oxGlAI0%2Bl8BUtA7%2FLkdmc2KFnS3tJgNdkEll0beIkpotVJE59T5IQNerB4ZajWcHtpApNeeXzn7%2FD%2FbLDw0Re%2FPhAg%2BUVyu8JhP3cVzUsRc%2Bhnc7oJxFWnBPPgI9VckQMv%2BVlo6n8FGPZgRQYvi6I%2BLhDf%2Fg9CsPi%2F%2Ff39J599xK32PsslWXZI5Fb0ZLElmxpLd0fKtb6haf%2FO8WKQXr0tSyrG9wSUCSWjJws%2FUpzrQmfcaGzIQo4i%2BGkKeGpTiVFR%2BL2pVaKTELjIGoUvEzbnkHE9bZ2nPH5k7mn3EUuw0rNEtMsp4McSgOEaPLdC%2BdQxrlYwdkDrNwqfRmtyopOMXiOjfLlG5fCrZovonF7QWQ4eBR8wzR4VRxFCM7Z6KRmGB7eCC2dxEwqJ3KYQp9xeKjY8TimxkOokVITchjNRT5eyALTWXAqLO1ceizAh5pVDiRp81RujqsjUm9WT%2FQlWxAT%2B2a7XANIN3s%2FB67d%2B%2F6%2BK3KhhiLRPNBMKmgH%2BGiqFWC%2BGJ%2FxBN%2BS3hs%2BwnqK5jDce5TFiQmuOtV%2FUdHqE9FbMG5jw6swisyNwwY6pgH9nlfH5kdyChlMF7B57WVwK2EaLnxytnjmGOQW7WVTUktM0h8d78eZxGe2MkAXkWAIRAnb0FzPGuEVM0nVg3E9uohHIZEvbX95SI6SXDz1mimuskCPQwRj3VGmhRfcVs4pfrkh%2Bl7MOT8hH6i49Ca5v1iMOlckDe1PN4Ga9Te2QNxEJKXl5aKEqVEjjU4FmcBuvRArBFOULKqEVOsVOvUce%2F90%2BbS3&X-Amz-Signature=6fa8775f92fe02fd9c6458703ae0494bb1d95b078d0b4f43768268b14c080b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
