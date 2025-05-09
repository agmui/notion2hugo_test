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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG55KUO7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjdx7h1IuFkgeqzzXXF6gpL1BZOk2f4lVvnrIeo%2B4M7AiEArrNvLK6bj0tZSjMZM5nBQpMCzy0zBEO0zPc%2B1NtY%2BuYqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaz6s75%2F6cA4cXQeSrcAxUxF1lCHPWJHGiZSQsvlkG29512IyMWwsgemqX%2BKbOe7KMwCrFE7yqrGJqyyaBDoVnNcg%2BINnI6%2F0NeiOyykuOSkVthrIG08DLTxuUuGEx4zI5nVhGr1LIrszNwqp%2Fwkpmgx18Uh4dJQvC5yUpIiF5I9iZFnnSrAPHJ6DFy6nLBH%2BhLJIOwDjJhJAKF6elQF%2FTDovAAzGaLVmuEUZvp7ygvzUUu%2F%2BS906at7b49GdmiHdBKfbotl%2BnrE1of0QVp8Xm0WdnkrxP3sVmxOYsWUG0Oqr%2Fly%2BNnWy7XhK5Oj%2FPd%2FcL7OE7RzfvVXa3xBz%2BlXtp1a3Yf%2FnBj8aVhgmYh1WWZQpcGwvZEEaJiBkUjb0zORTdXs%2BnugyRNBg8jmGQtK5Ri0iHhMIOtOpiPqpR%2B1yiCfJLoCkgeatHuZaB0oZTRTQQC5P5EPK6rpSrz2cyG679G2btykNAl4JOVckUl%2FKpQxv%2BHGigt1DsB%2FYRmbRhk%2Fzjwa%2FEfyNqr64HemL%2BGMqbBiEdrtAlVQu0W%2Ftwjpm%2Ba1cykh2izeM2L7TnkG3ik82mRYCsBWBRDHDQ1aQ8DhXElLG8zgSOr%2FzMjfUEQ%2F3oyQvEYq4hnzFwYu5r2nucspTIOgofEseRsYlYtMKDw%2BMAGOqUB01WO0dVypHY5gybSHVh114bizjVmB1FAezgsbsyIoFuuMxpuZumb3lSd3Wo6Hugts5KVASRiRLzBxIEc2NwNcjofXNn28mEv%2B0Szd4ihlvcb0leJQWdkVbGhX2OqJXCommWx4agOwGTh%2BHe5KkqMZdWdAPrzFEElkoQ%2F3qM900h94bT1GhOWCv0ajDRCcuhNKk%2FJawlgV2t5xO2Vw6dIxcZSpgUe&X-Amz-Signature=ecccbf86f83eefeb717ca78960ee88e675538cf099ee7fb093ac25eb8497c020&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
