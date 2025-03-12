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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YWOJMDF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIE5wQkqPAhsK7QaS31MDnHJlN%2FJsi5%2B2OaCVhoelZR4zAiBSYuTQ%2FWr7tx8nZShZFo1x3hdjxRHoNswJvh8D0BByByqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgiFmtchNjaGhoYIQKtwDaHdnHFwHl8J0NotrdDqB0%2Byi2a6vCaDnGKtEoRnTF5fpQeFOKwWe%2FrMFuIyyR1X5PX4nyLi89IrDT1sX7qBRom0iIVuvOIc2IE9ihraTKX7foYzSIL3v10DuRre4gMXyljbLqHk%2FqTKocdtv3Jo5ERaqPisgehEXSCiwtossxRJ8UpwajCeAM3a7XRzIOBmpX6jryaCcn8qa84HR5Pjk6fHWtidy05WVykNAbUNAA7S2u9xiOPk%2BYvayHffB5TpEir1ok3B5kBvtU3ha%2ByjCKdY41%2BtteWlbxtBzyKwAqqXwvqL%2FfYgzb98oIo3of%2FppAv0rGSo5O%2F3DAKuh1sZT5aBct7bK77Xao5BA4caKvnNWnjAZgeY8jIxfTR%2B7CZbFuXJJL2783HTyeQvyRW9QQt3gC8p5EBFigOdCLNe%2BK5Rve3i5QfVbXnpj%2Bwqm3l3yv%2BL%2BeTaTTVZ6y9uszw4C7N4B5D%2B57hoCiNdPyh%2FiJcIR%2FF%2Bv%2BIiLnABHDDv7MpuhAq5b13Edy%2F2yIDWeeS0H%2F6xLxK75VOIiyw2j9DlyQnkrcJxBeGtWc5ttdcPtOpmMRlkid7PH49lKsR94T9g8gSmVax7LtxqaxPOBowbtkqX7cpxqyEKzJ0LY%2B2ww9I3DvgY6pgFq5g7%2B7qAV5RkkpyRkXtr0gPk%2B3OqauzXkGEOQufvJHD7jWghMojj%2FLDMqpgHgdKT6IlpUxDjc57Kla47m5EDHnQDTrIEu13t2m2WmDvnXWdYaDv%2BjrzwBxanl6soPKBI3DlbjSyzUtmY4dTCqca5AgoNULfgLEacxz4s%2FMBjO8Oh0M8OSRgQGPyn%2FJdigPE3yhJaFjuBwiVTt5tvNQ6%2F7BJ5EGlnS&X-Amz-Signature=7e8d0446c94f12cee172351fd1a8146d9620c6f4fefdef23984d66c585414ec0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
