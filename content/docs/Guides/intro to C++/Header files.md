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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5BGEE67%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC%2BTatEN697r9e4yMPxAlkhLMsnP7NxgD%2BLpvGaR8nuSgIhAORr0jQAUTY49rFVYDhcWwwXQ5PgopwLEoU8SJGtTVpmKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqL5d9%2FILxTSjrcDsq3AMPT73KhZpHnf0CLjxh48G0ROrUK1NTlDsS1EM0T%2FqMh7dI4D9jBymHvzPkQy7cgT8Fzr9fsFX8PDA2fwO29XOsQq4eUT3RHc%2Foxaw1Y%2B55Zc%2BfWjew71lDDxcm8mQiIoJEhhgVfBlB5oByrvym%2Fs0O3RPYr9lHiacp9aAUv7e6Z3YkSxRt6nYGc1ewE9P%2FJ94bUa8qZ%2Fb6WL9NX0V6YJrGRpe1tMjjVe5Q05Li2qaHzunaCb386CUH%2BcsjCRFe0TnmnjUyLaglClEvjZtnP6EFnVGp25qtQTXOlFZI1uLnhOOeauuKxU8YPbMFcv0CwSt80IH%2FgekzMdjN2JXVvVXlKHV9eQRZ2FXDj94YrOfMwEVpRZUIv75VX%2FCmgxf5v1vIHS6k%2BDDgmh1aW31qaegTP0%2FMPvuDKORSAp7rzlmCoYEgraTeuf7BpjthuzoYTTGqqmB5cUIYK8uwz8wHZ6OK0lqYkSgIJpyXwmP%2FzlFqe6ru%2BxsenmDOCjswsQMnmmwLZAs8hQnsGFh1%2FG4TAQwb9eFhr7xYPULFj%2F3TRW3BHlFXiWt19p8548jK9CWTtmRrtrwPPi5JsRzSaDqD5DM1VD7qLDSgoyhG%2BEz%2F9SExMBvQE1D%2BMzLquA1eGjCelYy%2BBjqkAWbRDB049CHMahxyQUJZNYpG6%2BgqxNPDWjrv53IO%2BBk7aF552bOHHzUze7LQkyH6XWpgNlPdMz7%2BpjEVowud59kRxmEKxBWBNMKod1GNf4gSPbQ%2Fpl%2FayxB4TzoWLOjXDr%2FeYR7ZjfLDxh8bDmKqe4YCIc4zMGIq6Qt8fdzftb50KsAHUWxDBvUodTFJIYBzEkr%2Bg7XmIGmy%2Bn2qUt1GQqU8j4rL&X-Amz-Signature=491f1f838e01cabf7e4290ff525ed417130472be597b69d741812ac42ad6f494&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
