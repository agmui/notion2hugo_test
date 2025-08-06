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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXK2GJ4T%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIGHuHSiaZBbO%2FusnXqeJjQnqE8axi2cS%2FuO2ZZvrr65IAiEA%2FwiMUWMAhK%2FFYr1aiZHUPHsIW2yNIT4omtnLRwdxizwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIEERH273AwesO7aoyrcA03ascai1foBYQAMpjs5HgcTGAJV1g8zC0ERN6vuyNqwzUxJgsmrYJE18t%2B2j59k8ana4r2KJH7CXdDbAZVCDnf%2FLqHm0he0d5NfbfmL76OJ9ECZS%2FAC%2Fgd2zTCs2ewq90%2Bjnn8KJnIZgwNUsiyb8HDVnwBecvScs7vtwwqbTvX%2BUyPaeQOWCNA2gLiM9QdXLu1qO1dbaU%2BsxDfDrB3whAY2xLoA7SXUqKlJ1pGWCrpPglEJw0HSptImXU4pbdNTolB5AH7k0ucr7zDGJ95P7SJobzciKs%2BqLDGsKMuqnwSfN68J%2B9QNvxWfn2IY9xWeao0AmXhi1oDPVr6xtZMeckUa5ry%2B3zOXCPEc8gE1f8%2FftD0F%2F19g0%2B5NMNWxQtWLrablogKFbAp9tBydY7EZjZOFt2zif8ZANmkCEX227S3VxIRPZeRN0ICYGWGFcd87AmUV23rEqanQNXXLgG%2BQSR2oEy6KCz2Fs0XbACcwtnvOSqLMFLlFGIXURPwc%2BCv0UqIHgP5GXdVje8zoTFY1AW8ga40e0IQN1uA3OQy%2Bn3JMbq0MkeenO%2BGZydXz6n3FBeSbl9mH5ZKTW%2B7lhNG4g68RYmIA%2FrGkOWxpa3xQpLNsL2P6EXzvbvu3vrBYMN7wy8QGOqUB5oPmyIdpJCqtOXp1OKoQQkP1KUgccMVJBE0t3wBj05x%2F1jEkLMA5yO0DanUiK%2FrfrUbB7fP3bIEsfWC8XMSSmNeWlVN5rpdo9Fov35OV9mqWSW534lroMkgzHVu8lvt%2BdOFJoe2X50VJ6DILDUG7j1%2FhQWfRfRR1ywo5CkuWVXVMAJIKZDHdzmV8Sqm41R51x5BPjPw7h29GF9oOmnbgUuka1U1g&X-Amz-Signature=ffbcba9e3881602732bf8b331003ffeacf0508692937cddae16ae6e6f5b3567a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
