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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZNA2U3X%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIE6QLw0LwSWPBjWBF4a4zEQgTskeE2iYHgnKHBFEYM0kAiBwNzZhsZxIwgq0dlQm%2Fy36bsDzwN8NOzpn02Rx3zwaJCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2ByWOkgZmhlLt%2FtEKtwD13CTnGSOIi%2BMTv4ArFwPWp4tcC8UM4QO9eaNawqliRXadCnHmusGinoWTDgQCMTgZXXGJD4CycHxlH2mmUNW8mzmRF3Q6Avz1jqFWZ7u%2BYPQ9JYYrMSixvPGQJNZDv%2BeHKcDw8k6Rb%2BBl9sMxGnbjVclIH7QfujuiYiDLsugRfG%2FE87Z0CLLjNEj6posPe0Gu0Q8Xs7Tqpr%2BfK%2F3L9QCmLebgvdR%2FmrorQzAEwxCbm7jAoKeYfdC8UE%2Bt%2BPsYKGvR1BLZ7V3WHvB8yP5c2yTiKX07w%2BHr779Bb00vZx9G9%2FcgzhsuR4FZxjySJVysXHDfLP6kYKjGfXC5%2Boyv28tDWdZUtdIc5gM8UtfG3cXoS0IU4IjgBlkKgXQuSV5As7ktzkqbXQLlD60RA24Tq5%2FiiPbflx0lKBRyt0XG9qUXXjV46SxH6dACN2S8qId1ugx%2FWSvl2jdod1ZyeYgMvWh6HIgJHk12YkKuNxOG1AKg9rVMSst6mYK86eJn%2FT2VFiDV8aBluW1vuTKOf1VBotHTxZuD9Lnm5C5AByaWsPJkb48zOS5OnNONpFlWsgh7%2FPflkaKB4PgQil12LUFYUwDQ3m2HavYG2kLmf%2BmN3IsIqlby6ZMahhxzhJscMkw2YGRwAY6pgHzb5xVWoe8r6daUb8v%2FtpADdJtRIqhykzUa3MTmS2QpykgQPMX7z%2FwTIcIP8%2BV1z11bteJYONje7db8%2BLDXGk3kV3g8kWb515ffpQA17LcKQQc%2FoL62ChZllWroUjoptdIFdzDlWrSAwMUeU5s99vOnr1j9JoJmnKhEySPrlTX7a5j5IOXq9PFHENC%2BKHMuRtiAw7sZEQ7Zf1wHUc9DZ4GB4vQ6MiD&X-Amz-Signature=158d50b47b9c1ed5dd8e949cab6df754e8cd19f3dcec1a5968152c452f558418&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
