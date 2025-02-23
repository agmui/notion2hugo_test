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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q425GGBW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmXMKp6m%2FyB38XxJXW4MZ3mJ6xyLeKlhQSP7VJQiGyyAiAippSpIDQGmVAGUU02wU0hwB52TBFHP9Jx6bLJPRy9sCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMg1AQcRoEuLZKQHW3KtwDwB5NnyU8X1ik1ixjV%2FxeCcsOxWTGAsbaJUaMTUijC0PWEK37%2B0dWOrHaY6UX%2FSNVfkS1RbfkoB50dX051AzzSyIE28kb8iiXgIhgIilK8dWOH4W3IrQxzVkIUwdPt5UvyA9qzLON%2BadD332hrc4S8OZt%2Bweb7d%2BcQTfbbZ57GSf6LOmS%2FHSKCKueoVJW%2BEXV%2FH6gP8ZPuF6r1NDXCLFo0tNpjiOYubtBKvfPGEd8uIto8Gfsq684pAv6wQHPlKpL0D612y%2F7KGv2TOiUOMyAlEQvTgiE%2BqXzlBZCt%2Fxe5UIiLicSA7gaQy6TquXcDqM%2B6Hs5vRK1CWKCryg%2BAzbnyLDDQ6WlEef9Ex0SDTUV9%2FKsLMk%2FzA0cHtka6kWPtFEaMVIc7vM8739GWxXYGhwIvnhVtrvQpR6Gt5OVBryKj8a1KbJ%2B5%2BDe4xv6j8D%2FJuJYOsgNtgtaVQJMv02hr11O6XfL7kj0S9ofaw9U62U03a%2BXxlLimAYpKWTEmw6XmQ%2BAUkvPkLBHQXPxLuTTQleUF%2BP3aDgXISKRmQfr%2ByHSLFRfGv7zEdn%2BGMHHKCggCAQ6a7yvz0cFsAur2EJiFjHQySsrkPZ3nG6avLinSq7GTLiAAfxhfihRShKMikkwmZjtvQY6pgHu8KFr7Sr0RFKExCsIe51a%2BaobOlucdV5KixHFpBb3ElA6pn84rCPK8wAOZ8ywDKVBPD%2BjC7BsGn32Qxiybx4QUYKpPajOroEFNZppIvCcWWoO%2FXG208VziJedsWGBB4Oos9QdIGnoETIz29BYcXIUMMgcijT%2BBefx4SfPg27oZWB4TjzjjkQWRm38zuDAytH0M8vABEsmxOIXFDSWHEN1PTc69Bxn&X-Amz-Signature=1215a5e1d02b6a988c9bee643e0decf759406bcae86436f0c1c829f79723ba22&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
