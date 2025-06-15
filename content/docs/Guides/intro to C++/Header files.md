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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673A2EKHK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFINHQtDB76buCWsvBU6pTMJSE0lLW3pf9%2BslMyALGKkAiEAtBddJb8473DA5g5LbWcbdBOBlrvGTVUIR8kFBs0aCHcq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDAC24RSOVN8MYZ6UbyrcAx17OJ8iBlHQoEuXOlCyJ5vMXz%2FH1ifFddTQb3Yrw6tQJ3Rx5P2CHHE4GNYEt4mXx0n0GeEUh8INc4TQnUv5rNKJOprhwIArkHq%2Ba7vc160vyjD9DLIJuB9sj%2B3wTY5fM1xIdq%2BeltcAnQAYgutvLmgaacijTVgfLuYXVXUoYRv%2Bdm7cblqy55UOG0Am5uQe8JM8bMK%2Bul1Jma2Lm2gK47Hc86MH4wWCzrHOthORRkAakurelttyD9jQRbb9K4R6f67fXyiUEWw676t6o4Qnluo954hnXjlc32kzOHU36bp824yERsxEBDghTUCx2y%2BJNUKtlfjH2XOhCM3RZPXZzaRQ%2FlWq93RP6DzN4icTrI%2B8ML2ciiBRh42pRHiUx41ViWM8ehdbgCxSK4u%2BoLj8lwDq4ip9OLRj1Et3d90mx%2FIZVl9nefonxJzsnZcMAuRTVJTmlu7xQJs3kPqNGI1s0AgS5LtYXgdf9GNBLx9F%2B%2BYlIfNCkE%2BNTIX6SDY64Rn5gsem8XjdKxUrbaucjcIBC32z%2B2oXslOoSd4RXbBD3NKR4XntcpDTHCQwBqld8lfWfX6Kr%2FxzZmZtV96OnenEi5i2nO2LMvpWEJNZNzwHHFiTynQFTaTMQFm8LUiXMLHOvMIGOqUBHtSFvdg%2FFcMxZKD5q%2Fx7Srg6NZ7oU1NmI06q2IiV0x%2Bjj4Cu3wXrxkl%2FsN%2BT9rppEppAn0uY7JEimyiRO7sJsU0DsqmDxkk66KO6aouXLUwNLSYI4oNRyjsICzpeUsxtmo3JfoRKw0vvbS41GGmh7H9mph9N343V0EXPq%2BDSusyxvvPvzV93G0iAmOT38ITF3uI9pRJAe2r%2FGVgjc8389oVY%2BgEb&X-Amz-Signature=19e137b2339181dd6d647001906daeaabe05d91b9ab69d8d440013320917affb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
