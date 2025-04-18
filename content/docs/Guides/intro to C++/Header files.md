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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TQGGX5F%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChyWIn6Iq3%2FPp%2FbPTN4XH7z7zivjBXIrmPMVCHJOcHcAIhAOpQb6Ufz708fVjKmaD5vGb%2BseltWbHI5dQPIaA4HsB4Kv8DCHEQABoMNjM3NDIzMTgzODA1Igz3w9vSmm7mV9Cr%2BFkq3AOfeTnYMRgf6yJTpReZPU0h57JDRygREcPtBFmJxuEl7C7VoiddFcwIvHY3Nf%2F9cvSyFErixAIuytd7pVucaR2WsfWhI9iDQHONkRe4Ffs04Zg0H%2Ft5OYu0c%2BQwf%2BcLnblAa6i3VhDX64pLerhMtVmkaX%2BZnVjcAlt99V6ywRKxh9qhcZHkfwngtySID36fu2PbPMNTEIBoAZlau5fopHKVcqMH20D3XtJCF5gSEjD5%2FNFHiPicXWNTNMxRRJLw399OK7OwNdWpYS9dHyoMIlP%2FIGDoyQUEQ2%2FvvOzXdSgyESDwl%2Fq%2Bnb3YHmjy4xpt7RpOmj298xNsb3v%2F%2BfkH2rEEaRPvBI0va8AeSIRLjWJpxEECwK6%2BTH6xYELng%2BQzJVIgIyHs%2FjHPmxNfinG4GVuVyJ%2Bq4S%2FtcQnXOghO4swD7JRC1AsiaUiHAs5m4hk78uf3K%2Fm55r85SmrlEjPQrTqs8DaX7x6kZYZEOdU7Z9f4NkWBzcM0fgl72FZSlO4dQvRxfvJGBJVETOc6w%2BtOgogVYxrHYHbADKF5dV3N8%2BOZUasaeBHqiHgxrE2dVDVKbZM%2FJy%2FL21W7E2xkHYxjrgxyIaUFE%2Bji%2FEsfbH2dK8aVExUq2m%2Fa%2Bs9KiwJPqDCYkYjABjqkAVqitAgn8hN2fVLYpPCTyNTpZM56peF9iP1Lo5zbz1OiCU4IXU1gZUVmkodVZ3q9Gc198LmDMddDUWQnR9P9e9MML8cpDwoqZ8CMKtK2BckaPaiUIESfoVslbjfU9qeD%2BqfFQukSxG%2FdL6jyLYKV%2BcB2UgxbAgYd3q0ttT2yB4sdSc204ChwVwUWUQlE8cJtIjlEvtbUBL%2FoMWPfvAfhwXRjQ4yP&X-Amz-Signature=85a0a0e0ca501134888d86bc654b755ac3a9ec8772454fcd8187fa33010755e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
