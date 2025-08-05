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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3MKUM6X%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCEiTDDe4B9ZTvO5z9vNgoQtpHT3WKV6QD1G9kbxgROpwIhALcNd%2ByGwMgj7%2BLxcWNOIuJ1bj9iS6%2BuYalcwrh%2FeczuKv8DCF4QABoMNjM3NDIzMTgzODA1Igwo%2FK6%2Bru7J90sM2Ncq3AP6tLTVAoSUmVNz%2FfVKXW0Ac6kyPr7liShE2Ot2X33b%2Fth3escH%2BsYYMqThPZlRdyKFa1Ieo8ZIwQckfHTBIsVQ10rsazNnWmyiFmL9CzZDoV9U8nUqLqpeQDYD5Ymu1XIn1c%2FPsPNA0kthch2Yu%2FGTKsYCm6cUCKwlTZsb5y4co%2FXL7UN%2BjUh%2FWpx7orTCjF%2Fey1bgi8UjqtmOg8JnkOp1X741XAcq6sCyDC4KvcXer21q0sXeimPWn%2B2k3KWJvB0kol%2B2eoacArhM5gvPKoj74MOl5DgrA%2FYH8U5fO2ZxwnlFaajo4lLivOnYelPpDx2M02J2jjNQzXsLJnSpAL%2F5lf813zPnvWZeL%2BCo2ZqXcYjd%2Bga6vcSEtMhwAnN9601w3FYmU1oc96DIbqDuAH6sMeqbhQVGZpkAGW9EHOnFuZm8TDSJUFScqDysFA6%2FaMSXwiN8YYiCptSbRNoznSRQ%2BICsGzzcXAyJ56nNDkgmapRtYKYvJW%2F29tbOJDstP6sRy7eRfFbH1Iij%2FzvRCgPagblLXMrIb0jbJydv8UVjqo0n%2F%2FoUo0YtZ8WVMUN2ME%2BMOwEAvxyZuPbBHGAKW2nW2NrHJHtuPxIqbTvMi%2FEpFzyLgkR1aTpsKczqYjCZhMjEBjqkAb6fwwN3Xl8N1WM%2BpCVW1I6TZJHFZdUHJayGFJxZ06DK3ecphrUsGnzkk%2FW0Zx6HNq3IppEy7M8xjhBE1dXphmJKX1hy88fb9Y6B%2F2KwsTZ3nPWvqvRmvk7eguvruSHLIbT%2FqC2DLZkySHpW%2FU6qD5mtY8mq7od5sQGB9RjGCJ4%2BnQUf7DG9T5mI2A9f5afLYUWMaco1zWK62Kl20SJUy2DZVXID&X-Amz-Signature=60ad0d46f7e759c16fa9c02848e0115b4d327e91fdbc282597c3a89414a5db44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
