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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZNOERKF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiWlYjnEopqAgXxPprMWiM8HEau4Vb1ZmWDorEQMxs4QIgGSPIiTSQrmuwamu0cDmjGJqAyxAoUnPQNmiEIFjHp2Uq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJxjghiiG%2FvFrqUbaSrcA5NkGkvxfoIL4IWTMAVM7gGEPjSeFqaqQ61X6A7Xnz1jCEv5tQPcGM80QaHPXPB8DYhu2iSBRPhsLQuG3w%2FOg%2BO2v7EY9TYF1SFGp4f65kVO1A4OXQQ2reru42oR%2BlVngs%2FJunbd030mw5IRF4zZsjSY82TCXpjeoEiVl8KLQKnti8HfMizviTZJj2OSHIb%2FRVUoPC511OEe6jiS6L00S5i5Dxbo%2BzULXaMydtqL47dK2qwCohHgCj%2F%2Buglcfc4qjvlCKPL9OLYHF32bV2V6y1VfyzqYtMBOO%2FefpsXuDpG9DedaTQZdc3p3iGnpyXtLruSu8hzQdpwVVG50CSmtSTbWDNcthg2xxD5IdvFI7F%2FIQANAaSNs7FrlGqw%2Ffj7a0NyXLdyOR25w3A2ohQfENmMaA4%2BkRDCMY1%2F290WfoGJeKHobu3opQAwbg3WBaHlNvsAhzqfvyUj33mq2lrOz7bEujB%2Fc58buR5YMoEp0hJdHkwPC8O%2BTy%2BtkezuseIPZ7HNFWn4nk9vdZVwvXtuwafnVSgaEGBOCRctSEedXAvkxYWUXSy64xxfbdjGpL50nZHoBcKoOgc4YUvmSAIfP4I8pR%2FNuzrmB8VlSqruwZzrIUZjfppz7mf77Cr2lMIyBusQGOqUBIFO1FU1YzxfulyKBfkTo5Wz6uL1shiYuGfQFy9OOX7nm3538ZZzx%2BK4Fjp5XJeG4l2FM1LeLwqp4I3WjzY0J4%2BLEoHGU%2F22roz0Q1o9LIva8HoWyTN6W7Us6Ky4QQ9pV3LcLJOYbUyFZtHLmGrlsPJRg%2FvX2JwFVUq%2F1ID%2Fe%2FU4t5v2oKDd85kr9UE%2BT6Y3PqamdVBJrm%2BeuCpPVZZJLM%2FmgMFkE&X-Amz-Signature=748c8b490fd9d661902643763969ca6b8ff7b2deaf32d931d63f438acb8b8c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
