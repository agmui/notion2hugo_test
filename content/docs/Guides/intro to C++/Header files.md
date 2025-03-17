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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY42NOBU%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCzyp1hZ3RnW2IQ8%2FxZL%2BYb3tiT6y2OrfiOjNwWu7DbwIgAcFzobdcEuxpSHwaz4RwY1BacDE2ONORQ%2Fgw4s0BHZAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFbV6WLnUic3a4%2BDBSrcAwSbKTLJOT9wEzGwMbS3ci4bscGUnftolUr5Jms%2FpXPiO%2FcTSKrKsIzLhPg4w6ttgPhwRZN1zxGJ3o2HBr%2FZHskLRl6BxG7b6b4WUbIk7x8ESiDd1SGAIpAQdm5kqDOdjoB2DUV%2F%2FHq%2FFb8hJywcriatIgRtGjxu5lt%2BCcuMcEXF6ZYDM9wUlXdodazebPHkv8lpxiwLhjHBdPMr1MUftaciLaOzMzbQ729rvtf6Ke0ap7onY%2FZMrVfz0sVg34o9X5oZO8DO%2FeAoqIp8O9ct%2BTE9Yg0e%2FwhJxBvciM5Iy1RPsXhctQN6IV7c%2ByYNhIZR8LueiznWCoggkUdYhTIl4G86fXTLdVpaX89ocNPrXUcUH%2Fs%2FauPBolDhPRLINcIzmSgxVubG%2FHvRXpt%2BJuDv7K%2Finc0Q8ujgIx3VVWV0mhBHubiwWki7XCTcQ8fpIxvwXsCCHfOvjt0Dy3EV9walw5hrW4f9w2hdhn%2FIcMdmCy3xlrlGndWOSi356bs95ICj47cCKlm5C955GlL2%2FxCKql%2FRnqZPdAKWAUwmcMBl2PTgX0az5vox7b2fnNfrNewBLp39ZbeHJp3ZGCKlz0opBKotIrxkx11k01jRhgV2XBmKuFYpEO6Af%2Fzbk4ojMLLF4b4GOqUBIyKJUG8uHyW4G%2FZdAzTW27%2FTakl5DAQSCmwziBEAfaQqS21p2J4lpHnyjRCTsBgKqDTGq5qrPm4yyys3kORld1OBEQeIpyt35wVeKuH7OHCEFLGRLjGuJgr1fuIUtNgcAQqBb6jU1GDnrKHfrdVtiTx8Q2LGvwd7uYL5vLzi33ONc%2FFSZZjIWDnu7GdjxtB7D6N7oz5zMIkmZR6Q3Umg0TGBcotr&X-Amz-Signature=acb64535d5e74415be6ec6b163fa5977e9ae3647b7fe3fa99f7c8900388bcc5f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
