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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNHZN6I3%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD68oEoZlABlXNUQlWNrsz6N51WBwe1tYQ4F7VosX61hAIge9q2pEfuV7JjHPq5gQG1KParjTLVHJ%2BetWgG9G7duTUq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLxn1Qsv8Ifz6ZO0eSrcAwqiB8jGKC3Q6R7Uh4%2F9MUlo1PekMwcnIzMAXmw%2BGJs061glcM2WoINdmxSKvx7Srb8%2FH0WRDmeLUfohENNySPEog3XiA0c8Vhr%2BcF4oG9ClgXc4ZQe0O3or3zGIGzLKTHTBMORLSsagnlxzF1ToMADmaujK5nExDdWDqEQzv%2BXLb8z5mP3yfWGo8u9oGMzNbQtGk9IwRlOEENdmrgyYxfutUmJnbApNpTcGS%2FHrUUzxAv4xUKxQhZ9qNrgvs2EjXtAlRg9sfS1ibnJe%2FRTms%2B%2BfCQP8ZYx4VWEqKs1f%2BXr1rbRxOCVEl48nfqZSdDhSb8wOaLZAJ4%2BjE8Bax9Dn5jsuCVrduBahHzYp7cL0G37PJb4poPhtN65GCgzFFqu3ktwYZ%2FC%2BdwbzNu7iHwbvlmRT2BPVEStzqbKlFJn%2F1Fgn%2BYL0cvaQerKxJoYI%2BtHf0GWHSIT0jXgwmNExyZ4D%2BfnB7DqS9jRZKAUCWYPeWwYGHsBMdEDueCsGoX0BxuvrKN%2FhuS15X%2BvgKKF0294G16HjvjXLKDWJKZX2SEFv4MoOq3GbxbUcwoncmqR0lU0a3RukvKAuofqq4ba6%2Br3Sg37NYrfP9lW4eenL2SFD3ytvE2G1Adrkt1H2tjsKMK6v%2FMIGOqUBx71K%2B3pIl%2FpTf4RzeDlnWWSsrtHYcOuUGR3j2gLg%2F7diwV4FUtAzakAEypjFFD3c4pGNZaGelpAQOZHio4NXZtO%2FOJrwBQU6nNJ5CVkyqQfqTNWxrQokklwHis79wIvLlmu6tkfZJf0%2FR%2F61DHDkAcac2WZ5%2FkkPTOrJtkkzfbwNiomuNDF6In6dMFicXQWl2ZnF53BS%2B7dKPnfSeAzUmnkOJVBT&X-Amz-Signature=84b853d9386de247961ccd7109a0c1d0a824a9df0f441d8ecb7c86cc6b8cafbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
