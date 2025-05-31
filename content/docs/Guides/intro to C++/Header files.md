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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIVS5BZX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWw%2F6msOQozMbrt3QT3%2B15bolrmOiGO6XLjTulD%2FQEfAiEAp8lnWTsHwKpK0hE7xv03QRaCB%2FvatJrX2ZEF0%2F6XH2gqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERRjCaDHDv7qrzX%2FyrcA1zgYN1DUDkMiz93KkY6cpFRfg73JF61eO6ydpSDQudu6vzTq3zZnkosHbEe1AA3aM1wOoAL3jCK7GL5e605yDPedNfIjwBVpyRdlizxag35Gt1ABdlaWun8GWM2xdCNpAaQdDI2b1qxfEpVFAD%2F6vtkxdltl4NZ%2FsdbmH%2B2UPTPBU4iJ%2BlL3kgS50jp0McRjCTwaYPBUd2pxZxFQ67%2B35MLyc0jWu9C7QsvoAz2%2BaOS9IcliRB5HoTEL%2F6ldaZXcAEP9c0%2FMlGEG6ODU%2FYhbBsCA88BbIvks2MmBRs%2FV7XsIgPTzZbtBVX402zxD%2BS0U9k%2FDA8Sk78%2FEUdPW%2F7Mrjdf4CZiw1MdpbPGOu4hPyx38nf2xM1nBt1yI34zd8WqvR3d9Nj0fcY%2Fk2Tni18SUVbkKU%2FhozN93QtryGwckQKmEIwRoe2vy4f8odltxrJWonkJKHQPnNPSM97CY6aHdtJ0JuHgYeJ5nj5rlAQeUr5pvS7BPlNuuPY7gUXMt2fcJn%2FTEHxTl%2BGdUvFvFWRqv9BLDM81SCACJC0dj8l%2BeFRHZ1dGmytmxNwc%2FpjEd7Npkx%2FA%2FT1NWL74zFkfSDOny6HNN8jtjaSkmle6T6uBvkcdMAFIoDDwy9jD8lj%2BMImh7MEGOqUBYtW0JJ3%2FakodKrrd8SOhDHDvgDEaes%2BUzsD27vvlzSANBx4ZT3NUQtrqgSanufbbxjfdfs%2FEWgH8dhV2O%2FDhzr42tGDw7Z%2FI3gAgtadvYkNf1zATNLZWf8Ohh1gA00grM51WbyIs%2B81f1rNI9PktRCIMb3E7ItxIuFF6drNz7kremzcc0kvvRTfFHk032ZMED5p1WDqGCBnPRUV0KFYtZG3yeiOI&X-Amz-Signature=4361d4c0eabf482b5680da10d04d27a38675bb9d31e79f47bdf3cea05dd8e7f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
