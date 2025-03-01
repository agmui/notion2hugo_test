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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6TXCKDX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDurpn6k3oUc7%2FsSsBnAOE5IrKpvb3zLZDEUtub1F22sAIhAO4THzPgRnPSAmVb0%2FjdOVXeAHAXz2kYqyk5gAzrmAbRKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTXJXzW4Xu7gxP0gYq3AM0xHf4lFegfXZqUeXqWPGtCoZHBOQoBsuW403Yq4uYZliEqO2v7VDg7Zy6DTqKW4wSRG%2F16QSkk7asup5MonVOLulVh75y6myc3%2BAEBE2gewYKOHI1Q70VTUC0RQlBVhKV%2FFLtpZOiAMiaTT%2Bs%2F71SHMOCB5EOIyMkTHL6eM9J6ubrgXaVtH7k818dHDGADKFUhFbUMg8feZX73V3o0qfE8jHeBq7qrJn4nSXDBZWb0XQTPdybcSp6JQlWfwg2FbUzx%2FvJ3GzQtsYGi1tMWIqqkcYIa4WexQ7PMh5PdhrhGJLcUtFr2zQdOHWDtxQcP9RYYZ%2Fs%2Bsoe1aToDsJjGJQZq67UOB5p5bF%2BNAkIhQCjgyzv87rmSV0ZHe%2Bb9wgxP5i6ZV4NMzz6XuBppIGrlmjaz4JyGT3rXoWJh2KSon75iNanP1DqtHRd%2FhdmHtewyrelJuDAJnrVVcv22uIBEc8JIxskZLkDsOVESh0OAqa3PkNVtVqfM9c43Gpp6k08mMtQgm6REjZZlR37K0cJKYGzVHM%2F%2Fad0hIWaxwoT%2BByRyOwZWTyiiA3zuvnfmgZ5loRwP6ys6piQZ9DJUeBRVim4dUlzi2W0Lve7NG3%2BaL%2FU8bPHJPYVbzfYmcRpvDC%2Fx42%2BBjqkAQKaDMZqEDQ19MpLREcz1Zfnh%2BY5JWlZuIbvjLfU8Ib3h5Dk02egiW2pdLulSMbpLvYc71y9GDeOnkyl6dzwWd5HsuGeYXv7srrGqgXeEys47b%2BKO50hNZd3bjEzdgK3JGRLcjeFV1A0P%2FU01hI6Gqo4xxlub%2FSGXl%2BM6kMhCyHnpwmGxPlAxwUOJLY3iiWhWtPrIMGo0LFRAFrGBe4ybnxcQykQ&X-Amz-Signature=b4aec7cbf19a056a3ca4be4999741dadd0ace320d5ab2e2e430333a1d5418443&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
