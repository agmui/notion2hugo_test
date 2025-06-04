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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3MFKK3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIH%2ByiT%2BKWERoVt8DA9Pmg75ecsAsqPQCTa8YctpcU%2FgZAiEAizZjZem22EPlJpyNVvKRxjIxE07zyB796IjcjdY7NrAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDACLDSUNbaEHa6dm1CrcA8FBvvUhbNkeOKblTqtfM4gHvdjlAW5OR5chZ1cGX4X%2FckcYVDAq8hJq9%2Bs2FuISyGjF7p%2BZv%2BZwhh1REGQHiiPrg4%2BqUW5GX2eMg85BZkiSH8SNKz7KXkW66Ket9NlNJJZ077ZpNMzoH6jOPspeeWHvgSVtm%2BQjPlmc2pgCyfIn%2B7IM3jK44FVpCMiUU7eBJ7iN4yQHu2xwkGQwtpw0oGCHR0w2XH4uugJcCOQyGCctB9YQBT0X9sDIQssvtn4EUMe1ptIWHyr7oq9r0iDABL6s%2Bv7%2FBOHvphg0J69%2ByGE1oE4vE8oZUWUpyVAzmjYLeSnQZJhtvQ82KxdtK%2BmpQN7TLph02ODCkWDeOOvLmToVJzEmKXwuZ5V%2B1ubPlZLfd19YuoNgEecC%2BbvBu9b8RuSc6p4DsTc9NRMpK7VmiliO2KKH2We7rE4dSQaH997ZVLsTnpgs68mFp%2BNww7TIvm2RYc9jclO5es%2BbsQ2kBQke7T6hc6XgQaKuybmsZC1ML8YfqNaRbc9kFmxgiOojLUyNyUupckOIepeyYc6d8o5rOupZPdIocbe44RFg2zIR0zQjjhUJ1121FHTWFPDwSsHQdYLSSqvlJ025TxHxLNxw2xVeygsc%2BsUjaD40MMnUgsIGOqUBlD%2BsOTfoWuoMm%2Fy1%2FbeFg%2FsrfFcsUcvPp7Elq4UoJ%2BcsoKRrOYY7E61v7acdrZMq%2FrN2vqVajzg79xq1mJWNVLdW7T0gyLxHNC5Xb3%2BAFRyNxVimsz81BSRimzWX6cXz3RAAwEhnEKQ21W6WuyjS5SayOI0uvOGqP5vGKh9Y67dJc7QePToRy7YMB1rRNmqjp2LF326Kz0kIc5%2BCnXNAdkOi%2FYs%2F&X-Amz-Signature=2a2f991567240b328e032d83e3d61256c1c167b61ba6df9aaf604ad508d58d96&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
