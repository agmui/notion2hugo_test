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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RXODHET%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHVYPcwLeDfmGqykLyFSVn8DGwW6PHAJz%2BdcE3MmXAFAiAZXPU%2FEA3z6GsgxK1S%2FQWGJQ8lbBs4t5QOVVmAzRPYWCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtWKvphbEU70aYzA7KtwD%2B185srD2cOrm%2B5OQGxNsyHzYx66R4BdIMnQmQuHQSNvuJ41vK72yu7DaalfCMTUUo0dRqmxI%2Fvleqt%2FzVLgglurBJ0%2F%2BRST6TQT7Ywd35ZA%2Fud0yjkn%2BzVXCDQuJy96PEl%2FLd1z1H8w%2BbAGhzvCYPy2tGIueOOH3wzaoiKtftT37W%2BRwv%2FQ%2BeaNqyQnP6QubySMEqLa0FJ5sTNh6P66j0LHfe6bRp%2FJUHVJ0sgQ5dRPDhBBXJJtGajehdkxNnlg%2FJwoiSdGPyUBM1MQHL%2FBHNKfqjdfZ58FxAgQdq6kojtpQX5SeZXSlpgdmG%2BL3oUyZraxIDKTSe35vE93xHTVbiVYML%2BwEJL0Tv3lYU%2Fk47Zyg3ktPf1dT4mUm2uCuO%2BmJMjTZW5vOQPPh3q0nf5wwWGD%2B79RPWd6s%2B4yowoxaEVXOMDpDXmGfPmWzsLTgnWcO1%2FgRl3%2FBBzYFFzsgcg1iLYoTLWlhjbHXT8cE%2FDjhHXcP6p3fyljM%2FDd3SFdVYFd5u%2Bb4J4CfNUfvmtdcrCKmESedi%2BilqKmuF%2BZbC6HnFLWY%2F8uReusbpjmswiZEHXik8O9biK8ppx2DaWwbmkluQWOmhbKy8J5i74o28Tw%2F4vEYZ3WcSTu%2BrVxRIHUw2IPrwQY6pgEX8qP6%2FiJUrV60wsUFaGEK%2FFoRqLxMOWMahYySj2oraga%2FsxlYw1A8KrsdBh%2FUCydZz2HllakZRgF8y0AgqYlIsFlqNWeCVqG5Am7na%2BYfUlbZ%2FTEFdjMhoAmgUYE9SISoWFRlN5db0XcsZYambvjazbsZSicnYyTHerBPit1673Z5hEZkF%2BKNobz5HcuqK1LB4y4lW2zhS1jOsEbs%2B752Qkp%2F1qFW&X-Amz-Signature=79a5f5f85e142907e289d141777c78982765637bbb6c2be50e38dc6df2fd1b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
