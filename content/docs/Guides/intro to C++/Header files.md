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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IRBY42A%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSCS3zK6ii6JpGelahyy0qTMWcuMQ0VlsAt3Oum4TaPAiAOHl%2FKNdskEgatVjpTu6YXfO07FCAaCZbnKzcNiiZF4SqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk37KTCTY7ehgfYOkKtwDtqUd3XPwoVnt9Igt1gxP1utLHtzr4yqo%2FH7Mz1Rvm0RM0xMiYcK6ACt2GFmsGWz5en7thrtwL5Gb7iz0WTj06uqWQTNx%2BO63vp%2BYGF4WvtOy7fOGQysQk%2BaNCghTfl9z%2FrRB2JHCnSPHPadNaEkxaviYlwjPo0Aspzw6Lp7r3eGl2aT6G8QuMx%2Bl703ljiwapyKkjKcK0tVpcUWVL%2FSOPMHdFA8z%2BPy4CssD1dcuHC0Ia8G4iLBtVS4by0XayJCqvHCK%2BIiu%2BvLmv9kmOC2Gc9WEYn7BK73KccOMbmdIr6Oju8jtURZN8ZU61daHCC4iw2M108QQf5vmgeASq5GukVNcd%2BUcavPH%2FNwjgWBGqG5AnkDFtdNouvqKeijAyHKbx3JiY8zXrhJIiS%2FX9DlSl08JZ85wRdXhOhl0g2C8c9JgIkYy7ofLa9eaj99mWrKWxIgl7cdsrGga%2F9xAt2vmDlVlB72MSd5On%2FoZSM5SkHGAM39z1bo4pmOZpeObCtBUsXmRUe2TmQfAwS%2B34lUUFP5ozRQLQx%2BdMtgDCeyt7IzwKPrrUWlP23jEXOBLu8zJmJbXU691IlD%2FBsRMQ8Gq%2FMcFeIdl5FbPQhtsvDROpjvC56qK4Ez6cgh2SNcw66vcwgY6pgF8i7w7Nlm92w%2F4Sr8Vnc5vMPFE5tUxaYBv%2FlYqWzGQQUOcZHSxXkTkGrDBnVPSatZpaiD475VuovHVM%2FHO0%2FpUiCc%2B%2B7GcovmoKDAlxO8gn9o3mg2qctGGvWsgXwEPo4IrO6yDqjt%2FVLczNg0opIH%2BqTmSKGbV5Z3tF6Wr9xkxbX%2Boc%2BMePzE2E2Fw7Ca5c6SaZtBta8W16j%2FrnqaZjRADCM3be9Nc&X-Amz-Signature=0c4610ceb6e0e5ee2377092601a7893ede02821d9d168155ad5f0300dd02bdc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
