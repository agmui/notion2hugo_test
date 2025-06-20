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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE7G5GSA%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm3lwizFB3Rh7Y8IUK5LpyKT0mZOOk2DrycQ%2F9LxKASAiEAk%2FZJ89u%2BJhJpnghRhNjRFdkM%2BAgDMEhOYtBGzhHJ410qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLU0aAAJGl0ximjF9yrcA7YoEwSPtvFoaOzgRCWzggN1WyhVCCUwtf8%2BllQNOpnSBv1r9F1971s6RPPE%2F0FqZzTVp7it5D5iFhlzwNz4nFXSoLf8kZNZ1KI2TuXM%2FvIxS3AtWP4uPUEz5afbcGEl9PR3T5Rs8%2ByLUWqWBew5ihaGGh0X6mvqpxE5G9I3HFJtRQBXbRGgRgjR49R%2BoxpiN8gIeHjGP5TsxA3vZ1cSW31InrohlbwSZAjdPdlSyl605hL5IPyEPPssVlZihbi%2BVQxAs6ch7tO9QP8qrdnOSNHl5AVEYZEN5vOOC0GwIHheInLVVYyAByQApVKI%2Bu2iop7RlZy20iterixdiTADl8JEX9HmToD7MiMpdtvs0xSVMKfQtNLQS339wYyeQL0F%2FViAdoEQwLd6yzlNBNu9B8H%2BANQYdIXILWS393135TKBHgSh4mL1VKeJbc54yzSoLwYix1elA7wCS4hJIpL20Ys6xxlK3ZVJ1FXFML92FgzW9RTTnPl%2FezOlZQPL6jsUtd6bBAkNdd0cQXEwmeIHZXcKByAYFqOok1W3BLLkyc0hNH0EegDMdz3GQAvuRl0x%2FnPanMz1Yvf1zj3kyD7FkjOgsAtyZ0lVxzhtGXYKYDS%2Bck5YotAnnwkQ9yztMJrx1MIGOqUBa24%2B0V1p6pfosdP0UPJClYDEokRmjHHcu%2BthRpXhThIRZdy2mjY3u%2FmWZ4aWhjo7dAXP2IH7bU9ylAhU%2FSpdoOOaowFnVAhkPKgMJ51snxLn0gvqd8XLPIzJzcaiaI9Q4UijaXK6S1%2Fy%2F9raOw%2BetfUEuSyW%2FPZbHRUbYSm01rqrW6YOtjwq1ZxdJfnZb%2Fr0dWt3Czj94H24dofI7NhfI8Bf8FBr&X-Amz-Signature=598062b1ae0b10c61ae77d7c97eefbed24bf03b63161d3de380b6e810148a859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
