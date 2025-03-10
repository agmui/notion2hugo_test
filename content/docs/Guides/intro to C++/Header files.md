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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3CGKCIE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCH1Iwiml2t2Mn78po2dD5ABeT6aADk6igMDTcZrfWw40CIQDJYhhNe8Tg%2BAM4vBU8l127zRPIgRJKNxe8Xqu4uZsJoCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwbfk2SeHQjjL%2Bl0%2FKtwD8k7X2Q85HsT%2F3Y8pvpNuLH%2BfFh4UqprVS17bC4PDFYp6foKySVnWEb9pV8mc5THuJGRZYs6cgcpZIDMtDTwVmr0GFJmFfdYoADmrybJUP9z%2FtJic6Di%2F%2F91JocTkJWUNNghgA0k7yH1iYCOlqn3tnXGOMeKGDvEyTwZm9PG7MCVU9W2Dh9l2D8Aco1hcU%2BxHAKloo669HSuJPWoleyBro3t1cFAuKrs6Ry3Mx8vyhGPnuBPQUTUgC4jnWk17mDz%2BnbVOI%2Fi9pvJi8L%2BzX%2B6Xwub0cF%2BkBjmayRD4fEbv2YywY%2B%2BAAfDdMs%2BlkpRELVBNdQ6dJan51vV%2BYDZaGYMuGlT2Ca%2BStkG8N8RzFiMA4VXBGEjY%2BAyDyueF8yZNxbFOEH0GKPDWHXtljl4XgzE8BTu6P18Cn7ARMQVkciRT4773qQqOnhA0EMddPgwweA9m3Ydm0%2F%2BoKAQFGj6pcHOYHKYxmKkqrnMtFkEsz7GQrLOOfbeR1fhFaWYYm2765c2KcCQrnKzbvYKnRQFq9wznai4KSufX6ylKOYZY0KW2ncKymFs%2BbaTLqSxIshky4pPFxtz9gF1aVOalVxc2IbbdOjyUjvvsU%2FRd6eoBD1Qwii%2FmSzMv33kgPnRWKZkwj924vgY6pgF%2Fkpt9PeU63ojWhdqu0cEYjCVV9pzzFnfNFsipmK1t24vncE%2F5EsMjZ7T5GFkzPhAyDUBOH084Lmbl%2Fi4%2FUbnT%2BTooggdPHHhVglDdS0EEolS0PALs62aZbLIuTtIhqNRqL0xejXBPlBSC%2BlDa3zBbaFVAu762nBCDfNKr7ijRFqRbROCx8QGKQcWnEll6xA9ZJz6dfEjN1rC8wgmMLRMZLlwPdRfR&X-Amz-Signature=5500fc49c331f035d8d7ef5dc0dabf593f198284d220803c3fc5e7558a423629&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
