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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV57TSYY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5XpzQKigfsiO%2FUs%2FfoaARJcIVJl8B9iuONJ4YQMZvoAiAPFrqDDO5kMeVi%2FfPITQRc0d4wVFPkBR6edPKLhbzrhCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZ6G0UM2mj3l66NFKtwD3VYANBgc1q3VOzBaQA48qgodBJgLOLP3bsJEbN%2FBX0QYFKc53TXl4SnoR0rdxZ8j9hOVoOUHOhpSVefXdcsb8yqJxSvaE9Oa3wSSnIEJWq4NixmDyNYpCDT4V7bjwXcs4f3OrBnsX%2F%2BGTX4kX1xPLBal1hq9dcSYsoYX3XnGcS%2FXr8wpvqgTND96z3FoEt8KZqh2Aw%2FoQMDY1OS0QcdgToyi87Il129Mapf%2BrbY2P5wziNrsRwM2AjF7h5WIL4OgLqhLJI7fUqy18SdWvzggvrjNVdURnDMK4f0lQYRRVLAN%2BEH%2Ft1QaEitIpVwZDJaRYn5T2FgM8tCjbtky%2BeQNJPmDv4rgaKKtd7T8QY6YqKNA%2F6qhPGcqmStUIAq0abmiY0DB0PG6YLA9XzCmZTmpHWMyebOID1%2F4oHq8MoftSJNCxwtplAHT%2BnTPZmu9lBL8lMH71dGfSsQXfxTVVlQppJrUvuD3cxjh5pMuqU471F%2FqQr7aiLqS%2FE9HwoxjZU2Rn8y8LBsaQYX6KkAiAaqTZoFhK6qggqiBuR0sYJtaU3ieWSOyFUaS5M9EKFJKe3M7GCHdkmMM3OSL57bSkmWH09ppX9GExGBvPVUeTXvIa6uPK48Cvz6TwLq5F8Qw5KrtvAY6pgFd%2FUKAEnI5Cit2dGi6ZMSc5paWid%2B%2FKuz9MdfRjIk0jZI5YVfDmuVvTFez%2FXAiy%2BBnknCQD4NYeoDwBJDZQI9Axbl%2FHVca46w0X2N9364y%2FLW5KeU3Wlu5w0zy9hZUBng8z0s8HMJ45qfMx%2BGYtVnv5PayrDhpn%2FDvROGlJ7RbDjDY%2BIVgbr8HUDB0cCIW1onlNG2tQYV4ZagufP%2FLC%2FMk2%2Fq20lL5&X-Amz-Signature=540876c78d4bd290c2b014bf5a0198d67b2ef5352cbbfb57b883cfebbf4dd75a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
