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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUK5Z3OI%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX%2Bvia6R3mAr7WyXHu5Am4JV4Aa5vHyR3NvKRAnKefqAIgTwzAiXq3Ip6QGn7x1h%2FMOWpaa0V6kBtnRUbuNT1dJ7AqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHGkFxIRfwsQIxpjircA2Iivh10B%2FNrCV%2BHw7XPH6RTiRsmj7ezk1qO1tpowMODJ3O0%2BN34ruWduhDFxqvVlhxhnmuVUchUGelH%2F6lmrA64KsE8Tyj%2Fb2eQtaa3y2BAGGs3ROfA4cQnHiu6MEwPMUnCyQAYX1P%2BsXiRiUumy3eGkn03qqBWdQvNLi%2FyA78nS%2F6k%2B4etepbQIaaWTxzGB5JzTr9N%2BLJDDJIMvbaLwCWcj6t3Tr5%2BARG0jXftQlvNcz%2FnEagzWxitwUsIR5IDwJuRvYMsrG4nrehw%2FeOKqw8hPZe2bFtF5pN78csvnMAdt2SaviJyHaFSZuh3MccM1suAwiwi7S2y1tQb6Qkm%2Fs7NY%2FpaPRWgPJCC17TKA0XH6RkGT4qIkXFQIZbEQQPTW%2FUIbKOXbqKxgSr%2FAHUc7pknDMCdgJnGy6dF7PFlhjjQmSUgdKK910WEdZfCGGLdtvWddFHa4mRW6Sq%2BmGngfpxx9NGd6QomoktCu1%2B%2FhI6CW9P6HOM6AYAF3Dvr5d5R4zJkymNwEsAePwrEZ59GISHS3%2BcUkaxDSKmuLYZS1zErxfde4FWb1x8opLt8C15aw5iePTMAq%2FQgcjPb%2BMgbNN4b7DYu9vt17piahmzFsfTPH9ZaWTVDHi%2Bv9LFeMOPlpcIGOqUBkpy3hQDFuEu53xCecNCSkLLJp%2FvWPyunkYLxvDzOHpK8HjWseEC4kuN0n%2BYudCTUbwXIanyH06KDBv987N%2BDLoJ9Y8NVFDJcOsGpBfqbo7BwL2k5Mgzm4mZQQUlssKgQAxN9sOWTjamtbTjvAPV3faE8vBA4AdHjZc7C1%2FWX3%2FJpp2b3o0wkdRH92CmKp%2FmiUhaJ6mZA1RyGwgdLQQk4LgOnEKYI&X-Amz-Signature=14cb02c63b1d7b6ed68c3365fbdae2382794a9c56bea9d7fbcd8314dbc79b630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
