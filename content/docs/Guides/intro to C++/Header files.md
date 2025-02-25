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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2ZTMBPI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHeqNiSc3%2FQgQ%2FRPxOvl%2BeiTQj40RTt0O5c3w%2Baf%2F7gwAiAhYSgUa4fjH%2FkDbN8x9a9RtVn8FFPCZrs8itsQ6Mlf6Sr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMFXEWkpJ0FCEjHs23KtwDD4KZip5cg94Hz0kQb3pqO9tHe8ooBbfa4Mhsp0sxJi5eeublwrC3JQGZkoYACDwFnRzD4WVChevByvqeTbSK%2BiqRAfjohaAyitxPYMZKp6Paj6V1ssTRYCTITYMHsZ8R4ZvJIriwxgsuSQTt0ttIGZIjNA4Ps8pFN0gaQ4ojAnoJjD1dI1%2FAfG0T5qQsuRDEPue0%2BSp8Kt%2B75JRr5ETRZUu5xV%2BdKQ5iZSCDHNAG5CC1WJWxP%2Bfwtt7Q0LgKHNJ%2B3kwBw5ptqPlrVgY92lRRyYrIY%2FQhnmSwkW4I8Pmg7pUXaSQQKZtq4tAOtCuwM0kB1uLxUbGal8nYpRrXmAsnT0MYx4k%2BjMn2pFhbL8emhYGGKIy%2F1FNgLR7YbY1LaF0RJIWgMKsEsbh4vZihtGY6qD0njJ6xzWkUey%2FV8xeLCVDlW2gJWFiBR%2BUqbuo9a%2FcRjdUKJuvQjhlbDVXpi7rRaBjYod5j1jLTfAjNdFdqKv%2BOhfycbT3JRJmOpj2wXLfVwyYgPnE6OwdtqVHplT8DiWl3HUY2KRM8O0vDqEVLGTItBWrWfWlCY9iusOcTxAzwJKSc%2BghltzHaQyCqPdkD19JymFTNLzxAC9zkWYdV572j023BPq39O0TCKFUwhsj4vQY6pgHHzlvDEhJinRC3TZPbBsL%2FPftxwqI7QCSn7QJ%2FQGn7Jz5RyECPWdXZ6kCY3gnt3ouTAjG1iqNH0QpWia%2BlcSbCvfV2WlTa6btpMkX4qr9VyFmm92%2Fz17QRmEHjKhN7vyvET90fnloDJVu3fFo21wvkeWQjhBSgHuxvQbQrK1gpub%2Bz%2BnBPKF6%2FkCrKd2ueRdbE5%2BUXM9JStsa%2BA%2BpKcDJ250zTDZN7&X-Amz-Signature=fe719f5b8c89bafebd613305b99fc4b53b7daff2785f5b052bd6e18dc514f920&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
