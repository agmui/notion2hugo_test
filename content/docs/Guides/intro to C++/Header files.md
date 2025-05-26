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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGAF6MBQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERB%2F%2ByeBrJA7yigTcwz8ZMkAD6HLP8vEU9UJOHzWXYnAiEAmpzMMBupV%2Fl9L1BEaKxl44X356ejGX1MDd%2FhXKsut10q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDL52Gtdaiab%2B1LVw7CrcA%2ByreokwtO9vf1JRqKBs9HA%2BRpqGGmhwUqeSaz%2FocPjbS1UF03hxfC18fjbGGUE5tqaJh3lY15gnnbCJKC1K9MFD%2F9XhTJHMchBJjfF0z%2BMmbln5PdaalWSWyKCsRsFqCY%2BH15LoyCiK1RCReBD7V8HWyEtJEQXMmTlOm%2FEHPXEXSK3GhnI8nmRXWABQKg6elXOo5ZwY7%2BeSHLVXfHdC4vJxMY7Bd%2FhxAk9ngLBLk8Lj7EYTLyI7Bz%2BOxNLmQ5SLj1U7A9aEWt5lr4smmHqu%2BoNo2uOF7uXevPJfO8V0evw7rV1PEZmNZe5s5TEOSxMbebpqPgShpZ1CqmU06HeF8EERrfixWgAiIewyo%2BrNQ3E0jj%2BHXFvc3qUsQsRmBgYKm85GiNQAiED7%2Bwv6VNL2TMXhSrkT%2FmW5QWLD3mlVGqdiKFdlFWg16vlVHkBLDw5yBXi5p%2BUFZudn3DUDuFXXawCslWBWdJ%2BdIwMV8Wn2V%2FcVKPh24DHyw5keNMDKDY4H1InCUoMpwppvemMMkCnwcKIhkXAK8z4xksBdAv5HxIQdrIrJjKrvtK2wgMyNhD2iLzIS8x1oyPY%2Bojv52APnp446TldsPO9kdtj9viKDibo11mlQDGCmBuyBYjE8MJ6T0sEGOqUBDdDlO04BLYLbP12mgwwNXVudIkAmAqCAU3XEgGSHokLojkUqNqNoAlLPAYVWmoB3Djfnu3Evh8n%2BUPUFe5PJdjJwCLsJGlI7%2BxbqjhvpvIklKYZjyucvm960%2FVERuALWOMjpe0l%2FwczKwHH7XHUEr7lUVbr1T2CH3DQ1ivp%2FGiyJYaUKbrmC9ZQHvREk5QG1IgEPyndVMPKNwwUI%2F8KUa4AWAipk&X-Amz-Signature=0951f4088d9302137ea4b0fd232c4ad90fe6db02d81e593af1a7b66b3912052b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
