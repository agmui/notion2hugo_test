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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLLZXYOF%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChp%2FeCiw%2BzpoRCbTtZ4UJctJvqzlGE52mkHC85tT2nRgIgEz829pPwDGGfU0%2Fw9asflVF5TH4kTHepmkMdhLQNdfUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKoYtpdEKwaQm3Sr7yrcA3jxa0L3nlvRcsXPKWhzeoitVvnHeraQXmPm9ffKRFJuOhsZ5Z9MVWUhgLoplVt6caDsy%2BOivVQk7kelI8dlgyr9D71X0gkSVQvo9LPRUYfrZdn6VkWbptywWdZBy6f%2Fw1YFfxWFzz0dxncnJ2oZ6QwruHULhFMj3Asr1ZpeNq9ONBlJQ0skbLovFViaIZ4NjCqUoM7VyDO06U2hnWU5YNo2I%2BRV49TUFKtk%2BKmVyTXLAPfCQbWWMz%2FoLBA9y4eRUJqk0X0xpuaRxwSK%2BbRNH2irlpVtOS2rSvyLaYVc7rG0KfLD9ub%2FmdzWTVNhp23V1ku%2FveUq%2FCPJYxcZSdhJbAj%2F3Qt9cycHOXrjz892IDLgKd6DPjgYi8kfHusTf8A4dn1uXnw%2FrkRt%2BQIzotzcRnL3Rzq8CC6D%2BgzlYGbdeWh0DGsm8aDxmHolHX7WAIAMDsErwbdO1QdMrPxW1%2BMADf4lGhUH3S2YmBU9o%2Bg47%2BPTP0aFTRRcuFB%2FkHtZrekGscTcwHoGLpYKivlJJ%2BLKjMPSUlbu%2FTY93vUzBLq0uE5HnIO7tGE0m1SKj8JB18NZ5VkDoMj30HkdOPnMgGEeODI%2B8ZtbKkj6A%2BghtcgFXNBKPVOBt%2BaIZT3BnNXHMISDvsAGOqUBDQoraJAAPIfA%2BMnyl9XO676mwTkfe1X3Re5o3tDYlKRNDvDHu%2FisMMBt%2B85aPpo1OVWs986klJHf0cY7KDspZ%2FYtETM14AYeB4%2ByrE8h1cCmQB5Ttrn4RgiW1GW4tgtlxjsV4St1vkXkzRjFrupQFn2OhGSdgQviV%2B5ameR0fzdRrWBqOeuoVftNiBIwzmny7%2FtFx9sX6j%2FfBYpZOMgNd56u0Yk9&X-Amz-Signature=1ab243578400f3d45880556717a0d91e1812dc48acbe42d375f65f154005ea21&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
