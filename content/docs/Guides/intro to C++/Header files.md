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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVP2GAWV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHKxXZmnM5BoQtF5CdOV5Z34BTdx28H345m%2BDQcV0C%2FAIhANHS77dbpIBSKIiy3pMCzATV864dEeACG9W2Q%2BpvG2FDKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7jZGr3BzMt2CtU5Mq3AO8a3yUOH%2FDNZyqpeFwMfVlIOHoqS7jM4%2BkORBohzoMoCYoLJrvQss5HEPgZSlXffPzQf9VxJxW%2BiaivNniKtwyzz1jO8klHiLJQtmf2hZ6xrNeeMY33r0hby92zGN67e%2B1TAdupdFOH%2FZDgS%2F%2FJxE4bxXcompsELk0H0relZzToLs3tOsUodDNzN1uffMKizEs%2FN1rKH13r31lraN9QFoxyif5b8HGZxlv6IppTEyK9BZnvoVQ4Z7JaSasB1b65YJMLXyJyffXkhNRm0pUdViHcGn3manLLB4a3QTcg2fON3T8%2B0Bf5JOXF6CYOCQA6Y6AxwKS7JbfLTPM1IN5AIQ8CLSqqKtyY0XjSZrtQBDTZiszsd70MLEfBxp6PhSsBNV%2FRnoWrtTeSpqVlvAe24LFN2eCF7u8W6MxU%2FRgRY0zgH4WBqrbAQzfHDZ9JD7FjKq6vU3hqGbHAUb4JCkgDZhqeUV7t%2Bqq1jgLgYAolbIuINmuETZPJahbkPw1EWeGWqV0oJ%2F9nSs3o6mPWM%2Bd33flZLp%2BOwvequChbThcms9Swkk%2FNEOzjVGnzsbnIKmJpxVm6rIVKD1f%2B%2F6%2F9kYmxQcignegdWxkc5jrM1Ie7i8MBxOWgPCjO7K9oFn7nDCaxfnDBjqkAcay8gaqYv%2BlAgURV%2FQjWyOEhcsRS6jhJCpLFTDeNXEFDp1Lyjwp0Y%2BNk5d9FwN5PaZHCYSVodRYIokvZ%2BLMj4sNEkOO5ETk2Y%2Btmj2wsZjuODyBZUx5Izt%2BrDdYzeYx7jdSu5IJen78v0koajHY%2B9IKBD%2B9zXS9NrewFbGG7ykM%2BbS2YR4dedIwBOEJVPmk1rUeeFREsVasaUkWfSSUPuNoeSiM&X-Amz-Signature=88e63edff82d7a34ac45cf4c78c16d4bf0a9b06bb200e77744f2914b8c9061ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
