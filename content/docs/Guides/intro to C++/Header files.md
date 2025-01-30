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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F7F5ZXD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA05CW1Q7hofQpixZFgiT0NdEYDEdCXvRze%2FsQIVRxnAIgEqXfpL3hTMMPSjjpSekHbhmTKYaWZ78HOEb64n94nSUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiuaMku0Ju0ZJpsuCrcAy4%2FM9%2FeNb0MDvWnvg2iCNSa51P57a5VYV6dJR9JKX37VUQJAJqlg4aERkwvFD29lU8RuB9v21WHZcIS5jSuxFpDBgHD%2FmTptwNfp%2F5te837uyMqpvE7sGnTb4Q3emdHZfE7JgJnEKc9i2Irxpw8zMxaDWfdmpggk%2FmTT9m99S%2FpkCd3MXYXBqDaQxmQL3LzwkilrTkIUKO9Q1s%2BTRi7pVieF8XXL3k3bB7RKniXXEGZbStX8jH%2FwY%2FkrsFXxONSFbwNlmS0AlIhk00%2BWI6J4sgCedtCAc88EHKOVEpZZm8iQRSKsyBJii6p%2Fc8BdfklXSrWcAgbRW3vOfTLrDjhN7ZngIg4KrUSKkLXT%2F9p4SlRUP7vjxHoJNDaN1sUqxiyTewnT5imqcAm0zvTn9iNcDpVXT1OKp4kwBacGDO41uHv6ZRvOcTvGjziOSNQm2aHgODbmTxLgMMZrRHQYqoPKCXnUVMpkO4M5bx5n0s9WaMuPC5ZyW7UNLyt%2BX8bSTRM%2FrlI5%2BjlIIrZxyRrtKbAcdcRjOM5TP90TlCPkEw4K%2BQYLkGG4fR5t9CAPbby5Cy%2BLLrkwdqxC6hIrEkQr8FpW%2B3OaWbsjRSZixWRwO3V%2B3dAPI2FfyFjjZcekVa0ML2M7bwGOqUBd9QNNd%2FGwoeWidqQQqs4TCeo8oE2E3kLLW3rKAT6qMm8i3%2BCgfyLIDPszc6R6KhCQp2zKbGJXpL%2BndhNos5w4C2jGjSfVRvKA5bWlomDOntoEneauUOr2pnvEnD%2FlC7VX6excipY5p25HX33%2FzhkHHZik7LZgLDZNU%2FapI16Cn3N2GAX3X9TWjsG%2FbXBtoXCmRbrWzvjy8vgoRiZim%2BRm7aXS6wL&X-Amz-Signature=8cf3910b38481a6ab37c6dce129327f5cca561102918ef41789dc993f5382223&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
