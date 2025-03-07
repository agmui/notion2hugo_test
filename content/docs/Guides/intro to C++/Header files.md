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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZXCDP4G%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFgRLoDuEqC%2B3dQ0rfMZRTKrM4uUpWUQBLRA4aPsSd2rAiABby%2Bby%2FntFG5GLdJ63Ja9re2MXquImk5qroZrbhPMRSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMAs8lnEIEWtMcOr2LKtwDWcv155BjShIPnUmJkwhiOJnOvvCwbdCG9B%2BA0y6Dl71am%2FeKJclQ10XpHZzvHhw8wG0ENzvzW1FF7yUlhd4kFGNOcaVXhi5tx4GOfbl26MQyjqioPtYGjvMAPb3XEOCt08JyIIFPaNgvOijvllVEbZrH5H7tdySLT%2FY1%2FzPYlPanTWMjyXvpjRb2%2BOALbG3DqrlTl1oyp%2BqjrQT14VYdZdEGD0BLcPTvMy%2Bpmx6qsTxTpB1bsRa1aMpm75ao%2Bjcwpq%2FF32SPBi7V3vgsQKQTjoXag8JFR0AWMu2UgFtwP3d5L8%2BID7mmO0jWSh91WaLszNPwx%2BdYyc1NPiH5UtXx5OB8CGFQBdmhFqgnfxcQbJQ7cAPfIX3Ed9Bs40g3%2BCVrIM0hB2lUCeGgJyY3BwT5ldSJJWubPk8sxOidWgHp0hkDroyr2o%2FB0rJlO8Tmv4UeW4c6Jq9tBCCWdR1%2FpYPnOKb3HqR8mfVnQs%2B%2F%2F7r9SNj0yy%2F3hXqphlD2C8tNxWR%2F76nWt%2FAdqAhumP%2BuEUq1vcCsVeG6DKejBGHJIMoFDrPCBF0MS9ibETagiIhcWiKM3CV%2BnyHf5FOPVpdodwpovYaiEmgtRY%2BCiZ5pFTECiBc%2Fs2jYUizHGzSs3P8wxN%2BsvgY6pgE%2BtHIg%2BLxEfZkCMoZlyLCxoabkH5ju3l68Xd1X%2FZ4naMxStd6Jh5gv8VC2GmpvrySC61NfoS2V%2BDJhaUEuiGxP4nNh8b5SM3PPYs6HfOE0u%2F8UD6K9brQF2XeQ0LmSszTJZgVKvVc%2FapuzCh7qFQlIxedKRg6ImEqeEW36v2B3979Rzw0JG2M1TkWZklXgL%2F4kVjPqKQwxPE%2BqQ0EfrQZEhMwdHxp8&X-Amz-Signature=1466585c1fd73d391d7ae1c0f6963ea526aacfdec3b9841c24e498ef1aa456cf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
