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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653OXMNYK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgb6w2kXIzmJj0N2faDyZeeismJuefpCOW2ho9Ntyi8AiAlMHXLU%2FP6bwsRoTby%2FbXJTWh20RsJzyZNMqzWT0UuLiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM417EuZnxG6rlqVYQKtwD7Tp%2FuEetok3H%2BLFq9Vwo%2BtEB5WaG4UCcZRDSEF7ZTYiWbQOjaO%2FXxg03uztwEvDzTJwSCnIZeFl%2FJj0mPKmudarFdlMR0sRjcC64CsrHpTgLo4vQv6ga1XyOL4tpYhQZZnM3PTAvD0qqfkBs8pmGoTlV6qe8fJ1i2VczfkHzY5BHcRQvZAMCvuZ5gUGIJ23ElWteQZW03wYNrONeraXn4JaLiUUyGartVAciAQtKN7MjXb0mz8Jh%2FdJ5BWfnCx47UiQaODXOg%2F%2BWtQL3i9V3DtIe9pDtjVmYL2InSqdeWAHh7fkF9qwiTtuJRK0Kaufx%2B6V%2B7T5eI9M92X3OXGm9FaBOA%2Bt9zMbl9Kf4hps0tmaLeiQ3MTnCYDDIhoYaZRIW7PSUqqukvbg0T%2Frw2GNaKIjJ4KcoAaXE0lTefefbctxlea7eiiGWxCkMFJot0hpdyRZ9XJnQchHst7YsC9y9It1NemLe6i7tefmDScd6U%2F%2BGqJacc7Kovl3ezZqB2bLbg%2FP%2FjyRUGDkv%2BwZokzm7p7ho5VURDl%2Bayd4dX1dlX8CdFJDiiS4v9mQFUI1iFcj2akLCAt2TUWtQqQXrlo7xRPpcdi%2Ftnanjd%2BS9w4A7b3Typ1Aw%2BQTGhffFAuUwg5qsxAY6pgE%2FQKOlgbpXFxUAI7oFEra84drchAsXqjcB9wqhi4P6L9USicURz3qZk9oRy2YC%2FGWbxFUlxQJvAZuD358t%2B1CsIFWmvuSdR%2FYT5zDGHMZJAhSXKPywIIdDAF1UA51sHfqu7WKb04IuhlHvu0i6MXM1DA0EEz0RS0WJ6Bc1EPeSAgc4Y4vdjiwBHBG9kk2rCDHCUruoaRlJ6tRA4SS2YUkRfMiTNRw0&X-Amz-Signature=48c70479f2c01373c985a2b5d20fa73bd90b828d8cce50c4528da8f3b8f71dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
