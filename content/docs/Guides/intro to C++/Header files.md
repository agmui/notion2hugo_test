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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVOYWWBB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCE0SW5%2B4z%2BHvralAiicmgZCH0qKc87TwmsyX%2B88QpXAiBuKar3%2F1d%2F2nWUpZkhSCVervWpup415I94uAMK3up3kir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM2Fu3PtysmAwKdzKGKtwDtInP9dFbGbKluYzV%2BcW4NEtVBqKXMwcB8VcyF3J1M4kM8uZoRbNjTLN5eBkWYN4YCNIF%2BV8DdoHHotcAzK8dr7q5EIApT%2FNxGmVzfXeALg4cgfGVfs%2B4kUH0XIdhqozWYVOUGaz2wmMr9WlugCfeii8oUnyOyhF0FtF5QN7cU04DQ82hdgXAscYVsJx6QntSC%2BdWYShI8VjixZGQkWkSgMn8x%2Bu6bjvGh7r%2BO2qk4aEE%2FK6nUKIvuZprrN0GEZBfnczaSKWKxHMNrXMTwYhjSuUUgMXjA4fm8loQpiDOjUCeoMYDU%2FtDr8vFM9KW9oVdQsXnGy66s7j3W2hzYhsZcHB0Ams2s%2FRNRxhaZaQkEuIk8HMSBNhfoxzqhX8vRzmcRoGkn9cqxrs9BynVDZY3LknfLegIZKJJy6LG6Ho8ntXrf%2BIxvylNwPsOFDcENv0KRQxvNwbf26Cewc75GcwHyui%2BHY3tNJ5u4wi0W%2FeRsONRnvrLVyLW9pUv%2BU05LJiSzt%2FWsSZCnPGnwxt6Fj90uT%2BpxGpBilkxqKsYJ5hY%2FIjp%2FsSAlPpCJqPpoPM%2Fs%2FoEqwzLvZV8%2BOP7uTYC5reqb2jvPx%2BTDwiDT%2BtcjAvovZJX%2BwyfbBy512nytHMwqqOjvgY6pgFYAu0Tf9EzO%2BockDcjW33bd5XZchydXCRssZ6Iqa%2F9xrwoDzimT0Yyb54Ha1A0UFaDcQ6ZwegCUA63ijJvuLu7bBhP4TPPZoCUB72JFgVhbi1VAwUKRND8%2BbgBy6hDFrct71NnfTeIuxIFFedg1OlizRiPSqubksYcvzRjF0bTFAE9K1LhUi%2F%2F8jozmStwn468YCllD747buHRSd%2FxcdAzWLDYdy45&X-Amz-Signature=90963d277681a08f66f6e92689d81dfc4df53abf204e6f6b9f205419f26ccd78&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
