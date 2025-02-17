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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PFCCPWC%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC9zsrqTme%2FiPz0q5sQegDmYY0sqwa4VLhp82k9yP1FPQIhAO1tVr%2FoaTL7NHvPW0ml21XFpc8s34Ci%2BwmtAKxcp4PUKv8DCH4QABoMNjM3NDIzMTgzODA1Igz%2FSJ0v%2Bu6rGZ36K5sq3AMVZzRFi9M2ABpgA3D%2F1BnyApXfBdT9%2BxUE9OSswXweraDajxKcHdv33CAmWa39GLL%2B4Uz7hDMocL%2FNc0rVRx7OKFn1cW8RvLiL2XmnHbo%2BKwXktxJRJz35gztLIhjZ%2BkKQlDjCDL0gMhkLts5zy%2FLTTh15itFH%2B2g0esV5StJap2ESHNuyN9gVkgkPIyUPWtdCvIenaTuLHdZkRfauIfORbd213YbJGsdZk6iKIyLVmQCERa%2Fq8BLud8D7CIZZD8JzxHkYdKbVNHpk4TnsghTwvF73cW1bbAbCYDHuLLuBR8PaPmbBC1NopLYsendYZ5QREbgf7mzaLd1o3r3VFllBjml4G5RB2yuF%2BPK6Iw3PL20MPRXXLsktNb%2F80vUBlBVM5kgjBjP8QJeGDBteuhbvJY9zEWIIinRNJnhQLj8L3JtemxwOBLFq%2FMRVWieK3Apuw2ZqS6KE6aI6LCbUlbhcTKWbiKB21atBMUKRfXR38ROWnu0fJGhuKZZ0Nn5wuRhD8Ms49o4vipXSsVcQFHAbJBhEYC74zgnt7by2e5zwBCqOS7hIrgS2jo2oD8dK8rTWjQKic6Po0FVHLPsvzfTVzvFZPCc%2FgplrGXZjD%2FUmQYeAQGvx1ihUJKmQQjD8ys69BjqkAbcY49Ima2IEdCYyj27FFVx6rhn1evEBMerlP6%2BHFftWMgy7XVb081D6sqbl9vJ2XZ5zJr%2Fn5wWSAZEpn7SheErIy3fV1D9j8CMNMXCTJz1%2Bx%2BMSAuSjRNI54JidJzJPgVj%2FoMoI%2FjFpuzIman9FbtcDqDu2pKMyMTgq4BMemv%2FZVkcAP%2BOaTMy3FPTk4oBRsFlEzLLVF90DtVJ9WDN%2FNdGHlMic&X-Amz-Signature=ac342a14bf668b9e6f469e3be5528e6c4362c8ecedc68fccfc007fd549da3253&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
