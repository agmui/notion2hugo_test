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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3FA5TT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGMfzIBIkNswChvu2cSOknO1725Gn5I2afuvUnaJsSOAIhAMbQ%2BNLnYljrcn5b3jcr0rrmYi8uEDSrtK1UHVb%2FgXWvKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVS938mnTJ7scb2HEq3ANA2wbkUDQ4H8o83gmg0xDOzh8xlzaXwBxtwOdJW%2FwWatfWeZZYFja47i86LQk235dwFw3SziU6vY7pGPbaeNdyTyYPLzd4xXfqR5fWO9R1Lvun144cMFVaqR9xe5ke14D9s1y1nbRtdzwnwgJhDP5IC3cmkTf6mTJ%2FbRBEw8bbfkEG2eEyAirahOU2tQ%2FkVFYVpSGYskfap0KudzFbIqvjadSQ6vdW1uU8sNy0kX7bgnJn4GMiLQzShi6Yy023x1RVTpbL0tfb3pGXZc4SFXbcQ%2BPBlkphk%2F6LZ3N9TlP5ch2QYKggIN4WvoOH%2BcWqi%2FfnJVDV7Qq3LFoVy8I50jvUOJ78ao%2B24KLPxOaHcGvwADTTbqIU6rm%2Fz%2B2caiBeJO8YdSJdwXkKoJvljeP7IktsBHtnaJlDb4hxF76pBY1Ngti6SYfHEmWWXKXYt1Ub%2BUSM54kzn7xwtuxLO3YJ5Vaujvl9ryn3pMCpBGM5IMdpO3yOjazj1kRr%2FhC49irAw0IatzX8WWOD4Gx796XO9S7JxSDf2%2BSyquLSRmjrat7GnEpGm7dURE1qbxGV5KNX4KffDVb0kbReOcsk5XzBnpldPatiw1yNrsqBhM5cl5FsXSrgceB72OZzjI9cVzD5zIzDBjqkAR37mOF8hs%2FuxvatOaUw2sZFNlufbUdu3%2B2T4vooIK%2FvGw%2BJM%2FRyQZT5NvALzRxtYjiJMs1JNeKxYwk5Nz7rz1uZSH8Xc7Cc0Shv%2FMj0zhsdEDUBcrh%2BLQq55ZRqwt6oL1OLPPJk8d2E13ezehl44er0lF1JNPGlVHwH42A0CUe9MlnrfCub3YulPXyfQl1LXpWGB0KMB8giaUAkAgWS1jd3hwNt&X-Amz-Signature=2c17fbff570594c591fb37f9a49f92d358892f32d4cf340eda58692e5cdc23bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
