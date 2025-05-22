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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH6ZQE3Q%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIA6q%2BezZnExGHt%2BVkkvDtd2X3MBIVHySryBS49p69JGrAiEA4blwo4IVsIJ7J25SWo%2Ffqrq7URr3WVkWyLMUsLx8FcYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIad96y%2FJ3eQUPdsCrcAwl1IDjLXCl7MP366VgHWu62iD1uOPiyM7h0hwdjDyGFOqUeFNdJYmiItMLFhsimPH61AoYYhDUvxKQYT5UnSs9MVukDO0FZ8hwWBdicXI1QrGdn7DuEvJXd6O17edv%2BvGflkqndGefZH%2B4KQU%2Fbm%2FPweDObdYTNfwlDs0u7eUQmk3CeTlTV0nW58gd6G3AKRED586sgczYEtCkUUVsTQMow7OjT%2Fq4YF8zaRrAoMaQWLIrDrNGN5QC1glUcSuTmZlWP8Xk30S3hx1yBEANsw%2BTw%2FG0%2F%2Bip0Wu9oo2xFAc2AqEP%2BZEeFvDcM%2F7%2BR1pdj2Dr7IuRq%2BKknK8lGtOZqkA%2BE%2BdXh8e1SFQHHE0akeV3C4ZuljbwDUKaWeKNys5cGcwSULAIZetx041mmyLmnbKPwYU84n%2Ff6QGrrSCn2SzCJ1CFLclbB4%2F96ZEyl0PRzly4knU1XsXzh9oBr18%2B0JK1k%2BwJF%2Fg4E7nN0vYmHPs73lIiX8xfMXREiOcF7WMH0SoU3syqLSK7bhGhPlo6geX9P0r388JIt%2BjaH1Q8CrVg22uaOX5nRYhyX0Q9brPzMGkTM8SgCG6mxqvXh0GSAFS05GK7kRbdHhwgeuyBQWjGSZtPNyMGF%2BejXDH7OMLrFu8EGOqUB%2BXkdY5D3fSLzqpH%2F%2FZjJQK907dDMZPm3xBRmdVc3q9tQ43Wj2Ikva%2Fz5ETZ9oidzgshA5nlTlfCyp09uZhFRIHvS9AWqBUFCroafbEiTeA9Y5v5Y8c5ITZuJOLIH7Jl%2B19KYahBtEvdXJ6PsaucsHWyZwBSXpLSTaphqOMUXVsQduB85eArFnQnNFIUC0QKxTWzhUdupQWnVla3cgAH8C3CWblqP&X-Amz-Signature=9849de8ee90cc01300c6c79154c3a5ccd158fbeaae352e80b232af7082c246d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
