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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PDKYYH2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWavC79o7QSfrKKWKZGbtPSVrUzpTefOFcn92f6kg%2FPAiB9z9wwTF3LhLBN3dehV9zywiUppIpi2dRClVBYG1q9FCqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoijatV3gvLZsdifgKtwDSRW2MyNcghy4d9uf51XV26rqh23RXdffPff3o%2FuTWobMg53xsWRnoZN0vLZEANrweAOj5gQkggSN0UWrEZPtGkECz7sA0N2cqixjKIlkCeuI4sa0ccsuHhGF%2B1yrClSObupAxk2OJH%2FQ1xFBTmivHpMTvO0FNor8DyIb%2F2HJlY8XdOq0ngViQWnvG3Jt3273%2B%2FZXcNU36WTdcLm65urXZDVWfLchTnK4Ara%2BMSCmo8IhmyK0u152MljeAE9Essj7RK4RygfKjG1H%2F8rPCMWbm1kUFI42IUvqkYfkI4Q7ShtxM1%2F5JgLsOV1w%2FU9aTkAGTvC%2F2wkiQ6zJ8pJNLY0iMNPrp%2BdcMEqfVI%2Bxi2Q9aCLQWwJMsb3KwC4HiBRzDdja91k6DoBHwdTlFMrVG12k%2FFBzP2fcwybqvGOPy9NK4k3c9eeKFAQljoEPXb1h%2FSvfWHAUis7MpErARar3pRFOcfx%2F6dry6KL20wWgU9FXlbktteqsGXZLbb6NqgC2z3XDq5eB4JY9bjfVyKosKM7XTI2LxLNmFatMog8lw3mWRLtjYwKz1pDowmoqoN82oMxBn6JE5JWeUnAJHn%2B%2FrOdIJzeefiwuZZ2U%2Fn2wfFRwOXNC7g11CSxktg2YRW4w2IGvxAY6pgHyyEa8enuArPxN2GU9Swf9rzuUlLuyWtChg%2FuB2o3Uq0%2BEjkZvRieYYm9bdV5p3rXZucDnuGftpoFiBeMJA5zZLOu8tIoSrj%2FkGrD8JOTkAvq8gKHxlH3rXZ498lgGuf606S3HStGqxbwtgHfH9a1Bbm%2FAZNmIuI3mPkSjXjyxCln4IKc%2Bdo8V843f4ECqU7r%2FFaIpRSHQm0Ke5Ypksb7W4gLwe6CD&X-Amz-Signature=07e5b4ffff9deda9960ee10acd3407074fd2346e5253075c6cde488196b2107c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
