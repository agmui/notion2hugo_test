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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSOMZMGV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExHww9gJtMN7olwvvCNWRdLYpDF0bbiFHOZtQuMXKtcAiB%2FJr2lX020vpT9IYFPgVOOXxT4eRGOq6U9QdMLDc%2FrKyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuGzKDPWZ3bEKMJFpKtwDuDIE7TEqRVnGGAeaMiKVjX7jiBJDY7AX0lXB2KJCSFQjzJARiO1N3cGy5J%2FWHTQNoOmj5c3kEZorYkQ2wzCkEvJAdcQpsw8M2%2BW0N%2FktL1D%2Bz0MMrelU3AyRqA0eRkbthtBb%2B7X9OhtT0nj%2Bl1l%2F%2BvLNpAmcm%2B00cESnVXzo0WzvAFPzSxXPFV8P%2F1CNQfM%2BtFpj9LMefAatW8v48knTaTg5X9VRjf06L0r2TtlnJ6Nwsmi0KYxdIS9UgP3PgYCghJ9CvlDZGt%2FK7RxT0xDEKF%2FsU6OhMoQdDITAMY%2FN45fJdIyNIb2hE4hPgLyjxzSaq4nQSVQxfqxSrRXcZKejfl%2FNV0ws8B5IqJ%2BoBRQejfn3CusrgyQ6ZACKxP8yx1UMdrZayQsa%2BoZVNvKzL01QYlfl7qSA9Yrw8CdLorM7lMM%2FJ9UqTJoxCVsbfSxwtHRx6a5qA3RnMDlI9u3jtklttyhw6mxTB0%2F0PMeMcOzxr8UzQ5IWc8S3u5Z5IYyTThSZFA3jIaqGRkBTDboP9hqFXDTgbwc1%2BWQYRKb00hM2hXiV%2BRN062868S8HsDJF6EJyjJPAC%2Fl7Dw5DEhIZBoeLKhL8WKB64JyXs2zeCBquFudSJhgMT0FLVW%2F%2BmOMw76LAwwY6pgFgxlYrE0vjqhfFMJVsOz5%2FrnoddBbIYu%2BGvjPmA9jBJUGi4yX97JE1FnwMzowDmp6ruJxx8nP4mIa6d9VFaHzrJRE1%2FmzXfZ0%2Bkjl25dacQkgGQtgikOKNBXQMIBYQfO8vwKB%2F%2BeYPi4Zgnc7dQ7gpCOCApuCogH6MqiDHvluYBz%2FTywE9AxRT5raLqAlG4FIt9roCYDFnRCvXuAp8QfxJTOlpIpRm&X-Amz-Signature=a88648d929c0ef3d11717c3b00e4cb100e2d62c2cdbbfb548c4ea3561962b020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
