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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFEOYGXW%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCH9LZ7WYAvKie4O65xoT%2Fg84meQPNao3xr2YR%2FAHvSkAIgO4GdAK04bRuUEpDCjlu2PNmIPrK3eW7lp8rJPjIMs6AqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCI76YyaAdREUzVsDircA3kmLBfJqDvpYhl9IMK%2BL8BlcrW7o6jQ1E%2BRUm9ClKzoR2ITG09dCYXdEQKzk2FVGwTvV4bYOh1oReVe5X0uJI6%2BYWNEFLZEErYzMGAjDIsBQzAgMcxz77GMWI7UVuQ%2Fd9xDkmJeMaRV%2BkaxWDGxpBjf2m%2FmmeDaSFWCt4ZI%2Bg7ICBpZgxbM5xlg2k4Ztl096x9cXJCZShoR%2BlTS9hAtjiyKM8Rq685LwBQ%2Bvr%2BatP%2FsWEO3gSh3mGaN9WZl1RkRzZZ8Ja2gHpYGZNWqivuIvfAE9zNN4j0hNQhuIODXhUb2yDy1At7nbVnbRPfzTWkJMuG9RU3v3Fysmo9uK0HDLx2oWaFW5olSS7Mjk5S2%2BGuB4Av%2FRG0UDV8QoRBeWvVgAZ5uBIi46dVscN9QIfc9TZatZfRl0tId8NEaIiC04CgQjhptCrKdrtRMosFF7DKld3TNZA2ss9tkqlN0spEtcMIiXbFOaa1FFSXbRBFX6Oac3mMxYK5DHUvxoVcZm%2FEzLfwIRs2CpOIpi1Ra14NKwdiZTCLdmekrM77COO6VwUBQVJ7X8SPuZ0AVlhSbemPZRAo8GVir4IfqQA7sO9BlhKjEx%2F%2BVyesYAn4Cedcs5GtkJc88TQTwjZOmpIcPMLi25L8GOqUBdDhH9GO0xEwXyx2tEfe4WtC4xmMnnk94leAJzbPoaZYx4QSbtRSqw0KD61S8S8chQUxFapDNQNsv7nz6PJF1bRe7OG9vnnf8aqg6sng1LzKqmv6SFJ7V4Kcu1p%2FeKN1rIAZgX2E1Y2oWekGPYFJEd%2Bxgr2GGm2C0UxnQZjOXxYzOat0OONNtJHM8MnROLoUkFRgfjjK1EuN8sVLsR7px8ciCHblW&X-Amz-Signature=7910bbf61abd499f4a78f75e93b5c5d3701024403d2c3c7482a74ddfdad42b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
