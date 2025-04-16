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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXADDJ4D%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7i5lEAgriY7zvv%2F1Q7m%2B2mawWqwizl1SJ5rHMIkajmQIgFmN9IOcKgTXSDddR04lCDPLDcRSIaQgcEIkiHIZ2VL0q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGMyUQg4uGhkijvQ1ircAwTPMJgJ8QbaMVYtar%2FXU4qpvs4FRwmzy5mFiOgIBkcH3LO3q8nm0HkBhzg0rRnlX7A1uw6y4aRmrlj7FTQhAlTZcS38W9kkMvnwdgnnEnHUFmd9b%2FS3iCFoss5Fndt%2FPKbppoxnvOLHhViPGDy%2FN05hQpLgrggd1j%2BvNk6SiXTSxG8zGOGWhlJglCB3QyEIDPEgCL9TxY5jsIq5xAImnsfFAWIIkpsH4w5oLq7s%2Fo45L1EshinmQTlpOGgpU%2FbxVWcD6wqTPgG1UEEPzCX6Vgl5EmExpT40YA%2Bz6VKbfXirM8idI49lRbh09RxCMiBT%2B%2B9fxTYPKYENkDPY8gnuFO%2BMMcS3JdntHAxNh8od0CWNAyxJD3TQhCDIknbbCXzeQGFk6spepzlGlgAitfJEmQ%2BsefPF4RJ2SwPjfbtMT%2B9eNtSVS2OVLYFIIOT0Pd0zQZORdCoVYgJ8Qr%2FcRZfN0aAwxKMtceG%2FWBerGAEmLZw1XZOlXyfFYBxrbpbaD2Hq2Q2rOleeJaqvlMVxGXL26PtjdVcVbUU6XDSJTI34i2F36CUO3BHC15AVZeCc6niZduQPhHkRvc4qrJSr%2B0ilsJLqvdjpivdY7H3FqnhEsKucVk4RPE7smNgPJePrMJXggMAGOqUBLnDmMaPZdlkD32mK%2Fslk%2F85S49HjqzCMSKSADVsSROWm4zckRoHi%2BCDb%2BA%2F09L8ULdQWpeV4%2FostOw8PCkpzqI%2B7H0Xd8WcZZa%2BgF3tWKhuGg67NbhHRoEbw0zZPih9iLSR0zO6tlKrGOnc13fF2I%2BKcsJhL4chTGONg4VdHjc82HQdzhB%2BEai5JjUN5wm8wXVdO9%2FpPSeA9WNdgkmRpWwrM0Sd%2F&X-Amz-Signature=f3bd0aba3df8e28372c050cb53593573620546fb1aafb01017d69b9b5c8ebf23&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
