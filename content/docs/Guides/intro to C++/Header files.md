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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZUQVBT%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuK1igCdk1YM8amgL0AjBh%2BCLnN4dAciFbMvWh%2F02KjAiEAshcYs4I9G5vCcQYmQwzzqfearhQeW6PkmmSSPHzap%2FgqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEL5AiCD%2BmK4BRBbRircA%2BP%2BaG49gJtm%2FlCLw1aMOuOf%2Fa%2BUwjRhuSqCtOyfKm%2FWstbetOeOzSePCAHRw4sem%2FWxitDg7aLyxWCl0w8%2FldVJS%2FwVI3MpGKkZgQsq60uZBSZRMuwlooj5dYnaHrKHfs3O5VgYbfPXfw8qGtrlt3ThIOqHd5rQiTHrYqVl4XuHrAXy30XoB56U8B%2BNI5ZZRgXVLGWCK4fDEep1ROHFy%2Bxg1D6uk5BTgmsc6m3Zx%2FUodJQdxYCRndBTLlnDhVqM%2Beh1tOV8bzL5nCOiKH2twL6sMFMeBYxLF6w26%2FeeNZIMtc3nmMpyp15hQIFoBEne4cqPQu2im3zuEp8B1jEYL0x%2Fgvv7cgti3Ldnpw8ImGzmitb0Sui2jZY%2FQxt5B7KVFGIvFBfBy%2F5abespq2I75Y4Dht8V%2B4IDQVX7Y%2FFa3RaG11pV%2FfoFJyd4CkRHLxxE4qWsgAr4Ib%2B5e4GfgMd8dPlWe8rQx8OD6%2Fm%2FYNmGrYcoNvaJfdI7c3JgT987X62edeLdJU4WE6yMYwLvRSYe9aLql7Y%2Fp9A7pImL0%2BAVr3oCnMXSs41kfb3pAQdVAOu0LGgRffISggbHEarYSAwkO0Gw9rT9TamX7lYOFiGYnaoGtgKAewJw%2BQTU8UpEMNP%2F6L0GOqUBvTFb3Q9bfyvcZRtd%2BK5oawSK4XJJoHxkOw8xKOZUZDl92%2FMxud8rcJREvIm%2Bmo3FJj%2Fl9NJyhsUsW5Cxds2REzzu3scCI%2B8VFefbfH1oazz88Lo9IzkYVAHXCeGiA7S1M21zsm6wNo20wQWOwRoK9SIXekXSSXP5aZHnpjawJlTcx3rZlV0NgMK%2F3bxzv5OKFPWZeCuyk0Oi9UvRsvqh0nPhW4%2Fy&X-Amz-Signature=455f3e7ba1c5fec82a921d77a5591bfa7402f9372603a72c8b35460f641e273f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
