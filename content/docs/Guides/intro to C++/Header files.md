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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEHGB3S3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDHvWgAfN%2F6LiBMNtVV%2BEg5NFVl%2F5EJ9Lbi07hik1wB9AIhAOgMDi%2FQq0YDAjOCiTqrwQA9u3TIQpRVKfaKZjd7zGRLKv8DCEgQABoMNjM3NDIzMTgzODA1Igz5FNal7vWyKTvuD98q3APe7Bc729RL0eJK9Km2TdeX%2FBmI9MAaj2d%2B4kqv%2FIJrBZFwdfv33xXf21Jm6Z2FkLgis8Hkc6vZUxN4%2FVYdXGb0%2BnUGVT%2BS27uRBRlF7EVQyaRV0KHgMRBoHJ73%2FG1RLWPNgGygc72d95dfXXlnnqjlQILZg30ArIqGUQUAUeuB8EDBUykyLQIHKCC2MbdeNhri8%2FqhsaAJbEm1YdoiePhzs7oXtgHHr2W5tkcMQ%2B4VLjNmgOb8CKoqTe1DlDhhJhfc8WgeqpqnySFck%2FiF%2BqkN3GfDCfuLH7gVje0w7QiBIRV8ip0I206RiE6gsUpu%2ByqKCiLUeY8Lg0mk%2F0NQBuwsUPinHhNcFQsDKTOJWM2efv80R7Vz%2FvsbnO%2Bt8qG%2BeWGHCpvQppC1Fkv2skU%2FTdn%2Bk7AjPMUkcSNNPClgWKOMMKsUdK20rA%2FprbJTuhklFctmwwrNq3Wc7O1qh3wFj4JNWGDAEofRQHY4iQpNHJlpyTiy2Yhl9d3tNj9fFIJh6h76ZMXw4ZmgQQBRtOwXtb47pm%2F1lxvHa4IlQbCpkYKEdLTpNmy9xlOdBxp7Jo18L846h9tD25XyHRbvmWvyA%2B1tQLq3Rt6F5vI9qYCio%2BMZASL8v%2BnvRaa%2FKCgvBjDvkMPEBjqkAUfrqx%2F3EsmEaD2bzIeUPIbWjWJ%2BhsIfAew1NJvx4BQPDFRHDS09xkW8rxcbkuv9LUilhg18HKFY6nUuTkbJ1YmaxTgVtOSh61MBhg8IJMk6ISn7TozPLF14azcaVDk0Ji9%2F8W3d9QyBOca8QKP4yGaHw%2FvXHp%2FzQ4WyF44cny%2FsZIaYI722j0KREDm1oXY7YgoYpJe4xtt2yRoGV4pasnrDts8d&X-Amz-Signature=53bc9b7878f3788ae790846fcbb34976345f01de06cfc8b40772830ed2638a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
