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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AJQ5YVR%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIEtEDukfzDrVnqFFEqHfQ%2FU3uFVvRcNn%2FywDVwHSZlI4AiEAkGorp0CjTfjbhMmr2J7z%2BzV7C%2B0dC0ot8vzn9SWqi04qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0iO%2F1HkvlfyyDt2ircAzwWgbeSziYFxM8n%2BytXu5Cwh%2BXj2gabfSaELR0Jsrs90OeBpO4%2BeA3XSGscYYZnhi1eN0JdVl2jukCrwh4DbbXm9rPrRmKArJakND6a3ZZX332ssvQ1Y1BvvbUDEPKpAVHWS2TfI5DRl%2FoZ%2FB5QZqILExNjzvjHCcWZdjjzEjNAN7toaIpO6RgQfC4TtrUtaIsa6yjyiPFKkCuCxsuuuG50iq7uujsuRy7S0H%2FxLIhkRuWAy4jpELGvz8E25ujxwLsRx4U4BJIEX5K%2BObJ628dc53Z18OxBEec8UXGkR3tacI8ejaZOKMiXzSXimkTwIZoQY%2BWo2VlbTUOpEGA4knr%2F5ohuC353gMls5BTYMuDGwA1iIIaI01w3xhUV3mg09T2qCfo0eA6l%2F4Ad1LrdjDQUvibeJ8yTk4ngOQIp2JRypiDBfcW7oc0vkuAuLKdpJw6Uz%2FkadHVnRr0UYlcbmvgJAu%2BbtjZR7j8JJLohlmdg37LMfqGCr9FMAQCxlRIiFTPTSWoZZk69Yl2goyBCZOycY4zZndR4Spslt3Hc1tO770s1ETwoefBNI6ShajcaekxRzwbtFNz4gTw2Hdiik%2Brf7KAcqZlIRXb6lZxXzKbIb1TzWxGyBWOnV1a%2BMKDH7r4GOqUBSjHAOWkUOEmARRELF1wE172PglBAoNNFpSC%2BTMfL8U3HwPFKSaEGhNjpwtI1RH8ggHUyf4NB8xcdvsBrXAmapjSvy9dDTDzBjNRad42pUwiU%2BPkn7RmUNiUS9FqgLAVM1ljhFZQAvUhXuXPsM3nM2elsfuTjsqUJYCZbN1rgP7EPWiIdR6vY15xPuDOd3u28ex5xnUJ%2BDVKznIs7XJT3XlUvgxy6&X-Amz-Signature=a78ae75c22ea0be07f8979216d09af5d647e1fbef5b41c866e24af5c2a44a7c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
