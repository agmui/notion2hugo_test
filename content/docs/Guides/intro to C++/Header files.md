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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSG24FMY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGy4lrEsKyK%2BFAx89tHSKey56f%2FzrpkCkhOC2yklSF8VAiEAleoUs63enHt35vvx7pgjR9Z3ZpOkMaiYbOPZimz3TuAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHJ6f8tHfQ5DgoFI1ircA2wo4L%2FF4wQ8gYXb1vY%2Bhc36t32h8IOMCs1M7LsdgQ3u2KNCbVUk4ajQM2htb69BABAzXYMOh5BuOuL0rpwqv0k%2FR78QRwPxP96zb50CzRivxvdBZYTqzXpLgqmX%2BmJ0UpZBAC31kp3ZivC9R%2FUvKP6nCwFZx0w9sphCYh7myqsdEHbfQLxzzWNgeN1psAB%2BEVWo2cF3SzM%2FwywcdhgHY1FPKfmOHtWpL2vDeCYbtX0HVnfm5O0z%2F3AnJIqmvvY3xChrnTspIl1uKqmjpWYlD8WJ8gx8yfMOAehlZolysosREYUUw21vGcUxXe7nx01k6hg3km6bj1qjeThe4iESIubQwEV%2BS5cU2JUTsUmkts9ekvrl6Vl1SCGdUWu0i6MoVMD%2FBb7qxBCQvRSK2%2BfkdMhlleKFHF7Rf%2Fe6DuVbz8EkyBy%2FxQxL6fKwfd9kbksNtGVQukJSfllJqeza%2BPyjI9e9cCv2YWM1vsZGZRAx7wHDC70MpIDSN79hQKeEzP3xBmN8%2BaV5b0sPA73amAKH3%2FghzY5M9Aoh%2F1IhuC5pj0jWzsLE6vp5op0%2BinMBkmyeuJm7XCHnGTEb9fXMmznNF8GWeMq116w5rv%2BX%2F8BziKIMlNcRP1N8HsORmZ7BMInkysEGOqUBJao2LwosI5CDQm67oCHta5sxwHO2orbmCMxRK2WNBNjNmRA%2BYOCQs6a%2FEbHxeBqiNqBC9sJppPW43FlQ8B6vcg0YcOw%2FFzdaR9hbL6%2BBCWf3Loz2PITJ1Bvcj3zQh2JM7dcdRrHgpozd9aJKTSHY2cS9tMG%2F4VZK7p5HxoYNnv73AYWTacRlPFnipFNk0oPhMyi5Ny6NXxvQwDRMWY3DUQtHEqXg&X-Amz-Signature=af1fe3e2637732a590b371faa0ba1bb5e3b43759aef218f2156153aedb24c247&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
