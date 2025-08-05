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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662JPHHBU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIFqdFg8eoT1vENNEEJcmH7re2H%2B6wgSc2ZwlsylaPHEcAiAilE%2FxPPiR7koBNLaoyTH7ueLaKD3P046HqPMr%2BvS1bCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMXEhClRrJaI1tSdfwKtwDOhEyy1XevId8cwKpVNKutrKnUZvgjBZ7OXYl0HEi6AMiOZndsdrRkP0%2ByeUrnX8aA5yr1VvFLF9CrbuGtx8F4kFP8rpnkm4jVxEYe3lYMWbptkxu8ECX8DZg65U8y4xZsI1dVW2YcUPnRBnvTLNKfvkRUJz7zywzqgBK%2F3QXt1Lr%2Fy8BL7FO8vqx%2BfKL0Tvssp6kE7mNchfWl2FLZKsIbuLjXGTkPJ3yRPIHhJv6J60ZK0%2BFtrg%2FyF2ztUYjQ3FyFheMmX61xhVRVvZ4dwjsBceSYi16Ym%2FQYHVttUdLlopiLYnaeCFS3glXDQ3jhPMjXrpB%2FvH0BLYFW5Ob%2F8bwJpmGsDLANbAyEevCrQdWrWId%2Fv8CcuODMSozkhIn2nFR3VUt243koHzoFgDiZ%2BBJx9OReZsRyhPVc20JLuLFMBTGh8Dt0H14Y8GOVF7agtdlp5ylYpH9mK%2BEjN16LYzWAdH2dIkGbtPT6QpteHwKtDAhw9xoxt%2F8%2FvrGXzqFhaan0ifudEpZnIVKyVcytFNqsKqkIsYKrAvNnE4KU2EP7%2FU9jy9fXa3FEp65V6b0QypM9xVJCt7%2BHVWPZgGPbx1L3Ndl5kfZcs%2FfGc4jTh3KA0rRRQ0oQxpcLldY67Aw%2BIfKxAY6pgFxPfYVfcUcY9%2Fmju7IMqGsLlu7DfDDI%2BvqhGPoB3NrFxcCRzxJMMECLObCuUkYi4yTGECHFYlKMxRGEIS8%2BXWJcjwv9CD%2BP2Wtjn6qWh4%2FTjJapGdwREUVwwUG9x4bm3n6Un9z5pNdhuD3X8oYtI48CgZFj2SvKysjCBBHldxVX10oSKC4SkFc5jNqXjxf2hws90JodrGWAThWJ5oI%2FxKOAcKj6Kb%2F&X-Amz-Signature=00755a68729824449dfb12564e1e2203348696637007cbb835fe4a48fecfeaf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
