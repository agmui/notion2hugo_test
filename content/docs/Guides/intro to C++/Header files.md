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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UVLJXIM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSMeGOhEao17YSyFlFOcvSLOUJkmipIHHjzl6OqX2KKAiAipyzJ2RBc0LLSTNnWVRqONr0kVikweVJfNV4WmaHTcCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvF6LUEIMQZBnRPG4KtwDo4sy3CdSID7hWN9x5QeKEiuhIUPlRV5w8Gq92QU9VoB06AX1OQa96Mp5LKoryc%2ByZJu42unamoFy9%2FRKRQK4TG6KTuxKvm90tOpwVySNTafgp%2B7iUkGCfYMm5mxMiwrHY%2F69eyVg44MvzBQFRLvYrfNdQ2e9ojnPIYojwOsboNe8aDjQyJR2hBib5NJn4mbia20ckp7zXkj7LBQgfl3qyBR2lE66Rk9dXkp1DJrrxmegkYq6h54%2FY%2BjR2tzk7Z0XKo2DtotbK3RMqH0TXCmbSlafp6N69UGZhYcs2LQmBRhnGSHqJO9gRaeTsAoKytzTIWn5VU7duK%2FqsjCUZXrAWS%2BP3dlmcUcWN%2BIygHzSO5%2FkBQZxx4QmvkPkTHYr15mYPY%2BNfN%2B%2Fc2gUDaTfCjBCZ7pZm8doPtnJwZHej1mWb%2FP2IA%2BErojGQeN4kRlk2rd0HF4ZYcOQqpg4aMENb9q5eYlQn1VjCjDHhiNJoUsXnh%2Fxw3oXB6%2B0bluQEuxvDpecFcKUekgPcjueIkpcnipd0s4nqlcNqCMml%2BHrhFDXuqlQRmuvtcohNsqOyGd%2FECHak4vDcQPDCghBEQRoiocKtOlbStTJT4EcaPasj1nmprHojIxvmap7c4z7KZ0w7syvxAY6pgF1C%2B2v7F1IC0Z1g7Tcmn%2F42N1x0njzj9N4gNdYIHJ6l9aXMLSb4afYSl1VT9Rl97eFCFUKrtB1m1AvleDcg115%2FBrXf7czAQ14D6gFCGy4bJ333DeSP%2BOS2xLKmynLSFwbqTzqezh9G5ypn5W7owN88Y2cXUiul5KrHJVfB8OAHH3QtCoBNNjGnBtXLq0xXDlYi%2BZTdJMMyBmzkBk%2F3Bb988XEeNU%2F&X-Amz-Signature=30dd5d78234d6c3867d25e4a32d68cd20a70d02d48185f84b468a8127e580512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
