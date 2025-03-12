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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5BWIVS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDKqGyQhh8XLDteCNyTWNjHO8aku59ikp0JeLnsBtmUuwIhAMKj5aLUvDIjwhWHp8agkUml6rT0YCKciSTZEduLYjnNKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGmmBlL8gWR56%2F17oq3AOADoaTgkQP3GrwWp%2FTX21k%2FcNoSvKPWHbC0Rq27yvWj6N4lNpi9hG6ar0cD%2BQF0SweY7yqsPJDI2u4gW88miXsnijCfULKINweAdbNleJYniO5FD5b%2BN29nQER61UFn4jsSwkZSG4tPfzgp56SOgFa4HDcGZkXXEvPf3bg9s8Val2KdEO88wMo1xOcvSQpI0ocgDd6W8yi8SjFblkjSTrCv%2FFizqPQf9r9POpjX9hMPGIxnchJBHAAso4%2BwjCDTI4yb1h4qzMZG%2FvuWOjGn6IxOKT7QK82oK6N7J0xR1%2FYn%2B3IRW%2F4oZy4I1qOwKvPNEVQOtDE0tlKkX6z%2F4LVXMisnqufV3vdMdQvdyYId1HvPF2kuEO3pQF4fnBGMYKbQaJB2JDX7t88UYy%2Fjih%2FwpGKfIsv1ep0A7KyRUymngzaD%2BnjXDRI9UhHpLaS%2Bqvk3s7FaUfhYxamHo9beBFFkJD1AATnn78zP4d7xi4lW%2BCGk0klfUUAIEXQgn4Oykh3q7x3mJiqUZDKg7KUtrzo3VT1fTXoePS6jvesHS4M%2BySBkr1zGEsQM8Uu%2B5qZi1aAyk9yBETXzi4SU2Feq8ModtanXXuPf6uinHrN9zV4CmAj6GbtrFeQsdwY%2BoEuyzDKw8e%2BBjqkAaQ26izoVYKlVRsfATQkZ1bvHzeQ1ZcM4Hb3DA7%2Bww%2BLxN1ziiy0Fpi2xV8N5PFr3ewKTqG6GnxMG4qwKYozth4Uf0fVnVNoCBnYr7hghuvvAxSP51itktLXaAcrIy2Azc7Y3GF9fvTZaLRyOYb%2F0sEu76DIaS4%2BYdOF8Ba2iWkKqZwtIhy5mnBUpEVS2yvTVMPMLcgKADOvfWSUQl3RAI5x%2Fkh8&X-Amz-Signature=15fa173644e3800a1d17281445a3dc764a16c478645d2e59266d4741294ac546&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
