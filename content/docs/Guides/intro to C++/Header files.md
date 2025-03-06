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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI7IRVX5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjz23ctcTxmt7KGytadPSxpj%2FRZme%2BvzHa5jp%2BxesR1AIhALqas2tdbvwfxY6kN1gLS0wL2iq8iJ%2F5A9mFehqC9PciKv8DCCEQABoMNjM3NDIzMTgzODA1Igy8qVMsgsbQHkJWUacq3AP4b4twdlQn%2BAIW6A6lzhuWA7xe8L4o8LjdTg3WhV5XtsTmmtBKaEaYANI8Hk4HhLqgQX5T5z0ZJ6hyIVo53Um4YzepEXriHbTr%2Bp4fSF6g0lij0gl7uorox0TDIFOz5F5pS7MH10YCpeieB%2BVexiSczL5lihhcLALosR%2BZSWLzzK7f6o9ZKzFgp28VSyQhL9zpamOTGe%2BE2v%2B0dlwKps0LJ9zjxPvj3OoSAWGF5vVk%2BmkE%2FwTyCWiXkM8RZXFixT3lGuSvScUB26KAfjGyOR2zNH0PoXc2VE9lnVXVC0PRpPdTZNHDDJTJ8ICBZQyxXizs8qoG8eQqmummTmMaE6sTkNnELbufUQvLWw7gk86pneHFU0i7Cnw5%2BDAhDRnXMyWkxwKfPfMVZh1j%2BSTz%2Bx5%2Fq1Wuta51dVJoQ%2FresfKpyOmmFY3jdZqFM%2BCI4rjZtv44yL4tRzgLQZ6k8ftvSIAlttnb8Ouaau3UzXlYuL5nhlnrffiQ10BAwCQQ4sMZqMQWHt%2BCoalKIiKL%2FM3xVspXxi2Oq8qRlUUyMdLIImZSrii4G7to141RX67z%2Fsnpr%2B%2F7aRuCHcU69qhQxwXw1zZ45mzhFfHVVtuAz1s%2FK3y%2FHtJ1LGyZ5wmsDp9%2F3TDFxqO%2BBjqkARFr6KOX6vE87Nl%2FspAZFlnBdhlCH1pT79bHAKjAWSeT8bswl6DgMRBzP2SbFuSDZeUmuAEZipxM8TngmTnRNeJilvQubs41xKRTQGy8wsaiktVcRpFESPe10WoYpNv%2B%2BVv7dQ%2FI%2FjkcU8o8rshImyUwXnMkzfX42YCei5G3lxuNdwfNwx2BwiaCKTucKl2qZb1sEihbKtEinu6a%2BsKDcEB1kQcc&X-Amz-Signature=3bb316a3084cad7e9efdde6d130de435a79267f4535c0c622392db803cfebd5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
