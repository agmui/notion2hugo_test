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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYR2XQUN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDKYdbhVCNcsXrDEX64ULxiuQv%2BjUWXfvymnAfGaDLxoAiAk6c627x8cHwIIC1yhpauPjdJZ0hjsPK%2By0j7k3i2%2FyyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnkLyc5oraBXS2trRKtwD5cImMLhRzC81ixZS1L2aD1QCzSg3mllCKN9RLKqE7jyR3T7nOknvgPH%2BINrv6kr4PHudAPurt3FNnTqhfqvbIAnszTw2IYCTC1X9RgYPjaPZsvGKyloCjYBOZN4V%2BI2ZH24h6AcWu7YABrNxJBhPBn0OTVMRxCM2Fr48ECX0o1XLtLldKUWgpI%2FsdkxA5FHvioQLV9MvJEs%2BtYBekFqHPBejNxwiGE0RruL7amvOEB9kY4M51svbkA6B4WhNx2vXZFBQBgeRvSdy5%2BJ1%2FfKv5DRhnl5Lle0FWXLEFkqv8Pn848Gbn8KYvFAYGXLswT2JL1eCIqnO6ntQ%2FOTDNMVuH%2BzT1IejG1h2hmExEYm9WmPcqK4KZtaT%2BHVzNdeyUftpCpn%2BMJSarNnnjlnrC2D%2BPnVu59mVBECoqIGYadevr1Uoe6JQh1iwWDNuz3ceeGPsnAloQxrbdDY51KbL7nvX8javOKThHaiCaaFCws8ADCZDhylO7UW3naxKJnxiaDNvjVHIhzBv728rr%2FoDHztNlpXibee6sbMzKf2RZn0rhPXqcSINv%2By3Q2ZYEf4zlcTtnDxdDtAPstZELWscCC8dXnxEVGALe5dPiq2dv2wKGtSgsKgOoStXa3x3B1Qwwa6HvgY6pgGI25Ngczu7svU0a2n%2Bcq9rKJUlPsyZZoO%2FBm04RZ51ib5ySCihNHD6FKkLPfQG4xX3UBZTEyWkqk3gtJSoSVI1WIBxpMuMkajmkO2MQOinVrle2DsKawWwtmrQoZpXSTsUK6bm018CLUCGIkk%2BauxUeDhCchzt89msB0ti%2FdZgaJoCptQdRtZ%2Fg1n7VSx0pEmOT4loq8xgl%2Btf6zXbOEWO%2BAX8TRSz&X-Amz-Signature=3e50c0f85f63ea103b782482fe11ce8316ef43ac0de13ff12a126a6da7403849&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
