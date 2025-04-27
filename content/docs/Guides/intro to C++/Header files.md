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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLOO35R%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSAiEMQJV9T58YOnqLfK6oYMLAKDvlgnwYVCcv%2FMrj0wIhAO1oryz%2FGaj91dYXaEWk8p%2BNJUglLxpatWBbr4OnZi%2FQKv8DCFAQABoMNjM3NDIzMTgzODA1Igxr3D2FbEo5MXwSH7Iq3AMClkbaEL7JFs%2BLao%2Ffxzb14uzXF1fCgZSHSf%2BV1khfWW9HNEfsNvT51qA1nW1DASpy09ULoG%2FBEGAcPd%2FCYWRsUSdFpUsYjgZN6jvogCRN6nkWrhwFfIkHj7MKutBJmZhH4gO4KG6GPI21mEA47e6VWzM%2Bwo2awxyx46oXdvL9sQpe%2BybM%2F4NGCDHkKEkfe34a2p4TQ0rdFyaQfCuYFmFpDSgmvHgkZ4wPaZPEjo2Y4IAuMXMNHIPzYLyICNeraMtmK737pagbZfYcwBaXwM%2FtCjGWedBIsMDSs9QARd5JxngFcuY56NKfw651%2BPexM5So4BjUEoYLtuT9SCSxQBpV2TT2Jaklr78OwtLekIF%2FcplLuSXklUnN2Nj1cjYu4iX1VsosGkvZz3dUxQrwr1UCHcRLhQcs1xaoacIIi9X5IhoPgxL0Kerv%2FUIUXisdjlJXQ%2FZi4otR5G8w%2FnDcuduz7wANqy1rt%2BVdKwXOm9TiQcFPjvs0VTpkUDKa3ASpHMuHXs4X1BIbcKDBbc%2FJCc2TlOdKiNQT6udPPQqQhBr87opeUxCCnwUYsP0c7ZFKQRHbPVvRuWJCkNSVY5H%2FdyE4%2Ffz5GVk4kXHf7fDJ4%2B3vk8Q8IjGODW4hByatITCov7XABjqkAUmAcib7n8t504xgcpL2oOwx%2FPOWOMFVMJiXiHD%2F1j6h1zJINrLZpz90Auf5HlVzmo9eQIS1doFaJoqxMTAloUJiekar%2BxmiTrcGiyeh42yhC2%2B3IPp1J2cbiqQvtS3qM4MJY0hMe1Mku%2BG3K0gIDGIrl2v%2FhgHGOBcM%2FXxF%2FMglJUMmNX3CEGKdr%2Fla7KDcQb5GNDkXKaActAUYWDsBd4505HrA&X-Amz-Signature=f27af46ed5b41932b57a4046b3d28f7accb73b158665512d39e8a61ac6b727a0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
