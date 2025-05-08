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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBN6672C%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpJEbkLdkQQPxvObwRn3aGdv%2FDnuz9CI5ylCiD9ALDXAiEAyTgVbb3%2FilFelDwUBfPm4G8hPwDVwn0ypPnxSInpAGgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCrXIM3eZMhf7xpJ6ircA9RI3abcjsUUEm0JpahgNhY%2BeIA3losoveu7wsdDyqf4PQM%2BE0nPvER88mirCLRpyDt9faEA%2FRlqotyH%2BFkWP85icLh%2F9i7Qr495Yfnoeqj1K2fEdHu6fkqKodyQCoDSkKMWk6ptZhp5AjsGLThMUgAVRsZw7YI9BI%2Fs3J2b7lhOr66WJoO7lgI4fWA4wbTnawYvaHm27%2BE%2BOD1qZTEcNnuBm1sbaapXq%2FII4vNO5yUI4qvKtRCYnsJaug3lxFyBiZLWvMXBCaddCrle9wbONQ0qSFMGi8FPeKYBAbXtNa3Fl56seJCk7yYD4xjj1qVFtv56w6qEYp9F1wpA3QUNJlLWpxqiv8uT8JHL9QRQX7vY7afvvaKBuDqtVfVJXTDMtBK%2F6kqM5IhijRwoQGjUKgD%2BqhHSUMvWKPnD45QAZkvRTszS5Ygc7rT1R3meUPfSbQ04V5Yj4CtyQrlMWsUmzpwJv4UOQMLq5fN4qAXazhGvmuNdGYGYIGXPgvjy%2FhQixBV4I%2BB954V2YqxxXYxbIWIjh6gvyTO9EhjQr2xM6IJR2%2BFRGJQHcsqp02Z5h8%2BjuqxaoqeXwAnBrItp%2BTEYwqzMl0dw7N%2FN2n5eilyHj4RkgWdStN0KxnbkdVKyMKTg8cAGOqUBiZj8ibZjilw%2FoDeZJ%2BAC8Nr8jLyAOF9vUpB3z18ane%2Fi6q%2B9ifM%2BX1oNyRj%2Bw0bhTAhgPQe6lPHAYSREdPUvwOsPe9c3A6NW2%2BMuwDR%2BMx8WqekGblu4ghUdmgZX24Yatfdp5k3PP9HW%2F4VVvcNppwZMm11JYCbqGVS1eLyRviqpp3BdB1h03PiayAQLirTnLL4OkxFM%2FO7Xc5PdgBCzqgkeAM9K&X-Amz-Signature=27feb8169c3940ec9323ae8a150b51bcbc22560405c8fb55e8ec3a086f273123&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
