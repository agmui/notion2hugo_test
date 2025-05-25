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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZNKNJJ7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCca07fb5S8B6pZy%2FMmJgQZ2wUmG0a8FocTkbGfU08k9AIgFdNBvsg%2F0i7XxRtcGK1ySLU7KyweBVVk8Us3gmBr03Mq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKYNZRZCok0K%2BlXoQircA79zeTxz1zETwHFGhvTLt7zN%2BRxK%2F4cMzaoqKUfnnfltgO2QmSEFZMsSHKHUZoYPQkBPqH%2BfDs0w%2BHK7%2F3vpOZPDMyWF1tq7gXQdF6FiAeaqunUXbloMCVHSsm6247dMmNzdUiYfmPDvAxesgTLqMX1lhlooC9%2F6Q7oFUaQuOG9UTX328cQb2NUdPt0f5wVboa%2FwYCxhRDv2bdsHxUyn5k0WasL7N2U%2FRQdGHxpFKCXgMYExPfwHSyPLkrCNzMnIx3bKnJrEFhJBPxIRfzV%2BiowmRxf1%2Fc7mzihRMP1VoYZQzMFzCUNzqyAyWR97qE4ilnQ3Ul3VeVforfNr00Aqxgt5kGM%2FdGssygEyMqpNesQkNnGML6cJY4owa1gWr1XtgbGVyFZ59OJm1A22ip2jNzYC9%2Fq3KWb7OqaSgZkr3lHoOcXwrFbatoFnYnNZGgtNqX7TL0NB4UwDpUycpr91u0efvRQyQjcawtJ7xN6IdwIRlrcH39G0x3lWuG%2FaBiyTVNfJ5Wa0kKOm7rfdOYbyk0M8jUT%2BHVZpOb6ArWSnEPxcOW6OhZhbUfBf9XM89Is20qpkVMzdg6Un8t5THumHc3PWYuHfvZZhXJp6jKv8hm4wlFe3hONHeIhkT4h7MMuqzsEGOqUBq%2Be%2B%2Bh8s5wTOzJSsv9ifx1aouB5Lt3WhfnKX09Vt9veluozu0nSOGQvF6FA3Y3o2hmTjJsBXMjfQrV7FyaSp%2BO84WfBkptgKTBzakcAi4ynN7dl0avsRPQ7%2FFGliO7%2FNWLoESpQiY6KSPDO2D6Xrh1EQaHkXqU%2B3K%2BR8kOYl9umgLjYJjkDtag8cSvj967BSE%2BMw1kHPz%2BlmgiCjrMT88ktaACo1&X-Amz-Signature=dab07d9b5cdd1cb012cdc4dc1636833466aab200d70d08a924a467e395c4ef39&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
