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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHFTQ4X%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCuSIhrdy%2BfUE7wOwgboSX1IikZmYPJBQcgN2QXPAnJ%2BgIgQrIiQcaMiFnuvpbYhb8kFWIzLspEpG6Fu57tlqNueesq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMYHw0dPJ4TDkld4XCrcA5RZQF4BcyTqlcJq3RV08wz4cdvWN%2FPPlIGeDcz7JWh4oZuH41AHGw59qNk8l%2BxMr1Cw7arKEYk%2Bd8Wk5bw0gRgDkcNbXkVPo%2Fah6oqyoPM0EjPPwviHoES8cbBBjH2ee2hdda50%2B2RWGBa8OE1iZEEW0pG2l679%2BLFp%2BLLpHdWvLw6Mr72Ul1H9218TJFomCVNOWjdKADrbpAGGQpjKkIjBfhEsenn%2FfG0oQplrhR5kqYVOViQGczTasHsK0baKklo5zfp%2BDCWdaaoU34JXE9l4JhHninC4iyqA8cMk5jfOXjJB24JaTwf4pCHOm4rWJmMDQ0QRU9mLLZVcHN52gGDPNsWQd%2BfwRcnQ4P1huJt8CmE%2BZlVaaeKzYYnDhDORTUUKD9%2B4vWpY3u7zoFkbp3c225UT2PcYxCfX0TuNwYoQKwKfuWu%2BpxNg%2F%2BF7fnXmtO8SSZdEozUXZFXSbkLdn0aJJLuGXPLn3BcOoVD1C8KRY3zEIWSayB7Noiukcx9onvI6Qga8eJf83LaKZN6K8M4Jgd1KETGf%2FnGndrFrmZzuZ6VZFuW%2FhewQDkee8f6DpgbiHcGboIySy3DZ5nsNNnnyA9m7P%2BGhjpEzXVRYMK1f%2F1rUP6zet2X%2BlLfhMJj%2B%2BcIGOqUBhtIuZKHcPVehN5OYjILor0cSLU5P9UpSZXY1VefliOjaYT4Yg%2BclagzsXZXN37hdU86ELnjZZfia1McoWjZNndnSw1zR3Zj90sIqH%2F5acjfxAR7uHq4n5ygLeC6y6Rlmv0GL87enhZQ3Cpswo58YMXACbyf6s8lBW1S%2BwQzvN9zac%2FVvw1pP7Nc3XDcaaW0ii%2B2eb87vteKLgbucr79M%2BGGoUYGO&X-Amz-Signature=26bb2c0b902ce16a7890ba00892084654abf3472c8c758cd0780721bb29ee9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
