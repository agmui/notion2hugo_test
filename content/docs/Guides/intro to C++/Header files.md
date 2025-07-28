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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSH7VGOC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBLQ6DRg2wtaEN1EXev8Tsj3tohpnfNUYQX1tOq5RJh1AiA7BkcKk3c9sjm8keYCiQzXhK4TQUuFxRdVzRrNFMcAZCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM71bD%2B%2BpL03lG3XhAKtwDBQUW3%2B1cgSc%2FT9D9x1IDZfE%2FT13f5OV323zTkeXkKR%2FZK1ry1PWKNBo1axCCL6QfJ%2Br3oAN3ZEkKaxI4IPxiF8tNVM1Mlqyha6kFasYJmVxgqTgApEPaOiO2PHA0pHi%2FQDzaNz6syb9soGr4oHaddxhTW%2BjtlRc9yqqEjwlI7IZM0bbb4aY1G0eqkowrMVC95L8zEAfubuxPMywppQ%2Fb%2Fwm9oOZFCIihCoRm%2BL%2B7L5Po0k6ZXz0lpSQyos%2BJlZ6sbpNRsyErnBs7FZsUBck8qMPsuNX57LWxco3jA1EJw3JVCZMjX1lecOKgcmPqGQYCkORpvIAbCcYLkOthKx%2BWGL36Hc7q%2BiS8uBNKQQOWMELyvM4gsOHuxIiNbvjRBnBX7SmNBtxLWGTcrM1XVZ7uapxLwXU%2B%2BeIr6cxUyFgBITELCwNODJgLutrixoh255odmDhckRgJhughP%2Fm5w3%2Fi9xlEZzcXZZQCaw0I3Bt%2BfpqskPhv36XDXdcXsGiO0qccs4XXGK%2B%2F7KhpYOKwiU%2B0OYqtFwgHozk3GJEX7OAmwRpw%2FsxM0cqwEjzKyhpCA1fnousZTbZkw7thnR9wy2WMPE%2BXDnIXh0rHl5vjYPdK5EhztiI%2F83Evsdk8h0MwsPydxAY6pgFMgE%2FMQ2aAQquDDle1QK7hY87Qd%2BzDRkFTBYWtpzcdHOKB84fPQiVMZpRawWxf8hE0BM%2FCc%2FyH7OO%2FlVZ4YOM3nKe4FITX68L9NKyZO8nvftvOD9tI17%2FLK6T9a2bknM6R9DhzAnTztXwMQaKx8W7wdoYHZtTB2maNuNExe9BLJYFvOOyGMTOzPJWQbF1FUonkf8iJ3bWVaqtdIrfI4I6%2BmaxTdPDM&X-Amz-Signature=aad8233aaf32cc4b36019c075edfac537e12976efd1fe0e384e2a703a3542e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
