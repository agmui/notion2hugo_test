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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DKMPNKH%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDl0vEMnxl29KL0rRKMN92ASdX9b524e1Df42mGZQWViwIhAKE5pRDG7amVxuUUZf%2FxbNfAi8zxtheJ5JZguJehhkCPKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ1CxVUXMVeV%2BLps0q3AM15o5kxihMzrC6j76PJdMviYIq5RNbfXaRJ7Tph%2Bvl44FiNMmrKlttKL4j2yVE%2BN4KIICcO7Qh0XZOZS1czy7cZ2l%2BCV0Joh79htE6xMHrE%2FWkEmbbqru0intfCvUAJsAQNp%2FINycUTb0Hm8XkmYz0myG9eV3loAap96mJrH%2Btl9K516n3t41ELSkUCwd2rYupne5dMtkpTW63sBXH06iZao9ODwN9PTlTUqGzKPjQiRMxpILezOvgFGM0nH74u7d8W0YxaE056Mv52%2FC59iyw10HKtKNu38Gra2KcetzXyXCJLNsrb%2BGKAptCILweJ2c0Hj%2B%2BrfO9ndxiOYYb8KZ8jJRanwHowMhpFb9YNszo3I0qzIsIOVHD0YueP%2FAFZR5qR%2F%2FYiaf%2FtbBIQGxvocOnFzlPepRP6xpkZIzkX3qr1lJ6Ptu%2Bhe36bxlGH%2FB%2FRVWTTkFs2j5MnsIHsS2%2BVo1UsOW46Ra5ksEiibr5WchrCGeimQaWIQrcEma8ewsvzQqO0N4hZqYCMWRDpDFqBN8kU%2FdKS%2BONYwdP3vq8qakdOPqpaRBtWmK7CNi3VvreOlYZbae17ChelXsGhmEU6AbZIt%2FBSm8HCHD3ocC9tD6sCyU4b8DqgInilIIvrTCUqtC9BjqkAW1D1pY5gLXQSwaxFuWM5ovHDPnYGxHfSIWaG64avgNAZ9V5Io1dNcaxC%2BIm%2FPFGWHrGtbUpsmjjZv0mDfG8gP4QZcW5iuYyMGnpHIywS3Qf5uyHLBmv9Y4dZkjeaXx%2BNrjIQVP1i0NGovsnCl4X0wnmjxHiYDA0lwB4CXSGWNP%2BkiAMZ7GQQU9x9w40%2B3NaHD95a2T7k%2FE5o0a8KoH%2FXx2PClsF&X-Amz-Signature=898a6afea29d434721ce757a9f5a7ff6792344a42da2fd3b2c0cc940bd3709fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
