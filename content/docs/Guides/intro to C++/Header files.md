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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR4UXXZ6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8TqibTxgYGt7MD%2FocDgjpQteMpykA98VCAZNMfL6B%2FAiEA3pHuEhLIP6v8VuBCwbk%2FrG86358ExYZpwslpFJYpVrcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiF1JZPhIpH3u4RTircA4bLu9T5%2FfM4hf3Pkh8pF81ElYa5JylWfUfVB5iYRjrx05e1DdGyGfTIBgC4bZ1Z20uUlicpdnn%2FYgVBzu1kozv31nsyosPLJQf0Z9%2FoPVK9ATPOHFjU%2Fb3phLcUkb1G%2FPt4Zzvlx3dNvwCTk86ZXUHAsS%2BAegNmBKBDV7Lcj%2FUG9v0XrEopLh63wcjtlneRD26Me2JTcezGPqYtRYgFsKObLJXUFAc%2BmAUpdJW5o47uI6ABanF4zuzf%2Fvr3mGcsyHPKwKH5KUEI%2BfnTx%2FrNB1RIEL5lEd0rc3%2BV8gA1j8uze1J33uCujomCk9qOaut%2BittKMJDaiEp%2Fka2Eh7Fkx%2FISCdY4zEVAW1NknHwrfJ9hyxfJqPYf1YiWqQHCPZN6l8agp3884V0W7DIOGjH0s3U7gM4XdsRih8AO0Aq%2FqUs4fH%2FtBopDEPZFAT%2FEHsnvazpGpTZEQOu%2F1qqvINWcFOkeJun4uXggwlrmSqQ41tj5%2Fg1rsSUGlo%2FfXrsruNDMlGu%2FK6yslQwAZ8zZdrRCOgvMR08cSqojR5UQr4eUBbic%2B5OJSuU7FSNE51uXbAGc3DxiiZVPTyiE1V2iEYulGnJPyHyV2BuYScU6NN%2Fmsfi5b7dwVksmNvskSeAZMOGd5cQGOqUBlN4DGwTyXigUDh6DyVbIbQqbrbtfTZWscLEzvurWRG2TMJfHvd1sBUv2YHGM7AT11Cmage9s451v%2FSoCDvoJvrVifDxElaAGI12XaLkA6SqoN1KAxNo%2F4XrlDgjHRiPMLAn2Wk7S1QS5hzqTSYtgUlnwpSARRYV9JaNF84o1YoQ5hBKd0DxU09lmHtZp5QxrBJD5x6XLfIDjNUUZ9K3sNtRVYr%2Bt&X-Amz-Signature=212026c33c118174dd5b3a6438ac9608396257561e58ee5ab5449c50cd5943d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
