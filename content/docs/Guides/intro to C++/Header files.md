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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AAT6CC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICEFlVGn8i9AnSKCGjBoYnupCKLTpRm8Ju0ap%2BSSG1MWAiA7ryZ0Wywbqx1KztdcK0moeRid7PvTl5eaIbhoRgT69ir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMn7RG2dl%2BtTiNIDLDKtwDC9nGSpwfYOxSq4X%2FgZfyAZAnVLaBiPpgxy0Nr6EUAPU258UB4gGSN5cPWrd4OLFcfTAMIVzB8epBLcCduMUsf34Yya%2FL73fhGEdm9OW5gWbZuv45QjfCafODj5S2v6%2BGjt94BNFNSMONBlgPe3glE4ObbebX%2BuaAh6Vo5w49AdolyrmbJvHnTplsjPTCrXtWO%2Fn%2FiG4H3OzR%2B1iChK8djLvFRdETcVWhNX3ZGw%2BV7A2jTDWkK6tDbnkAveI564ZJqhCvam8Ec9qeKyhNeE9DKDVh6Z9izb6B8d9Cv%2FA7ExglT%2BbhDffMHyqJMEOWkHNeQfz05vU3QLfe0%2FY3HkCV6eSZ%2B%2BmtQF8108%2FZN8Nb%2BeEdXJOJZaJ5mTGiw08l0bBWY0KzlZFNvFvs9JGnSzhdv0L8rh4x%2FYsr%2FjtDO79VUljYyiR33ePe5FmaeGNbl%2BowpJs43WaQKWFrmzs%2FXSj4vvHowNGwF000Xc%2BI28nIY%2B0fygGRltd%2BBIW6yeL%2FA93EPkjKbbVy86w2tbWVxM45abUt3jm5Tv9Uw4DoYY29WxYFa437qePZsjlEAmKhG787iR1QhleuDYFB531ihtqGWr8Zlen92OdBxb3hcaFXm0VrO3uVHM%2FSjLaaQs4w1%2F3FvQY6pgFKvxm19aguPH1qyVk7IQbwaQk8gj0FKxmmDm9q37TO%2F6OVqwOXR82Wm4r40HkyeCcd%2BSpmzr99xmEhkr3ZsIYmKkNwJqcYT0e1wjflFc0U23ubR8NSMz4PpZNsGRz4Zdt5rDmus9unAyFESfMumZhELpMdR8tNMAlf%2FbGzUORkQzKOHyqCG9lJtuRnQR%2Bn8XRuO1wwM0pjWh4c1t1jHdDR3lLNaBEV&X-Amz-Signature=c9365f0c338126ea62880de03e0950628605d35fcacb95c7e3e4e2f5c472856b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
