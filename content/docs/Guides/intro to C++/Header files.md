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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCMM7OLV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQC12NOwbw9KC5o2mOQEgREKawa3AiQFLEK7M0rSVIf91QIhAKFfX7B8%2FaqNDxhWRzwCAAYdh%2B%2BgScNUMtAD7%2FdE0MCCKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOmBhO6xCMDUbRifUq3APTIg72JlGnMAQ9Njj6nxtTHJzPu8mZ0pTGhGwQWSxm0kmxCnJl8oYEldCUoizk6kCUERGvQuS0xVCf8eIoMtFSi5lcTChGIolrWpvEe8T2Kt7jizoROZsbqc3k7OVaw7m%2F8i0qW1PUdNUPwCSl2XtgwI%2F9D4NvE%2BEZj%2BguawLZdJPLVJ8Xzihpry8eqPzG3Rg5YfQ6WpE0%2BMrcn%2B6jxq8e%2Bnp7wks3AlwTWI9EAKRO%2FnCBKDKQ8pNrO3nhtU6in7FTA1wPiG3rSu%2FFh55UdJk6eo6zyaBRxd4NHkuEGZQv4%2FyUM9kBLZ%2FmNsaTcOfWGjFgq5tEwRhL0idwkA48ZV6M2%2Fsso6u8C1cPm6nHp8Xpp9rPwkt%2F6jPBe0pD3%2FvcM7VQHeVmLAAfu4C27DaZDkJOY7z6OdynWoJZZqKbY6JWL%2BGwUFUFgmKjKxQoOXEP3dxcdapsTf8o%2FJDO4WPPwAGxakFnWV6qeHGDBj8fwx%2B4Ps%2F7GXgQp2jwipam7f0SAs3KqZ0trPwkTpZA9BMpzzNE5wiP2670iY01J3AQ1OUJ6hZn1z1s5gfMQQ4FyBV1lX2Y2syq04%2Bki04JIqL%2FVawyyLoqVAkRZmcq0R5PqRZ00TXLB4OvIBzGoFkmqDDHnOS%2FBjqkAbfrCPDyaOAJc2mPbIdHnNA5Eg86DUwHZnHDxFAv5dg3BQw1ZCYSh0vx78o8bnGp14astuhNhEN%2BJ3KPbI4R2AvCVR3BjjLIylmm99ILuvYiV4eaZSqsWju4J5fE0A74tw6%2FgOY%2FPjNot5RjLdCoyEZLy8CJsvTGuPktc%2FjWVz7%2FyGxf71%2BGA2DNr5Xz7MtXfc%2Fch1aUDPPNFIZTozYXy5aJTHG7&X-Amz-Signature=4ed1c808f4f57ffeb51320b6ec3382a2d5036f14b093b5600f99bd81af171f6d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
