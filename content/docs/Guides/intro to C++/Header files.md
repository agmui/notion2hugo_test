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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPIF66AE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDHTHtHXmYhD79JoKrQewJp40Lj64PfGszkQ1dUY35Y2gIhAMj0DZnOP%2FpMZZpqbpuTJniYptrobShfgTQalPTV8YtKKv8DCCUQABoMNjM3NDIzMTgzODA1IgylB%2BmYzcVK1D0j6HAq3AOInfttNextmp%2BSlosKj1BDinMKjxRCvuQoFIAJv8NSMASPIdFFC8M7f0xwdj5Xb5bZ7JrUTFBIw8NNRyg5SdiTpyJVBMLCiT6cAjlPdvBA0FcoUO6JdRcGZLBpNFOkEW9Np58bn8ocO7zQ3SL3nQbGE9JiNr1ajvcVqcG%2FfQ%2FKzIF0BJjVRv7r4bZEa2AnAUKLaCn8cXXq9ucnPXNg1JoolN1QFxtYd%2Bhd3jcacpx3H5ELI0wOh9kLsFLjy2f8vc2tLM3OSp%2BPfKA9VfIkErH2tc62lW%2FpDKAnf%2B6EMfo7QajiIdO%2Ft5fQIhiTNhY3dokyY92iMWxoXOXHIJvhMZUmU295JAv1%2FF1LDPgMpzAUGJOq2bRPIau8dZv5V%2FeRW9a5G%2FChd%2FcPqCdyPXIlSwO7M5xbKUgsF%2BsYmuT2hA3oNnprh1ghoJzC8Wly%2FZQL3czzx%2FbpDInZRMFDRtUdVeG5S7q26%2FVJelBpV6ckv7OxAijxy6LBnxdi1B4RaJ8yDiPFBCN%2BJPznOajFMQPOBew5hsLncoflLlAUjynHkpIjLNE0JVWFpU2mpMkrugMijwX6aa%2F1yy0Iktk%2FSzIC8lnOleABAM970gnqxKevdU%2FzaVjHuruyG9T9NvWHVTCKzujCBjqkAS04GV1UcrX2ag71Cmp6paR5AMJpFXy58Wwj9RY9uHpSjHEeq6wc1VStowcWMcxFCorihGH1xtjbmZhNH09EgshnOhh5IHNPAtdtI%2Br9u4Wm0upKQQas1fLcDhEjsnWG%2Bt%2FQeg4Ntp7x6IGVGkULaUAxwPhw8%2F%2BVrjgAfBhaP2jU0uOSEx40Tlz%2Ffd16Ygd6GeJ5EoLsU3NNwlaldQVHup%2BP2YGo&X-Amz-Signature=c614de47a7c067906d6b03ae7c342ea1f23e318c14a6677bcb704e443b81e39d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
