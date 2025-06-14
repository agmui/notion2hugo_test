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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633SX7DZS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCDXBSJ%2BkCMYlNXxsUgie8Vo5W8qMrWPpi%2BNOpni2Z31AIhAIWta%2F%2Ff1vg8iSsvxVmVpDu6gBEXJB0LRCjZWp4atynvKv8DCCgQABoMNjM3NDIzMTgzODA1IgwoGnOkB0C4MVqKAeAq3AN4Jou45K%2BWHKwLRrZTDgMDEoCfTW%2BLe5cm1S84SfIeLv5gnr3fxn4mc%2FE4vH4DuXw6GkbIcRidPKlJo%2FoD587%2FzUjRx1uKABO1xmfVahXqjrJMdsUP31Lkl3VOv8RR7wKsxXsKWRrRCp5AacrUPHo1fGGX1o1ihdwbLvhM%2BqnnQ%2B38VjW9S9QZp%2FQHBpLHsGnisQq6964k1z%2Fj5Ko8V4k7eJKcGU7PbvAiXeKLSMwiUBUQjojgFqO%2BnWYSBgcZCKJl4T%2FPwxMVgQ4jl9sIyKh%2BYUjRXj%2BP7oklqUGbaSQciRPoXd4l47gZUrzA3x1tO068X2wFc3EU%2BQ8D2hdQOBJn2dFMEDvAReQz36KZ0WuBaxyERvArweeZq%2BtBkgQmcHvkDuc4z5zm5FmAQAJdHFhxADtrlL1G9i0TKDjqkFNoe2RcpqVksnneoiOMKgSYnOPJpepeykcspfSq8oy1IxhzBY8iVgPnAnCchlEVJLsBJw8YiGu3A1F7mMZA64ZsxMun4Khgjl%2F0vzaRAo5V2JkuZ%2FkodHz2BvrC60Hbcxvp6NkqcR95SokadMx60KR7GdVsttHPLnWdo0rwaeMJijteWYTpJvqQzytDVPtZht7l%2Bg1U6pEznoWqR2yVajCSvbTCBjqkAXCCkYQ7vr%2F9Ics6am%2ByNn09cBtTypfa0IitrE2IFRNgSZbq27wJ8rxFLlCkiitkTg0QDoGOjmFeNwq8LM7h2jNdkMpUJO8HZ65gQv5dX3KMKoMT3XqxjBmzUOg4aPQ2zEoE%2B4ck6vKXiwBwTvFC4LFL6G03fFDpLNNq%2BDZ%2BN8l94%2BTKFWfXJDQb691SicYKvFr0Y7iUGCBESEAr%2FDTumjW9Pm%2Fr&X-Amz-Signature=90d03ba5b205d80642420840b888e71ab6597841c86ff4096a13db55094e950c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
