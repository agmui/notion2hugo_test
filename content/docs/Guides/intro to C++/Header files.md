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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TTUIKL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6zBdMtsN%2BHnC8ce7gt5vqInHxoVvo5vWEYlObBiplqgIgYoEs1Wlaf1U9m3UYxVcYserAr5FcAp4DocTCpiStt0QqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBBUqrVvdxEgXVR0CrcA1osB4WeqXHBrDSZG9JfEOJP%2FVOP26q3l45r%2FcRkE8SUkgs34kX8HK%2FFfg1RtW5TX7Bi402wIkaBFvd50OEc1cDIPLnwnndNBLCk5V63%2BjPI6jUlElzKXfZ6%2F%2BOvmJCO3AEK2GWri3iwmfigqLd5Poi%2BK3kyGZcOllTWadUkVfTgQVdn%2FjvgdHYL%2BKaabrfZ59mFOcpGs3WTkNlWeFvwmMX0nNtb%2FcAH6BOEiJSszlHbslnocsxzeUPZZylVX%2BfCOWhCoWoPt7FoV6tn2Ev07bekd5YCGFeFMM85lDd3GH%2BSOj4kRE%2BoXHgDnOWxJF0qUffFiNyNr63fjyMxFcO%2FwohDJOC%2FLcCAOGwZCKRL2kWxRHIz97punOT75fjuDb%2B55pABBGTE%2F3U6trlsooT0QGeC2Fwd1KSCAtfjxeyCTnz41BqGEsrzA%2FmzwYvlmUiVosuFENoAfa7xW2XYzb195ADJsMW9GyYZBiSae5jwtn2ERs4XLAUiner%2F7LGqBt6VaiZErFYM0Vm5dd43JVuFUP4JY1pOJ%2F%2FlpERJDaMWtbqSnixnGNmo05XpU02v8OzJd4CMOLAtCvmKAt9%2FTde7RrGiBCX5%2BrAe0QvfJ8su1ygucMmoj2931%2FxhIY7JMKv9lb4GOqUBtju%2FH7EUcutm6o5qrn%2Fy7V2dGbkocMjiVwlBUJCptdeAWtlRyYhsF2khs1VjLoT5%2Bl7WpZ%2FjPh69l%2FhvNmza8sT4Y2Tf0ilvJG96QpfvUtQP3LCKsSbXROz02yEchnait1RwwN4EcT51X58uGgeAF5COc%2FarXypNHS8qnJiasMUTSvjqjfFuN3ppQPcMEslLa40em2v3J1SNUzaWTENcJMUDc%2BgC&X-Amz-Signature=bd7134b2cb732cbb6efc28e54307c1adc367cdff115dc62f2ab1494ba0ce2aac&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
