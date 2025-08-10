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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC7UFBOT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM%2BF94R4%2F%2FdZo%2BE3da%2FWIbTn02pH1tnvTceAvGbUEi9AIhAMM2KdDOCDt5v5ByoPrOUiXUqW0S8I2CpU4QByr8Gb7dKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWOR9SZInFXhM5kLUq3ANAX7LnXp2S1tj%2FQiKePqUqo7PYZS4kk9pqidyFp5R%2BrTlYMOdDCLT2XP4mYVasM9jPRH683egjyoTqarZHbQ5tsf%2Fg6ayaN4cKBdsQ%2FheeokomW6EcqPx8P9OvZcCSm8NX8oT26OlVIcBS%2Fw2TXGU6jBeGraDyPjrg5LZ0ilklIUyrR2d14U5%2Fwke4ntYPMqLviHiVoN88U2Hoz4twcCFLOf%2FPDCh2JcvjPI6HfWUvoUL5ShJKiGkMVSqO6InXTcQ2ocfMtTF5qSXQUjFsXnna17eb7aL4O6MC2m1EBlpsdqYEfzL%2F%2BFqYhftSjisi%2BogoahBFPXeul283uN27FmWuNlsGcXzfN5VjuKODpS5oUsQ4O4z%2F2O61yIA0Ro6ZqXWrVU%2F9%2B6ol1iicJV0lp5m%2F%2BFnsxUic6TlZr57TE3RvO7XSMszl6J5MmqXKMHLzkmoIyrD0IR6WCGVpTdfoIao53SKu8O1tVVcH0ShsryksZF8d4iBjJ6BjzxuEayZsDwtxRRolf10Lc3I2iCwZ9zpyFOWqC2vXKkqB1cLoQDgLLQ9S%2BKRndINzV9VPTlA5cdeH7%2Bc6x2J0or3iw%2Fd6g29vHLyhoWnzrCopvkwaRDvHGYfbxdXiecstnuKuBzDk9eDEBjqkAfZsQ7V0RTXDECCRZ10yChhj4iFIBDBRk2mN3BMfyMFTJYDGZeJLrsqFShVBUYK2vUuRckDrEqk4GoERHKbkmz%2Biv0xWuIvif0aXKXKFepIY7pcdUllEKbOOQUuVOdhbnAv%2BTIkPDp3J66nndtPHD%2Fc6EmDqgI%2F9YH8Ku5OaIci5OJex5FXRr%2BD5hTectYRcdgbeSPEFh%2FKMemgQcc6XknOGxOC7&X-Amz-Signature=e9fec24341abb0e86d0d6c82cbfdc5411e85f6b129722e67dff823fd3010ce34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
