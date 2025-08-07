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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM3QZJIQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICLlEG0%2FLdOzbMZrl91VUz%2FIjcpFSp7mYDSYnt4f1F0yAiEApO9dyTJYLCD0%2BD%2Fj2vro89bgWmJRKP12UnTClBa8R%2FQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvZiEV%2BuTBTZoQrRircA1XxuTioFJ%2BhtCyvStdureCPrkg8MU98cbRwJRESivh4HphKkFNhb3VZ01GGpO3F6oo8Gr0d8NCKZ725RoILKP2ZB1LoBKkhmsMm1IjhjKeJhOTA4fWMTv6SgK71nTfwue507klp%2BX29ImPMdCjZEIvhqywTlv1bmLgHnJ%2BfPpKQwY15Ya8fScS62DkGTVF0UVRtWaOp%2BkFYBwI508m%2BPcTQ5zbye23CQamhlf8ri6gkG%2BdGDHEjXJqRREpX0MOD7e2NEvweSrUGFLostmMjhH1ev2gqsPIjsLJhhVBs%2BSqxmcUO7wQ3%2F5gGTARHpvBfa%2Fx7QHdZ1sBy8xcqitSxmMXjy5%2FXPAu3nOIw05U6w9CB2%2FBBiVQcOtqYFU5KkBKiz3qXrj63EqwjbmKPzkBcii1zqSiaXrYiiI6MB%2FYfUbdzY1KHhhm%2B1IyVKGUO1%2B0sf7RaESEnecOt%2F4QSpic4HCY%2Be8Ra%2B7wo0D2lpcDXEeUeysBVmRmnRykaxz6%2BkfQr2D2lXmFs5lxzrZg5pHq375niXxEbp1RDjSxLwhbsG5EMQqTJkBz%2FugS79zmljwwGIYwVKrbzf0GBhLDCSjjHr%2Fd4tVpz5DqNLEmkKxUDQHCFBu9ceU66Kb0mMhgaMOzs0MQGOqUBg35rKwl57AhWDBeD9FAqFfX7L%2FZvn%2Btpxp%2BscRGqckxXDFRgulinjCgBvfr5pHbc5s0aTWd0Rg%2BQM4Su6KTCOFMw2DaevHdydvMsFu9E4HvWnQIVg6rIyn0ZHpHi%2Fw%2BguZojcJ9cAUAhEUkjyOGQeVWBdO5EIPLx5nhHrrZdNHc3jZsgIfDUDBKdr5dbdwfTrswPbzL1hUFp%2FZCr261K2Ycntd6P&X-Amz-Signature=a0f2b12182c1f13de40a6383d62518961755aa59021715257a237ce6310f616b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
