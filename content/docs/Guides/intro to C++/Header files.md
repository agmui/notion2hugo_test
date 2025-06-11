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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT6WM2G%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFiN7wFd2IHZIW64NFdXYaFDY3w%2BdTeb13X8DLY8TPSLAiB1zDx461oxgzcanZjV%2FcBS5QZHLTE%2BzwLevA5W3azp9CqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACoN%2Bv8KoQ78dw8VKtwDp4Z4%2BBRgSv4uCOmaO%2BD638IFPiLrQh3bmeKxRamMINbIwGJeik%2B%2Bbqb0g0fAkr0rErAvz%2BbdvYkV%2BNimb2uTePpKPFY6XZ%2Bxt8j1W83VaxyB1B3pplTfyUfhd3qeB84WDdkE2xaao0%2BUyYgfNDDGJ7KWZeoyFdjFqAhguz9IkRwLBShN4bAx%2FKXPtYrzkeVUx3BzXaAKIM7PKXI3L1DiQ5xJsEA1cWYKs7Pe%2B%2Bo34r%2Fc6n8PfJvnOHsGVddtugH1vzIhcZjrBzqXCpXKXDFi73U0Istxs65wH%2F93RpU8xOll8UtsNmrDhudxff6hmu%2FEhjytN3NM8VwWLmcVF%2FLuxLEpEQ5l3Rqa4YkjYOL4gRmnKYwbwyJ5G0UAWjep%2FOLXXVPA16UTUm31eBdBvQTTLR7M2WKHtzkgJPa0%2BbITgBufq1caXU1KrenvDD99%2FhWTBV59StimMlYgHaVcGAnoPFmd247jy5XgpcWIlIJc9IdtWTret4C4WL%2FznjiLYU6dPipN9SzVBVNdskkjAuTpJcg0TJM9jx7KPr%2B7MnSfTWbSYp%2Bifft4U%2FFe2oJrjHvf1%2FWVX9kL8OgwM4zr2ry8p%2Fw%2FyZCwyDifR50%2BOSMKZB0V6lNdCKLr%2Fkbzlr0wyvKkwgY6pgH%2BF03WEfpeRw57Y41Bm0RmXo5XyyZ4a4j5VfInX8wKGIIMH%2Bz6gP3y64O2c7%2FACj9qVovQJe%2Bl12Qc0DgTjtDOwjFJlEseYdOJOkzOM83h5jE%2F57eCfFiYFuAjzE7qlbIU33BWRL4dLHMBIctHgvIyTP2kJA1gjPO0g6tnE0pshHDVr%2BlQ%2FSwV1pqmXtTOUBwnUpjZ2ra7pv8TDgYHuoQuafVeAFIp&X-Amz-Signature=f834fe004aab26a5fe1b0982920696daf78091a1573480ff26b27d2e022868ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
