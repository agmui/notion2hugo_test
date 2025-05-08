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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DFGQBCR%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaFOiXat1c2PcMpuLYVsEqyIcs2lz4fH3YjFMTtWAuZgIhAMeTHn8o6RLw4nvsnZDHjNUhH3zHaGWPA08Eplp8fxYzKv8DCH4QABoMNjM3NDIzMTgzODA1IgytKIYz9fqHk15B6EYq3AMt8k4nq3PxoLkaE5TarThj6na0HKO7XRcitIcXTxZRHg1RBHdakH%2BJav1SZFXx8TjK0PVRIFSknYooIEpK8mCaSoOrLmdHdGUgE9JSWTPYi25trpt6r29gtjVkv%2BAtuJGMA24%2BeXr1gi5sfAwJhopaIuhbphytbnAczEyKFJAcegqdd7QsGe7STygtkMaMMt6w6Pc8sGRL5nM%2BWRkcc0DoM4ZTK87gRRaeLGvqp8nL5n24h8DxC9U1pIVLAWy0W35sugRFR14fW8RjBJ4vCm3LahnM2F5v3jqCcux3W%2Bb%2F%2BEA6Ph2LlMKeTlsk2R0Kf15PqvN39cwnJXabvBDuhvTORn4WdF9dU7thbbkS4H9lYzuDJreQ3paR9eNiN41A0MMWfWkP5liOWx8adSA42bZfq5rG3RCvpFl2asTK3SjVTfrnUiL2XjKguLg1n9lIMz6q582FEjn2Cwkn3Jzlgy4bF6G190KkqzJmULUT7hGd1GN1I0LLFC1XK96KgAuNVbdG9yZLTQ1AIjeCNCHYbs7%2FE%2BV%2BWnf%2B8TU5FR21smo0MyoFvOXfpda83slRiCOXWueW62h9Bm%2BAgAJuXQmKBgIQ4%2FKQ7MxOlRpnUZGZ7VJ28JhqOlY1jsqtTLRABDDfsfTABjqkAZxlHZkLBe03%2FSfASFRcPkoUmBAyFRy0kFJ3lJBw7s8VpgV3VUbgYvtFAXgHGu2izb8rJxfoHN3LQD6Zkfkmj%2FH%2BtWFwaAmF5rfEuZMdG3V8TW4kUbPozkW%2FqQtoEM9sionEKhdqhBDwRQwpA%2F7dqKkWfe4lnLqZd%2Bc6HVmEvnnhhhvcvT5o%2BGe9fWI5NCOpBhnnFQ0cmgaiTFWco2ggrPADEZnR&X-Amz-Signature=8933c9ca0b91169c24601e1e035b1640383c0f4c9e5439f118160a9f91b47a66&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
