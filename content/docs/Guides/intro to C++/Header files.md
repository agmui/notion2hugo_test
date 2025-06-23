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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3QDP2K%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIGnRGXXQMT6dXFKIWkpqPJ7N0ILv%2F5Pr%2Fv%2Bb8HUuB3sjAiEAj7yNlVG5KuYj2YlHvEiMZTMvhsT2ocEIBzwr8YRHjcUq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDADgvDRZhuacaq6aVircA6KFdgpBoSOnnvH35ozC%2Bn7cm5WjaEtqPfSNusY6rajKQAXefbYOa6ZAcy1jgL8iA47cwwwipjXfZWCPgfZlrGZI%2BivxTzbulVm1taJKPEjNz6IFW5DAjoqT0gVAU0FdLvL38sjo8vPBrdu0%2F2vTL%2FrA1KUIV0VCA9zxnswJUFdtmHLy4z8Y4jvXhpKbCzfqVKyElOkNhalWN5lFbzip2zWzQmbsDA9EgRou2r7kNYQ8Bt%2Bpi8FLTKS12es06yd1sbKHpXYLwAzG3t%2Fv2WjAxrKg6GISBr3Ub9JWW7cgOBt2v7qh3VNCw%2BeFOKsyBXM6GeKLFf6CINBhWPFNLkkrX0A%2BEqM2DncnX6LoNKTtM5Ge5SJ0XNYuhEnqO69ZtOpOVq5x3ygbkk3eh6UZM2UqgWew73AKpxvv4GtrSEJIoR044BCaHkhVuGFuqRaGoeNFHAPc42Ob9UuPSOUeg0Th7MfxVZPxHpa2NJpDlQCOA39nzgVOK4TDtPJEgeVXA9LKA6O6Q1jTgCwRQHgec%2FqrNTsyPd81UJLJK%2FBJdknSJvkLBGX46R3k%2Bs%2Fv%2BkjNt8ZY0aBxr%2BFRQSWIKVQzV9TPWV%2FnhT2Sml8HaMWz6YtC9oC08QtSOfBINPOhsPPhMOuI5MIGOqUBPtyabqR6En7tcSLAURmhnuX%2BHL%2FIc9mBaotf8afiRvcd78JTnQKnoF0UFz3OOJOmn52Rj3LC%2F10fqVNX5T1nli1B3djAW9XbifInkIzT2W4kc%2FE1uctXCGaXn%2Bsb9B1XXWtEEDLmjGJfU3m5mFAmdPMnXpH%2BYzdt8wdT%2FDklEsf2MiXHJLcBIKm7UdL3Vt3k6RissOxNp%2BKvZLLnAPLldq1tYJmX&X-Amz-Signature=43be8fdf5bcc9f86bb86d2573bd00f02878bb03f6a7706bf245cab489bdeb67a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
