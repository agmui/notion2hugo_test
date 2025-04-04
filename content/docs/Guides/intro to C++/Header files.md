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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6LV7V7%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJR2ZYASX47MlH3%2FAfcInQIyh86YJwe69EPI9gARunLAiEAj6te8vuC61CeLWfNYJSU57UsGMSIFow7n%2Bv5%2FpmK5wMq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIYNLYG9A8knFVBjQSrcA7NNNyEfbnEyWpUNv%2FYEHh7mCc396SXs0QXxmOYHn1ndZivUa7gnT7A7MuUg3Iq1FqPxGhRihx8vH8v%2BRc01nNsKS85DnHJzb3abpCmU5U5cOpispGiwecdU47krfzwuWP1ONhXwKiaBIJjSfBFZ1U2aK1mVWC%2F%2FWdaLpzZO1WLrFX01pOW2BaEji%2FnP7eTkFOoPJm6thMcf9TP4TOCZpBhe9lqS7veIwNoJxfhIXhvNOhjmGwTSs2aMLnwaxXHq8BMf8ru1bSqLddIBGX%2FIuDzknKpiAkWpHOYUTK%2FSqUVWaIXzK3WihzyEKM67puN7vPu7iXLG1aAm8CAH%2FLPJbV4FCCS%2BatJQCbzBqwPYivN2rosS3rJcb%2FdX%2Fcc7DfGA3EMWqugNGX1iNYWbKNuhB7AAH3glqaCClcbJGNUgKeO2Niwi8gC2t6aLuD0K3KbcJJ39%2B3Jj2dGEvT5zcB1rei9eC4Ww9dbStYM1f92d0gpDQFRSYLZmzzjIWyKvJcNhSUNmyXqtq5%2BpAnMfh3LSwqjZX5L8GWNkmd3nu9q4CjZMK3lnbfR5%2BqgzNSp%2BeF96ZGXuWBS7lY1c9flSwg%2FW%2BpeTaKpOWSigjVdCy1%2FqgadHCeku1Cx%2FC%2B4kVORHMKyTvr8GOqUBw78z4AnNoNz11DbwcWONVI7B8RZr0QNnDWtx7rzZrxx2iL5sjCpv3SIfS8s61RMcjyYz4uj5wCYAnZtWrImEWMpS4nttgQND%2Fu%2BdyfgN0g4dOW5ugfgMCqiarWc1wTnHB%2FSse57dnrBt5KPDaDkLmf7g%2B%2Fg4PRusqv67ccsZrzAlODtbAEmkLW7LQOEoWv0u9jsTwU2F1JUc103RL0XtRyUZYxGy&X-Amz-Signature=7a145e67f65cc1d5baf3a679b72d678b9f877d49a70fe329a5494a8d259fc7ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
