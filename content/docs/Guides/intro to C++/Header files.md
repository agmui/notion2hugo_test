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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPAHFTSM%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQD9GGhJvSJ3ggSeAmxs8lv82nqBc4u9skO3QTB1GYSzAgIhAJG5egtvI0MBxtmFLhCU8XOZa8HZYVRoS3ta7ysmBfUKKv8DCDcQABoMNjM3NDIzMTgzODA1Igz4%2FtHO0AQyjPsScRoq3ANbnbJ4pM0%2FX%2FN4%2FGapDDXMokcLpOqxyaTt3oLvsXu9fEjAqacBpAvlS0XGiWPu0FbGRC7VVJt22Ovhdh9ZLGNq8OetV9Mxgt62mw9cekzto1jHybn41N6y6HIcwDY5eecuB0HwX4iolxHRl6D2X%2Fddg5lwq7f2XNEt%2F4LhTqMN6JAjUlwBxwx4TBOsUvvN7kz740N2Av%2Bd8FgBhsZ3RiZILBNTc9IUobHt9FWWNB6CpJxefcaYz4spKXXxhoSauBOEEq%2FFTEfmQuXBxX4n%2FdSinzHFwcnEFWrwHOd25Hi0r5gTGsRJp%2FMGjXUPQjC8sAa9bA9kJkj9WzN4hoFvTylRctLu2462XSVNS41cN3SLU9hm4WFOz91TnZaBn7b84y6hzhllrKRnRopu6b50nrEGMke3tL1mh0esrApe9lbk7d0nuS2QiLjps3sSzYTEcW2prmIhUdWHjioOxyHRKNv%2FD6JRHCbf3ByNbll7Dkmw0%2FWrqQhrsGf6e43DWUZkB6Xv8VSbj3CfAF%2BTQW%2BMaWejrhWQAHPWbG37y07Y4DyXwUzfuhg1hcE6qoWadLbrD7am8cYzyLIfIVdicyhSUI%2FEjz3TOwxTKxc1HqKH3YhG0w5XMlN92uwws1y%2BHTC5uOzCBjqkAb%2Bgn%2FdBzD1v4fii8%2BPglacP%2BQKER84Dg8W1pVpc7z6Jd6jS8EStnnlPvnUYZpe%2F1guzS6t9OKgbzhbuCio4EB5gta%2BymExyUL69K3v5BSQ%2Bvf1KsPzL6wKH247D5%2B8SwKuCDyL0azxN%2FO0M6fsuL1wDcbsDt43J2RrFsOacfmeemWeEb9pWOZ4j8WxeMV93kSLcX3c%2Fe9%2Fs5HsvMfLdI7KlryFc&X-Amz-Signature=eaf6dd320108c26b9e0f2dec53a28266b1d131e2ec59243e029beae468e0119d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
