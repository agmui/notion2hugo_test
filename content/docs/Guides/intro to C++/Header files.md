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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UHFO3CO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCj90rEHhEvh2WanonKwZ%2F34r4j5c211aiXfW7AZHhZ%2BgIhAKhUQEPhN0vNV1amNZ448OD9uj5pB1APrjhkcyl2kCYNKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA0nvBBbgyC3hmMbIq3APD8GuQmmB0eGtdO5FSjDG0097C%2Fcbeonw1%2BxpHSkH3VRVeCwyjMUC9WQ07%2Bd0BrmWc7Oo485TOQZHLO5QaKyKAqkc6N5vglhEotTqNpnpuLe5gsPyHk2LUU8f1lRtnTK2tOOHPrxoNbV5XCD8wBsOYtom2E2ZqeH21xl5uDf5%2Fkjn2k7A9h76uc15SXeDYOKvtUp%2BOop3j1JUM460Y4kXOUjcf4VXuO6QIvo%2FGiR%2BU1DeiG54poCJxq5v801%2FcQnQF%2BzX0MhWB3TiPC5MLfaaIdRWOHywZ%2FT3k2JVpLjyZc4sFMEbAkfi31VebqLQsiAIzeQ2unQNHS1fymgWLv4D85BCeT2GANerBrJ0P2t0EQ6YIRBnt9ro3btl93z74%2BudRY5zmgCRcqx9CJMvY7FBdocCX0PnsRMRZvbLS0Yzwux45MT82wepYEHhYcPtjw4bGTwm%2Bew0HJH%2FBKb0tkdLDOPobQGkHPSUFQNOO0Adw6KpRPr3%2BDm2ccoECMn7BkEF3RMqsEwfHlBDWqxMlq1PjY7GQUXxIClDV%2B3piFIzFn1ijTzT20TwO785f4l3eBy0bGHkaotnVtfn48BW9HiYZnXN%2F1hvgRgzLIIRv19ZK%2BwHeJ4BtKl4X7QCDhjD%2F1J%2FABjqkARKgsIBR8jgMZKsjtw33m01N9uGww14CfLJNi1kInpFP%2BWl7gpOWoRnDNGc%2FxxdsYz%2BXU4RraOxyT%2B6qRojuiNwBNEZVJoxDcbCCmMdL7%2BC5bDuwy4l7YhZa7u7paDGK8yYObjN7o3jUmkCMPpCvozJbNv4ScZH5HZxJaImEMnIT%2FOI33Fi15hJ5ToNVYs%2B5UwTPq73NU0FhjF4BdUxE4XMFqu1o&X-Amz-Signature=88b10bcc99d5254cc959ddf67535a38ab7989d0ac2b4beb2a22d70a3a510ce6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
