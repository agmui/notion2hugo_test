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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNYRWKZV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2F2G3UgUyK2hmFdNNrHdRH3UgZu4SC80%2FF4nh96ODIgIgakyeiqqDrLxhjpwmC72t42%2BcQEB4%2FxWdJoub%2BN6waZsqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRRITHa3PUzyMe%2BqircAxt5x9zRXAmOMrPM%2Bbnom8PZgCRTHTConjfWvQibN68ScNkX6pu3SZt7JUYjp9xCrHo8jzl7pcMzIpR%2BlAIeiu26tAdVMVB%2FLOcNpIVMMfWnJWNbBFzRB3UiuOem2DI0bA25rrOkl0aUaaEzQ%2FvEb%2FdENGWO4nsMa1xYSFyZS7mEDyBXzfdca5OfXn5FXrpowu%2FeC71og5rCQ3cVZe2VGYWsLPp2jWA1DG3OJg7jNsKTqsaND84ZDv5jLiCpQl3Pmpvc4au8HPN2PfO8KKVZ8ysIYFb7UXg4G7w%2B6US%2B%2FoDwhGjzugnJQBBkkCiI3Jm7yTU%2Fcaa2WYetRxak1er1Y1mt3dcDXkZWPO2EMkh0enNuq%2FS0A5g87SpDDUa2WUIim8o1SGBF8EXYc4IPQeXUj1arDggjHdpuPm%2Fs0BYarbpkeWgPjCNba%2F%2FmTeC7cpNeUbYxlFhOiQavhKnP2MA27UISWmFdPxaDwxWsiQHu2hywrHLtoDf8R%2BRM8f5BhxN508gjbKT5XRT8r41iskb5JplK3suFPI8r4fTJG6hVTZypcwvbP4tTg%2BHUnAr6Y%2BWJIOSC4GYVkzsJVrHtRNpkek4HQCOGDOkpnLnnC%2BOoXbRIKfHRXh8Vc4n%2FxAOKMNSc270GOqUBUevNYaCpryr0Q%2BBw17NNUirg7KP3PcLK%2B92RtBcjdP80CwjqjkeJa5RNqlCCf%2Bbf7CzonlPdFnyIBgcdQwv%2F38u%2FyVcz%2FYMfMX3CTvyVvsRa4L%2FuDOC3Q5L9BMZNYK10xnXhW8aoKVYJM6mMzUE%2BLRZBl169wRZ%2FFYVKsw3XjDxYy9J8U0tYrbES17mbBX7fBEBcOPJ2SzyzMgyirTTWWwo2uiwL&X-Amz-Signature=07493a882b6ad379be9cda3586544df818ae0e6b8abf1cf4df902f166ee2ba65&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
