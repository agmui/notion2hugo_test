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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTJJLNE%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk2uxvwRqjD0g7Tehv1UqiuR8XR3Mr%2BHIUWsLjtvrkXAIgOJxvH4zNAaa5VlIFqvWl4ZP7yIIMyQmBCASoav06LOcqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVSNSoaR1SvjzrjiyrcA1w2%2BTeleHYJROOWt4yjdYs9Ej2cfslcF5cxOc3dxVhZFF29mj4EOp0Dk2anIoq1S%2Fb%2BQohe4JxB7M1ObMXiW6kNobGr%2Fs6vPlmehWyAZymVJaYdQIUMtQSaagZ0HKgOnpsI5Xg5vWi8PA9NCUggNoS0XKDH8EqgJaWVdNpYS1TPn9L1XnBNGogXb2B8cGMeiyPfhIyWOatj9ZOekF7Zv6mLNbZMKp%2B%2BVasTJMqqZ0zJTUh5GAhj2Btsb2LDBV5b7a9WIWksS0Om0y932Tht3YQLpFSW4%2BnB15qpxeS2YdWGxTd42MN8VbYxy4tw9KpjyUlTerquDgmsLBTDcfi7xnRlw9ZaIp%2Fz2%2FhotQTDeflLUWW6PQfN2L1GfQiWx9%2BszNstucuNRwSecRTChcRRYzKhmK8o%2BlYUarzzwobMiORi%2FIrGlQ%2FFp%2FGX6REJWz1gxiAJegfaM9Wf2o6NQLsF%2BdFemS0g6%2BibkTi%2FiyOXy0e115kZLtSYOQcIKIHLV2t8%2BproU38RzIq2j01lYvhIGkGdEV8NVuHRKw9VOeHP2TcBOhUkarnx7KZeEP9sRWd0gvaIm%2Fa0EiWaO9A6KdkKiwLt%2B6relMtR1WPljQeE26qjCYY97KCPp%2FEYMd0OMMLfvb8GOqUBTAgcnt2c%2FM2nYvX6bnAXk7EIkXj7DNiyDd%2B5zy%2FNmQRN3KOWs5wgdGaPoUCaRahT4sK8Xw3q4ymKLhrivCV9rP4B1NBs%2BAkw%2BR65NbB0f80vduTomhB%2BG8TIz3%2FNG3XHs1Vm0gGClvcoRN1NZx51eCHw%2BSeeOAwzK6Ii8rdluCg3qhr2pAuzubM0OMexaKcVzmaB2ikTUJE%2F0HqB4xFuWYr0vbdM&X-Amz-Signature=c3ed78a9a25483ba07b3f323ff7f42a786141b506be3ebe070ec7efa3a9f019b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
