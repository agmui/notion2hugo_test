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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS2CYOLS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwU4FtICUCPwwMkR2QkCLnkqVxCdHjgZlSVctz6C12xAiA6b%2BBRh7YW6BxstVxn0Lu8dXgYbSr8SwORDzlaskkGICqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIejsm4QNIEZbqiArKtwDpQLFDINUbx%2BDAPrZMSrazOFlDViPEnXmVMscnUYil5pAfSmNGatvQCnOSR1xu0ozN%2BHsTzR4Km6a%2F9ZOEeUju35bdYLgv0NNg63jf5T4rSjbOjULb%2BYApv2D1JE%2Ba0Bs3sPMeoM753PrTgd5CZS62xEQIOqq4xIQLcnPGV87fz%2F1EdPUG51iS3GQQYCTwbD4L4vE0V%2FQo1i7%2B3zKFHy8%2F5KMK2YldA%2B2xQ5CRIQU1V%2Bfg1NwiZSXCbp84zOQBz0eTnAFxSguA1k2Nfy2D24DPC%2BzMAbjHMuv41nmTyvsalkErQIbptcuSbzlfeHEu6t3L98201l4%2Ft9pmkgw5SCxF%2FVIg02Q7U6zKQgozIuRobcSDLheBtAeQRO5rhlQNURMrtFaeYWYpbPP8euiqfVuh%2FMHByANtalWlhIomEE%2BmhsTkiEpSCpeRe%2FVMgiPZMyA6mC2PAArF%2Fwmgq1c8FrMfNEHv6oT3xtb7DCxPs82nCxEf0F8vQncGuHqI0o0Ro6fOY%2FbzsltiNgWUjNGW6OLZ4rxGbGAuvSzIzlfx0egcILv7624Yv9L948UlKv9qwLVVlguHqThB6oybRVPqePUBOzr89J%2BjlF6a%2F2SigQPQurwb4In%2FDN58r4PSMMwsMflvQY6pgEV6VoqAR3EfqD5kwnujeZqYfy2lJtZulQ37pxvGWKxbIiTJLv7ZxGaQYR%2B2KGQeIHqPKAlbNru1XvjE%2FGZvN3AKNDEWAjhMCtes9jnmAK0LBF4fck5%2BYfhDUEDFE3VbSwTxKI0WLauNKz2%2F8oeXoU33lRoD8iZ%2FlLNz20CyqlATvBPNR7VkILpbYcrIopQAkaOVfy1UWbH%2Bu0n%2F2m6i3EKX66eR5lZ&X-Amz-Signature=217b4a1617a48560b27bcd35d9fddaa6df2f6ea52ba76041cb4af0d5013ef158&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
