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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VUIDZ5Z%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCzMhsZsFKmSPlOjmdPUXAXvVD65FtHAz1CZ%2BAHq%2BrgswIhANbWNlQPlwgNcgs1a24T5WiQg%2BRWOI1T8glayGcdNTLAKv8DCFgQABoMNjM3NDIzMTgzODA1IgzAG4YdEpSna%2FJfQgwq3AMJVKR6DjIQFSUudq4LhADoMpHzz0fN2sL3t22jLVMzPDD%2FvnpjKeAj9JSmkzIPJTCSG%2Freicac1aKafhHkd%2BlWmns2AD2lZmtWWJzi6cQXwqyHt0uzzL8TuTn1BC%2F3XG6IwCr%2FK98Awj7Hnl6uFKPWI7mCNNuG3ORGqVxPZyhxBIZGmI1hfkPtlndjS0fpBIe1XEAldn7NovNKkpy4dZU%2F%2FMk4Q6ds2CrnuDHHET8F1gDW5GnjQFKZUcg4Lcy2KDd8alPOlnTA3QHFjqaubW8bjo9M%2BDrD1ow8%2B2QK7qThKA%2FUAw0HxMeUeyDBIZCxJMNwyDPsBMV3PsT2OHFOFvC5BeStO%2FNRSi7FyEYbv3Glmd3t%2Fxz99dRx%2Be0uWIZg6MueeverlpI2cC%2F%2BwfdW2kEiNa%2BilfXt8RaMEGXIOpkqYRG6MuUEmy601QGKyj8FSIlMsD9%2F3Xv9DtTKuu9uWAPOcNpVAMsvf9ARlZWXAYDhrTq7oyXZLXMXNBtWcXJFLMGAE1RC%2BvB93fjW9iOq%2BL4vCceL2JaHwRqBKHhEirCFdAKZie5dHR85UWM7j1uGTGZZAtD8Vn2EmkYs5DX94N3Cd7RTmj5xbbLQgnkgbrbs%2BKrAjlS4F8UM4kjj2TDBnorCBjqkAdRb7tUiwXqbru1y2jwWUaEgR%2F%2FYh9wL6Q8FeAxG91HI%2BGM7SsSPi48KOCWcmBTrfywHl4nhEq1KB0aYxISqoS1%2FxBH0ksXCNyYF1X9g9plqR6nLvPi%2F%2BMqMpiMzcgEj%2B6Vl%2BkQso0b3EkKvyDJqyUyi4FQD0TQybA6rpWYWLwh9nWP9K10OKkTLPwV9BLu0CA2o%2BWgYC%2B5%2BS3D0N1GnOcZA09nI&X-Amz-Signature=8b53c119fa923917098cc8f83e16292cc949137967f41a49364c87ac038a070a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
