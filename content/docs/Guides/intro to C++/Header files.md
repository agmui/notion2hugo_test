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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT2YFBFZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLRolL%2FyEhX%2FW4%2FvOQYV3pnmn%2FCo5QFH7WrqHBw4Q6SwIhANrG6b8Ysc8SBUtBYylhGtKQMMczlEwXDQLxzeVPuMrIKv8DCHcQABoMNjM3NDIzMTgzODA1IgwBNR%2F4ztmhCKTnX7Uq3AMssmmkGlvoWiVEefn5PoMgp6sfvzf%2BXbpFMJdeopkcJBDdOyiGjIzqQU9jPwfV6q1oB4tt32SOCsUFxyF1npoqu7Q5wwvODr%2BEaDw6ol%2BKQGzstZo56w9oNZnOrzSAPT2EkwpsQUYOSlQLFB7UDbajQ8JSvMdFzizXJuNRUEPmF9zWNTIHRKjMMDdSw%2FxvslEzbdXHeaRrWllf6W0SltVRBCwhCHc9QoCtRgzsf44luU7CzS6b6KfpC2a7R7vOmnr9QyTpToE%2FoUu0KDhDh9If3ChOxvo25vEpyDqAMFaldCxxKVtsLTskiVTbkRtIVEHm4iYcqqrhjc2KcxKtPbXrNdcj6czs9I%2BEJ%2F5l%2F%2FJKsyeE8TuIet7CbmPt3plrYN0CkWZEvNkeo%2BN%2FNz8V3C%2FHQl0Ko0PZTm%2BGtL4KSuw8ZXIi0G61Nx7LlnohomQAauLipCvQQpPRvnsg7O2JNmjL42dni2p6BuDliLYH0mUP693OKyR%2FryiD%2BNtkRs9O8xEF2mYMkzJRlg98poUlpe%2BWsnfmabi8dY7S6k5kr4sAiVABfhskYydkBNFBaVueF5Qju8oJhEoaxsDA8WfqOrQgVGOeSNmcjNfEg3qZ3b5CmqJHXh25CekfbFldkDC5n%2Bu%2BBjqkAbulmgkcTlkMb4jgmwkFOS6wjHgl8FQ4Cuvley2hXPul7PZv6MUV8JPj9cdBL4uGwImLfpGY9OzpP%2BCbumXTKR0WuZccvdW6ak0IIbHdoFAM2bV4oNKtOBqY2kfgTTYj91XXwzlb%2BHqRMRga%2FcL7iE%2Fi1u0yxBdrBcRYnJrypftsdvRYWynDNUx93XG7SppoauhJBLaKCCHXrnTAkMIlIy1PgEZS&X-Amz-Signature=e8444dcdc48541fc81a392dd92f0a61ff93b638adc46f42eddf06e65dc4d3856&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
