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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LXKX7QH%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDjSHcpVQDaq5nOxNdrUfqtBdkfviRMqnz%2FCi2D8ZEaqAIgC6PDrCEpw42RZokOuGol%2FnfiiVXfedL%2BTDb%2BfcsP6K4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFD8A0UW%2F7XKRKvTnyrcA9UC%2Fi35pb%2Bjq6ZTkjMtyXZ3KUz%2F2p5G7gNqmfgsXBSPutqDufjntMDHSA3fRBwmYXwc%2FO8nF7asxTJL6DLmQUI8gkr1BKuO%2FGt%2FDQlEu3bZ9w6TIVRzXkOcTLPsaQOWlkTouduPgOuDQVv3RTsxCBwH2ZChVp0mLGHQMEtY%2Ffs5ycEOic63TYRYjGteFUlmMOTsUieegL11ByEFe5mHmTJNgmTGtQ4Ku2pBds5%2BV%2FuOyXHCR1HsMo3f3FBdJmPHcsMd7n77IB56H7k2QS0uM5cXPsFnqgYT64flurBHwuZXrBkHmIWK7H2miSz%2B7sesDniiV%2FyIFEvJklLsC0yxdHl6Hk0SC3JDaEYDkJq3Cww6oaLg9ndIM%2BNOJLFZfZat7iayVeFWO%2F%2BZtpFnxaH%2FN3RUmZpJbLKpsRX%2BDSAV3GEmCFhGBtHeOSAYKAJjAhoZIiAX9uSfURoF6OQXPDV1coAGvrBjlGLjiWAf9hpg0A6zeJSS5%2BHGyp4MnIgI3GVORTlNk57dC%2BmvOpwnsHLUhlQgPj1pRo97ctpB5WkYOQixexEqqkQD0OBOmBDYnHiZVTwIWS68TyMDjnIRm9U%2BtE%2FPXJ6zaNEb1Y%2BBPckbannlBRWiKUtkzY4dV4p9MOSov8EGOqUBcRYIdywF5Eka5ud1pVh2ZaekK%2FD35aW8f7n2XqM1R0vGkivWBhkAV5zUSBOly1ITRAAO%2BoWqIc58l4Ez8ByqSVGv2xE6q6KOT1XFbORa2xo%2BBxA3Kn%2BqdsTHRP7Y5MdAjnO8gm5tIhatSR4bDVrCC26GmuwviDlEf3vLxjcBvIHgIgn%2BiLJrzB05JCwiZRoxeDuq5HNKWJ7%2F8exh0%2BglVabT%2BpG8&X-Amz-Signature=ded9eddc1fdaa8ebc9a1a07cd4941b333c772f26bfe17da9362220e314e10bfd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
