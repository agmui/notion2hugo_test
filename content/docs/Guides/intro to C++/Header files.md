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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYY5FGFA%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4bcW27ML%2FtDcZKZr%2B5Pmjn8y1cgY%2BluqeHRNpInkjGAiBKqPkAGASAhlCwAv183wpT2Mrn1%2F4EmywWkuLy4%2F%2Fsuir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM97M7L3P8BV1UWU0LKtwDGKydFGsDgwEQiZUC0Rfa9kno1e27cOgH7UEe2%2FwDFs5Z2kFEh2pFb9lEW4Vuzc9lJis395VouYreyi66LRJaq93TQL9cEgY0Exygk%2BjkYYX5c%2FIKtki1VNB7qPE3m9w2QS03uo7YiE3obsaLhdoaQeUfxM5bhbL5E%2FV1%2F8diZcotgpNLy%2FauHvZ%2BCXHltGHuffq7ubwpicULSwNYQUHvfhHJz1fw5q9ULACyH3wSNg%2FT3ec1QyMc6MubARUUjU1gXdgQHjmxtyyJoApyOl%2FTvyPK0gKadd%2FBXUwMggTypIBHrf90DnF0ooThURwu0Nv6GGtxZPHLKRPPeMqLQznR6y%2FyDn23VKeJAAcUl%2BF6kQ1ivlkXwvbEHcmPKpmFP7qSJXl6UkVEXcR4DAvm%2FF2pr7zQkaQOKSpxkjBNo2MuDLjnFpn%2FTb8Oi47BPQ9wmoMs21vJIhVPVNcOD2Y2tOuH0%2BPcWPhjpuw%2FpnQ8u2%2BscRv0ZR4Y7w4xzYTKnagk2KipzWBC9ucaK2P3PCUQMpSZsMIidMtWUK4sjaAt3lsbaaoIU50zGn%2FzuczXvbHahyHWX2bDycJ5N2tjXBLrIlmapXWQQjGw2ExqBKvkuay6RgwJU2N62Xw22hJRNmQwjo2SvwY6pgH34W%2F%2FbsZ23qJRwiogO44yzjecgcCqMFOej1W%2FesjK%2Btc9yiuxDQw%2FmP8S6NVAPQQT%2FvEkYnZB6Gafu7UXYIqDtZmAmWl0s7WTMizCteRHXSyM4ReAC08rn%2B7sKPHx1Ev9y2k5r3434ztBbgz4SXXK%2F%2Fs7aGwuSvnXEXmxPOEoRiS6gfR7LTByoz29COwi2a6LQRRVbFfxPOqnYQxwXqPNxo9m4Nn%2F&X-Amz-Signature=8daa21609e597842a0f7ab8fcd75ef89031d7cd72f1f3c5273eb312de78d98a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
