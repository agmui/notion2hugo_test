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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WSPITB6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdoiiWl7czEApQOLqcEAjmWEwzvxVPoX0MxwyhEuScYwIgQbsgPvjRu8ugAl%2Fv7LADj8gXhrvkiiEOugaRcIpQq0gq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKpWV73Uix8pF7xPKircAxpfC3A2mGdNslE9d%2FL8U4HXRmQT9Iw1sBj99DQ3dJ2K238uqcKB4Qkp49vLSCvnag6HED9WGVdHXg%2FnYNzVsT%2BzJk%2BaQNzfUEJ4g9p3sOqYRitpA7tOHMiMMTGBQ2J8Q5OPKEghoUf%2Fec4lzzKuWquTVi6rocwQCuPGi0gP23VaQNIl1aPqEwAA%2BRBDl%2Ff6ZtFD4ppEr69LM5zNXsIp24HUC8O%2BGiK0SQMGhQWuUPUzfkLAQrIVtzNxrHIe%2FZpjsF3ssYnj8rL3NkPRhY%2FDWUA9LnGp8OYyv6vwaFoe6XUx9X0RuUYfziqCCERgPvlWgmtkspF9uBJJu6f5a5Z9xAeom1uy3I2ey1UT5BRfZ%2FWrf3SQxMkldbBhmSBEDksxNlunzTTlfFUXbIyCcukWtI9r9juQ14KI4V0PWorKUUXyquChrnyA4hOe31au1e%2BvSe7LEi4QgYNDqeZLBiKiYby2MU4dBKXgaxiyqeYBsq1ebrl5OG4Adf2uranEKoq9fAJeErjs%2BxqbBWYKV%2FtGctr4SL%2BUwrdezoMGAgfmuFpFk%2B2J4X1qTkE%2BYIYDDCdCJYhlqR5638AF%2BBL3D8%2FPjXuIqGLq3j2RphSoXu0v0H1VPxLNStPhmseQivY%2FMKKitcAGOqUBMzNVSkWK2lb8bhCgbCBX4SIqDgzTOgSCJ1ZCkkS5quJSyiH0iqqEwsbKkfyPkHucD1PC29uk7Q2fo5IDYm3GkDawjac2AvmPAmpNVwAqeNd%2Fz9StpJEIb4CQoKXOq9ZOU%2Fb49vPli%2FF8snVt6jijXRHv5GTMFGtYBVS%2B85Nd2oDt8%2FQunAE%2F73cfPFW3mdBX8eTNWUEekQpBal6ehF6UogFUEPKr&X-Amz-Signature=f6ddfd9de8764decb183b86b8116fba2be625c00b1ad38d4e8d47c70c52cd699&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
