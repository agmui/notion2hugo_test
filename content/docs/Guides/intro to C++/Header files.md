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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X46VONL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQC9CqS6m4rWa%2BfoDAO1WXTk%2FECCdlBO8HnBRqse55k2pAIgBlkGPnuELz3xzol5nVOg9BwiLez1ztGUi1xM%2FfA7byIqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDESUXh6kjyqX%2Fzcf%2FCrcA0isaWO%2BYx%2BIx0DpTsIwJZ7u4QA2ns8bpwOUnWI9vRNFtsu7Xx4BCl2sSpe4XhLz8T9XujZ37s1Np3%2BlSKoyLkX15KnqFynUD1UY11xFES0pKDdZYTWN%2BEaZcxfsRTvwNwbonq%2F9WKn3POCHNHGE3hKYeDJ%2FKzdmF9I%2BIA%2BoSciB4jEJDugBZ7TjOhQROk9FaMn07rOs8Bk6c4jiSdLLtGgRVqYziswObyAoggzzA6%2BI%2Br0AaZW%2BTwW7CoZ35LHWt3cWhgVqyhGC5kKlXIkjwSh5Z67kD%2FGlQUkJtDXjECmGUAQhp%2F58Tl%2BBjjFGet35HjGi8%2BgPFFd6ZV%2Bt7GEZOW0LmIuvlrgd9FRw9StXOpjDzlSpioIk1toTcWVAcH1uMckXIhyfjcxlxr%2B3gJkcyoBLvEQQ1VJCMiXJoffx6AxSkUj%2FnghXtN8UtuvA45kRH4HAlEF2eeq4Cm3THBzHnrmRCYsHRsw0ARpXH%2Fkmv7keyr%2BBd3AmaBe%2F6W9NeGGzZXTlE74THQ5Bw%2BWuiRzkjGYmvuH40Ai8AHnipo99RKEAmTklcUHfiFYX8QbyBTFtS0PUtRXWPo4f1E1S%2BNm665Tog%2FL6NuRdkHeJvyhkSqHBlP38tPyNj9f6mWa0MKHDicEGOqUBdF4ngbifozHi53opSGyEp0L5oH7l0pBEWLAtEOjcKU9yochhPgKyOiAa2H34oD5%2F8kCwRbysjgW1tCaH4Gnz5lkOJHQfh236OdKnrZDLwQQv6Qd9jr%2FZmc4wiWdbrtsqOJO%2B7JsV9xc1K5ecH7kOCawXpGMU2PcSjM7GG8Re4dhzk7wtJc%2FEENUjAeF%2BiWcKFrVeVAcwwPG3lc5rHWucyfGqL3%2Fw&X-Amz-Signature=69b0669f34fce8d3ac82f350003a8b66bb90e930a68905202e5e29e6954cd220&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
