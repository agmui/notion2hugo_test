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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JYMK4LY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIA551KDnXGDUH1tquD%2FSyENq1tyPIY70KcynTFn0nAfOAiBDRbu0ljMwDFzCMi7nNglOtiq6yHp%2BKN7UlInQLIABuiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPDXP%2Fe3AtrmABK31KtwDzEAJH55TZ%2FN8PKUYhNMVU%2FJlF%2BPM3l8EjEcJjMtTIUrZkanCUnF8xfviKOH6SUPvFFUf08D11zSZLKDUuCOPZOD72LiHvlbPmJK1QKSfIhNKBtQrLG5ToKZMI9v9FOsRJd1VG4C8QqTYkJvHAf2Q8FIV7jFk%2BNfyrXBDIhg1rd7n5uTDgvCDGlfKD9r0Vvolht2UaNrjHameNKzH6Tc7x3KyVU3xA4y1Z0wdxqhy4HthOXbX%2FOOWCWBE6x2rT7jRTjURfF5zbUZ08Vog2CBV7NAt8s64tcghwcCZ%2FX2aatQABKJkFrD4qs3BdybsqIlwLJR9VqyKTdbLvy6fs7bKorxF55pWD%2F2UfGgKJ7I1SKHwsE%2F0vRs9GCo5wvVFR03k6WpnQlrnZjkpQGKgWP9Vn0yONdMi3H38HJK3ldAzEbFG3GjzI8XJTK1Ot71hR3mExkmsNCFnaelxSBvQ%2FVaWM5rGiIs39HUOgNf5WSN%2BxMGjJ1ZxBouMXOk8Rv%2BuS%2F6mYNCe1Z36H5CbfOcQEQo0tEOcrTm76ixHyOJ0phva72Lceus0gfBZzVFoxLJCvKbL6dZgeC%2FNLEVmuEjeayixp28oIvMN%2FyoCMbp6%2BHRkywi4bsQ%2BWkTJK1rLD2wwtaLIvgY6pgHcmbscCOqU6pZci%2FQeHBj3xyRAn0nE69bwDXJQ3zFfhqz6u25F%2BvjalidT6ynuxuv%2Fh2IEHUzVEcJae4DUKdRqxaNb4WxXrbBg3xDGZ8dv%2Bm2CZQTSSN%2BgciIlrxl9%2BI09234ozFnXpQX9h2iHqqXcbv7QTiVFGOaG5%2FMgI6i1GCN47XHalTGuYphgoeNQIdhbV2KP%2BRRDTH7odG7tu4TXw2YaAW3e&X-Amz-Signature=522c95fb57ad615be5059cc5cbca5c46ceff1710bf13f623bd2224565bdc4cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
