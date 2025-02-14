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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRJF6NIJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWNsXDUCiIU8g826cNWk%2FZl%2F%2FoAGJjn%2FpuugGyfWxa6AiEA26zNUDjD8HUibhrSMfedL770vTgRIr%2B1Wwv8HIlTlFsq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDPJYvYKj%2Bt%2FV%2FeLxNSrcA4HYWX08syuVZQrw%2BjqJ5zk2DHMePHpYLEdI4xR6tZLD2gFd1QH7WM2xIAoBJkK5OAzG7u1LM7MHZA%2BGmWYsjQ7au45FkeTltYAte69qNQeDqEd1jPA1uiTTF89YGex4SVtVaQnGbS2kPCdiq5ZMDTTJ9lcGK%2BKxWrg4NFaXSgELDovrclySLRFpHZjJNwf0GAZmQb3Cav%2BjCl8v8oQk1yvf%2B7EA%2B4jHRlz4FgQxKpttaVsmBjdsbvrkkBehh2WqJl6fPA4vSt2p7EmqCGHGsHQlQDsDZS0tlLw68FnzqgpjEzqT8tHYMvIIKIQJ%2FPrBmrbw1vjT9w%2BEJgQgODzEEXpg198fYpDDcUnYmqzWF8pZU%2FxIDNUTfbcL%2BfD%2BG9VHUiMGnyD4JTdT0sX2nn9uFwZS%2BqYsv2Gn6v5iXI3Qgm5PIT%2FgOL1Y9JA%2FPyUmczDEiBKFiICo5t0RFE6aBZj1LTHYpV%2BR1jborIYEp6%2BK3ofp4CDdGwNsHrW%2Baq%2FoyM62iXJ34h3g04GCwgj7DIf7Yv7jU1Ec48nF6TwAlc9jJrcXw%2BFxhQ%2FxFWqU3bhu70fI3gB9aJlolKF8MjgeMV4io04y5Tdb9xVfq99S5DIZO2MS6XfGu3r62DbZXjq%2FMMSDur0GOqUBkDJXWBtwYRYROeAUc63tvg7tiwAOyLlzz%2FhJ9trwS7%2FITiYkW%2FlJpGzsJm0x5%2FAUWfzZz5dwRZbKjxozkUPFXGUmMAr1dsmxlIchNf8IRknnoHnORJSLfm0I4kP2rDmpmXlEFDKLCk0czN%2BPq09IZt6DtT%2BbvxoAX%2FWH5RkHDzEVIZ68arhWeqiVdgqNCiOaxkA4HRN27Uhz10lMGsH6%2ByDcAbMH&X-Amz-Signature=21fa416dd4266227bc3f0fc9254bfd1d66bd7929999777ef355b979f33ed0da4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
