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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHHOZEF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErcGqU0T5AJFGek0nqOJO75hz0RP2TydNLbgi0Bmgv%2BAiEAsV4dyZcFlLHs0xNvz2yjFbEvd09gKDtDJEYAl5Zz9zsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDEbrKwUGKH8bP5SS7ircA%2B%2FVoIXIoON%2BmMRPvqn6pjQLgYfmhthFp6CW8LgutdA8gBUJq5DC%2Fq8QBNtI2ABMXo864Kwwq0CUAUctQpVmiW8OIi8cfmFn3e3G90g%2Fw6ncM3CJK8SV1y0u5VOryfb0GMZBysbUNpagcpmSTPLCI%2FeA%2Bhi3i4hU3DE9SmEWe5WqqJaSDR2N4McLTUEeMUmRm3Bgm9E7xpNOG%2F9DFc5S8ehD0MS%2FqNWPWUY5uzY8JoPWghqIPYcsXTw4qeoD%2FjBYgxaJp6BTcyhrcO394cRekTZk8hDwxsGWOfYxlXinmIzfMpQOZ2O3R1cW3wGvCpfD2pTv%2FNS5sAVD8EK3ZWAMQsWQwB%2FPgQ6PdxwBkMbyI5p9JtLl9n9AGIxoFRGyp28UEaUq8R902hhYh7qi9PXAqN6o55MbB9lA9NJTCRix75En9EoGT1OlTk8%2FDPk1am1BfGRVXGDfGWcY1uCx2Y3cDUkS9FejYwA5%2FnywVlLxulz920zbn1X6QjYtu7UzfajfC5TP855oh5NqFG6knOv736WLm5msnkzvVfW5yVn1oyMc7TaxUvQh1LbdDtv1vUat7dsO14T1yjaFXaYxFh4B7Y0NKfcYnMlVifLgqNYiAGwaJdy0mHOcigQQXnAXMLLr9r8GOqUBNWs9zhVQLpkirhf45ytZZzGtfjqFOairR9KLLak%2BUTDB3mBYyi3uN74quH%2FBpWtgMDGR8bp0s0YYflFJdNi7yi%2Bfo%2BGWVEEuX84OdKN5SDTRHZ0iXyX9gWs7CbY0x8q8GmoOCPdBZ3KEuvOSGJ42iKweBSOIvPGhRHzmIQCefnLi%2BQr4e3DpBVvSb0T%2FbldetwrRXcOGgQMPjs5wUpZMcOpocWfO&X-Amz-Signature=4303c971560b5f7539f32c9bcb7b95b6e0a35a3c520dd7c9e1400e23d8c4045c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
