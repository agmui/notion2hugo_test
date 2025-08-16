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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SYYWLRU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAZZdgMO1uubMAdLpEZa36NZFJCCfTLIc6riAoD7X8eAAiEAhmNs0Ll9UDI9ftcp7Q2JrbjUQ4Gjt2TBKdGCK%2BYSFF8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPXTZPNuf5QpscujVyrcA0jJu9fFZCOYja57d66NHAOhHLfod%2Fakw7oem8qPvGwFPKoO493NAZeiufSabuBDj1YwxrP9KTkE%2FdvtxS4jaPSUgEP2Adee7J7KWjq0mSOB6FqAd4BwU8V9N5XI1mgVSO3iGCWlAgdOrBP5SIUhdMQuDo2QURYa3Hz%2BcwvRtb2Zx%2Fw1zbopKnUlc%2B1bu%2Fm%2BIih8so290O1EJzCMzevXAy%2F%2BwYMiCDGXVYU31C0wHBTr%2B1QR%2Bbc%2BzjNnkytFUlO5qksmmsoCD9OWtTsdYraib2lzq1ENKBO27CakuqvSDa8nKknoJW4iO9VfjakyfVz6WlLZbX3s3kVYrdGbGjEunN%2FOwDFjJPzbzRytlMJw2dpbPZyih9JREXIvp0YI0d4UfoVbtf75xVbYZ0Ks2Zyh2M4w3NOHEhZmxFd9G3ite36gBaICY9IUoqUxmsrTw9VIbc6hokYgvXUn7xuTfoMQOECzfzXS6doWKgd5P%2FY4yirT3vX%2BT3CiBUFT%2FAIZRBMJBjShura37ofbjdYvS1TxdLr6E7wBCo57yPxOuMjEDJUQi1ALlJmwfy7qjDWK7H7ilAFITwhsA1zTardxIwmWdBpuVDO6gMLRnaFKEwGqLR7a%2B784hwc34DP9E3eoMN35gMUGOqUB4woJ6iNgpheZpn2gjKknxBC9LbrSJN9yGk8QaUOaXd6OfVOoN4%2Bg2T%2BWD6Ib4myLnXlAuF7K%2FOrRB0LBWzOGUnXK17%2FXSebFf5hNS5%2BkNZpfCopbzkb2rq3Q4x0wT0uCng2S7xf0jirYXG%2BKqVdPZxNsEHuBPLd7XD26GIuhKe4OE8h%2F3%2BTPjAQE%2BtmAOqjcoiTpTwgU4j5JyCPEnVY15%2FsU0xpH&X-Amz-Signature=3cda0ced524b48efd02708573200673a3e11bb71449a7a25d8dbe36284a03ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
