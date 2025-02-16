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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOFA5NA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDWJ%2B6j6Q4EA%2FnB8mQDc3desi%2FkkqWrRnSmyLxgowxK1AIhAKQj96%2BURvcAOScpqdFntFE011F6avQWvM0tiL8e51bzKv8DCFcQABoMNjM3NDIzMTgzODA1IgwGGB6mhZa3mctH974q3ANHtnJkoHG4KRgTGONzX6A33wh81BFsB067wnx7gX2upwAtDgnIAXuoMjh5hwotmJv8JEwfNS%2F7pNnu2yC2%2Fb04N2h7PsI1s84nk3OzoL5bN5xosWc%2F4pE0n6i0K6qe3QXBHggLaQQX%2F4tgrATplZaVOA%2BY3HU0aJNrW4%2BcseMzjko5Lm8sdyuxCMvE9h6b4HpwW%2F6djPBRoAfdc%2FMhdLGHwfQMTiewBHRXEf5qTMBsGLjMt8cWXEwtFydkNTZhvN12xSkoiE9wdltA%2FkmNsMk284Be7toyh2XLWW7JNNPNYJ8L9Fc2nzUq%2FTh%2BM%2BzCnIvQG5G69uUWAr5Nlo%2F46BnWjLdEXlpax6z%2BHPDWr9qb5su1dFyDqZQRJAItjmnAkWN8jn27Xua6bQ0ClSAkPcZGYyGp0T2fER80VIjWedaNoS68V9wwLumvu5u9ltvwTrdybW20ykEwmurv%2F547Ax%2FSb5dEwPsHsh8IhpDtwxNOcIbcv%2BCACVxKNY8SqvMQYaBA5Pyza%2F7GgyC9uuUTI9ig7VO%2Fs%2BrslrDA7VYYCUp9z8bMox%2BgM0PMSp7Vqr%2FchK2VTJ3eua%2Fu3%2Bbki%2B%2FMvesrmaxxFqJ3zauvCwSTMm7upYlZCXkUTaHm0NpYezCA%2FsW9BjqkAVl%2B5Yi7eeZt4F85ka9Y7NHkXBc8xidOGYAE3BilaBDY3AFZd1FmspQG35uBCkE%2F3u7vCpQEbWig5j7p89GKPSYUay3bs8Wc8f8QOhTVXw%2BJ4u%2FsdnpvaO7mRSdL5gA3nEH%2BUIAwtbiXSjbcUFAVYaFqWbsXxW6eqkcQF04tTOWhODj6tBLo4Y%2FanDFndUh3Kc%2FXvD7aDvGBmZf%2BJwJWurSxSvdP&X-Amz-Signature=8577753c1fb25a24593d624e62c1b411d19e568b58c694552225528c37a44184&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
