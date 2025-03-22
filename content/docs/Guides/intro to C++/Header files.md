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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4D36UFD%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDr8rb85gAk7IwuoNkWc1c3vhERbvnmRy12j8k0YVm%2FmwIgadiCuSp4yuTY9pTMfluzZUb%2FDjmFE8zdjoqKqeGYS%2FwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbMIU2K1vRlMPHdPSrcA1Kll3hf8m0KUPwE3FqFORK5%2BlHad4b0cbjcjWuo8l%2FXZlqcKbrTh7ErI8Ywbu5FmoxdGTYHnfX5A442LDpPC4mAGOLu1M%2FtQl2pkbX30%2B5xPeyZVTGyHcSrzEYHHLhYh%2FstLjtpdqcCr7I%2FPg4GZ%2F5Yzsmo2iu%2BGLzFNzgge2ZHkI4QwHbaz%2B0v%2BX4ysvv0OoCpLXXahpJC68hbdCaXDPKQiyt6mcDJTYP76jjmSMVmzbUA%2BRXpTtNsH8ZXmS0v9RkDFqQmyFn8Qy1KI2HD0Rt0dnuINLsSwq9jNJTaaUh5y2AKM%2FcQfSPCssyVMdYFbwOzf3KumFRjRli7ZxH3pwqsJwUWsKTL7rnKeAsoybtU2Pxt%2FNMcbKsl9Uvbdib6Od2xRCvBCgbh0Bi2vKLAQZ%2B57pJAPuiTCzYI0l0FTsYIbUb%2F3d%2Fs8kKlfmtQqKLlcOA4avcT8YjkfEpvHa7SdMUU2c1m3B7PWKCZxI3oRPjaiEQTYxmlqPtO3DrLGG0gRmy9n84Ev5kBgTDl8IrO5cwyTHc0s9%2BS2YBXtY8DH4qYDzBf7k36yPfPA3rTwJFV%2Fkk3ihzWXNRCx0STdL63WZbCt13EPKe1A3LompEYTGf3OnK1ZJAyItAOsXb9MJu2%2FL4GOqUBXHu2L5OGO%2FJGuvSF8U3H54cjw2LLS%2Fx8YWNXKb82p3GfyapDlusjxXTXJxcC%2Bsxsu3L6mMtww8sOSYptm1%2FW6lk6UqcaPvqsUNgjE1nu%2BN7DcYamX70S78hGODzuU7kpLxJ0rlBR4m5PWuryfrdQRpkGUlOwgCYMArCC5Y1zRzebTuYRk%2BGhoQk0utr2qKDFQjMp1Onj83pl%2FclVhMSjJmxaP6%2Fp&X-Amz-Signature=fe20a195a8a476087c0910c8ed24a159a3bf9de7369c43d42dab2ea39b8854c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
