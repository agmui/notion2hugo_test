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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH45KYXM%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhGLG3caLOS50s8M0Eooj9YtEnXkrZZHfj1RAF9TUZYgIgEsbiDgh4xYOthBdRfM1gf8yC4pXK2Jm4xcvsXqq1bzkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ7pnRz1hFVmVUrTCrcAxSnPyy3gcF%2F4F8Uhxegz8CHEY9LfoXpJX4nj4U%2FeJGqa8IPONsCBj9UYythclt3Q8gDiTAMC%2FuoKzDk6cLVQ0ineSHsO%2BpmCo94uRjw10dnQRto5FZUj4L2c5vSVl0%2BNh3CPonWXV0LkYopSou7JrygJczkjvPVBuaYb45q4K9WbMKS08JtaauYin2fE4GMCg8vvDzD8bX0P5xK8ubBa%2BHYcvdoX78qSnpvD2h2tVZHued8ulPX8PzzAkfH%2BqxUvTgkse39jISVE1nQK9WtIJe6D7HaVxJQsRI8gv%2FX9RnLfJ5lLsN4gXULtVM1eXXMTBDRwmQtcleObFaSpqcA0Oxrj%2FILFNmaCz5gt7%2FpjDCOqF44dleiOnagejgET44ehy5kS00XkFTt01sBUsJqb5lQEVfjMyNDgBO40V9qR%2FFXRkHsV%2F7uUcJkeW0QIxDaLftsh%2Bow%2BnuM1vTd2eXimqzWYUXeQ63zl2Lwg%2FRjye7DPztRz36%2FR2dsP8WzKl4GlYXIBaAvi9UaLusp%2FtN1bZxxw1C%2BN6eyTKJuI3sBMDQvolEinaUQAkVapMk7FLlzRBzPsGdutNY8ceQb7%2Bcvb%2BRXa2s2uqZyjHVrhuAFQSmklxUWVvKzlZx1pKgFMKymlcIGOqUBYXuLcwv8b4cKVAfvtIpH2K%2FhzV8ZvwOhxaPfn3LDN4YTMtNUSr3HhIBNXPeRE6gN1b%2FFWLg3ki2NSd5uTT00cDsuS3Q5vyeqSpwFfTmjgTvxbsTQXtKmj2KDJv48azQb%2F%2B9yxOPv%2FB9S5tp1Fhzf6YAKVzFJcgIJRvLCznj2FDVmBOszoQbKeMMiu99IFQ7a1MunSzpNmM1ZmZo1z1MwPKYHa7cI&X-Amz-Signature=b801d4e7bd3aac282e352f75bad7a64d1e9b69e4726b62704e935ce3026d14ec&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
