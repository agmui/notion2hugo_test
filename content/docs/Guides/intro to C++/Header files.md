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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KQYMAJZ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6Tit%2BGJRu9VZnqNarAvp%2FDzHx30QKMK9JheWxUGMrzwIhAI733jZEZS6Kewj%2BBIetMWCSocTYV2KT%2F7CyAGT59r8hKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYG0OQcawlye41Nrsq3AN4Z8Y7kXTj6voN0b5KYz6kWgrD0uap3Ow4WVgqmqqUhqVfRquJBUogf9DLBQeO1Lug9n0Bgy8wKdxRCozAkQnqJuXnTYCJPuJMxEHMTZlZg9yQIUZzEFduaECxm6TJDk%2B3OOtEhxnTLC%2Fz0wQmpvF0ICgjlIj%2B9jjGRfIDyQnxHOxawi%2FEl0LOkSzy6%2BUlKtErDBvSTLJ4n98snVEuc5kxa11XMwrFHpXMVztqpJaWsIfi6PfuyNB%2B6npQ3FrdFX%2FM7GRum7Xcsk1IdkWQ6yv3dai5kuNyJRO4gBce02do9WR5Qf8oM3kyEdS%2BRxBLwGAdKSgi%2FKLP%2FdYdgyfsI9%2FPkC5JfDIN6SQvyUxzk%2FfD97C%2BYgnUdph%2FWZaQidXsEB0w8%2FJkG%2BQyAk%2BTMkQTvSjeu39Q8w6y4Z9gJ6FjTlyZI90x4J2XE8o7rBG3OWKPLJ8czYlZW%2FjcRfdQ%2F9kd7xubf%2BQCHmZ8oBqyhRMFbW963wZ3BuMiMGo9qY1SaHiN2YCPQGVVej9kh6RypxJeY6pJeGdGtNvQBR1gjCqGhemUefaDN0Zn5L5w1O%2FXBzCybMa6VBdMkzpBxQGXzR919GZg8jx%2FoAe5MWbjWMZ6KxgT1DcpA%2BbyEr0KSoDPcjDCxJDDBjqkATG5iY75FQrqZrm6S%2Fw4X9XjNbuIPb9hd06zgDFzmNfnDPVc%2BUKrpjr9mSSKc%2FotieiSi8pY2qfj2AxWVtDOUltAeE4C7VHuVgVaaMbFKtB4I%2FVesfE0AckReE9pzuLfaQ9Rs2BE8Mfh13Y4%2FojPRhiLv0iKyrdpqLS6eLf20B1hN%2FMwwX5m4bmfsXJf4X%2Bna5bhRp9XGFWZy5%2Fzoz1J3arsNv6G&X-Amz-Signature=3af13256906155f3de08251421b2bbea3bdc26cf3aa55a8deafad96ee9b38e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
