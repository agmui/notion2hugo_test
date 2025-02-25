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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI7GZDPK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCq9QRFwydlsZd7mlFcxOkBEYFOed342PLa5PYKI2elqwIhAIpTA9gWfyWH7%2BaXJMsct5QL2EuhVPze4Tjf1vahLLXZKv8DCEEQABoMNjM3NDIzMTgzODA1Igx19Z%2BsMavg92v648Qq3APsSj9yTutZPDG02u0g7ZHKjGF1eIaQjKDwEuaPc1ObQ99S7ShbNpuGT5lHsT2%2FvvC6ofVY0F%2FJYIWTf6neXbST10LTEFZoHGwSjsBa8y8L5BiN%2BdXtgspVgb5UTv%2FXSyq3Th0s8vC%2B%2FX%2Bg%2FjJ84WtST1eh7F8KZWnYMFav2qC2CJp3vMgTHwiOsk%2FPlV36pMODS%2BXzuAoiFChZnlkyU1nvX5hXSyo2UKhEjb%2BxLS3%2FGkHjNpZ8HxKqI6nli8DrpByXBkIic%2B5u1oF59Fd%2F1kGBc1SbixeBCl7yg8saBE8knAdDTGqHmeJypbd5Ccosq74TrkZtLm1pALg5bIqK5RTfgz2Hs2lIt53ZGcnx7tH2ChhduiFNkwY1kn9nU7%2BnWnbhELBIGjOhmS1in5ZEbOnkzfJYynJ5gFeloQG46ymcvZTgm6LXjoAgopaR6hugzmDu79wu4mq6eJbAqnNZ1ZeHTStYsoW51T%2FXYsaUO9j3kutoG23pwCpGunFhmAvT2pBF5jzRU3iuIKy%2FoXI3khrK9HWmyrQV8OhDGguOC5QvXrDIwaN31tbBYtyk0sigqFg572hKEo%2BjthHwcWZoHT5lh%2F428etROQp0eo1w7QUraMvZKnzhIocWVyu0bTDM6PW9BjqkAanLwS3AUdhc0FBhliMh68FJVuUKNA86V%2FhUH8HQvkZ7VlASWIUBILGDQhkRosKbvgq357x5aHAvBEQI58aYugcl6HdMZdAAaCjVFKWdzx9jSbx83YnJbX0S1MvdHRXNVH9y42%2FzW%2FhGOwQIIVYbEeADIssMZQX%2BBsVoNEUveDcGb%2FQg%2Bgpj2AS9xVIB22ERt6TJJTZ4%2FLPaErwC9b%2Bjw1vNI8ks&X-Amz-Signature=89797fd11824ff33e2c4dc8501c13993279603d82f3d1f1fdf3331e7ad9c2950&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
