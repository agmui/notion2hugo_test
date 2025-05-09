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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBERLYJU%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgg7ms6Pjs8naEdP8622bZeKdC7nZAQdZSGQztVt11ogIgR7pd9no2lBKmhnDkLIUPzLVjEYYFxwhttwFUjTLgkHEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHoSBkk1DHVtPar%2BircA5vAJ8a%2BeYBg1KN5jIXf5u%2BYyRAI5OH10AYMepfwltUnEJyIO40AsA4q8c8y7Z8bfUKbef74YarSE8c6PKEoRuE7kXWVuDiZcdh2Yyy6zuEVYTthnygsRh0J0hr9P3ksHRgsSNwl60lOT0hr3xkP9fMps4S7JwVO5G5xtqUgt1yKz%2FAL66yvo43EOpL7nGomQnFJDYtFF1syjSIJf2uG%2Fm5UleUAmHdd5Sk1%2FJde%2FtZ%2Bcl%2BQix6adWYV2id7TN7rtZsnKzjly9UiNXscXdHfyo3xe37su5VijbMKi67rxuoI7q7N2CyZJVHoqjkuLcss%2BjLiuvfriRviAjr%2BEpCDNC3micgNOkLagmucuw3JyNnJOo%2BDb%2FNiatFbLGZDluoiVc0xn5j5p7Hkuy9ts4DSSufxTt6kVoG%2FWh7F6zK%2FPfLeARE9QwhRLDvxtUmMfhB4dWPcvWcXHMd33FkIJRAUZzedXj%2BEFMubVWppgUY0X5I2mfblnLRgPz9HhPHsPYWSZBztWK32vyMyMD9ipBqroPClRyC0%2BNDLS%2FV%2FeN4wbukBbJUA2n2xaAO04h7w14nHXFrSfdZHf%2FpETRLzQkYHyTVFwCFWNXnQBmvfklnhsuegOPie0Q5aoVFWkDzRMLuT98AGOqUBchPvJgUWYNH6FuHX4QBRKAbDGvHB5mjd3iMg3SSCvL%2BGm6sJsSukhxK%2BlcOJDZ1kn1rNl59PPuRC9H2evo%2B3Q09K5L7NaR5s1L2JuwMt%2BXcflpwQLju2ZnNmcn52D%2FZMHWKz77auKuvFrErFJvq%2Ba1TM4t7qLeoItJD6B3%2B72hyy6iBk%2Fuoyu8xbusY6JYJaJ8EyGmySbqfwP3c7NPykhnaRBnVk&X-Amz-Signature=75336aeb0fed1ea04922e1cc74d06321f3af3310f24b00d1c7caa4cc6c3fa4fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
