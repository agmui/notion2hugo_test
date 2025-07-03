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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFFQB22%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCiDIkXQCnOwV%2BR9zok1SgGe5a8e%2B9SgNIGvjiU2vaNwwIgeIr9yuHqadbh7ZxoqgNpv%2B%2B%2B5Y8usnuCLfrT%2BJk8U5Uq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDKotLtyEPc6PxtZu0yrcAwEgpLokEB9CgPn7gjwsZRqYOdg5rFVlgz7HBda5y2Zm%2B%2BOjZRe%2B3qKck1W2O%2FH3%2FembRqdEzDB8sqIzTgP3qh8EDOuWmNL1K2JoEHT4yO6SWdG%2FPwPpuwXh54u5R6OfD01Ui2bBLcYNcQzcAfMVo1XSXGDU%2BFMLh7T%2Fo6zB48cx4aGQwy0UHLrc%2B9yAkuc5lksxWBnnXtmnLXfFlDfsCK9UxFjuWuBFYdMmIqJEfOxXkncIjXgwzxs8v%2Fpcwx5DulFaeXd4AMHaZO%2B5Z5nkBHTyMbWYZOJiqKX3dSSQvxNKUINTbV2S0EBnkO48v6bdFeZrAAwY3JpUhS8vKFzI8vpQa6v3v6D6ZfFjcoeDW1BEmG0A5clx8ONmkYsjbiSa%2B%2FtRSjpOTdtWYe7yWWZi3v4YEk3klbbwVa8FCBo6dPkJDchOhoHEebAgW2aPJMIK14Jx0o6ampDc2PZ6p36mnm1uGvinE8uuTHiS6dLlD9w9reyf3QGegI%2BBzDTOgCfcC1egrGTb8Ti6%2FzMHozpd2y6gkux2EqoHiqkbAvRVdsBfcB2OX1jwcGzK8GDXenJhsNGUPEKt3MLu%2Fhe%2FLDB5qwpw1yr%2FJVcyMnAsOjto%2BfPsevLD2WmOTEOJHKfVMIqOmsMGOqUBKuE6HmafTur1lvLvITicQWF%2Fk%2BOJyGN%2Fq9ejZFz0XM4e1zMyd3N9uBYH3w03cAENZaG0vqRebH7trEvbFLH36TTAnYuuRGwRJnq%2B89%2BCxfyqRwwSJXShgXHhgnqBIyXwWfEdxJOuUqPTsh77cxTXTPJEPs6ZMpmD%2Blcmin6RvQpQ4%2FBglko29FzpnEuzcwl8akNeDKYxT5npGopRtbX4slb1jthc&X-Amz-Signature=eb4194cef85fc05d3f32c0eda066b695abfa55c519c38c41931c58490463ef23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
