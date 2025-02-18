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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCBBOKLQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQD3iN6j8NRQFCF4f3Ttwdko7N6ZdbLlebz8yAIyc8Gt5AIgHNlnmspQeAlDB8hCk6BRaNVRZU%2BPLyR7ItAEM12AsDEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIfDCet63T%2ByV4JiircA1563ODw4zAO2u%2BArdPg2kMPm1KnEasg4QlVgEq6oP%2Bu7KniktpcuyTmVoU0hrgjYlmAoAczHFimYBqTvkozVwce4hfUKX3w8zgju2mjaUtXj9Wu0uhmnT9sK1lfdwPuLbQ0mTcYMNQkOjYDtfng3BZW2orUATEVUGaas22foLPdWhloYAMfoZwnJGLp9zX36QXqURKaX1sXY1IkySdRQTacAT%2F%2B49K9vEkloCzY5IG8sba5eBwe2y2c3QE5KK0UEj%2BKVW1GpiffIGXE1hJk0uLT1mRAWizZprM997fj%2BcyhAwZNngO%2BpA1hYVZ6EhE%2BbJvy3XdcTqylJTkNY1cZogc43YILiOZBu2uJrMNpmZrsoL3F%2B%2BkavDhqdpPHFoiTdZqayfFf%2FY8Ak8aY9ccU8w35kO1tpphDsJtn2MGd9NpXj6KOdR49O1i03OcfpCbvR9wOZ4XwaPLSZ696FoA4tLOuxEagO95OZvVQim7%2FzN%2BT7NB9UDJgycxixxIopLPZ1njMQI%2F3EA97P8fzzTGNaZJDsXSeJa9hHiFNLNfz23DhIwXNaWGHhprRRo%2FXlDOKrKJRk%2FRrGaqAwqsSY%2BKprHwcdZw3oAsvWFeOSIEJsOv327O2XifQxwYxMAUWMIOy0r0GOqUBD3U7K%2FZdyuueTj8CrgyKzDW%2BtZDqhMU967j1FZ474XQg5xZ0HmpOeLr1jfA0z8Av4Vn8m8ackZnnjjQntGXpXncAcl5VNvpzs95ktWA99dJYyXaaZMnVj5fFs1tOKn%2B7XtpPcjG3DdImkjBVf1VCwg9XRzttLAsLoZ%2FCrBYTWVJI1GopbFFtGeX9bidv7bUveSs%2Fb86hrMLiwU50zy79Kv6%2BYLzb&X-Amz-Signature=0ee7d432963cdbd2c22a30a6d2e46fffc5a7a6719d5b4e5e3ef79b443b3a191d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
