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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3M2L6H%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV0I%2B8bEcLGS24AEcRA%2FRCMAJTmYkRUrLjYyFhD3aUOQIgR7eTrstTxjCcyD6YfeSx58%2BUtiP2N6p1ah5RLiYc77IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyZnLyCWLgMZQFYmircA6N6at9wBI4e%2BdO4Elo7yaXOqqYpCrwtjVwhhO36dkdr13SNAFqkbLhWAg5jBpv5BSCZgRolQXmrTtPUMJTDd7mO62QPaGPR%2Fwr6W0mT1jvuaQD7yv%2FdZ9Qobr5xfLjRRtV8KIIauJ%2F6sjDPB63G4%2B9K60OcyuPWYKSoZhVB9o5wpRE0%2BprtFKAQY5SWgtnWwJknCZnnXhlkTInRL8uXkpJKWpoBatr0bdBgHis5XjxPvZjSXJ%2B75hZETkb4nVLDbb6ArEjb5tT8OCFp2A5lo7%2B6rmYHOimmxjdHXOpAvFgFzc%2F2JcuXIV5M855%2Bb7XF7Eo34yaeHPFSeSrAsGAdVQYsL25WqOTazgDS3IMr%2BzwRMhNJrxSlUbke420LTos2UtmoyWCFwIOLxJMup75476lJwe6vpECmqJGD5eNnErWk2V1VvwERP9Q0ZmfIiz40n7b5IO7XEoABCVUTIIo6LLlI0%2BJfO7pACC%2BvAVk9LY8ixJdfGdgQiWKagXCrhmAtCz4t7FSDsFpac13hcuRQm5l%2FvUQ%2FBdwR0dWxP63z3hfzdcp2XrRFNJ6SzUyBP7QXDoy5%2FnoO%2B4vZlBq2ah5QwuqzECEc%2FE%2F1YFMOTOmh4VssZ0ruE22JHFzSdUV8MMiVsMEGOqUBjJ%2BIiNcPT5xUWGLGMY4jo82WYy9XOI1WVDsSXaH%2FKlU%2BrJsMog%2B7M%2B4116aWDYvRQiWtjcYh%2Bvs5hr3rcdt47TW6RgIApFzaorL4q1FdX7ECFkZd38%2F6TGovH9TS1a43YSIkKYNnFwqmWg33Z0uzuTio3affrpVpA5Olm07TDjD3GwkfKYWCTLM%2F0Hx8w%2F%2B0J94rp243L%2BLKp3ViRX%2F0EN7QhRxt&X-Amz-Signature=36d88e056bd9dfd932312a633efa70009d399a4ed16a252db05eb5126b46e39e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
