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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYCGLXL2%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCsfflX7eKG1MoGb0fIX2Xa6sLiRkA3uoAy5Rxa3ZREdQIhAOJGOFTifwL7Hu74vfO3FTtucUFzM8EXmQXVJgUSXraXKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgSSXte%2BnWeVjNx0Aq3AOuc9nGyl8usxiC9thVtLsfrFGVWyEcEce8QrTV3GHzFOaOp8pLLJTvPIlXQTNFzmsu5DHgCxKKmk7uqvbGZ8s2p5stuwaU9j0BCGtR3hxPrz1Xgq1KtA%2BJIgnQOtrw5KYz9v%2Bpxqa7dQi2z0ApK0OQPT825YEmtmgRbePAjdibO7Kh4K8SaEr8eaFSXD9zt6BeEqv5efII7%2F4thsrPvzwCOtcV%2B4ey1RtUrZzUy3ayVa6BM0CXGM7XDZZi0sme97J1IJeTjuA5lQ5yu6Wp%2BerTGsL9zv0P3ivz80oeW0PzAVWDJAZmb19izbjU9PcxOE3U8fwABSSVH4L0Hce%2Be8JOcKmPOuAVcOnVUIpcO6SarVaP%2Fqy6dHlvfsSY4iAzra8%2BbiL%2BjcJhv4TkxlNWYxiKum%2BLAB9rrA9zlDnP426j0oVTiZdxIXWNt9wrnkeZGmsRTfNpwbN3w9kScB6%2BQGxG4efC40A3M1gTEk5YRyS0QK0RYpUUwYASuQJMRRtY4nwug9UTcdGHl2OmRT3seIGV2LkNgKkInVI1btsq8qD%2BTeEJuRzN8k0OAMfvdYHDgwnZT%2Bw3D2UYwhCF%2FWMWeepAccUe3zM%2FXL4QtKWGBUfrMBNORJkhrPxedoRdkTCq%2B%2Bm%2FBjqkAV6WY1RJHremhtAu7vf%2BEsjKFqqxK7Ks7RG7pB4mVfkrX4KMaAn92u%2F78zX%2FDcSSZ34ZY5HoMhqGS6zM%2Bzs7txqGKtBR0PgOjdP9f5XqCQTPqlRJyedBlFJDVD2tcZO98oSKeXyZpZ9d5yOoif%2F71xMY9K3%2FvZghBy4uB6oW0P25i4FdGjvtTHD4KYI3KSnMnGEdRMnWB7AWm5ZmqB%2FjMT1YIp8j&X-Amz-Signature=154f6ef88035fc7e7d47de36509f01d5eac3ae1e980696dca472c219228f9650&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
