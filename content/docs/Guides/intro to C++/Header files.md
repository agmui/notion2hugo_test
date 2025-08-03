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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677FIGMCJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3R5emOVeEKBRyXX1oDHdJl9qae2mgDNrGEufogpVGyAIgVJzreFnXp87C7hWhjb%2BCxnRmg6suPVB0fwrK21IAvRwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKAaDxe1wsJu3EgbJCrcAyQwphjBGOX4qPO%2BsiViWI0JzijsF0FenE4GW37ABpRaShkpXqyisUhoAHJptMyKf1MmMTTMLIW30TeokZu083O35Cue7KljJmomjnQERMZ009T7TaUwUYg%2Bh4Uep8vHbxNItAHOjjDchiwI%2FLnJbqxESYA0%2Fra%2BMfmBPDl3SMTzb7ZLrAu%2BMf2y1LEVfpwx4IOVQWz1xTBxSQWLZJCgMLKsTcsWpC4yS8CCjDg3pVnNCUj2DHn%2BSNjM%2BPyv6dX2tNGeHoSmBy2IOuV0oABKMtNiMYc2j8X%2B9X1bCkXwkrQ3qwFGxD6ki2TKEvVDGxzGQgWjZuyEYTAQY5bGdL3nQkaDRjO1bcUv37wvn%2Fd%2BsbS5VzXWttJjoRRKwpnC6lIxV%2BzezsP5CTurgAiOY57ni2bwbII1lCx28NTbgPRlXiLTgvH6d7Tj4vHmDc4ZfGjtrS6zYbCqguTzf9ekzbdFm9o6V91ckGU3IuJbxj8Gyp6Fs9cnZvveInQucF0i6IzGCPTMrq%2FSeAUlDPSSRmSJvkNYIQYmJ%2F5K1m0BJbKhREjLILFzLI7MUTASmLj%2FhGzMSsE38ggJ%2BhtKgAGI0ylEn1jhzexwIZOvHuuhvqfsm2WmjHmxWLR%2BwcXScunOMI%2FZvsQGOqUBRjP0M%2FQDRrNiZ%2FYyk8E7nmLf%2BzUskWqQx9axTpUksZQwvtqXntU92yCxCAoGc4Y3r4FKjwlXmT30i16A2SiGqXmVX97MlFrj%2BkXiPvIieSV%2FqsVaS5yykB5Qe71KM3iZ44zS9a7rRAAi3Mr5VjSoaxytBhMt91OqkJFznCbZHzDxI8w5VarCRcjP41VIWS2DK8gL0Pf4pKy8WkjMKSmeaZWWw35V&X-Amz-Signature=fcd265dafc717691acee30da225ff2e8d90d978374ff602d10519ab350e0b0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
