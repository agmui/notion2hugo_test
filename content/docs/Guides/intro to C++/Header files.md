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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R3ISWI4%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BhVnBOqp9XNTgRazQMetoZF363pKMZHugjx5%2FE4JGSgIgK2Rh5qUUE%2B1twr6u%2BVtbiORGamG%2F3nC3B%2F3YHgph9RkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbTovqJMtuC%2Ba9gKCrcA3KotCjBlSkfUlJ%2FWsXIppTb2eOGKfLqdfHigvZogbIY3aenS21WI7K7wk%2FGSlN3Bxe%2FsXQ%2BscmmYClk9QGeKO%2Fm%2Fj%2BQUmXM1EiOMwu0wNklpu4k907DlnRCdh0mL7SPjjh5oBowjpDvRcAc1ZIDMKqRERDkJVOdDUdy5fa3N4mYB8xO3VTBTjkRYv6%2FEM%2BoldTX%2FFcCmOFU3axOJJpwsqQatxmC2%2FOMA8%2FGXTi%2Bbv5zbB63qOFEdBqq1GcYJENhYtZDTMQlOum7kSxXH25hn2JfxVS59OfGBR7nZ8bf0qrwpiE4LvXOnWVNElbFlkNC1RcVLbTWcqy8Q0ss3iohM8mQB6lA2pQszetis%2Fy6wT1zpRCp3ILJBQp00ls1sdJIYUzKc%2BUjMN4DtLyBNVlY%2FbOJlZN3%2FwMrAo9wZZ0mUN0pVXHMhmTGS77XE3eKC5dKHLwZvEdWszmPiD2LSUve9rTf6CpGGZlIQg2%2BsgIurmXCkkM1Oh%2FmbI9By0cVA48isa1Srzy5vSCrN1RTvM%2BFyyyADK%2BsKN%2BcCURJxk%2BEePXwPrFVaqt7S9MnP%2BR9qmZ8OweekaooU1mnioxwTvh6lp5turYUOc5zOtF10NHpcRQ87gB%2BXs02atfc6RyzMIrYjMAGOqUBat52%2FIRIOtbsBao6ixFHCmEvNSUJcwf0cNsjCuWqI8lXCzn%2FlsO7Uz%2Bsl14vPOLA5UEioypUTjQrGL%2ByxInlQb2bDfUO%2FKNmaccIkToe1KJycogAvxijqv4lT1mBqbThMxz01R%2FkL6qvB82BoRFLdteZ4nxADU9Fi7Z26eMWlU2GoPo8cQRVvRgZk5f7tTxJGhG0UI8uThVZIULj3AmBHQT%2FJbPH&X-Amz-Signature=55794a686172c22b5f508c46e2d7b88ee9ccc3d0157724870830bb134803b22a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
