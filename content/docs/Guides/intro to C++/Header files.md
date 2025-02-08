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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLPILVXM%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFtMsMv6xSnNwUY9GkZA0lwWG7IR7Bjw0gwdlKtHXs7gAiEA9p8LatFJ7xZqtJIyiHqO0Sa%2FGdXhjSP10%2BFgcqqf4IYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5UuGdV6wMOSnbbFyrcA4PZfLQF1ru3h3gp%2B%2BpmVjRqfJmzwiCVglZWsvRWXQviaqUeceGZ6entqtCzKxN878jcM9%2BO9ns7FtOZ6wYdyzm756cr8lhOj9pZYKEulz0e%2F8kkhEXdR97NjvwgmTpc3fTMvnJblkgbxQUDyLRzgd8uM4%2BNvlbX3sochoWwhMLjXn9COLMlNAoF4lxl9plXXZ9Pq46P8TcHQMbKVNaXw%2FUm%2FZv4%2FCErRvTXstbKv0jpw9A0pz9JYPEchKf%2B45tJmZJ2sJuKUWoLueOOI9A%2BzVLv3Zn%2Fx7jO8RRl5KOGBQkn356ecntXSX%2FS5P7nTsOXRGqw%2BG8onqkiwkjmt2GNUWZpkqOQayUBSTTH2BAkS94vbKYoQZkumkQjksCUREnj8nDaJeUlv6y1nF0Ilge9tSMknyifGkuZ53LB4yKHBZ5VvVIu2EfH2q1%2BXMVonjFFCimqAz68wtRPo1wVtpOtiki1GWuvYEPMHA73t2EUOeA1CMXF1dzuAgO%2FldHCK1LTrHDWVJquZkZyu45jEDvu3aCrDgrBkyRmXTkZ0kuZbQmKo1n68zxo%2FOuQxXb40eUYW0UbVKg995ghGQVYpYafGAvuBoZjy56SSvZjyN%2BrpevCCPhlgkkJuurnYl7cMM75mr0GOqUBj4zDvXeV3zHNxZP6HCtcCOC6P0QgOITMejySCw%2BxEey3pIlX9PsDd61Z4vxOz2fAfqGNoD85oVmLnqoBIdLu1gkePc7RA7zSobxt%2FXpe6L3a5LY2BFHH3KjS6DEOqA7QCNz%2FiEc%2F1qDK1V1N5w03A9txNDYEnZVb%2BPHYPB%2BEBERGQa63uD2OaJGfdrG6JFOJej%2FfTI%2BclgFmHv%2FWne%2FJJb5UIWow&X-Amz-Signature=243b8e7a74eb10c023d5ff5dc36d0f52ccc78b44a5ab41e1c14ea4e38e612666&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
