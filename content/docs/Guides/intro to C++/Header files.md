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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMYAKW5I%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAP5BRln8xGF%2BJHeQPxPJShLKF3zkS8izjyOOdV3fOb7AiBYy9px0J%2BhcoRY12X9ZXI40weT8B2nyIrqnCT%2F2%2BzB6ir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMStcqSTUuQjPt2r%2BoKtwDUcaWOydp24nadj5U2eZ%2BydZWLgfl%2F3dy0ZNq76PdcRu4bd%2FuIB%2FYfcfsHKcxRZjmqw1x%2B1m7UCSxTyw%2BsDuj2KF6AC3BC5oHbBv1Ap4eHutGufuLEI9JcvimyntuK9C%2BopUkeLFDUTM5sBzXYWdNzu3J4BIIbO8qOSCmpUjjKoMNyyk40HMogNm9dgsvzIwqiSAJAiO4bblt0Fhd1t9K5LKax85OmaavMd05w3TN35P6dRl9saZENVnMrtFHuQPbpojZodp%2BKYUuaUsTagZpMNLWT2L%2FIP%2BerudzHNIfn8PCekoqxIL05NYDXDf5U0pJYN%2F2zJ6qPWrmU334ZbSAuNsoq0M%2BslLVtMWfWFD1JyXMTLbm4GqEGekBr7l0SRgQKDW3EbwBb2jCvYNaeW5X4Qp1%2FtidjmTFplWywbJn7L8QMiyjqUp3mxZjW6Ef2we6YtXztTqU1EoiHGUANUELiXIQ72hVzmVdLiZIgv4KPqYWOOzX5mHgTecbyfeqdVpNUwDBdt8Hlwedka3t6Nm1mxZjba2Hy%2ByaYh1Y%2B1hT%2BeJW0lD6RcZc6euo8kki%2F5zcCdkeWGNyHGzN3pbVBaNH3JNHPaJknTij6shxl57KIr%2F3Oiy3RLLH%2BDEbluow8pXlvgY6pgHUtl9%2FCD%2BqXcRw1KYPMRP1GBmWMjETVHDxJFrMuH1PlURCKwdZprsVpyzQqG8chGJ138dtvhfcf%2B2WmyUK86vmIS2NaoDb%2B0m3%2FPoiSpRgL6RodPY4i6og717rXAWwhFSPyLs4AohfrBis%2FkCW9rwlQNciz%2BAGXMW3uKz20qsdZfET%2BWhPhK1iV45ETmp9KT9GAjCU0bLtioZ9Zymm%2BN7N8c7awnhI&X-Amz-Signature=8fcaa14d3a2b151acaa1afb183cc9eb8216e48ded25ac83c085c62424bdc477a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
