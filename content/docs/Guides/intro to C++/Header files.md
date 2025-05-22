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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLXMI5V%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDFw7%2FfJm67azy%2FCLX2OjMfy0b66s%2Fzchkhdq0DecQWpAIhAOH7CDoMu2ESMZa43DNSkm12feyg%2BR32%2BCu47FrJ1Az%2FKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYLfV2Gk7uFaeS2eUq3AOFVykD1RVIZ7DhFZ%2FNmGnTQO00%2B8xDHLXFRGxmUgSZVOarXLJ3s5eIktBogpEW0PpB8aM9davv1Eh9MKB98cbRasT1EDfpTWLUGzwAckAw0mc80bzkNmARZxvLwLoso1ySV49VoVFYfdh5NC0oC49IiLl0mC%2BwpcQubo2KQV%2FdkRZfoFvCoOWEzDj766ffnX4f4MoxnUEsEbtBH0IwlfhVglXY8hNoZywXWcEo31RjkW0BicmWEvD4Vk7fErsNfpItGT%2BkMcWf9Hzx19XxmYvB3COyOnj7vxSVT5TIjcUNdAYRJmGDde6YWIAcr4T79DIeSr6gDciKMwCV5%2FCpfabQDlvtKRdaJ%2BGP1S7tUpLu8Nmww%2F5vxg5Efp2UPpao9txpTJ0zs9QwNT3sxZyR7FVNg2lUaPtFXFm5MWNPamTrYUVaNUOjDNigQiQvZI%2FbqS4VwCHYg6ZHVjxLXoB%2F7B29%2FxWBl1GZUUKgkCgrS2ReFyrkS4wYFofZihO5OlVqPz2Ysz5URSLEwhDwZ2ene%2FE%2FUrpd3TpLIsQ0pk5OA0k7rm27SvtonxnRqw63RuCVb%2BD3TFeLY4O6xJhgqwhtFKkwiaxa56iT4XXrrcMPrLc89%2F6Lp8pLaseavL1I%2FjCm4rzBBjqkAa3VPmpoiH0KCegWkOC7Kp43hRU5AAaWZXLSRdSsznyls3TxpeX6ANPuFghZ2YzwV%2BbE0DUDixL%2BgsMHZ4LSLn%2Fz5S%2FHJcyppgN7z%2FcHC2ukgevNgcANAOzaD3wsv0w79LcX%2BAism6u1c6uWismA%2BpTSpUeGeodb4%2BVEmlAL7E85lRlix0RuhcAERJGPuWKTvAPulFsqnNvFuRgeDJi96jhu1E7Q&X-Amz-Signature=ffb46ef4dda6008965b6b8db97c4acabe6b2234ba771696b908130dd3c505e97&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
