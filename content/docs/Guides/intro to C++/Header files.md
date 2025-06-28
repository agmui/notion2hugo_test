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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6I76CUN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHV0XfHEDwD1uI3M4W0B4gXZii9IUYSeuIxMVo3HPTwqAiEA8K4BlkL0DjnpizK3j2ZMP%2FEof5u0SQtw%2FJL42pZP00EqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoiCQ6HIOZmJW8ZgyrcAzzcHPN0EWy8uzY1OBfUrda2syh1sJuL6FeUc0AWPmijQmXAPDkFo1vRgOq8is03QfXcchNMW%2F19Ta1wNApWpUmZxQULtXbXFgjmb38Is22bqi%2BelAqDWE7gQQpTbcetvajNtsFGewZxOuVBtK%2FZ8CIbVttSDrh0C9Q660Qh2ix7El3oRuqdOw0bmoIRiB%2BUle3HV9UigmcI%2BjvjHVokoy33MSdzex8fkTY8zUzW4G7GsiIPJr7TZbl8rgUYG0EjJzrCzi3w17aDN9ttx3Y0mqIzKV%2Bewgt%2Fy0kM6RUpYCQre7tvxJUTqUgj3dJcmjW9TsgJHDFlFMX86lWmQCVDJO%2BjXbha83pCrlS8k0FZ5VX66LvPFY1Vn9qzpRMfiEb2ODZ4L8tRGsQKZi3l%2BwluyiJYXw0XBRQHLE0CQs29ll146EdhjJzlHXY%2BnOMX8BBin%2FM8KfwwKfhvbTuk3kyRdQz8xfPeGNW5TbyZ4RTVkS9xkqDbr9%2B2Y8qiXut7H2GVN%2BSPD3DKoaRGG%2FEGs%2BHAgJLCmzC8uAXEA%2Bfvzj7niUySfDqJgD1s3rhy3%2F8lAap7KkzeANyMUj%2FSTdPvHnN93p5YPtkgMUl1vCqetOPJdy9En1O6JF4HV2oIoNFUMNH0gMMGOqUBkC0zSu4%2F2DgUM1%2BN%2F0avHjLrpG5rNLUda6P6LUHiNwegRMbFwdeKDPNCp9kOqZlCxze0lQd2HHe6SmhXwJg8o6d8yFOEcNLYp6AX3nmgIfNLP9PrkWWCJHmvH9XEw9Q69pe2L%2BthhCOuGs6O8cXAPBWAtt49b45W%2BBaFFZHjCTCySin2y9UN4qfIYEkxU4rxVHnyV88%2FzgIjkKYFIFgUx6wsMw5E&X-Amz-Signature=fd8371e9eeccfb2a7e3a453cfd7133a1fc9237aa64aff0dfb5bc869b16147dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
