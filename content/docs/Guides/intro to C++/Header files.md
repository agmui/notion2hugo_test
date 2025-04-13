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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQITZDY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDXywkO67ARJqGiyooSf%2FJL%2FRmqbau0etwDinUWzySxywIgfA4czlojKRa3%2B3mfdES1iOl%2Fabg%2BtM%2Bi0F4L7v9awpIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNA84EPlSyvHKFuRqCrcA3NEoJA%2FBAA8UmaJA3aehqz5iQdWZIzlJeHROcuLpdTLTNFVROupo2RxqIcxPBIbE7maewnuEZiHvpoD0LVup%2FRwBSaZ1x0SYGo8A3HbNuW2Kr5WEcuEWRdgw4f0GX1tnK%2FEghw8%2FBS6wDb3vpVDQxXFwNFHzlkA1e23evYBfpRtNBd%2FiiEUbXPvZyW2cAy%2FpU2XGcy2TgYiX9BvIMrBCY%2FNWNejzCQIT%2BVPEYTyzkzCTizkJU8TZiNQpFva0TzZgdi%2BJ65rE%2F%2BL62YxLRVVb%2BtYSGV0ZdKRVkKtlemAcs8EeAhD6CsINJKIPdUJdXEUuz3pUt%2FzQU7Ot%2FXHwOHkINvxKmk0t%2F9Dq4GsZhGlJAeIH%2F1UyoAIOwIwcEcKUnRfRaX8IgP0SuCb42rt9ABn9nHLVTmbTw1BUC196lkT1ChXRt%2BzZrbwng%2B03lGBnBa%2FSKjsdAviI9ZZwVTzlHtzQ1Z6pLXcGOp6cNFiLHLeM20ldHQibDWW%2B2mzjbUwyFB%2Bsqz1b%2BuZ3p90fuzP43ZxQPJjd81V2j%2FGu7oTJ3KBgJqUykuBiZYTNC2DIP2T213ouiEwqvIaS2p5VDoSYuT4ilhgX2LyiAW9AR0jXX%2FMDdxSToA8Js4VBP3xbYLfMMjg7b8GOqUBE6ZAMyFwpKeZzpGTyOagEwqcSag6swrQscP28U26LT7cj2hBKc35jKD8bSlL%2F8gS3iojgCt1KfUq9U5%2BKm%2BFg3AOds9uMo%2BGZojvzYsuli6rm%2BbbD7SPOyFK1Io0G0ug%2FJUj1wpUexb1S1F8f%2BS%2BsR9dnBbZ%2BZtbVWbpwhdrFtBJ79VV55JSYsWpZSbIQtFBrV5yWtQ91hpNBAnqsy2KeE%2B2nnEX&X-Amz-Signature=b9c8acd928857e74b8acbf0c1d593b687606d8eb8950dc19d4c0f30ed84551c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
