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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OLAZX2Y%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDM7kGNqsKf5IpGdqo5%2Byn6TBtdxvOtWc9znlXjGBJmqgIgBbaf1kubqIPPkoBULwE8kIrlDWK7ouYu5yEhnFoXVroq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDN3hMzBLcq88oKOzqSrcA%2B1DTBd1kz5aJlgfDeFrAgVC3SxGEoEq%2BbakbNQwfH1KgMVO7Rkytuw2%2BzGWH7kJusWHIaEwi1t4vZmWc5wZg9lf36a%2BsUnB4GDsOyjDY5BeHUyDzm7HAezns9ibNLQag4ID%2ByKw%2F2bxJqSm9DW51KdNrxecFtRaNkWNTapZDJorKOtDDNN%2FCbXCCDQlQWcffrU7WpyOHn49BVhNsGlzy1rCmLE6uskPr41XhgUsNUmDOLUYkkuUuf129u39qh1LLPafxM0eaRaf3gni8V3HON4g1sf22VOCtB6e%2FpwYFEXq5h%2BTui5Q1N%2Bnox5tX0OYaECPm%2BgoLvD9kPCD9cnb679KCjsCJED2zwa6RvhDYOX%2FTu%2BjjInpyqMMsW1h%2FVJBvw7q%2FLneZEL%2BZhx1wMgUNTgE159kUjGuzrVVtzNCoXUXsFaVeVdyJoYPOSX2IIZWFDcb8X2caXpQcTbwheDEqLBwPLci4KcwxfJExBtG%2FEPW8zyB3E9xI2Q%2BZKJSYEyUXUbRPjHmz7%2BJW6kwtJQXwnNeIVQMnZBjoXSS4UBqhGPuGu1re8Zm%2FlZWOQ1yyI1jbOy6aj6NNaNlLRh8xWsS%2BCgZYGU0AefARfzNGOcBTN74zpEAZvS0RaKerqfMMLX%2BvcIGOqUBWKil9mJpK9bnAorIfJykpp1GNlCHJOGDBYaeck%2BgmyTIHFP3YsXBSsa0vgaBPO5SPnB1xRFbIZ8NpoxSX4fOFMi5U5PW5YVdOAAVbdF2T%2Bzq4YGMEYsWsxOtxbGX2gF24X%2BoABezIHhhyLdv2psV%2BNEAX9U48HjvFi8cvb%2FuYAv0wAe347doZc%2FxyCY0kuVhsdzNGk5i%2F4C13uQd6tz1Bnz1XMo8&X-Amz-Signature=243bd2f73e9e8ee8381a553d75d47cb3dadcce9078987919e8cd69b7118a90b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
