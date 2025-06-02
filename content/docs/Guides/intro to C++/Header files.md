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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3KBF547%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIAOZdqq5L299xi0lfGf2oDPPU8G88%2B8QJPLMGn5Eqz4JAiBWtgDm%2FRJt%2Fz3GhHsoIGldLkxDT%2BJb26nDD0RutAeeXSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxRb9P83Rs1XORVUAKtwDP23dN7qGMOl3Ou7OE7kbcZZASLNce2b%2BoVqT4WqCDxH%2BO6uau64zNQ2L7HaZB%2Ff9TbhQCn%2FpnygcCLgmsBW9za9B7XQMWvO%2FHTOYqFr8Z27POvLL69JyxdbyjFjP7VLmNbCo6uzlEIuhRbQ7r9naG1EHX%2FFyGlCVGB%2FB2SZfcdoxYdhWQLjD85Ps4%2BiyY7aIx7O3Ob64HZu7GGNdfzo9VXPLSNt%2B39JLyn402osG%2Bl1d2UHL1Xkp2KO9dIcHVk0moEIl45E0AYNCuVpbw8eumQOJv2zoo6kiJUsEoeIWB6iihlt5wOQIB7%2B3XbKEkF6MzM9bN3uLf2WnuKPJFlMpYCHDgFmyyWx4KQ%2F8f9Pvn41l%2Ba69yi%2F53aDVjOnFGKIW61mqxmqpdJUFPhWmpFpCuwUROn%2F9MF0joZB0lHq5EtO6M%2Br%2F0r47ZW5QZyMGJYjQI0t6KFaeX9tMXmRWmLnqDEFC%2FbXsdUgni4fY7PcUZqM8mgxblPVFfebxuJrMB0L%2B66LldE%2BLNXMLiUJSpR4ibEWSao17LDT161WXwBAYp9Kan9%2FpVvGSnGoTiBYXK9y52YTljKZP3IJa9vISX%2FYi0LhNrVidMcjfjjKjvH67Oku5RS8cWhT4MUM0K2Awg87zwQY6pgGP8gDei3b0pKLUuCzmg7KeXX6wcpQYXulEdT16urZkzkcxDKhZlO%2B2%2FZNaOBiho7HQrY76w1JShOzOfj1%2BfHy9qPT2ufhjnXIXIUh9VSkXh1X9VcVOIucugMEknhu0j4dZsK8NjeayUmivsP6cz4AF5%2BPcYJD72DYAZBWqYmYFOgTX2ai7nzGXTY9s7xvXto2BNRakk%2BaFJNgmQTAyW%2BbYO27JC0pj&X-Amz-Signature=8797e068904171e3964acdb0e9c4021d86561fc2a895ff306f23b0ad1f497c1a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
