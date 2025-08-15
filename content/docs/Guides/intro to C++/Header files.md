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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QCWMS3A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEjomn3kggaf6p5Zk49iRSkg1vT7o4q%2BS4WaDTao9Xb%2BAiEAo9LKQfKfz9cRb7FdgJrXxDCmvRGiOD2112jrPO8McaUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDIYd%2BLFEp%2BUn255eVyrcA0%2FtT1FrHDKTpKt3v6oKqHkYaVdXwIdGfGhe2XDy6aiPFh54dxjn8FTrWzfEgle6VIF0%2F0gF%2F9VW3bHuNMPyhn7sMv8WK9iE6icJenRzI%2BTSB7UyNeSeEJ8Ypj2fBzl39%2BI1DHaBuT25AAMul82kBYW%2F2WRKLW7rZ4quw%2BokxABJzNtYH%2BqtfsRLVuyEbxqqD4jm1HoQL4UMosZUFre1lMLMTr%2B981%2BTerp24iVFr8gSYTOgpKvT%2Bf0f6DC4XhiBvod7d5eSKjH9EC13czoVRpYpnRgZNnJbX00yalf7%2FWzEaiU%2Buz2we23svj2RrqfgeLJkbOXUk1V7YeXRd8m%2Bgr9efSWGcwdIO38jNErnkDrlceqrPKVVeMd0VVBN8iD9YhUJReyYRGmnogdanwpFYPXb2Kxf3A20ydRqTpa1TGCVcT%2F9WUJv7Mwy51YXPQJJ09cNS9MBKhgvDn47Er6j%2BlZR5zRKdUP4GticwPAa%2BAX7zROcUdldRF3XecXbHfgOafvNmBcWlDSiol5RwpzGtv6H1BQQryjmFWCn4oBMbVbvriE%2Bi5q991QnA1YKuIOEY21DFxRhZiqotwzryOI%2BVIYLbG5ZuJUjIMJumFYJnHPbJfHDIB4UoXFg5SDfMK3a%2FcQGOqUB87FdA%2FcmkZT5KowdNWWfw6pIRzMT6yrkIw1ZdtXkygVrU6VzwS2ibMdXQWERXd3uoOSWUcbN72NiUdGTiMHIuUJdnhIKhffNRdCXwwoh4%2BwdtKm%2BCvVKRtH4D7%2FE0Z3BdD%2FKT4pwyAqMgGVpPSAXyiHHteL8uIl5YzERdcUopzkxJR7XM%2Bcun51c2ZDVM9kV9AUNZu2obRbibCqjnS4xV%2FhM2h7T&X-Amz-Signature=428b666f5b1c79e4785ee63b593cc63fd052bb1f65ad619f70d7b597b88b8ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
