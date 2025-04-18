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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLCRWM7%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHisPoNxiyBimcGlUsMGuWlw4z2r8axHyjxv6yvcJinSAiB7OReQON%2BmLboOMZK5433228qoBUv7kUQZjASop9Z9Iir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMh0GwC4hy3F3uoPSoKtwDtZjJJV0mO%2FyBkOcaPu7dzqBpQIvzK%2BGj49onFcfLLMjVKi0zj5syLA3r7%2BY8vs6ZjztX6NKgksOFdmmpcNXBE1i2GV%2BWqIAOXHlLcCYJ3sswGdfGxEDkDHOwwATp2aBmZEpYef65ULkIzoAOGe2O2n7Z3coxd%2FbkwO4QtKao5JfIX6ceCTrP5yStNLCiECzPqYB3z%2Bomhqk3MV48P77IgCNvNiFXL2w2YDEX4OFxfEhsy%2F7HPsS27SakxOu4XgML%2FUMFYs6u4pWMqtWL9zIvh%2FLFIyD309aQJ4pUAPd0yJraOZePemnF73T7YOrlnWGq1N7pJtgdZIxr77U%2BUZYBi9ELyblyR1wBgTii%2F8oTqx6P3chYSEoQXRSI6tZAJr2LRlm%2BbbH3XhTxKLJhyCHcRTsdXdgQauCrxtcdj8TnYqpFOnnDSjGo6ydXh0XmvsHwae6V0m6fX2EQkqNmspMfCDKkkN65vi4GLwgRbOrg3jdAet2NBjIV9CW7Zw4KOis6qp11yvhMW4mLSfxHgjzXrbetz4l3FxtWINHThnB2S%2FFjAOsVyE1EnSu%2BhKMDn%2Bfh9k4QjjhKcJXNqHYsbPxzj54djP6nKckA5L8JdvePKTjjM5C%2BZehsvGUB2fowv8KHwAY6pgGN1lma6WoIUIbXnWaHnViDp9xofUXh2ijCag6Wru%2F1okL3K2Awp%2FkPIkw9ys7ncDnKLMq5LMZQGLB5cogSfME10O%2FndvqgUvI0xy6ijfDXo2AV5B4ZEF%2FpQ%2BHb3K56wofQVZgbRn77TB%2BGNB8l%2BfVOcWwR0m9nfIOnSsiOmqWR2O0FaBvZ8hSRBSdY0IMkwyp%2FRT8T37GW75emTFGGGPIZ%2FaNxJVqr&X-Amz-Signature=c9ec8b84d0debf712d65ff7705096c33274b1589b59ffcba4f85df14d8097e3e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
