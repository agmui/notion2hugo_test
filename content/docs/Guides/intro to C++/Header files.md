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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H4YUCFD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFv0la5D2cL28ysc1hgWHtv5w8fyi7Kr1YM60RtmAuBfAiEAs8f%2BkI9l8fU8nBy3cwdSnmmQkOnRYMauS5Q9BKXZBmAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPT9BM5biSKvdUQyyrcAyVc8dc1iHtCOpqggpU7jSrCEDYsYQDWiDEvQp8flG6r22tRbb415vDIQnY%2F3tXtEf%2Ftlq0cPdoYVB07XNlu%2By4zsvN0SG7l2RyeQTl%2Fq2IaEP7wwW7zUcK5hu929LdkZ%2BeHW1I5zwiNJk0kULB8JK4K6vZiLXGkgjpEC1vmJb%2BDSs%2F%2Bix3Osw7snnPKFivcaNA%2BGwo4dfP8U4rsJcfj7GEJNB8xxxy2rW9Le31uhIlneIcTT%2FFhVBotYb6hqM2f0xY3vn0dUPruUMAioRtEMoHpaeCOvAw0yt3O2kKT2qWDVpidc5WzszluP7lLTq8CjAml8qfYxY2dZUa3lemfOu9GcVr4pXR5Rw0cK3vytYHmtYUkkvxAH8JugoHU2OkMstv6iKP5dJS9xClI%2BD8fgdilW6aSVBh%2FVimjphVgAkesC74TeDM%2Bh6EDSx16Gkys15mGO%2Fmg%2B%2FX%2F00JUrMuZTw1aEP2sZVFtB6jEETKd0GcSvcxQD8JuOpM5LQoD1VsJ0xZi6dYl9rbTqwOzBfy1xVx55QVCdHffQmhkkFHA1yMYfgQ3J7XVV0szl%2FdBsbF%2FXwh9T9ca44bDXsRZn8Us8JSvCkuXWXA%2FZpG8vtYJMgAz3QdhjcTqAoJH1KYAMNfZ78EGOqUB7kxD7xpzUI9ehAOtUEIviQs7Ifz4%2FCd6YsbpIJN73Zw2YNuyOX%2BkanAkFwnvBdFLrCVivQxP7S1wSlMR4ruIiCxquPqau3f1L4%2F8%2BpDhCATsRSiBzTqZTw%2FnvnBvlrDe2fR7Vezv3uGQUvOQqASHxQSjesO5EHw87JYDVZNZVOGeekVzfYGL9yQAtBNkClGtPXuI2IYziGKTDEGiea4RcIBI9jp1&X-Amz-Signature=43ccbfa5f18d7942ceb0aa01ce3e32d047488a6440ff3f892568fa7992787324&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
