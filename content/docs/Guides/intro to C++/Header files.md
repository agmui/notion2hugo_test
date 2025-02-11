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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466653IEPUS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQFvmiYDuO1RcQ9oku8OfUpx%2FShMLPYnqJC7kI1uC1ZwIgAVX5pEBdBGBRX4hy8RtlyEO2nj9cvRDHd3JDBfdBg6YqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI901QtjwSxm2dbTGyrcA9xjL2L6Uq5%2BXEZhvVWzIZq6SubAeKwt%2F8joOV3ZW0wjvd5jNbre7Fu9saX3ayeaVZ%2FZyF0K7PhIJzfjFO%2Fa6%2BgBacBxyTqpmkx2BbhG3pR6Qoycm2p%2F3VleXdUgDkf%2FHSrPb4yK6HjEIWrtBUG%2Fysr8HBdHNlvTioWbJAnq7OB9vmWmpuU6oYVIEEB8O098THVW0Zgp6qZpsNNl%2Bihbjzt%2FjbDYxs7JBwCK4gzhpUAoqXJeHVFsSNWaqGGU9sjp6%2F%2BPj8C2tgaHx%2FcfiCsWrPi3%2BmKmpxHzMHkGcEm5347aTQo2aRtOMuny9NXkWm%2BZNHlO0Erni%2FNotGWU9ErE3u2SJPFRSr94PN5eqHrr2u4dnEqrxWs0cOAW1%2B6QCE0PKEHrKi7Y2WLKzZ4%2FkwtQT%2FcsUlErW9IjmBmQratJg6jVCSqzlipIGWMNp8%2BLKKDjWExh33nTuiVJ9PXCk%2BmsCxB7ne%2BhpQSnipilgE35%2BadGutOof4junwUWvzkALemt4g5duZ5rRzmbRY9Azz%2Bu8rxEO%2F5gMZnOLOaVWI0XqJ8L9yWp6SXKdZUHUisHSIx4NEgov83L5rCZqvLFMmokzwONJlhSbQ5QEjGyaavpODjhLp4b20enxEJQqK9vMJWArL0GOqUBh9VdYNQHOCN7kB6M4fjmDNv7cdV40EApFctrlBv9LEfPUQEGyPQ2d5fHlETmCDUS33%2B1MxkUOA4RmwsmDko1NmD%2BEQN1j5Acgek%2FWUJk%2FfBQoFkc4kzfAOYaoE7HBKIhs2bTQrJ4VGdpp3GC266mkIJxzmA5WbHeU3sR4f5ilpaVRkDwzJxz9SmzDdJIAT7sieWK%2F6SNEWZd3xoFvzJJKewwdPkc&X-Amz-Signature=a4d41e96d48985b049386410cb8e55c7944382212d0d397243d5798eaf464298&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
