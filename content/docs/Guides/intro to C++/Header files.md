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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUWEBLGH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClMLpxvLVvWleaAsXxa6reCfFnpqoE%2FGQr1NeIoia8sAiAWpju0%2BLsTuA11H0DvmRyBlBKYLzmpAtO1dUeslCh%2FqSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWULqpe%2FZQHhWPb8DKtwDFc2vSm1XFAViWqa0y2bztso6OdD7RRVVO4YeHHQCSX%2F26UhSAPZAs3ns%2BQrEJOOpdlDhyBQonsnjor4tIco%2FUoueTS9WcDNtVhYbyAVsrkRa7Bno6s16S%2FP8GeEykawRcafdlzqktVCCa6oap4HSJyAfMEjimuoaZfnDY8EmXlaa8HM5fA0jLVWCP0Jk%2F1B3FdUHaxEpPael%2ByQ98Rqno%2FrU%2FP6dwXpAlqVt%2BVjTh9lR3iH3lE6wmSQr6fAy3sQL%2BWt95QBrLkvIhpbjHTyKT%2FNw%2B2Q598qVruaabWljef0rsRK2foVHqqdoShpP0Z4pP4Ptz7I7eCgNFm4uWyRhYPJYx23by%2Bx0jATxtaKKQGsssm9h5iQpW074LazcsIv0YLJaHNFwV%2FI4sY8w5P5tWG%2B0EE0%2FsHK6Q55fTIwWllTfs0m4vylNxb4JGNFs4%2F4y9RWAFdQNC9WS3XQwZkzTLPA857Omx%2Blxvnb4PsLYQt4R3PUixq5Ey9evy1HG7qJ2doFlYuI7x7F7RS%2FkaKFh116%2FtGrn6V0XbU3p%2BOFkGl09yk30LW6N63SDdx5gcSuwmqgS2D9U4OSyPBOWIqvv7BO8309hHQUL6wALhnswMm87XNe%2FadjK2GThANAwrOXnvAY6pgHr486L4qx5CDNagiWarOjBLMFr7Xkkr88jE3AUIkPZJXPad%2FD7ae6NWUhqdKteIHzKpSHDLrM9nSAfWdRP5OLkeIGjHRwTHyBljdomsgrkcZKNk4TNq7JIuIMtX%2Bvyb3FiSm12I4G7g%2FAe2%2B253gQkwbEoHlr1OLxAz%2FRZ9tCLkUJJW%2FUq061EYwd%2BmifhJT9P9G%2FFXRjuxJuh%2Fee1tKe3Sk%2BClhaI&X-Amz-Signature=8a4da74bcb01ed28ea97c7923024bd02017146a8ce12c6325bda5f4f70f248d2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
