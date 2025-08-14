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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF75SQJM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDLkGgZkTYUssb%2Bv41cEEvAmjpiIbxNditJsE5oawzddAIgaXPGtLYANGMVM4f%2B%2Bxft10OhZEyYjP9Snrp5vaLUW9kq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDBUASzSQJUmRvwQrqircA1diQNx3P32qa4QbIgYw3hcbvEIkcDB4XcAf3J4YEISPAvxXZTMTZIeF49ZwVH7f%2B2lH4zc2H%2FW5lfKoxtjECWzPNK4IcyIOC7dWJkee5OlYGhlHsbrJZ6gR5R0cGuq23uFflOhauNO0A36sVRGNRKHlEa9ulRINiRhtrNmon%2FwQjnm3nF1sNbEuCvrAahj4x0V%2FWBA5A8dxwZHdl9ww5gMZ71cMKcTYlwM6Azedvj39rUbKVU11sOLOuG4vylp089cIAIoT%2BgOAPF14Tm6UI09FhFDKnyR7X%2BkAIb2By7nkVeEWxDpAuyd%2FoEDmQ%2F%2FW%2F3hFwTezUO7XnFOxu0iVze%2BdV4Jtjrkq2JeM8ZwhgEORvb%2FZTBomvOydHO4MREEIq%2B%2FHr31pRBgvY1Kvybwx40gP8K9p33GyBIGVuYJuth3BhTOelRgNMbJrMqv7qbkqUeMtxgxN5LNvG3iMi0l9afL6xnus6UdmssiqEbo%2FoZ37wB8b8nCvILTXs02XI%2Fbao8PdSaEuKXhTWmzJWLYkcGH2XecPCpFuYkmLM%2FFkQ%2BQ8kPoO%2BShyx4K4r%2FyAgpl0a%2B%2Fd89JEHsZbox6SJNHOE0B%2FqEbtvII6VR9JWGrYi6HO4XNuYrmlDRauBV50MLiN%2BcQGOqUBa3q796D6LZ8nI579uXI7iQ2BxbDhELW54GnfxmVG3UEFoxGaZ4uEoyZTLzHJmpWlYQ0WrmzpQnTt4v0hmrvUMx1CeIXK80ZY5GxebpmUtvyq2QTvo9uS4PUqxjZZ1ocp3z9bFEQG5%2B%2F2gXETwc2bO5KjQr7G%2BirO%2Few04BAOlrx%2BxwCKK6vATh9JTjykwxcZo95N0lZPXqfdp3%2BTeFAnggNIcmRF&X-Amz-Signature=d504baa84027ba91b9ed45c7252102aa32b7202f0916e966eeb176552cdf4257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
