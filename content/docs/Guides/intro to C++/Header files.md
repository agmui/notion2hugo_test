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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Q52LM3%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAbc2y8yfWwuJVgMIqK5mDR6lgRYYjtvCMtEGu1aFf6rAiAzFoXjGbEUdqDt888fFutHLnMv4Ya7rs0ab1U6xUgQEir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMX89l8FeBDhcw7APLKtwDgB8pXRCLu6oft6j4Sb3XMGCr1lAkN0WNsH73D6B%2FUAvzJCmkRQhurA%2BJ5PS8OMV6FcmelT3stn8ZEcTJlm9X6HPmEloP1uM3GPai2%2B1W3Y1Ckhc%2FFSkmNuylpWTiSlm2m5g%2FZiBxKriIUVFWjgmkFr00%2BJybilpx27oD2rGUGrD8IUrj5E9g9UxoIxebmc2R7xKLmF1F%2FwG4rp73FK6I%2B%2B9buz4CLI2BMLn6w%2BhGxg11sNLPOxPbrfCjpMJZU%2FeBkodvuVTG%2BqnCujsuLiDcs8DpWH9nEo%2BIxCIPZ8U3O8Hk70ZY8s%2F8AtgSrso%2FvFUajjXC6Bxup9ZlFUo0P%2BbCaRJIG72LlW5scIE2O2jskLjKkXE5Z1uf448j3j4vDmDYhv26qtT2u6z7zE1kqzZUWnwC70CXvzYjKG%2BtsGX3Xle4nK%2FhDlR4ZoTB58dvcqnWUpG4ChiusnY29J%2FYeoRCPAm9xnW8gnIfPSTziAHgCJsfsWRwv%2FKASN0uwuhmwIm8cnl93dii5XbfRcyNjpua5llPkqHYRIqokDLrJFpG%2FaRTUmNF9Mz5z6r0T%2FfBW2RDihy0V%2B0ggQI4NVGCHdy3tRAkII%2FYknpwDCF%2B1I2eX0n%2BYYIGbV87i2Sdp10wzNP5wgY6pgFmvNu6oNs%2B%2BePhMDs7GoQueCXCHbljVlsv98%2F8umEc%2BMbSbaAYgzLLrXDK0798GnG7xEQbNLmNXZ4UqD7W8Oy9ZckplPLmg0JtDVoantChpX6iMuC42fFjYIrdiBqYLPpxYPhQ2BvFkHlj7qQtMXHCOHiqITW0orQwpc3WmJmCXjNbnf%2FdNL%2Fr9MG48W21MOwrKDWRBFGAPY87cC4%2Fe%2BVVHbJR%2Fj1B&X-Amz-Signature=fddb7e2bc7a9bfbe8914659e3186191b10905e37588073b611d19e42d78816ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
