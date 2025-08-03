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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYUSHGLP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHB%2BdJHNqGJF8VgYoQ2TVWcfwCjWPeVFnH0XBGAsvd5cAiEAlSCngLj%2FSXsLj3zmpvevy7FotSpQjENoyQwu4VALMeMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDItXE%2BydQrPaOm%2FRfyrcA6Dx7yMDxhGcQmRgYVo51iWdjeRlABs0WEP9uOuZXNi7ZVPhqaVf4Yzl17GKLUAnSie6As6OMJlUyCBCt%2F4cl7NTze6ll3nevpqpDinPHQ4aKDJC8Ds9r1mn9bcew57zbpOGUNy9CIhO43W%2Bwx47cWy0fPUly0zlaWoy0Sq4aYMrGnogXzr2p9iBPyGZDx6Jn8XWz%2BL6XtnZ13re0QmAo9M8%2Bm9HlyrX3XV%2BaCkhfkgXBrnt94f2GdJhdBnYdxRq2u24KLsjBhXvzR4FDA2mHQqlUjDZvCpKe76YOXatK%2F9sPrRkPPuuWrrXZvaPmRTB%2BfLfobdz7%2FQUKUzUlS0XnCsi9%2FGZ4Y0OxWP78GUIvCvvNC8oh2Yy4AfevkQ7KPuD8IuvG%2Bu0NwElbe%2BSdDi%2Fn5XgJmvZD0BDB74qX9JthVy7RxuO09dwkS1YHY7czQHq4AtZtnqXuXbPZ4uMHbWpgtJA%2F2pk7PIt82Dp9V6dQ4lqDf3LpFi%2BQSNroSvsr6deonJS%2BLZRd6dhBZtTtCsg5q7u7bu%2FydcCO8JRJNGH46WpMbLn8CDdrdpFzmlb5WXauqEMurN8GuWKIBNMQPRUVpDkfL7r2PTYPlTqbCyw0z3KxZZDdcKm47Y3OQrPMLm6vMQGOqUBG1If5dVF2jsQIyL2acEKgn5YoGWH0SO8dWE5iC1FvQJtYc%2BR10TEF5DlcxUpQ%2FFlBaGPnKIlM8Nn1ouVJeFyCzxE1YvnDTZGFysN4klRQnsCzwf6OgqdYMlLWoXsW2R%2Ba3VznlSkM4PUEB6mPZppjs2QPq6Aw%2BUV%2FV%2Fd4kbFHEpGN%2BBafFlN8TwSufXsSXwReH8Abz6Lv7BftM7ko6BFT4w7sztX&X-Amz-Signature=721a35f1274a037a4660ead48702b1c6ccd63b09add041f63e882ae698018f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
