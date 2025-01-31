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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYSH3S3M%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqNZeXzahKpB%2FA16XoKmODMwIiuDkvouht8jq8HQGCwwIgUK1yepdjLCWBcVtgjuqYi9ZXK%2FDbijasUlRByZMzZzUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqdkDlvpwP4oHUHDyrcAyqB0uOLYGL7ZbJbAAZrnBdj3sAsOuwW0jmFEEAG6slO%2FX1z1My%2FJT6%2F%2B6gLZ6tUEUJuvkamchgr2mnxfm6SBUb3LurN8WhTY11Y1MFspFEe0v91O5TCFumsySUOKwvI5U5Eanf0uqaDyJtlXloEAnLkSq3bIkOeOWPf8CsyseNLuZCo4bKHGlW0i8u2j%2F6A4TcKgt7HzCdKUgKIBbGgi9EQRzlTyDMYchGikyPALLMhlYwV5jKpzTQl2rj2TEoqpBDx2iSgoUFGL%2FLUah19T5tmadvQ4cTkDC1Za%2FFM282%2BQjrtGFb5GZP%2Fa2CnN%2Bn9XBGQtdOFqgHyr1Lo7GMMVQl2X7Z2ORqU9W2zjKCKX1zipt7WOuOcei7AF7W4NX55FLQ2FpA3Qfrv2dbCqxMMHUwRsO8jZ09o5gI%2B9qC%2BkIyPeOwdrK36b6CjGpN0r5q26PF7fm9SHLm9CTFrLpsOcSPZ9BwLRVgTiz5TVMVsrMFoDLTDZPkjdR2avlEIfUcRg4juRrd0Na38MFAtveqwwZzWE2E0HHb4WGz7Jy%2BpxC57iqsudJ1XEFADhd4%2Fsn4nZ9YWp7Q%2FVkiMTiukCnmWxGk0IciraaBRUDnVtky7%2FD%2FClO6tnKDDbO80DH%2BxMMWa8LwGOqUB1cV9H7YL7r276E7D7kqFTgsQWuKQFUnqSadwFG6mCAp8D56ljkNzi0KwwVU2KOST6%2FHL2n3Bw1nrGznwPNzCoeJFx1IPcVgPSPDHvvTQBUTh5oN4YTtDAIEnxSucnA3mTnxBsTA4yTHqxjlCdvdePGFAx%2FAMAbtfjjl8PQ6fdBFIBmwmXWH4C1XkqjAfFU9PSnjb8R9yp9zINCrM6qwst5lr7wis&X-Amz-Signature=d9bfc16b7a8fead17081b8821dda256ace8f5fa16ddc5e832c1ec84130e73451&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
