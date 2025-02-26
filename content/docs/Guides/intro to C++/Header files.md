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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REKMCRHJ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHiSQE8qLUhKGgX%2Bwu8JqOACnUBIEL2%2B4fVqwoh%2FMpAeAiBqk7kD5gdO2aFUiGJfW8SHvFaYuM3XpWZ6ILqYgP9F8Sr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMegLJ4syovQbVBPshKtwDrv0587OoTSesRaIiGDLuVOX3l4qbcb5Vo2blSACz8ReeI76CKG3BrAZMaFvFdnvjkFtyJlQPbE2TwDtC1TD%2FPeQVMbSp7o2EifVfdmSs%2BbIN2zHzLbFlBgjWIm7Qo8ydpRfM6b%2BskUOppJebsXelN4DgP0MHlefjruc09Yj80l6CW66BpxaIJ5F5uGOIGYtkhj5EGFOEF43RfH2A3XNgVEsbN0IOg8%2BwIGahWFWltGZXpMCLNgpAVVyyCGyD84NYWM%2FsVp1e7XEvvPD5Ivt6htuI1tDaYJmlk1DSPKrFmsjBpFqh6LX5rP9wZPL%2F05uXeZ66OnDVQSp7mrU2sxLBUTYwFa5cQagVu%2FP4fBY2NDP92DbWU3Y3PPZFufEYURuWOXO65TzShGYHkrnm64dpJy2BV9iCe2ALjBZMXokwCA%2FwOerK6cpPxNG0tX0Wb3C3i3CGlQNbWIoeL%2BjICwRExPUSqWVA%2FV2PnlUqZ1iiasRsrE6ZZCqyVfdGovrAK62kurKK4pirogJvXdSTAckzQQY7sfB6rQEIDE9Ysqa7uxp9dlKr7UMyEoNX4T21avC%2FoR2lslmQH8LmsAQp18r81KN38Sv6q9hyAWRnv3DpSg1TGAT96yAJk0Rp29cwv735vQY6pgFP9YB4%2BWuuCpIL1Kf1IX0Of7e1NWtK%2FhJbStINjmfMI%2F2y%2BWw%2BwBNPVbHKTns5qgSbD%2Bc5OxOyGOvDQMVspiIa9iqqDeKdeDzw9xnaszNT0kZBewO%2BwWqOhD1Bp7pEXwHvSObkF57JNRVhy4xYoc2nnH1qKGV0MW%2BMthyO1lsFDfTwWW%2FCd%2B0i56miht131cxoZFrKqQDqxwWzYfDn3aL2xaV2PQNE&X-Amz-Signature=82681dd59e76742aaa1616009781cd5b60090f4be2303f85d49b8a787acc468f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
