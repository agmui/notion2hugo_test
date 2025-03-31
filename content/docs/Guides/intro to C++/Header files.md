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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUSJG7RX%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCzXO%2FNoGhKu6LLZlV%2Fl8OTRNofKuBbQGFBQ54zZdTTngIgE04Ys5ERrnn%2BDB%2Bx3HHDc8ZDbBMoB%2BNGx2G8lwKl%2FWQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXJj0I%2Bh7MzKcxeXSrcA9HFCEDIbuXlJhPjS2MllOQQN30JKTaGK9K9GJhlarceNZK03ov%2BdykxmjnV3YUks%2FKaKu5%2BTxsIRCqVJughUMVtOXBKbME5URpqHXOLykfabDsTQ7WKPOTFxzl05cwXxdUrlLvaHv7mRFmC8p%2Bhvy%2BQiZ4XlEoIQbhR3wGwTewVrW1xcCSG78EO%2BCHRWWirrbSGDhS%2FighbUEkZcOfaggLCaRT%2Buv6WdIkjkjOzebbMZqzWe0PsXTZIHSXNtakrC%2Feln3gM7qxZL31B9XB8mXRQf%2FLuE%2BjIJRgS6MW%2FXWY6R7rzNdX%2BtvN1JlE1IYZ%2F1aNWFLFBgLb%2BSLU6qJIOgn5E79nEAXQP0o0aJYkfPpPu3Ezc%2Bpi4nah6ONZHhc%2BrL8wmLbHFPz5qcj73reiRh18755ksD3p%2B4D1oQ055%2FC3tHTWB6s5XY7PaOBzphL9XC0aYXFxy3FonTDpRoRl25MhjGkv1iODEayUmO01CaPgcM6QwhaLgsL3vGStxBdnhe01sUuzlHcpGDn3Et827wEqg000GH%2FvDU4cMaO%2FVDSLbK4Z2dJ5bBcT4INBZZDcQZTT3Rh3ekVENHAdCZsuySeBKeAuMy%2FkBrCYZneT1JOTZstPXnCiC9TKWjrckMIroqr8GOqUBoBizcM5PtigqJGpVnpEOWJ77l0zprA%2Fovaik1RcVBw%2Bmy2xD1OFOGvDuIHzPZiI4YQwxWLEedGg0nadnZN%2FtKNLVjw33CoyqJJkmZ80jNnj1n4vwN%2FohGNqk%2F1Sjoen0bUf74KUKnCa5sInBS8C1AaqTR5QnCkkdqQO4y%2BRXIBN2Whrs7aG5nLtrhdsBhVPlfxxw0FRJ38SK4qlNKESDyOo4nsbC&X-Amz-Signature=600e1a36ad812afecaa253789835203a4da9c9d4cfebd969b6c27e2a5d28abf3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
