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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZITTK4AW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXmVsrv%2BN6FZtJ%2Fn5huvaZNFpRgEIL1wvu0iMeLMUeOAiA5FW9JDxOYHe3WOQXAB4RlFgLds%2Bq74x7OSHnvn%2B3i5Cr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMQaiHsIvan%2FQGQzXAKtwDqIIr%2Fq9Pt6z7C%2Bng4Ueib2ZJh0%2FRcUa1jOOrdHrZZg4h6FUQNX5Bbpmww0uFI4DoKriGhzKKOl9PrwDrf7sRTH%2FcybgVlcqO9AiaXpE%2BWFLbdHO9wMqsZNlLeaR1yz2jT1FvWiWEhK5HbH2w0HLCwavIef%2F4cXVDCU91fQ%2F%2FLtzlVXkg4Pdo8VVA8f9HT24QXe4ZfnCy7NZCjd22QDMim%2F4ab8mGDOmcbPmM0EqrxeTnFfFTQAKOr%2BGscTaNhixYAYL1tsjokCy3MpFsc2g3H2jMAmF71dAfkcsiI2AvraV4NUITlrKdkHxZKVRqOnShRGU%2BmJBxBHxeTwyPCJRqe%2BRggdr2vHmRDi2uvfFMTF1I9Can6QdsD7bMXZVZqGpdtMfFv%2Fe%2BZtOQDEIZURmxA5qzyNYmwBY4x2EbZHowyH2COhqhiUf9Nq3wb28wFG7goJtqX2lKyK3zCKO2ovWMBCzs8ftYRK17HBM4BlsqbPbu4lUC2Uyhkv%2Bi9sZhAQsp%2FU0br%2BPpGruz6JNCg2wK8GYTs0hmtQNgqqfueej1g23%2FyuPABeXorot%2BsOsCkHrETPABTkgUhWlSCe%2BS0sgzDyWCu%2BSV8zS3McIrpSQKyJ6wZXbSMbjGGf6BqUMwg7i%2FwAY6pgHD0sJ19gw51QERQu8utGp3%2FvgCHyL5dBQdKVUwvnpQuKdR9cFTesT3nHTW3jxO73OOO4Wcnk0k4ZbD0u9AgKmO9hMIgtxtXwBZjuLvmhibUBnfy9gP905tKwk5vE45OfQ%2Boc3tcqxXwS1u6butmEi09xjgiy2KwxNBsVw12G%2Fw0v4BCj24Qnk5kR9C5STKpe9jI1o5DX77xjepy8dsnOIG8gDw0H1I&X-Amz-Signature=11dd997fa0e3c34ffedfea19bf640f3602a270bd01215f7bce8e67c311d6b5f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
