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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYL4B2QM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAutZIuFcb4T6j7dywEbOXKoUUtVP3Arz6nTrfF7IBhOAiA96o2LuY6O86IqLfaZi242vrU4FJD0QlNL2Du0AX1twSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM1NCaKt4L%2FKYLKY7xKtwDhDxX%2FXknooAMDxDuZMM5c6map%2BTJwXjpJ996xVQamJyxl3u5Sumg6t4qBfCq5mdmKcBXlSyOMobWUuzsFUcmPv5VMMJG%2FyRn2qbrUdnJ1d88Iy03n1AeI%2FjzjaYAuqxu0TyV%2FbR1gcJnuKL5vSCFVHS5IjtgBy3Ble0U05I93Bsu9PeU4q3BDy8ykBuOebzZIt8enCWBLfLeJw4oxL9xUqz1nX8X5QmvETX2v%2BtDv%2BMcezYerXf10WkzaTskeZmrW4mVo24DXjYOfpCbsyfvoqaLhdz%2FoV%2BTJ9nmKdhiiBYKOHaIvARJkgxSteofQsFNCwX3WIG%2BonCErZmVw0Gor7xlZP3Rnf56Gjt%2FMnDjDtvi3OImaUQidOYewSuv3oqyuSRfZMNdJvOodfcY%2F5MEEO6lfMo%2FaurfhXxCNy2QqvEBCAEBSyGXhqtxRk%2FjdjL%2F%2BZnNAr9Gfw23AkJFsh797cG5Yyp6rYTSefjJ8pEFbCJJPGvlJ3pO9AbLWNL4%2F7kjE9Fe%2F8AyAOZPVmXTLVHRU0A8JkMg0t7%2BdcMKqWREKkrmv2vTJk2cltYdm%2Fwbp5XUPSqUFsPlIFM7KJTdjGL%2F4Lhtvj%2F0GdjVDNHqpNmUoOgHPlAWy5RWAdDaJusw9s7gwAY6pgGZgKFUUAI3VDmIIcTD4lt131wDt3fdBuZH7iqRRZBrf%2BupzL1gfJpLRgx75tYYjlT9cxQWJSXbURUnWnGOoQUlrZxTW2U%2FAZ%2FcOGOd%2BhCUHzxeiecO3v6NPdpcbYzKuDSzpyoENg5K5P3nEGAr8jrQorkkwTw%2BT4%2BQcNNbdm4mHNvu0rGDaFpcQQ2vEyAiHWN%2BLqgnayjEYtKL9uBW4X2gth6OpF%2BL&X-Amz-Signature=4f8743cbcb7b0ec77796c4109d9ca63e9dc44eb0b7923c7f0fbb8de7a71eb6d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
