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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC2ROHPQ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTp75EhXgPL2T9Jvtg%2BO3DpuEEuP4k27%2BqVRQy6Exd9wIgNnFmERKnWMd1ePkh%2BL9UAQfXhKw7QDiVYZiN5XeNmM4qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMFQQnYKG7ZWSPSuyrcA7KFh8yDc5Gi43N2jWtv04MTkZnFd%2FXEt8YenxsNr30ZlsJZFkSy5POGKn5%2BBbJC8P%2FkcMU5uArbXFlqyvC9yvi%2Ft2PRSMbrp5GFtZF87jsOMUCMkzRs%2FE4ZGpHGLqUB%2FPjNbUO24dwuxNd%2B%2Fksa8kLKnWuOvLZTw4u6E7SapupIz30jaP8wRNI5UScIWq1L6aOJddRhgKrAXDdA05KzKXDgl0qcukW%2B024VVH9VJ94WQSzYZgF4nn9NY5EzY94MYfLZrGnT37g5nGwZmcPoLxKh9nOAPk1gpiRn6ljF8BZTQRuedw2IqNvpSuPA1GlcR6axdnJ4%2FcE3bNXJXisn1mKeltnisbcjRkujWBOAz0dNVh8ZVzqadnRgtPMzca%2BWhQQ9SLlysnqUVGIO7BDgoY1NgKtpBe%2BST6U2iwQro1z34ePaTAB0IluDEJVxXI21sfyHBfzRiW9mqjOC5uHTrS3G8AmL9fVr3Ng2r6%2FY1zZwE6bc6ufeNt0MFNtcQOqdc9tvAmrGHAQ8EKDJEgjejp1KHvO5BlB5b8GStuglHWepz2iTeajNxvGtglxhFvKqGfsHLBIB2hFTTriJ81zXzma3x781x%2FzUpyUsnlMZJTN%2FDHtQSEMZYsgOIvC9ML2DxsMGOqUBmHQJUHUYQPfhvbyC49T8j8Q50HdNyndbPDhCqO1UkSghr%2FkqeX196ZGrzbAAJqF5By8tiuR93JpcGBT5U20zwmfx1YFXpTQcTU65E5EVgWTOkSe83XFwcbmZXTdTZFoNxFO5o6PimVUZRAlMwHaIayTM1q12UOD1KpgbmACthrTHJ8DUkD9H2iIaKIpdWSbUgLOeIkc8vRaE8htlDEcoRgFu0Zxu&X-Amz-Signature=44765f7c295fe14e98aa7f1fd3d5b42e52fab7fd36a004433487be509897b426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
