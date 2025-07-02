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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SBD2H33%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FCTFiV7CWYMH2PYFpjReSSModTJsW6eI%2BX7YToXzdvAiBALS3j8drvCbuVyh%2B7z1Hy8g7%2FZn3RYoawwkRnXwAKOyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuo47DlNK7aCPPBXSKtwDKjOrekjap9hZi6jcYv7MGOP5hleM7Cmy1H%2BTSW5%2Fiimat1L3sTQK%2B5%2F5LTwshImCZ8F0iuZvUytgFyPwYgIQROiosCTpbtShu9mPP%2FduzCz%2FzzvMaqhsJBDiHeNoUy2%2FTLr4Td7c1YRXai%2FdoSKysI951g5zBMDSAQTrPAuePXahNJoer2gegeZRVXwa0%2BdKZOd5shfjDhVZMTvpzli0draBnsUxhkxTXfRQ8uBCXYa8aq3cXyNrPM0ji37lU8wD33YWyZhFIgscQH9rAKovLfmfPKRCaqcpq9QhGyBN0uiEQMfEvMNwR0%2FXmnY3IVo8Lv%2FDqTm7hszTnSdP9JrmYFFR3Ug80hyDfvl2X4ciP1y%2BIJxiS%2BtkZLNCJYTX000cUkzdwATS07rB68QmYpc7hs5qa4%2F0izzb%2BUxgQYuhpf1PdjlxRxDEQUp%2BFRHJQgLBKLyyuyARm9oJ6Zpev1dal3fwfwX4M%2BIymcTcNEPuL1lDGfeXvt97iJVYIVUDWQdZe76VRinocGVeXZ%2BJ%2FSyYWkKvEMJAYKgV0bgPvTf0zpvH1bmrLhHKZFHIP04Iv15lKdZ%2B%2FwhnlvK4rbKavp%2BlRtVCWRhNQe4BrDgukK%2Fi5G9a03HtV1qbiBgp7C8wo7uUwwY6pgFW8eRv4Rg9D2mwPwTVqEXmi%2FhSq9mTK6ogkiqhLcrsoDbmEt3LtbKt9oHLBcZ8V8q7iUegvFuACBiST2YcyIDhhy4ghkKSfdzklw%2FeStxZzWczk6qgSIGwnvUaGQTncmaja7fllMxmRcDBPz7W6cc8U2rmJCOXmkQ1j%2F16K2tYaOuNHUAvPBjap9G430iPnHlc8EWIPAE%2FGcvtDKDRrWnsNZNuiSeE&X-Amz-Signature=1b85264907c2877b363751ab32ccfd7beb6e97c46c8ecb575ccb0077017c7d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
