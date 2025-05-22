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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZUQCCU3%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIFLfiAciTwg8xSvSK5po4aqYdQjVhlfLbY4KS19W0SNkAiEAqrcbxzIpV5pIpBgJNWMl9SyBUVMrJ9RQTNQ49Y8qKGEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAtT7eFkJdQ1bRnPSrcA0ZYmdQ8thauvyRaLGPQzZFwoQvtjy6wONaOzC1dZ%2BNDFFq%2BSa8e2mNRlk1R3MTFXW9gtzUPNwh7ggkA6UoEicenBQ8BXhkaniG7jlIGobWpKaVMY%2FIiqzyJsM%2FxUfBOpKnE1Cqj57ojzSF%2BSbxdlUkHJn%2FBVXSFHAHipKqEIu8Ibx%2BJew1rMMb3FyWUvOfzgI4YXwk2gtoE%2FRoDgD2DImZvIbfoCHdd8glCC13LlNjhN%2B%2FUPhqu3qWsNi1oJlRvZpy7GFWy7F%2FB07XFiuSBrKi6k6Z%2FuNkopR%2FMukBeGXIA1YltWxonF%2FEbMCEsZxA7O391F%2FdIrFUV1ZG0YKf%2FR7waa5RZci7zfc0qRLufcRAP0rNjR2bwpmtE6Ep8HqPz3GITuHqXx8snDtqSN01m21fDH1jf9fogkIPAroxty%2Fwd3bxqLkCfhBCEcmNAfY0aimj7KdT%2B2yu6Z0NwMoaetgpt8aNqobz%2BWhY8bJYalC38RV7qsTAXWPlwd1LD6bNJBwDkgKJH6XSWF6Mnuo3Ouy5kGBE%2BUNUhhgIH7pZdNGrnBAlf1Zvjzz5mKxvfPUeQrUGaf9Ta8%2FclBJ%2B1hi4y4kva8Rf3I63TRoCC%2FkEEXGFXkkChg9rbMEqE7LEZMKb6u8EGOqUB49Mp5N5oW7a%2FVaJqt6LwtJyIxGUdHUk7ONTWThDj0EUjeWqO3aEVRj%2BYUL%2F8O0PXlids5uO07AvpulivfK5hlJ6OL1qksLdZxNzPE17bUaFZ5%2FhqSMp%2FDK5zd6MYHFvPzoGpjW2Pnt8K6YzWT%2FUvSY%2FyOo%2F%2BeCmhVQaN2husZYtqgeLcuOr%2FVLa8BFCCaU%2BDd5me0Y5FaP%2FWzqyfKo1yqttrTDUN&X-Amz-Signature=6fbc795d1cd56d1adb7abace15da3cd8abfe9d7d530380752bf0ab0dbdc93576&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
