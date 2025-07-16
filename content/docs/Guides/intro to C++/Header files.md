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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GJMILGK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEpUuO%2B4YMx%2BoYMzAL4NSYSWBhZjmOiGfU2PCYFuc5TqAiAcUzhKhkDPiHmKpAt4iYRS07PoWOfRL2d3u%2FNw3wmNRSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMxOR6JKFWjL7gPpNxKtwDqt5tIH0hotfSvVdMc8V7dnFUIHks0ZGsxdRbkWcPJNbWeIzr55QFSsbpDTaHTGt4vpL5RNz7ww6a3Uhya1yLnjxz%2Fm6dngjcsWCfok%2FUpVg6nIEisArTD3wepkJsz7W2c1q%2FeEJQ7QTKs%2FEZHG64m4LPeG%2Fii5VlqwWkxHaT%2B7IEdRhM22i55kBMeLIK3GpX1pKkf5p8L7AafXo%2BSRV9nhyA3dryZOieuSX0%2BK6KKg6puJ6y%2FVior9u2OzVBK9%2F6hOcIAg6NPmo2ztXx9AXlKv0vc%2B2gJuuc3tOjmkFWndxw4O04vY1MhcLLHEA7%2FzfkAzuBJ%2BekTEel6Dw6vY0cEUAULs9aRK%2ByQ4%2FAXIJc59z6nf54%2FqZcRj7UgXI9ed4BGcsZHg70hR7nnoZl5Kt2Wej22ZhZnGpDzTdwfcZMn4VhdypjTJrm%2FCuzW682A97yRo5Q8x66vdjWY%2BysYCQj7u%2F16iD23jOW4CwEm0I3W%2FPYU1MAErcqaxwUTTIzVS%2BbGUdUQS1kH%2Fivo%2FFoFEu30cb3MfK6Y7bLBcBQSws%2FgHCjlGNFIekgK%2BSur4Y4ZDbc3LX%2BG7o6t4QHtbi4sJfy08i5vR4evCZFQTbfQEwwPzO4nHRh1Cte4pcEgbUw8ZPewwY6pgF2Z0uoNbYIr7wFBKUBTQaQ1QcIGUUkxh%2BKkrBPbiW3j820YRJLAQlOEynGeOy3RoI91saEMMox33XyRsp8KJVBhrw67uvJv29XRdIMxSonEM8JA7%2BT67%2FkIXHNMtqArd7OoACXX%2BmDxXZBRyvCc3NKsl9ww3I5BB04uY3qX5hNWVhYLUvx0dlt7hUQR7YquF8ZgF4%2FNv6pZRxj%2BGeV4PIcOvLNRi%2Fa&X-Amz-Signature=16cf637dea3330c2c21c732c5be5bc80929ecd796a52547aa4c3decd5190e204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
