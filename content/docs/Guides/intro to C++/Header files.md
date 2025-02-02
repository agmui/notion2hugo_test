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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TL2UK4B%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2F3Bi8WRz%2BMC0%2BQSWTnGypuZSBBcSAJI9rZ506qxdIQIgKxhzlmzwEDdKqCOJ3yy3BRZy3hKZ81Rnn%2FLGx0tewhEqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCK7RmY6NYejXFp0yCrcA9wjg81tgZ8T2Re7mmJMWZWnRP2%2B3A5kibTEnUrSkRIez6tkPcrTB2LAkI%2B2K9Ack0rIVTjp2pm%2FWlR8uTHd5IyiTgpRepkhH6czBdqqMkHWebwaoYeT6bMHvrlUoE960x1kGhygaeRN4sSTJIlVa7QzKNB70uOpUlT13kYQptNTFg%2FH8%2Fa9mx%2FXEuMEkzWdM08AwHFDR8SJ6A0ES6EJpxb27VV%2BOhRRqF1hdWiZaIHCVztivdxzAhbGgEnAzg6xAAxMwW0IidStPQ5auTHNo3070Dg1G7AP3ZKG%2FG5k5W9s667sW01KkpSQG8LHg0B2TYtCQ16ETKlCIjYl2Phoum%2FYUYzBanMoPrOV5O%2BCsOtuuaN6F41dTl6zXbjCrnSjB2tL9uoBVyT1vQj6PowjjdGhgldyLkosAQKQaJ0T%2BbifQPeyN%2BwUO1g%2FMrcLZ0LKWueubOZQ3Ln%2BpJ7dKHheinCrug0ZHwjmWZ6ufziDl7L8fsE%2FfPUbqdWPSeFx5RqjrKLVyRob4QBslmEhliygkj3erhZh945EpRcPKy%2BauMv%2BBw91Fy6hp5e8JG8QMfCDJe7r2ZlDzgZacUr8J1hxSbkQ9W08zDIcZaz0VHzziNxfqhFYBq19CAwoJHeTMOjA%2FbwGOqUBPrJxfCKlo3yK%2FhlApbYHkoGeoeHz0knUHa1xvoT1e3Fx%2FRpp%2BTgnMliQ3yW4ks3k6byEhidDNgCSq3c4TzH7a7RF0fI5%2BvWTCBNQ30JRhVjS2JeWglq0MPgSO%2BcTCx2jV0cW4GIIg3RfPF7CNNKF6cnh%2FSrsZHAKYabBqZlZemcsIdoWb6eDhCIxaE4hUgAfeUdeogXPegz%2Bd3RlVjsCbgXmvXO0&X-Amz-Signature=0b3ddf18b016846579f655ac96ddc3aa92666e0d843e55d4e3ae887ce8e6fdff&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
