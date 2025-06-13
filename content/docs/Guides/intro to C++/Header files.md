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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CYAKHSG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAcJe8%2B%2Fw%2FUDqCCCdKNqnV0UVRhy9dNO1NP5nDVhdYxvAiBmjPc513ZB32DnLTe1qTAVzeqekbd591rXcFvXQZKUeSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMVtdCzde3jo0XdO47KtwDMtu%2FqFpMs3JHSpPsbxpJUW3uBbimRD3ty8%2BmgxNIgdnb3%2BL1FcJG6y%2FmQ3kjS3socLd%2B6brkJCABBz2XKC7j%2BbXiQzjUACLthy%2BRcbPca3CFHJVX0RQap%2BjBTn%2BmIGzYWpBxeiFE4JW9LynAMFuhDIVF5Fi6590sphedlxfQ9FSEDC7vNUQOYwatkSYADPIhJxtb7CMCLXLyWt7sAeENPPyf08e9G9dzSVWUef4B5%2FciZbeY2DoFEl9RGH8i7tbBlhkk4j5w3gIaB5bax50C17FvjMev6Ed9ZRidi3wmEr6XRQEW8ulbcZwClUsNvJocaDeBF9eQ9yOTp46Y0O8CP0ZA09kqYbezEtCRC2WjHJBvzMKHwZGc3tjpYRDtfZ9vffx1Q10eEVVfP3wI2iwaHt3bauepkamHJuP3lqE1ajg8fTTSG0pqxgrGaVn1gYmI2zyhpS8eoXdxE%2FooS%2BFr8%2FVG%2FlgrGoB%2Ban20872s0AE7xCeTMPygA%2F1pvO0tcuRD8PoD1%2BCbS7Xyc1veTxcdcgJKtf6sR84ext0A5Ry6wtovEUJhpzlKgjMDPcxeFE0uJwALUKpFQpwC7nrFDUcyfs7ZmHR7VpE5cjb2NxWPflRAd%2FhF9nQE4Hzv4nows9KxwgY6pgHm5hexgAhRNK2mLQqeIqq4Osim7MttP1UotTXT5tjYb1HCCsWmAMEuFJq3%2FNus311Z4fvHjPmth8jbF5qAtF0PKgkugw8Vc8t8d44y25%2FvrNNgGHJZLUokqSsmKxC1dQ3WCYUn9jcuWbHhVclY6diBaqkjLgsISkc236Az9gMXIYFZj%2FRm%2BxPQNvO0qEDcW2IAxgobk0Sf%2BAQYba%2FXr63BvE%2Bop5ia&X-Amz-Signature=f30600b0fe7c97c89c22ecd6779fe63c061f37258cf537bf10f18cf4f2034524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
