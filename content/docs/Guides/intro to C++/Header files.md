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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2M7FOSH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCyE56cVCIchzUvB3HBTxlzigF318kpqRoLMe6tPY0gowIhAIueMy%2BN9hoUAvFJRnwTdvUTk%2F9bgFHuWpDAS7NPrNqBKv8DCCsQABoMNjM3NDIzMTgzODA1Igz8dAHbjDETT2PecOAq3APnFOodTiegO96qEuQ3beKyo0K74il5QYCu4Dn2g%2BaB36pZdV9kDlmU2zpD7lDM1hX14mrXLuLL3FQpnMb1mN1VmzCCWKaUgpp9uiEPdbgkKN92ircTri5JMM%2BzbCJ0H8CthKjhu0kK3iiJB9g5dhhL46doclfJlmn6Rd40wsFFaI2n2IICtStS%2B1EuYLhqNJbsFyz57CZOECFYExmEfUwzyyddGbE%2BYmJ1g0VQzX73mo%2FvSp3xv4AhP31FdViGEaQ5O9LSlXpuww%2FRYD45N%2Bc%2BGf0sxvo7AwABeAePnjZq1qRaQJG6bhMe77SkQHNY%2F7U%2Bekoiqw%2BGVZsyVX4iS%2BOAFIHx9UkSMYfczRHX%2FMTMpzljULhz777gS2hXghVa1X6bt2oQpOuulX%2B5lMB2JHiJtfmVy%2FJlRBDY9d1XtKnvfUy0Wy1aV42vAyK2eeimyOkNEiJj0C0YSPNIdVkSE8PZccK2UgnqpNSrqiZVbXJQknawxe1hUrwA5sNMd3EY7UfM53r9lZYXhUiIeBE9hXRkk6MRtJxSxXRj%2FKA8w2CRjzobl9eNv7RZ5v%2Fo%2F8KeDOPUmH6bl3YgVk13xS0UtCuOLbLsZeqbyVFsPZNlfZw3l%2FvSBhCUzqIm9%2FyaGjDCj4jEBjqkAV9Jy%2FW3E13h6FHYqLQL08Cko2iPM2DTkluMMUwDgbVTr0bexqnslGCp9nlP3YxY2McP5r5o4CH1ho%2BclSRJvT6DthsNjV6DSu3nT5177oLt7cmDeuBpHgUamBAx%2Fv2Veabrn4tCDdvg4yRRiOioOUXAi3TGck7Z33LsE%2FQkEQN4mL0J8LonWvi4yL9wD8phx5E8mGP6RA%2BwG3FeRZE1l8DBdC7r&X-Amz-Signature=ab3f062f0820ced40cba3d10a602cfd136d57ed221091a4be6dd4a38f928fe45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
