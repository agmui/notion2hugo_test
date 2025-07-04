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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CIOSOX6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCDZjV80QoxpowjwdUFHD%2BYkB4VqP5%2By%2FTBiiAkVSsjWAIhAP28tHAg2toIScwLHhjxrXPcGrN3JNgUrdZVEtQwZT8OKv8DCCkQABoMNjM3NDIzMTgzODA1Igyae9wmFEPRnkezCbwq3AOHBLbKyzGxo%2FDP%2F9euz7uMc3fJUVKVSIf0piDQKCL%2BYpkXu%2BZG1%2Bt9FOtYH2zA46r8rEiQvgGbrjOAQHD7H%2FTiKln8t%2Fw01QRUFGCWXeNynXg7m61o7mjx4JsZrQ%2BtdgB%2FnY56Ehn335hWmz0i2Soxl9Y9eFv6z1wQoIf6hNY77%2BcrEilBMhPPydfpWJ3tzWuhzwgRXHiQe%2BR2jw1KC%2FE3XjAwn%2BcU7v9e28eD469eF65eBVWHIBZPaOX0H8Jgo%2BtxkVMwLID1I8Qbg5PZMhkiIEm8ksAT2TPB1ixWQV%2BVp2KW3XmUDEkWsRHg%2Bh7RNxU7UHLzIP%2B7lwdUQkqwtiKrpRi0hy3%2F0qYnA3JOckkTH32Y%2FjKY8sp7VviCCq6pSLnTqNakTVxl4pcGMho4jwk%2BocpI16blGRO8TtTLolnG5l8piYJUUaqZld3JUXt7vQJ6HczcgY8KPiIeVoruqRQ24QMTHBwuEva0%2FEYt2SDkuETYGy%2B1m1VAKncVYraNPvPS7B0jcVWDw78YO5tlWUhmASLTrYiD14Rh0VjwA3ujzY6E0RVBigWs%2FNLnwqe5hQt6OFAsQ4vnWXlsroVJFEms9jo91%2BaGTCp6QEML3pDMWuzmqD%2BVqck32eW3zDDDjZ7DBjqkAZKPeKLTShxvIjqByO7DeSdZoXi4tcwZL3Fg%2BKObMVKoIHsNFlSQ%2Ft%2FjpEl55XirjArq7HBGeuOlaCDxDEIlsmVFin3NE%2F%2FxOLityqSCsZzcXtXeFyXyD32cwUpWnda64VrxxHHm1NNj9sSemrXjpvt%2BAu%2FtFeJYzUM7hfXY76TSi8uBWIqickKDCsShHINCcarcv2vOxDVBHYDFd9MtGGT9j4W3&X-Amz-Signature=3fd375950caae6fb8a5874adf517f54135af4abaa2245a403efee7c917b5b873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
