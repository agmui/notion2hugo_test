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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIWB6GWM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGep2RAPQUS9YmqRAwPGWnZkT7SC055bwJ8vsdgk8w3fAiEAtWNPHa5Kmrv7Sb7ojhokFzVdAGud0L%2FtO%2BWPZqv9L5Eq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLI3wJi5n%2Fzto5%2BuRyrcA%2FdX%2BXQFl8AttPRoui9TotCKAkYco2CDJwRGpalQCYXCcRYqqlv%2B07DZBgx9o3OjyoRJ0MwMSNp97NLzSPNVD%2Ff2JnABD90GyBwBnkGCvXJ9Sm4bZhr8pQgfCPM6w0otrKQQDIquvbirod6OpCF3ih4qTfMmkljZZGYDng1KBb5UInHJjq444I4eSIAP13eYPHLfWAnM6SkHCZWNJte7bGYnlsr%2Fiubxnqdp3XOtzHFd4hTUdvSTCelNG%2BC5BY%2F3B5kvU8Ug2Asw6YiDsZk5QZhIVXaYVLL%2FGHQPK%2FMTB4vTA5q%2BqL1mPz1uBDH5QWe8%2BnM%2Bb6Y2uQNtpqm5Wfndg%2FKbEaUacZNGF089GIzLRHP7sctw%2B%2FWEQxHuItWSCi2zE%2F358QwCBhetpjStSc3PsluyIZCm%2BNsP1imEyNFpvChHdbM0VnLGpn8bIYgNe7DqcbzVhCsY6j77jeBi%2B29%2FQOkHCyeWy3tvaPoBuVtYMXsZ%2BF7CQG9BVFKuBb2XZD1QTUvv2TPhJZeij2gjHDQMWgHRINE424Dt1QJkxpGSf720x6SAzziRvfr7HYPOmpO9jFpZlx1Y7mThM0uGJphYzylWKrUSiLOVj9njZpviKzGmu1hgSxEN5Pa0WMQ3MMK0kb8GOqUBpE0%2BgMKFRFCTsxVnXuV3MQQmeKlsl%2Foc76EdDlZm8S1OHurSzZdC0mxhQknaSdkWxM4grb9Cy7zelrjtnrWsGvFPChBaTlO4tL7vK6qH3KT0Vh4Gm7Uhu9v7pFy00BL5IAlIQpFw8C2S8UlCwGTMC%2FtsdAz3AmGi9Gbxr%2BbVNUDCzLXSfnJdlyj6BMypf8JguBS5HendJ2CoCEGbe5NlO5%2F0MudU&X-Amz-Signature=060ef4c2d6ef71c996c5a4b99338539b0ac1958ad57e4255afdf753843d2de59&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
