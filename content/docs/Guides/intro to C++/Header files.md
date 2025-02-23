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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3CXNVX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxNZ4VW07VDRrbnPS35AWTHJZkl3M50lzVr%2FkTcan4uAiAsAGQjvj14tNM2luDs%2FMZpZMt16442qZNOrkrmmjywVSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXOdGOg%2FLBw%2FVYiOQKtwDQFuOrCBfsfDsZ9fZACxGC3bRIMucTZqsKpEYu9jKBby%2FoKZXsLSnGJN5Om4JP%2B4sIuDkJx3O2Nf88o9rxS90R8jOWLvV5NlvfG5RmTWp3h8elROHikxe6OakywH8NYzv7mii8SRmACT4sF5F5tlV%2BHBuJFgSb%2Bw5Bvs07uAefGOEW9UF46%2F7XuDCk4dZmAB9jWyLsNb3Wu7Mp8Kycny7Gm6UKLI9zzF0Fs%2FNP5V1fXidywkc0%2BV3aD83pyYCNdLdVp%2F09rNfopkfqBdYJ4FW6KLY3aEJfPHO4w2k1Md1dnW8o5yjYNwI0QAmawyuFjtsjOsp8ucb%2FuUWqLAxrpuKedia0Wh1255DOUq5f2eQy%2FoZIUXpUqsoP6%2FPAOEwKfAkacm3ZK7BMShqaerHPEM9NxowJjbIm3W3%2FR%2Fg96J0JFfqizqzgb3ZgzJC1R6p%2FX4qzdFI0fp5fIEdD3I7R%2BAH%2Bt1A%2FMwOfstm7%2FAQpBwR1VnjY0xpFuAkIbGsQefq2%2BXM1JKep23i7132DDZg7YX%2BVa0LrV49Gcdr23ORl8JfMHngYgSkFZdSUDUzljWAcDyTqFVm8L1ykqsxeq0BM5Vac0ZlAyTCCncBVzZ1AWDJ%2FOPFLDxxQPoaJBF9uPIw1rPpvQY6pgECnAMypVfMULEJmyrjYPHYkTWiuk4F1mBYtTj1%2FI%2FyDJlkmcP2%2FUJvLeV7CxCVHI2RSPFo%2Baja25%2BW%2F1HsEqGpkorSQ3BKSHwO84tAIXFuf9j%2Ff90WZSyEh4ZB%2BV1ypNrmgsjbOAdMElRj5oV%2B2u3uxBt7hnhAN%2BD%2BimcwSYgDw8SoKV%2F9TGRLGURI2O1wJiCKggzqKqxFNAv01rA2vqTUTogpscpM&X-Amz-Signature=a96d9c05bd795338e9162f55705e3d11e526dd29ac46bb70f4b95ce6497ed7b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
