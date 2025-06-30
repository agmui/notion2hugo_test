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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6EKWP6A%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCieBtNZqHiodXfEEVGDP2Lnxk0v3hmLcZ%2B578wdskv3gIhAMjv3FQVqc6VfTAoPEhSnIIXp3Mn7jMurU8nS2vq2Q7sKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtduudiVBrvBVi480q3AOb5We%2BVeJ%2F12exlbm%2B0LLzh%2B5vUdKJhuWNoeeqzCzPaH%2FNcjVklJGJKDe432AeMCw5SYjYmVnP7nraPup%2BdxKFSsP4KGTuxozUHB%2FXyfgUxkHgMRxuuowQMIWeE252Auuy4B1HAwHR%2F1URQX4WErcQGnz%2BQ0D%2FJE4avQqI6fTF8qMyisSCPXTwHeI22htg0Y%2Fbz2zfGcITzzewbl5y2eHFoGZcO8iYG2qnVBBlbcuZWdWfpT3wrhOwyScHexELo4fRpwPtpdgeG9mrzsRFyuYCMzcf23LN9pWHUvVNokLyVHD5xgSfimCc01WsSwpZ9HGHoPStzjW7bkOwqjSpH2w8ob3OVbQ82xmoMI8CPVjRI8j5AldMHED%2BbvFEFQCFuO36kl0FOSTkY03N2VKwtiwxJ7ZI83SzQkAjZdYMkdDUet4DJfgJo4ETg3z4ab1iluNuMeU9mg2rSBqju6Kh%2Fm3TT4DNI%2BiMTpJyWeGkSv29rj9G7C2zgSM2WqQMomxjLRKo39x%2Fw8uqRR6RjmnrbLz9THFLLtJQY%2FxocueIn77Y4v4k67DKuWL3Mk0gPWT7OcjUgLwz694W%2BFDKMpd0V%2BWrrfzQduotYrgEfQmTT9kPykA7%2F%2FA4DqS%2FWM3BTDD3oovDBjqkAd80aHVxs2aMZ%2B6jLco92S844qq1eaykubNl0dI1cqgAq9PPL3C9Xsvr4GHl67Hl6LW8iAyfel7iquhRRJYcdMXNVPu0Utetl%2BFkniWYobZY%2BWMFIlismg%2BgTZxEIh1ZAeP5Wdc8x93pKrdVSjMdGnrYZx5q01xs6C1ppjQvubxcdqLWLtaO2eE7ZSGca3rxrzJGllvGVEvhAVvR5IkedzUwP1Pt&X-Amz-Signature=afaed465aad5b916c3996a4c271b4f90362487843a4db08d0dabeeaf9242f63a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
