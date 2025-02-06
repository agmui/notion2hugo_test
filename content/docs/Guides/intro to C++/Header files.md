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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4TWURXL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCABDg9NutFgD4uGwMSyX1gwLuTxf39mOHVX5fLDYhWdQIgVSW%2BZ%2B22L13mdkpYECneklYD6rTvg7i3G30X9igbmhMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFqmFp6zUYqNDJjvJyrcAz1U8FFf3Yr1CPT%2FnmGMIBVvWhBDFEJFGJ0iKDNuu1WOBTavO1YbbTujz%2BQYLdXsESYOexxtbJtktJAqaliw18Q%2BCAb3HWjgkYl1W7FsSDnh7lb%2BDHMJ9N04kVuj8uJThBqq%2Bs7flD4RXOJb5B8xfdXA7XOGLd93Urm8bA2S9ADL6i3a78o8nbP2kJR9eyeYTxgjY8SIZBNSVh67qiJeLaoEO%2FS12G1yyTLQ28KRrWXYEqAECGq0E%2BhzuLLMXCx41o0CAcWmxa%2F7%2F4RP0kd2Esf%2FSulRVPPA%2FHLgP515GZ2yBgbuZnZeFGBDUI8C%2F000aHHQOGndhvlUGW4%2BLyOwciQFOr1qOkaUdaDs7SlLC4SDU8WcelvS6CrUP1VU2Kxb%2Btic1vNkWY%2FPEzeUCZ%2BazruLxo0Pf7oPIWQd4Tfkx9vJVbqR3dmJ7wd4K%2FQBkdY%2FiAuSWTcTuzdum2Ji2A5Mh7fz3zKS8Ft4ywB4ZgDkBhvdyWabhb0DnnidIcAyfMtLlebGMsza8qjMDc7JxIXQ2YMaE2bg5h7f1Kksn%2FWPFodz0%2BGeL6HIOQHVL30UUMZZe%2BRP318pe7tvoDdvCrehQHRBwwUL55bpl5UpDl6%2Bj5BqzQLGh71p%2FC3BxEjaMIH%2Bk70GOqUBJQHgAHJNcWkUWiFaMAhuwn0442RIoaY1M1UuUvDHV9aaEJa5rhIvA3%2BTxlH%2Fd1wM1KpzPJujS1V7NEfw4S9%2FxyhUAwmIhLK8SesDKKkSFgPyhMpCnIDvazCfIThWoKzL8jGQeZmgTY8IbFCxK3pwNBMDakTimY0xrVmDuaw2gTgYMHMfBswQv3YLXRMkAD5PtFsEC6ZDKXfdjk4BjLIA3wOZ5Csd&X-Amz-Signature=3009d3a30f916ddb7f8cdfe242f81087fca9bbf9da26aeace065133f5c331cec&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
