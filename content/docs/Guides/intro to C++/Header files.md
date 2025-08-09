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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GR2PWKR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDMgrD7tpIAMhYlL%2Fj3UF9UooJC%2Bc3LliR8uL4414L0iAIhAIrzCRS4SfLgnlKcD0w79g3f9%2FfADrlnywMmUd9GN4pXKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnYlmc6oLgG4pl6Gwq3APy8Pt92jCPndh8V9RWFdrWrFr3Std0Kr3DWmD%2BFqqAm14GcbC%2FStV7aNt0HLWNrsp0PyKKZj6yyWVSYGev8mL1Wsho0o9VtAcf%2FFaPYodOsLVlVUvUZaoJ1DS%2BIN%2BFAyMgU6Wl3SB74KryMGBFQH%2BOhDOr9G%2B5iIKTzA5GG4g%2B9y%2F7YKeHAHE7AV5mkA3k8LYRI%2FuSeZup5D%2F2O7vp5B9M4mr9rY4Rk0xK71KGZxrcGFXK6Pp41P5IVzMOrVsN9ten4GNwvb7F7JOOV7noCFDl364QAWD6nRYw0ktFZLxtiyWnXn6u5G8de3YuJz3bnb4lYsnZ1lxZLKZd2p0%2FgRxz4xCN1Ibr5Wl7idw3g8v64XXzDa71Vy%2BrDuUnRc3YlNLpeBLrTH3VcdMyM%2BMs7u7lxhxqfDInimO8PDSkKoVEpGbPZRA%2BW0VXl7bLtB%2FYMLUZAyEIHc%2BUqccdmo4Nlw3JBt2y%2F3YuZqj%2BT3CbcsFsw8%2FIwc6C5%2FNrtmiCl5z0aghrS6MYgH2vzmfvR9TzcOsmW8WFWdBE3kfRi8KdfbsKt%2BHGplvmixwiLvPROGFEGTmEfzZwv%2Bs3agdhT%2Bglv8wDWQ%2F%2FqL4bW2rtalJawEgOy5mKEytL0TV0FnW33jCnxdvEBjqkAeJoEKZm%2Bn84I3xMHuykotjh6p0IuflOjuS3tdUoB5O4W51lf0lm4D4ME3NiOLyuaUElIaqOIsiWj%2FFhOiRy%2Fc3KgmTUhJM3CoNXrY3cdgzzNns6hsyht1uHErRHtN%2BbDTNhngqIoAKyGjt8SpQy76OmIwm74u%2FGFWvnue%2By6OtExSLQPwePyr0CpFOvuDG2%2BganfR06Anw1ECcqxnVbBnDWWBLq&X-Amz-Signature=bbc635470234b5f0c7f717a129896217cef0ccede39ac963fdcac1a32541998e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
