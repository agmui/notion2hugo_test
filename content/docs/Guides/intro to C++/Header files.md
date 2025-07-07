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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67FJGZ5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCxv38gHFWQblADLslQ7ZPt5oWlri9%2FhGvUFAJWTvy%2FkAIgNDN92zhyLCkDdinRiTTLsjoIIveXc5arZUTuncq4Y6wq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHbz3TCIEia%2BWBMNKSrcA9e3kcBZOqd%2F%2Fd9YXm4EjstA%2FxYMEYh%2BAyqp%2FBaObOoguG0CF%2FJkIreLELecyF3bIcurpGLxE91cRcPgK6MHHBbUNczT9BgICvPWE8%2BSn4aAZT%2BraI%2FPu%2FV5XVkpwxtzgI9SlcoCofhnH3Ze3JG2%2BkgG7GBmsZvZMq%2FSDtdRB6G1f6PpooW644X8UKlpyZsEp%2F6G1BsjUv06sAuxbr4MhLcAuqUkgGnjdTJXgReKP3cJd1XrWZzBxFisw7YI8%2Fo%2FleM0Uku3GQMY3vn1oXB9NR1y%2B%2F3B%2FEpOJJq4fEyAXEV%2FgLME9ITf0ZnyirdZKpLTef5jmz694ogMZidpS1cFgbk%2ByjkBG%2FZsfME2JE21KQsoQXpF96j%2FKjMphrYCwZM1ZojXVx4aT26THC4aJL2WWbt7DU6ia1Hdq2JWu1LPS2WNZ4ahDYyqyjtDRErgew5iBDTL0XGYrSkAi%2FdJEtKtDqyDJ0x5%2B9Pw3N5DXrg3i0gettVDAlCXPqwJNIocP8mRZkXr%2Bgd%2B8QLYzWfRBHvDoOOi8JZkaWAmHuzqxkLE0yl9nHKro%2FBQo2v4HAiNFw%2FcdVotaDlixXPKTAWDKTT1xdImW1PukGaG5PP2vftkFotUv5X94bVEKZW9WegLMKeWsMMGOqUB3uuihYgrrG1tBsndQFs9fgvi%2FekMigM8pesW0Isjcvw5PmbC4Wz8X1ZEIf3Ov5zguajnZcVZRvzUcF72APohXENaG6JbFhRwKtYT%2BnJebh%2F62cXbX7XfqVUnOlgDg6jAXuXcO8iL6nf%2BO6njR0pWHq4u%2Fg2e%2F0dpOKYrGplw7qWNL2TpgEm5bd8nFCdhZ7IQzUD0Pi%2FB1Gfq08WUbaNKTJgp5orj&X-Amz-Signature=085dadf9fed0f887d714fe1701a96a1d53ac35dd3e5edd745b6d7a840ed31a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
