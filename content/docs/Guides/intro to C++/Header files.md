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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH2J6TS5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE17CF6FYfjzC7%2FBLTdBMniDiUr53gleUm%2FFjcBoP0%2BdAiEAkFXWMQRwxP9nINH76k3FOhTPXrOsYqSHJgWOHF8rqAUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4aO0P2pLdIsmJbxCrcA9KB33bh2pX9vAcYH%2F9Y0ieyyKFnTF2BW9Fy43US6USUHLSBTtHAI8Bg2ZwFnPeE23bkAUDpANCHGYm2%2BD7aO6JjdF7jMKoHdNsTB10kGqtfGKO3%2FR0hZ8xQ5bQZk3ilcktPe4IOzC8qB9%2F08shmCYiUDgqNBsGLgrMv9HA1Y7BtpkI6pzLMPx9KAeDiF0k%2F4HrujzukwIss5J7%2B93st3BzFhZkaDJvqCOjn91BIJvGze6RZr7I2JFq3BgFTRRAQsB8o4CPIu6S8cUhGAm89PbOJ8KS9sLDZfuMfASdlq3MTTiVA3Qt%2Fo8UGXFSsWWPFhojmPs7CLulNBz7CIIVxbA%2BNb3d6%2Fdnir2Hx3ksCYqD83dP2K%2FVovWFBFN9PloGHbubZIVjD88LL4F6%2BcCLymMSZKRrLPSg%2BnZorr62%2BUIo4dc9%2F5Kvto9g6vQnn8MBOHTE5an41pE5TDrlyHikIAJXocLBQKyGOt786ezcWwTuerDsUTdOb3D9IH3xj6yK2frFihfGH6p7pmt9zSBOXFx9XAoHLabYdLaTar3hDLTOZ1DQVuAvl4nwb%2Br1kBJb38uBLPnrYhMKvSQv0D6hBMfEk%2BhNmJcuCF5dyT92X2J2yOQVeAupt0qbGUsadMNfTtMMGOqUB0nl2hWTnmR7v%2FdUaNGoo4YbHtSbsNR1bojYoyG%2FQPWVldMsr8R3XXt%2F7sPx87N%2FN%2F8T2OWt4G9O5HjXZC4vLN4R9kVCHKgIg1BNVJexMYTOwlx5ICqdwD4Yspf%2B4SzGvH48ZV4tTDzFzJZYSNVL24ncb3nTKDY2%2FdyMptaIL4fvcNDK%2FRgVhbzsXa1PKHUnHkeRfrl4g59YGArE3t3Yin1EOI3CX&X-Amz-Signature=451f1c57d1b970451c62f435d0436bc12521d140fb0ab07fc211e5f1ebab3b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
