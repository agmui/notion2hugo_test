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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EMQZMAI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDbjNqJ5Lu2K5jaKKSyhtCaK8adab1%2Bnja4%2F7tuRkHYFAIgVpVL3T2kI%2FFaGkX71d73VoDEt4AfeHWTeKxRCm9vt2sqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMN6v3R0cS%2FiIiBqCrcA%2FRVRB%2B0vxx6TAdesFijSi0nmYnTC%2Fk4XipRCwmhp2HvpT9NAfcy%2BtN%2Fp0r9qvflOA4nNOqhqCUjxqRcGM5yzXe844zHDpopOs%2F1sa%2FOKCKawMsGdOG4YgLzdJqYSF65aqGuymUgM50%2FbBqfvkA5yBNCfchex%2BEq6nYMcRtVwI4hkZJmfoCcFLRex58xIthgh2FH9IqS2OJalAQu0brFQCXLuHuvN4wl8aHUo23uXUXo6jztMJuMYz5jAZyHnKcA3g7YyygjP0po%2B9Rgg%2BY0Q%2FC9QccnpUzgdcxbTgi5P33ycgGnBDSai0jUYV5BGCfQVy8qWgSBlJubedBqOWUpH%2BfjVNuawpWD2KD%2BKL%2Fa4lhqarfj9atefcpKCQ%2FTDM7CxGAIFLPJRgPjDM5hQ9CeVp6hhAQW9LcBlaMCOJP7ppKUMkW7%2BWmflVJ6%2Fh7kZ76sJ2XWD%2FnrILdhmAvjr8E7Opakzle%2BVa73cQUP8ySTPARfLz2fYNxxclDQ5nVthThSrVZ7g1KtCc%2BRuvOzeGYZkiuboMuy7RQTF6bJSVz17hFDLqhJaVa%2Ff8UL%2Fuosc4rRzlQkGyKg9N5jxIjy1OSYOSOq8wiOHdDGgHi%2Bb5Mtvx4fRDM%2FVabMmm9YvzqbMKOT%2BMEGOqUBqdFzy6SVQAbhqqrsh3HqKaZ%2BJ2aSjw%2F8sUxXesUPS5KBm276Pj90qGW%2FEmDy%2FZiO%2BFnqQ%2FLkHo5ljBfk9W6elJAwDrdoFP9p5FKX2lM4GtFS%2FS8jyi25PwZwC%2Ft9h1ewbApAPMcgXt%2FU5ANDrCHYMUZ6eAyYlOJpYcfl7C2yJc7Yu%2FHatONKpNQeKIYa88oRM9xgIybHZBprpyObUbqWzKd0%2FlRj&X-Amz-Signature=fcb2dab4e811c2ad9a9dc5d9a22beecab3704e101eb16e5dd10c108f14eb3ec8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
