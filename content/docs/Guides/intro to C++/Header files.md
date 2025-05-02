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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSH7TFH5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCo7%2FfYFdxFh9y5spi09boZZ0OsDgyRt7nwYnGIQKxCrwIhAPAy1ZdLeaVCJLMckPhxaN8XW8NVIHaM%2Bs2ifT4R2E6dKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwn%2FmUUD1RzzlPDLRQq3APlpZdH8bx8MsdEVhuWo5gY2cIRGZcdz3fHk6Iz09Tu9PI%2FcpKCDtmZ4tDFyZw%2F13f0d25NBN6fOz%2BIO4fTvrfR5OTrIMJCWzWbVczoJiUpJ7mw5gCaiquLL5uSRUAB%2FeluhxVev4VAWf9tHnKSWQcF0bdVp1h9kb9fIXVZM11tNwlToymnDPm98IbZdtAP97q502MTyc8kkQZxEzzuJjkdNN6OMtvwVOe1l4BuBySdX3DMi8T9QVG%2B8PgZdKWflCkBY19zuoLfnUSj9roaDgIbnV3ZqYeH%2BVDh1WW0yw35itlMTRLM%2BUNmVc4Efl1jQPiF1x5qXUpGjkom%2BawUAUk7luAO4BjetVde16747cyg8DbWXe0bogJVQTVIEKABRmvKzqAScR2www0ygsQnWostXlRuw%2B%2F9O1AB8HUUezNqxvj9U%2B%2Fayf2VRu%2FJkJIblzTvmr1%2FoK5PPim7BogtGidTXNWCWMWC1g3nj6UhqHiIn%2BTegUdEk8mr8R8Nyta9am3FGImR8gsghPU1RSBoUYKlxjMxPuKPA%2BtABHB%2BY10KGsHyvacAAY9DY9pUYPC7n0yrvJjlcdpVKlplfGwlYT4%2FBwaX%2B8Nre7nXRF9l1r%2BeZC4dfXBRsy4HY5lJADD%2FiNXABjqkAYZCvq9%2FzYCHQ0MrfuOpEBJlke00FQ7Bc2%2Fy0o%2FHvJdrysvkK7MyECVq0DC7uwvWSNvJ%2B7oBs2Sfre7abtkBVBAIeZ0tMZ7Mvg2wHpdq%2Fh5zz1f9dwq2V2rYp5PHFTMITtjHjb1YDTaCIwQ28ZSb9d5qMp43DqQBGkG9SivExudIOQgzEIQojJvOx%2F8csXe3%2FxA3SGUE8NewmXtrDYObtthfYtpR&X-Amz-Signature=6807e109921434dcad4db75652e00f49a335a9111ca2d7988d900429da67e63e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
