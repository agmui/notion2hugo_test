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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC5V2P4S%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDMoh9MP%2ByMzVlbsRI5Q2%2FkvCpoBSEIHOp0sW%2ByXbMbKQIgRQ1HSgoGV5D5EkIeVpfbhdsO02lk6X%2FcXFlc0F%2BMfHEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGOVRetHIQiq54uJUyrcA%2BCXoG%2FMhLWsccDY3zRRxYAmXaKwnWQb6mUy8vnoVdeXXvHNUFAbOVuqqyH6jwBs%2FhclboaGiwE0porPN6hb9jGUGcG4ZfTmfk7qci6S1DvXeCUnsy3zn3kgJLPm1w11kpSh2th4gXdqO2%2BsXTGbVF53XSMwRLlC3LYBZsFU0hLNWqmXBgsyUJgAL94wy5D3%2FCEhTGxlJCv780W2SDKeMw%2BcccQ3xQ3BmsQyCDeOEsWVrAYzjEAM9JMnTi76vzZNaDEqLbgExlHXRZTa3AT5nmkRzp4DAdAppteik2u1syIHhGv1F2A0tRMbf5pTLx5hJ33kS0p3GKDnsfQRuwOgVmiAnQ2mRn7KHTip7j2H8GLyR3ASu9HvirnRnZqDkzcqw3EDEMvVM2A0GK95L1VAKONY6%2Bllsjg%2FhEZPuE5K32BqgP9u3ETS4VpF1WCh1veyFqOemPiqK8%2BP7zorHrSnX5tqqfbIfnh6o99d1SvZgFdQCZUThf2aND7qPzCkVbZQOwuboX6%2FfWJ9d4Bm0jp8yQx678w0N%2F93NDti%2BaYZ%2FNrAwq5J%2BiQ9Hk8DUwg46RgFabYIo0GzHMdoEfmqLEacEheLRAUNRV%2FRhgEG5thKVl5MokzOvXlCT%2BNcKkg9MKakt8IGOqUBjIe%2FMUyY6TFlCvwYVwrdu59QhIToxtNzCC3oLNW44jrAcVR%2BJy5ABfg9UkRTeuzdVPfvVi7dWdWXBL5PADveaFrNkCPdf%2BDi48j%2F0oi%2FQaH0qDyv0SOodbY09mSYsi65aF1eoS%2FNxV2wXfzMWGUQMgkVFeINSEmJPTlGW3XRSMX2M3YYKEf54gZWWEEkqg35WT%2BqecN70ew31CSxajxx7bDYRGhX&X-Amz-Signature=4d7128415bc865d59a04d3464c7df0f47d54aee69d93b59b8336552a9606d274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
