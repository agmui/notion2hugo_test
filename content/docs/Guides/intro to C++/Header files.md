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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VOYQC4X%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDgya0lmsqJFGrhPWft%2BtxZZ157iTTphdJRkzJxLxsqCQIhAJ0yFz207s0xZmsIB8JcoxWp7eLAirnT7AZI7xLME09rKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHGzw%2F7ECyhklzOwkq3ANiNKFyuPZc2mZSvEb%2FF5U6RbaqF2SeRSiahsecPEkPlhBrUDCtCKngaB4grhhlUjgqkYAwMSP5yMsLJFqqFYEr3UMZ8FiuLe1SBkLEsuLUM1Vl%2FAYkyo2407pf5vE3OW71GTqiMbAqQea9hrv892hJULCVAX1xvE0yr9J2GuQNomD1h%2F%2BVngyAzVaqfiOGO1ch0R%2BP7oLOcYdwOo4GF7H4jzm3n8q1CA5MgKe8oixBGfzfYgr1%2BLb2nZDftbLKU2mX0Xs17zSRDqxPcxnyu%2FNVusxYpN8mYRDheaHJH62Xq%2FtiN5E3Mg1FgkUI7sCCe8OtgH25EK7%2B1vUiEXCZyhvMk9a2GW6EtrUreOAqklIOylMlhl2UjAgQ%2FT45ZHNUbioR6bZjisFA%2BKoZ5M%2Ft6BZLRHnEvmGzcPeeztGsVllYsbMFvpOroXaGYtqsL9TuTEzOruU0zBeHBRGBtidmj2Pj%2F43ihBzHXaOlpXlGhRmglaodO8cmqT5a%2BNPSj7hG2ur%2Bpcj5gcp2WOFNvRs1jNpU9FQT3GM8%2FK0CB%2BYgImgBRu96OSH%2BTnMUbIwoeTH8eG%2FWzGRzfiDJI88OLxgWXilpuom2TUORidwnWvBn3mcBeF339E0scNd1rPadBTD5qLG%2FBjqkASN1nHqiI4fOgP3NdhO5Mu%2Fb0Ps2hnSO%2BGgOLCPHGrffohQumFC7XKcjS%2Bd0pE6jQ6LWNRIdIh%2B%2FMG4aO2lXpLu4sXowLXOtEzy6rfh%2FKUYBocQPS7PEs0p10BfSXfYrYNZAA39lr9fH4xQSCGodAeh%2F8Y8F34u9FmhphNKzkWvt5iynd%2BrbpoPbhMuCgntTXpwKzzGFOMNEu1BhA0N6eDaQXbbK&X-Amz-Signature=2c4953e833dbfafa0dc6951eaf91949f9e01cf84776b1b47d69d4f0cbed95cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
