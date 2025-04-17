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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N44ABRP%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeHvvSmxjRmzgFp9qew4XYw0edi0yHQvq2lg95lHqFHAiAUFmLnif6DQ7vR3cVElBtI3XpjvKglg%2BuBp3%2BGkm82TCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMrsYgp63N7QRHbE09KtwDy7olXBeoUSvZOOyrpOdgdp8iQNM4DQofRG%2BrhxrqBWQZRfN0Nojw9XxyB8RLAiDKKmUHWS16F3rmAPjGzeCzLmkJ0PPYpzFXWrXJiJ9IVT%2FWgcE%2BYXhguGbtZYH8%2B2VxgJFPsSuofCDO%2BhikQVF5S9VBW5j5U6rM7LvVqlHIQzJN3ta%2FtVu8LfrNxap%2FwZ6PHs8%2B20Ibrt2DcJyXgRpM4%2FUlE5TWTJnrl4SzsZdyChNl8Ewm8DAi2oTbY%2FxC9Ga%2FhgrjAM9LlJwiI71OtldbjG0gFCTEqi%2B8gS1A2Xmri631ZDEoi9mstJw7Rovp4AlBhXLopPYJjbwj2nsi5%2BwQ5%2FP4kM2oFMFwgBIFQ2LITBpnRjUWCv8or5OgpzPK%2FiIDev3i6akxpvmZlxqyCB26l0laIyp0ExA1UEIzK0QQHP3z5hI2RFSZ77RRu%2B%2Bm1Y9ZAYuTR0fecPvWghtd5x0DaAdQfKZYC6Iz7VlKyudw7lv1oAhNoOG2LmpwShyZNJ5Qh0E%2FjRESK9SVV%2B1wu1UWLhO76boMQcNrD7Z0IxPRmaIgbO4zaVknng686tv5tjhoIOKZOf11N4Lzg0wYfdYmoTXvZ%2FP%2FzV8rTgBIUZ4uVeAZP1E1a8VAxfshWMMwu%2BaEwAY6pgGBbXytSpSbCduuEmXELJkfS1ZqjmnNf%2F5%2BdqvR9tTxu9W58NXZwxEWZu2oYAWrq3oh1aAuPquArELEWtemEhUvofpSx2D91R4UUKY4fs9239ENmpOXpoBu32NgWhrRL45xiIYWUHBNs%2BqR2eySLeVDeMDsPdsLCpBiYp33PQmSNn0VaQG21Uaa6XbQmQt2CKlzq6hLx8GcbSR%2B1DQCclGlj%2FQdiy%2FS&X-Amz-Signature=05d27c8eebcb1aafed45f79d2acdda28d502ad0b08b643c1ec282b571372d238&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
