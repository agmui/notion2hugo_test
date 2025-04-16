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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJJ4JOQY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQrI%2FL9Y7kU3RaTU%2BR9QGvfni8iMX9DxPM8gb8j3sbJAIhAJvJ66GeBgeC%2FANKzy09k1qAPPSa5uPEhrjPVUo3n85QKv8DCEkQABoMNjM3NDIzMTgzODA1IgzadMQhCXkiz4dkhDEq3AOVO7OeUADIuqhLTArdc8jZL%2F2a6u6KOKEhVdMEzOupC03PkRg0q5Bh1KZ682HslsMiaGjHa%2FpHTea3CXVzvF2smM1LZptM7AHJWi2fu5ZDbFB0i%2FyvE4zmnwzdxMVhmsv56O4K5YFB5XPA%2F9Fm6i1EGJAPxvG7cHfZJIOY4Y%2BDj8EwfzQj%2BX5Mu9fBhQE%2BsGHVYKJBfAfM8fvypQOvmEiJBR9%2BWTH8VNDW25RZoq72%2BWaNV5QqtJVcjAulgFklP4EB9mhFedjENzxofH%2Bb0fzbFIJ%2B2akhN6Br8D9R9%2FSGZf%2FhaGtdaMi3YJjmVC2enEMS8jSxnPSpnLlW%2FHq1ODE4LHYt618sJZvfwDchIAGqvqpvCUSoF5pNSsnXdazRZD%2FNvY6kBvdljktip2hUz51L4ezfNrow4LqKjGP6nfQcUhpar29PSSaUIReg36WND1lJUmQPdgw8q%2FpwZddNBYzFTDD5y3LRh%2Fjk5t0ZK60Z4tfjxKAdshvaQwFJ%2FeTZ2oo5xkLYekBqEl0oCUvzW1exTCZ0CaoF8PsMCrJJcGtavtRYXhK8kXBRlhnRnri7SOcx1khowyRodgiKH%2B8nZXqHNfXaeJ%2Bd4BdooNH4gm3Xx4gSNIDqowg1XEPgjDD%2Bqv%2B%2FBjqkAdwQrEe8Ajl7MolTrDLfTTbV4IIG9XcH8DE6VSsq16Fwx41Hz7autvUlJ9dhSBZlfEt9HlDvxzeOzwaerdYQP9ZByp8e1%2Bmj%2Fu2rqXpu4t4MvvOazyQpQo4L4D4DFwkzq6dSmZ9BMeACtGxPw13%2FrLO5WelFPPJ%2F2H%2B8qTFlWm4keWzrrukO9mLePYebYiyNbjpfyBOQ06K1dVyxDKeYXLn%2FMVhI&X-Amz-Signature=e6af4e8c8b2405758c88403611f0d7e82b99dc3ac7d2b4b0d72799cea2f19f5f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
