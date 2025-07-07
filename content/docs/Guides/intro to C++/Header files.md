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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCJQEGN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGKiu1VUsFL0X%2B%2BdKNZ3aIyQ8Uw2ANAcCJKxNIF36oMKAiBJnCKPIC474UHzaIvyTh7ZajznNZ2cv%2BLTbIiDUCxkEyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMIXFEnxKe2lXKQHQAKtwD0m0633OWojptS8EmcXWkq4%2F1R3jkvrN7ZbG3sdWuNhbbVS7f4hljTLqIb9hO9cAyaUxrkSl8PmgB%2BKmrnvg5bnU%2FrCzGFaobfqJP6zDuL9cGP7XJPJ7tNTfMUmWM4w1HX4babRvDcuGukBBHf1KIVVwvB%2BPofpD%2FsBd1yklFo6g1T2RBVyvC4UbsgxMIDI2hHzWmpH3qFxJUCl9tYfhdghgU%2BYGDa6V1JTIGRxmFMIoneZszRFYrSUHZ6axPjXS%2FYvnVatL5uxLaD6cfCHITcPvent24EL2VjetXy5f1H6wpIbWo46kZDqc2oVlZnvsR2jdD3QjxoFgbhdytFFULwxowxuMsVHfCRJoajPx%2FAV4AXbJqMSrjyReRQgNGWh5ykttvpxWGhhFOBOe0WaZUmf2aGqEwdN6HgX8ruQsogOnhWwz47wPsDpmSHe610ZT0day8HsQoEEitnAf2SOYFxkilJP0F4DCei5YSRfI0ps4CowvPUCaS9f2wokLbQzsgdwt8RFUV2gRmfDY7JWqk8Hyw%2BaQfjyHYHqk6g7tYpkwQcS4hisvV3KyQpJwVxWCywtPowjJkE0wKlOm2qq9ECFt2vrzVcvionOhESWeDSge3GiGA4k7qPKpYrJ4w56KswwY6pgHf%2ByrVLe5M8VWtBYwHFjCJsE7bH7TlVLEiC5GCHN12eEI04Huo%2FTVTTPwQpwp1T%2Fojn2k32S7CWQpG7O8z25FEGpdO2wide5e2JFQSj%2FWaTKGPNhMg9h%2FskboIciU4DJ4NOT03kvr%2Bvmv5uxq50LUj7w5Ye4%2FDtyW5R4FkbU9WdzypjIwmn7Dk7bT4Fj5GmMbYo2HSgPWdL6sJLgs6UjOGF%2FO4J2fy&X-Amz-Signature=655137a9d874134adfed89d185dbff6e99b207ed5c7a03e513a274206c3bf078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
