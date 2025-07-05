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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL2Q6RFZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIE711LRYOwuMHVaBd7y%2FqVeCPdbxQ5arTiNMxYt6h%2FNBAiBu3yyuHC0dRhrylvQ1fiBsGQyMdE3%2B9T1QLoBkpC%2BlESr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMFYWdiQztNieo%2Frr5KtwDZNNiUy5%2BEF5hSQyqeTyUzODzLLDy%2BYtbwI7QnOLA0dX61OrKN%2FaxUJgCPm%2FXsRr7%2FrkwLy2EUKuRxCYfp9DGsRtYlXDxqpZ22FYO2LQI6I%2FtWTBcPlzD%2FmRWFa3U5Kdy8NTFuw7coXLvq%2BzZy891dGfJPk3wpA4oDboM3UP%2BohApr8BgHowtFD46h4gk3JtPm5EN8WX8DARuS1SHvPNKx5fFT9CDkdNuhHs2w46lwzcAjaaYHTTYy%2ByCryIcgECxWV2vL4iw0N7x%2FAZpyeD6y%2BgXCRSaF7etN4nwT1REkkdyRgPd1uWDQgtdcm6H9R%2FMmVcQeWUraILl%2FY3Cq6SJIp%2BvUVg%2FEBO3PUsIpyaWyc2hz3%2FdZG7kTksQhaob08%2Br96DP7bzkI0YH%2FdzX%2FnQJgKZCsD5KF3KNWf4U8wtUs3U4Pw8gvRmur9mHz8AG3h6gD59BUK7ln4tw0Ed11cUIVIVE6iwIPZ1bBzKI6Z4ycO4rF5eHGw0NJminIYauCfTYcaykqsPjndhRsy9IWPzEEnqpCgf5KYVbp84tx3zMI%2BTc5qTC3kw09BVOjegsqpEvPsiBZvLcOI%2FpVwTuD%2F%2FuBwddzxIAAdSLmNABoqI8cmDmWW0QxBcnant%2ByFQw67ClwwY6pgH0dn3zxePBF3pthHnqnQB9osKbKMXWaQmPAlqkSJpwmZwqrEW4fU3cGlzFg8IdUUbOCFXmhD8%2BnHp8MF8GV9E3JOW3HfRpRtCquGdT%2FMjoKpwJXuaL5Lqo9ikI3JFxA4nVPEMWAmPbpEtFiSkjH4%2BkBrQNumsdeaM5EwtmjAwhbnVSAenPU%2FfTqdY7mYlotQ08vTo9iq8D4ebNptkxMqqoP%2BOzzdEC&X-Amz-Signature=b7d64d402133c4c04cb72e7035e777586a1bc27d04771c8042b6b42d481dee10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
