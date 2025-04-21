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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VBTNF6B%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHv38x9Il%2F2283TSLKL4xztFL01VWUQ2Vh60LzugMAFHAiAlqW9hM6OK4ln%2B2l4W30rxaV09L%2BH4qa%2FY9dRGNTzmVyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMndjDxK%2Fw0WYJxjkTKtwDGt%2Fw99P8xtQfITaU9WR1WD0uCE9JGbllrAwA37O%2BBNx2%2BXPhWG%2BGuIIcs%2FV%2BgG5flnC%2FoVks4ai2tbUI0AK7kU4a6Uy88nayvxzngXlFPWj2HcuWPrACzxwE76fnpAP94MKSv%2FKO05wjd7o2aaeW49Wnvi4a3Ie8t3H40TjHDmKSHaKiMOFiAHrz0z8okM%2FXHBI%2Fw7bVDnjilUnf67iD532m3%2Bt9BTAmwsPNCYpyAAa8%2BhwkjY%2B1wViY%2F4z6NMPjzWMr5Chu1Iaq7vYGR4o%2Fp7hSm873o%2BO9LaQGKuEWjH87ZcqlaXka%2F3sL1eq4itvgNxCP%2Bw1qGr%2BIy6293fooYXdwUnHRVDNoSLSYfQr3PLw%2BUOtBiGrAdXlKxiSN8jdqS9ibMxK8Da7SQsJTNRLbWGig5oWrTzWg4Idp6sfxvH6r6LjPPt5fMSGuR%2FJOZCJWFNjp93p11K9HduFK5THFjLrl0OTr90Gamnu%2FZIaG7R2BCWeRUFt1dYf7WVAvFucfAyau4sLynpNeBm75wT1o%2BMCT%2BJEC1c%2BaQeZ%2BFECiHBiEV9yA0%2BP1cr5A7JDXVldVXiCYbR3znI4uyeAdnWD7kJFGq2BD%2B%2F98oqaXcgInjjYjwMSWMnPLZzBTSAgw4LmZwAY6pgE3Bg09y8bCXZwwQn%2F9hasUODKwTderWBLDuRtKjr25KZmoLKF%2FJx7N6ycvvnUiqaYf1YiWJr3vVTFjeiatZxZwscZLHrhG1KRhTT81Az0DFSpfMgF4KoRJIynmTXvNsGXYupTmRuO3cCu8OK5Yo%2B0OavCEJIGWRZRBNFeHMo1MwCnHBYsQSa91YJQpqOFxDYts15T3GYMwNS5%2Bf8rFuLwsbRad6a2V&X-Amz-Signature=7edd0581c6ae3f76b1e596675d32328812939dbed0c0441c25bf9b1986770425&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
