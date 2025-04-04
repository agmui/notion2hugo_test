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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDT3E4IF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8qgzQQg0hxEJCN7KPwztJq1J%2BCOSc1RpMjmKVDWU4OAiEA1iL0pSfn0XMitj4zruLPfl98w%2Bb7JfVnRaywPYpn88kq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDOSbRbwZQMOBAiOr9ircAwoWV6OrjIrCqEpA3VHlA0TsJ81rzNYLjOU%2B4XuAKNmfGALIKamLHkaDvQ98QPIcdOIO%2BYlrWzavPx7bekgK1%2F8NsReJONm%2BHWZfYB12dU2odvYofhLkfemMJ46yyMlb7LWl5aakFW6hgIK66ck3DhjfC3%2B4quRo4%2BsLoe8zfzVZcozynXbxyJK5vBQsg3rA0PLQkMqBNfHR4bsuY%2FHYrLqC2YXMCT7EZXCFFm49NYHgjjDDqMuqU%2FuwTgiy%2B8IzzIPDvNvSKiRnzlrJQ8eCzL3B6qVWycKmy2lHD4K%2BF3aZ8tzK64UTfPmnVGxqn2XutY0SaaWDWt%2F6lonQsW12a7znkD0MM4G1LQI0n9QzwaTCV%2FywxaWztGEEOwrTQwM%2FKo9XSPo8xZyNNHOqEMdWcClVknYMIg38XTQq%2Bs6Mr6FaUDei9se5wDhEwOOJqzO55diG3oXaBKwHeknXjuLSco5Vhd9%2Bwks1F6MxIP9Z3vJXY17r59IXXJsRX%2FlsOXP2TlgVX5aZZF%2BdFR9mei0qgeuVKbBb5Oq6DTefS4UUKpqSEyHmSaYfg%2FeBNn77hTESoqE3z9ykrypE9cEqaFFco4WpbmDBpDqU4qrAPoBmdiHDPcv01fmOeM0CLMZSMKKCwL8GOqUBJd%2FXLsIHiEOqZCbP3YazP5sw2O3nFkV4N4SpxbQj%2FK1E1S%2BKCRHhiIbDOeEMYPmq1JjLw75Ufl6appZAuaLdVZh%2FUfdqqw9s8htwAkco3nVn8mgL67dRLI%2Fxd7uiag95cFhYZre64JxKK%2BlPJNVRNQIxQ%2Fib%2BD9IBnNDIbCObeQZJuOoWDGzRWYLUkbvUp1t9F6jQKFov0C3t0%2B3WF5ExxgOoj4c&X-Amz-Signature=5eb9421863aa445f717d3b0c7ca472f3a0943e031b5708afae9364cdb9e2b0a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
