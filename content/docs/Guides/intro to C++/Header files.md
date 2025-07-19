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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIBPZPZN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIZKZiE%2FEtEFZRuyp3W9OeYcnaqryjEwGPmJX%2F1DhwvAIhAInvHT%2FTFufbALDqTrA1y2Lj08t%2BpWbokcvTN1LG4qSGKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZ%2FQ%2BuxJKPyxCvjmAq3APGYHs8f4hhi%2Bsv5or9KGQ2N4p%2FfF6X9CaLuXE75chYrBZVpVq1xjGJ8sVcCVktAPXIF9WtLu5XaVklXhNnTYex7ZCHzYkHF7WYmr%2Fun0K35fGlG3aPnJvMZzxJRq8yRlge6nohe7zxBp3X3VLujZPsxEJKYxpUCXskORetVPx0bRWkjmxiZTeCY41eyX7Siizkn8q3fdEJ%2FE1LZw46ISI%2BR3FOYQrUpEF2Plh9WpEpisXtxO0isCXPAi5Y5LJTlhrMajWjonsw1%2BfXWs8%2B4Iv83JIUWYYMPmpMo5bTI1%2FEJB7zTK3v9s6aZz0JM%2BOLtY9BL1yBtR3PjTQALA43yQ9%2BxoTV%2BqOHZfLP%2BWptspLPJeJBqEbp826pxZ5O0uZnUBolh5MOnP6b2e5L2f7PLBXS%2FD0K7AH9osWNuQbbV%2FgAHPiVQCbOM8jkr5HC74COcK3TOysA4npBCWCjhQiWquAVDZwT1jFHFrIg4x9XkRP7HV6c%2Ff7MSPb5IVT2Z6NRj5szIvfQqkgP3Q0B78JSgn%2Bk2Tjk%2FMZzVDXBVVOiz1ORjWZngZ9P0QT53Bno4Xsw2bH9GGTSTYUb9wmrGNwTu9qt%2BgEk1Kt1aV7r9EClnHCN6KyTCXngQNWU1UkkijCS%2BOvDBjqkAfbkzNREV6PNSy39%2B8ylLg2yw%2BUhHhul%2BAn0E0jvBVJrHAPni9de5dC1wFJw8BAafnEULUu5%2BqMj1VGlX%2FzbqOQEB0fUy0P2TI9DfRIOq7W%2FReKHZ5fKce7dnVsAvPoFvw2VF1%2FaYjul2uB7Ow7EP4UvBnpWIdC7gSFGnADHIMgcavjlzlUsr9KNgkDgYs6JW8jDqA2SCcw404QcfZiZzZA6nRYJ&X-Amz-Signature=be24dc9c3effb9da7214887e8606b9f0f09d31c1f18cdad9abbe6abc9414e4cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
