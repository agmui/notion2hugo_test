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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UEDSB4M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCqEfa5KVcJmUU0iQJ%2FD7gF2xb25PS%2Bxo%2BNkm0%2BaAnssAIhAIq2VpDGuViPoOnPdhPSbDJOoWiWk6qzmjMJ%2FmHvriymKv8DCGEQABoMNjM3NDIzMTgzODA1IgyAtw6TgOhpToQWghwq3AM2n1VEYV3pYBGLuRfHam%2Bi2EKs0ncucusI13X4wjF5EoCx4NPwJm3okY2BEMTYWfF7n9%2Bw641NaMYpw6xwh5fp9LVC6BSruOS3D4P%2BbuM3lKDKHyfwo5UDG01NeCt51b4ftIxn5l67F7LUscKnYoJMvoav5GTxsxyxymqtQmwzhZp70Bcq7lY7gN7k49xc5sANFe0E7qaTOCSC5ywaPWU7x7mWvgUoX3dCjRVP5YhegbRa07%2Be%2B0irV8t%2BfbMzXFeE9cNTAu7LdzXWpIMj42%2Bk3XkQ1oN%2B25L5mLtMCl%2B8Gl%2FRz9DJDoZ0psBh7CiO3kQ0r1iTtHFi8alkflz7IB2srMsI50ko4xxTp%2ByE0MyxX27VHiJtJm%2BF%2F7J6TAquPECRUl3W3dpeWZOkBjlNzGTeMZiTKkXbvrq60MTfqg4S88lMj5GilefR1lQwRpQqGNfY4QSzhZBziQPvUz%2Bp3RZgWapbBCeOd9t0W%2FFoUA6L65KVnqLjwvx3ivcD8hriW%2BYdzQVfh5TNDgseXDjduNAhYPuBT3LHQ%2FMGBjfvBXKvtlrA65eKovtJHq%2B3wt2Mr%2B8bzlgmMt1HdOddek1hI45z7XI3L9r1CkxIP1xm5%2FJ6vELkPMVyQCv97cdI1jC3tf3EBjqkAZNFWms6sKSGApi4X3kW4%2BJhUxxyd83zcz11Km4lESwiiLgp6DDTVEbVldnoNXYXOK3BWbQ7vgChFXlf59R9vK3dHcM7iPCb94u9uPiVHIa9dNBevusgmIkZG916ryos%2FFaNLWgsE%2FYvigjMGcrB2m2yJQ2TOJHp6vlbkaxcUWT4Zmc%2BQHDEtve7KOlSL2Qos1LB20D6L3rQbVCeHyEdrl4BsEz%2F&X-Amz-Signature=364153cbb1f4da078f8615b74e72f0fcc40f507e969810b75d1b475c1b2060ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
