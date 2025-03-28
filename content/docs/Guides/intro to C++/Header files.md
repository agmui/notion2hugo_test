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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTRXJZI%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRJ5%2By3Uc9gaeT%2B2LW23U0E4qw1%2F369UYeQAjsISISewIhAJWzz2OAnif5L1qhzgqa8VgyZUUUDcvg4Tg8QTr%2FXyfAKv8DCFIQABoMNjM3NDIzMTgzODA1Igx2Y0nj9Cwzj2iySnEq3AMdGVpRY10TCJ%2Bli6qBaltDx3LLL%2BpFgyifliOsExNG15OY58xZG6WdAVX5YG7jq%2FJn8cLUiG7NCiAI0KOPJIfY3DlIl3nY1AmL1yU%2B8zfEn1pN1KhYPWBVyqL6cMIPNoSsrxGy1DkSVgnK9WgwJo8vLVx0%2Bt2tOlYWYvdz8q%2BX3HKNJQk%2F0E72SHhYXgBnuyNgwdsIdNNg%2Bu9inzxgAW%2F6gogBtohw2TNyC9GPPGxGS5ZKd7q3fZUsGGILv1gzrM68Rs%2Bmnkyswa2O9XjCagk%2BsDUQj0wlN8hnLerthCMN3wXnEs%2FvhT6R7VADXxR7JfAET%2BgfM9B7GX8Cg8s7gfBM79OLsIVmHUY9IN%2B6HceBorzvuxkTWylbh5x%2Bp2JcuSkgVC3%2Foen7Z%2Bx%2B0PCX6rovUEMSgMzE36hE7uDzUpB0e8sJclpxVScIjR%2BfEpebKYQAUHgnOJ%2F5XCu9xS7oYfuHVqv9jGzDyZnAgBXeH4pyVI4ZjBBWnaRDa6LoGE5Uh8CRwC%2FMEbnyTONuYH2IEPGKTg%2BEI38mF5%2FurS70jP120Rds87d8z1TeDFZuz4rpEYOrA3dqrPMao6nqKoKjNOv%2BwSqU0u84%2FHyi%2Fwl0EVowrMOlhsaQeVsTgs5mWzC92pe%2FBjqkAXF2VdqitXFvG50q9bFCVuW3yFnbyxugbQGS2xAGY5mtX3LFFP2%2Fo2qtmc4EkVf4NMMDoIR8rs%2BIeACog%2BjPY5A39c80zXmjGuRtOliZb12DLaZZzh61fsNeRP%2BWjuHWaQMTGbQ%2BqxI3eGEnbSHtnzZhdIpaKqRtTSDoMME9T%2BYV6lFA8ux0OQK1TFm%2Fw1NtMdZ5o%2BisUDcfGB8iWlt8I8TcWqq3&X-Amz-Signature=ef1f607ace1d09faa79737a6400e6d92d8f3abbc68a476b9fcf8a973ae88e857&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
