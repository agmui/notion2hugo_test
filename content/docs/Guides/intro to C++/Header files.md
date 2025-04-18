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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSQE4R5Y%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDxA6a8tRuIvFP08GlkmAJOsiMiMv9%2FCPkr9uDizQUneAiEA9OYa7rDckJWbLXJoXYQPR8XaEGBrR0GnjLNltwhIhloqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxrKg0lgt5wvGtk4SrcA%2FQ7FHE52%2FCBFy7kqQHwHDS7xKkLfs%2FDeDoLlMb7Oc72yb5I33Cqjsgm4ftTPyVYle%2Fj17RB98qqE9MTJfn2w7Qj9Y%2Fxpg%2BB1E1nuDeIPxkmz%2BjKKdMSPgKYV5Uu5CXQr1vsbC%2BRdDLmYqZ9y7%2Ft8JomKYoDoYVpfjpBIDmTp4vGRZZk%2Fqd%2F482ymnHm9LVUcZmILWZuDZ0E0Hmzww2n0Lg%2Ble3EEP9D8Irgeaak90Ic7AvariTHa%2BngTGoiUEXKughOe3cY2oROf1PmMHVg7ol5sonqTU%2BISMmehCAi1UrrBG9cBPhqhHrSWUT5HXv8auQSPJuYY6Mqeydr7RiaQb0elSWWS3T2%2B1PnK%2FMCq6UteZuwELyLdiRNBloUGsfjzJBXFzdpharGRObQ8Fs%2BHwlHg6Awi19RVAsWLhuloP6oyBzWxYfhK4tdVneSBfoZIwP4%2Bvm6XAo2rZz0gslUGC0oBK1KRQcEvcLQ60cMovo13jEkFPIem6QsPDtH8z%2BpyT2sx4dNj0xh2tBpVHb2SotGNlHDKRp0Odf8OXsJcGA0%2BeGuOV4gBFjN%2BWb2dcvKnuX3BfTx8jTtMJrXJ4c3hOjuuJIIAtOGgW4khxC2QA6BqpZYgpMpTKQPFHzOMMGgj8AGOqUBFaOk7wP4rsK3hSJvB1ENRn61HljkcvsvqWXVcoCmS4aoO5yXybgsaKhA8sXNaj2Fk%2BSnHTDf9HNlSYJd9hflv4epAlEHdtLHQ%2Fn3VtjBPP4OF9DPFjGHUbM9uFHRrIDvsPHXrRKeBkhZmKnsipX1O65zLoVj5x14Hmy9%2BITMLRKFzSNEmgtKCRVyjq9YPQS%2FwCuK7jFKUpPLwbeiGobi37ZyX3vS&X-Amz-Signature=367e5b9b59ea1fe1d6d29a85f51231065f9e121d9d4a54fc0c0e88cb104807e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
