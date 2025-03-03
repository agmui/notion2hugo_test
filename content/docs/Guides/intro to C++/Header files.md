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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4NKPEO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqBuUrQINeVT1k74airmzQ12cIo6%2Bv8yUJB%2BXxf61e1QIhAIokd2KNkiHM801zkfU7hv0Stm0A8pLlcAqMRzGN%2FG5DKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydsziS7AsJ0euLQwIq3APWKjYoJVFFNdsrQD0QiifzsbSctcTHwmQ7kACkhXbQxCWohuX3XujLSTM%2FrTR99U5vEEwh4M6g2gpkn5TQksJ8DcmoivLI1PmOTvPZrwnQBCEBIOCyHXEXgpW%2FIRwgi1D2aB2EpYts84x8CdXODmtHGjCh3INb%2BMzYkx2sTfO%2Bojwy96TQxRw9eWnH5dfKUIg0whXhhkE3E3VO5blCykk4f5l7LPuDAYnRzsxzgEKoq2H9dvbwVdVrBXt4ikOkDSgGNu8AUSaV%2FaroIyNsrNXC9NcwIfA5LoSjm5XiqLjXc2GUlZR0C1auy%2BYEA4U4x2UYq023r2Zh4cgtkuhz6TJSfV28JQ4TcbZO%2BXQKkbwrTZSmTRtDpnwmjIdm1Up2wqmgOjH1jJYAOP21MOXE%2BFP7%2FqMKYH2YQ%2BnyTssJaCuNR1whMTQ4pIoIuGwf8jNUicjuTDXvLymX7TwfWhZJ6MbS7lw3uaKu1JScJsZlxcyWrWFHbxfHtnm8LLDo11rNsV8RbgHdJ6btUmYpRXSgGCIhFEkcb0usldL9UvJD0dOArI3ebGXYQC0BHqp%2BXR%2Be9yDAA0STTsCJskrM%2F8FMrIMOxqioMvBrFlMoA%2BdCTI3wICbtvqIUVZANW%2FEzBzCE2pi%2BBjqkAYe%2BWlHrgRK850xNXLLWNIkglcRgvnlS60yKJtTurWE%2Bi11Dwz%2FSF%2FjKIAN4sy8KAaj9zUkdgpkB1NTPyCDUnw1XQeoKrsX2VYDywuxcNt5tRY0tuOrR%2FUUDrC94IyObLISpnTTlhEtnz10vufMq%2FJ90qz6U5PCnL4PDgE3DbBGuFn0gP3TWcqC6nSbk%2Fi2dY%2B9nvTgQElPPlBdnONKhnNBUHmPf&X-Amz-Signature=7a4a2aa17ab7b842b214f43e819c751e8aaecbe8c6675c8ec8493b932afbd261&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
