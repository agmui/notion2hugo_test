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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B4MRJEC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpnxZ0mc2BQYMQyYAH%2BaG3kXT0BXpsRslpu7myBGLvbAiEA5Zbwr05RSPAsZrgXR5H4zdTI%2FcnmAwXoymowlQv6U1YqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh5fXiCRKQnrqBBTyrcA6V%2ByG8zyRrpkC1v%2BtVn%2B%2FcbKg7RXDafhD09x9AbpfTblYnPeWpYsBkPp2uod4Je6CfJxNFDRvTMi1sxqmM9wODz1ddXS1AYP5k9PkKBoFd4mjFAyXTotNcVsvUL0A29kOuMLQOxc16iffmZj9%2BSMvMsuCP3mzSDwS8lvTf5VD7515U22RiRbSpJlijPxPZgUywwRDG7YrW0bAXGG%2BZOiAAZLsIw%2FejkaVB%2BvUz%2B6FqKdXDXUVYk4Jern38Sdxl9c0UXNegXeDJ2p2Id2%2FeNCV0Amxa%2BFhL440vfdQKAMyBERat4HCxTRc%2Fp0%2BxdIUzf2dwiDvxyvxb8U8g%2BVEzbb9BUbfZYlX0Z0pn82C4ioFi3laOPRDkYlPwU19b2Kq4DX27Uf2Rk1zau5jwzrV7Z8F6VbcSShyuNYxyKF6ZRndQ7XhpLzfazpPnu%2B1ORFAB2VVsWdWMOycBTZJqKCxOI807ZCeYUL2Ggej9P2CikCuwyJOc6%2F9iFwUnyPmbTSnczPx3l3N%2FW7IWh6DTLTNA6MDs%2BtQCq8koYQ5%2FRksKY3eY8hF7am4bxge9R%2F34M7BYpjxR2AMXBd4e3Ps3OvGwXFa%2Bb2DAGdrbRoDhN1E0MeNLhR0CLhWbWcwvjein5MOex5L0GOqUBq87xCeJBmUWD2z6Ud026pj1qI%2BsU8gSpd7qyY5luEOSqt0Ad8bpS%2Fl5oQXkk8JRXfJ43O15bFIRfiqFbvVCtVnArLQleZYVvSuF57VRtM5CaBt1y%2FqmH8oqV0IjuneCc8%2Bu4%2FDBFfK4OD5xpQXO6rzHDmcPvUdew2T2fn0jWd0IyDGOhEu3SH333gX09Dgi4X7uK%2F7QxpCW0fx5l6Coo15ev5XLa&X-Amz-Signature=30746c8d3725062b0aaa074d92574bc9fb17f04a4e969062a4ffad4fd84eff64&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
