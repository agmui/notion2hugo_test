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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LUQK6P%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIA3WIMdP8cABp2mwlosqBd1U%2FuYJaCedXiBfQKACYI1xAiEA%2FYkBt5GgJ1vPQgR6a4RXJuBNitDD%2BEaxgBzSEzKKtrwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7fDQlytEhCLoW5%2FCrcA%2BBhrceZd%2Bume3%2B%2B%2BgAcd%2BGHGOik6tn25hEvQ%2BNK9KDeZeIwnluaPVgU9KPsUpXR8K3tGdCKR4yrCdKCwUozue%2FH9Cq1TsigJ2FzLR8vjINiKSJN5dwlT6pmTXeUccQbedv8fv7f%2BR8JGiXc2M3hj3RwWWhlmfsQ4KKD9UuGhnSCd5A5sMgzzLlkCLeibAFBfECNtm9MHWD6Y7%2B1HjkVSiL6JHri%2Fl4wOohDMnPBlAefIHCgk2l2qitsExHD8nTIE7RGl3KEHw4h6znwVm5HFyWVE4sHYLutPL9VzVOvzugAsI9%2FL1htQNqShq1sJddUmKGNvyhXTTAER2QV%2B6TtTT3jxudXrae%2FMyvgOD%2FEOdOFiHihFXhvY%2BA6Rhw5H1wzz0sUNPqm7H7BgN7MtHXIx3%2B8bOwyLNL%2BtYzp3gsvD7yT%2FmKvvlJN0MRwJv8qgVbsmF%2FBwEEJI7FmIQnELs5BCjEyf6PRf7s74ZFU%2BtBTqTx9%2FV3fram9OetcPWcS2CkeOOxNH1GazQLWhodHBzb3yZNJ%2FsFHbTSwPekfCTLji6yloLu5rCD8fLnIMx8bW3a98OTunQYc%2BU7uiAtVmzWOYdDwJ2x8Zr1l3hkUcuYJE3TlPuqR8VdOrf987GeTMPPtpb8GOqUB2VzQJLldgc%2BkRn0WTldD2MQPKeFOVRtod8t7IFoPjjEzK04RhswurahHeXs2g00Hm1ilLdQbIuT3CHhb1s%2FYmF8moI4f6OqwvOgFOMkmnjtMmt%2BHGrqMnwWW%2BOqlW8NpmEcuDuY7dTTr7pJCD8xfUIOTBkz6GHikq%2Bdw0uZfCA%2FgP0UFpM9du1ADhSDudZqG8xulBgCq2IcrR7UXnKvcM09cQ2Z3&X-Amz-Signature=c3beba0f5082933366155710a93be222507030863e823cf887dcd36b18ab4ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
