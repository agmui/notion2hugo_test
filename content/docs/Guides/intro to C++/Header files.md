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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HF76C65%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBm%2F%2F5mi22b0SxBnYYSW9BXiVr1YQs0MYL3Ngv8vnMflAiEAof%2B7rLqC4KyVhmKtL8xvaVbrnT0ggBVt6Zdq3xTZea0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDA3qGEWAEsahVXVqLSrcAwhh5elhQoGpzc2IZS4Q2r8GzzBiK5%2BYX8Pr0HsBLMy6RifowSD85Za1AVTLQ4%2BI6Z4gFRuTWI25EtyuW2M7B78aMB7w6ox5U%2BWIUrb8kti7EQx4ieMEDCM42SOZVdfvctUnC4uhrcbxzE3TXoOzChHD284c7Iyr61C5R3c%2FML86iEULvERHdlni9OJHDUy6WiZTG8FZDFbUhByCLAgRdu%2B%2Bdy3oxtm72772IhmwaYmifEPrhlWhNBo%2F1FxKDs3IgJoaiKFzaiMO9bdcjZD313LPMHjSTwqo%2BDNPF17IdZFRZJBLM49XoFhLj8skCZqYNYtle0%2FnAUDo08l9WzPkscGtkshYDJxPIGBZjhqpWelV1BYam4ifzPOvR5i8YjDCgHowwpv7QcxtNfByTPurmc7KKceuvWEboiGfa7cFNTg%2FMY%2B51dUewxW5Hk0G9KBm2sodHUyB1rfORqaU7ktFY5Ne07kwVLADdmDSIXeppvWJbT604b4i0k%2BYwO%2FuksGh%2Byiv%2FxmxMWTGYDOIaCFCJdyrE%2Byv47qJHY4c4f6hZTGqVLyWPOHyo%2FpvYc9Yhj0hftBZqmeYWz4Xr4EskyfJdw8FXmOCNyQuZUDuocz5whHaFi4l5xfRDEznwp4hMOaLicIGOqUB6PkFIuqhE7hfDapXeSUbU0xafo7Bc6nSLS3D7gS1tOP355GnUv3ZweZuvpBLR6YcvSXdk8vJLlolXXzTI4zs44cqQ0pOBdK%2BmvE7yl29MNLClELgHL6F%2BpaJedA%2BKIXtqGyrbtFu1fEFHhYsQp23NXBiStfuAs2YW4Xppq5mtWd27TDKi5AQlLma2QYKL9f2cpHOOZvwPhdkj0LOAIRsEM7J28YF&X-Amz-Signature=cdeeb4e8d7b1ba2ce667d271d177221f5664b00c2fc624bc7eeaf7a446b71962&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
