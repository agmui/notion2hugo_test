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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GSQNS55%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjgmKqlKu3arF5vIKCPBpWsI0x%2FN%2BuD4d18Rgq3YgveAiEA1uiVQlD6e7KxbxV51FnwHHCxFCINhNgpbnf9l%2FKyGgkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4Rp9kxpidXfIQDbSrcAzppexQuueYaeXWBS3TzlZCmLPXebyKijkBpHCkDAalbv7BWqFnq4sHqU6dfrveBgISLfBHmbP5jP38UFJyDpWkK0MBgL81x%2Bu2yV0%2F3aXhuUS0fLoPbHFQ4gPiMbgCPgYvU7wC00getHbZwGD3VPd7uNVJuNxsl6NC61YhlbJ6E14%2F0%2FufAIY4b%2FVzoxtlk6rWPpcNxGjlSIMjOu2MX3v64SERfCOlivqlABXNPWxdPJXVw2E9F%2FVA9UR9fof3pdquFt9r8wCKepjclfTswGSIGQbtMVpgJFtzhG50x%2FbBEsun1lYsvRRId%2FDNOpdttdsA8SlA4nYqgn%2Fv8ijEdPAo7IOYzTtkXf0wOMni8tMBaql3SpEmX4p1nao5bJjBywQQE3mO6TMoL1m%2B9C3YrxVBzXAE3hs39mq7nouWiFvDLN5HHMtb6A5CHFSQZAXo9KP6pGFZBMG9zMfX0mfeXc%2BdGAth0b1xi4jVGsSUX4SDsXJYjpuP5cx%2BSy14uo6aDckKnHLQEeGEMgwUEnFVwryJYI7Qbvu2n9xBGZiTLllJ3at18jSbYpFtw0hUktfNnsyps28v%2BPZP5LAj%2FCSoHrKTSWSc4z8VLWBTFebglQuGFS%2BAWr%2FhtY0TgwfTXMMjoh8MGOqUBhqFU06ydk9T90y0w8F5sehVFz1coAQ6GqgxKm%2FKo1uXT4G6zYDgHenIi5%2FFK%2Bs8QmwiqyfyvnCs73Ao6y9ebeHlPwhdN1t0BZTy9Al8FulWbnYXy%2FxdfZQi3Yv0w%2BTSiEAX8FP7PcwlUZedo0CuhdokGRvQczofZA9Vd1eW7KXas%2FtaUlwPeGAk4ikC4l8iL2tTrEGo0EdJYtmDZwQCEzl3gNNHQ&X-Amz-Signature=8bf6006f53a1fdb41c28e8d36121619fef00e84e4a88af60938789dd6b3d82c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
