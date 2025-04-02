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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G6SLFN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAt9mTWH0tfrOp75JHRaQqC9lgZBTMKvq5AO5n%2B3y6d%2BAiEAjv0OLLlDbpmhfo3cZJKyXsUFXeqJkLVf45AERMzOk8QqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKm7GePmTVmJVBjbGCrcA%2FslgF3EGt553saKXqcj5mVE01pmGhFfQd4DXbDKm83D2Jwrg60iVTd8YuDCCUjfRgc8iEEprztdxS4LJ3o12dblsB1UWItB7j6fo7F75YTmPD%2Fh9024qBz%2BiggEiYz1%2F%2BF81nPVaUhoLZy%2FQDWFQLTx6R3Aqm%2F5LMjbgWRVlUjniGEPHSHrvAR3yOLZohvvHtoCfnt0xNZDzWsClIPh%2B3SeVzGQKVj%2FgAGOiOIRHwwtiSzdNFWvv7JfH15fENE7mkbLgt22Ty%2BX3ctSKxfOvgAZSiT6TLCVLLSosZd0YZ8RCRR%2BIz6eJLdq%2BcySpeAldbXhTHy4upIRr0ImD3WKYqIeqaIhRNJkgXtcgurxvOPXhmjTEibKX0OD5m%2FdifdmjM9YJUC5C03PNNpAqVbIgkDZE9Ja4dbmpomBMP1uRjh%2BNTc0NA%2BqqVoahot4Kc4QvVHnJv%2FUnE5v7K4ttmQGRnXKLFUUK1gDPJE%2BdRMfMuXymxwKz5ZwLay6%2BfP9r9EK41S%2Fil%2Fj7pYUeE4QKnZ28I4yX2Dh2qSF%2BzBrFz%2FyyML3vA%2F5%2BJJ84a1gRKQvIKo3nGZ%2FBFu3ys2SjZvRRiH4U6pXyLf8EfUkgmk%2FuRBmQp2ukpRoI9Aczvu7Qf2uMNyltr8GOqUBZQkv5H16Ts0Pdfpvm0B%2FnIX4hppXDsx4W1MfvpQc4sgLeVo1zSxZxUlg%2FAl7QR21PG7VL6Kk3banw912fC%2Bxq0Cog8%2FpClvdotw0yLH5rH5CK%2BVaA8OavBdfEiJp0ubSLgHj%2BGQHS5cnBgewghnQdk%2FFWYESqBhGTtIXwgcapuRDYonKl4W6YcssZkSLiZEIjVtUv%2BfaxMxEsQbjD94Fg8gGGEXc&X-Amz-Signature=489bcc5bdf451bf647846b82b0885fab6f0c2a15d01fe8ba2c47a85c2177a276&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
