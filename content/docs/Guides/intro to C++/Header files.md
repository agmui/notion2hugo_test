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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7N7VJY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsmvNAKcCnW1O1ujxKM5ybC8r2nbLSdaZqPHxqyu4VrAiEAm6YfNYZpgTNB21xCPHK4ny9%2FY%2BubBW6xj0aeqyUzqN0qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHhFKCDQPaUOmqbTDyrcA4X%2B%2Fz5HXDqWAphxLcPkvduSZ1c109CDADXZz4pJNbGRZxl789c5eCfa5n2HwzxDy3%2F5Voff6lyzrRkb0pmLa0GSvmMe9%2BW4WQtPMQH%2FS5QXeUpl%2BqWle80U3AmlHVwML4W%2FNyPrPvKGfZM8Dnn6mg7XfnBxulnJV50iinDm5lfNk%2Bob7L6lCbiHLEegxUKX9BG4%2FJmt%2FQ16%2BHgJKQm1wY%2BqNd3BddQekoG56hLdrCBp957vKHR0G%2FNwCwAcMkDfaN6GEMxPc7BJolpJAAhP%2FabnRgqNUnxJm8pPg9d%2Byu3Bk8EYyGglBPRUaoxdDH5KZ4c9Qv5ClxbOaULCvoXlKKhla3EnrGKiFkdeBQ%2Fla4RIwVUVkuP3NWhYn2kSjvTin88B4o%2BxynlmV9Y05LAthxkK4qb%2FWd%2FuWIe0Fi4YSCS%2FvTIVrunItxHm7U31kdDYPmM60cydXjFDTskkXFjEsvcUNS3sHoERTK1qbIY5a3jgmGgsA9LRsY%2FYeJnZ8I6aHAm%2FtYEa%2BYwQpXtolE6eJ7oyAd1%2B1EXXftq9%2FuA4PLDJQP3N2MJ9%2F5GBAJqAQ2IaZlCuadk4ifhuoGGPNq0NUWSaDMzz%2FNOWW9YdZ0hE1mvH7m4xu5JctHwpOftUMIiG6L0GOqUBXsAl4j6QZq3ZMdt7LYn9mOqq2O6tbS6mdqqT9E2gbXgfN1MZZN63xKtInhDBLZftx65jTHLs%2B6K%2FDsb8y841yX34MCXxurFrXylCBCeL09eDN%2FhpeB0dGGPpvfoKmgV3LwGIdazB2HzPDkEs2v2zmW2hUub9oUtW9ZTNSJDNxCHtgqiEkbxZYSd3Zpeo3x%2FrgyFGF7mGtmGdWyw87JsiKtQKO%2FOi&X-Amz-Signature=206d6a2f7a9cc35577e9668f4d8f5259405042797b90f7697d43054e4bad0ae7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
