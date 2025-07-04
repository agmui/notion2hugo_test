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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URN3LXOC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGmdyIO88BNsVmYuMkFyI%2FMHyVo%2FVUV9KvW7dTmj3gMtAiEAuOO7V5gcMyFfY%2FnZnptkZzkeJU21PYq2e1AvVhtn5KIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDAh4sHBZLt75mAX56yrcAzWKaJ34kcVye43ItwYzJR8yc3ZT4PrFT7XJpwUJhACtFvCXv90FNIGU7WjroeecSliIkJzTF%2FpwkGT4qQRsLnTVN%2F%2FPNPRFGrum88bZFUCTXP1nN5%2BsbfUXtgN4xrbIp74OulsHrEoFsXz2o0nHs3maIpKfTJjSTGa4au28H2gDgjvosFeEMbm4kPgKv8TIdIw5rJTmIsYYjwa9DZqarsIB%2BacyMr75nzWf1zFH3QsCeFxIGsZa8BrYGqs5%2BTKqlS5%2FSCOa%2BcxaLtpkUI%2BH558nFbTmTH%2B71vqkAXVv26FfOTu2xDTLHVgzKdACrnFx3CGyv5KDerbPlSF%2BrZtqfvmVRw71b%2B568F4V5w9GsTqUmiTPveIL5TrGVEWTj%2FP04YuDJP9yothnkCoNzLsVB1rySVAiJGa3sC264adXHtjbdVHrRb5ugnGbC1Kxq94chpH9R1LPfezt12TGzWRzV%2FmncnGBvcZmi9YqHzGhiwY12CrwlbTGmfB7vcmKle3EOmuye3yU1B%2BUUszwCJ0TCojO3eAR8Mms0vdoOqaTavmuiE%2B41gRx6nslpNrNXXwxDOYbdP%2FtH2GB8FYMdqnt0gGX3MNgH8R5wkXQdJ%2F14TJ2n9IjeRY0d1MAIoZqMMDEn8MGOqUBfidQSgQMwNpQIDn%2FBKC5CgzoIv0UnShqL7M665qzfoUDVpVfed7401ebPX7Ip5wp0WMOWPNl5RRGq8%2Bpi9mrWyoUeSlnLc%2FRhx0sNxEBXNYYRHJdc5QljOlWPWk%2BZe%2Bd229vEERWQN7JF%2FAXWkc1PNcZdLmd1FW4PjmslROFpT95u9zciW%2FrLu1UiNFQ%2BErVcD5Fh2s6sAuRtTB8JfCI3f09XaK1&X-Amz-Signature=dcab544cc7578c111c75c3fc6793a44fc79c8c0d7de09c10a23a1a6e1e9319e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
