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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGHWBJ3R%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcpAVdNH0TAwzkpBxBqqWCQsxN5CXYUsEK3wq%2B2PJxuAiAKAg58X%2BjJN1YlREiDgs1Bmg2PsKiVGIZYMtPslVtu4yqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhcUoBHTAeY7bPtAyKtwD6wzX0HSD9l2%2BrCBHjNI1gAnq8tsO2nF9HjNWUx4KjSruK4kR0EUdSkHXQBQBVX9vRN2mieQVIt1n1YL%2Fwo07RsH8mmHKpFsgd3EqUKj2OgrivMMcJWUCHNJaPkDSusf%2BAjwixG3Tj68bsV3coVK4I8NAzAyJHoaznHK4MVsCYGHjCElbfrIZiaZTLQ46wRvNnt30HOJbBtipUNLyAXUcxg1D%2FkJSzYRfUGxLD2IxrVPk0giZgSsi13iAXEiXqw%2BmSDsl3CxEFMjBGPZSelEWls56dnwzbAN1320sTwIbwAeQr%2BcOj%2FDEGcu1bRTsOVylTP4rViS2tNNVqpSu9jWeC4iGi%2BmGy63c7622Ikg0O8ih4SwycQ8TVKzoR%2BpkDh01hi6DbW7Hn4rQVZHCloSGMuQw5yG4t13VRYJZO%2FnRLUsvpWnXgZ7DnOPGi3V5TFoJfX31N3jr6YxrtPHXCL7gTXcmHyzAbht%2Fd3zdzCZrdP1cFSqbu7jwND0N9RSA6JSQo6YpJ72C9WQ%2FPYhJ0SU9yMiXr7rp4QptTSB5QY2U1PbktduJYmUJ8sGgekYmxwtjMeojZ6LdGM3jlDcgKHYdm9cUcw%2Bts%2BmaUVEVi3xaD1hjK5xbAEgvtajIlKYwzbisvQY6pgF4ZlG8BnmZM%2FQNrCxdp83Ir1VhWIPjS3yQ9E4DXn8A54KD40qkRkuvcJ6h2N2t52EgQODVPu0DTF2JxD7Y4P9lb%2B0Kvvrj9XMtVx5uPThbUgBSBkP6QWYD%2BtUCXkGbxLjiPKTAzGjlW8biKaWPbilxznOlg6%2Bivau8bPS338prXgqvoDY6IEnzFGY9euNB2kJPDze26axe9U%2FPAFaiDaqhYlIHlAQe&X-Amz-Signature=f565ce6aea853068bab43dcc9285a41f1fa0212b204b25c2a5d4ed450def5ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
