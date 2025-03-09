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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNL23NNO%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDjk0c8ihljs%2FT1F9ItRjyi3yf5ga76hP%2FnJ%2F5lLvQTTQIgETEI25P5gm6FtMGZigIqmama%2BKcMr%2FleNrZ%2F1OvYet8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNi%2F%2Be%2FQ6u3xSZx77ircAziXGT3RCgfx8Ah3Qsmr%2BzG1thFN44CRjAIvHdeOAUDzMpn8OYSVsX98W67JMUA%2BTXbhiRLWqzBY%2BTa3fKixB4UdyO7TGo9PXZ%2F6xArg0ywRcUg2gDxOxF8zd4TvOQ%2FeXH%2FkjUy9Ptwlp4OFJqHMaY7OQtoTZ%2BEayp%2BtU%2FGKKvn%2BefA1uDujAnKN595PXQCFU0nijtfVvpG%2BECvxYwby83ygGHJ9Bb2pY975Xg6B0cTYGfSSTmVXnWlKIKiq1SWBQdF6ufzeZjZJoHEo1BUvRWhNGBW%2B%2BOGjecnNrup0y4%2FFcQoxIt5Uid%2B5UwxOr7aXtjqpoct445I%2BG%2B9MrKENWL%2F7y0613sXlLHSeKT%2FDpsndvVzdv01axsWAf%2B74fiztTMJXEQsuskbmG4PkkBSOkrmmYo1fI3w3X7oPnRbVkR2KnG0Y6hxIJvCBsfN7GiICvKPof0SJMRBH0cQKrOYwsT34rmDGFaKiRLzRCFHkMWg96oqZM%2BKOdOLGuSEKodTTuTO6GHRVkoGDCcxnnSMxAqrSfCCVg9%2FP7Ye2JOtPSp1IpVEnOckHgs23HZg93EOgFbJ7hNvzWBkhfnQMtMCziPIE%2BRY%2F9bObouCdK1BPsCDOIxOz2tsNTi60iwvmMMngt74GOqUBqmQQYgKEgdXAXdvAfeNHUgEi7FsJogSjCezlOfJRQ67BVO8Xw3fw27W7mY5uygKRmuDkR1%2FVmjzkLpEwS55XQND3cQPT2Xg9bPySpNni5iaN7SxaC88MmT7H4piWmXKAtRntwlC8B6FZhqeRn1kQziY46KpvTm4t8mkNaovT%2BLmOG8JiIX817OY7zZlnIIeRfJNzja0Y5wzqXRaVEWyqR6wNWTwi&X-Amz-Signature=179fabb29181c7e2cbc8d86eba34568c09e388229c66e08f7f3e84925cb47724&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
