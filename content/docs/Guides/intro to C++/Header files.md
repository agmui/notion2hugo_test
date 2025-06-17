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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q4TKVKT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLq%2FlZZFeWC28h797iQKaKdtjJs6%2F9JcmL2f%2FyqK1msAiEA%2FIYwchArPltqSapDZqnlTrvAWsq%2Bjt%2BoTYweHVZF3vUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDn25S%2FE2e0UzGlQlyrcA2RQIEu884MGzcbrbwsVANlHoe34hGN5mkTB8yJ8CwX7xYmQx6JiLa3N4uD2%2BlwuwF%2Ba7acI7seuXaZSc2MB%2FnPF3Va1Md6ZYtALKmdBhQEUwZn6fZIMibPZXTQDRLb%2Btc25qAZMArSn0uMq95x8KwDa3Uq0w1YfqTy6%2Ftf%2BDXEkXz8bzcpZh9AMKDELB36J%2FOkV%2FFigPWcnwRVnZ%2FgbjkMs%2F4e1uAwvEP8XY4tumgADqrijlhUysRQN5rHFkJGexz7vUPnYMpe4tx2JT9YOy%2FO2oDBjA9F92KGo5Gn705Yn3X7Oy365OQG3uMjmgaiyeDaYfJf2JVSTWyeYeecERj5WyyJKgkETQQocCDWNHBrLobUPYlYUpylMsPopxgCDRu01%2FSObTzPbf9LZEl%2FRg1zHgljI1QTu6l4jOKNPpj6p%2BLTeN7P0ggusp%2FvraoRMEC5Gc93DmqYSwOl5i7WVLKz1R8P9rmVryaLIAymsDT9UtiEj%2BSM09Z8qv5qri49pSi2nCwOyU9IsXcn1aqbX7xG8iIYCcAnBGXcUjIV%2FuIKEqYoYzHdY5RzVZHtRSifD6vtICLFZPD43DGaOha6BonbNrGVXym7GlS1MW72BqatFgbrHcerEYkT2D2WQMNnrw8IGOqUB0juVzOLknX0tcshl%2BTAw2I5VeoP6cK7gugW%2F2%2BsbC6HG11D9NntiEpvfwtFLwTDJ2ffI16rVIP0UP1xLraTaQMMJHRxF%2BTfBMX7ZOE1ow3iLTU2IGWl4xfIvbMQI%2F8N9swM0F8bHdB3gdFZC44%2Fc2zy9ztD6g13wODKsFYWU6ntS5jGozUbsv0h0GdSzc1inCv49WhTxyirUQ%2FDOyhE%2Bh8SJMCUz&X-Amz-Signature=9924a80dc45ab36a5e6de7c4940f2cade8efc481a9b65e338f4c8c10850131cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
