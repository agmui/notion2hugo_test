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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KLNPKA%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL0X74%2FSaG6uk%2B%2B3tAB4Gl%2B05MuoOOSDmzjT8zHiWMlAiBf2DUGz0tQ%2BvAZr8zKUStUBrYGBNyszr8chR3udNhUlyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM%2FqXriJxTJ8BfXAAuKtwDsoJ5ezi43d9%2BIlf640SoTmOwegp5rNvgYuf8U0fYbxMnEbwg1JAczbgoTps1gEmc2HaEe8Gy%2B5OGzttZJpAi5ZANg38gtlou4ihAlnY%2B46F6l7Sjvl9VhFujLmmdyBtGCkhT2RzjH3y17lAJg%2FUFsiXrvPj9PB60Zyay4jbApKfHejxUWzGU6P1T6q43I0izCoYqpHQN4sBi8uje6BTpTqUnTph1AWL8WwAt6ch3EgqdH%2BV7H%2F2dCMeGw9p9CFFkla%2BvPrnHCVZ5PgjYcZJ440exeY%2FvW%2BwIlAZswSU0kMK1kcvSHotYdojvmZgUJEX61rNl4Ub7Xcx%2FRxGko8X%2B4%2BsEazqvBvMwwKv2SnhphBDPM7jURCmq85%2Fff1r9FJfQWuOkykuzbyl8KiQN6aQJbGm5VSCK%2BhtBUTUColOe70tJU8hUtdIR2JmWy3qXaWBdAkZd4tnUu3wNeGsD1n6ZQ7LKLDD4%2BqsaBJEVRrOG1vMHc9f4zyrW74WilPgv9HwJlCpmTzN18Yb1Q9oFRQsrSYXXWnV229qsucv7PLWP4sRhaQrYvnaYg%2FCsjO8XW0smkvUb7BfVBngyA%2BhhHPMZ9tr0oOxbazbH73zWfDCPYgUl3ln3JtWa7EKM174w0rqpwAY6pgE1bmJuz9xgM0yLsYhm%2BC9De1cqdz9lRx7Biy1fbkHw%2FK9wTYlM5lxtpSlxqk7MAbf%2BWliKJBXRdXNPlnC0bfZx%2BgiS59H%2FNitdMGa9j3hxIHj57UingJ43hKukBIvhWN%2BEZgjMyiPHryrgno8gpy1O1NOACyT%2FehdL4DlOPGyfJFp1qN%2B5K407W2ndEEtdqYSVsx24G8DrD%2FTSATVKv4heCEFepcbR&X-Amz-Signature=3d4dda38d0849069551fbdea469d3c2992e2e666eeeba6f1dab9d13903771d1d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
