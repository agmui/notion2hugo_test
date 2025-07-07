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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OFTJVWM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDFLWLZNxxflgptYJyddpNKRTmebV1DCxZhPj0C6NYVnQIhAJ5dzssFLUvWo2yU5M9uY00U5QRT%2B8mmRPSZCO7hMWRtKv8DCHYQABoMNjM3NDIzMTgzODA1IgydOP2Xn5zN7%2BvwuQEq3AMiF2oWgA0BysTJEcVcM0GDbGiXwFVWvXOLsZ7%2B3q446ebpVUtmPC%2BS2%2FJD6iivqdUo7I8%2FVYK7eXQ8ihYpx%2B2tfkMyQkci7uzzN9QoCLygJqcZFVeetl5BI12cM%2BkS%2B%2F23MNfGqQUmBWrYndXEvrV1M8sAQlVq1XpykoTCVDaePaAS77wY%2FDYNPXxaBGGhZRKbQDAw1KEjnDoI%2Bhsall8uxK1CXwcnt8ca2SyIodGDLco7GyFIed20OK8qdiblrdH3onez%2FDM42O4qjRI2mdhQ0OyXmtrzbAYy5R%2F%2BFJiQuIUklHn25cOeokfvKEnJrWygNbtaUdbHFFSP1D%2B1t3DVRqhDZxDw5fH%2BJekW1L5jhTWLZtjZjl116voX0wkTB6w7YHPLJytbzKaHIKeXekcgmnCvVG61LxSRZqRblEj8236OAzRYZPjXwzixxy5CEOFgJywPC1KCbCAXSD23rs%2Bn%2BLGJhOoyIfhnhG%2Bj1fK01Qru%2B8160qZ8QRZAbSnzMYorGrTDvAojxEPooZOGbaoVrrhKoNrpLNyrzZlZC01vHkePUgE0OwdW1iQZ3SdtQUw2LAwtPNjXugBYBfSRm1VFVYMgX44MsWkqqQmFO3MOhsuaXUWBv9ocN%2FLjEjDHjK%2FDBjqkAUm64pX3njMhkhfJp0ob2L4nv9g5ajLnqZ4myz%2BHtqcoSdpNtRnLEay4pncjA46GI2Rg5FANWrh%2FvpnwhyXb%2BoR%2BK4y9tj3n6elhnPlF19sYB%2BLEYS37HVVdgbXFZeNXS%2F%2BXtTAR1y2cSgwXUFafPa5BOMdjoyYpVdCv8CpN%2FyvIxXPllz5qm4cOeL1vif1e5iMvPYtgN3YW6XN6d2Z78Oj%2FG0dR&X-Amz-Signature=ab0eddf315c513dec2d9656f0020bf2673bd38a031b0ec47d52468721f70580d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
