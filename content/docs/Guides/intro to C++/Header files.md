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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLGNCP2L%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFGF0P3tn%2Bgv29BKr7SaOjouA99CQiCDBLFkcoN2LnbAiBNhdPEGtUAxbBkIK8U0quXo3pgrfCNzCQuSnrcjXo5Fir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM0EaH4kT7CuheUfg7KtwDS6fcRy22NQnUgropWEO%2BVLKohdzN5k9xeCqH2j%2BIi1fJtYYoksD6HIQiRRHQEBv0uyFzkjv2KMbLek9Rdwkkma3NrguisAxCAXmmxhJ0ugL8zpnq%2BEjDE3wJQQYUsQK3imN2ckFuSpeqseGBZrCzWuLnoZA3mKHKZhd%2BsgiA4KGTKZl6wqh62OMUTJzebfmBQgssaFJ6sImsjm4NiRfMSzfVRpKsiQ9RT3wu95%2F5my5Gr4k1pNoWvgesDidXafT4tcFDTBRF0vIg4aH30gUpKP5YCpAolzn8xsBpQd9Zd3NPBG5Ecn7BvXTk1%2F6mB23GsRNxTE0z6d2GreERTwkH5Wx8yIP%2F3xSAoU11dj84YawLq33STCgqrfUO%2BUlDJNLy24ItoG86uzQXsvFr7%2BfoZoe2CkKblHoIBGZmFQGS4IePY4ec%2BzQ9u8CoVgY3bUijxv%2F3iHeFkS3j4LEjdXX%2F%2BNYMZoJkYBXyh9XyQ557%2BY7taeUfWy0DdycY8gnD7w%2BKEJ5olQ2JfcEsaoT198IY6%2Ff2igNin0vQnTeI82qrmzDCQIDchbfxY%2BYIu8fBNhrsRr4133r9yOj%2Fnd3YiDIjndZZqmkRY3SOiOj9tc9ioXwvQiDPYEr34OyI%2BqUwvqO7xAY6pgH3ZaBi6l%2FTPfUFA76t56YZfwuyaxB4YCn1i5HGKVkt5XnEu%2BcxOnJXzqvOqPpfZ%2BKtBrMo6DPTq%2BgW0W1U3CH5jPuxUIl%2BIub0mZ%2BGXKqL2gC72LS%2FydnYS1%2F6k6gIruMkw7fsgzlAV%2BkABXW0sUXI1iL4G8WjtWcaYauhSzNWe2FucyMSW8PnYGKJjgOYotYKa3aHl7EFP8W3Ap1DCYoHzwdk96sP&X-Amz-Signature=6355b201a26cb25e05a7048bcc2252db389734350f2bf16cea2238035f0a363f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
