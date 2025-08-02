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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWONDSN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC59eakqpZV1nDVjtQeJ1KRiDs%2FYBK51IOg80dZ7ts%2FeQIhANm5eXFA43W3c%2B552ZZtTTO%2BRFVvRIuJpyuou18hV9HtKv8DCBAQABoMNjM3NDIzMTgzODA1IgwnIlAifNzexqUnedYq3AO6CsBI%2FSoOqiMgFUAn0rLk%2B%2BQ8y0cUYDuc5Uc9llmpNssRumuhsuWQETm6BNfxfgjpedo2IOCHoNezj%2Bsuu4BSqSIdLgCNsF7VOfsTfSdzInmRiJlrvpr2BHMwchccvKd1IGoeZ8LE2irisGdtyQpAdWCZpXl6Ww0Vx1tzmgJECO%2BU%2Bkkv4MVaixX1OIPXVZIiZj6K706I7py0xaNoEbOoJXkk7Nvd4f8JXa3p7TtmFZrdNogS8n1bX4e8R2JlQfgpn%2FxFc91c%2BFwVHe%2FJy9ae56K1MokySjS73dlMQ2GuznuTKo5ZKStYJqWwUXVbb1A4t9pHhedJAepuJlUhjlNcV2lmnLXaDEHArOaIRzIsHkxOqjFhuGHOz5HibThJ5l9nVrZvuHZXSfg6l4RptpQfx1%2F5Xf1cJOuUARJNl%2FelcjhjYHbhbkHwtd%2Bi0QVn2mhWBd4JnIkwSmHQC4vYzldcA120WEuvk1SNDYNcUNcrYNvskmhFoEuXDwxwO6PW17NY1%2Fcuf%2F2np%2FeKPnxOIb58FZ8NWNMRiMI7fVxxRL5dl7pfBYJnTLEAWCXPuRRyPJz0VlGrCWSqO20Rg79qT2L5qTFTZClaLJuowJuQBDoL586FHjGRrU1nNTgz1zCV8LbEBjqkAUsV9774zrjPnKPOfg41ZSmftxKge9DaC7TKWyKVL4u4v19gRk0179P%2FC1xpZaHe6A4eA9bpQdaZqr%2B3adgzeCQlSQa2ZJdcgoVagPasvhZKdMhLwWmW%2FDTpHQJgESuW3zCFBxydgaUbm5LxvZ5i6CmLKAkZ%2BoV8IAJoFuliDJmiVcKRkLRznyGNpDFjemTrISDOhB5Av2qRPLaTywQje5dw7v4q&X-Amz-Signature=c1d0f0222a81088b2c765b43f3dbfaeac54fe9077f61d65ecd5a7485ba8c8ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
