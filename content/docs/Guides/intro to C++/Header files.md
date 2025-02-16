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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GIYBYJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEfVNVvv5PknTT4T8D%2FpbQpbSVF36jJqaBPI0QCToE0ZAiEAqothvxy27mf8JNZzzVu%2F%2Bwb5YFIgl%2BlhuZKTFi7PuNoq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPqa1SbF%2BV3eWeJD9SrcA1TTSMNH%2FDpRCWUdkdUqNZSzobQf2T3ZQOWF5N5JMAmdhqiUmDdbbvYZ1IDBr2l82cHRccm5MTgWqazjmWwUChtupLb8D4FZIL2agv7RDUiQZfvqGbUHzhfNg8zistbOLLWc3%2Bdpd8J6bP%2FIJOx2PBWz5seKD7ed1zzanS4eqsOyjarNjo%2B%2BteR7BwABoUOh0g9Iv%2B8IK%2FLejDgvH%2BThxrPol466AjsNOGuO%2BdeJSgdmxVPmCqGH%2FFfoj0Yy8zKOpg5A813IOCemsv7wSLFRWHhG7ZY%2FseEPyijwo2NUWaYYUpi%2B9tmlL9inhpNhvR6VV0ZZ3OSD4k1NWUJJAwFwec%2FT721lDmHsNfTT0n%2FSZun9UkIR%2BRK5%2B8fEdXBlRdmmHMGzjTXtwvX%2BEIyYGXIOEQCgPAs3kiWuK4IB5JyfKalYFr1YUBuMS2EPjsApkk0BLIQqy58oNWB8o8tXLKn1lfF2P4Fpm2B%2BppOSrmPaonJrTHsumfVX3i6cuX%2FKzH%2F4hSzekzhKCEnboJb9zz5Vd4QVqjKFlboOSeY2q2rUM93n9G5tByX8zhR%2BymzxbQ08FsiMHcC9OyRKd3N2snfPCJv85oacQ%2B3NNRhyHxBymDcSRK9QTj84Va46XlwJMLOIyb0GOqUBdfdXKIxFG5XRB4Rez0TpxYtqtbH4DTc5%2B5TwxQsNVnV1D3Eoo%2FDofVaZQ3Deht69fjbXXCM0AHegxXo3t8kfQWb7QPEcguBWHm3Pm%2B1ySPddV%2FRayVPYBok2CEsC71dGmoUv%2FFvXqfjNuiZgV9azTUWM1LD06W448xGXWTimGm5COPCyq4M2yLT8S7shr01CaVH3QY737BIXlreoF9dflOXaBCSM&X-Amz-Signature=acf25f1c4e59619c0f91e19e6bc7cb0fc8ad28d74d924eb886c62ff794634279&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
