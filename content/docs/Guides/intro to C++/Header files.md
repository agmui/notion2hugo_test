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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HXERW3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9G%2BeBcqxIM9VYgUzFROyuVicoZcQJIsbNWBQCOIqM3AiAB1kaK45uOAUucU%2FB4ytGFnwW7OzFM6Yfsl2cEmvnFwyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FaEMVyXIF0zjg0NKtwDjn3vejmnExouT5JUEaJRCI8jsaaDrCl%2FXfSYPE3mSjvLAS51lyk%2Fc2iGWBPTLQNQaYeyfC%2BYXk7cnt5mwmMt51nYV0eP7XmPkwIKvPWnnM8OcAqYpI3%2BlUBcAkwvZVPd0um5mJN4PBSGX12zwMaKsFd0MIWACPGnSK0tk749GuMZ7BTziwekesCACcZePv8XoEbhDmoVTO3lNsO4wrL35ue4QNJsDX8Ct9QGvqcz5ug9Tq2Xv%2F12uPYow%2B89BitdfRkhUOLFVB3WhvB9803lao9eR%2FOT4dwUf3e9%2Fc6QSfpUAKnFkqjO9mAx8Jc66jFkBeGWigg3xUrzrqyQA7d1qlSvAOUL9VuFexSh5zaOUhC%2FV4YRY%2BsQ7Z5cAKbOd0cCgbWN3TAlp6TqLEnazGuexARvpp%2BeDW1Lc09mno6PsLOddR0VXAIl1gAh26a%2BJLjfx0MPOvAUEVonxP1ZzHI8OZLGrqEOjWUdAmxCrY%2BXgBdujDT1nwwUHjLON5y9PLtIvW8IeQxjv2mN9ovjnUSyG2WxGxu8x%2BfPDIPNW%2FNrsAQbXsvQBCd6K1I2JLszceW%2FMfg0vkh7Ar0KHntIxs2zMhlDrsfioW788XJrlXCXeWlnYNExRpcLh0JnVLww4YPrwQY6pgHHvxZgUK1X2waZc6RyfEJNWN%2BDN6R0XqJpKgnF6fxAVfKlu0b0p84PRq%2BFinuj96oPs7A83WqDP6ytW0njaqVTFDdQPtt2Jpeq%2BWMAWdEULKBZX2Hf3iLnXAyNWyZWX%2BChsDyvKxpSZRRmD2BINPtEm3U8rwfnFQLAmc30cTqg5llsYyu%2FzSWgV46UZ1sKZJZgRrc%2FUyl%2BT%2B2nQovEPgFqw99mRFsL&X-Amz-Signature=8ff00ec34a9f8b0f1f315e63c03926d81016c98c1ca6e415b54ef55e3792ca9d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
