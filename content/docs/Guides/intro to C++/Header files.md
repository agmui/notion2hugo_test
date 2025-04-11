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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWREIHEZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIEOXl7TNNZoHdv29fHBObuvgwtaBLPcChgjLoZENc8YUAiEAu6%2FJCr551mMf%2BMYjwUIzVrRlCF84c54fkVEeOzzSB2gqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDc%2BAXcHtPwssvTiQyrcA4KoaNYGVZwRo9cBZ9DD8sRQ254gsTII6jthfLwryexwY8RUiLClikMOYZN1GyQVvbzXrrNf3Fo5jGZp0GXOS6%2BDKBXhFixN33fbXMuqUGnIhBe586%2BGxmaEl35j9ZG%2BCpEFD4IW7%2BhE2iiLRFU1dUrMYCmKmcQhKw%2BTKU9q20aPu2nU38%2BuhjZ%2FtwgQGWPypTYjWk8TryWv6qNZX2GSdDdcN7xLppqxhxG9W1%2BhJoE8V%2BxhsobpzG2xThryDE%2B3%2BuBlxvkC0HaSChN1%2BbPYO17d9mA9j7X9wHYFKaMesvDj5z0osP%2FDL%2FyG23TmLE7GdfJ4PwrUv%2BDQKS%2FE9e9CiDDXxS%2Bl1OCR3Sr02W8jD4fv4STgsUBL8YiY4GT2qZ8IhsdDmLlwAc0TadWhdr9%2Fy%2BJiUHkllGxtmbzM1saYW4BRTVDiRWpQIsnuJ4fGx8ziKB4UiWVJvBiqNQDH0Yl4Tr4VcCUcSqpUXl21agTFef4jfyA6jGMqJ5Px1aX7kgOzql1K9RvuU2AmomgpRTk%2Fl8d8dgRsnCmu7R3Iar5FMsNQEd0W227pJ2Woq9iS1Hdn%2Fx33R3W7WuwnvULHZyU0mYrQJ8H2mOQFgGKiuNlGFZZh2tbf25sbCllsN2IfMObw5b8GOqUBZBJ4jEeiYvW%2BZlkxQetTfGXA7hgvoXcbfeeSWnd7KBB6G%2FxxE5pka%2B0TZuEk39dgrEEA5Ik3udWpFK0EuV5QdiTMk3uWSCCMPEcLTMLjsWopYJ03JPzhC5DjoaVxWGh2P8yrKLlnKY9iG8vEnKN3aV5plhoARrNKIo%2BTVv5b4PkbnuHEtTAWue38xaI6ck9xQNLt%2BOf9tbyA36ldJpp7t6MEZSgQ&X-Amz-Signature=fb5e5d3eeea31a0f6d60b50d11cfb59504b125d8d4e50b36dddd8530af8ac022&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
