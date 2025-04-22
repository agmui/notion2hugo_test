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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JIHUKX2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCTT7KEInAEzQjKfPRs%2BaAv2ISstS%2FpDhTl%2BMs4wMlzjQIgLdx3GV4X6EkoC7VgXlBa79tOejhcHxm%2BSD%2BSoFIz0soqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvUgbJE%2BMe00zh55SrcA7%2BtVr0HiI5t7P7nhFv27Caedoax4Auk3kRbUybH7A6u%2FlaG%2FgVn3vjuvj4cT2O5Ab8s5DHAsvXMBWTlINlOZbWHw%2FM7p%2FzVmohTcZGMeJjHSpdx0YRD3r%2BG5ZaCXF6hwILePIqIlCqSpy8BZH8zjB4Pf%2BIHAF53UeAGd5PYIhDDNJqBojBQZj%2FD%2BWCBJIvGvt5dH17OKZ7HF6urdc%2BkmS5KoMuHjGTt0WhT%2BnzN2mZ99xztW%2F1EnBp5hJR9fuKxMnTB9PplSyrc3Bz9Z28WUEdJci4gwLPoAVG9ZJi4lu%2FHtMRVB4YRQS2qn5G61pKo26yEZTViyFq2%2BjGPZ%2FRG1ZtX5dGas%2FwBhZq7S8lt1CfmfQvlq1Q844A6vV8gOcQ3yyilAPMIVq6F69KmMx5vhOEDOOc2UK6g95IBvUSbTivpBpulwV91MIKCVKdEQO0wmx7dc9cCwngNeofpzSxYW3SWXGYADX9nUbBvpD%2BDyLPJEMcLqJyl3fXj3UTBYAtEAf9yaFNHQqzPWDlR0xDMOj5D6bwqsf0skV0jPuDsOaDbzQF5j8NFjcFUP3c4W9eF9tryTP7bJskV7JSD3JMjoXv3I771Nj9dITXFhNBf3eXaHV%2FQuijmcTcqbBBOMLurnsAGOqUBrEJ07HbwnlccM04AMAU12frSLJUC4srLUM%2FRpIkq8yUnRv%2FATPJ%2FtKjr3uxBWRYDSS%2BrKQa%2FjKUwCdh7Yp0MDnFjpZiCzY2PUD8z8Xz1RCDImjpmcaPvi6bfpHSN3%2B76ITVlqLYi5GpRJc4LigQMHlgWUt%2BxqOc0RVj28SwiGnk%2FhsEp9Kc4IChONm4T9xop%2BwSXF6AFL99tRyM4JOTlG9v0mOkp&X-Amz-Signature=c0b0b60583c0a78231fe1c48a0d240bcfe92a373943b67f52af100defdec23f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
