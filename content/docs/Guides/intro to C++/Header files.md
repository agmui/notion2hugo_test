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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIM4PCY%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCLMW3bnqkV9oHa4nkPiRnhNFBPsOKqQ6CwKNVPKvHYYwIgYUl3bRlKqYg0BBUdxc%2FFwXWeA0nctl8nN8S%2FuN%2BiVeMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDC80hPTwuCwmGu%2F2LircA%2Fr6UD5G44NaQzKLyuMiiE1hHkz4EUCD%2Fc7NJBXsSnGsDp79C4Pf2LA%2F5BH2wHSy0yceQpXspCww8UW1fcb62%2FyxU0lIHFL14mTgGpnJVsmrkkc0aUlgzuwONl2RRc604cs2obQo4SRmUKZXJpj%2FYhH903DYy7XKMKLZoMXiauYqS9rnuuoRtADHcdE9SRhXIyWFuOl3eyHT3X0AxsD8O03ORUp3DrZxHT%2BngnZ9UgXoQOXIZpzX%2FUJzjLlr1lh9cma%2Fx%2BSIDkEpio%2Ba%2B%2F0PNo3v920OD%2FGp6gtVaERJ6lMwK8Su1ecGLAV1XAviCMdCwFDPMpQNze2B44lQdtlBzhBGKIuMhymQY9oeCkoctTBKaJjFaNR2q9jrsozGNsa0Q02H%2FiAJShIQgEMBc9CHbD0bdDb%2F9CIWW4fuFUJJHA4jzU%2F5UF%2FSysPpVWGGprYy8IjJEe281FCbbKEeBpgCS20yp8zpu1Gvd%2B7LEENFgdZOqo36gflMqtqodeYeGHKhb9Q32CxLfVX1KI8VXUQGWE35n%2Bq6PDUNik5DXmyL7u7kPzJFcOK83C3tQISnx%2FDrmi41CV1n3buBXyAFmSQrYnkkOoR0gcn5nmuLD5NYpXniIuLe0%2BVDiGgsFoDQMPOQxL0GOqUBI38%2BBCGZMO7OngzYN3yfcOd4%2FDp%2BYCfrnRC7bGOvzBaHOdys1iFDRk%2BFxGIDaM%2BQ4YqGmrzEk%2FK0qsmSpmXpYr1ZQL2xZWI0VWMWUNaNSk%2BCdyeQ9tT20g2FjXrD5tWDQ7xoZ3cyAMw65E1ZkcHlyy7u6NQY5%2Bfu76CR4Ufwi2TqC9XAYI6ehWrMBE9q3t4SAjPsY4S%2BGYUYPaWzjrlumb2gcmYe&X-Amz-Signature=250c2e56b84efaffa5f9bf093d77faaad7cc12c01dd6fe55cabe7bbcaf3d3da0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
