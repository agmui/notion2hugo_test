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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632DSVE6Z%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGtlEJ73c1tfkZS23iD4QV%2FXCDHudt%2BU2dRmMypAZfiAiBRFJiWerICqPI3HniYQOfZ1uKFOgT36n%2FMJMKNfY8XGSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnbwHS5RyTW4J3S9RKtwD458qlnbxS4VSVPCCDVec%2FvIKWGk7isYDG%2F5AZKftBfYRVuHJnHIf9U0IvRzlH5qxAlGa5hfULqzVfbS2V6b0lB9eR1DRsgxfFNfHnjpGgbN4ilKzWlvGPFkxV4uyOs248El6RR11iDOMzukhgrUADG3oTrMJ6mL9SLr4nSIIRhrp62v6CUMsycg9FUw3Cn%2FwBSDY7M80PGrT4v%2BeWMTVo3e2vlL%2BxLJA2sbi%2FO9dEz3%2BAzlPHyJDyg0hrZeODn5pfdz7wNQsAr7ixmRy6MYeNf1uLVw6Mf5TOx7RZkBuCNaGBushakeV9I7BIEZGUDO5hT8OIJ65NTCeajGxWXWoASdXMqewVJAgaFEB5uwFCyrwERSHyW7ePcd8WWaAXXaU4ngbrA2Jfgv%2BISRBi26XfJA3kOeOG%2FzepayO7LTNgZeO8TZ49AHEoVemar7w9ahbddaDKPJvktu8%2Bhq1oSskh1XDdI7S0ZvlAOqJ0kuWufKDKsJln99FsmgVALPn7sNbQQhhRVIRPach3y%2BZf8vZ1xt%2F3wTmtxFIh1pqoG0dC2x84uGwQrR5UirVN42d%2BsVGcNQl%2B%2FZOu%2BuvM8w3PQutuFccTLcVbimprgWOESF%2FrlgTWXbLxJJ7%2Bt8VTGQw47GzwQY6pgHCCr1y%2Ba4V6W4dkacYYCTpJm2N40zZwnqykmlAcCVUHpp5c9fRvrTcIzXt7zzzJAKr58Xx9LW3qza3kBotEgnCPFGYDQWLFD7UzfMGu6l%2BHX15uBMgw2FFP1%2BdBmdj%2F9KyMSn4ZF%2BfqzdNssfHMHLhUTHBKRq%2B%2FpgQpNxlJl0PuKaHx4Cdw4uLQs%2FQLJJA6u%2FxoyaMOnWbw4tKR59hCkfH3treVWQG&X-Amz-Signature=0b4dc6739141d7b25fa59c79bf03f332ab60bd0a96100bdb200da292a7d7cd8c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
