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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WSHQIEY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk3lSlu06xJm9UvyuFXQu8pUnlHKp5iWzcOuL33St56AiEAkvw2aQEMRwPuz43hQQ%2BqCwcvFAV9gx6T5bm%2Brw8coPYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8%2FjgCptPi14DB0dircA7AjV6UZuBc1d7o2LD09AcE%2FMyzuC7ERTe5Z30OwiLzvqEoxflNNq%2BcTbsKSZk0lMSCtoUpKHHeNCo9dAECyDVo4SlsNnUV8fhkA%2FKR8tlS29kLVes%2BjoTzXv0AP7QL%2BgLWPIDJBuw4%2FAPXj9sEEpt6x9H97q1C%2FASB88GQFYObUdY6PC3%2FSEDIm3dc9q4%2BWRVeZuXZ0BS3qGlXtqyv1iTPXp6vILlMFdaq93Vey%2BQRbOo3jL8bBXIc%2BimpE8PooKDTmBtdPxfEec09qLZqfGTYA6gN%2F2l9w6DOJdpllexpT91b6egW8wOY8oluHPf%2BRFfcZcNloJ%2B5MAC7bTDaz%2FMkAxvNHp2qify3gne%2FIjes3IkiUexDNuQS4gHqa2WdDV%2FicD2jdBrFobPbGVNJqgy0%2FfYxZtXbv9UsXdIfA6P61BTgYRsaRKQU1g9RNY4IPoGpwsEN0c%2FQhP7fJien2dWYN5pc9QdN1Sw5emKp9U7F0Gexp0K9fTxHTcH4agPGhzhE5rybkKjU5BjbV5ZYU46n8kwQTjVFwpHF%2BWirVY303VGnX7JE7iBbDCHb%2FVmwcCMWgLMw3JqDtIMDiZod5%2BYwyhKxQE8ZcYDvuyDLrpA5nV9ousZCZukbq6MRTMJqy4cEGOqUBHDa7kIMRVFU9o5%2FMoA1ABCdti38VVEmlcPpdUK14A2G4ClU2kpinbbgtAehntdUK9eoVYp1ClnF8GyjQyjXQGG6vQ8wa3HT16SQdW0%2BUvKing%2FbWsK2HzP8ZkTOWD2yupP9jQFq4BhFSS2mv6Ozecs%2BO%2BJ7VMX9zeLz4fbcYNpCedjzNfp63c8kODb3rdX8NAo2XaAF819cm%2FP%2FhG8IR8H2aUxgx&X-Amz-Signature=41ced4abf748e621faa2228800f9206ea439394bfa3bef902a3366af099ae087&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
