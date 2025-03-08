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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XR6S5EC%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIAXFnir%2FpnzImJINKKbk%2FiAaCn5SGRa8GhZ11UO%2FzhKoAiB3JzLJCHQzS82hezWUMh%2Fa4uasWt8xUwQSt1ThXbT7Xyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMCi0M957NieMZmzpdKtwDsGCXslT3xg2dTx3x9jLXqqcmELSixG3Xv3KyQHxMLbTxrlvMmxa0KjGdjSLDOKTbst9XETfRrjSOsZi5v3LBck2jzNsNaqY2CtAZea0jTdBaaFT8vMaxIi26p3JMppvJua6k2E7WzER8Cu%2BbT8QDEwP5m4izI54P6qZ3ckDsXAJPzIWUdOdgCqw9r1RaXVNnN5cJX3HK49YVyPwOj%2FoAzvLER%2BvGKXyB6wNhmPFVkYHZXkd8%2FuOTI%2BI%2FVRP%2FlTOYqoED50AKLf74Kwgl%2FyFPyvGS%2BjNulcFrKyfRaBDfs7nSHNKYq3YZ7tZ%2BZB7t%2BQaeatLGMybkJXXOw1JnOqx1mMc1cCsdLaRQnAz4dch4I2LZ%2FUPrLWoMPr%2Bx%2FdEwuuShhWyTtEA%2FbBWqRdPrTpBjZ7djYi%2Fal6cFYpY1eB5yZypv4%2BX45ilTm9O2z3Ip%2Bvi4S2YcaIADQUjAawM9hyMwc0QcxWMfDbNLr8ogG0Nxy6E4ZHBYfSTQuA9gi%2B8xDlCuOu9Jv21d7797MMpiBHpNBdUuvMWdAcRmyFtNstv4XW50TKey48Cm3W%2FetIxRZ8wibg%2FrrN0yqsRE2ptTrEoOFmvjWWXKPzHt5QrQ1f4SeVj8MMwBh7QHHSTLDoUw3%2BCvvgY6pgFsw0%2FZZyV3RmRnAh705FcVgXTpS1Jr9E0ZPJPGSjmrh9WhfvlPlIOZjX6%2BKgXv6CJpTDVXScS5pBH2QPZgJ3twUCCcWyyCxdHTdWkeDGBU%2B7OXHm3ecgjygvj%2FhrA6VeNBtH1XUCNESOOIZLCDbd4JnZTuMs%2FKte87wpqkdCQIUV8POp1auZefntaYXQEHP5LTkhYbtw7t2S4WZFrN5PVrb9R1ktED&X-Amz-Signature=1ebf1a2c8230ace113a9fe1c8ed080871a5c2254ac8e3c27c1850ee71e407abc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
