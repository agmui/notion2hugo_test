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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSULYDFQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC%2FBi0B7ks3hXHeTK2UD3Pg2%2BKD7x8ESA4pKGa8PQOSYAIgdWs0ko79x1XyGCa5C6dqJ%2Fy8mbFAXxP4kp%2BZa9QPZn0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDEmuirrqdNeO9bCI1yrcA0DkFPdDALaLgphZxG4nmMc%2BB63HeApDtaAnCRaFgB8RMCU6dXhmSabx8wIAHkuKA55sSsS2in7zUjQIJCaF3YY0IpPmqHXERgXCxBQtXI3a6QWhqKh5T0uo6keaRXA6nKYoQJlBUgNuGHOMHfn%2Fmj8LqWXOBOWYp4holOU6kvjDnycGaZbz1cDvmpLqb2rNiOMTucLaULVizM%2FMws4xxqRP2WjUsirf9CuGLp0KOPGalXCxcX1KA%2BMDyQK682LhfzpTvAEy1trMWxM3TDgLt5GICIokjWo6OFo%2BzLK1OG%2F2BR4XLpLJWi6Yzg33oxu1S%2FnvvZQluH3C9t29Os8fWBiqdbinRqt5uJw54tQWYVpEQBtzYXPO6QeUfK6HjrQVnTv9wT1aAsaWj3NtGlbkwYvux9moR4WUp1tuqqw1KxJ5jOt8h1sX6gX0cb8gd1g5HhKDlnOIdWMItX0c%2FSQGaa%2FnvN2Huo9z%2FEAjy4%2BvcswhiMraPf4DYrYFJtxQj%2BsqMZ1a%2BMODGHgF%2FPuX6CM5E6R7PJqULaBbiZGydIcN%2FjPi0UGIjInjpTlNG23YPq%2B2BWZdWXxuOLxkTm%2BkhZpJGtbhQ%2FDspeCcQoLIZl%2F0T7mZ9nGNAys00GQwuG9gMOXhmcMGOqUBag5Aw4Ww7hbmEFBkQfpZglH98uv3Fy3lYFPRncey5XJobP4YlnZyfbjM8ZoCFDNimNU1ip96r0qAsdSmxucH7ixS3ucrggWiUUCVhkfGf7MdhdNH0Kncp39b4td2l3orOdxQH2yx7UMTk72gSBoxc9Ciewb7bJL7WymnybcjowK1xfDKU%2FV2ig8%2F%2FF8YRz84H5Lp9q8PrCWmpLiidiNJedTCZPde&X-Amz-Signature=18e41e3501fdab8f20be6961665e8809339d2fcfe0df4c0e765d56d8f3b3444e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
