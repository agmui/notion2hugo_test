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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOHR3CK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQD1ivMODLmUV2Gv1OGqWx6gk4p6YqUpGOLBEL4k0lI55QIhAPEdoVX%2Fk3BQ0ICpM9DCW9sOfbU3%2BDauyy3%2B%2Bur%2BIt7yKv8DCBUQABoMNjM3NDIzMTgzODA1IgwZC8Deu730iwJjkv8q3AMAl%2Bca2kFYXTWp2BTxcEnonDk2WqZvXiFDX53bTj7FwqqLCfKNn6O3K265rgA4jJztWdsj9PVcmwRj908fRmhc0%2BbrfwUwUPysBf9f39fKyfZ%2BfFZgxzx%2FM93nVZEUmg2t4paCbCThcnuesKUnEVSpxWcz7C2ESPA0bJm%2FK3rtQj6H1zzv86gokWIwk5Em7si%2BAEwtQjNrCdwoHhWIFJ%2FxlMG0vSov3nlUAK9cnxgs3FtXXiXxvlZxdn4Dwy7Viwuz1LzuvdEnpsejOT7nWH87fSJa6%2Fs1z0DCPVl2DIpqFwZP7fgTmKz%2BnY87DOw1ebdvOZ7jLGfrludt2rabaG9yq1i9jX1ZRfCxJuyyr087b9eaz%2BSe28AXTG%2FBWFIu7oODNX%2FfZdNBX7GtwcBI0VXDWIynlpy%2B%2Ft1LmpgGMoJvw7FRWug895b6Pprmy86EhIO99q7v19%2Bigq7frhZvJt%2FJ3bhwLcjh8WsdEMQBWBVUt5%2Fs7umSdE8Qi5e5NgjaEoVVNqZJds7JXcB5gkBwanCqO62kq4u1eU24kSlaVd5B4XGhhHC7wua1BOaClR2cHZG8ZQ63m1tMjHjK1Evg664VM%2FtRXZWfk9QliqHqzsnW3WlbLxApAYC%2BjUnN7DDD8%2BTCBjqkAXpsF%2B5LSk%2FwR2d86JgpsAuNWB4MJDL7cRLTF11BFyCV7BUsJpRA8scxVygYjjIU5zE%2F%2B0BNV8DHBFZrAHEtIkgQR0VgAgIR247qhVoVaRjTJBIvmo63H1phnKZra68n8LbaBZkwRSKWHdUzBjhPanQFqzvKR7xBMkEIMkuN5hJhPQaaVh2xTk2SL94m2V03Rvzi1fJYnPPE412s3eesNlJNPBhI&X-Amz-Signature=3354790a83968cb0bf1ca4cc9950372a66c2622fb4b96eb0d6c72d2d674dcef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
