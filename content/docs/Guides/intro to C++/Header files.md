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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KJMQ4PU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICTtBreUJkIsLgx8v6BKZx8VwQeAuekMHzj0umpOjsAUAiAdMZyASSkRFM5Cvd683WrjOb%2BJ7TAd22ULbzqyFpuT7Sr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMPhSQj%2FeapUAV1Os1KtwDr9ZHgfIgUFQ6br7pMdHM0EwYeJlpetmrsb3yodlTMxIssfa7ezWFXf2pfXqarW8CZkTBNadJU2H2o6550Qh6mYWbAYrJSbCm7s2S5LeU4qs3OSazJVBU6zBdGGFRvC%2Bjsxu56K9MKYprfOw9WjCRCGwi%2B9C8MgwZYK5ZEPbEmDTs8GhQn26jiLNGPsJLGWqNOR04XdP6PCGs%2BH8M8hzBG%2Fpf4ciuEw6I%2BEWKAj%2FwvDovVWwUnOtNj4ZtyS2hRrAKtx4AU2EOy9mLWXVKsdWb1Gmd84ZsvrqHKGMIzQTfgUFL64xeqRH88wWoffKJQK0G4XARCAmhNxC7zgr%2FE3Gzv6s6RP0MfDNJDyhv4TNNEXUBYO7iqk7dUaBt5UGjUKBdHCKqErwnQ%2FxeY0z1aRrtZCL6p5dY23DlB%2FERO2BAwOpmqaZ9EsB0tS9aLch0tFuIQhdqh%2Bpc0ebOusGfJujF2vHNaNjoyg9CXwnJd4KkWFhsA9ja4QFnonbRV0yj7VBTyuzkfRGdso%2FUSfCOchrfmt%2F3g9whXRXn4vdetOJbDJC%2BxRAYDCmkpT1KoNGQ3aVxOxk70AC1fMc2wssf8hQDAeWGIHCErScjzlr0E6t9It6q5vM4Ay85VBvUCxIw5Iq6wgY6pgHytOmTJ8zDjSpZSgTAEUoaqhfj7nPtgjUMpxXfBVN2SpJtl1nmwOhFHjKnUsbbeOBCyNGsnqyw%2BBVwIavoxo7D4roCol7%2FMKWHBF%2Bt30oYpUkUNdoZ9czanGBDteVGlbo397I8etFXHToLfALDeX1SjgISYoj%2Bku1gn3mSbi%2FQIIaqSVizXNXOl5f55mu3a1RfZdWI%2FsQKe1Ga3DFKB4XZzbuUwFTE&X-Amz-Signature=878308802fe7cc2471caae4f3c58fc196b761b4f0282e3fcf525f1a8e680869b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
