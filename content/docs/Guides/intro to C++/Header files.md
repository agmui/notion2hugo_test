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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMYR3KC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Wwrn4e%2FMpOQsUWufyGt7gsb4aR1R0FLnnHHIsQz2jwIgYv9EKL0%2FgLgIk4KT8Go%2F8Y%2FUpxJQImsOLA46CGKlCH8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwVNol9tl5RmSMeIyrcA6ndjzQ0vwirpHy%2FbnTIQTZKCkPJwDwYpNQbuCe8JeY0PvWc5V9dogmuXmmx0uBi2DzyN0MdgcdKiRzCPuzaIq4qE6iIAdNZN6htqh4KQZnQiyiUc1bATdc1G8gdk5O%2FHmm%2B%2B1%2BDD76LQQF%2FBmI0XKTAY3UrUiplE%2BfrZGGfUSERVcCry%2FtRLddPVEz6KdBbBmcDNcpUODslVhe16ZeaNyWlrXwmbOYZC4I%2Ft3hy1hXh4wQwgf%2BvJT0KkkzQ2AYkzJ1tuI2tbwzDfP46oifnnKYcPd4Lqpcsy5o%2BVxRs4ItYAx2hRNbv286laeLwUaSFAf9PWsn7OnQ%2Fu2NO0%2BhYWiA8oYU6S0OJJqjpfa1kvZk16apKQVb9%2F01USV8MGHGvsBiW1qCkGstNDBkqsqEX4SThcETqZ1M7TRPuqpikOyqpGMBaTpqn6X2TN2kmrJZxtFmFB71otlcpH2sqrm5rkxB40Xm%2FuWDVHGP%2BuZffUrsGP555B1TboGnkVs8qvizZr%2FSyhaSe89CflHvkY%2BzpTUBYo%2FEZi5AaFTOPuaKQNW9UqQxgFU6IoBW2NzormqLUTSS8COUsKtlPsr%2Fce82SO23uevRUz%2Ba8U%2BITQeRdKmFuX1QtcV82d55s9RSWMLfs5r0GOqUB2CpykdDB9hSKFgMCx88%2Bmb6PHtiDpGe%2B%2BIjFHGok03sAWUVBPm37tYfAs6GvtTomaZXd8wCr%2BuShLk51poXVROHdegf%2FyWaOPMyXX2eSqUMYJsoX3Z82VbN2TcTPRU7uDA3CVJVpQmcO47ITiuOjRFeERbN1wqlzn1b9D%2FdkMjlFXBa6huLNaOZOWHhczlhqz0FdrztM7HDCak9lUtUKf3zf5b9w&X-Amz-Signature=65fe2f00fffa09da870099363f5a821ce8a8a975dd4d8634baea3977abbe4084&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
