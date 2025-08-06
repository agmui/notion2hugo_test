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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXQYSVF2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIEUObANGDpv6oEC63jUGu2UutRFoaFOxncfeBxJ8F%2Br4AiBjEPN3C1EnKV94R5XAcU8LaC2PBNVTG%2FR%2FuLKGvurcHCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM83fA1OJU6zH631s2KtwDNtxGze8Q84ThJHVVWT6GqriYxL6yIhfCJV5gsk1WnxV6YjIBQjpcVrQ6YYpDizWTaKonQlviR2PkqDArXOQR8nTCHaWl2ebHLP1akCv3hXHYfGHwA9gu1%2Bnsw9apTIbZq0mi746rfemZX8Phu7WpBP301ZPPgAE%2BlZZAdPVdcui9EZ6JJOccBgsxnmHE6l3R1R2eTEoyepkN%2B1tqimTy%2Br4TDI8ORv%2FPbuRIUk06gzn262KrlFTvFHZ6r7ciWRp8qB%2F0WRyGnJbgbLLCemDNLpAgp8hG9kp7pb8jGFkZCr1a436D8zHxMywEqqIRCeisjjH%2B26QK8Gae45y7dp3fb9xyrH0wDfM3ZSamEhxQCq6Z5p5G5Pq4zhs6AZ6rQ5MNK%2Bim49zDXq5bQfVUnsXwog2hqVFtbpqGvsUQQBeysW2N1l%2BAPuOnb1ibC7r3rhr9049%2FcIdvEKNbdnLe7i0Qp42h6Y%2Fo1W6DJ7og%2BYlUSYUJ%2Bxc5W9gQp9e25zJaThWDv6nJFZPIfo2oYNDX1ZB8MKgf4xmtjB1URjqHmruf1sXUMILO3v9Kxkc8fWhvSfLI8Ej6NllaYuEp8ceIw3oXxdvHPcxBL488eurme3z36mCtkQP6vMtb2w%2F6mxMwk8%2FMxAY6pgFRfrtc%2FdUkamO7xUrt5XF%2Bnpvj9CccEOU8pc4ij9kPxIE5CfkJhHjxLk5GldG7Glh1NkNv6Bq9U9rvHAk7eeUmUTw9UIbjz2IRfUzldB3dQ%2Bou%2F%2FhteMO0QmIzsclW0655zMBujIx0TqW%2Ftak8vW33wgbepLEvlD2nuGty2PeJ9s1XXwQH4E9G71A53mxRutzXYx3I4C40Z5Ul1YR1sXxClr5q7J%2F7&X-Amz-Signature=e6d65affd0478b7af90957bebf7961ec8fb243a6fa6f90e806910ba9dbadde9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
