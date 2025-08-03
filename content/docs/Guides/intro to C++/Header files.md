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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC7Y423B%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi95%2BNFglIxLSLO6Ke9xfX3IbztAOmP2jOuesRg6BwPQIhAKV8vq3QHVLstJaSoUshR6pbV8nK98bzkFG9nmBB4HHPKv8DCDQQABoMNjM3NDIzMTgzODA1IgzMGm90lkag4Je4XXoq3AMLgerXDm9g%2Fs7VsuzsmBnUqMCkJUAQaxE24mqhRMfP6OUNIVccmECrl%2B0eNr%2Fyk5V1VGxru10kls4B5yawtzEZZtrX%2FoMmeqvXtGEFRfoYm0Io9Rtq8k9KDnswmJexgbpncSU7FYyhYM2CdsDE4jfLx2Pm0%2BfJ7xt1K5RPm9gL9HMRrzVh3Zuty7s7xVpli6jDMcp08ySO45Mgvs5wwhFMw2jzocQaxweamtVJejjOMeH42z426OObuqojcIqP9OGCG67Zmz817Lww4z5lvISU0FUowikYKr3nfuxOLb%2F36bDjNX0qGwtFheygBw4h%2FEmgGnCxiyMn0jxVG19%2FkAFE78o4PtgE9FATGjlECg8ix6EhAs9CUP2a22OfdtBd07X3%2BpDZEp3Amez76pJSLp5mQjmcbyPzCnvLuR9RgKLjc83GD5E3dzht6OsgWV%2Fu0G5OkC5drdWWSHhusnjzz8nBz1LuXK3bA8N1aUxG9QuUF7IDm86CDUqINUL4C0rp%2FJoO6nDgCYxWl8nRGGePug1SpgRsfNQmxiRISvJ%2B3DxHZ2tyljeUIVNG8m%2BGY79Q331yryF9%2FcbdZGoL38tEQ8gB4bdD3JNA4adSSYeSGGFCTLAVxQoVWtaFpZ%2Bv0TDD2b7EBjqkAbSzYMtze8PuEysYXX1l%2BwBcYJx543QoWUWW7Pe4P9eDUVfcnjKUrln32sdahJKJdFPr2IBvws5HIzNh02DZE0343ba8AfUXjMwxfMrI2ckplOu0AiGjp8GUulFGcKqC3UEfFiuUqa1AjfU3pfgNVsiTKUY0IpCqFaGD9yrw8dKarlW8gdx6j38qrdjt2SnwRV2nUV%2BRgtTYUgzlvFst%2FOQV2Npr&X-Amz-Signature=e079891e6de0c1dce709bed72a57a64a04980c559edafbb848fd89e4a574bbef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
