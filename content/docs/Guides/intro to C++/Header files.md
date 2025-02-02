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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4ZOHGTZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCptK6xLfsTKmQm5XXT11UeOSmFNTNJBm29Hd8EIQV3HwIgTSriJVcYv20uu9WC2FUGApjJj60reKYEbSvXXJBbRKwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHw1iuMM9koetpP9CrcA%2FEJIdsERfj11nH5k%2BcywQaE1GX0qSSVeON3q2VQijaijMNPgk9EVAtB8gjMqbmzgw26Dr96cBLLDkmiCUMlb%2FcuV7GqFKUJ%2FivNmwA58pDDApoKbltHkroHObFDmCxytZlGnA5Ag%2BV9afFE4RkZmus5qkXpdtPzXKvYFBdpUrHOG45lwhO4EuTmVrN4mZmGGN5JqaqhOzZPMFDNjft3flCfcpCTvV%2FX%2BZj6QaZeYcZa2DWL25P%2BWiowUIxL439jpT%2FOIuDg86QyUSdBZ3%2FPGwLsC%2B0inBC3YW%2Fw5qEWx3R6%2BL3BzaPhCO05PlhWBLygyvBa%2FitDWHFW0fNMKqY3qSRBCG9FBhGTQ7yrwVZcdkZ2dlRFOvMcWnMsmYuZW7iZmshpCx%2Fs%2F3oD8KtV5X1SLSoDYosdvpub8hPcCLQX0VPo8JYkrBHablwsYtXpB5wkZVcauRVslhP3BU7A3quwtg26a4Bz6BJB9N5j7O2QBa%2BoVv6JV%2FKng%2BtJhE90ez%2BJtD5waI%2FG%2F0tyZLwZUGnGK%2FV9tcgs47AwbSOIc1aHTpBHztC1BncDUIY0MclBRnaZam4f5Scbs0GbZwcW%2FCHFh%2BnXJ7%2BDvjfCbfiEp%2BYtaBLCqfuQ6Lh2%2BcBF8JYKMNue%2FLwGOqUB655H8ARbvpknOUqvILmt1segKGxhlodhXpsJyu%2Fu%2FZOK9L%2FetZjtzpgus8ZvqFRL9ZromXkiYgdWUnuKaHpFu2spq5NaHi31QvtwrCElzeLT7JnKnTNksWxJUSHCl6EBScaQsAM5%2FKoZVCcsPKq%2FUnz7pug4ElzB8RZd00%2BXbOnoD1bECbNKySa8NlJ%2Frb9%2FQ0i4L72zU9EWSAknbHRmimJ%2Fh6d%2B&X-Amz-Signature=70fe804ee361c6470defb3fe0f61e34723249de12e480ee9be778dd75aed4de6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
