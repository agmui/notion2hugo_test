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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCMVJ7V%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUvjDbpn7GC%2Fs52G9zMBZazCg0yKSVnKbiTXG0fnzTLAiBUi%2BhmNqG7zF7glFIH5Er%2BHNruxCup1SkdbpPUF2vrvir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMQKg%2FkwjtKov5FMqpKtwDzIoyGue40MPooe7K5OTCZfBDFJqqvDYz1XNFFkvZanSqB1aVosSBcnXSzq3iBLyLuV5ARr00jsK6bgErhWN4Ouv%2FI9S3LmnSCksPelOyOJEN55Fyrf7EQrj9j75ndZTZ3CDM4DMMU2unN8U3zs1BAOotBYOdhJQxgulGrSeqbFQStCvU3U7Z7aWQldrbSX%2BcwdftaY5t3VjWbvBUsiMk%2F0KNnpVj4ySuaxSYh0H2I0wMwuU%2FTGRXHE3VA16YQAn6Z%2F4JxDsm5CmI3NgIJHnjj85kiLa8q9SS7uBie%2BROKyNAm%2FK83nWMgF0J5vCMQVJPNTNwu0pga905cjwq4Ym%2Fy3z6hzTEXBP%2Bp0v6cpMQJJrqYKHhkkxuscWJdzLhilq54HlnsQBzzWj%2F4Faw194YI3yyUH1i6FwY89rN9YVVT3cWWUPdUvAUAYson%2Bw2WbbZFnbs2Wsa1LfGIu%2F3F%2Bx6ZVW58tAZAmF0EbftlyqlEHkMOTMqiMQ0zeafRvo2LGLlICSzgn2qDL6vbtp87e0VqjuatLHdJjem9M7JeOtA7OJTWhZuYVYKwGqgTnja5n0cm7Cg1kNlrnS00H5NsYdgsk9F4pIpp4PnqSZvjXSdMbYIxm66ShceeU9sLLEww8rlwAY6pgHBvYbdZNu6lLtmxO4GLbxI2ZreZm8F9lby6hIOlOsVLp1puhgUrLqAqc2PfSNAP05BGMtLdNbj38ZwCIL5oSOL7i5GKcUC9ZSFSx%2BKg3LC6HlD7nahW6xoLfMFspAa04SjBU7Sx8W%2BJWtgc9ckK3zEcGZyHl0fZUw6yYuwdsyYHM2GDuKfkJfSLxP%2Bx2jre%2Fez8vFWyQxLkgfU8GVnVq8EsxUiVYYc&X-Amz-Signature=1a013106b9ed1ca506aeaff06120c887edf09c5df5bf305a94cf3188aaf98baa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
