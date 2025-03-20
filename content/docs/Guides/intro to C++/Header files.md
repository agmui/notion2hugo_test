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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEO2EQ6A%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGGCZ%2BOSJhTfvfDGIlnO%2BaF06hEhNM5wVgqyaX%2BxttkAAiBsQFLlt8UVQCCqAJXU2x6AfBzXycTy5%2F5ov4ett8FIWCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWO2RT6PgmF0XTILqKtwDjHyWQbXbamghY6%2BCA9050pE5GZFyU6FTselQ8xL2XDAwAomQ96lQI2QWNfSxta7yiQSOCnvdGIPhqCrGBaPGILeA10X0q1OIwYiDPc5E1UW%2BBthmKkyUYVSuGVqeYQuSL5zAa4ZFmivScbgm0F9dAHaYi3OjH6%2FOIafAc8lzXp83D2nd%2FT1Oq2DZiVqG9NCRoG1sQipz7iljlpa%2BKoMv5kwAY1jOiYiiRon%2FXJWQWe7XJw%2BW%2FPcWVZ6eXD93ZhB%2FnG7mSKT50YqMp1eDjEmYJpjEHPAX8ti9Hz6tsEpvqqFciRIMCc5dQd3V%2BYui6iyM%2BDIiP3chlTvEieUmHY86VdrLQ9dzaF%2Bi%2Fc5bq%2Fnu52KolTmlfx7U96%2BpoAZCPRTEqvRnHCpeI2B9dAMwMXaJRuWMZwZ%2BczUIubMrzHapdBkyRt1eIQGvJcOD5pRmwTNRL7dV8WFBZM0fDa%2Fv0B0885x%2FvmM169DUV36VGNl09D%2B%2FFP0j96lKv0vnqOP5OyokSboUkJSFCUHhkbIJdPzenGPcsDAIf9VYu40yuJ6%2Fy3C1RNdUzn7YymOT2Y%2FgMSO4mTHgCVNjgUPXU75xv2jDOO%2BAVE%2F2HTH5w%2B5A9wYn7L7ppFVl0E9egeVeZbowuKTxvgY6pgGqOiCNmQO9%2FFGHhLYh47FYIOA8uCCGWYJ0fAUSea%2FnknDNB%2BpC49NMP9pEiDi1i8qN0UqwVVGBOLSamc0pOmVGmkYcxC25G5vz6%2B9As5%2B9FCe19flwrbkX68dkSgZL7G0UD7pe8P8LFGqh7MvHJ2HVyiOZSZOpE1jgjZc7MuSVIPb95GqJxbNXiHlbf7leJSAXKy30OhnQnRbXRKRTXT%2F6mvbcOzcf&X-Amz-Signature=deaab5ec8aed0d1c78cc72832c23bf0c3811e82b72b6bf74d98a10c3d47c74c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
