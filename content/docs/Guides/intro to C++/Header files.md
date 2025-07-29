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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URPQ6HXT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCThA81nAgRhj9XNYj%2BiQAHBYUMcuKJvhczKWJ2D47ggQIhAOuZK7iTR%2FLe30crS4l7%2ByuJNUNCVR5jajuffixZdjbKKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymXx%2Fs0mviqbJ7WR4q3AP3uNu7S%2Bak9PHzQ7nHgoZ3aSlIoJLl9qSjHoQ9gnpgoJJvSF1bMKqZrr%2FvTkaRk0UD8hBfE1fl558jRnq%2F0kF3DcATfN8Y7wHDbvAL5WNAZjubswhdY6pIR%2F8ApBX30fACO5xAVT3Bjyr%2BtwUdxZEfDUOLkJi2JWRULsG1W380eHBYB53mTaewCeIAf3lMGOhVwmfw2MDj%2BS9okJwlshh17rgvbvPVaAG9OJl1dPOUDQmiurzGUXdX%2FkcmgkVi05G531Pjdrxln1aFxXjADX2MxkgQOv0Y1FPx%2FPuJHBlTfW0Y3ZgWtml7kYRev1eYz%2BnpUD87rtU2SVud3aD69jxCYYo5wmLEJzvRQegnJCkORxeAWWP5Jg52GQwKaR7Qe46zdz1NYWQPcNRmPRtZMXE3sZAKExjBiCBx3X%2Bg9g9nOZx2yN%2Bs8vZvhYUNJl1AbjJSynurYNJfTu7vaR1l%2BlV4Z5HX5yf46GHksewTh5esp4C0I7ARrpYkNvrOi7i5ax6TIYL1X3AIEoT2tEqPf6HV9tPCeB1OoSLWPRXFaCjoyGRhDUHPnv1iEujEUrSHwRiSrbOCOdZmETlPC2my216%2F6pHMRC%2BsYsl67sGY4PXxqbCNExG7QkhfZLiBsDCogqLEBjqkAf3pvL3nNuQZ4ALakzl%2BP0%2Fb7FmjSwn8btX%2BagfAdn72lN%2FFjAWmU8KSEAHufOP7sYTUTG0DuJSOc6dhk2WzdURtTvmy68kQsdieUzyk82wqYlqCIOydn6AkjPFQhmCdh06QAaIBaNXLxC65UEEu6oQvci4eFFeqd287OIlyy6DH4PxqllpiVq8WQioOYzlVrnrY2aqWv8v2cYBaWAXY1HVbb34t&X-Amz-Signature=879892aabd6bf509124d01617c5d105ae3868cba4085513cc4fed5ece8345bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
