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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJGCJEYQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBkzwLXPLciNHY%2Bk7%2BMkKHhSTHcsm0iPyQpGVxsAGeqQIhAK1Cn8bYuLfoJgQtEnirabPzOJmYktYbn05hfPbwpqu1Kv8DCB0QABoMNjM3NDIzMTgzODA1IgxVKtxuBphUL%2BxjeBoq3APlowtZrvP1NwPBIoknUj%2F4NlT50aGwOH07Q%2BG15d2ADXhOaTbgoD2sKNNC0hqJn4sC%2FMWbjxWDS%2FPGXaTfU%2FcyxD6yWEIAR6jzCKNzHpxYzZym6JPFwfzJe18VxTEilLDhg3hEbugFavMSCFpVM01D14WJMbCGHZbLWFeC87zTZtTlVQr%2BjGu1b4pVF%2FFtPDO3sc50Urpcrab3ENrg3dYPjSky%2BCADjWXOx27rHEPiq3gHF9ENuc3BRuRfvoBWoU52QZvawEm3dN7v7RvJax%2FB0H%2BqLbfT5dOrYqnQc4MEVBRXqutuNFe7YNzYT4vL8%2Fps3jNcvoKPos0ekTNELkeoJcQYT6sFYqhG%2FXeHBZpV%2FpcK4Les2uDOqOphtp5YB2Y3JNCiNcsBk%2FQ1HF8qJ5Pnm%2BesikA1agp%2FRlacEFcrmBQR4snFC4TPh8Mz2tXbrwnQZxnkmjpNV0Fkib4CCZbGo6%2BAl%2FsakO4%2FX2y%2BoO3%2BznRODVAlO9DKBkAKdIzAcaWU73Yf3K19AUo69JVJTKr5Ir9ajfn62yq7jE0FpCw2I0FPzYtEt4JX0LSZylek%2FcXaFyTNQO%2FKeXFMIZgGenjrlkR3JLmSRELLxMh2OA%2FNyGGV271S0SgYgmTzxzDopKrABjqkAULzet5Guqj%2Bz%2BX4L9CydkqOFeQEY7OKB%2FABN2mkyB04MLrSJQPFUpMYrAlGMin6sBDPFbDAlrYYzhDQh2eTaPp1RTF3YrqfXZtdcWf%2FiYZEll9gzmllviFjMLQLTdMorqmLk5zyWWP5vhxF7Bl%2B5pMs6yZtZdxg53S7luyS7LPNpsLtD%2BaAK2uPSWPDSD6Ug%2F1oo0QvLH7PQE2MGnFKdPyY1NV2&X-Amz-Signature=c037a02f8cb47e9e81e8385facd0f7e4b12f8897426563885964ebc08d5dbcb5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
