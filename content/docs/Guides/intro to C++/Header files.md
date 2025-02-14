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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U572P732%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCll9uHqpXLGxlLcw6C%2F7M9txVCDj1Hj0rmZj8WIeWMQQIgQylGWxBEYhtvMlL5NehHKLjd9QP4%2FmKV%2FZxKw2UP600q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDITHedVtWYPUPoUXyyrcAwzvxEbS43UyN%2FKRZg%2BbwbePKRX3UXm5r6F7LbuzSFGl%2FlxwUspPy8DYtJnC6fefbeudmUg4nG8QA%2FWwf9Jc%2BunCelK6Zk7fNfe64ALecueuG0jcsa2UvKi5i8Y2HbXquEafa6g%2Ba1x7gRyR0UZtNjzvV%2B%2FYSJZbcLrM8UdoVMUwuOW5vOzEN4pRRDzXODuFD4E2OfK%2BWxRyk0jSh3g7g1o27udXQeF2o8iUSdr6BlflOhfQJFJYiawMJuTu3nnm7j9Jl8%2BSKJ4rRP1nduyIg%2BObf5A%2F%2BtlMkb1l7unBN5yya6G3zayRzqEIstcgsquv8AQAEinTc1xQVNIXlOUUbRj2m%2BTvnVldWewkys4R4ZGCGG%2FWYuBmCia0FS5aPcntKJv71gorKOdnDzYkiYNHgMK56Y2ArJm4CT5IqhSrcHu9faUrDIYesCzEeZ1JbS4kyObWSJxi1g%2FlkzGJogOo9Pt9ATYHjCsSDlxH1ak2R92e%2FC4Lf%2B2i6lO98d2kbXPmw9SG%2BWjwTUYSMWLznpbM%2F5St00PuwaNEY52I5pUx61vyozSAe7JPNjouRkIz6WqoV7SEYnGElnBH6z7o5C2B0vqxbSRCTWjhIIm1xXg7ChyrcDOsXIuQNVTK9FOaMMnRur0GOqUBeg1UjSY64YuY%2BRlhhr7yNTzqP0nj9RhUnp2KB0gggeRoXZc0m%2BOXtPMKyv5RRVgzEkDx4Ir4G5QzvkKm91y1A0FhQiHp4GryRP3BMI28FTY9YDoDiGhAm05p506OONwgoFMAnqCTEpO5vTDGazohHx2gcpb%2B8kvHn0WJ0ybmkeoVq1JQ%2B0NxfbUXTKDqZ6UZOGE%2B29XHxvHpKBP%2BITqrYEuBW14%2F&X-Amz-Signature=9cb2beb518d1cd7b4e78e82efdbc60ff82d77e6a3f1d5c6e097ee5a412394c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
