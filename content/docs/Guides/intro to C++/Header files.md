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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IAKVHHX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlsD33F5Ujn9iobCfpGzs5Z5fFTZnwxusiScEO5j%2FqwAiEAthR6M1QbuvxYegDfoN5oHVWVtJEPYMzOc1PEaeX51XgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdQ55wUp2wM7pLBxircA5v1PyMzQwn6qkLBeRlG11Tv76vFugcqofncyB0B1kepHgkSL2owDpI5EjQhqSAVOOTdRVr7t6FfGzEOqFaWhXqGVVlzh0jT6WSaNXuHTxPPiaAcq7rkkDwY%2BpjfKHUTodsofmxmv9F9WcImrOy0Xs3gxZGskdFZu0pKAjD5aqFRSWS5WGOX%2BdpSuqsh1hQvOTPRo4rNF5m9HCyUrLhjhPTAC8YV50L%2Fq3Vr07CudqluWY%2FIvG0XnPykvoXjnth5cgg0VsNAO%2BUcEknRTOKtu%2F5OSS4zQzc8ezVXaojSqSL9TXh%2FYId7A8nNODiDIu91tGOyJMPVAjycSIJMKHn31pT1sT5T5NjVHOccCoGoGBycRzyz6dD7f7t3EA331FuBsd%2FwR82brrxgftFU7gBCUj9XguaWj%2FvB2ktsQoJ6rTyOoOXxb3r0Nfv789By%2FwrqNQ2ERp1ckXdsDLOEAuCjWhmrwD9bQbc6%2FraBZyrMMc98oB2Q5grfNWguMgigQx9IkMq%2BBmi%2Fc9M2rf%2Bd6asSVzSzMlr7xqrPr0Ev5Gd112TTZrLKvU1xSXoHvDNNIp53acBcNzAaZWqfkxcDx5Q8Q%2Bf06DIqARUrNcnusOZz%2FLY3x4A68ABkdHqcg3mrMM3ZysMGOqUB1TFjNT8nArsAnPlMDY0OxBtAgnZAl4WJFOod7wT%2FQGgVZUZk7g8IhY7qUIceyB76yH1%2BH1Dgekfv9vQl4EP9z2%2FC7gTceo%2BliSnzzm7eVWR6aWF2%2F7sKunKphMdfuzWawZ%2FMeOyEhHt7Ig%2BjRy6zOfdu0pHiqQFVuoA0Y0H6YVsLooXt7bMgclzTyImpQke5mDoBhvXPTmCt1qd%2BIc2BPs%2B30zNI&X-Amz-Signature=b8b05a6c029cb503028264128d69a10622846b9c3c31ddd8952e2d85393452ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
