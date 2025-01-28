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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D72WEHH%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDJXVMIAc%2Ba8TRgYUnMJj5ANnEkuH%2BNob2I5DkuuVO7CQIhAP4jJuX3S5%2BfFP2dNW%2BMWKd%2FR1cTWq3L7L3piTNFmEJ7KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJljUN1TeC2yc4sN8q3APZCm39peVB5rmIMHB3RswVw6BiBiRgwXVaNU5nsVu9s%2B6Yj3GMVNdN9EtGPByS3i3XI9BmIZWm2vfPNxfKmdF3erNc%2BzcaJHAmywYI4iqfLJ0h7i4vEDp3FF3y4fhipnGvaGkMZkC%2B2VfNZhyoV%2FdytE%2B7ER%2B7kyAUjOwgSHukNFwFgTBcdb08i1XV4u3szhjyX9OwipfNqwSyCcSPRCg75deswlexAXg8u5kDbxW7iJjrWCq5JfvfWd8RaYgHOBgRKKcuIz0FsyYOhWpw0Bve7BCC30rMCOM51Jp7LimcykF8TRoNw93qKpVAWG4SN%2FiTPPNvhO%2BnVQCHZ9IRcMAMvMNl6HquLVN0t7WQI6Ov7dJ1UREbXGxsSgFYj%2FDitenP%2BNO7NeaYmfkv8mIHgcBufNyff2Y7zg6xqgUjeSaDnkZcqcv71Fp9aND3bM4EvKLAt%2Bs6Nb9mEp9ROk1h8Vm%2FU4e4zaMhk%2BkHHKIjoAVp0wXjgSxThxANKc6PWnHoWfmevvtNG4%2FQ6p3lMoKYbj9swQzV1EYUw%2FdDMPFWNIlwXso9QDu0t0Z%2FjXuDjmDuebsuLcNhnHpaRr%2F3R1OD9qhWys%2FoVnRPcMLKNYSX3DYrq0ZD%2FpAjDrfdOi5LkjDCsuW8BjqkAW3sOrNOV%2BNKqlzMJNxaV%2F2b%2BVNKUWJM%2FXo6bmjsVSm4Jb5itJjndZBJZMwDOgzxdV2O8OJ5a2%2F%2BB%2F0CP1vVkMhN1DLJ%2BGR3uIjzajGWB3cBzYtpXKS2gEb0myqq69xWqWBM1d4rjvVDfl6XK1yYj%2FCPdefTee9HUArHbWBGaaOYClwHNMe%2FfmaEr0u2zqoeabqRP7ak8EryLaChZTClxVFyjXHT&X-Amz-Signature=a57fd56aa95d8cd784716f8daf37dc1c3221faec63af4cdb926c5a40ecb517f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
