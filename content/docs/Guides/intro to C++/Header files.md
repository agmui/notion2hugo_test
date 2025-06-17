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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA5F2F6E%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmeT0H3tdJCjwMnZ5aDQ38yde4g%2FWCbpKievexK50jgQIhAKOy1C5nOvMHR5X11arX2YFPWxZLsQY4OkM%2FGpP4%2FVUiKv8DCGsQABoMNjM3NDIzMTgzODA1IgyCdTmseghuzMZm7OIq3APpbrWDawt3vnho6SHXp5%2FiP9VVzmJhSm93Q07SJxBfH6%2B2rfQtO%2B7LbOOvCCuUJDCsADSgCvlzyWHKXBzm246p4GAXGsh%2F3cWBPMeGfcyspVsfozmUQgGZBA5%2F0RzaoNs98GBHolJ1T8rrF0DHuV8IovYKuvsz142Hd6jpC0TmLGPACpyGdTaklyCfmdQMHJExf6BE699%2BGcwP8CAm3B0iH6QWyhr00OOTMKatNjsvWE9O6CyZz7TzxVpYHziImpPrbFjSjU4SwpP%2FlXUd37jiVuSSScMboTcnjuOlptnN9tOYpxSOstAX0XkjydBne0NE1AE%2FMzAAd0AfF4s1mYLlokdTHlwKpIaKKbHaKH%2B0FSjkZj1iAwA0ZtTRvDIncaroGs7O26lGJioggXPVFcMc9uDvO8NA2Qb7uKhQ52HhqsZOkceJbT9zjpu9FIevzvx6EDFHT52G6qGWb7tvPMF0K%2FwYz58YgnywYeBWDAvZCQCo9mf6r8O5N4lLs%2B8LzACZOh3IrzZOAi0%2BOmHCyJ%2FoTbPwe0%2FDN3vG74dxTBWXAnzFFzv4WhqBGg4LRiip69x5g83u8WPqVeY9E3Q6gNL7M90C1oOublDOiLDDNYUYZgcYaDahVoWvTr%2BGqTDQi8PCBjqkAUfYflpQw62vrXAPF1vNBcd2d69bOSSjQpHWEYPBoMg82xvmlqC4AZcTuFfhgiJIkD0lpegWdZeCtP4jbYj033kfoSywr10bB0vl56NrDHsrTMoCg2BNvGo%2FGrR5fKgZIRE7YzdFzScYYwPqn67uuZlrOesGspH4q%2B16EOTWptsAM9oNaJIMxIjjPoSBA%2BAoukSjOurX1lJguufKoVm8QNsqBOkF&X-Amz-Signature=2c4fba5faade1c13fd5bd2ef9857c6b00db223bb539517f27a546607347e4138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
