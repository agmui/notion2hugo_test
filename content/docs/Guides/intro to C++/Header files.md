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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTGZ7ZPZ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBBpV%2FTJY7AZEJX4JnGVBmiTxhvU0TTFPgpI0K0N0EqAiBF86s9g3DQ%2B7%2BjAhdHPdHZu0ef7kNFiZpbZ0BeHYv1IyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTOnIBMR0m%2F4su7G9KtwDjJRQKTlC7LkMMgGBvWA4cPm1QS1JHxDTmkgnmmsI4nYlMtjLxhnrDcGZya6y1GBb1E2TTCIbXP0r5L5DNKyYMI6ShmOxdcWcn8sPt8zGCg5TvLFLL9IudcWrlCUi3i%2FnKXPm3YbfhCxqLtBy7HXweZ9UYmbLZYaf2ygYVSgh%2FRjNhbOL8Ks8vRBxJR3SVTPrgWgN%2FnR0bw2cSyjzkZuf7dY4Sd7qZN%2B1tYcQeyE%2FSl3PIkn%2FCVkrulXKDZsOKYjJ1kJ%2FJANI0pEwxsGojgjYbASmjJKf3LtISKYXXseCxziLNl87%2BvLaQMQcpMGEitcu8CSIJXBG5%2BuOuM%2BiM%2FsweyR%2FrUwnBoHWXzGNmIwPygw%2FLSkox5nzhwogE%2F1Hann8tYY5vaApRpSRwo0ILY%2Boz3aCpgox6TXmvO6JH%2BpqCSydKTgJ6uPMK5XubhADWlYUKsxeZz2GQjwVTxVjadXZEkrlXQ2fhLcxSWs9INhTJY0fqBU5SceBVDFy7QD%2FSxUcYoPqSLZ%2F404OakDbk3r5ONdSjxWHEJynP2YwktKV0KFmB3CSci%2BR5R4TlokNWXhdGhCV0zpoBrSequL28KYXGdSK3hHQcjisagyrv3pN7qwpQG%2B%2B1slbu%2BU30McwvpylvQY6pgGHD2u1MkLCuwpuokIQ2eZGqfnqHD0V9KiSa7DEkZknT%2Bp5Xue50jtbYBkTFMWhcocO%2FTckqOK6QYd6ea0e98LdCWID%2FwU0fu5lz9q8YFKB3Zy%2BLXWDC8eJ7sVo%2F1wruAIJyEjft0avuu9U%2FmuExd7%2BGXDOJCWkJp6V8heob9VYRftKvXA9jpUSRbGj7H%2BLn%2Bd1y4bOhl%2F1VM%2BBYxCMj1k22qsln7YQ&X-Amz-Signature=7382d7e2bab1658164bbbf843b3c539b678f9b2bac877ed2412b404c67beddd4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
