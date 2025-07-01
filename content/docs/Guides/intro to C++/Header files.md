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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FB7W2J%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTjd0aqPiyAXOjS9TcwNrJCYUymHvSd%2B0%2F8xSwggCH%2BQIgbraS3G5a9CF8FGpFRDKTJhKwvEfzDpRO11Iae0%2Fdhe8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR%2B2PJP1wNGS52tbSrcA0lxPaMWACirc7RP6TrKcFeko7KH6615eACNZzXHS%2Fc8fZ3j2%2FtFNrHvhx4dHUdWVRoa2OhTPALNya0Av%2FmQWtISwq0P7f4LvtLFFVTNDpV5inEk6vnPunkh7YPHai0TRGXD5KrEXVDoyjDuHVf%2BuAtUaNChGdLOBhvnMfrGLoXpWfF1gi8bD5gFid15givSJ0DoNrWPzYvjmXC0qEheNRIy06S2tFfy7tJdi2FCx0cZfEKLbMGVJ76S0OQLR4x%2BL1WdauSmz339XPLGQPf8sZqy2Hi%2BzB46gRZSex%2BiUzC4LRsUtEm4%2FXPMBSV0c8vKlCYz8GUyuVP2POdTIHEScgxvO%2FMYsIjmzF5f5GHUVo1UPRTcjGlLoXIKbEt7guRNf0BYgFDl3H6vCYMnrVajHMucTydmixoJWgUNLF%2BvhWbuTfEy7%2B7mHjXA8M4zQ6UwYr6yoQDN4mtDlPPyB2YhL4HVNxY9xae%2BMarXppNLwqdNxjwjtfWri%2BJsXSZsq92lebSbvyuo29XVCa1fuQK09oB7uXMFYv0l0AYm%2BxAjS2PoMqoFSj6xU1PqyIvX51aPIu0wEbYEhnbspVtJc2sfZPRmbwde3nEJSZVRBzt%2FFD36jKPl6dj4ZqOLsvd%2FMPOjjcMGOqUBiT%2Fo02qpBG01kyslfO4Hfcv5MYiRcCjAg8BWe8iSx2Axzkg8578RXNtEPikUOsV8ADBVBjyxiaw%2FLb8Gps9Rtxo0lOcewWWqXcDy5ytfaXFf2S9mnL9oKBmnLDMz9mX5pww%2F7d4mS%2BWnzmnFLdv0zaIskza67%2FJ4jS2QOUsNkeIwczioNCG8WMJ2pfZTAykdKQJzG8%2FLcWQ2ZCRMTg%2B82jByx7gz&X-Amz-Signature=96a6721d449da6e80d32ec0017737dbd1ffa07c6faee440f236e180f94e9a80e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
