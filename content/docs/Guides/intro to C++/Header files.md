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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VB66LNV%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIGaeNuUSkqZ8%2BmFRWsD5Pa2cmFqSnOwE02IEyS6wZ7NfAh9pHmakQBER6F25XndC%2BPgx%2BhPWMfvSkzIbXaYjW%2FNZKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzm1SamijvY0fhc9Mwq3APnDYehebpSE01O34WEqrEPV%2B9qmxDI7NG5qpNWDuuOB8vp9Aw4ayXrDMVGiKixhOMHAvrRJfmzWPhzeMm15jjJ%2FTLwJxuiRHvXTSZ1ZZNiq4WYNw6pdX9D3CeAy2%2Brvtz8woybDOitsA25qM8C0JSSqY3xPhU7pSnjAVUj8IOL53oId1360sfInG4j5mXDMUUrx0hDqSiWS42aWqALBrK2RmXUId83zGNVaz0oPo8GUTpj55T5g%2F9UHacQPlBlVhH76ggqE49KcemsI%2BDkVkmbLerrzVk5SpTkE5L5MmeYiYMxOkeykmFbW5XaVxLZ5%2FWV3AnWNgDvd7kyiUIj1%2Bl9o75ka960sa6QRb7Mzu%2Fud%2Fs8mvX8US6XjmfXAyn7ENR4VBTsapOrwqxL1%2BvJ3yP5WRxheykmvcKRz7%2BzHrrf3nfQa8bE815QAesTWaBwmsuKhp2sVSAFuOq6aL5UIqHKb32gZWG4PrGEAB55Ky3%2FILEF6ncm6OPUkVdps7009AHLJlnwpS27OcXVyzH6E287YtThj0te8imJHCq%2FG%2BxQ6S9yyIKZeN25hiO1t0Wzuw6tygpwAbNAukatKu%2FZv9QFd%2FVr7XSebjrPLGRQy5qxckSn3l9WWPqZERtUQDDz3fS8BjqnAZOGNgA%2FM9KN2FkcJokc%2FQ%2BFzfXehRICN9%2BpzsiLcOAL6W%2FbLpnOlp36Dr89b3lh9FtNu6lk8Q%2FFuzbPszUdUyk%2FNEBzPVQ%2B2EO0e8ivhH9H9DME4iQXi3zZhq819cE1daRZykZ3HAJe1juRz6yUrcOTaWK%2F7meblSyb%2FmP7nnhASAwsamLZXCVjocM8qFH3jS%2FnQEtIVo77aKdgHNuAi%2BqYaV3BNxff&X-Amz-Signature=e461c56279ce68a7baa4176943f73ba70b05ec4c289d838240b6179ca023d200&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
