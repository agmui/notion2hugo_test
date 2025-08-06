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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2KJIOSR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHxz1X5KVqbRfWujqYD2Vm6BJKPMmNzPENx86Wa8aAVWAiAqJVZCtJwDe5RW7XSFx5rtIvK7tbAx8UNOyR7ZnaVlICr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMc5WEB0JRlYidHUDmKtwDlZSIpxYaLAFaG4uPakptNbSrOX2%2Bp3gF6%2Fb%2BkMiDP2S0aKOeVktr26f8mnuGVNwdyTrxvXKifXP60jvbLV7H24gr0ZIGdcKCfa574oPIJozi%2FYnJjL2jF7NdD4JH022GPEn39E3P%2BDdU0dP2UVt6SQAQUDcQ5k1SdSgqMuHohWYAOpA5fkXyywhnWra6xCIZ3aQh0RhZ8aa34lzjElSKPjKeJfTE6WayWlrTmQxVMH%2BT6jXWGpxY4DPgejfsZvuklZP9qjAFdQqg52iYS0cG5qfp4hgDCQ0dt6EtofW599BzBAOekvGkD3a0JBxqBkFj%2BlsAArYVBv9rD8J3cND6pNRyI7ttEgq%2BWQRNIi8697jWDmpbV0gjIgeLLloK0lcIGX31BX6LWa7UtPXVGFmPGW0a2TZyUBokactLM%2FKfU0M6GCtEQbsZmwXib57E5X16EQCkhgkdJ%2Frd09zSm4Pvl3tRLVKR5rgIeNcxrgLfLIgcHaZtfg1W%2FAO3yDss9vWsJ6POem%2B9YNMtQHgTGEB7YIyhTJGvZQZWA6mtTh8Lh7UkbE04inivXje%2FKYStsivg2xnjBEqIPoVimeP4t82QFyJJw1eNgZN1hWOa1iOUjLM6TKYW9Wb0%2BX2GDP8wwZjMxAY6pgGWPiX7YRPBzKLDxfpEj5JkSpzpUhOSQ64Pu24ymCVg4cITxUp2ty2rJTG9mdgyAVE6WXd5E4hVQBLebUyVF%2BUb3PbXxdvcFp%2F1BMv7Uur5bN3Qe5%2FpoLSbLTprJ7xrSF%2FtFLSak9qbUzUljNkNuluv1Yb2yrwS9gr9aNcuvr%2FyqAYKyhtK0hnYamTWIloU7KQtLRRj5xKYqdzWNUrKEiitw9Cmt74w&X-Amz-Signature=b62b06ef01117cbe164c45560bb470c1351579e87187f096d27baf5f746a7865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
