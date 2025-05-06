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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ME3QE2P%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNjk2J97HrcuNWnct5N7lvmZsNqSRnJY3rAsZO06GNhQIhAI4gtvt8N%2BwflmUNaL4qHw5PDfKGGDYcr4CnY9H3HZDFKv8DCEwQABoMNjM3NDIzMTgzODA1IgxunVgCXRvOADMQQ48q3AOhWQFaYQ1vhecBYlYhBvAXjPJE%2FHzAv7GpVVayJkUjkBgwtXnG9hks3HcetEbraSe5OBlHo%2BR4RcaXYJunUf1JAo27R8%2FQ4ONXQ2yU%2FkkKUcu88iqnhnQlLsGU8sXR8ej9ZKlhOev7fQ4y2jjypnrvZyOIlJm%2FVsyT%2BgLP%2BIeCaNk1dB0OauQsaCI6xLq9BkFqh62UEGpwsLLFQGbWoqMZVRn%2By0lpM10uj%2BGvt1J2nogjpsmPrFLJZehOvm%2BRDlTegX%2BT6rrJPkRXb5eZkKd1k%2FSvzWcw%2Flsgo8YEkzczehhnJYd2ZVK6j3Tl9PHVHQC7T29JYaBauyxkIQpDkaWZDo9Pw3YQNN%2BBx9EuN%2F81YmVdQlb3UcHbPp7mCqlFQJXEpCgEQIhjgycnWghcMIyqxRzYgEtfiOjBkPfwoszyxxnM5%2Bo%2FUWdtVMcCiUxoQKMU%2FtnUdB%2F4r1yoMIVYIOGFnyYMVwvIgc78c5mWk9%2BEXFHiSCUyfcpaz6NZFiP2UVNuSPir97ux9OqjV7BoDB8745Q%2FCMAcy76B2%2FTfmfrNZ9aaPpB%2FvJevZJRZSJ09LLT%2Bk8eZL3tDGOJ%2B1Ry%2FLd6tV3ejPDfs%2FnvvvZw17xJLcXm6w%2B4HRzaT5OGDKTC1tOnABjqkAfQt7DnT3VbsYQIz9lACU5pMA0big4jBWzYHAc9hEM6ztLKOgRnQvad4PiL7%2BC0ehuGNKztIHmtY6ephd75bzpUXLbimBo3PqJGFzcSVa6f3%2BuVtXhJfJiwqaEGBhclNvuYeCFTMuw3DRZtzM2%2FF9dCliKI0mNQkxsMq22xGiQDv%2F%2FIH%2FY5hwxsR%2Bho5T4Le%2BpkYTDB0f84Tej9Erwmfp%2BCB%2B7tk&X-Amz-Signature=70cd7188ce9a9fa48d849ce8560b31201cc799f1ecef45f95cd8c8fc6b7cad94&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
