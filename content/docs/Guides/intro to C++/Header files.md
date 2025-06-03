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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W7IUYMX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDV61XIalRcW5a8OXCwKDA9EE1PYK6q%2BT6DJv3gl7bSXwIhAPZc9r27Qfx4YMItd%2FCnu7QtidbDxHy9dNBAbzY0LmcFKv8DCBwQABoMNjM3NDIzMTgzODA1Igw8gWi5GOGo7z89IVUq3AONhAmVNJUPb3nvU5kxzPM71zV6EVB0uwXLjv73I%2BNkVGeHq6EXXBEHzkstbqXuR%2FdJ59%2Fe67yHEFnOICrglHxD%2Fd5V%2F%2BjAmSMSKpGvAqivUeJyTu9y1Q4iO8FOU%2BSgI13nUEr20SvMU7Wh9s9zXaeEl82nOgAOtwoOeFdKhtvXom4Zg3EqY7AFs6a3QhAecCCbFQ4W7A%2BmAJ7m00h%2FRU7epSP5hWSB6zRd1eDrygIHFkiS%2Ftot4QFCOfZKz0HTu0CVHcA3H3s2b5OMb6cxrPLDzcvnJP%2FfESh36erHcEZmugv4FJUXAdvT0N7tQiNThAq0vOSE741sBfvVauzIK8t3Ko14UhylYW41KaJZNCO%2Br1HovfNARr6y%2BRpPyc1lLY2afb4QpOrQ%2FFAR%2FXcHi8hglo7%2Fw%2FDkb6MLSlth6uV7aH75EoDoWJMpZUyLrz5BWcrWyrYTeWqbVnTYIX0oq1YpYCeAYsnx%2Bwnn2QRuDggM0s%2FeY4A1GX%2FvE9neJHYRFxUleQUzWoMqW85PkWinH22yuESvzAZ6Q52V0ndvuzdH0vLrWavqOfLAUaCuVrZlr3o%2BTqobjIMxcGqfarjnxR2C7l3wNq4g10fhY6htAId6dyXHvFLW689kpb13QDCChv3BBjqkAcpBVRUNtexkRFsPgkk0qfgIv3%2Bj3%2FHTtZsAIgi%2BSWBpzituTfkdrQbz3v5v%2FiSKmvgk%2BzAkQxlXtNtvJeHSsnVsV2%2Bis%2FWbtWEFbHCPH%2FnQSXlFwaa%2BnA5ZnBRJ7UgzoWG7c0gOAzcs5GPXbBxYGcOReF0Wo7Llut7wsyFmuFpzsg4WwT%2FgIoQHh6%2Btj0Xeg2%2FRKLH0F61dcVbs%2Fhy%2BJVad1nKn&X-Amz-Signature=b0486f0bf3081e7c4046b82d61e8d233208dfd41017753b6994ea11c274aaaff&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
