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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZSA6EU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4lW565UKLjoHpWP02Min7%2BvXPRuOGTLE8nL3HxD3XUAiBHgSW2sbHKINMgj2uiCA1ZUse2lPKm6Cm%2F4Oy9xIREsir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMFcXJPLRz%2FDraxGDmKtwDW7OO1xCq5tyFITckd8iYCeKTIfe0sNIkljP6FKO16sh%2Fek6cCeSP0gcYJYl22qzz1D06DyqbhO9L0osiLw9TspZTptqFjYFU87NZtIyzg1e5f%2B2olzLYTfcgF0o40XyKIsYne84F61DMnt4lFER2MgtMSJfoze4ggkVs28gS91o4RU7z8WEVO24lML7k2chSxM6DlNEyaEK2IL5z5xx5GkQ0lGAIOCzoyugMSF7tG2EWX6wYC8zpSpQ2VHAYziL6W8dA9smn%2BgY5S6S061ycXR2AoluomGMs7VSu3SfL%2BPfADZxZUJfCmbBJ4XQCiLWJamTYIr%2FfpuZ18Byi0NNAxgfgAkWV6ioIOp5NI2yTpRInq8szn%2BhR%2Bes0NwKHcdaYDC73OATUpTag%2F8ObGz5kFB2uB8comSluLeb%2F8kF35Ap0RNeHh%2BwG2Ef49Vb18lf916t%2FnwN227Bzq%2BFPw602%2BuP3l8vrl%2By0UM77fB0aaOsCXI2MnpT86TxOVOOwLf%2FCrC2nLY5NBWIFDpw7%2Bf6oNc5CY2EwkQQPmHE0WVGO7l02z84NyGxn39IoHuI%2Bww2uBy1O252dIHOgL%2BzpR4DRwkAeH5QyR8BERT7HwAZoos7DvxvIXETONME%2BUWowhPjqwAY6pgG3LxhhePIJ%2Fc0SmdSWrW%2FSNqMCua7lXEZP3NFN4jWHN02BERRDUhkXHDohciw%2FLNWkue87t7oDzIVjLtqgTSTQrYLQu90dppcmegiop7X96LccZG5%2FNpd3i9GAd%2BL3o1NbVzbR%2BnSU8fnQNjRYaRle0fWrtxW%2B0uW%2Br4KhKoHSJ4z%2B7A%2FYS3NcfK02UBp7gf2f3BizUZvM2eB8Y3FLsu1MJOTELtoq&X-Amz-Signature=6d49917076a415d0aca2c6369e346b724446bca4b9077fd0809017a94ca7d5af&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
