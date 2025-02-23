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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U2CW6BI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkkgQakK0vhNn0kMz09%2BI8bj3dvSamDqf%2BJclT3k2seAiBQoNqAkpiLijyhbvT%2BFlMQBrvY%2Bc8rfOrmscFji3XKwir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMTVDfJor27BfaFAs0KtwDU0HQhwGhWJ4Jy81aeplRkNy5kjntcxIbL%2BcPPh80djNuywHlRr%2FZ567nXUB9L6Ma%2Bm1D8r6ueFI3LplM%2BCbaXR7OT4NOsa11snt77QRc6R0I67jrVtdotdFRs62FQIgwYkjDNHZC0Fyj1LnY3KkXr7M9DIq2ugXExWlqELrg7osUTaxPKunuNaecWJ8TuhSBrOOHmjfLgxzLWFgk%2FxHOG6LLAM1FgdzG6mzx9in3lKaJlqFnPEIMHEHlD1yLlU%2B1fHA7PMZvY6BFOF5F%2FoWczge9hXVkII537HdEWGI4yakITWsxBoAS9xZ%2F57rK94bdnI6Kd2Hm80APF44tuWujctg2EpTw%2BExPfVQ%2FYmDLKl0WGVex1723lEFTeHkpir0JOq7VMrvjhbHE5mrB%2FQqML16rvX2WLBzttlmSJQmN7hjq%2FtjHRJuUU1CwENZuRkxv4FXVyo3JKQAAowyvwHrC3kPQT%2BvCs42%2FaABwyDToCRLVkId4LZw5LAVWz7sN0hmLzyX%2FHkuc7gt21Y%2F6qDXd%2BeEfc%2B3K6e5EA2oW%2FKi3xkyHaHEh6YXqi%2B%2Ft%2FQbQ4nXVBYH57Dte96DHBw%2BAf%2ByuW570TTUzQPW0z%2Bs%2BcpUk7rqdIWps9Zl3dELfD5Iw2oDtvQY6pgEe0m6%2F4S9rTxonnjwRYvR7eVXhnI%2BEqNvTHmkLHWdZjRmAVkKz2pBw3Ukz1FLViTpxNb4fJNOi%2FXI6tlrKIBdJNLxFJT1s7modbMfvrgkF%2FO8yiQf7Iubw3gScdNm4Ej4VrevdqEMKjmjP457HcC%2BEbQ9%2FfqjagvrcOBHk5qBfnn9T%2BPt9eDSoUzhoBpLZfRl6%2BVwUsthuvFuaWI3t5DpYrU0LGdrg&X-Amz-Signature=666f8364526a422d28fffcacbfc41ddc11802e3cde06806dea158dddd66b980f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
