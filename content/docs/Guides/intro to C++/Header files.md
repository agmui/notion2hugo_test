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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U27MFCL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrh1y5MnkH7C6RTuj5ZfyAOrs0I0L2OeRmuP1E1Qkz2gIhAMEBdONjSfOJbLAzjtFcTLXN0aI43iFkytydD1dt5d4JKv8DCHYQABoMNjM3NDIzMTgzODA1Igy%2BpPwQbKhUONhMS70q3AMGZ8QRvvyGBgYQ%2BfUW8ss6eGaFuHqABr%2BIxfUG2YqVcfBxxdtQuCp7%2FDFn%2FgdHTePVnx4dZobfIKLG9bP8F8NGrBtCQ5iBQhoc6qAMP%2FqP4r3XU4PZedxjNNeIpB6Ju9n2QODA75F601qtS0U%2FwCTN7HoPLp7mRnMmnsdXKvPIUDekFHEbxRCdATyBRo7YCKxaHkDm%2B0eYYP1DrnAT3NGkFFzIqwFQ%2B6y6yUMHeNa6dWWWy5%2Fx%2BDnirSpdIk6BlrtwsgauCZvTUHJ9tXW4Y2MzvNRIxWPFwquGj0qfz2ruw4ONhC5fV8k1qX%2BY0ZzqNKi7cldR0B6LJ9SXzgoOkmjb4MbDuARyuG7%2BEbRsxgWHTbUyiDRbp5qWdFL2ik8YlKTscuNZYMBD5XYHrv%2Bj%2FzUfaHoDNHb44zoek%2FA7ev26LwYaAM%2FrUdd%2BtSWY%2BIqADLbR5C7QxJq2vJJs9vukyx7xMwqfGKlsqbUBygEC8mGsYlcWmQ2Lkqn9Cbi19ThnxBetBLv0DOw9KErzWW%2FJcjK7dNhldAi7KGVMc07GT%2BxjDvUD7VblPuTAWUDVyossMwd29BLJYm9CfNqpGyu%2Bo89NsxYHkpbw2QwzZq75qA%2BXeUwzvOpW6hbfRA3BTTCng77ABjqkAdRPLN%2FFT5hFzatdsG15pO91IsewyzyS5yZcXFeUxOol4D3vYmOT%2Flg4e16BD0TdluSIaspoDd%2BebNrj6E48pPNw8fvCSs1rs%2Fzs%2FuIl5HxysfZ%2FpaUlWG4Ysp%2FOpts2utpycsc9IQEg7ZVLqxL07bfTqO%2FV58OcsyOGMmJIPyZYNtwf%2FWW9VMYyNiOzuSgm8kkB8WpK%2BcjGnWUboMo6EhbGhXA3&X-Amz-Signature=8ab7323875927f325525fba05fbcf1d9c38f3da87ca5f3d4257b40293aa31699&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
