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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZZZ6DF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClodWBRyeqJq2%2FJQAY%2BD3E6xPEZTcAXLCcsI6abQ6%2BKgIhAJ3ZCgiHnvk7KhylrE0SGK6Hbast8qRqmvol%2BJC3019VKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH2uMjAi%2Bi5nSEHGgq3AMKR92W7GS%2FT3lPN0sELCyMVDGxt6fqSwTb8R%2BDvYA%2F1prldXKRtC1bW5lJLKZWR1%2BRxDeLILy6dLOo9Q7UDDGijEuJ0%2F5OCc1Kjc81DQ0JVu%2FwKz8kHEytHkn8MwmKbtvNbHgxcCLlGSi2l2IKTsqAA90c%2BWFhpbqFspIelIXLoyuFgn%2FupczLf7T9iwYVoqO%2Bd3ziPi9gg4fyn9J4lHK348kBoyjw41aABts%2Fczng1p5mN5VamndGjtnteqSswO5Pf2RMDkIjC1wHW83zVAMLPlpq06N%2FpRUbj6S%2BoZ2FH2kqpEastTH6LCg8vs0imHu3fhqC35AMMpE7L7DHHBbvchfYVOSjqfDHcz04zr4oUWMdrqt86BWcWhqZWck3ZXFt5xrhpXvBGhWoXFTUkNvmw2TrYbdveLIT9MJWA7QS8NL8juY9R20LQGbcRleAFkslbk3JJEr4iqvx%2Fvre9mvJwISZUQcfoLSWyBjM%2FKLQm8plDCKMNKgTilYIAGJ4Yuf7k0nDd7zrLANXD%2BWX9gNcAj2cvSGoM9mQEVmA18N94RM%2BZr%2BB%2FH3S9IF4bI0AI0yK%2BG0GNCyC5DZ84Nak4QPENZQrd%2BHJRdBVPI6%2B%2BXjgROLfMu55%2F%2Bz751qZfzDTnp6%2BBjqkAVYo5oO0gmST6nrtouz52H%2FmUrTpyoRw6QNl8e%2BBwhRmsnXlOL1%2FOcJR3O5uw6SQayNUgghLY2pLrs4u2E50thbRwKXoU0Fgsqo0QK5uWECVMzYP40fHUdN774Oyd7SD%2FdgrtPxTUJkZi%2B2TqdysQHtBgMqDk2RgW1PK%2FYUHgvNsypLHgcQP8mzul1Zrs2DQeAhbBORJ9QECM6mCFIv3i5JA4fr2&X-Amz-Signature=cba72b50b1dc2e7733cf103dc8b520c91fa6b99c0bbb01044a633fbfd221428c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
