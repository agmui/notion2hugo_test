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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TKZZ7NZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpMz%2B7xajXx43K8qrRSx1PGIg%2F5se%2BHB2N5T66s5DbHAiB2rkF0xGAex2%2BDDbL4zwzqSizcXm%2F8tT2Xj9JsWFh%2FiCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyMUpqAKR20JgV28IKtwDb0s3jAQ1p%2BDuwB5AKzy3xKj21Cw7PD58i7oWP93E47WUo4YzSJ4qAxPjf6hndjFh3Chg6T6TNyGzxKMTvW4Z97npiJWR%2FYt5mezhbVxq4OaKCwibkH6hk7%2BhRS2vAAqFLrqBLixU4mjCb1YKwuAOwPHVcPLmPvyNzCi4vX%2BCHen9yN3YrVUs8OFxCH7NijNVQ6aEXyX%2Flo8x6ewzgcTlOSHG4mv6w7XvDL1DE4QPSpcXHatrf1ixeV%2F4mcYyKs3HOGYfghzz%2B32ZalCVI5zFbDTG8AZgfqXHFbbF7FdJf6oiYqqhrJn8aEm0Nwg7W%2BL49WEv8lVMO4MUZhSMd0S3qsWRx89K9JzAynqa8fVMjlETDTDNS3DzruHhVD966W6%2BFNgELlHabP8wXa8H7BvzHjA7BIiA0pR3i3t%2FvUgK7mnhn%2FgLyUyKW2c33MPR7YBe%2BXV%2Beyf5%2F8ntRwP%2BhBY24jC4La7mPj15U1XEOLooTcGI6z8bzbm9PwjpUpLs5krWs160M1tMIvikylF83%2FVz0Z4fkQpWwHRZ48z451ZtLEAvIY83KT04PI5o%2FX4XvLV2JZd89DgH%2B9ydmCzXRVb7C8HFFAMG%2FdollZJGUAjVHGMfxp%2FvqRTMVG3MIdowwa6kxAY6pgGODvRk5%2BeakUJq2zDufmx8NwobnIuq3pxxZh8t4HLCfBbPA4g%2FyUol8lp2c%2BKhOZFXCTe3Q1%2BKLich%2FoRLgYph6gxObg8ngWWyfWw1Qqth2ZyjYQrewSOITuvMRLsjI8NOicQ0wzIh494i1JI25sfwHQNXch9cAyzKpHXIFKG88u2BG79LOLQPKCQ0PqY1SOtsNCDsUJrb%2FBRaTIiREJbDmlWCRMbE&X-Amz-Signature=58cfd1f3a7f9c60559f0ea3aaad17210ab2da399e30954f1f3bc3128d60c2826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
