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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46QIGGT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLVXFOymxgASA9CSbeC4yyrSnJlt00WOK7sQAeYcZhYQIhAProoX%2F%2BvkQBoi9yVGXtALAKHkeU7EUXfT3guERam58PKv8DCGoQABoMNjM3NDIzMTgzODA1IgzD5SHkky%2BeZ%2B698A4q3APIuy6nuu5Wxvp4pdyC9aHgOoxNGiM37tbZJ0PjfKnLWy3OR1QPxtHUJA5KwcH1SSCjTKLl%2FzOdMzTuVXO1XJ7qG%2FXCKrRNFdOorHkyxNPMqkVSropKhGOGEZ9JyDZ2b61lJb96j%2FQMEo%2BOss5Ce48rgv1rVsiyULdbeq6j5sByLkFW29R7WTbMq2DwyKeXFmmGTEGT2siQA8FDymQml8kEWtXTFhvUJIoKwChXTDW9h90Tq6d4KefSLbdZjFNqdsAremChy7bNXrCYVma2mcYzt3gpb3NS536HiOHQl1TVkuT3nt%2BMTuJXONtr36dfYYgeQrjsY8H74z2%2FwgePj0%2BQpWXQAEKDnTjY3tXuTLOJNyWRK5g5nD9csOnOcxLalrGepJ8H9jqyp5XnKSFe1Q5R11%2Fg9duUS48%2Bw8URqSxX3QLfqrLCHQ5vFNvH5zzyZMtMab6%2Btih751aVSbPWKvO6fCSM9NKthXtOxcwRu5c6rdEvbGqqxuO9%2BM1yimb%2B0Tr1l79nUjcp8ZLbAgxq7NZrJIQJuDkDAnD7N95XvwyIwLV%2FOAOQk9fVMRPhzoPyRd7Z87fnAQb9cAaKaYs5yAfEacMDpByevp2uer3ZUjLt2lg%2FxxyaXmwocMiCzjCgvYbABjqkAXyOlZKuRQRiQtdacGB54Af10bLA2Yd1RF%2FV2nR4iZINu7zjjHtbSp%2F%2F5e7rFmceFTWz0MnnVZr022t1Y7%2Bz0Gt3tTp%2B7jk8lg5Fp0%2BQSwNGh01ht1RpzxPXGr6IB1GwQyBbwXdxEY6FDkRk3nO0NPGL1cB6Rpa8yWi1lW%2FvGpjyjm%2BBjp224OUQo1mdE%2FoEQiy9XYmb%2FPjXl5m3G0uAANnbWSwW&X-Amz-Signature=81a6d3d322b87ca97f3e59b74e7636991f5c551afc19df695a724a208b17e09b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
