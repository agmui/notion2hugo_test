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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3K4SJLD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8YE%2BmZmmWMLmhLz0eJzL952dUtYGcjZLmaScf4Q1M2wIgRUmTZ8NyGuihormWBGd9e7ApKktq%2FNuDK3tvzqfUSpUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYuw9gxNctbxGiDpCrcA8%2B7nOxFGn4wYfXcR8kyrMhhvyK%2FHlsks5pPTZbNeA%2B3ci6XbZKiLRyeRxacf4CK4x6sP6DN0UC2ecpJCqoqxtjvXMaL6lQV2wBwa1w1YuTIKOV5JLlYFIboU3x30TFCdYPDlOJPacdRHfrMt7x75Dj7qUe0Nvw0jmPONjQndCGTBdYlS%2BZTOKRjUpGkcVu%2FLHQiVY%2FQuSZsHci89EC3RxNd2XE83BVkpmfBuqu7Vrjl%2BZ3qc02oK%2Brtb6zuzZNk%2BnB8jTx8HRE5L0x%2B6UeX52ID0Pvw7rJrC1q0OLHB9Rv3uv2eVfVnqxHCAqedM6moli4D4DxTuZpLSJVCGCmqhQZvr2AjMXuMMj5ufN97bEvGPt3lu7GgqlmFbMCgXSVaRtoTDtrFP8oR9X2xVKahpu5jdH6HwO1Gh8tDkJWQ%2B2KtQCeW%2B6TIfmBEZJa95CsqgaaOArvaL%2Bz4PrWkl1QsfciWJre%2FN1VUFAhpjuYfk7nUfnI65eXh7P1oSGe76AVRmGW%2FOAFRo4Vzjn%2BZ8fzKsxnwbF%2BpxPYgDW1OF7p%2Biz%2BtO80T9cbpNQWmhdBCVHgO0L5dJ3eVec3oTwzDMg7KAvld3HeRPCR24JpNGKPlFLjPj0Z9nIhd5mCaDqiBMMazlsIGOqUBX%2F7fTBeDHMaCvV%2FJdFS4hG8HJcoVwqFaGbCwc10DCsdWyLLOODNOXpMNSFK9w9M37W0uO46mwvBT44lLjwSv0iF17ZB5BeuLEXiLi1Kiz2v0CxGWKfjj1qrAM0qAAYxumpXxYwJ3YNEmn4B9oY1OcgLEiNhTaPl6M%2BDKqXx0p4AV%2Bd%2BxwqMJywQUwULvdSDJ2sdvU4eR4HfPypgvOCsGBXh%2BmH1n&X-Amz-Signature=76016339d34e3f30a04b7b5c2a6bc4ccbc6b5f8a1b9b63eae198f41890918f72&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
