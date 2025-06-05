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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGOSTJV%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCDdWv6eBtRXFeonzHQeaZOe81K8f9euOfIFLmX1rrHqwIhAJECCvhQXVewpKb8VCSj2Vp4quHw9t93rLE2OkOJNv9jKv8DCDsQABoMNjM3NDIzMTgzODA1IgyH6lC8oGGJ0E%2Fsne4q3APOM2MzfKwmzTmAl8iVrvkWOguLQRTXm9hcJ%2FwUGZt7xmQyiyeCJcYAS17sbPkf8RNspQp4X92LZqcVEoXRY6ItyFcRGVWkyV0i%2BGNJWDQQafxVaq13yVIJ9IUwARlH%2B2bQkTU3nbetr0qyojrnR2ckSifx%2FQGmg6rA%2B4Tz7EmD%2BKctrO1UQLAcZv34mIMAG3t6VNiGe3malaotFhThBJm1KqyHx8CWhcz45d6FEe9TRzeFd2OqHg2Iq80mcGcDoIY4L0LH8eiP6ve2cTwRdXhN46u2ZEry4Onl%2Bp5d4LKkE%2BDU%2BxpCXMYEHF8WFlnxIagFvU%2BWe3GYemA3uYVH9oxH0j%2F2kihR%2B4MEKTh0eyok8IVzh2bbgeoHQL0WZFxJjRIN27ftDkfUVweG4kGD5xxKBbK4mGQK2wdqv4MUmliuXE4s0DOtA3iWWIoj9r8dqeeGMxMF8eLB96%2FizEsC5c8%2FnMotzvuFgYu9wSP2KONkNRXYjuCeVF1PXJRoaBzPGEMQxuJ2Fs%2BTI71U0qfVmrJ5MLRPaaDu%2FG3uICVEm5TdfjeErdi3uYCuaXzvUyENjJQrOy3KncJBCHDl2oLIpuvGUdUT9p7%2FjJfl9fkHXS555FIvV4ndRiKtnhbYpjCB6oPCBjqkAXJmXWQlx0qvRnOYlrJTyf7VrGzdrsFzGqoO9CsqQjAhhDxZxlAl%2FJpn7WrPoxMVdGg8I%2FezStjccgbLHGZMDkXfDibc6PSQVa9aYKL1nCSZXfoEI92S66imqqMk1aHHUYcH1eGnrY57XAjO2UfqeUQBm%2BW8DCg%2FoYJIvDBGZ4CeAUOkYD0KW1kBYi5RAaGBZQX0UYFloOkVVlQobD22Xol2akfX&X-Amz-Signature=6dc8ad69fec2cb34553c91850ceda0e1a79bf8014bb21ee2aeb2db9c1ecf1a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
