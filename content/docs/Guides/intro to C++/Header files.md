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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUNEEFZB%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHhnv%2FMBcAbBRpXWJcu3HHNcH6KdCUvGQbT79%2BpktULgIhAM2TdFj4kRtZB0ig%2Floa8P3Hhk6OzmBcVcnwStlTE%2BL1Kv8DCFwQABoMNjM3NDIzMTgzODA1IgysExPkRXn4e6X2cgkq3ANUr10XzBi09iSc0FvdfGsyJ%2FWbVrmNdRb%2BLwcTOFCSHulFOfgzuNksGZ918P2Kk5wJKbIJ4wzGduEXS%2BAKYxAIU7imxX0YKjEJpHufZOfAMR7ERj321zhh4t%2BACtEIZnlNa51pds%2FT5exVxNsJOnd7lun%2BYq7L4DnntdCvM5V5BMOxxdyR5EsbGOHNc4y4nvsLozrV8JfclpOzhDYB5OqYbK8ySGKdDmSX1dJnYJbYF8VGdkk%2Boi3deAHsV8yet4fVOjYOFenoHU8VrepZ2GYFtlnoQjX%2BZhNe2kZCPRXdvzaRj0LeGqQJF0GJQKxRD6rxk34Uy1dJW0YkTxD8dw0L7q65ccl4xwZg9qPfLVXT%2BrIG379hkOnaltoT7hhKuC2qhN%2Fdhf5QYUygSxPB9a7ozQCoj4ek%2BRGJKiPenB4Nxrjtf%2BSmmVIso4p5tmB2gDcKjQx0lS82N1VcN3P3D%2FL0WnYc2L9gFANUb9KPX8HigeZlwb%2FyK7vwDUKcJAqttEPCaRpEecYX4BE%2F5Dox19vnCm1i%2B4KeF%2B8N1mff0lqyFM8Hk8GVGS%2BoynSu1LfQCCFl3VfQkCZXKKPrKmValjrWnk1sN%2FiYlzfGlT312dxAL2pCxv1pV74FMAtBazD%2Bi7jABjqkASF6mgk7zVtb1bzSwqif1pTLzG4J0JEO8gd%2BFCN3Sg3yx2C5pWzAicFWbHtuRWWcRs8mfNOfOG6tIQl4iMED6Db%2Big1U06%2Bmbvo9hnrrq%2BIUSx5zI%2FvruUhNhSnXzbejZI9IfhKNw3g1%2FSQ48SL5jrcfuTiId9o2TLJ8epuPIy11n4D8klrP91cq7GZSa12%2BtrTmtzDRDamyxtobBM%2BEEOwDrraL&X-Amz-Signature=12e61445d8597f8eb1c79ebff9c54b3cbca208148850af2afded3e9822ebad34&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
