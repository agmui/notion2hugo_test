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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672YZWW5Z%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK1fz1cheyw1lL%2BFKXvVd3IRctc6jHT%2Fck8zZtLY7dMAIgHeMk8W7UKPWnSDvSvVv2eDiKKK6D3GpmcmmBAN%2FdalYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVs1VUbPWcmfggkAyrcA9eJ6w1cOqhJkBc9Br5qsti4olj5QEEv6y3AnOusZ6uDENTb8GIsu3nuKIChhM9UZpEwaf975%2FI%2BDs9%2Be7VgiifiFx7yPabKN%2BklymEPuW7R8t1i6S7k%2Bv7HNPw76jQwazwxMryxEokAGEn2AfGsLflM%2FZerNcUN3H7CmivaBlKTAiVfh5BdjVsU3X4oFqEjbbf1fNI9iet9eRo4MXgjTDULJhDAIL2kscjXlYph%2B%2Bx%2Bn3le4eBCfwTfV5V%2BQbtyK1idBY3YRigS%2FhCoGrlvzmFYhMKgIzJX11qnOY86umTt3sqJrCkWEbdskU%2FvHZBx5l1pBqZLaRL5ou1yVDpsTBrK1Zx41Cril1KFxOpVOoFavlbv8D46hqMQsH1td30yCwlnEGlQzQd7QmOZzOKwaeawRPn1%2FlGsYuH3cjrjsjFTUG9wJJjFUGeY5YRgjoHijTmFrVr0gQqjfeZS4p0Tnby3G3kIoI73CnnrBrFKYoQcf8SPI8Qd1O%2FEAfhsV%2B%2Fls3ZJ9c88%2BoDRdU0F820JZcuFuxiw%2F7BrgBa3ayIxYPnMv2rx9BE4TtEd4W1tqMNGxLN3z0cyJfWIDkX7vBMJRFYzeb3roziyPCwNphNfWLfyzvMPSAZPuXi9I1b0MOmCo70GOqUBRjUIktEwnXWmNtjbGnvBppcF2%2B2QQNilY%2BhomQ0C%2FyPuj%2BjZ857bctz5Mu1tFNZbGdUwsegfRpKFY%2BIXI1F4QaUq98gaeikpTVB%2BDOc74LoTMeqhDlO74SOLVRcdpmGJ7LucL3bz51uamMUggI9WKJbWXSbpYhC4Kkegqp0Mbfea4jO9kQEUe7ONQtDY3QQjUzRAbCyGMnqT%2B7BUXDWRD2jdLo9F&X-Amz-Signature=678884b4ef7df1ee9318f3e33ccaa15be3608e48fa3d2ac4becc2223f1ffe072&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
