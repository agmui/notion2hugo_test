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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666SLG72M%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtlbyP1zNjFvbsYQKYKOWFR3OudZfuEzJNRpgX0TieQAiAaiMA%2FOm0%2BQimzIyspx5%2BCYOcVN%2Fs70eMXY2hYbtQ60ir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM3UNvoG3RxnjO8yP5KtwDRXcIJr97NfqQbGONEcaDErGngxF6QAIJ6iLjKzcMhNF0rEV8qwlD6rzS95HM525QLfoIhRy48YC9mdvPSFXge65ZUrU8MeELYktFbTNVPPWCua39%2B6vn7Yl5y8npjxyVmXtzZZUkaBzm548xW3aneiXnb5Wz08ksLceCzY9Z%2FkZqP2anfoRbOFGFoSVaCgyhEY%2By49HxW9uLtaph5ifE0gjFcxis38k390tE5V2RFN7C5BR6jJ5dVbYovqYy9YmUyOxi9hC1IVzZqMgp%2FxsRfnia1EHgMpciuYfup6pKmu3bdX1Wkf1F9jO4TMiQyrw4i%2FiPa142igIARqYyEXZW1aEBaF0rT7dAG2Xm%2FLu1oa2w9%2FQyD3KIga31pP3hKv9sUMsdLjp0W56UZeUY3VpF%2F86qoP23FkVH8PeiahrICmKXQWogh0ph%2BK%2F0k5EQoL697fYRYDaOooDl6%2B1efO9z4r7nQActhExzxbU1ydbhE7jvBajepUnyZSe89wqCgt5ZT1mY4CwU4Osy0xkuusoPxK2gYprJaPinMft6hdQFQBYhh5i9eFOxmqFM4d4w7OI%2FLR%2FugqS0mikly9Y%2Bo0Fs%2B15CfLBwwTlLj1z%2FASHSjV5Vr8vAiK6cnu8H%2FNUw2daMwgY6pgE8qEG9llzEbkUPfcDDYEZP40SIvGBG%2F8bfWXRcw7G%2FOpIigj%2FGKk92micP2A2sXphSesNzwZn8Q2F%2BcEpTmYI1nMdzyD0TaYNhuT9fjmW3KFcZmxQWc1PrgUZorllD%2Fa1kijP0z2%2FMcXScuurGRgVIoUORFJMBlNcPDXjWZXVj08ROnzx0%2FUW5e6x2ylH9eDXR8aiuje4mprRgqLWuQUFGlhmnXkGY&X-Amz-Signature=db8aef4f04006c13f219c66780211205e2fa5aef1f1fc4671db3db562a0b6d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
