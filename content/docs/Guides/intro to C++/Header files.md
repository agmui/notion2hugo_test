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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYQO657C%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC5Pi%2FXPn1%2BANW2IY1zrCo8X6saLReG%2BedqIKVg%2FUuQ%2BAIgF%2B85WnRuJ9s8YPk2U5EXK4EiR9p1QiP%2BPYfhNIXFryoqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEZ4REBkTH9xLTPfCrcA3SaiiOUn%2FpuvrqGTuwGXHwwUYvTShoAHaU12aExadxmxvaWxciq%2FmCbzY6SV%2B8V7HXsUlln91kMvriTpgaG2XgafVY8pTlJZzRM2Q5UKvlfK3f8GO2xFHuM2W47%2FhKWvsou%2BNNc1lsIlTFAUZ%2F5W2mF5%2FdQH2huwiF5Frz6DbbEv%2FQ7i2%2FVrDg8yzKhXfN8Xn%2FR2sziQ5iA4f29gbfoNtpGNF7oDI3LLiiJCYZo2m6deCw%2B103Fyt7g0g6w%2F25kERB09l4rHl%2FfjlWr6UHALLLnLoE3F6jJizK%2FHszjAhe58%2FNudFCgaQuBh4V%2Bo1bZEwwBMhiLfSV6zv9oCUXhmIM5wif7I%2BseB3m9Ub7x7ykC9KO6xD0Qm%2B7mzjhHeIRbxux4sFX5AX8lICFAU%2FWjlAbw7KAka%2BiG6w3rcoo2Ky7Sf%2BsCfh26gIVDMw%2BmnJPMl4aFXwNXY0%2FwPPSwYNJiOO59X69aGlm16TGUQmk0v7JRSTfYUAoTZXB0Z4nUDhDCouvpXyXlwcNuXf2V%2BIBtpNdUbgUngD0WsoAl5ggaVGwjEchoSC%2BJls2oa6qaCxB%2Bn%2F9MHNenHAKCa4284CtAr7ccxTAsyOZ3vmJs4i1q%2BLz6bwlYR0%2BHOU0UfkA9MKPbxL4GOqUBJZTJDh9qZKJ5VkXBXGGFFg6SOXzwtZ10SNn9Rw1awa%2BgAARlle1WmxWzWxu876mChgiqXYd%2BQcVaKJXPSh6NTD6ip0NNN%2FVIFNIbBcvz%2FY%2F3wDwD07NFW9MQb9ZWCx2s%2FIPxJ5Q0pwg9HHBwfPQLkC4mM5ZpL%2F1wVtnHlH5zQ9pjaZQJfVkeKeqdfV2BjF9ZH1GFs5egGMH5rVnW7Wc5ZA83UyLm&X-Amz-Signature=7a31c1a610448eafca649ccd2ba2a448fd35f7fe25f929af19eebfa54a803e62&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
