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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQPZDHLP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuJbVf3AUd4wBa1dtEswmr%2FPsyjsE3HXqRhkOyDu4lzAIgP94SRd2%2FQizwyi4TQBqQXx0uZFFCbJyXkA%2BT%2BX60wlQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDGj%2F9vY2UGntm2UPCrcA8AJjR33EvTrO8GCfL5gm4BLYgy%2Bm28o9JfzfAli2enJ0HlRh1xn0vFCyvd9sS%2Bc%2BBZJKwd3WbhaTvVICldW06uLeoKuCIb9oGm98SDeY2ye9Q83FE76pOZjMn9atnWrlcuGz7VFwJe1eGILcnWGMV7pMG6XcKbHmoNyarw3Jhcit%2Bh8LGXaIpxPrQlGezcwmhvkMiyYbwWIgPVrkBVBhqDTZ86Fyw2tGTHhdBbhyKP28h%2BSmNy93dl47uTMmigFVbiYFLNw6I9YJ1Re1OcLxc1YomWq9oZEATP4GsjJJL0U0xrI3282mCefjYuJruDxAOKV%2BLKorJYIGG1dmarXG9hArrIXY%2B0iuxfL68knRmU3nnQRHNJV0yXSKcLK62Wis9woRNKAhipkV%2Brcd58sbmRBwuAKOv6d2savbQlEUrP4cAtddqkzM643xYZhy0Rp5cT38sJgqb%2BL10x0sIoaBjkLA1xGqq8mCOVtN14K%2BEI9VFTn68nIAwL6oTfTnY%2Fd1wumljv434aBZL0%2Bj5XDDxp%2FLzs%2FcpzkHwoT%2FA8569CkbOGF3CKcCfXHaPE64SXrUP4eS55Zsi5uCuTUTHBk8GQ5EjGQsD1CCSIkBDCBgIqnTAddxDImkfnJwjuvMLC01cEGOqUB9sxNAQHBchAe8vJU%2Bjbv%2BuAkrT%2BQRZZWX49nfD9txAmUgiMce4gDjVtA8hx27GZueClfFENOzn2iiNPDEqqBQ3rjgYTLB78Bo%2BzzDMGhhIqxr4MvTSzdZ963DGAcaq48Du9bg%2F1%2Fi7ehEmhe3aNFpEmcPUAmcUNUTBsY%2BcLhKpkLM7mPDSCK9WhKGB79ppL7qwwOLMTvN0u1UQ227duj%2FBV0Gxce&X-Amz-Signature=498a1b927e279f6d31ed313ddcba0689b45a240a9f2ca3ef989ffe37cdc1625d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
