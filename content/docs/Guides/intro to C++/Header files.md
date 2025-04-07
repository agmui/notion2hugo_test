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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6SOXIY%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqcp%2Fgv248inmuCf6gKM9iToYURXkmGeIEqIUvmIBdhAIhAJ840EPsgy%2FdBYYilPB1dI1pY71dWpBfDD7ZKn9ZdW61Kv8DCGMQABoMNjM3NDIzMTgzODA1IgyAUo3Y5CqqKGK3C%2BYq3AOO90HxcPrBJZEK1BcReFGkOTknr%2Bq8JJM3UFg278gS%2F2ecHimn%2FaskJIEjIt4ptubVGDDSPiNWUzTKHz2ArxI2F%2B69unJB09%2FgGHT9L%2FPTb21gAvGUAQEGg9NltqVGv%2BfDtt0k8GWp%2Fz9plmVffZ4kvWgsGA3HrehtDyPIbYlKV1ZUG1CQQIxnDs6zaJRm6p5eOaIkHdf%2BFQJCVpMJUPB0sVBtxcjQ1cIqBYJeVef9%2FYfUrKs3TSEoTZWtLpeT9MeMOdRtZu%2BKmc66tMGSO%2BH%2Fgw8gYFGbAwg1npRWb%2Fb%2FhDYlkbw3%2BB%2BYhQxF%2BKP0mvOv9x9wRqZsDgjeqjWYh%2FjmeFkyOsPCAm1zkS81wA8snA0zlQcrByJ8DDZtpThksSpNkjJBgaHZmwAnlTpFxA5gOTJ1%2Fyx3fUHzQPFXOyb%2BhQ%2FbKcGo6ojcvEP16syvqYG7bfEurGF%2BssbS9XY68sInWIrT1dv%2B6%2BKV1OZ49IRsSEDok7U9rjLZWUXEva5OYYQGLjuFKX8%2FXciTytOf4qhV0hbdaIBfDwqLbZSoU9yjd5ZtKxSyKiUsgNUrCTNWyRFQaKte1IfJQMd2dvul1ZvkpujjNtT7lKJBmE5xGuzUqomyBHSlPFu2fsZllzCIpNC%2FBjqkAXvFyYE1AKB6whSOhFS1O46Nqq%2FFzMKYQkKYgWGvJPY7yCggynSpz%2FsbuP5m0c%2BcAZoUgAKEXhzQyP63LTkpe4b%2B%2B5EO4WfjZu1u8dwurRuWxlvadlK4pxAo%2FwAQnGlYJ6T9fwPqy0sOO7fUiQ8ROTS3x8r1AEPTvF%2FL%2FzUzcaqvUIFtGNhsyfXrt9SgabQPNp2n%2FZSCEZZQeDIiLhiF3iMgKujg&X-Amz-Signature=50df69ecb073ad3ef76cb1d9a9f55393d41db6fc591fbccd3f245f177fdd8ec7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
