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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMBXMJBA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIE284WpPk0cpCc3U4jzUCo4aG9CHsja34lyg5RkPIIs5AiBJ%2FBEMA40EWD7jHDEKFg%2BW1lepzurN6aEwHh5cX6TXRSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkKoCZC%2BtXDrXvKf%2BKtwDPkY8ujSJgD7it3LklCvyRgbruOwXWH%2BnKugiyIaAjSTQIUAn03sa0jZAYMH2M2hrH8h%2B2FECasMdnkRi08zSNLtA%2F%2B1j6JrxCf6E%2Fic8MuaIoI6pNS7nlypbZcJdWH2Te40mXVvo5gVX%2BkkZ9g3TZ7%2FVb2pG%2B9Rbd1b%2FVKJgbGfvQFnBtkSpxKW4snbZL7NiyvAo9DiCcI32IvpitmpXHe%2BLpoyc7Ysw%2FQuL8Oew1EwUQl6pq8BQ85PlxsaYqKnwcFmkPbXU1smGr4wNCfK%2B%2B6d0tukUItVXVBVu2o%2BpJn3f5n7oKTTxWNvOMs7Jcs8s7TqQ2bGYD6KWBVi4NTWat2CqsAz6DGLhf1pOexdotKHAzutjMquq82TXEl6s4dg1pf9IzOIcxjIGz2sDH7W3rHqv1jQKShk0ud7iHixTThFcJn6POq04EejtJsVRopTB6ErErcr0%2BIYPFz2Og%2BIDK4T4kM7dI68ttc2aT0Fm0qkBbfRerbA6d2trsHrvBxk9oqW8rAwPH9tqWbSw%2BrMTpbQdu7XBX5bvV6dg7kpaqI1pKZ%2BIVl52L5H%2BWAUN38xF0fllgkxUK5xGY2zqHQ3hSNDPwVt8XQTybMdONuhU0LNZ8P1Fs3Qi%2BBa09wYwwbObvQY6pgFxrSKr9UoctWxdZ6PeC%2BdoxUOkXPjPilJ8ZP15HfeBzeBodKgHkskgxYHnrbSrw6YsomWX%2B%2BDirhOnqdNgSOhH5oND57XYlKqRY4eB0Gp3HI6Z0%2F4k5tHlBNDppCCR1hX3m95pEGfn71HvpGOuYNUdVGo4KTYzCyZSKd483BiNgnU6pFq7VAM1WIfYwVl%2Bftsn9tcV%2B0vM2aZlkWJJOVstkIc4x1Ut&X-Amz-Signature=f491431310817f2b3d68068420efa6f8387e0ee4009cb35f0eab03d2e24e3f56&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
