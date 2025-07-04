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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSJX62M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCr5BZxSb6lpKBxm68hQnsJHUz0mRBL7E1AaXuIj9VDmwIhAJ6VZ8iDUE%2ByO23zBdQUhvMllrSmIb0FPuLBDjIhoI%2BhKv8DCDUQABoMNjM3NDIzMTgzODA1IgwFgyAlQPfy0K6PKOoq3AMIsSPPmtv%2FSA9thVSgyq8ks1KlW%2BjI1u4L2fwZrDCUpvO52BgqJyCJ7auFd2f1wDrpg2Kyfe4DC7IgZdkzuGA9BYDaJz5WWXxHa00OcAdW75bYuz6g02xEHdcWo4m1t%2FrmrWOxS2gamt%2Bh4LNwesFAZVPlCblX4bNiCw0F8pMDz75pZEHjdBi1prB0WCv%2Bww6O9zmd3bb6kCHW%2B%2F5oTlysR3rOpVbXXXlya7PHEVZgcpM825IOSTaS3orPHJe0rsmUDiHoSCLF6FuAHj8PBcMJprKrYIN1iiATED2WA9umiHAcBRSsKnXXNdsLXQ8sWOKhC58qEY%2Br3ucKxg84Pv8pRJFMPqtwAcKLvQRrdlmj9tHk0g4B79ixTCq7aeyCpo5EweAQV7cY43gU8Qynu5QRmhNQ8B8ViEcl0wvqJCpcPu3OfGa002LHkJRYUVNn5DCr4itWzpv1uTug9GugTY4hhbDgE6ywwDE%2BI6M4mIXvfzD9xaFpO0ZZW74NAA5kCDgAdtaFFYY8KQ4%2FFegKfy%2FlDYsFwk5Sx99okG6A4WqvEWEMZQfjeHmRICtRXJO9VSNsOtdZUxIn2XH3ZsP9EXF%2BPfzNoRUs98ysIZB8dnEwPmugS5tIp5U9tqTpeDCZ6KDDBjqkAcdOOm6TZ%2BOQVtCNcv4PbMGwSR6iiAdgiDPxw4LjHnencQ5bznsdAG%2Fvkhr52DUe%2FyTwDNQbWVrVvEuzeVF9rKkQ0JkXmyw69TTFJMjg91OrKT3isz6OoMa07i7f0x%2BtRMkrIqTmLhijJGQEY1ZRPKd8NnM%2FQoKjazX%2Bv55%2F4DwZKXrosp7B0l7w75BrHKHW%2FygqH3bCLUkksDVSB5%2Bt%2FnNrS5qC&X-Amz-Signature=0b8ea35ef1393771e6b1f663f4e488a7f6ad9b616733be57d38da24873af5bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
