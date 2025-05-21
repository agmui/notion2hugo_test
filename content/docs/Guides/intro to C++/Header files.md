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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5SJOKV7%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHawuh0UwKoETNiiCfEZhXmn55uHLanaz4V7J%2Fv5ebJbAiBmXCkNqglY1q3Pr47iwLxxsFOrcn%2BYgn0OLweqcAnSWyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIRoZx%2Bx4EOMeYLfxKtwDOn1WdN8ItchqUNggAkv6bFo%2B0LJITuYk4I6hYQ7eGlBKOvsd4IDGEpOn3imrkdYSZJM2sAEHddpF3FdOlFCIKf4FGJO0ey4EVy%2BSDRLy2gX6ano%2FkFbEvK8Oo5fmwl0FN90E9gCdYdUGgrrkqG3AAH%2B7LOymj2th2a2eidHZMSXN%2BbVnYSeDX%2BBS6F0D18ClvwWEG%2F9mDp520Hs3FHEMmovSe%2Frttbhu5qPSqXVLt731CrHLeXUtB7ODYY5O4eg%2FL0JgtBG7RZcjQ%2FeFMLRDvfcWjeNajkSKbocrzKpKxuLa4KcXWifBGOgjtJxfTUDTyHRLzDeiHJFGnKyPMdhUnoqlCrsWLtd5bF2Lxhlh2FOH74Jb1kpgslGuyBYxqAAEDJSTLxYtRX1m%2FhS9MCGjJemSrRTVWRrIo8Na5OVi8BbqIvs2NCWibYlTYXjJrTpvU8rcSuNOmqbOQ4qwDaZUnSQRdTumrB3x0Ijbm6XbQsWsnw5G2GBaRTw%2F7NSSaTtHJu%2BPB1qRZ0sf447mrhqHGfSs%2BxK5rr7Z53ed0baqVsq0EZdxhPcBrIyf8KUGIJJ3Wq7Qko7EjMuU%2B8X9jiqsA65TvSP3x6%2FxdKKiB8A5LNbxV0R5B7raDBu6bkswsNe4wQY6pgGe2pOPaEm%2BLWIsWIPXK86FweFnS8r1BTK9fBh%2FktXQuws8Ud9FglwDhEQ76RWBTFwgnQaFF5yNwLzEeBF9epByJaG9hBfguzjfLzwASbH2S8jyeyYBmr5uYaIrTmGi5%2Fnkooh9g9y48nEXDHVOJ8n28HdNp6JKNgm%2FWH%2BsVCIfAOwkPXmmQlnHDX2%2BH%2Fy3yhAthD0LjCI9AR9F%2B0PAOc4dsQetXGNb&X-Amz-Signature=014c6a29c119d2f33f4e10cd88a4f4183cbf2aaf3b1238c654f6ef788b68b246&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
