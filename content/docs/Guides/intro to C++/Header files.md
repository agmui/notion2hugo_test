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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AOPRNF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHudoEbDtmEY9AIYMF9i6MoapIIYv8RCT6aIPKnhSni%2FAiEA9K9A96WzmZqxsjxt55zQjd%2BKqJVHpbrsx1qMnDLn6NEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDG0%2BvcAI433eT1Wa8yrcA2JcOOmi0BbNyAuvkhfGiGgUBROKlZRSAoc%2FxAHdd8U%2B%2BE1%2BiAyOosfacEhI6s67xgiV62%2BApga7o4U4orrEZ09cfNt75l25UPsFWt0Q9S1duyXqKmGTnqbxChRvd1xYBZPk5nUOQ%2BykxKSUNDf5RhhET%2FNzLqVbO6qgfTKMc3%2BE5WRTCwnbZv7exFKd9LJ1Ldh4VXo8tLytgwZKw2FfK1gEZS1mlBqNG5BlET8qEf0vwp1T2K8j5U2vXNAJq7h9WYoGD47JyayLWj9cUiVZn%2Fg1LOeiZyxkZODO4iKD04I1w8oViwaG7pj7tMHm8E8QBpdmUlfKSTXJ5Ws3E402zXpt9Wx9YeMljQ46CIIqED4yEnf3%2B8HcCxNNUcQjXNyVkvi6JSnq0L0e9SGZF7QcA0sr7F1dtNG%2BkI2gmUvlHFO%2FlKniUsCI6EFXMfwSBx1TkJnxnzgc8exudJ0ZB9bGhuI%2B6%2FwRGN%2BgMRoml44%2FPUdnDvCiu9FTktVQEsScfbwPo2ZZiJkGvwBTVLDIcUHNRf0pj0ZgGWkcSHJ8TJJ0f%2BFBCj%2F3m6SsL7AgDoAAEKs68dKlTdvFPCvD9fXd2V%2Bnx9ZYTjMdNxrk0Fj%2BG8aASVLGkd%2FgdGqO9XIR%2BO1CMITSz78GOqUBv4pFt4dBbXv%2BT50ZICS%2FLJVre85oEJTOBTV1fOzWN1aQ7cTgqy1VtV%2Fczni6lInaSo2V32IMJIrOfaWr5P6IQo9aboTaJXNd3LoW79u%2FfrghKZ8esDHyUyUIWYhkjyFAsZhIV3CP57r%2FjujnRYoyR94WxQO%2FKDMO%2FSt7WdImWxSzsrfac3ZgAr40K%2BiTTo1gZvG6OV92vyRhUi8%2FTpFsUvfKZ0eX&X-Amz-Signature=ef0b4b2cdc5c2a9ce86b1567e2fd8cdc39aeb4708192cdaf8538321d22d5e513&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
