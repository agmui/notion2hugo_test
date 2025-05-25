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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644TZ4VNL%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIGCAtQ2RQMkaxG9eLCzc4TiyVCJK7HYpVxNMFo9bHH8MAiEAzRTg52giuY1SJJU5JFbNrEOMRASHmAiym31fKBQc%2FWwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIC6kAD7S5ErEreI4yrcA9Cd7Mby4mviWerZd8Xh9ov9tgmpu0uD3gpq8EaXsG7BbOXEgjjoBBYCl743JO%2Bg%2FBXAcmGKlH9yM0eMQUsYhMGhP0vYq223itYPHvkrY%2FSdt%2FY%2F07DBfKMK4FT0AGxOlLIy1ON8icJjvtFarR5Bs77RS%2FFnP7VwviY%2FvHIYZ9J8D8fdTvmCVUv0UTzSaIZ8wbYqplWIRlvHOfTmlA%2BmWplzPr9oZf2Wmd1LKoeHne%2F60qd2TzN3L462dYXpUOUniDisMEH0hlO6EgSDXHoUXsWmfk1w2vInKO807eOH%2FmQ0EiszZnx4TMYAR%2F7q2W2bRMVybdiqZwt82Gx%2BgQ9VmKbhh%2F8e2PheIEPM5U2nMFQK75crdn49KEDN2VFWuNLbKywglkoGBAqT%2FFkIFiN8hgRiA1AILx1TWjnQFf4cRkJPN7R%2BHaP4TKV2XdQQ%2Bym4vU04AZVLPj%2BpuplxJXHmV88nOCxhziSVzZ5BU0nrUzlvYt3srWEnouY3bv3tk2dGq86v6UJxbNen5%2Foo%2BbfVR6yI0J1J3DTWi9gmnKO2H6GTDYrXY7%2BKWR511BZwgC3uQzf8eY%2B5%2BAjMF6GOTGa3NDD6oNgaVZg7cNnvs7XvxS%2FbjX4WqMediWetB4mHMJGQzMEGOqUBMg5co9YtCfdLRfzPlMyG0G3xyyWyMQFqBJhd0AKNvGEctNG%2F4yIv6ZctAmeOKflRHrD4Q8ckKNOk1jCqJGUK2ZSziTYOdm9%2FmtLFL0H63bBWdBXkx2K%2FWPU0xHPCEhE2IXGzh8mMidqIehjFsIsAcnbL3kgwqVRwKTMNeKI%2B4rsbgxIgfABMWe16TON6etEjMDKAitfhd5Lsj%2BPcesF%2FdgyHIf%2BF&X-Amz-Signature=44b64b9156aa515a2b539aa6b5c2c2349cc07801f0658f505017494baf17b8d7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
