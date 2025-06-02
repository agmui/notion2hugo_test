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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3JJIQH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIHHc3w05VH86Cz7Lr8M3xqjhHkqNGoXweCJ3mAwH4sxYAiEAiAOsP74qzwOk844uoSdc7kXw4P9ElGQGg5MxFKGNTIkqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXX6iD2hWuloNcCoircA6EfX6ExXcx7%2FtZufVUo7diPJwaykFfPydBCyeuomwic580LfmfPtzjtm6aqdwmN%2BtGhucTW4ledGmCVvta7LWF7ULy2jliV8yqMh%2BrYSSMk1tOk%2FWkpuZFZ0krbZCTiWKikLkpiJI40zrFWWoT0vkU3aab2s%2BBLuYxHN1LweOgfcYo0T8PJA8Hs1CTGhzVoCkLrPyvOFfs3%2FCRHl9gca1ynJWDMRHMeTMIUehOcy9967DpNbEjDuMwBaFurqCtFS9k1tHD92HkgSRo0a1CoEr%2BegShHh4uA0CmWb5nwJzUpatiHtl%2F2S%2B3P%2BG8tO2mWFCB61vYy4uDrB8LYAN3pR690KdWqTLNnprSYWTPJmenW5gMX6Q0Qb6%2B%2Fekz0knVFMHIgcuZ%2BOgU1lwizBBkFo8EO7kyG3dsg5VeofXyB4f0ePRtDroO5%2BZ6gTfvCD%2Fn67Py%2BzjrtndG%2Fame04uC9EynDa7uE9Mg2IpyUw3yQA%2BBD6w5gX2S44hFDv5xAb9f2vUhsViHSEJKocS4pAePe2MIugR%2BWusEAIC400i4ZJ4ppgEKhJzj3jzz43GRC6QyDfELvz2pK7OQ6BJx%2Fv4vxmXAT8dWzvTA3qhWy68rewraMFUrxexPbqSRTf3U%2FML%2By98EGOqUBPkcud96LnAZTAZbD6uIm65w%2BP92YUzPO3mvd5sw%2F9cGYdqf5YKLwN93eU77MFM6P0PoicUA9APo3iENeyNcIBMwNRD0c0PVabPEb%2FtKSWg4u%2B9Lpmg4FuBtwawsqTg7glSWcGlIBBy%2F5nINDpjAlrLlgjhduM%2BPDM2jS5E72aNVqeYmnIuEokUisyuteeClXyTq1FFkagczh4InV%2BBf9mwWvYQh3&X-Amz-Signature=c4fb950b60b07b5373cbd31da49a56c711eb5ce5737b403dac3bf25eef89bdb7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
