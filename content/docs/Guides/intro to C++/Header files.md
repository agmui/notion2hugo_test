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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4NRTJG7%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICF3zR9wnWZiA4WRBErMUTdM%2BVVNspqGktaLqAu1IZbSAiEAisUtqGIpy%2FFC0ckOQYaXxU8S15qOCxfL0ip6EBOgrhEqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObPimZ5O%2BZczJko4ircA6X3Mmv59acqfakHJnPtVAnkFgRDCoqyu%2BmqNXImrpeCw9m2DqAEWAdGINsPL4jyXUDYarhZPAc0unxttE45eshhUPG72%2F2WthzRbKqIzU6IMcH1MvUyI6FLjltUslg0K%2FfoMDTkdMb8SC4OYGCafXXkqJhMdqK8IeC45AIl3d34du009We4EdwOxAGq0hi729vYQqM0VgjjL2ntcSTBYpTLNdd5Wkau3y%2F6jlYYeQ3gs3DOaesOi4ugqWt6nUa4O2Gzico%2Fsw1TDVttCrsGHzRfMghxWg53ZVDDRtgbdQNCIc7MI6J8C7ia0jk2g9RQ1GG8lCzmkCfMd%2B9RqXixMKHvKwx8nCRy4vDmwxvNIcNSy8m0oQxAQI3jPi7SIYrCaT6%2BF7%2FzPQdHaWOpEgi4qgqyWpodGar5Lrlmk%2B%2Bp4LvEUjc7LThi1RJRfhEm1eEnORkr870L93t4vrh0fJUObcy%2FSCazjjdIgCDme6TLxggQVPrR72A7NMrPclFLx%2Bgg0rIbvEvtbS06igFFAq8T9ImEnKsb3D%2B0H%2FAyeCN2wLrkTk70Hwf6L%2B1BvlySi8m%2ByguFVMYI08pRsTJwyHNBrC62d7Y%2B%2BNteIh2fvk7krJgltQ580dk7VpJ4QeeqMOL2qr0GOqUB4GG7b8TS4cng9z0YVurdWGCblogJZpG2tJHYO%2FjRi%2BXN2KJcvlK3r4bYknXH5Ujo93D5bEBgIvefgT6y700%2Beu9c8xZ8PbKsTn%2FjMmGSMnSfYWWOlHyBIIt7PuiAj0A8W1qeWWs8v7GZbqJjI8eA3QQbxbyGTyLEifhs4yCx4j%2BRK1tNPPRVy1zI%2B8P2LjQ0daZZdlS6pbXwn4x2qbVbAz8m%2BgKo&X-Amz-Signature=9efb4e0991daabf037f23c2629736285563cadb337345529700c922247438c26&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
