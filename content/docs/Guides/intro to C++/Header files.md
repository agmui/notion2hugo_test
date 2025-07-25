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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLFHWOLU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIAOhAuoVbtViEME2BlSJ7LHTZi95Ej6zFTwKd4g0zFW0AiEAwvLF1N433W2QaONOd%2FCK930rGLLbTgf70inFzp056HIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJcmJZVfVsB37vhnaSrcA1GSsOv5znYhogVDzBO7OQx30PgKgJCUnhzXdHA6b6mkqE%2B7U8HlVMZ0YmT0lemtmOjFiwrdy5HbTkJx3%2F%2F7PFHicr91Mz%2FtvXxPk%2BYKgEyhYQcOjg3TvPSpnCZrWs88%2F1DXcB4K6FXRE35ZtMadLIgApZFowhCI%2FBBtlkPd%2FMXCMHcbZCehPWgoWxxfqaLC1WPVY96gqW%2Fz0CCXxjJwfmvqeW%2Bh1tbE5sZFto9kR4d0jM2a0m6hbGjZ65lE5GFB1knvNeeo1w86x%2FCXHkG1gAn14IMgwRFZ%2FIizZOp8zPFBxDv%2Bs2H3RiRwpG%2BnRVqpAMbPn9d1DcyTxkmcVJnzC0WMl0cD16Usxp2cMpIzVhOJ2zPLX902SpNXTEDZu6onNjB3WFiRcRiscR7oEc5NHv2m7zr1ubEIscO5uW8IG90NfGVER1HMZrsvo82I3TxIdzgd3xH%2Fu4CMcIw3%2BJ4TU%2BziDTaX%2BIUpK0QS6M1fqXWmVCZhd28SrVYvcS7nDVEaDayO7zTE%2B2BJDJq2VNBrAGFtMxLRHlRgA3bgnuNDZyj4IJdkJGXDw4B65V2%2Fy687ue0SSq2iSYlG5sNDidTrDryyKw82rQUJo1FRdCke0CH0XtkYj2ySyyyfwattMO%2B8jsQGOqUBe%2Bmvk4QD71nVH0v%2Bzfx%2BhDdpb%2FMJ24oOVMgBdqgeHKrktIHA6zPZloW9sQnj6Yj9rm8wMCMt5XL70lV8wmPPKtlMjj66TnP618IVCzB7IIUbnk8pR7BSvIL4rNaMXeiUg8ixgmxeHHgkC8KxcM5UPTMYwUphUxQWQsoZLSQ1QQGGdyPrUjSJ3wEzpmRhzhuqdMciJ7Q0SOUvcmghnqZwdHWHZLS1&X-Amz-Signature=753519abd4c444a073ee5f0b03edcc66cd1a79a608fefb62bd9f4b38ba48a6b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
