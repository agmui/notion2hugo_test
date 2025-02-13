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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNS3VAEG%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOJY0RkaDrT0ZW3iIQ%2BeXDOGKzf2NwfFUW%2B%2BuDt6rOLwIgFYyDWIIiQnd7qTX8RQctPxKi3ucNE4RcqHTPKBl6UrsqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX16DLjKLVO3xUDdSrcAzPazZnxail1z7zLKItutsggzTyPydwB5sjoQX147vvkPnmZuQDhw%2FTlCCh6pCqN3Y9DQcX%2BBP9jjXIUPd5ik5hMHNxovViRCcdS1x1MCE9Uh0VUYhFsao7oleNC1hkaSCxy1ewebF6pthxypqCNcq3MXqERbqx5jy6RZ8IVh6jF%2F6ktXexgbdy05M2rDfP1%2BraE727fSmeRFXAXdZw80hBGqIJGshnLonZ6VLE8HglfxscBJsFI%2FaCbVvkV%2BounCvi1rN1HssVmCT3aLCGz6gba0Cl8WVvYUF%2BJSO1EFay7Y9WuXORiYQpthILYM1IwkH7cF43MuMexi%2B9CBvFFRQpUNs3xMr6kKT%2BjdHqECBDgUD9vHoCbILXmHowVhkazmZMt57LCCZ5u1Np%2BNMp5sQw2QDMbjgptdgCaMbMuklzh5j9HXYju440fFSADRqzPPLcML8TXMh7o2N4dttQ5gaRK%2FZJG1gBtcfydbfCExyfCzEOUINa47y1As%2FZmrMh7%2F3EZ%2BkXN56pwMEgRozfvBSJF%2FpimDLjIxgRj%2F%2F2PbN7BsjW9TZwcfWUglO12dz29Zzxfs1W%2FrxB63IT%2FH9tOsQdoZb%2BKuikhKAqqwV%2FuiIdNY6prSKr%2Fexb%2F49MQMN2Ytb0GOqUB6BzOJXk%2BwwQL8V9%2BV8dzVJzIzhFH4l8t%2B7uFN5jvKXiXG70yZ6uPHPG2902lAvp%2FT0J9AudTCB%2FEgN1qwdypEKPg3wWQCHebmUeULGPsE%2Fa%2BVZU5n6nWWm49ShRYvSLUSwlTtiENXp%2BGSXBBYstyzgI%2BiIm%2Fgo3WeNFR4uZig8rtI3c4GtbqgdrUJkZUhEEmDuEbhGNavgz5IUypkrb5FTENY07g&X-Amz-Signature=2d9d355e823e1393ba4d074b36d11bea7d21369ef0a28d62d31ed25622ffac09&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
